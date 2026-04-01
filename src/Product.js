import React from "react";

class Product extends React.Component{
    render(){
        return(
            <div>
                
                <p>Title : Gerbera</p>
                <img src="\images\Lotus.jpg" width="100px" height="100px"/>
                <p>Price : 100</p>
                <p>Description : Gerbera is a genus of ornamental plants from the sunflower family.</p>

                <button> Add to Cart</button>
            </div>
        )
    }

}
export default Product;