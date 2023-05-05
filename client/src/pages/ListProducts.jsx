import {useState, React} from 'react'
import { CardProduct } from '../components/CardProduct'
import { BreadCrumb } from '../components/BreadCrumb'

export const ListProducts = () => {

    const [articles, setArticles] = useState([{},{},{},{}])

    return (
        <div className='listProducts-container'>
            <BreadCrumb></BreadCrumb>
            <div className='listProducts-list'>
                {
                    articles.map((article, index) => {
                    return <CardProduct key={index} {...article} index={index}></CardProduct>
                    })
                }
            </div>
        </div>
    )
}
