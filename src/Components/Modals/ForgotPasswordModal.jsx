import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { forgotPassword, resetPassword } from "../../api/authAPI.js";

function ForgotPasswordModal({ setShowForgot, setShowLogin }) {
    const [role, setRole] = useState("customer");

    const [step, setStep] = useState(1); // 1 = enter email, 2 = reset password
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    // Step 1: Send reset code
    const handleSendCode = async (e) => {
        e.preventDefault();
        if (!email.trim() || !validateEmail(email)) {
            return toast.error("Please enter a valid email address");
        }

        setLoading(true);
        try {
            const res = await forgotPassword({ email }, role);
            toast.success(res.message || "Code sent to your email");
            setStep(2);
        } catch (err) {
            toast.error(err.message || "Failed to send reset code");
        }
        setLoading(false);
    };

    // Step 2: Reset password
    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!code.trim()) return toast.error("Please enter the code sent to your email");
        if (newPassword.length < 6) return toast.error("Password must be at least 6 characters");
        if (newPassword !== confirmPassword) return toast.error("Passwords do not match");

        setLoading(true);
        try {
            const res = await resetPassword({ email, code, newPassword }, role);
            toast.success(res.message || "Password reset successfully!");
            setShowForgot(false);
            setShowLogin(true);
        } catch (err) {
            toast.error(err.message || "Failed to reset password");
        }
        setLoading(false);
    };

    return (
        <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            tabIndex="-1"
            role="dialog"
            onClick={() => setShowForgot(false)}
        >
            <div
                className="modal-dialog modal-dialog-centered"
                role="document"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="mb-0 text-uppercase">
                            {step === 1 ? "Forgot Password" : "Reset Password"}
                        </h2>
                        <button
                            type="button"
                            className="btn-close bg-hover-red"
                            onClick={() => setShowForgot(false)}
                        ></button>
                    </div>

                    <div className="modal-body">
                        {step === 1 ? (
                            <form onSubmit={handleSendCode}>
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
                                            <i className="bi bi-scooter fs-3 mb-2 text-danger"></i>
                                            <h6 className="mb-0 text-uppercase fs-7">Rider</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        className="btn btn-danger btn-red w-100"
                                        disabled={loading}
                                    >
                                        {loading ? "Sending..." : "Send Reset Code"}
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={handleResetPassword}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter code sent to your email"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="New Password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>

                                <div className="d-flex justify-content-center gap-2">
                                    <button
                                        type="button"
                                        className="btn btn-dark btn-black w-50"
                                        onClick={() => setShowForgot(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-danger btn-red w-50"
                                        disabled={loading}
                                    >
                                        {loading ? "Resetting..." : "Reset Password"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {step === 1 && (
                        <div className="modal-footer text-center">
                            <span>Remember your password? </span>
                            <a
                                href="#"
                                onClick={() => {
                                    setShowForgot(false);
                                    setShowLogin(true);
                                }}
                                className="text-danger fw-bold text-decoration-none"
                            >
                                Login Here
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordModal;
