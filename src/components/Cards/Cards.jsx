import React from 'react';
import { CardContent, Typography, Grid, CircularProgress } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';


import {dateHelper} from './dateHelper';

import styles from './Cards.module.css';

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed){
        return(<CircularProgress />)
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={2} justify="center">

                {/* عدد المصابين */}
                <Grid item
                md={12} lg={3}
                className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography variant="h4" color="primary" gutterBottom>المصابين</Typography>
                        <Typography variant="h3" gutterBottom>
                            <CountUp start={0}
                            end={confirmed.value}
                            duration={2}
                            separator=','/>
                        </Typography>
    <Typography variant="caption" color="textSecondary">{`تحديث : ${dateHelper(lastUpdate)}`}</Typography>
                    </CardContent>
                </Grid>  
                
                
                {/* عدد المتعافين */}
                
                <Grid item
                md={12} lg={3}
                className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>المتعافين</Typography>
                        <Typography variant="h3" gutterBottom>
                            <CountUp start={0}
                            end={recovered.value}
                            duration={2}
                            separator=','/>
                        </Typography>
    <Typography variant="caption" color="textSecondary">{`تحديث : ${dateHelper(lastUpdate)}`}</Typography>
                    </CardContent>
                </Grid>   
                
                
                {/* عدد المتوفين */}    
                
                <Grid item
                md={12} lg={3}
                className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography variant="h4" color="secondary" gutterBottom>المتوفين</Typography>
                        <Typography variant="h3" gutterBottom>
                            <CountUp start={0}
                            end={deaths.value}
                            duration={2}
                            separator=','/>
                        </Typography>
    <Typography variant="caption" color="textSecondary">{`تحديث : ${dateHelper(lastUpdate)}`}</Typography>
                    </CardContent>
                </Grid> 

            </Grid>
        </div>
    )
}

export default Cards;