import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/form.css";

export default function JanmSetuLogin() {
  const [searchParams] = useSearchParams();
  const defaultRole = searchParams.get("role") || "parent";

  const [userType, setUserType] = useState(defaultRole);
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    name: "",
    childName: "",
    childDob: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setUserType(defaultRole);
  }, [defaultRole]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.phone || formData.phone.length !== 10) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (isRegistering) {
      if (!formData.name) newErrors.name = "Name is required";
      if (userType === "parent") {
        if (!formData.childName)
          newErrors.childName = "Child name is required";
        if (!formData.childDob)
          newErrors.childDob = "Child date of birth is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (isRegistering) {
      alert("✅ Registration successful! Please login.");
      setIsRegistering(false);
    } else {
      navigate(userType === "parent" ? "/parent" : "/asha");
    }
  };

  return (
    <div className="app-container app-hero-bg">
      <div className="auth-card">
        {/* Branding */}
        <div className="auth-logo">
          <h1>JANM SETU</h1>
          <p>Digital Vaccination Platform</p>
        </div>

        {/* Title */}
        <h2 className="auth-title">
          {isRegistering ? "Create Account" : "Welcome Back"}
        </h2>
        <p className="auth-subtitle">
          {isRegistering
            ? "Register to start tracking vaccinations"
            : "Login to access your dashboard"}
        </p>

        {/* Role Toggle */}
        <div className="role-toggle">
          <button
            type="button"
            className={userType === "parent" ? "active" : ""}
            onClick={() => setUserType("parent")}
          >
            👨‍👩‍👧 Parent
          </button>
          <button
            type="button"
            className={userType === "asha" ? "active" : ""}
            onClick={() => setUserType("asha")}
          >
            🩺 ASHA Worker
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {isRegistering && (
            <>
              <div className="form-group">
                <label>
                  Full Name <span>*</span>
                </label>
                <input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>

              {userType === "parent" && (
                <>
                  <div className="form-group">
                    <label>
                      Child's Name <span>*</span>
                    </label>
                    <input
                      value={formData.childName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          childName: e.target.value,
                        })
                      }
                    />
                    {errors.childName && (
                      <p className="error">{errors.childName}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      Child's Date of Birth <span>*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.childDob}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          childDob: e.target.value,
                        })
                      }
                    />
                    {errors.childDob && (
                      <p className="error">{errors.childDob}</p>
                    )}
                  </div>
                </>
              )}
            </>
          )}

          <div className="form-group">
            <label>
              Mobile Number <span>*</span>
            </label>
            <input
              placeholder="+91 10-digit mobile number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                })
              }
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <label>
              Password <span>*</span>
            </label>
            <input
              type="password"
              placeholder={
                isRegistering
                  ? "Create a strong password"
                  : "Enter your password"
              }
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <button className="primary-btn" type="submit">
            {isRegistering ? "Create Account" : "Login to Dashboard"}
          </button>
        </form>

        {/* Footer */}
        <div className="auth-footer">
          <button
            type="button"
            onClick={() => {
              setIsRegistering(!isRegistering);
              setErrors({});
            }}
          >
            {isRegistering
              ? "Already have an account? Login"
              : "New user? Create an account"}
          </button>
        </div>

        {/* Trust Bar */}
        <div className="trust-bar">
          <span>🔒 SSL Secured</span>
          <span>🇮🇳 Govt Data Protected</span>
          <span>HIPAA Compliant</span>
        </div>
      </div>
    </div>
  );
}
