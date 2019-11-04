import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

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
};

Landing.proTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
