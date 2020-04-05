import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts, getCurrentProduct } from "../actions/product";

class ProductList extends Component {
  state = {
    products: this.props.productsList,
  };

  componentWillMount() {
    this.props.getProducts(this.props.productsList);
  }

  handleEdit = (product) => {
    this.props.getCurrentProduct(product);
  };

  render() {
    return (
      <Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Weight(In gms)</th>
              <th>Availability</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.weight}</td>
                <td>{product.availability}</td>
                <td>
                  {product.isEditable && (
                    <Link
                      to={{ pathname: `/edit-product`, state: product }}
                      className="btn btn-sm btn-primary"
                      onClick={() => this.handleEdit(product)}
                    >
                      Edit
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  productsList: state.productsList,
});

ProductList.propTypes = {
  getProducts: PropTypes.func.isRequired,
  getCurrentProduct: PropTypes.func.isRequired,
  productsList: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { getProducts, getCurrentProduct })(
  ProductList
);
