import axios from "axios";

const API_URL = "http://localhost:3001/api/students";

export const createStudentController = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (error) {
    if (
      error.response.status &&
      error.response.data &&
      error.response.data.message
    ) {
      const errorMessage = error.response.data.message;
      alert(errorMessage);
    } else {
      console.error(error);
      alert("An error occurred while adding student");
    }
  }
};
export const getAllStudentsController = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log(error.message);
  }
};

export const getStudentByIdController = async (data) => {
  try {
    return await axios.get(`${API_URL}/${data}`);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateStudentController = async (data, id) => {
  try {
    return await axios.patch(`${API_URL}/${id}`, data);
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      const errorMessage = error.response.data.message;
      alert(errorMessage);
    } else {
      console.error(error);
      alert("An error occurred while updating the student details");
    }
  }
};

export const deleteStudentController = async (id) => {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};
