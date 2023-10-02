import PropTypes from 'prop-types'
import './FolderContents.css'

function FolderContents ({items}) {
    return(
        <ul>
            {items.map((item) => { // este return va a devolver elementos SecondLevelItem
                return <li key={item.id} className='Folder-Contents'>
                    {item.name}
                </li>
            })}
        </ul>
        )
}

export default FolderContents

FolderContents.propTypes = {
    items: PropTypes.object,
}