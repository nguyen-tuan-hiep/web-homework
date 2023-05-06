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
  width: 85%;
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

const StyledTableCell = styled(TableCell)`
  border-radius: ${({ corner }) => (corner ? "0 15px 0 0" : "15px 0 0 0")};
`;

const AllUsers = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getUsersDetails();
  }, []);

  const getUsersDetails = async () => {
    const response = await getAllBlogs();
    console.log(response);
    setBlogs(response.data);
  };

  const deleteUserData = async (id) => {
    await deleteBlog(id);
    getUsersDetails();
  };

  return (
    <StyledTable>
      <TableHead>
        <StyledTableHead>
          <StyledTableCell>ID</StyledTableCell>
          <TableCell>Title</TableCell>
          <TableCell>Body</TableCell>
          <TableCell>Image</TableCell>
          <StyledTableCell corner></StyledTableCell>
        </StyledTableHead>
      </TableHead>
      <TableBody>
        {blogs.map((blog) => (
          <StyledTableBody key={blog._id}>
            <TableCell>{blog._id}</TableCell>
            <TableCell>
              <div
                style={{ margin: "0 auto", padding: "0", maxWidth: "180px" }}
              >
                {blog.title}
              </div>
            </TableCell>
            <TableCell>
              <div
                style={{ margin: "0 auto", padding: "0", maxWidth: "350px" }}
              >
                {blog.body}
              </div>
            </TableCell>
            <TableCell>
              <img
                src={blog.image}
                alt={blog.image}
                style={{ display: "block", margin: "0 auto", width: "250px" }}
              />
            </TableCell>
            <TableCell>
              <Button
                style={{ marginRight: 10 }}
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => deleteUserData(blog._id)}
              >
                Delete
              </Button>
              <Button
                variant="outlined"
                startIcon={<EditIcon />}
                component={Link}
                to={`/edit/${blog._id}`}
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

export default AllUsers;
