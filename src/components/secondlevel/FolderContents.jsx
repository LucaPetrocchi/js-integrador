import PropTypes from 'prop-types'
import './FolderContents.css'

function FolderContents ({items, itemBackgorund}) {
    return(
        <ul>
            {items.map((item) => { // este return va a devolver elementos SecondLevelItem
                return (
                    <li key={item.id} className='folderContentsItems' style={{background: itemBackgorund}}>
                        {item.name}
                    </li>
                )
            })}
        </ul>
        )
}

export default FolderContents

FolderContents.propTypes = {
    items: PropTypes.object,
}