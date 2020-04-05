import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProduct, updateProduct } from "../actions/product";
import { pricingInfo } from "../React-products";

const UpdateProductForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    availability: "",
    productUrl: "",
    pricingTier: "",
    priceRange: "",
    isEditable: "",
  });

  useEffect(() => {
    props.getCurrentProduct(props.location.state);
    //console.log(props.location.state);
    setFormData({
      name:
        props.loading || !props.productInfo.name ? "" : props.productInfo.name,
      weight:
        props.loading || !props.productInfo.weight
          ? ""
          : props.productInfo.weight,
      availability:
        props.loading || !props.productInfo.availability
          ? ""
          : props.productInfo.availability,
      productUrl:
        props.loading || !props.productInfo.productUrl
          ? ""
          : props.productInfo.productUrl,
      pricingTier:
        props.loading || !props.productInfo.pricingTier
          ? ""
          : props.productInfo.pricingTier,
      priceRange:
        props.loading || !props.productInfo.priceRange
          ? ""
          : props.productInfo.priceRange,
      isEditable:
        props.loading || !props.productInfo.isEditable
          ? ""
          : props.productInfo.isEditable,
    });
  }, [props]);

  const onSubmit = (e) => {
    e.preventDefault();
    props.updateProduct(formData);
    props.history.push("/");
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSelect = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.checked });

  const {
    name,
    weight,
    availability,
    productUrl,
    pricingTier,
    priceRange,
    isEditable,
  } = formData;

  return (
    <Fragment>
      <div className="container">
        <h1>Edit Product Details</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="product-name">Name</label>
            <input
              type="text"
              className="form-control"
              id="product-name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-weight">Weight</label>
            <input
              type="text"
              className="form-control"
              id="product-weight"
              name="weight"
              value={weight}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-availability">Availability</label>
            <input
              type="number"
              className="form-control"
              id="product-availability"
              name="availability"
              value={availability}
              onChange={(e) => onChange(e)}
              min="0"
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-url">Product Url</label>
            <input
              type="text"
              className="form-control"
              id="product-url"
              name="productUrl"
              value={productUrl}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <legend className="col-form-label">Price Tier</legend>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pricingTier"
              id="Budget"
              value="budget"
              defaultChecked={
                props.productInfo.pricingTier === "budget" ? true : false
              }
              onChange={(e) => onSelect(e)}
            />
            <label className="form-check-label" htmlFor="Budget">
              Budget
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="pricingTier"
              id="Premier"
              value="premier"
              defaultChecked={
                props.productInfo.pricingTier === "premier" ? true : false
              }
              onChange={(e) => onSelect(e)}
            />
            <label className="form-check-label" htmlFor="Premier">
              Premier
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="price-range">Price Range</label>
            <select className="form-control" id="price-range" name="priceRange">
              {pricingTier === "premier"
                ? pricingInfo["premier"].map((priceRange) => (
                    <option>{priceRange}</option>
                  ))
                : pricingInfo["budget"].map((priceRange) => (
                    <option>{priceRange}</option>
                  ))}
            </select>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="isEditable"
              name="isEditable"
              onChange={(e) => onSelect(e)}
              defaultChecked={props.productInfo.isEditable}
            />
            <label className="form-check-label" htmlFor="isEditable">
              isEditable
            </label>
          </div>
          <button
            className="btn btn-primary"
            disabled={
              !name || !weight || !productUrl || !pricingTier || !priceRange
            }
          >
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  productInfo: state.productInfo,
  loading: state.loading,
});

UpdateProductForm.propTypes = {
  productInfo: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  getCurrentProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getCurrentProduct, updateProduct })(
  UpdateProductForm
);
