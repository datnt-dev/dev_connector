import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createProfile } from '../../actions/profile'


const CreateProfile = ({ createProfile, history }) => {
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
    instagram: '',
    status: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

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
    instagram,
    status
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Thông tin cá nhân</h1>
      <p className="lead">
        <i className="fas fa-user" /> Personal Info.
  </p>
      <small>* - Bắt buộc</small>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <select name="status" value={status} onChange={e => onChange(e)}>
            <option value="0">* Select Professional Status</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Trình độ
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Company" name="company" value={company} onChange={e => onChange(e)} />
          <small className="form-text">
            Công ty đang công tác
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website" value={website} onChange={e => onChange(e)} />
          <small className="form-text">
            Website cá nhân hoặc công ty
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} />
          <small className="form-text">
            Địa chỉ (vd. Hai Bà Trưng, HN)
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Skills" name="skills" value={skills} onChange={e => onChange(e)} />
          <small className="form-text">
            Kỹ năng (vd. Javascript,CSS,HTML)
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Github Username" name="githubusername" value={githubusername} onChange={e => onChange(e)} />
          <small className="form-text">
            Tài khoản Github
          </small>
        </div>
        <div className="form-group">
          <textarea type="text" placeholder="Bio of yourself" name="bio" value={bio} onChange={e => onChange(e)} />
          <small className="form-text">
            Giới thiệu ngắn gọn về bản thân
          </small>
        </div>
        <div className="my-2">
          <button type="button" onClick={() => toggleSocialInputs(!displaySocialInputs)} className="btn btn-light">
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && <Fragment>
          <div className="form-group social-input">
            <i className="fab fa-twitter fa-2x" />
            <input type="text" name="twitter" placeholder="Twitter URL" value={twitter} onChange={e => onChange(e)} />
          </div>
          <div className="form-group social-input">
            <i className="fab fa-facebook fa-2x" />
            <input type="text" name="facebook" placeholder="Facebook URL" value={facebook} onChange={e => onChange(e)} />
          </div>
          <div className="form-group social-input">
            <i className="fab fa-youtube fa-2x" />
            <input type="text" name="youtube" placeholder="Youtube URL" value={youtube} onChange={e => onChange(e)} />
          </div>
          <div className="form-group social-input">
            <i className="fab fa-linkedin fa-2x" />
            <input type="text" name="linkedin" placeholder="Linkedin URL" value={linkedin} onChange={e => onChange(e)} />
          </div>
          <div className="form-group social-input">
            <i className="fab fa-instagram fa-2x" />
            <input type="text" name="instagram" placeholder="Instagram URL" value={instagram} onChange={e => onChange(e)} />
          </div>
        </Fragment>}

        <input type="submit" className="btn btn-primary my-1" />
        <Link to="/dashboard" className="btn btn-light my-1">Quay lại</Link>
      </form>
    </Fragment>
  )
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile))
