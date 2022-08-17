import Grid from '@material-ui/core/Grid';
import Pic from '../pic.jpg';


export function panel(){
    return [
        <Grid container>
            <Grid item xs={12} id="image-section">
                <img src={Pic} className="img-rounded" alt="my Pic"  id="my-image" /> 
            </Grid>        
        </Grid>
    ];
}