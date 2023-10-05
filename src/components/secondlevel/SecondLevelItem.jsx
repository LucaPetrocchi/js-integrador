import { useState, useEffect, useRef } from "react"
import "./SecondLevelItem.css"
import SubFolderContents from "./thirdlevel/SubFolderContents"
import ItemTriangle from "../SvgArrow"

function SecondLevelItem ({item, subItems, itemBackground}) {
    const ref = useRef()
    const {id, name, isFolder} = item
    const [hoverState, setHoverState] = useState(false) // state de hover
    const [openState, setOpenState] = useState(false) // state de folder: si está abierto o no
    const [positionW, setPositionW] = useState(0)

    function hoverToggle () {
        setHoverState(!hoverState)
    }

    function openToggle (e) {
        e.stopPropagation()
        isFolder && setOpenState(!openState)
    }

    useEffect(() => {
        const rect = ref.current.getBoundingClientRect()
        setPositionW(rect.width)
    }, [])    

    return (    
        <li className="folderContentsItems"
            style={{background: itemBackground}}
            onMouseEnter={hoverToggle}
            onMouseLeave={hoverToggle} // al entrar o sacar el mouse encima, cambia el state hover
            onClick={openToggle} // al hacer click dentro, cambia el state open
            ref={ref}
        >
        {name}
        <div className='arrow-transition'> 
                {isFolder && <ItemTriangle />} {/* si es folder, pone el triangulito SVG */}
        </div>
        {isFolder && (openState ? (
            <SubFolderContents items={subItems} itemBackground={itemBackground} positionW={positionW} />
            ) : null)}
        </li>
    )


}

export default SecondLevelItem