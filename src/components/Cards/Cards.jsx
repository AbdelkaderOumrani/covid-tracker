import React from "react";
import {
  CardContent,
  Typography,
  Grid,  
} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import { dateHelper } from "../../Helpers/dateHelper";

import styles from "./Cards.module.css";

const Cards = ({
  lang,
  data: { confirmed, recovered, deaths, lastUpdate },
}) => {  
  return (
    <div className={styles.container}>
      <Grid
        container
        spacing={2}
        justify="space-evenly"
      >
        {/* عدد المصابين */}
        <Grid item xs={12} lg={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography variant="h4" color="primary" gutterBottom>
              {lang.cases}
            </Typography>
            <Typography variant="h4" gutterBottom>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {lang.update +
                (lang.code === "ar"
                  ? dateHelper(lastUpdate)
                  : new Date(lastUpdate).toDateString())}
            </Typography>{" "}
          </CardContent>
        </Grid>

        {/* عدد المتعافين */}

        <Grid item xs={12} lg={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {lang.recovered}
            </Typography>
            <Typography variant="h4" gutterBottom>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {lang.update +
                (lang.code === "ar"
                  ? dateHelper(lastUpdate)
                  : new Date(lastUpdate).toDateString())}
            </Typography>{" "}
          </CardContent>
        </Grid>
        {/* عدد المتوفين */}

        <Grid item xs={12} lg={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography variant="h4" color="secondary" gutterBottom>
              {lang.deaths}
            </Typography>
            <Typography variant="h4" gutterBottom>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {lang.update +
                (lang.code === "ar"
                  ? dateHelper(lastUpdate)
                  : new Date(lastUpdate).toDateString())}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
