import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const Register = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    if (password2 !== password) {
      setAlert('Passwords not match', 'danger');
    } else {
      const newUser = {
        name,
        email,
        password
      }

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }

        const body = JSON.stringify(newUser);

        const res = await axios.post('/api/users', body, config);
        console.log(res.data);

      } catch (err) {
        console.log(err.response.data);
      }
    }

  }

  return (
    <Fragment>
      <div>
        <h1 className="large text-primary">ĐĂNG KÝ</h1>
        <p className="lead"><i className="fas fa-user" /> Tạo Tài Khoản</p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onChange(e)}
              required />
          </div>
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
              minLength={8} />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={e => onChange(e)}
              minLength={8} />
          </div>
          <input type="submit" className="btn btn-primary" defaultValue="Register" />
        </form>
        <p className="my-1">
          Đã có tài khoản? <Link to="/login">Đăng Nhập</Link>
        </p>
      </div>
    </Fragment>
  )
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
}

export default connect(null, { setAlert })(Register);
