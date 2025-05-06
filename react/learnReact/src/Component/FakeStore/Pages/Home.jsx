import instance from "../axiosConfig.js";
import { useState, useEffect } from "react";
import Product from '../Product'

function Home(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        setLoading(true);
        const result = await instance.get("/products");
        setProducts(result.data.products);
        setLoading(false);
      }
      
    return (
        <>
        <div className="products flex flex-wrap justify-around items-center gap-4 px-12 bg-gray-100">
        {products.length > 0 &&
          products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
      </div>
        </>
    );
}

export default Home;