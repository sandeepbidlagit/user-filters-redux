import {useDispatch, useSelector} from 'react-redux'
import { setSearch, applyFilters } from '../features/products/productSlice'

const SearchBar = () => {
  const dispatch = useDispatch();
  const {filters} = useSelector((state)=> state.product)
  return (
    <div>
    <div className="wrapper-input">
      <input type="text" value={filters.search} onChange={(e)=> dispatch(setSearch(e.target.value))} placeholder='Search...' id="searchInput" />
       <div className='fellow-search-btn' onClick={()=> dispatch(applyFilters())}>
       </div>
    </div>
    </div>
  )
}

export default SearchBar
