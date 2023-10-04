import {React, useState} from 'react'
import PropTypes from 'prop-types'
import './FolderContents.css'
import SubFolderContents from './thirdlevel/SubFolderContents'

function FolderContents ({items, itemBackground}) {
    // { name: 'Another action', isFolder: false, id: 4, idPadre: 2 }

    const [SubOpenState, SubSetOpenState] = useState(false)

    function SubOpenToggle () {
        SubSetOpenState(!SubOpenState)
    }
    
    return(
        <ul className='folderContents' style={{translate: `-10px 45px`}}>
            {items.map((item) => { // este return va a devolver elementos SecondLevelItem
            console.log(item)
                return (
                    <li key={item.id} className='folderContentsItems' style={{background: itemBackground}} onClick={ item.isFolder ? SubOpenToggle : undefined }>
                        {item.name}
                        {item.isFolder && (SubOpenState ? ( 
                            <SubFolderContents items={items} itemBackground={itemActive}/>
                        ) : null)}
                    </li>
                )
            })}
        </ul>
        )
}

export default FolderContents

FolderContents.propTypes = {
    items: PropTypes.array,
    itemBackground: PropTypes.string,
    offset: PropTypes.number,
}