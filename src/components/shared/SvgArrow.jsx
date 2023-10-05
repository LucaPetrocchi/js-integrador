import PropTypes from 'prop-types'

export default function SvgArrow({arrowColor}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width='10' height='5'>
      <path fill={arrowColor} d='M0 0 L10 0 L5 5 Z' />
    </svg> 
  )
}

SvgArrow.propTypes = {
  arrowColor: PropTypes.string,
}
