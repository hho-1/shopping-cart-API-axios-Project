
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";



const ProductList = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorState, setErrorState] = useState(false)

  const getProducts = async () => {
    try {

      const {data} = await axios("https://63f4e5583f99f5855db9e941.mockapi.io/products")             //axiosun default istegi get oldugu icin yazsak da olur yazmasak da
      
      setProducts(data)
      setErrorState(false)

    } catch (error) {
      console.log(error);
      setErrorState(true)
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {                                          //useEffect aslinda componentDidMount demek, dependency arrayin bos olmasi
    getProducts()
  
    
  }, [])
  
  if(errorState){
    return <p>Something went wrong...</p>            //Buraya girince alttaki return kismina hic girmiyor. Yani hata aldigimizda sadece burasi gösteriliyor. Bu kisim alttaki returnün icinde loadingden önce de yazilabilirdi
  }

  return (
    <div className="container mt-3">
      <div className={"bg-light d-sm-block d-md-flex"}>
        {
          loading 
          ? 
          <p className="text-center text-danger w-100">Loading....</p> 
          : 
          (!products.length                               /* Burada sadece products ? yazamiyoruz. Cünkü array bos da olsa degeri truthy kabul ediliyor. non-primitive type'larda böyle. Cünkü degerlerine degil referanslarina bakiyor */
            ? 
          <p className="text-center text-danger w-100">No products data...</p> 
          :
          <>
          <article id="product-panel" className="col-md-5">
            {
              products.map(product => (<ProductCard getProducts={getProducts} key={product.id} {...product}/>))
            }
            
          </article>
          <article className="col-md-5 m-3">
            <CardTotal />
          </article>
        </>)
        }
        
      </div>
    </div>
  );
};

export default ProductList;
