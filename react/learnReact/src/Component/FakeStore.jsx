import axios from "axios";
import { useEffect, useState } from "react";

function FakeStore(){

    const [products, setProducts] = useState([]);

    useEffect(() => {getData();}, []);

    async function getData() {
        const result = await axios.get("https://fakestoreapi.in/api/products");
        console.log(result.data.products);
        setProducts(result.data.products);
    }

    function trimContent(input, length){
        return input.length > length ? input.split(" ").slice(0, length + 1).join(" ") + "..." : input;
    }

    return (
        <>
        <div className="product flex flex-wrap justify-around items-center gap-3 px-10">
        {
            products.length > 0 && products.map((product) => {
                return (
                <div key={product.id} className="product w-[23%] h-96 p-2">
                    <img className="w-full h-1/2 border-1" src={product.image} alt={product.title} />
                    <h3>{trimContent(product.title, 8)}</h3>
                    <p className="text-xl text-red-500 font-bold">${product.price}</p>
                </div>
            );
            })
        }
        </div>
        </>
    );
}

export default FakeStore;