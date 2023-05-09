import {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getAllPhonesController, deletePhoneController } from "../../controller/phone.controller.js";
import { UpdateButton, DeleteButton } from "../Button/Button.jsx";
import {StyledTable, StyledTableBody} from "../muiStyled.js";

const StyledTableHead = styled(TableRow)`
  background: #424242;
  & > th {
    color: #fff;
    font-size: 18px;
    text-align: center;
    font-weight: 600;
  }
`;

const GetAllPhones = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    getAllPhonesHandler().then(() => {});
  }, []);

  const getAllPhonesHandler = async () => {
    const response = await getAllPhonesController();
    setPhones(response.data);
  };

  const deletePhoneHandler = async (id) => {
    await deletePhoneController(id);
    await getAllPhonesHandler();
  };

  return (
    <StyledTable>
      <TableHead>
        <StyledTableHead>
          <TableCell style={{ borderRadius: "15px 0 0 0" }}>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Brand</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Color</TableCell>
          <TableCell>Storage</TableCell>
          <TableCell>Display</TableCell>
          <TableCell>Camera</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Image</TableCell>
          <TableCell style={{ borderRadius: "0 15px 0 0" }}></TableCell>
        </StyledTableHead>
      </TableHead>
      <TableBody>
        {phones.map((phone) => (
          <StyledTableBody key={phone._id}>
            <TableCell style={{maxWidth: "100px", wordWrap: "break-word" }}>
              {phone._id}
            </TableCell>

            <TableCell>
              <div
                style={{ margin: "0 auto", padding: "0", maxWidth: "150px", wordWrap: "break-word" }}
              >
                {phone.name}
              </div>
            </TableCell>
            <TableCell>
              <div
                style={{ margin: "0 auto", padding: "0", maxWidth: "150px", wordWrap: "break-word" }}
              >
                {phone.brand}
              </div>
            </TableCell>
            <TableCell>
              <div
                style={{ margin: "0 auto", padding: "0", maxWidth: "100px", wordWrap: "break-word" }}
              >
                {phone.price}
              </div>
            </TableCell>
            <TableCell>
              <div
                style={{ margin: "0 auto", padding: "0", maxWidth: "100px", wordWrap: "break-word" }}
              >
                {phone.color}
              </div>
            </TableCell>
            <TableCell>
              <div
                style={{ margin: "0 auto", padding: "0", maxWidth: "50px", wordWrap: "break-word" }}
              >
                {phone.storage}
              </div>
            </TableCell>
            <TableCell>
              <div
                style={{ margin: "0 auto", padding: "0", maxWidth: "180px", wordWrap: "break-word" }}
              >
                {phone.display}
              </div>
            </TableCell>
            <TableCell>
              <div
                style={{ margin: "0 auto", padding: "0", maxWidth: "350px", wordWrap: "break-word" }}
              >
                {phone.camera}
              </div>
            </TableCell>
            <TableCell>
              <div
                style={{ margin: "0 auto", padding: "0", maxWidth: "500px", wordWrap: "break-word" }}
              >
                {phone.description}
              </div>
            </TableCell>
            <TableCell>
              <img
                src={phone.image}
                alt={phone.image}
                style={{ display: "block", margin: "0 auto", width: "100px", wordWrap: "break-word" }}
              />
            </TableCell>
            <TableCell>
              <UpdateButton phone={phone} />
              <DeleteButton onClick={() => deletePhoneHandler(phone._id)} />
            </TableCell>
          </StyledTableBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default GetAllPhones;
