import { FormControl, Input, InputLabel } from "@mui/material";
import { CancelButton } from "../Button/Button.jsx";

const Form = ({prop, setProp, func, Btn}) => {

  const onValueChange = (e) => {
    setProp({ ...prop, [e.target.name]: e.target.value });
  };

  return (
    <>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={prop.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Brand</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="brand"
          value={prop.brand}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Price</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="price"
          value={prop.price}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Color</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="color"
          value={prop.color}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Storage</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="storage"
          value={prop.storage}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Display</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="display"
          value={prop.display}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Camera</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="camera"
          value={prop.camera}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Description</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="description"
          value={prop.description}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Image</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="image"
          value={prop.image}
        />
      </FormControl>
      <FormControl>
        <CancelButton />
        <Btn onClick={() => func()} />
      </FormControl>
    </>
  )
}

export default Form