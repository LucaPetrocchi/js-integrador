import { useState } from "react"
import "./SecondLevelItem.css"
import SubFolderContents from "./thirdlevel/SubFolderContents"
import ItemTriangle from "../SvgArrow"

function SecondLevelItem ({item, subItems, itemBackground}) {
    const {id, name, isFolder} = item
    const [hoverState, setHoverState] = useState(false) // state de hover
    const [openState, setOpenState] = useState(false) // state de folder: si está abierto o no

    function hoverToggle () {
        setHoverState(!hoverState)
    }

    function openToggle (e) {
        e.stopPropagation()
        isFolder && setOpenState(!openState)
    }

    return (
        <li className="folderContentsItems"
            style={{background: itemBackground}}
            onMouseEnter={hoverToggle}
            onMouseLeave={hoverToggle} // al entrar o sacar el mouse encima, cambia el state hover
            onClick={openToggle} // al hacer click dentro, cambia el state open
        >
        {name}
        <div className={openState ? 'arrow-active arrow-transition':'arrow-transition' }> 
                {isFolder && <ItemTriangle />} {/* si es folder, pone el triangulito SVG */}
        </div>
        {isFolder && (openState ? (
            <SubFolderContents items={subItems}/>
            ) : null)}
        </li>
    )


}

export default SecondLevelItem