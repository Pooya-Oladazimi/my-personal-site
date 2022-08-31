import React from 'react';
import '../styles/home.css';


class Education extends React.Component{
    
    render(){
        return(
            <div>
                <div class="content-box exp-box">
                    <h3 class="exp-header">
                        <a href="https://west.uni-koblenz.de/" target="_blank">University of Koblenz and Landau</a>
                    </h3> 
                    <b>Title:</b> Master of web science
                    <br></br>
                    <br></br>
                    <b>When:</b> 2016-2020
                    <br></br>
                    <br></br>
                    <b>Thesis:</b><a href="https://west.uni-koblenz.de/assets/theses/MA_Oladazimi.pdf"className='content-anchor' target="_blank">
                    Enhancing Code Navigation by Integrating Voice and Gaze
                    </a>
                    
                </div>

                <div class="content-box exp-box">
                    <h3 class="exp-header">
                        <a href="https://shirazu.ac.ir/en/home" target="_blank">Shiraz University</a>
                    </h3> 
                    <b>Title:</b> Computer Science (Engineering - Software)
                    <br></br>
                    <br></br>
                    <b>When:</b> 2009-2013                                                           
                </div>

                
            </div>
        );
    }
}

export default Education;