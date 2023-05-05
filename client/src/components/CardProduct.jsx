import React from 'react'
import logoMeli from '../assets/Logo_ML.png'
import logoShipping from '../assets/ic_shipping.png'
import {Link} from 'react-router-dom'


export const CardProduct = (props) => {
    return (
        <>
            <div className='card-container'>
                <div>
                    <img src={logoMeli} alt="Imagen Producto" className='card-img m-16'/>
                </div>
                <div style={{width: '60%'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <p className='title mb-32'>$ 1980</p> 
                        <img src={logoShipping} alt="Logo Envios" height={20} width={20} style={{marginLeft: '12px'}}/>
                    </div>
                    <Link to="/detail"><p className='subtitle'>Bla BlBla BlaBla BlaBla BlaBla BlaBla BlaBla Blaa</p></Link>
                </div>
                <div>
                    <p className='span pt-32'>Capital Federal</p>
                </div>
            </div>
            {
                props.index !== 3 ? <hr className='separator'/> : null
            }
        </>

        
    )
}


/*
export const Card = (props) => {
    return (
        <div className='card-container'>
            <div>
                <img src={props.picture} alt="Imagen Producto" className='card-img m-16'/>
            </div>
            <div style={{width: '60%'}}>
                <p className='title mb-32'>$ {props.price.amount}</p>
                <p className='subtitle'>{props.description}</p>
            </div>
            <div>
                <p className='span pt-32'>{props.location}</p>
            </div>
        </div>
    )
}
*/