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
import SaveIcon from '@mui/icons-material/Save';
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
      <Typography
        variant="h4"
        color="initial"
        style={{ textAlign: "center", fontWeight: "bold", color: "#394867" }}
      >
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
        <span>
          <CancelButton
            onClick={() => navigate("/")}
            variant="outlined"
            startIcon={<CancelIcon />}
          >
            Cancel
          </CancelButton>

          <StyledButton onClick={() => addBlogDetails()} variant="contained" startIcon={<SaveIcon />}>
            Save changes
          </StyledButton>
        </span>
      </FormControl>
    </Container>
  );
};

export default EditBlog;
