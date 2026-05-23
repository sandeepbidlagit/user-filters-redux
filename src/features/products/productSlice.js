import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  allProducts: [],
  filteredProducts: [],

  loading: false,
  error: null,

  // UNIQUE FILTER DATA
  // These arrays store unique filter values.

  // categories = ["Frontend", "Backend"]
  // years = [2021, 2022]
  // countries = ["India", "Canada"]

  categories: [],
  years: [],
  countries: [],

  filters: {
    category: "",
    year: "",
    country: "",
    search: "",
  }
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

    // LOADING
    setLoading: (state, action) => {
      state.loading = action.payload
    },

    // ERROR
    setError: (state, action) => {
      state.error = action.payload;
    },

    // SET PRODUCTS
    // action.payload contains JSON data.
    setProducts: (state, action) => {
      state.allProducts = action.payload;
      // default show all data
      state.filteredProducts = action.payload;

      // UNIQUE CATEGORY
      // new Set():- Remove Duplicate
      // Result:- Set {"Frontend", "Backend"}
      // map():- Extracts all categories. ["Frontend", "Backend", "Frontend"]
      state.categories = [...new Set(action.payload.map((item) => item.category))]

      // UNIQUE YEARS
      state.years = [...new Set(action.payload.map((item) => item.years))]

      // UNIQUE COUNTRIES
      state.countries = [...new Set(action.payload.map((item) => item.countries))]
    },

    // CATEGORY
    setCategory: (state, action) => {
      state.filters.category = action.payload
    },

    // YEAR
    setYear: (state, action) => {
      state.filters.year = action.payload
    },

    //COUNTRY
    setCountry: (state, action) => {
      state.filters.country = action.payload
    },

    //SEARCH
    setSearch: (state, action) => {
      state.filters.search = action.payload
    },

    // ================= APPLY FILTERS =================

    applyFilters: (state) => {
      const { category, country, year, search } = state.filters;

      let filtered = state.allProducts;

      // CATEGORY FILTER
      if (category) {
        filtered = filtered.filter((item) => item.category === category)
      }

      // year FILTER
      if (year) {
        filtered = filtered.filter((item) => item.year === year)
      }

      // year FILTER
      if (country) {
        filtered = filtered.filter((item) => item.countries.includes(country))
      }

      // SEARCH FILTER
      if (search) {
        filtered = filtered.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      }

      state.filteredProducts = filtered;
    },


    // RESET FILTERS
    resetFilters: (state) => {
      state.filters = {
        category: "",
        year: "",
        country: "",
        search: "",
      };

      state.filteredProducts = state.allProducts;
    }

  }
})

export const {
  setProducts,
  setLoading,
  setError,
  setCategory,
  setYear,
  setCountry,
  setSearch,
  applyFilters,
  resetFilters,
} = productSlice.actions;


export default productSlice.reducer

// Thunk
export function fetchProducts() {
  return async function fetchProductThunk(dispatch) {
    try {
      dispatch(setLoading(true))
      const res = await fetch('/users.json');
      if (!res.ok) {
        throw new Error(
          "Failed to fetch products"
        );
      }
      const data = await res.json();
      console.log(data)
      dispatch(setProducts(data))
    } catch (err) {
      console.log(err)
    } finally {
      dispatch(setLoading(false))
    }
  }
}