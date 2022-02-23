import React from 'react'
import loadable from '@loadable/component'

const Newsletters = loadable(() => import('./newsletters'))

const DisplayNewsletters = () => {
  return (
    <div>
      <Newsletters />
    </div>
  )
}


export default DisplayNewsletters
