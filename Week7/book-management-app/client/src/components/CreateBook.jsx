import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { createBookController } from "../controllers/book.controller";
import { useNavigate } from "react-router-dom";
import CancelButton from "./button/CancelButton";
import CreateButton from "./button/CreateButton";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 3% auto 5% auto;
  & > div {
    margin-top: 20px;
  }
`;

const initialFormState = {
  title: "",
  author: "",
  description: "",
  year: "",
  price: "",
  image_url: "",
  isbn: "",
  publisher: "",
  genre: "",
  pages: "",
  category: "",
};

const CreateBook = () => {
  const [book, setBook] = useState(initialFormState);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const createBookHandler = async () => {
    await createBookController(book);
    navigate("/");
  };

  return (
    <Container>
      <Typography
        variant="h4"
        color="initial"
        style={{ textAlign: "center", fontWeight: "bold", color: "#394867" }}
      >
        Create new book
      </Typography>
      <FormControl>
        <InputLabel>Title</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="title" />
      </FormControl>
      <FormControl>
        <InputLabel>Author</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="author" />
      </FormControl>
      <FormControl>
        <InputLabel>Description</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="description" />
      </FormControl>
      <FormControl>
        <InputLabel>Publisher</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="publisher" />
      </FormControl>
      <FormControl>
        <InputLabel>Year</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="year" />
      </FormControl>
      <FormControl>
        <InputLabel>Category</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="category" />
      </FormControl>
      <FormControl>
        <InputLabel>Genre</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="genre" />
      </FormControl>
      <FormControl>
        <InputLabel>Pages</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="pages" />
      </FormControl>
      <FormControl>
        <InputLabel>Price</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="price" />
      </FormControl>
      <FormControl>
        <InputLabel>Image</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="image_url" />
      </FormControl>
      <FormControl>
        <CancelButton />
        <CreateButton onClick={() => createBookHandler()} />
      </FormControl>
    </Container>
  );
};

export default CreateBook;
