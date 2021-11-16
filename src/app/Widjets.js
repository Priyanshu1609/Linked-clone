import React from 'react'
import './widjets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widjets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widjets__article">
            <div className="widjets__articleleft">
                <FiberManualRecordIcon />
            </div>
            <div className="widjets__articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widjets">
            <div className="widjets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Top news examplev 1", "Top news - 999 readers")}
            {newsArticle("Top news example 2", "Top news - 999 readers")}
            {newsArticle("Top news example 3", "Top news - 999 readers")}
            {newsArticle("Top news example 4", "Top news - 999 readers")}
            {newsArticle("Top news example 5", "Top news - 999 readers")}
        </div>
    )
}

export default Widjets
