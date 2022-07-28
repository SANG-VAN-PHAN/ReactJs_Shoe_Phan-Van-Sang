import React, { Component } from "react";

export class ProductDetail extends Component {
  closeButtonRef = React.createRef();
 



  render() {
    const { name, image, description, quantity, price } =
      this.props.selectedProduct;
    return (
      <div className="row">
        <h1 className="text-center">THÔNG TIN SẢN PHẨM</h1>
        <div className="col-6">
          <h1 className="display-4">{name}</h1>
          <img src={image} className="w-100" />
        </div>
        <div className="col-6">
          <h1 className="display-4">Thông tin</h1>
          <p><h3>Name: {name}</h3> </p>
          <p><h4>Price: {price}</h4> </p>
          <p><h5>Description: {description}</h5></p>
          <p><h5>Stock: {quantity}</h5> </p>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
