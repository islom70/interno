import React, {useEffect, useState} from 'react'
import classes from '../secfive/SecFive.module.css'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function SecFive() {
    const [prod, setprod] = useState([])
    useEffect(() => {
        axios.get("https://admin.taffeine.com/api/home/product_composition").then((resp) => {
            let data = resp.data.data;
            setprod(data);
        })
    }, [])
    


  return (
    <div className={classes.main}>
        <Container>
            <h1 className={classes.title}>{prod.title}</h1>
            <Row>
                <Col xs={6}>
                    <img className={classes.pic} src={prod.img} alt="" />
                </Col>
                <Col xs={6}>
                    <table className={classes.table} dangerouslySetInnerHTML={{__html: prod.content}}></table>
                    <div className={classes.box_btn}>
                        <button className={classes.butOne}>Купить онлайн</button>
                        <button className={classes.butTwo}>Найти в аптеках</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default SecFive