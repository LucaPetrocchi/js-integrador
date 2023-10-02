import PropTypes from 'prop-types'
import { useState } from "react"
import FolderContents from './secondlevel/FolderContents'
import './FirstLevelItem.css'

function FirstLevelItem ({item, itemColor, itemActive, url, otherItems}) {    
    const { id, isFolder, name } = item

    const [hoverState, setHoverState] = useState(false) // state de hover
    const [openState, setOpenState] = useState(false) // state de folder: si está abierto o no

    function hoverToggle () {
        setHoverState(!hoverState)
    }

    function openToggle () {
        setOpenState(!openState)
    }

    const itemTriangle = <svg xmlns="http://www.w3.org/2000/svg" width='10' height='5' style={{marginLeft: '3px'}}>
        <path fill={itemColor} d='M0 0 L10 0 L5 5 Z' />
    </svg> // esta es la flechita de dropdown

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
                className='First-Level-Item'
                onMouseEnter={hoverToggle}
                onMouseLeave={hoverToggle} // al entrar o sacar el mouse encima, cambia el state hover
                onClick={ isFolder ? openToggle : undefined } // al hacer click dentro, cambia el state open
            > 
                <a href={url}
                    style={{
                        color: itemColor,
                        textDecoration: 'none',
                        margin: 'auto 0'
                    }}
                >
                    {name} 
                </a> 
                {isFolder && itemTriangle} {/* si es folder, pone el triangulito SVG */}

            </li>
            {isFolder && (openState ? ( // si es folder y está abierto, muestra sus contenidos
                    <FolderContents items={subItems} />
                ) : null)}
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