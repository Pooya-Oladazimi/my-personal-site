import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../styles/home.css';
import {header} from './Header';
import {panel} from './Panel';


class Home extends React.Component{
    constructor(props){
        super(props);        
    }


    render(){
        return(
            <Grid container id="global-container">
                <Grid item xs={3} id="left-panel">
                   {panel()}
                </Grid>
                <Grid item xs={9} id="right-content">
                    {header()}
                </Grid>
            </Grid>
        );
    }
}

export default Home;