import React, { useEffect } from 'react'

import Loader from './index'
import useLoader from './useLoader'

export default {
  title: 'Loader',
}

export const App = () => {
  const [isLoading, setIsLoading] = useLoader()

  useEffect(() => {
    fakeGetData()
  }, [])

  function fakeGetData() {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('Hello world')
        setIsLoading(false)
      }, 2000),
    )
  }

  return (
    <div>
      <h1>Hello world</h1>
      <Loader isLoading={isLoading}>
        <h2>Loading... </h2>
      </Loader>
    </div>
  )
}
