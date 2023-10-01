import PropTypes from 'prop-types'
import './Menu.css'
import FirstLevelItem from './FirstLevelItem'

function Menu ({config}) {
    const current_url = '/#'
    const { configColor, idFirstNivel, menuItems } = config

    const firstLevelItems = menuItems.filter((item) => item.idPadre === idFirstNivel)
    const otherItems = menuItems.filter((item) => item.idPadre != idFirstNivel)

    // const [hoverState, setHoverState] = useState(false)

    // function hoverToggle () {
    //     setHoverState(!hoverState)
    // }

    return (<>
    <ul style={{
            background: configColor.background,
            color: configColor.itemColor,
        }} 
        className='Menu'
    >
        {firstLevelItems.map((item) => {
            return(
                <FirstLevelItem 
                    key={item.id} 
                    item={item} 
                    itemColor={configColor.itemColor} 
                    itemActive={configColor.itemActive} 
                    url={current_url}
                    isFolder={item.isFolder}
                    otherItems={ item.isFolder ? otherItems : undefined }
                /> 
                )
            })}
    </ul>
    </>)

}

Menu.propTypes = {
    config: PropTypes.object,
    configColor: PropTypes.object,
    idFirstNivel: PropTypes.number,
    menuItems: PropTypes.array
}

export default Menu