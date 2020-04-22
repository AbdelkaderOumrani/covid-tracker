import React from 'react';

import {Typography} from '@material-ui/core';

import styles from './Footer.module.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';


const Footer = () => {

    return(<div className={styles.container}>
        <div className={styles.icons}>
        
        <a href="https://github.com/AbdelkaderOumrani/covid-tracker" >
            <GitHubIcon color="primary"/>
        </a>
        <a href="https://www.instagram.com/kadi.ro_/" >
            <InstagramIcon color="secondary"/>
        </a>
                
        </div>
    <Typography variant="h6" color="textPrimary">        
        تصميم عبد القادر عمراني
        </Typography>
        

    </div>)
}


export default Footer;