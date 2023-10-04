
import './App.css'
import Menu from './components/Menu'
import UML from './components/DrawClass';

const CLASS_UML = {
  name: 'Person',
  attributes: ['+name:str','+phoneNumber:str','+emailAddress:str',],
  methods:['+purcharseParkinPass()'],
  borderColor:'red',
  headColor:'pink',
  textColor:'black'
}

const CLASS_UML2 = {
  name: 'Addres',
  attributes: ['+Street:str','+City:str','+State:str','+PostalCode:int','+Country:str',],
  methods:['-validate():bool', '+outputLabel():str'],
  borderColor:'blue',
  headColor:'lightblue',
  textColor:'black'
}

function App() {

  const configMenu = {
    configColor: {
      background:'#c3c3c3', // Color de Fondo General de la botonera
      itemBackground: '#d0d0d0',// Color de Fondo de los subMenús
      itemColor:'black', // Color del texto de cada item del menú
      itemActive:'#a8a8a8', // Color cuando hace click y se abre un submenú
    },
    idFirstNivel : 150,
    menuItems : [
      {name:'Another Action', isFolder:false, id:148, idPadre:150},
      {name:'sub menu', isFolder:true, id:2, idPadre:150},

      {name:'Action', isFolder:false, id:3, idPadre:2},
      {name:'Another action', isFolder:false, id:4, idPadre:2},
      {name:'sub menu', isFolder:true, id:5, idPadre:150},
      
      {name:'Another action', isFolder:false, id:55, idPadre:5},
      {name:'something else here', isFolder:false, id:56, idPadre:5},
    ],
    }

  return (<>
  
    <Menu config={configMenu} />

    <p>UML 1</p>
    <UML CLASS_UML={CLASS_UML} />
    <p>UML 2</p>
    <UML CLASS_UML={CLASS_UML2} />
  
  </>)
}

export default App
