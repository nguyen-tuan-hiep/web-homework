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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const StyledButton = styled(Button)`
  width: 35%;
  margin-left: 65%;
  height: 50px;
  margin-top: 20px;
  font-size: 16px;
  display: flex;
  background-color: #394867;

  &:hover {
    background-color: #606c85;
  }
`;

const CancelButton = styled(Button)`
  width: 35%;
  height: 50px;
  margin-left: 0%;
  margin-top: 20px;
  font-size: 16px;
  display: flex;
  position: absolute;
  border-color: #394867;
  color: #394867;
  &:hover {
    background-color: #d8d8d8;
    border-color: #394867;
  }
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
      <Typography
        variant="h4"
        color="initial"
        style={{ textAlign: "center", fontWeight: "bold", color: "#394867" }}
      >
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
        <CancelButton
          onClick={() => navigate("/")}
          variant="outlined"
          startIcon={<CancelIcon />}
        >
          Cancel
        </CancelButton>
        <StyledButton
          onClick={() => addBlogDetails()}
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
        >
          Create
        </StyledButton>
      </FormControl>
    </Container>
  );
};

export default AddBlog;
