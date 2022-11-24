import React from 'react'
import './TrendCard.css'
import {TrendData} from '../../data/TrendData'


const TrendCard = () => {
  return (
    <div className="TrendCard">
        <h3>Trends for you </h3>

        {TrendData.map((trend,index)=>{
            return(
                <div className="trend" key={index}>
                     <span># {trend.name}</span>
                     <span># {trend.share} k shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard