import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">DevApps</h1>
          <p className="lead">
            This is an app to login to my project. Welcome
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Đăng Ký</Link>
            <Link to="/login" className="btn btn-light">Đăng Nhập</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
