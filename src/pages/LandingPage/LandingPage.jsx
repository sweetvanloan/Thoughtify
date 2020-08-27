import React from  'react'
import {Link} from 'react-router-dom';
import styles from './LandingPage.module.css';

function LandingPage (){
   return (
   <div className={styles.LandingPage}>
        
       
       <a className={styles.Button} href='/login'>Login</a>
       
       <a className={styles.Button2} href='/signup'>Signup</a>
       <img src="https://imgur.com/sSDvxEx.png" id="bg" alt="landingImage"></img>
   </div>
   )
}

export default LandingPage