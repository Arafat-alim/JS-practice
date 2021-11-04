import { Component } from "react";
//! connecting wiht store
import { connect } from "react-redux";
class PurchasedCl extends Component {
  render() {
    return (
      <div className="customeDiv">
        <h2>Purchased - Class Component</h2>
        <hr />

        <select>
          {this.props.products.map((product) => {
            return (
              <option key={product.id}>
                {product.pName} - ${product.cost}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

export default connect(mapStateToProps)(PurchasedCl);
