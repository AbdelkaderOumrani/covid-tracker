import React, { Component } from 'react';
import { LinearProgress } from "@material-ui/core";

import {Cards,Chart,CountryPicker,Footer,LangToolbar} from './components';

import styles from './App.module.css';

import { fetchData } from './api';

import {arLang, enLang} from "./Helpers/lang";

import logo from '../src/images/logo.png';

class App extends Component {
    state = {
        lang:{},
        data:{},
        country: {
            enName:"",
            arName:"عالميا",
        },
    }
    async componentDidMount(){
        let loadLang = localStorage.getItem('kd-omr-covid19-lang');
        if(loadLang == null){
            localStorage.setItem("kd-omr-covid19-lang","en");                     
            loadLang = localStorage.getItem('kd-omr-covid19-lang');
        }
        this.setState({lang: loadLang === "en"? enLang : arLang});
        this.handleLangDirection(loadLang);

        const fetchedData = await fetchData();
        this.setState({data : fetchedData});
    }

    handleCountryChange = async (enName,arName) => {
        const fetchedData = await fetchData(enName);        
        this.setState({data: fetchedData,country:{enName,arName}});
    }

    handleLangChange = (tLang) => {
        this.setState({lang: tLang === "en"? enLang : arLang});        
        localStorage.setItem("kd-omr-covid19-lang",tLang);
        this.handleLangDirection(tLang);
    }

    handleLangDirection(lang){
        if(lang === "ar"){
            document.body.setAttribute('dir',"rtl")
        }
        else {
            document.body.setAttribute('dir',"ltr")
        }
    }

    render() {
        const {data,country,lang}  = this.state;

        return (
            (data.confirmed === undefined || lang.code === undefined) ? <LinearProgress />

            :
            <div className={styles.container}>

                <LangToolbar langChange={this.handleLangChange} lang={lang}/>

                <img className={styles.image} src={logo} alt="Covid-19"/>

                <Cards data={data} lang={lang}/>

                <CountryPicker lang={lang} handleCountryChange={this.handleCountryChange}/>

                <Chart data={data} lang={lang} country={country}/>

                <Footer lang={lang}/>

            </div>
        )
    }
}

export default App;