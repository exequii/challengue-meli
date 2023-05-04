import {useState, React} from 'react'
import { CardProduct } from '../components/CardProduct'



export const ListProducts = () => {

    const [articles, setArticles] = useState([{},{},{},{}])

    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{width: '75%', backgroundColor: 'white', margin:'10px', borderRadius: '5px'}}>
                {
                    articles.map((article, index) => {
                    return <CardProduct key={index} {...article} index={index}></CardProduct>
                    })
                }
            </div>
        </div>
    )
}
