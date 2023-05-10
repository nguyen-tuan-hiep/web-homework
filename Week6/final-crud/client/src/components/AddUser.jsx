import { FormGroup, FormControl, InputLabel, Input, Button, Typography, styled, FormLabel, FormHelperText } from "@mui/material";
import { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div{
    margin-top: 20px;
  }
`

const initialFormState = { name: 'Your name here', username: '' }

const AddUser = () => {

  const [user, setUser] = useState(initialFormState);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const addUserDetails = async () => {
    await addUser(user);
    navigate('/all');
  }

  return (
    <Container>
      <Typography variant="h4" color="initial">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name"/>
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <Button onClick={() => addUserDetails()} variant="contained">Add user</Button>
      </FormControl>
    </Container>
  )
}

export default AddUser;