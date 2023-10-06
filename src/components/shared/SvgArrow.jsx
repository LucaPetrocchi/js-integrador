import PropTypes from 'prop-types'

export default function SvgArrow({arrowColor}) {
  return (
    // <svg xmlns="http://www.w3.org/2000/svg" width='10' height='5'>
    //   <path fill={arrowColor} d='M0 0 L10 0 L5 5 Z' />
    // </svg> 
    <svg height="10px" width="10px"
    version="1.1" id="Capa_1" 
    viewBox="0 0 185.343 185.343" xmlSpace="preserve" 
    fill={arrowColor} transform="rotate(90)">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier"> 
      <g> <g> 
        <path d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175 l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934 c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"></path> 
      </g> </g> </g>
    </svg>
  )
}

SvgArrow.propTypes = {
  arrowColor: PropTypes.string,
}
