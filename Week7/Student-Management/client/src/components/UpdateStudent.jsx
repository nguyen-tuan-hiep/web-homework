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
import {
  getStudentByIdController,
  updateStudentController,
} from "../service/api";
import { useNavigate, useParams } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../DatePicker.css";
import { format } from "date-fns";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 8% auto 20px auto;
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
  background-color: #42a5f5;
`;

const CancelButton = styled(Button)`
  width: 35%;
  height: 50px;
  margin-left: 0%;
  margin-top: 20px;
  font-size: 16px;
  display: flex;
  position: absolute;
`;

const initialFormState = {
  Fullname: "",
  StudentId: "",
  Email: "",
  Class: "",
  DateOfBirth: null,
};

const UpdateStudent = () => {
  const [students, setStudents] = useState(initialFormState);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getStudentByIdHandler();
  }, []);

  const getStudentByIdHandler = async () => {
    const response = await getStudentByIdController(id);
    setStudents(response.data);
  };

  const onValueChange = (e) => {
    setStudents({ ...students, [e.target.name]: e.target.value });
  };

  const updateStudentHandler = async () => {
    // await updateStudentController(students, id);
    navigate(await updateStudentController(students, id) ? "/" : `/update/${id}`);
  };

  const onDateChange = (date) => {
    setStudents({ ...students, DateOfBirth: date });
  };

  const formattedDate = students.DateOfBirth
    ? format(new Date(students.DateOfBirth), "dd-MM-yyyy")
    : "";

  return (
    <Container>
      <Typography
        variant="h4"
        color="initial"
        style={{ textAlign: "center", fontWeight: "bold", color: "#42a5f5" }}
      >
        Update students
      </Typography>
      <FormControl>
        <InputLabel>Fullname</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="Fullname"
          value={students.Fullname}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Student Id</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="StudentId"
          value={students.StudentId}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Class</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="Class"
          value={students.Class}
        />
      </FormControl>
      <FormControl>
        <DatePicker
          selected={
            students.DateOfBirth ? new Date(students.DateOfBirth) : null
          }
          onChange={onDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Date of birth"
          className="datepicker"
          value={formattedDate}
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
          <StyledButton
            onClick={() => updateStudentHandler()}
            variant="contained"
            startIcon={<SaveIcon />}
          >
            Save changes
          </StyledButton>
        </span>
      </FormControl>
    </Container>
  );
};

export default UpdateStudent;
