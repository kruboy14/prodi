import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Button as BaseButton} from '@material-ui/core'
const Button = () => {
  return (
    <BaseButton color='primary' style={{width: '220px'}} endIcon={<ArrowDropDownIcon/>}>
      Load More
    </BaseButton>
  )
}

export default Button
