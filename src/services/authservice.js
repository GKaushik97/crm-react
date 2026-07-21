import api from "./api";

export const login = async (emp_id, password) => {

    const formData = new FormData();

    formData.append("emp_id", emp_id);
    formData.append("password", password);

    const response = await api.post("/auth", formData);

    return response.data;
};