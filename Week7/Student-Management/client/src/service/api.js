import axios from "axios";

const API_URL = "http://localhost:8080/api/students";

export const addStudent = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (error) {
    console.log(error.message);
  }
};
export const getAllStudents = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log(error.message);
  }
};

export const getStudent = async (data) => {
  try {
    return await axios.get(`${API_URL}/${data}`);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateStudent = async (data, id) => {
  try {
    return await axios.patch(`${API_URL}/${id}`, data);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteStudent = async (id) => {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};
