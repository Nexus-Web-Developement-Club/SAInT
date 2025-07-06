import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function AdminSignup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/admin-signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    if (response.ok) {
      console.log("Registration Success:", result);
      alert("Registration Successful, please press login button and proceed with login");
       navigate('/admin-landing-page');
    } else {
      console.log("Registration Failed:", result.message);
      alert("Invalid secret code");
    }

  } catch (err) {
    console.error("Error connecting to server:", err);
  }
};

  const password = watch("password"); // for confirm password comparison

  return (
    <div>
      <h3 className="text-center mb-4">Admin Signup</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label fw-semibold">Full Name</label>
          <input
            type="text"
            className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
            id="fullName"
            placeholder="Enter your full name"
            {...register("fullName", { required: "Full name is required" })}
          />
          {errors.fullName && <div className="invalid-feedback">{errors.fullName.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">Email address</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-semibold">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            id="password"
            placeholder="Create a password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
          <input
            type="password"
            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
            id="confirmPassword"
            placeholder="Re-enter password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match"
            })}
          />
          {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword.message}</div>}
        </div>

        <div className="mb-4">
          <label htmlFor="adminCode" className="form-label fw-semibold">Admin Secret Code</label>
          <input
            type="text"
            className={`form-control ${errors.adminCode ? 'is-invalid' : ''}`}
            id="adminCode"
            placeholder="Enter admin code"
            {...register("adminCode", { required: "Admin code is required" })}
          />
          {errors.adminCode && <div className="invalid-feedback">{errors.adminCode.message}</div>}
        </div>

        <button type="submit" className="btn btn-success w-100">Sign Up</button>
      </form>
    </div>
  );
}

export default AdminSignup;
