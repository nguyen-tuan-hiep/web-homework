import DeleteIcon from "@mui/icons-material/Delete";
import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)`
  border-color: #394867;
  color: #394867;
  margin-top: 20px;
`;

const DeleteButton = ({ onClick }) => {
  return (
    <StyledButton
      variant="outlined"
      startIcon={<DeleteIcon />}
      onClick={onClick}
    >
      Delete
    </StyledButton>
  );
};

export default DeleteButton;
