import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


const CreateProfile = props => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });

  const {
    company,
    website,
    location,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;


  return (
    <Fragment>
      <h1 className="large text-primary">
        Thông tin cá nhân
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Bổ sung thông tin cá nhân
      </p>
      <small>* = bắt buộc</small>
      <form className="form">
        <div className="form-group">
          <select className="status">
            <option value="0">* Chọn trình độ</option>
            <option value="Developer">Developer</option>
            <option value="Manager">Manager</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </form>
    </Fragment>
  )
}

CreateProfile.propTypes = {

}

export default CreateProfile
