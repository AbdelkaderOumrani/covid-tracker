import React,{useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';


const Chart = ({data:{confirmed,recovered,deaths},country}) => {
    const [dailyData,setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());     
        }

        fetchAPI();

    },[]);

    const lineChart =(
        dailyData.length 
        ? (<Line
        
        data={{
            labels: dailyData.map(({date}) => date),
            datasets:[{
                data:dailyData.map(({deaths}) => deaths),
                label:'الوفيات',
                borderColor:'#f44336',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#f44336',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                
            },{
                data:dailyData.map(({confirmed}) => confirmed),
                label:'الاصابات',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
            },],
        }}
        />)
        : null
    );    

    const barChart = (
        confirmed
        ? (
            <Bar 
            data = {{
                labels:['المصابين','المتعافين','المتوفين'],
                datasets:[{
                    label:'People',
                    backgroundColor:['rgba(0, 0, 255,0.5)','rgba(0, 255, 0,0.5)','rgba(255, 0, 0,0.5)'],
                    data:[confirmed.value,recovered.value,deaths.value]
                }]
            }}

            options = {{
                legend: {display: false},
                title: {display:true, text:`الاحصائية الحالية - ${country}`},                
            }}
            />
        ) : null
    )
    
    return(
        <div className={styles.container}>
            {
                country ? barChart : lineChart
            }
        </div>
    )
}

export default Chart;