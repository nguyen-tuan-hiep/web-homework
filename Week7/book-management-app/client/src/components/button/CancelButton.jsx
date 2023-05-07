import { Button, styled } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";

const StyleCancelButton = styled(Button)`
  width: 35%;
  height: 50px;
  margin-left: 0%;
  margin-top: 20px;
  font-size: 16px;
  display: flex;
  position: absolute;
  border-color: #394867;
  color: #394867;
  &:hover {
    background-color: #d8d8d8;
    border-color: #394867;
  }
`;

const CancelButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <StyleCancelButton
        onClick={() => navigate("/")}
        variant="outlined"
        startIcon={<CancelIcon />}
      >
        Cancel
      </StyleCancelButton>
    </div>
  );
};

export default CancelButton;
