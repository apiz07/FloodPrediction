import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import "../pages/Pages.css"
import {indexService} from '../API/index.service'
import {useQuery} from 'react-query'

function Weather() {
    const {data} = useQuery(["fetchWeather"], async() => {return await indexService.weatherApi.getWeather()}, {keepPreviousData: true})
    // console.log(data);
    return (
    <div>
        <Navbar />
        <h1 className="containerCenter">WELCOME TO FLOOD DISASTER AID SYSTEM</h1>
        <div className='flex-container'>
            <div>
                <div>{data[0]}</div>
            </div>
            <div>
                <div>{data[1]}</div>
            </div>
            <div>
                <div>{data[2]}</div>
            </div>
            <div>
                <div>{data[3]}</div>
            </div>
            <div>
                <div>{data[4]}</div>
            </div>
            <div>
                <div>{data[5]}</div>
            </div>
            <div>
                <div>{data[6]}</div>
            </div>
        </div>        
    </div>
  )
}

export default Weather