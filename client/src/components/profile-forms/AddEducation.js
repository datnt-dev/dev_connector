import React, { Fragment, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addEducation } from '../../actions/profile'


const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { school, degree, fieldofstudy, from, to, current, description } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">
        Học Vấn
      </h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Thêm quá trình học tập
      </p>
      <small>* - Bắt buộc</small>
      <form className="form" onSubmit={e => {
        e.preventDefault();
        addEducation(formData, history)
      }}>
        <div className="form-group">
          <input type="text" placeholder="* School" name="school" value={school} onChange={e => onChange(e)} required />
          <small className="form-text">
            * Tên trường
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Degree" name="degree" value={degree} onChange={e => onChange(e)} required />
          <small className="form-text">
            * Cấp bậc/ Trình độ
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Field of Study" name="fieldofstudy" value={fieldofstudy} onChange={e => onChange(e)} required />
          <small className="form-text">
            * Chuyên ngành
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
          <textarea name="description" cols={30} rows={5} placeholder="Education Description" defaultValue={""} value={description} onChange={e => onChange(e)} />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link to='/dashboard' className="btn btn-light my-1">Quay lại</Link>
      </form>
    </Fragment>

  )
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(withRouter(AddEducation))
