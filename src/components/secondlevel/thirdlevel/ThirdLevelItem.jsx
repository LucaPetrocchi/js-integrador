import React from 'react'
import './ThirdLevelItem.css'

export default function ThirdLevelItem({title, id, itemBackground}) {
  return (

    <li className='subfolderContentsItems' style={{background: itemBackground}}>
        {title}
    </li>
  )
}
