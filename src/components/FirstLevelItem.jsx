import PropTypes from 'prop-types'
import { useState } from "react"
import FolderContents from './secondlevel/FolderContents'
import './FirstLevelItem.css'
import ItemTriangle from './SvgArrow'

function FirstLevelItem ({item, itemColor, itemActive, url, otherItems,}) {    
    const { id, isFolder, name } = item

    const [hoverState, setHoverState] = useState(false) // state de hover
    const [openState, setOpenState] = useState(false) // state de folder: si está abierto o no
    const [right, setRight] = useState('')
    const [bottom, setBottom] = useState('')

    function hoverToggle () {
        setHoverState(!hoverState)
    }

    function openToggle (rect) {
        setOpenState(!openState)
        setRight(rect.right)
        setBottom(rect.bottom)
    }

    const subItems = isFolder ? otherItems.filter((subItem) => subItem.idPadre === id) : undefined
    // si isFolder == true, recibe todos los items cuya idPadre sea igual a su propia id
    // es decir, obtiene todos los items que deberían ir dentro suyo
    // de lo contrario, subItems = undefined

    // manejador de clic que recibe un evento 

    console.log(right)

    const handleItemClick = (e) => {
        // rect va a ser una constante durante el ciclo de vida de la funcion, va a representar el elemento HTML
        const rect = e.target.getBoundingClientRect();
        openToggle(rect)

        // limite izquierdo del elemento, limite superior del elemento
        // console.log(`right ${right} | bottom  ${bottom}`)
    }

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
                onClick={ isFolder ? handleItemClick : undefined } // al hacer click dentro, cambia el state open
            > 
                <a href={url}
                    style={{
                        color: itemColor,
                        textDecoration: 'none',
                        margin: 'auto 3px auto 0px'
                    }}
                >
                    {name} 
                </a>
                <div className={openState ? 'arrow-active arrow-transition':'arrow-transition' }> 
                    {isFolder && <ItemTriangle arrowColor={itemColor} />} {/* si es folder, pone el triangulito SVG */}
                </div>
            </li>
            {isFolder && (openState ? ( // si es folder y está abierto, muestra sus contenidos
                    <FolderContents  items={subItems} itemBackground={itemActive} right={right} bottom={bottom} /> // style={{right: `${right}`, bottom: `${bottom}`}}
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