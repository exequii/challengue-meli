import React from 'react'
import logoMeli from '../assets/Logo_ML.png'
import { BreadCrumb } from '../components/BreadCrumb'

export const ProductDetail = () => {
    return (
        <div className='detail-container'>
            <BreadCrumb></BreadCrumb>
            <div className='detail-product'>
                <div className='d-flex'>
                    <div>
                        <img src={logoMeli} alt="Imagen del Producto" className='detail-img m-16'/>
                    </div>
                    <div className='mt-32 mr-32'>
                        <p className='mb-16'>Nuevo - 234 vendidos</p>
                        <p className="title mb-32 two-lines bold">Deco Reverse Sombrero Oxford</p>
                        <p className='price mb-32'>$ 1.980</p>
                        <button className='btn mr-32'>Comprar</button>
                    </div>
                </div>

                <div className='m-32'>
                    <h3 className='mb-32 f-28'>Descripcion del producto</h3>
                    <p className="span f-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deleniti commodi,
                        voluptates aperiam illo consequuntur magni tenetur nemo officiis dolorem sit earum, molestiae,
                        nobis neque cupiditate aliquam autem voluptas beatae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deleniti commodi,
                        voluptates aperiam illo consequuntur magni tenetur nemo officiis dolorem sit earum, molestiae,
                        nobis neque cupiditate aliquam autem voluptas beatae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deleniti commodi,
                        voluptates aperiam illo consequuntur magni tenetur nemo officiis dolorem sit earum, molestiae,
                        nobis neque cupiditate aliquam autem voluptas beatae!
                    </p>
                </div>
            </div>
        </div>
    )
}
