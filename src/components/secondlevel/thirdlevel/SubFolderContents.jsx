import React from 'react'
import './SubFolderContents.css'

export default function SubFolderContents({items, itemBackground}) {
    return(
        <ul className='subfolderContents' style={{translate: `100px`}}>
            {items.map((item) => { // este return va a devolver elementos SecondLevelItem
                return (
                    <li key={item.id} className='subfolderContentsItems' style={{background: itemBackground}}>
                        {item.name}
                    </li>
                )
            })}
        </ul>
        )
}
