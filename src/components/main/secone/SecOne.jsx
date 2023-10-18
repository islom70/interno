import React, {useEffect, useState} from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import classes from '../secone/SecOne.module.css'
import axios from 'axios'
import Card from './card/Card'

function SecOne() {

    const [slide, setslide] = useState([])
    useEffect(() => {
      axios.get("https://admin.taffeine.com/api/home/banner").then((resp)=>{
        let data = resp.data.data;
        setslide(data);        
      })
    }, []);

  return (
    <div className={classes.SecOne}>
      <OwlCarousel className='owl-theme' items={1} loop nav>
              {slide.map((item, index)=>{
                  return <Card 
                      key={index}
                      title={item.title}
                      text = {item.short_content}
                      img = {item.url}
                  />;
              })}
      </OwlCarousel>
    </div>
  )
}

export default SecOne