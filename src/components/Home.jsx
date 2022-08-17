import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../styles/home.css';


class Home extends React.Component{
    constructor(props){
        super(props);        
    }


    render(){
        return(
            <Grid container>
                <Grid item xs={3} id="left-panel">
                    hhhhhhhh
                </Grid>
                <Grid item xs={3} id="right-content">

                </Grid>
            </Grid>
        );
    }
}

export default Home;