import {
    TableHead,
    TableBody,
    TableCell,
} from "@mui/material";
import {useEffect, useState} from "react";
import {getAllBooksController, deleteBookController} from "../../controller/book.controller.js";
import {StyledTable, StyledTableHead, StyledTableCell, StyledTableBody} from "../muiStyled.js";
import {DeleteButton, UpdateButton} from "../button/Button.jsx";

const GetAllBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        getAllBooksHandler();
    }, []);

    const getAllBooksHandler = async () => {
        const response = await getAllBooksController();
        setBooks(response.data);
    };

    const deleteBookHandler = async (id) => {
        if (confirm(`Are you sure you want to delete`)) {
            await deleteBookController(id);
        }
        else return;
        await getAllBooksHandler().then(() => {});
    };

    return (
        <StyledTable>
            <TableHead>
                <StyledTableHead>
                    <StyledTableCell style={{borderRadius: "15px 0 0 0"}}>
                        Title
                    </StyledTableCell>
                    <StyledTableCell>Author</StyledTableCell>
                    <StyledTableCell>Description</StyledTableCell>
                    <StyledTableCell>Publisher</StyledTableCell>
                    <StyledTableCell>Year</StyledTableCell>
                    <StyledTableCell>Category</StyledTableCell>
                    <StyledTableCell>Genre</StyledTableCell>
                    <StyledTableCell>Pages</StyledTableCell>
                    <StyledTableCell>Price</StyledTableCell>
                    <StyledTableCell>Image</StyledTableCell>
                    <TableCell style={{borderRadius: "0 15px 0 0", width: "10px"}}>
                        Actions
                    </TableCell>
                </StyledTableHead>
            </TableHead>
            <TableBody>
                {books.map((book) => (
                    <StyledTableBody key={book._id}>
                        <StyledTableCell
                            style={{
                                maxWidth: "120px",
                                wordWrap: "break-word",
                                fontWeight: "bold",
                                padding: "25px",
                            }}
                        >
                            {book.title}
                        </StyledTableCell>
                        <StyledTableCell
                            style={{
                                wordWrap: "break-word",
                                maxWidth: "100px",
                            }}
                        >
                            {book.author}
                        </StyledTableCell>
                        <StyledTableCell
                            style={{
                                maxWidth: "250px",
                                wordWrap: "break-word",
                            }}
                        >
                            {book.description}
                        </StyledTableCell>
                        <StyledTableCell style={{maxWidth: "60px"}}>
                            {book.publisher}
                        </StyledTableCell>
                        <StyledTableCell>{book.year}</StyledTableCell>
                        <StyledTableCell style={{maxWidth: "40px"}}>
                            {book.category}
                        </StyledTableCell>
                        <StyledTableCell style={{maxWidth: "80px"}}>
                            {book.genre}
                        </StyledTableCell>
                        <StyledTableCell>{book.pages}</StyledTableCell>
                        <StyledTableCell>{book.price}</StyledTableCell>
                        <StyledTableCell>
                            <img
                                src={book.image_url}
                                alt={book.image_url}
                                style={{
                                    display: "block",
                                    margin: "0 auto",
                                    width: "100px",
                                    height: "150px",
                                    wordWrap: "break-word",
                                }}
                            />
                        </StyledTableCell>
                        <TableCell>
                            <UpdateButton book={book}/>
                            <DeleteButton onClick={() => deleteBookHandler(book._id)}/>
                        </TableCell>
                    </StyledTableBody>
                ))}
            </TableBody>
        </StyledTable>
    );
};

export default GetAllBooks;
