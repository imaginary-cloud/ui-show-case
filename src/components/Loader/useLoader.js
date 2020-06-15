import { useState } from 'react'

const useLoader = () => {
  const [isLoading, setIsLoading] = useState(true)

  function toggle() {
    setIsLoading(prevState => !prevState)
  }

  return [isLoading, toggle]
}

export default useLoader
