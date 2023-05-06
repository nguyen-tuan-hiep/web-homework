import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
  Button,
} from "@mui/material";
import { getAllBlogs, deleteBlog } from "../service/api";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";


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
    background-color: ${({ theme }) =>
      theme.palette.action.hover}; // accessing the theme
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

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogsDetails();
  }, []);

  const getBlogsDetails = async () => {
    const response = await getAllBlogs();
    setBlogs(response.data);
  };

  const deleteBlogData = async (id) => {
    await deleteBlog(id);
    getBlogsDetails();
  };

  return (
    <StyledTable>
      <TableHead>
        <StyledTableHead>
          <TableCell style={{borderRadius: "15px 0 0 0"}}>ID</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Body</TableCell>
          <TableCell>Image</TableCell>
          <TableCell style={{borderRadius: "0 15px 0 0"}}></TableCell>
        </StyledTableHead>
      </TableHead>
      <TableBody>
        {blogs.map((blog) => (
          <StyledTableBody key={blog._id}>
            <TableCell>{blog._id}</TableCell>
            <TableCell>
              <div
                style={{ margin: "0 auto", padding: "0", maxWidth: "180px", wordWrap:"break-word" }}
              >
                {blog.title}
              </div>
            </TableCell>
            <TableCell>
              <div
                style={{ margin: "0 auto", padding: "0", maxWidth: "350px", wordWrap:"break-word" }}
              >
                {blog.body}
              </div>
            </TableCell>
            <TableCell>
              <img
                src={blog.image}
                alt={blog.image}
                style={{ display: "block", margin: "0 auto", width: "250px", wordWrap:"break-word" }}
              />
            </TableCell>
            <TableCell>
              <Button
                // style={{ marginRight: 10 }}
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => deleteBlogData(blog._id)}
                style={{ marginRight: "10px", borderColor: "#394867", color: "#394867" }}
              >
                Delete
              </Button>
              <Button
                variant="outlined"
                startIcon={<EditIcon />}
                component={Link}
                to={`/edit/${blog._id}`}
                style={{  marginRight: "6%", borderColor: "#394867", color: "#394867" }}
              >
                Edit
              </Button>
            </TableCell>
          </StyledTableBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllBlogs;
