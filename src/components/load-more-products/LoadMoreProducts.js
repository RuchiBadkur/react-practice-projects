import React, {useState, useEffect} from "react";
import "./styles.css";


const LoadMoreProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const [disableButton, setDisableButton] = useState(false);
    
    async function fetchProducts(){
        try {

            setLoading(true);

            const response  = await fetch(`https://dummyjson.com/products?limit=20&skip=${pageNumber === 0 ? 0 : pageNumber * 20}`);

            const result = await response.json();

            
            if(result && result.products && result.products.length){
                setProducts((prevData)=>[...prevData, ...result.products]);
                setLoading(false);
            }
            console.log(result);
        }
        catch(e){
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchProducts()
    }, [pageNumber]);

    useEffect(()=>{
        if(products && products.length === 100) setDisableButton(true);
    }, [products])

    if(loading){
        return <div>Loading data ! Please wait.</div>
    }

    return (
        <div className="load-more-container">
            <div className="product-container">
                {
                    products && products.length ? 
                    products.map(item => <div className="product" key={item.id}>
                        <img 
                            src = {item.thumbnail}
                            alt ={item.title}
                        />
                        <p>{item.title}</p>
                    </div>)
                    :null
                }

                <div className="button-container">
                    <button disabled={disableButton} onClick={()=>setPageNumber(pageNumber+1)}>Load More Products</button>
                    {
                        disableButton 
                        ? <p>You have reached to 100 products.</p> 
                        : null
                    }
                </div>
            </div>
        </div>
    )

}
export default LoadMoreProducts;