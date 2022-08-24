import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../styles/home.css';
import {header} from './Header';
import {panel} from './Panel';
import { withRouter } from 'react-router-dom';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Findme from './Findme';


class Home extends React.Component{
    constructor(props){
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }


    handleMenuClick(e){
        let target = e.target.getAttribute("value");        
        if(target === "about"){
            // this.props.history.push(window.location.pathname + "/about");
        }
    }


    render(){
        return(
            <Grid container id="global-container">
                <Grid item xs={3} id="left-panel" key={"left-panel"}>
                   {panel(this.handleMenuClick)}
                </Grid>
                <Grid item xs={9} id="right-content" key={"right-content"}>
                    
                </Grid>
            </Grid>
        );
    }
}

export default withRouter(Home);