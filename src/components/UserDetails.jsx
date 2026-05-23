import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { fetchProducts } from '../features/products/productSlice';

const UserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { allProducts, loading } = useSelector((state) => state.product);

  const product = allProducts.find((item) => item.id === Number(id))


  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(fetchProducts())
    }

  }, [dispatch, allProducts.length])

  if (!product) {
    return <h2>Product Not Found</h2>;
  }
  if (loading) {
    return <p>Loding...</p>
  }

  return (
    <div className="details-container">
      <Link to="/" className="back-btn">← Back</Link>
      <div id="userDetails">
        <div className="user-detail">
          <div className="user-left">
            <img src={product.profilePicture} alt={product.name} />
            <div className="user-name">{product.name}
            </div>
            <div className="user-country">{product.countries || []}</div>
            <div className="user-year">{product.years}</div>
          </div>
          <div className="user-right">
            <div className="user-category">
              <h3>{product.category}</h3>
              <p>{product.description}</p>
            </div>
            <div className="content">
              <h3>Content</h3>
              <p>{product.content}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default UserDetails