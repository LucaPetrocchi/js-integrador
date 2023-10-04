import PropTypes from 'prop-types'
import './FolderContents.css'

function FolderContents ({items, itemBackground}) {

    return(
        <ul className='folderContents' style={{translate: `-10px 85px`}}>
            {items.map((item) => { // este return va a devolver elementos SecondLevelItem
                return (
                    <li key={item.id} className='folderContentsItems' style={{background: itemBackground}}>
                        {item.name}
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