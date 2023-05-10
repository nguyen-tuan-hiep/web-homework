import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
  Button,
} from "@mui/material";
import {
  getAllStudentsController,
  deleteStudentController,
} from "../service/api";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 120px auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 15px;
`;
const StyledTableBody = styled(TableRow)`
  & > td {
    font-size: 18px;
    text-align: center;
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
  background: #42a5f5;
  & > th {
    color: #fff;
    font-size: 20px;
    text-align: center;
    font-weight: 600;
  }
`;

const GetAllStudents = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getAllStudentsHandler();
  }, []);

  const getAllStudentsHandler = async () => {
    const response = await getAllStudentsController();
    setStudents(response.data);
  };

  const deleteStudentData = async (id) => {
    await deleteStudentController(id);
    getAllStudentsHandler();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    }-${year}`;
  };

  return (
    <StyledTable style={{ marginTop: "100px" }}>
      <TableHead>
        <StyledTableHead>
          {/* <TableCell style={{borderRadius: "15px 0 0 0"}}>ID</TableCell> */}
          <TableCell style={{ borderRadius: "15px 0 0 0" }}>Fullname</TableCell>
          <TableCell>Student ID</TableCell>
          <TableCell>DOB</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Class</TableCell>
          <TableCell>Cohort</TableCell>
          <TableCell style={{ borderRadius: "0 15px 0 0" }}></TableCell>
        </StyledTableHead>
      </TableHead>
      <TableBody>
        {students.map((student) => (
          <StyledTableBody key={student._id}>
            {/* <TableCell>{student._id}</TableCell> */}
            <TableCell style={{ textAlign: "left" }}>
              <div
                style={{
                  margin: "0 auto",
                  padding: "0",
                  maxWidth: "180px",
                  wordWrap: "break-word",
                }}
              >
                {student.Fullname}
              </div>
            </TableCell>
            <TableCell>
              <div
                style={{
                  margin: "0 auto",
                  padding: "0",
                  maxWidth: "350px",
                  wordWrap: "break-word",
                }}
              >
                {student.StudentId}
              </div>
            </TableCell>
            <TableCell>
              <div
                style={{
                  margin: "0 auto",
                  padding: "0",
                  maxWidth: "350px",
                  wordWrap: "break-word",
                }}
              >
                {formatDate(student.DateOfBirth)}
              </div>
            </TableCell>
            <TableCell style={{ textAlign: "left" }}>
              <div
                style={{
                  margin: "0 auto",
                  padding: "0",
                  maxWidth: "350px",
                  wordWrap: "break-word",
                }}
              >
                {student.Email}
              </div>
            </TableCell>
            <TableCell>
              <div
                style={{
                  margin: "0 auto",
                  padding: "0",
                  maxWidth: "350px",
                  wordWrap: "break-word",
                }}
              >
                {student.Class}
              </div>
            </TableCell>
            <TableCell>
              <div
                style={{
                  margin: "0 auto",
                  padding: "0",
                  maxWidth: "350px",
                  wordWrap: "break-word",
                }}
              >
                {student.Cohort}
              </div>
            </TableCell>
            <TableCell>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => deleteStudentData(student._id)}
                style={{ borderColor: "#42a5f5", color: "#42a5f5", marginRight:"10px" }}
              >
                Delete
              </Button>
              <Button
                variant="outlined"
                startIcon={<EditIcon />}
                component={Link}
                to={`/update/${student._id}`}
                style={{ borderColor: "#42a5f5", color: "#42a5f5" }}
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

export default GetAllStudents;
