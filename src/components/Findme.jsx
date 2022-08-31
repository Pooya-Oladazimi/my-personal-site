import React from 'react';
import '../styles/home.css';


class Findme extends React.Component{
    
    render(){
        return(
            <div className='findme-content'>
                 <div className='row find-row'>
                    <div className='col-md-4 logo-container'>
                        <a href="https://github.com/Pooya-Oladazimi" className='logo-link' target="_blank">
                            <i class="fab fa-github logo-icon"></i>
                            <br></br>Github
                        </a>                    
                    </div>

                    <div className='col-md-4 logo-container'>
                        <a href="https://www.kaggle.com/oladazimi/code" className='logo-link' target="_blank">
                            <i class="fab fa-kaggle logo-icon"></i>
                            <br></br>Kaggle
                        </a>                    
                    </div>
                    <div className='col-md-4 logo-container'>
                        <a href="https://www.linkedin.com/in/pooya-oladazimi/" className='logo-link' target="_blank">
                            <i class="fab fa-linkedin logo-icon"></i>
                            <br></br>Linkedin
                        </a>                    
                    </div>
                </div>

                <div className='row find-row'>
                    <div className='col-md-4 logo-container'>
                        <a href="https://www.xing.com/profile/Pooya_Oladazmi/cv" className='logo-link' target="_blank">
                            <i class="fab fa-xing logo-icon"></i>
                            <br></br>Xing
                        </a>                    
                    </div>

                    <div className='col-md-4 logo-container'>
                        <a href="https://scholar.google.com/citations?user=WnUi1WgAAAAJ&hl=en" className='logo-link' target="_blank">
                            <i class="fas fa-graduation-cap logo-icon"></i>
                            <br></br>Scholar
                        </a>                    
                    </div>
                    <div className='col-md-4 logo-container'>
                        <a href="https://www.polaz.net/" className='logo-link' target="_blank">
                            <i class="fas fa-coffee logo-icon"></i>
                            <br></br>My Blog
                        </a>                    
                    </div>
                </div>
            </div>           
        );
    }
}

export default Findme;