import React from 'react';

import {Typography} from '@material-ui/core';

import styles from './Footer.module.css';



const Footer = () => {

    return(<div className={styles.container}>
    <Typography variant="body2" color="textSecondary">تصميم عبد القادر عمراني</Typography>

    </div>)
}


export default Footer;