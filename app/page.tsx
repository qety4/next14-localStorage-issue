'use client'

import useLocalStorage from "../hooks/useLocalStorage"

const page = () => {
  const [items, SetItems] = useLocalStorage('items', ['whole', 'lotta', 'items'])


  return (
    <div>
      {
        items.map((i) =>
          <p>{i}</p>
        )
      }
    </div>
  )

}

export default page