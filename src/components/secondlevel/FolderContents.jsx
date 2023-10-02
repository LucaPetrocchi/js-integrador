import PropTypes from 'prop-types'
import './FolderContents.css'

function FolderContents ({items, itemBackgorund}) {
    
    // manejador de clic que recibe un evento 
    const handleItemClick = (e) => {
        // rect va a ser una constante durante el ciclo de vida de la funcion, va a representar el elemento HTML
        const rect = e.target.getBoundingClientRect();
        // limite izquierdo del elemento, limite superior del elemento
        console.log(`left ${rect.right} | top ${rect.bottom}`)
    }

    return(
        <ul>
            {items.map((item) => { // este return va a devolver elementos SecondLevelItem
                return (
                    <li key={item.id} className='folderContentsItems' style={{background: itemBackgorund}} onClick={handleItemClick} >
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