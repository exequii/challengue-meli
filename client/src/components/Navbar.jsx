import React from 'react'
import logoMeli from '../assets/Logo_ML.png'
import searchIcon from '../assets/ic_Search.png'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='nav-container_center'>
                <Link to="/"><img src={logoMeli} alt="logo Mercadolibre" width={45} height={30} className='nav-container_logoMeli'/></Link>
                <input type="text" className='nav-container_search' placeholder='Nunca dejes de buscar'/>
                <Link to="/items" className='nav-container_buttonSearch'><img src={searchIcon} alt="Lupa Buscador" /></Link>
            </div>
        </div>
    )
}
