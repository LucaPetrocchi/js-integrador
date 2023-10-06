import PropTypes from 'prop-types'
import { useState, useEffect, useRef } from "react"
import "./SecondLevelItem.css"
import '../shared/style.css'
import SubFolderContents from "../thirdlevel/SubFolderContents"
import ItemTriangle from '../shared/SvgArrow'

function SecondLevelItem({ item, subItems, itemBackground }) {
  const ref = useRef()
  const { id, name, isFolder } = item

  const i = subItems.filter((subItem) => subItem.idPadre === id)

  const [hoverState, setHoverState] = useState(false) // state de hover
  const [openState, setOpenState] = useState(false) // state de folder: si está abierto o no
  const [positionW, setPositionW] = useState(0)

  function hoverToggle() {
    setHoverState(!hoverState)
  }

  function openToggle(e) {
    e.stopPropagation()
    isFolder && setOpenState(!openState)
  }

  useEffect(() => {
    const rect = ref.current.getBoundingClientRect()
    setPositionW(rect.width)
  }, [])


  return (

    <li className="secondLevelItem sharedItem"
      style={{ background: itemBackground }}
      onMouseEnter={hoverToggle}
      onMouseLeave={hoverToggle} // al entrar o sacar el mouse encima, cambia el state hover
      onClick={openToggle} // al hacer click dentro, cambia el state open
      ref={ref}
    >
      {name}
      <div className='arrowTransition'>
        {isFolder && <ItemTriangle />} {/* si es folder, pone el triangulito SVG */}
      </div>
      {isFolder && (openState || hoverState ? (
        <SubFolderContents items={i} itemBackground={itemBackground} positionW={positionW} />
      ) : null)}
    </li>
  )


}

SecondLevelItem.propTypes = {
  item: PropTypes.object,
  subItems: PropTypes.array,
  itemBackground: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  isFolder: PropTypes.bool,

}

export default SecondLevelItem

