import Grid from '@material-ui/core/Grid';
import Pic from '../pic.jpg';


export function panel(){
    return [
        <Grid container>
            <Grid item xs={12} id="image-section">
                <img src={Pic} className="img-rounded" alt="my Pic"  id="my-image" /> 
            </Grid>
            <Grid item xs={12} id="menu-section">
                <ul className='menu'>
                    <li className='menu-item'><a className='menu-anchor' href='#'>About Me</a></li>
                    <li className='menu-item'><a className='menu-anchor' href='#'>Experiences</a></li>
                    <li className='menu-item'><a className='menu-anchor' href='#'>Education</a></li>
                    <li className='menu-item'><a className='menu-anchor' href='#'>Find Me</a></li>
                </ul>               
            </Grid>
    
        </Grid>
    ];
}
