import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
  styled,
} from "@mui/material";
import { useState, useEffect } from "react";
import { getBlog, updateBlog } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const StyledButton = styled(Button)`
  width: 35%;
  display: block;
  margin: auto;
  height: 50px;
  margin-top: 20px;
  font-size: 16px;
`;

const initialFormState = { title: "", body: "", image: "" };

const EditBlog = () => {
  const [blog, setBlog] = useState(initialFormState);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBlogData();
  }, []);

  const getBlogData = async () => {
    const response = await getBlog(id);
    setBlog(response.data);
  };

  const onValueChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const addBlogDetails = async () => {
    await updateBlog(blog, id);
    navigate("/");
  };

  return (
    <Container>
      <Typography variant="h4" color="initial" style={{ textAlign: "center" }}>
        Update blog
      </Typography>
      <FormControl>
        <InputLabel>Title</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="title"
          value={blog.title}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Body</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="body"
          value={blog.body}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Image</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="image"
          value={blog.image}
        />
      </FormControl>
      <FormControl>
        <StyledButton onClick={() => addBlogDetails()} variant="contained">
          Save changes
        </StyledButton>
      </FormControl>
    </Container>
  );
};

export default EditBlog;
