import { Link } from "react-router-dom";
import { Button, styled } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const StyledButton = styled(Button)`
  border-color: #394867;
  color: #394867;
`;

const UpdateButton = ({ book: book }) => {
  return (
    <StyledButton
      variant="outlined"
      startIcon={<EditIcon />}
      component={Link}
      to={`/update/${book._id}`}
    >
      Update
    </StyledButton>
  );
};

export default UpdateButton;
