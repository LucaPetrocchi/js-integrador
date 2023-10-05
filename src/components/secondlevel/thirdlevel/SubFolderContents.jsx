import React from 'react'
import './SubFolderContents.css'

export default function SubFolderContents({items, itemBackground, positionW}) {
    return(
        <ul className='subfolderContents' style={{translate: `${positionW - 10}px`}}>
            {items.map((item) => { 
                return (
                    <li key={item.id} className='subfolderContentsItems' style={{background: itemBackground}}>
                        {item.name}
                    </li>
                )
            })}
        </ul>
        )
}
