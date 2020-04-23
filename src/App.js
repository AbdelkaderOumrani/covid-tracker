import React, { Component } from 'react';

import {Cards,Chart,CountryPicker,Footer} from './components';

import styles from './App.module.css';

import { fetchData } from './api';

import logo from '../src/images/logo.png';

class App extends Component {
    state = {
        data:{},
        country: {
            enName:"",
            arName:"عالميا",
        },
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data : fetchedData});

    }

    handleCountryChange = async (enName,arName) => {
        const fetchedData = await fetchData(enName);        
        this.setState({data: fetchedData,country:{enName,arName}});
    }

    render() {
        const {data,country}  = this.state;

        return (
            <div className={styles.container}>

                <img className={styles.image} src={logo} alt="Covid-19"/>

                <Cards data={data}/>

                <CountryPicker handleCountryChange={this.handleCountryChange}/>

                <Chart data={data} country={country}/>

                <Footer/>

            </div>
        )
    }
}

export default App;