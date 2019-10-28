import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    console.log('SUCCESS');
  };

  return (
    <section className="container">
      <h1 className="large text-primary">ĐĂNG NHẬP</h1>
      <p className="lead"><i className="fas fa-user" /> Tài Khoản Đăng Nhập</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            minLength={8}
          />
        </div>
        <input type="submit" className="btn btn-primary" defaultValue="Login" />
      </form>
      <p className="my-1">
        Chưa có tài khoản? <Link to="/register">Đăng Ký</Link>
      </p>
    </section>

  )
};

export default Login;
