import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { fetchProducts } from '../features/products/productSlice'

const UserCards = () => {
  const { filteredProducts: products, state, loading, error } = useSelector((state) => state.product)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])


  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <main>

      <div id="users" className="grid">

        {/* ================= LOADER ================= */}
        {loading && (
          <div id="loader">
            <img src="/user-filters-redux/loader-blue.gif" alt="" />
          </div>
        )}

        {/* ================= ERROR ================= */}
        {error && <h2>{error}</h2>}

        {/* ================= NO PRODUCT ================= */}
        {!loading && products.length === 0 && (
          <div className='no-result'>
            <p>User Not Found!!</p>
          </div>
        )}

        {/* ================= PRODUCTS ================= */}
        {!loading &&
          products.map((product) => {
            return (
              <div className="card" key={product.id}>
                <img src={product.profilePicture} alt={product.name} />

                <div className="card-content">
                  <h3>{product.name}</h3>

                  <p>
                    <strong>Year:</strong> {product.years}
                  </p>

                  <p>
                    <strong>Category:</strong> {product.category}
                  </p>

                  <p>
                    <strong>Country:</strong> {product.countries}
                  </p>
                  <Link
                    to={`/product/${product.id}`}
                    className="card-link button-link"
                  >
                    View Detail
                  </Link>
                </div>
              </div>
            );
          })}
      </div>


    </main>
  )
}

export default UserCards
