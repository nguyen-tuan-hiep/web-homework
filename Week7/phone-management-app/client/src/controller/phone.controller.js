import axios from "axios";

const API_URL = "http://localhost:3000/phones";

export const createPhoneController = async (data) => {
    try {
        return await axios.post(API_URL, data);
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            const errorMessage = error.response.data.message;
            alert(errorMessage);
        } else {
            console.error(error);
            alert("An error occurred while saving the new phone data");
        }
    }
};

export const getAllPhonesController = async () => {
    try {
        return await axios.get(API_URL);
    } catch (error) {
        console.log(error.message);
    }
};

export const getPhoneByIdController = async (data) => {
    try {
        return await axios.get(`${API_URL}/${data}`);
    } catch (error) {
        console.log(error.message);
    }
};

export const updatePhoneController = async (data, id) => {
    try {
        return await axios.patch(`${API_URL}/${id}`, data);
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            const errorMessage = error.response.data.message;
            alert(errorMessage);
        } else {
            console.error(error);
            alert("An error occurred while saving the new phone data");
        }
    }
};

export const deletePhoneController = async (id) => {
    try {
        return await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.log(error.message);
    }
};
