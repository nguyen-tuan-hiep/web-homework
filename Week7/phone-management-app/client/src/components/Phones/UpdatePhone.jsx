import { useState, useEffect } from "react";
import { getPhoneByIdController, updatePhoneController } from "../../controller/phone.controller.js";
import { useNavigate, useParams } from "react-router-dom";
import { SaveChangesButton } from "../Button/Button.jsx";
import Form from "./Form.jsx";
import { StyledTypography, Container } from "../muiStyled.js";

const initialFormState = { name: "", brand: "", price: "", color: "",
  storage: "", display: "", camera: "", description: "", image: ""};

const UpdatePhone = () => {
  const [phone, setPhone] = useState(initialFormState);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPhoneByIdHandler().then(() => {});
  }, []);

  const getPhoneByIdHandler = async () => {
    const response = await getPhoneByIdController(id);
    setPhone(response.data);
  };

  const updatePhoneHandler = async () => {
    await updatePhoneController(phone, id);
    navigate("/");
  };

  return (
    <Container>
      <StyledTypography>
        Update phone
      </StyledTypography>
      <Form prop={phone} setProp={setPhone} func={updatePhoneHandler} Btn={SaveChangesButton}/>
    </Container>
  );
};

export default UpdatePhone;
