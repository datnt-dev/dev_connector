import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description }
}) => <div>
    <h3 className="text-dark">{school}</h3>
    <p>
      <Moment format='DD/MM/YYYY'>{from}</Moment> - {!to ? 'Đến nay' : <Moment format='DD/MM/YYYY'>{to}</Moment>}
    </p>
    <p>
      <strong>Cấp bậc/ Trình độ: </strong> {degree}
    </p>
    <p>
      <strong>Chuyên ngành: </strong> {fieldofstudy}
    </p>
    <strong>Mô tả: </strong> {description}
  </div>

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation
