import { Button, styled } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const StyledButton = styled(Button)`
  width: 35%;
  margin-left: 65%;
  height: 50px;
  margin-top: 20px;
  font-size: 16px;
  display: flex;
  background-color: #394867;

  &:hover {
    background-color: #606c85;
  }
`;

const SaveChangesButton = ({ onClick }) => {
  return (
    <StyledButton
      variant="contained"
      startIcon={<SaveIcon />}
      onClick={onClick}
    >
      Save Changes
    </StyledButton>
  );
};

export default SaveChangesButton;
