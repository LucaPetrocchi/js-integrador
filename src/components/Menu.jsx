import PropTypes from 'prop-types'
import './Menu.css'
import FirstLevelItem from './firstlevel/FirstLevelItem'

function Menu({ config }) {
  const current_url = '/#'
  const { configColor, idFirstNivel, menuItems } = config // destructurando props

  const firstLevelItems = menuItems.filter((item) => item.idPadre === idFirstNivel)
  // ^ define qué items son de primer nivel: los que tienen una idPadre igual a la idFirstNivel
  const otherItems = menuItems.filter((item) => item.idPadre != idFirstNivel)
  // ^ saca todos los items que NO son de primer nivel para pasarlos como props

  return (<>
    <ul style={{
            background: configColor.background,
            color: configColor.itemColor,
        }} 
        className='menu'
    >
      {firstLevelItems.map((item) => { // devuelve un objeto FirstLevelItem (tipo <li>) por cada ítem de primer nivel
        return (
          <FirstLevelItem
            key={item.id}
            item={item} // el objeto "item" contiene la id, id del pariente, nombre (texto), y un bool que determina si es folder o no
            itemColor={configColor.itemColor}
            itemActive={configColor.itemActive}
            url={current_url}
            otherItems={item.isFolder ? otherItems : undefined} // si es folder, recibe todos los demás items (que no son de 1er nivel)
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