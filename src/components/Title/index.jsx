import React from 'react'
import H1 from './style'

function Title({children}) {   //geting the props from page and saving
  return (
    <H1>{children}</H1>
  )
}

export default Title