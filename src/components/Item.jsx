import React from 'react'

export const Item = (props) => {
    const { items } = props
    console.log(items)

  return (
    <div>
        {/* <ul>
{ items.map(item => {
    return <li>
        {item.category_name}
    </li>
})}
        </ul> */}
    </div>
  )
}
