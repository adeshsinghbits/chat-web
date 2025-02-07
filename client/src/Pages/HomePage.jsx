import React from 'react'
import { Helmet } from 'react-helmet-async'
import Home from '../Components/Home'

function HomePage() {
  return (
    <div>
        <Helmet>
            <title>Home - chatapp</title>
        </Helmet>
        <Home />
    </div>
  )
}

export default HomePage