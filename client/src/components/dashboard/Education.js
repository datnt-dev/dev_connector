import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { deleteEducation } from '../../actions/profile'

const Education = ({ education, deleteEducation }) => {
  const educations = education.map(edu => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className='hide-sm'>{edu.degree}</td>
      <td className='hide-sm'>{edu.fieldofstudy}</td>
      <td>
        <Moment format='DD/MM/YYYY'>{edu.from}</Moment> - {
          edu.to === null ? ('Hiện tại') : (<Moment format='DD/MM/YYYY'>{edu.to}</Moment>)
        }
      </td>
      <td>
        <button onClick={() => deleteEducation(edu._id)} className='btn btn-danger'>Xóa</button>
      </td>
    </tr>
  ))

  return (
    <Fragment>
      <h2 className="my-2">Quá Trình Học Tập</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Trường</th>
            <th className='hide-sm'>Trình độ/ Cấp bậc</th>
            <th className='hide-sm'>Chuyên ngành</th>
            <th className='hide-sm'>Thời gian</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  )
}

Education.propTypes = {
  educations: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education)
