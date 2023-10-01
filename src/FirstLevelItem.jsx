import PropTypes from 'prop-types'
import { useState } from "react"
import SecondLevelFolder from './SecondLevelFolder'

function FirstLevelItem ({item, itemColor, itemActive, url, isFolder, otherItems}) {

    const [hoverState, setHoverState] = useState(false)
    const [openState, setOpenState] = useState(false)

    function hoverToggle () {
        setHoverState(!hoverState)
    }

    function openToggle () {
        setOpenState(!openState)
    }

    const itemTriangle = <svg xmlns="http://www.w3.org/2000/svg" width='10' height='5' style={{marginLeft: '3px'}}>
        <path fill={itemColor} d='M0 0 L10 0 L5 5 Z' />
    </svg>

    const subItems = isFolder ? otherItems.filter((subItem) => subItem.idPadre === item.id) : undefined

    return(<>
            <li 
                style={{
                    background: (hoverState || openState ) ? itemActive : 'none',
                    cursor: (hoverState || openState ) ? 'pointer' : 'none',
                }}
                className='Menu-item'
                onMouseEnter={hoverToggle}
                onMouseLeave={hoverToggle}
                onClick={ isFolder ? openToggle : undefined }
            > 
                <a href={url}
                    style={{
                        color: itemColor,
                        textDecoration: 'none',
                        margin: 'auto 0'
                    }}
                >
                    {item.name} 
                </a>
                {isFolder && itemTriangle}

            </li>
            {isFolder && (openState ? (
                    <SecondLevelFolder item={subItems} />
                ) : null)}
            </>
        )

}

FirstLevelItem.propTypes = {
    item: PropTypes.object,
    itemColor: PropTypes.string,
    itemActive: PropTypes.string,
    url: PropTypes.string,
}

export default FirstLevelItem