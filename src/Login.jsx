import { useState } from "react";
import { login } from "./services/authservice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [formData, setFormData] = useState({
        emp_id: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        // Remove field error when user starts typing
        setErrors({...errors, [e.target.name]: "",});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setMessage("");
        try {
            const response = await login(formData.emp_id,formData.password);
            toast.success("Login successful");
            navigate("/home");
            // alert("Login Successful");
        } catch (error) {
            console.log(error.response?.data);
            if (error.response?.status === 422) {
                // Laravel validation errors
                setErrors(error.response.data.errors || {});
            } else {
                toast.error(
                    error.response?.data?.message ||
                    "Login failed"
                );
            }
        }
    };
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-5 col-lg-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="fs-3 fw-semibold mb-4 text-center">
                                <i className="bi bi-shield-lock"></i> Login
                            </h2>
                            {message && (
                                <div className="alert alert-danger">
                                    {message}
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">
                                        <i className="bi bi-person"></i> Employee ID
                                    </label>
                                    <input
                                        type="text"
                                        name="emp_id"
                                        className={`form-control ${
                                            errors.emp_id ? "is-invalid" : ""
                                        }`}
                                        value={formData.emp_id}
                                        onChange={handleChange}
                                    />
                                    {errors.emp_id && (
                                        <div className="invalid-feedback">
                                            {errors.emp_id[0]}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        <i className="bi bi-key"></i> Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        className={`form-control ${
                                            errors.password ? "is-invalid" : ""
                                        }`}
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    {errors.password && (
                                        <div className="invalid-feedback">
                                            {errors.password[0]}
                                        </div>
                                    )}
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">
                                        <i className="bi bi-box-arrow-in-right"></i>
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}