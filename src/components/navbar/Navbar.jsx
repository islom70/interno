import React, { useEffect } from 'react'
import classes from '../navbar/Navbar.module.css'
import { Container } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const [link, setlink] = useState([])
    useEffect(()=> {
        axios.get("https://admin.taffeine.com/api/menu").then((resp)=>{
            let data = resp.data.data;
            setlink(data);
        });
    }, []);

  return (
    <div className={classes.navbar}>
        <Container>
            <nav className={classes.nav}>
                <a href="" className={classes.logo}>
                    <img src="https://taffeine.com/_nuxt/img/logo.6335003.svg" className={classes.logo_img} alt="" />
                </a>
                <ul className={classes.item}>{
                    link.map((item, index)=>{
                        return <li key={index}>
                            <NavLink to={item.slug}>
                            {item.title}
                            </NavLink>
                        </li>;
                    })
                }</ul>
                <div className={classes.box_btn}>
                    <button type='button' className={classes.but}>Узнать больше</button>
                    <button type='button' className={classes.butTwo}>Русский</button>
                </div>
            </nav>
        </Container>
    </div>
  )
}

export default Navbar