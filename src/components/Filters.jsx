import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setYear, setCountry, applyFilters, resetFilters } from '../features/products/productSlice'

const Filters = () => {
  const dispatch = useDispatch();
  const { categories, years, countries, filters } = useSelector((state) => state.product);

  return (
    <aside className="filters">
      <h3>Filter</h3>
      <label>
        Category
        <select id="categoryFilter" value={filters.category} onChange={(e) => dispatch(setCategory(e.target.value))} >
          <option value="">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </label>

      <label>
        Year
        <select id="yearFilter" value={filters.year} onChange={(e) => dispatch(setYear(e.target.value))} >
          <option value="">All</option>
          {years.map((year, index) => (
            <option key={index} value={year}>{year}</option>
          ))}
        </select>
      </label>

      <label>
        Country
        <select id="countryFilter" value={filters.country} onChange={(e) => dispatch(setCountry(e.target.value))}>
          <option value="">All</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>
      </label>

      <div className="filter-buttons">
        <button id="applyFilters" onClick={() => dispatch(applyFilters())}>Apply</button>
        <button id="resetFilters" className="reset" onClick={() => dispatch(resetFilters())}>Reset</button>
      </div>
    </aside>
  )
}

export default Filters
