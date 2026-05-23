import {Routes, Route, BrowserRouter } from 'react-router-dom'
import UsersList from './components/UserList'
import UserDetails from './components/UserDetails'
import { Provider } from 'react-redux'
import store from './app/store'
function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<UsersList />} />
            <Route path='/product/:id' element={<UserDetails />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    </>
  )
}

export default App
