import React,{ useState, useEffect } from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';

import {fetchCountries} from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({lang, handleCountryChange }) => {
    const [fetchedCountries,setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async() =>{
            setFetchedCountries(await fetchCountries());
        }   
        fetchAPI();
    }, [setFetchedCountries]);
    
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect onChange={(e) => {
                let label = e.target.options[e.target.selectedIndex].label;
                handleCountryChange(e.target.value,label);
                console.log();
            }}>
                <option label={lang.code === "ar" ? "عالميا" : "Global"} value=""/>
                {fetchedCountries.map((country,i) =>
                <option key={i} label={lang.code === "ar" ? country.arName : country.enName} value={country.enName}/>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;