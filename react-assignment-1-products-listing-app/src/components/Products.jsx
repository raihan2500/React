/* eslint-disable react/prop-types */
import Product from "./Product";

function Products(props){
  const products = props.products;
  return(
    <div className="products">
      {
        products.map((product)=> 
          // console.log(product);
          <Product key={product.id} product = {product}/>
          // <Product key={product.id} items = {product}/>
        )
      }
      
    </div>
  );

}

export default Products; 