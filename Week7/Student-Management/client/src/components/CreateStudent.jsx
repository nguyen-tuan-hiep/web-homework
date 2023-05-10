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
import { createStudentController } from "../service/api";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../DatePicker.css";

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

const CreateStudent = () => {
  const [students, setStudents] = useState(initialFormState);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setStudents({ ...students, [e.target.name]: e.target.value });
  };

  const createStudentHandler = async () => {
    // await createStudentController(students);
    // navigate("/");
    navigate((await createStudentController(students)) ? "/" : "/create");
  };

  const onDateChange = (date) => {
    const selectedDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    setStudents({ ...students, DateOfBirth: selectedDate });
  };

  return (
    <Container>
      <Typography
        marginTop="50px"
        variant="h4"
        color="initial"
        style={{ textAlign: "center", fontWeight: "bold", color: "#42a5f5" }}
      >
        Create new students
      </Typography>
      <FormControl>
        <InputLabel>Fullname</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Fullname" />
      </FormControl>
      <FormControl>
        <InputLabel>Student Id</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="StudentId" />
      </FormControl>
      <FormControl>
        <InputLabel>Class</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Class" />
      </FormControl>
      <FormControl>
        <DatePicker
          selected={students.DateOfBirth}
          onChange={onDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Date of birth"
          className="datepicker"
          selectsStart
          showYearDropdown
          scrollableYearDropdown
          startDate={students.DateOfBirth}
          endDate={students.DateOfBirth}
        />
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
          onClick={() => createStudentHandler()}
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
        >
          Create
        </StyledButton>
      </FormControl>
    </Container>
  );
};

export default CreateStudent;
