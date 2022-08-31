import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../styles/home.css';


class Experience extends React.Component{
    
    render(){
        return(
            <div>
                <div class="content-box exp-box">
                    <h3 class="exp-header">
                        <a href="https://www.tib.eu/de/forschung-entwicklung/joint-lab" target="_blank">Software Developer at TIB/L3S</a>
                    </h3> 
                    <b>Type and duration:</b> Full-time, (May 2021 - present)
                    <hr></hr>
                    <div class="exp-content">                    
                        <b>Tasks:</b>
                        <ul>
                            <li>
                                Develop plugins for <a href="https://ckan.org/" className='content-anchor' target="_blank"> CKAN </a> 
                                as part of the CRC project.
                            </li>
                            <li>Develop Ontologies look-up frontend (React) as a part of the NFDI project.</li>
                        </ul>

                        <b>Skills needed:</b>
                        <ul>
                            <li>Python</li>
                            <li>React.js</li>
                            <li>JavaScript</li>
                            <li>Flask</li>
                            <li>PostgreSQL</li>
                        </ul>                       
                    </div>
                </div>

                <div class="content-box exp-box">
                    <h3 class="exp-header">
                        <a href="https://www.gesis.org/home" target="_blank">
                            Software Developer at GESIS - Leibniz Institute for the Social Science</a>
                    </h3>                     
                    <b>Type and duration:</b> Part-time, (Nov 2017 - Jan 2021)
                    <hr></hr>
                    <div class="exp-content">                    
                        <b>Tasks:</b>
                        <ul>                            
                            <li>
                                Full-stack web development (PHP-Yii) for the 
                                <a href="https://sociohub-fid.de/dashboard" className='content-anchor' target="_blank"> SocioHub</a> project. 
                                Developing plugins for the 
                                <a href="https://www.humhub.com/en" className='content-anchor' target="_blank"> Humhub</a> platform.</li>
                        </ul>

                        <b>Skills needed:</b>
                        <ul>
                            <li>PHP</li>
                            <li>jQuery</li>
                            <li>JavaScript</li>
                            <li>Model-View-Controller (MVC)</li>
                            <li>MariaDB</li>
                            <li>Yii</li>
                        </ul>                       
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Experience;