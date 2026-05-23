import React, { useEffect, useState } from 'react'
import Filters from './Filters'
import UserCards from './UserCards'
import SearchBar from './SearchBar';

const UsersList = () => {
  return (
    <>
      <h1>Fellows & Mentees</h1>
      <div className="container">
        <SearchBar/>
        <div className="layout">
          <Filters />
          <UserCards />
        </div>
      </div>
    </>
  )
}

export default UsersList
