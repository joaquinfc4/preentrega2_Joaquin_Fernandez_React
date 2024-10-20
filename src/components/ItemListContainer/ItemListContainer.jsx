import { useState, useEffect } from "react"
import { getProducts } from "../../data/data"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import "./itemlistcontainer.css"



const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([])
    const { idCategory } = useParams()

    useEffect(() => {
        getProducts()
            .then((dataProducts) => {
                if (idCategory) {
                    const filterProducts = dataProducts.filter( (product)=> product.category === idCategory )
                    setProducts(filterProducts)
                }else {
                    setProducts(dataProducts)
                }

            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                console.log("finalizó la promesa")
            })
    }, [idCategory])


    return (
        <div>
            <h2>{saludo}</h2>
            <ItemList products={products} />
        </div>

    )
}

/* const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer) */

export default ItemListContainer