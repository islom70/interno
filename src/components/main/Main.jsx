import React from 'react'
import classes from '../main/Main.module.css'
import SecOne from './secone/SecOne'
import SecTwo from './sectwo/SecTwo'
import SecFour from './secfour/SecFour'
import SecFive from './secfive/SecFive'

function Main() {
  return (
    <div className={classes.main}>
        <SecOne/>
        <SecTwo/>
        <SecFour/>
        <SecFive/>
    </div>
  )
}

export default Main