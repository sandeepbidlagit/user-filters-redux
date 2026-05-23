import {Routes, Route, HashRouter } from 'react-router-dom'
import UsersList from './components/UserList'
import UserDetails from './components/UserDetails'
import { Provider } from 'react-redux'
import store from './app/store'
function App() {

  return (
    <>
      <Provider store={store}>
        <HashRouter>
          <Routes>
            <Route path='/' element={<UsersList />} />
            <Route path='/product/:id' element={<UserDetails />} />
          </Routes>
        </HashRouter>
      </Provider>

    </>
  )
}

export default App
