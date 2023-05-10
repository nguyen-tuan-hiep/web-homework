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
import { getUser, updateUser } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
	width: 50%;
	margin: 5% auto 0 auto;
	& > div {
		margin-top: 20px;
	}
`;

const initialFormState = { name: "Your name here", username: "" };

const EditUser = () => {
	const [user, setUser] = useState(initialFormState);
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		getUserData();
	}, []);

	const getUserData = async () => {
		const response = await getUser(id);
		setUser(response.data);
	};

	const onValueChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const addUserDetails = async () => {
		await updateUser(user, id);
		navigate("/all");
	};

	return (
		<Container>
			<Typography
				variant="h4"
				color="initial">
				Edit User
			</Typography>
			<FormControl>
				<InputLabel>Name</InputLabel>
				<Input
					onChange={(e) => onValueChange(e)}
					name="name" value={user.name}
				/>
			</FormControl>
			<FormControl>
				<InputLabel>Username</InputLabel>
				<Input
					onChange={(e) => onValueChange(e)}
          name="username"
          value={user.username}
				/>
			</FormControl>
			<FormControl>
				<InputLabel>Email</InputLabel>
				<Input
					onChange={(e) => onValueChange(e)}
          name="email"
          value={user.email}
				/>
			</FormControl>
			<FormControl>
				<Button
					onClick={() => addUserDetails()}
					variant="contained">
					Edit User
				</Button>
			</FormControl>
		</Container>
	);
};

export default EditUser;
