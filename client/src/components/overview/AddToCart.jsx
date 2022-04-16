import React from 'react';
import './AddToCart.css';

const AddToCart = (props) => {
  const maxQuantity = props.maxQuantity;
  const isOutOfStock = maxQuantity === 0;
  const isMoreThan15 = maxQuantity > 15;
  const selectedSKU = props.selectedSKU;
  const hasNotSelectedSKU = selectedSKU === '';

  return (
    <div>
      <div>AddToCart</div>
      <div id="size">
        <span className="sizeAlert" hidden>Please select a size</span>
        <select id="sizeDropdown" value={props.selectedSKU} onChange={props.onSizeChange} >
          <option value="SELECT SIZE" hidden="hidden">SELECT SIZE</option>
          {Object.keys(props.selectedStyle?.skus || {}).map((sku, index) => {
            return (
              <option key={index} value={sku}>{props.selectedStyle.skus[sku].size}</option>
            );
          })}
        </select>
      </div>
      <div id="quantity">
        <select name="quantity" id="quantity" value={props.selectedQuantity} onChange={props.onQuantityChange}>
          {hasNotSelectedSKU
            ? <option value="-" hidden>-</option>
            : (isOutOfStock
              ? <option value="outOfStock">OUT OF STOCK</option>
              : Array(isMoreThan15 ? 15 : maxQuantity).fill().map((num, i) => i + 1).map((quantity, index) => {
                  return (
                    <option key={index} value={quantity}>{quantity}</option>
                  );
                })
            )
          }
        </select>
      </div>
      <div id="addToBag"><button id="addToBagButton" onClick={props.onAddToCartClick}>ADD TO BAG +</button></div>
      <div id="addToBag"><button>&#9734;</button></div>
    </div>
  );
}

export default AddToCart;