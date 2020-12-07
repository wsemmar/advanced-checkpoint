import React from "react";

const ProductTable = ({ product }) => {
  return (
    <div>
      <table style={{ width: "100%", height: "16em" }}>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
        {product.map((elem) => {
          return (
            <tr>
              <td>{elem.name}</td>
              <td>{elem.category}</td>
              <td>{elem.price}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ProductTable;
