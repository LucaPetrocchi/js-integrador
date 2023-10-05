import React from 'react'
import './SubFolderContents.css'
import ThirdLevelItem from './ThirdLevelItem'

export default function SubFolderContents({items, itemBackground, positionW}) {
    return(
        <ul className='subfolderContents' style={{translate: `${positionW -10}px`, backgroundColor: itemBackground }}>
            {items.map((item) => { 
                return (
                    <ThirdLevelItem key={item.id} title={item.name} itemBackground={itemBackground} id={item.id}  />
                )
            })}
        </ul>
        )
}
