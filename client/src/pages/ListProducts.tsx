import * as React from 'react';
import { CardProduct } from '../components/CardProduct'
import { BreadCrumb } from '../components/BreadCrumb'

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/data');
    const data = await res.json();
    return { props: { data } };
}

export const ListProducts = () => {

    const [articles, setArticles] = React.useState([{}])

    React.useEffect(() => {
        fetch('api/items')
        .then(response => response.json())
        .then(data => {
            console.log(data.results)
            setArticles(data.results)
        })
    }, [])

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

