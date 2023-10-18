import React, {useEffect, useState} from 'react'
import classes from '../secfour/SecFour.module.css'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'

function SecFour() {
    const [prod, setprod] = useState([])
    useEffect(() => {
        axios.get("https://admin.taffeine.com/api/home/about_product").then((resp) => {
            let data = resp.data.data;
            setprod(data);
        })
    }, [])
    
  return (
    <div className={classes.main}>
        <Container>
            <Row>
                <Col xs={6}>
                    <h1 className={classes.title}>{prod.title}</h1>
                    <p className={classes.text} dangerouslySetInnerHTML={{__html: prod.content}}></p>
                    <button className={classes.btn_green}>Подробно</button>
                </Col>
                <Col xs={6}>
                    <img src={prod.img} alt="" className={classes.pic} />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default SecFour