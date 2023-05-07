import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
} from "@mui/material";
import {
  getAllBooksController,
  deleteBookController,
} from "../controllers/book.controller";
import { useEffect, useState } from "react";
import DeleteButton from "./button/DeleteButton";
import UpdateButton from "./button/UpdateButton";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 50px auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 15px;
`;
const StyledTableBody = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.palette.action.hover};
  }
  &:nth-of-type(even) {
    background-color: "grey";
  }
`;

const StyledTableHead = styled(TableRow)`
  background: #394867;
  & > th {
    color: #fff;
    font-size: 20px;
    text-align: center;
    font-weight: 600;
  }
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
          <TableCell style={{ borderRadius: "15px 0 0 0" }}>Title</TableCell>
          <TableCell>Author</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Publisher</TableCell>
          <TableCell>Year</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Genre</TableCell>
          <TableCell>Pages</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Image</TableCell>
          <TableCell style={{ borderRadius: "0 15px 0 0" }}>Actions</TableCell>
        </StyledTableHead>
      </TableHead>
      <TableBody>
        {books.map((book) => (
          <StyledTableBody key={book._id}>
            <TableCell
              style={{
                maxWidth: "10%",
                wordWrap: "break-word",
                fontWeight: "bold",
                padding: "30px",
              }}
            >
              {book.title}
            </TableCell>
            <TableCell
              style={{
                maxWidth: "10%",
                wordWrap: "break-word",
              }}
            >
              {book.author}
            </TableCell>
            <TableCell
              style={{
                maxWidth: "20%",
                wordWrap: "break-word",
              }}
            >
              {book.description}
            </TableCell>
            <TableCell style={{ maxWidth: "8%" }}>{book.publisher}</TableCell>
            <TableCell>{book.year}</TableCell>
            <TableCell style={{ maxWidth: "8%" }}>{book.category}</TableCell>
            <TableCell style={{ maxWidth: "8%" }}>{book.genre}</TableCell>
            <TableCell>{book.pages}</TableCell>
            <TableCell>{book.price}</TableCell>
            <TableCell>
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
            </TableCell>
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
