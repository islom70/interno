import React from 'react'
import classes from '../card/Card.module.css'

function Card(props) {
  return (
    <div className='card'>
        <div className="card-item">
            <div className='card-item-img'>
                <img src={props.img} alt="" className='what-img' />
            </div>
            <div className='card-item-info'>
                <h3 className='title'>{props.title}</h3>
                <p className='text'>{props.text}</p>
            </div>
        </div>
    </div>
  )
}

export default Card