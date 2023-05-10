import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)`
  width: 35%;
  margin-left: 65%;
  height: 50px;
  margin-top: 20px;
  font-size: 16px;
  display: flex;
  background-color: #4d5a76;
  &:hover {
    background-color: #606c85;
  }
`;

const CreateButton = ({ onClick }) => { // detructure onClick from props
  return (
    <StyledButton
      onClick={onClick}
      variant="contained"
      startIcon={<AddCircleOutlineIcon />}
    >
      Create
    </StyledButton>
  );
};

export default CreateButton;
