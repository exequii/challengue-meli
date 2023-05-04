import React from 'react'
import logoMeli from '../assets/Logo_ML.png'
import searchIcon from '../assets/ic_Search.png'

export const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='nav-container_center'>
                <img src={logoMeli} alt="logo Mercadolibre" width={45} height={30} className='nav-container_logoMeli'/>
                <input type="text" className='nav-container_search' placeholder='Nunca dejes de buscar'/>
                <a className='nav-container_buttonSearch'><img src={searchIcon} alt="Lupa Buscador" /></a>
            </div>
        </div>
    )
}
