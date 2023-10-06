import PropTypes from 'prop-types'
import { useState, useRef } from "react"
import './FirstLevelItem.css'
import '../shared/style.css'
import ItemTriangle from '../shared/SvgArrow'
import FolderContents from '../secondlevel/FolderContents'

function FirstLevelItem({ item, itemColor, itemActive, otherItems }) {
  const ref = useRef()
  const { id, isFolder, name } = item
  const [hoverState, setHoverState] = useState(false) // state de hover
  const [openState, setOpenState] = useState(false) // state de folder: si está abierto o no

  function hoverToggle() {
    setHoverState(!hoverState)
  }

  function openToggle() {
    setOpenState(!openState)
  }


  const subItems = isFolder ? otherItems.filter((subItem) => subItem.idPadre === id) : undefined
  // si isFolder == true, recibe todos los items cuya idPadre sea igual a su propia id
  // es decir, obtiene todos los items que deberían ir dentro suyo
  // de lo contrario, subItems = undefined
  const lastLevelItems = isFolder ? otherItems.filter((subItem) => subItem.idPadre != id) : undefined

    return(<>
            <li 
                style={{
                    background: hoverState || openState  ? itemActive : 'none', 
                    borderBottom: (hoverState || openState ) ? '1px solid gray' : 'none',
                }}
                ref={ref}
                className='firstLevelItem sharedItem'
                onMouseEnter={hoverToggle}
                onMouseLeave={hoverToggle} // al entrar o sacar el mouse encima, cambia el state hover
                onClick={ isFolder ? openToggle : undefined } // al hacer click dentro, cambia el state open
            > 
                <p 
                    style={{
                        color: itemColor,
                        textDecoration: 'none',
                        margin: 'auto 3px auto 0px'
                    }}
                >
                    {name}
                </p>
                <div className='arrowContainer'>
                  <div className={openState||hoverState ? 'arrowActive arrowTransition':'arrowTransition' }> 
                      {(isFolder||hoverState) && isFolder ? <ItemTriangle arrowColor={itemColor} /> : undefined} {/* si es folder, pone el triangulito SVG */}
                  </div>
                </div>
                {isFolder && (openState || hoverState ? ( // si es folder y está abierto, muestra sus contenidos
                    <FolderContents items={subItems} subItems={lastLevelItems} itemBackground={itemActive}/>
                ) : null)}
            </li>

  </>
  )

}

FirstLevelItem.propTypes = {
  item: PropTypes.object,
  itemColor: PropTypes.string,
  itemActive: PropTypes.string,
  url: PropTypes.string,
  otherItems: PropTypes.array,
}

export default FirstLevelItem