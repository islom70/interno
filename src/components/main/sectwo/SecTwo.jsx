import React, {useState, useEffect} from 'react'
import classes from '../sectwo/SecTwo.module.css'
import { Container } from 'react-bootstrap'
import axios from 'axios';
import Card from './card/Card';

function SecTwo() {
    const [dan, setdan] = useState([]);
    useEffect(() => {
        axios.get("https://admin.taffeine.com/api/home/what_product").then((resp) => {
            let data = resp.data.data;
            setdan(data);
        });
    }, []);
    
  return (
    <Container>
        <div className='father'>
            {dan.map((item, index) => {
                return <Card key={index} title ={item.title} text = {item.short_content} img = {item.url} />;
            })}
        </div>
    </Container>

  )
}

export default SecTwo