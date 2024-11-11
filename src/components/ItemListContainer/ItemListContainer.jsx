import { useState, useEffect } from "react"
/* import { getProducts } from "../../data/data" */
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Loading from "../Loading/Loading"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db"
import "./itemlistcontainer.css"




const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    const getProducts = () => {
        const productsRef = collection(db, "products")
        getDocs(productsRef)
            .then((dataDb) => {
                const productsDb = dataDb.docs.map((productDb) => {
                    return { id: productDb.id, ...productDb.data() }
                })


                setProducts(productsDb)

            })
            .finally(() => {
                setLoading(false)
            })
    }

    const getProductsByCategory = () => {
        const productsRef = collection(db, "products")
        const queryCategories = query( productsRef, where("category", "==", idCategory) )
        getDocs(queryCategories)
        .then((dataDb)=> {
            const productsDb = dataDb.docs.map((productDb)=>{
                return { id: productDb.id, ...productDb.data() }
            })
            setProducts(productsDb)
        })
    }

    useEffect(() => {
        if (idCategory) {
            getProductsByCategory()
        }else {
            getProducts()
        }
    }, [idCategory])


    return (
        <div>
            <h2>{saludo}</h2>
            {
                loading === true ? (
                    <Loading />
                ) : (
                    <ItemList products={products} />
                )
            }
        </div>

    )
}

/* const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer) */

export default ItemListContainer