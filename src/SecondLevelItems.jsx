function SecondLevelItems ({item}) {
    return(
        <ul>
            {item.map((item) => {
                return <li key={item.id} className='Submenu-item'>
                    {item.name}
                </li>
            })}
        </ul>
        )
}

export default SecondLevelItems