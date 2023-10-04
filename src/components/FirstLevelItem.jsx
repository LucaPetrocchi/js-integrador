import PropTypes from 'prop-types'
import { useState, useRef } from "react"
import FolderContents from './secondlevel/FolderContents'
import './FirstLevelItem.css'
import ItemTriangle from './SvgArrow'

function FirstLevelItem ({item, itemColor, itemActive, url, otherItems}) {    
    const ref = useRef()
    const { id, isFolder, name } = item

    const [hoverState, setHoverState] = useState(false) // state de hover
    const [openState, setOpenState] = useState(false) // state de folder: si está abierto o no

    function hoverToggle () {
        setHoverState(!hoverState)
    }

    function openToggle () {
        setOpenState(!openState)
    }


    const subItems = isFolder ? otherItems.filter((subItem) => subItem.idPadre === id) : undefined
    // si isFolder == true, recibe todos los items cuya idPadre sea igual a su propia id
    // es decir, obtiene todos los items que deberían ir dentro suyo
    // de lo contrario, subItems = undefined

    return(<>
            <li 
                style={{
                    background: (hoverState || openState ) ? itemActive : 'none', 
                    cursor: (hoverState || openState ) ? 'pointer' : 'none',
                    // si tiene el mouse arriba O hiciste clic, el background y el cursor cambian
                }}
                ref={ref}
                className='First-Level-Item'
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
                <div className={openState ? 'arrow-active arrow-transition':'arrow-transition' }> 
                    {isFolder && <ItemTriangle arrowColor={itemColor} />} {/* si es folder, pone el triangulito SVG */}
                </div>
                {isFolder && (openState ? ( // si es folder y está abierto, muestra sus contenidos
                    <FolderContents items={subItems} itemBackground={itemActive}/>
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