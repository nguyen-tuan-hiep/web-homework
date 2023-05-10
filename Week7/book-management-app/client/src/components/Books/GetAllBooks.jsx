import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getAllBooksController, deleteBookController } from "./book.controller";
import DeleteButton from "../Button/DeleteButton";
import UpdateButton from "../Button/UpdateButton";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 100px auto 100px auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  border-radius: 15px;
`;
const StyledTableBody = styled(TableRow)`
  & > td {
    font-size: 16px;
  }
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.palette.action.hover};
  }
  &:nth-of-type(even) {
    background-color: white;
  }
`;

const StyledTableHead = styled(TableRow)`
  background: #4d5a76;
  & > th {
    color: #fff;
    font-size: 18px;
    text-align: center;
    font-weight: 600;
  }
`;

const StyledTableCell = styled(TableCell)`
  border-right: 1px solid #c4c8d1;
`;

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
    await deleteBookController(id);
    getAllBooksHandler();
  };

  return (
    <StyledTable>
      <TableHead>
        <StyledTableHead>
          <StyledTableCell style={{ borderRadius: "15px 0 0 0" }}>
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
          <TableCell style={{ borderRadius: "0 15px 0 0", width: "10px" }}>
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
            <StyledTableCell style={{ maxWidth: "60px" }}>
              {book.publisher}
            </StyledTableCell>
            <StyledTableCell>{book.year}</StyledTableCell>
            <StyledTableCell style={{ maxWidth: "40px" }}>
              {book.category}
            </StyledTableCell>
            <StyledTableCell style={{ maxWidth: "80px" }}>
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
              <UpdateButton book={book} />
              <DeleteButton onClick={() => deleteBookHandler(book._id)} />
            </TableCell>
          </StyledTableBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default GetAllBooks;
