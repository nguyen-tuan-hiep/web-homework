import axios from "axios";

const API_URL = "http://localhost:8080/api/blogs";

export const addBlog = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (error) {
    console.log(error.message);
  }
};
export const getAllBlogs = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log(error.message);
  }
};

export const getBlog = async (data) => {
  try {
    return await axios.get(`${API_URL}/${data}`);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateBlog = async (data, id) => {
  try {
    return await axios.patch(`${API_URL}/${id}`, data);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBlog = async (id) => {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};
