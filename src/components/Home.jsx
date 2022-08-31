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
        this.state = ({
            aboutFlag: true,
            expFlag: false,
            eduFlag: false,
            findmeFlag: false
        });
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }


    handleMenuClick(e){
        let target = e.target.getAttribute("value");        
        if(target === "about"){
            this.setState({
                aboutFlag: true,
                expFlag: false,
                eduFlag: false,
                findmeFlag: false
            });
        }
        else if(target === "exp"){
            this.setState({
                aboutFlag: false,
                expFlag: true,
                eduFlag: false,
                findmeFlag: false
            });
        }
    }


    render(){
        return(
            <Grid container id="global-container">
                <Grid item lg={3} sm={12} id="left-panel" key={"left-panel"}>
                   {panel(this.handleMenuClick)}
                </Grid>
                <Grid item lg={9} sm={12} id="right-content" key={"right-content"}>
                    {this.state.aboutFlag && <About></About>}
                    {this.state.expFlag && <Experience></Experience>}
                </Grid>
            </Grid>
        );
    }
}

export default withRouter(Home);