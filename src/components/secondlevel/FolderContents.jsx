import PropTypes from 'prop-types'
import './FolderContents.css'

function FolderContents ({items, itemBackground, right, bottom}) {
    // manejador de clic que recibe un evento 
    const handleItemClick = (e) => {
        // rect va a ser una constante durante el ciclo de vida de la funcion, va a representar el elemento HTML
        const rect = e.target.getBoundingClientRect();
        // limite izquierdo del elemento, limite superior del elemento
    }
    console.log(right)

    return(
        <ul style={{position:'absolute', right: `${right}px`, top: `${bottom}px`,}}>
            {items.map((item) => { // este return va a devolver elementos SecondLevelItem
                return (
                    <li className='folderContentsItems' key={item.id} style={{background: itemBackground}} onClick={handleItemClick} >
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