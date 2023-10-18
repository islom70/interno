import React from 'react'
import classes from '../card/Card.module.css'

function Card(props) {
  return (
    <div className={classes.card} style={{backgroundImage: `url(${props.img})`}}>
      <div className='container'>
        <h1 className={classes.title}>{props.title}</h1>
          <p className={classes.text}>{props.text}</p>
          <a className={classes.link} href="">Узнать больше</a>
      </div>
    </div>
  )
}

export default Card