import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPhoneController } from "../../controller/phone.controller.js";
import { CreateButton } from "../Button/Button.jsx";
import Form from "./Form.jsx";
import {Container, StyledTypography} from "../muiStyled.js";

const initialFormState = { name: "", brand: "", price: "", color: "",
  storage: "", display: "", camera: "", description: "", image: ""};


const CreatePhone = () => {
  const [phone, setPhone] = useState(initialFormState);
  const navigate = useNavigate();

  const createPhoneHandler = async () => {
    await createPhoneController(phone);
    navigate("/");
  };

  return (
    <Container>
      <StyledTypography>
        Create new phone
      </StyledTypography>
      <Form prop={phone} setProp={setPhone} func={createPhoneHandler} Btn={CreateButton}/>
    </Container>
  );
};

export default CreatePhone;
