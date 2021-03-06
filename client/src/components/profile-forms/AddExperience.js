import React, { Fragment, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addExpreience } from '../../actions/profile'


const AddExperience = ({ addExpreience, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">
        Kinh Nghiệm
      </h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Thêm kinh nghiệm làm việc
      </p>
      <small>* - Bắt buộc</small>
      <form className="form" onSubmit={e => {
        e.preventDefault();
        addExpreience(formData, history)
      }}>
        <div className="form-group">
          <input type="text" placeholder="* Job Title" name="title" value={title} onChange={e => onChange(e)} required />
          <small className="form-text">
            * Công việc
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Company" name="company" value={company} onChange={e => onChange(e)} required />
          <small className="form-text">
            * Công ty
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} />
          <small className="form-text">
            Địa điểm làm việc
          </small>
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={e => onChange(e)} />
          <small className="form-text">
            * Từ ngày
          </small>
        </div>
        <div className="form-group">
          <p><input type="checkbox" name="current" checked={current} value={current} onChange={e => {
            setFormData({ ...formData, current: !current });
            toggleDisabled(!toDateDisabled);
          }} />{' '} Đến hiện tại</p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" value={to} onChange={e => onChange(e)} disabled={toDateDisabled ? 'disabled' : ''} />
          <small className="form-text">
            Đến ngày
          </small>
        </div>
        <div className="form-group">
          <textarea name="description" cols={30} rows={5} placeholder="Job Description" defaultValue={""} value={description} onChange={e => onChange(e)} />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link to='/dashboard' className="btn btn-light my-1">Quay lại</Link>
      </form>
    </Fragment>

  )
}

AddExperience.propTypes = {
  addExpreience: PropTypes.func.isRequired
};

export default connect(null, { addExpreience })(withRouter(AddExperience))
