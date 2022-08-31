import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../styles/home.css';


class About extends React.Component{
    
    render(){
        return(
            <div class="about-content">
                <p>
                    Welcome to my page. My name is <b>Pooya Oladazimi</b>. I am a software developer who is also interested in 
                    data analysis and machine learning. Software development is magic. So I like to consider myself as
                        <i><a href="https://en.wikipedia.org/wiki/Gandalf" className='content-anchor' target="_blank">Gandalf</a></i>. 
                </p>

                <p>
                    In my free time, I like to watch movies/series, and also write some blog posts about programming,
                    cinema, and etc. 
                </p>
            </div>
        );
    }
}

export default About;