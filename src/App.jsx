
import './App.css'
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

const CLASS_UML3 = {
  name: 'Person',
  attributes: ['+name:str','+phoneNumber:str','+emailAddress:str',],
  methods:['+purcharseParkinPass()'],
  borderColor:'green',
  headColor:'#ccff99',
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
      {name:'otro menu', isFolder:true, id:22, idPadre:150},
      {name:'another menu', isFolder:true, id:223, idPadre:150},


      {name:'Action', isFolder:false, id:3, idPadre:2},
      {name:'Another action', isFolder:false, id:4, idPadre:2},
      {name:'sub menus', isFolder:true, id:5, idPadre:2},
      
      {name:'Action', isFolder:false, id:33, idPadre:22},
      {name:'another Action', isFolder:false, id:332, idPadre:22},

      {name:'Action', isFolder:false, id:323, idPadre:223},
      {name:'Action 2!!', isFolder:false, id:3232, idPadre:223},
      {name:'sub menus 2!!', isFolder:true, id:5232, idPadre:223},

      {name:'jojojo lo duende', isFolder:false, id:9564655, idPadre:5232},



      {name:'Another action', isFolder:false, id:55, idPadre:5},
      {name:'something else here', isFolder:false, id:56, idPadre:5},
    ],
  }
  return (<>
  
    <Menu config={configMenu} />

    <div className='graficos-svg'>
      <UML CLASS_UML={CLASS_UML} />
      <UML CLASS_UML={CLASS_UML2} />
      <UML CLASS_UML={CLASS_UML3} />
    </div>
  </>)
}

export default App
