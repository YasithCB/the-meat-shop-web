import  { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {signup} from "../../api/authAPI.js";

function RegisterModal({ setShowRegister, setShowLogin }) {
    const [role, setRole] = useState("customer");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [logo, setLogo] = useState(null); // for suppliers
    const [vehicleInfo, setVehicleInfo] = useState(""); // for riders
    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const validatePhone = (phone) => /^\d{7,15}$/.test(phone);
    const validatePassword = (password) => password.length >= 6;

    const handleRegister = async (e) => {
        // validation
        if (!name.trim()) return toast.error("Name is required");
        if (!email.trim() || !validateEmail(email)) return toast.error("Valid email is required");
        if (!phone.trim() || !validatePhone(phone)) return toast.error("Valid phone number is required");
        if (!password.trim() || !validatePassword(password)) return toast.error("Password must be at least 6 characters");

        if (!logo && role === "supplier") {
            return toast.error("Logo is required for suppliers");
        }
        if (role === "rider" && !vehicleInfo.trim()) return toast.error("Vehicle info is required for riders");

        // TODO: call your API to register user/supplier/rider
        await register(e);
    };

    const register = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let res;

            // Prepare form data for API
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("password", password);
            formData.append("role", role);

            if (role === "supplier") {
                formData.append("logo", logo); // file object
            }

            if (role === "rider") {
                formData.append("vehicleInfo", vehicleInfo);
            }

            res = await signup(formData, role);

            console.log(`Registering as Dealer response : ${res}`)

            if (res.success) {
                // show message instead of auto-login
                toast.success("Registration successful! You can now log in.");

                setName("");
                setEmail("");
                setPassword("");
                setPhone("");
                setVehicleInfo('')
                setPassword('')
                setRole('customer');
                setLogo(null)

                // Reload home page
                window.location.href = "/";
            } else {
                toast.error(`Oops! ${res.message}`);
            }
        } catch (err) {
            console.error(err);
            toast.error(`Oops! ${err.message}`);
        }

        setLoading(false);
    };

    return (
        <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            tabIndex="-1"
            role="dialog"
            onClick={() => setShowRegister(false)}
        >
            <div
                className="modal-dialog modal-dialog-centered"
                role="document"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="mb-0 text-uppercase">Register</h2>
                        <button
                            type="button"
                            className="btn-close bg-hover-red"
                            onClick={() => setShowRegister(false)}
                        ></button>
                    </div>

                    <div className="modal-body">
                        {/* Role Selector */}
                        <div className="mb-4 text-center">
                            <div className="d-flex justify-content-center gap-3 flex-wrap role-box-group">
                                <div
                                    className={`role-box p-3 border rounded-3 ${role === "customer" ? "active" : ""}`}
                                    onClick={() => setRole("customer")}
                                >
                                    <i className="bi bi-person fs-3 mb-2 text-danger"></i>
                                    <h6 className="mb-0 text-uppercase fs-7">Customer</h6>
                                </div>

                                <div
                                    className={`role-box p-3 border rounded-3 ${role === "supplier" ? "active" : ""}`}
                                    onClick={() => setRole("supplier")}
                                >
                                    <i className="bi bi-shop fs-3 mb-2 text-danger"></i>
                                    <h6 className="mb-0 text-uppercase fs-7">Supplier</h6>
                                </div>

                                <div
                                    className={`role-box p-3 border rounded-3 ${role === "rider" ? "active" : ""}`}
                                    onClick={() => setRole("rider")}
                                >
                                    <i className="bi bi-bicycle fs-3 mb-2 text-danger"></i>
                                    <h6 className="mb-0 text-uppercase fs-7">Delivery Rider</h6>
                                </div>
                            </div>
                        </div>

                        {/* Registration Form */}
                        <form>
                            <div className="row">
                                <div className="mb-3 col-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Full Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3 col-12">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3 col-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3 col-12">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                {role === "supplier" && (
                                    <div className="mb-3 col-12">
                                        <label className="form-label">Upload Logo</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            accept="image/*"
                                            onChange={(e) => setLogo(e.target.files[0])} // store the file object
                                        />

                                        {/* Preview */}
                                        {logo && (
                                            <div className="mt-2 text-center">
                                                <img
                                                    src={URL.createObjectURL(logo)}
                                                    alt="Logo Preview"
                                                    style={{ maxWidth: "150px", maxHeight: "150px", objectFit: "contain", borderRadius: "8px", border: "1px solid #ddd" }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                )}


                                {role === "rider" && (
                                    <div className="mb-3 col-12">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Vehicle Info"
                                            value={vehicleInfo}
                                            onChange={(e) => setVehicleInfo(e.target.value)}
                                        />
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>

                    {loading ? (
                        <div className="text-center py-3">Loading...</div>
                    ) : (
                        <div className="modal-footer flex-column">
                            <div className="mt-3 text-center">
                                <span>Already have an account? </span>
                                <a
                                    href="#"
                                    onClick={() => {
                                        setShowRegister(false);
                                        setShowLogin(true);
                                    }}
                                    className="text-danger fw-bold text-decoration-none"
                                    style={{ cursor: "pointer" }}
                                >
                                    Login now
                                </a>
                            </div>

                            <div className="d-flex w-100 justify-content-center gap-2 mt-2">
                                <button
                                    type="button"
                                    className="btn btn-dark w-100"
                                    onClick={() => setShowRegister(false)}
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger btn-red w-100"
                                    onClick={handleRegister}
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RegisterModal;
