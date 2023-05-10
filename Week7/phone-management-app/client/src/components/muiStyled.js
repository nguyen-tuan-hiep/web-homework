import {
    FormGroup,
    Typography,
    styled, Table, TableRow, Button,
} from "@mui/material";

export const Container = styled(FormGroup)`
  width: 50%;
  margin: 3% auto 5% auto;

  & > div {
    margin-top: 25px;
  }
`;

export const StyledTypography = styled(Typography)`
  text-align: center;
  font-size: 45px;
  font-weight: bold;
  color: #394867
`;

export const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 50px auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  border-radius: 15px;
`;

export const StyledTableBody = styled(TableRow)`
  & > td {
    font-size: 16px;
  }

  &:nth-of-type(odd) {
    background-color: ${({theme}) => theme.palette.action.hover};
  }

  &:nth-of-type(even) {
    background-color: white;
  }
`;

export const StyledCancelButton = styled(Button)`
  width: 35%;
  height: 50px;
  margin-left: 0;
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

export const StyledCreateButton = styled(Button)`
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

export const StyledDeleteButton = styled(Button)`
  border-color: #394867;
  color: #394867;
  margin-top: 20px;
`;

export const StyledSaveChangeButton = styled(Button)`
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

export const StyledUpdateButton = styled(Button)`
  border-color: #394867;
  color: #394867;
`;