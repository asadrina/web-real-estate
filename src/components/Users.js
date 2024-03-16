import React from 'react'
import UserForm from './UserForm'
import UserTable from './UserTable'
import UserGrid from './UserGrid'

export default function Users() {
  return (
    <div className="container">
        <UserGrid/>
    {/* <div className="row">
      <div className="col-md-6">
        <UserForm/>
      </div>
      <div className="col-md-6">
        <UserTable />
      </div>
    </div> */}
  </div>
  )
}
