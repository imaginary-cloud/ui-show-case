import { useState } from 'react'

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)

  function toggle() {
    setIsShowing(prevState => !prevState)
  }

  return [isShowing, toggle]
}

export default useModal
