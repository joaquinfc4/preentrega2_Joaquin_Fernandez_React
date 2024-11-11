import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";
/* import { getProducts } from "../../data/data"; */
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loading from "../Loading/Loading";
import { useFetcher } from "react-router-dom";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { idProduct } = useParams()

    const getProductById = () => {
        const docRef = doc( db, "products", idProduct)
        getDoc(docRef)
        .then((dataDb)=> {
            const productDb = { id: dataDb.id, ...dataDb.data() }

            setProduct(productDb)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        getProductById()



        
    }, [idProduct])

    return (
        <div>
            {
                loading === true ? (
                    <Loading />
                ) : (
                    <ItemDetail product={product} />
                )
            }
        </div>

    )
}

export default ItemDetailContainer