import Grid from '@material-ui/core/Grid';
import Pic from '../pic.jpg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export function panel(){
    return [
        <Grid container>
            <Grid item xs={12} id="image-section">
                <img src={Pic} className="img-rounded" alt="my Pic"  id="my-image" /> 
            </Grid>
            <Grid item xs={12} id="menu-section">
            <Tabs            
                orientation="vertical"
                indicatorColor="primary"              
                aria-label="Vertical tabs example"
                >
                <Tab label="About Me"/>
                <Tab label="Job Experience" />
                <Tab label="Edjucation" />
                <Tab label="Find Me"/>
            </Tabs>                
            </Grid>
    
        </Grid>
    ];
}
