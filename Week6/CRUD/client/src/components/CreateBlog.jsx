import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { addBlog } from "../service/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const StyledButton = styled(Button)`
  width: 30%;
  display: block;
  margin: auto;
  height: 50px;
  margin-top: 20px;
  font-size: 18px;
`;

const initialFormState = { title: "", body: "", image: "" };

const AddBlog = () => {
  const [blog, setBlog] = useState(initialFormState);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const addBlogDetails = async () => {
    await addBlog(blog);
    navigate("/");
  };

  return (
    <Container>
      <Typography variant="h4" color="initial" style={{ textAlign: "center" }}>
        Create new blog
      </Typography>
      <FormControl>
        <InputLabel>Title</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="title" />
      </FormControl>
      <FormControl>
        <InputLabel>Body</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="body" />
      </FormControl>
      <FormControl>
        <InputLabel>Image</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="image" />
      </FormControl>
      <FormControl>
        <StyledButton onClick={() => addBlogDetails()} variant="contained">
          Create
        </StyledButton>
      </FormControl>
    </Container>
  );
};

export default AddBlog;
