import {
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	styled,
	Button,
} from "@mui/material";
import { getAllUsers, deleteUser } from "../service/api";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
	width: 90%;
	margin: 50px auto 0 auto;
`;
const StyledTableBody = styled(TableRow)`
	& > td {
		font-size: 20px;
	}
`;

const StyledTableHead = styled(TableRow)`
	background: #2A2F4F;
	& > th {
		color: #fff;
		font-size: 20px;
	}
`;

const AllUsers = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		getUsersDetails();
	}, []);

	const getUsersDetails = async () => {
		const response = await getAllUsers();
		console.log(response);
		setUsers(response.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getUsersDetails();
  }

	return (
		<StyledTable>
			<TableHead>
				<StyledTableHead>
					<TableCell>ID</TableCell>
					<TableCell>Name</TableCell>
					<TableCell>Username</TableCell>
					<TableCell>Email</TableCell>
					<TableCell></TableCell>
				</StyledTableHead>
			</TableHead>
			<TableBody>
				{users.map((user) => (
					<StyledTableBody>
						<TableCell>{user._id}</TableCell>
						<TableCell>{user.name}</TableCell>
						<TableCell>{user.username}</TableCell>
						<TableCell>{user.email}</TableCell>
						<TableCell>
							<Button
								style={{ marginRight: 10 }}
								variant="outlined"
								startIcon={<DeleteIcon />}
								onClick={() => deleteUserData(user._id)}>
								Delete
							</Button>
							<Button
								variant="outlined"
								startIcon={<EditIcon />}
								component={Link}
								to={`/edit/${user._id}`}>
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
