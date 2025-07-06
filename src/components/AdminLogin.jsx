import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/admin-login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      console.log("Login Success:", result);
      alert("Login Successful");
       navigate('/admin-dashboard');
    } else {
      console.log("Login Failed:", result.message);
      alert("Invalid Credetials");
    }

  } catch (err) {
    console.error("Error connecting to server:", err);
  }
};


  return (
    <div>
      <h3 className="text-center mb-4">Admin Login</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">Email address</label>
          <input
            type="email"
            id="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-semibold">Password</label>
          <input
            type="password"
            id="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
        </div>

        <button type="submit" className="btn btn-success w-100 mt-2">Login</button>
      </form>

      <p className="mt-4 text-muted small text-center">Only authorized admins can login.</p>
    </div>
  );
}

export default AdminLogin;
