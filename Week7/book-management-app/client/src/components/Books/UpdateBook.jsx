import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
} from "@mui/material";
import { useState, useEffect } from "react";
import { getBookByIdController, updateBookController } from "./book.controller";
import { useNavigate, useParams } from "react-router-dom";
import CancelButton from "../Button/CancelButton";
import SaveChangesButton from "../Button/SaveChangesButton";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 3% auto 5% auto;
  & > div {
    margin-top: 25px;
  }
`;

const initialFormState = {
  title: "",
  author: "",
  description: "",
  year: "",
  price: "",
  image_url: "",
  publisher: "",
  genre: "",
  pages: "",
  category: "",
};

const UpdateBook = () => {
  const [book, setBook] = useState(initialFormState);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBookByIdHandler();
  }, []);

  const getBookByIdHandler = async () => {
    const response = await getBookByIdController(id);
    setBook(response.data);
  };

  const onValueChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const updateBookHandler = async () => {
    await updateBookController(book, id);
    navigate("/");
  };

  return (
    <Container>
      <Typography
        variant="h4"
        color="initial"
        style={{ textAlign: "center", fontWeight: "bold", color: "#394867" }}
      >
        Update book
      </Typography>
      <FormControl>
        <InputLabel>Title</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="title"
          value={book.title}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Author</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="author"
          value={book.author}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Description</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="description"
          value={book.description}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Publisher</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="publisher"
          value={book.publisher}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Year</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="year"
          value={book.year}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Category</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="category"
          value={book.category}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Genre</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="genre"
          value={book.genre}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Pages</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="pages"
          value={book.pages}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Price</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="price"
          value={book.price}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Image</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="image_url"
          value={book.image_url}
        />
      </FormControl>
      <FormControl>
        <CancelButton />
        <SaveChangesButton onClick={() => updateBookHandler()} />
      </FormControl>
    </Container>
  );
};

export default UpdateBook;
