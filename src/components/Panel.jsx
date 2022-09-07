import Grid from '@material-ui/core/Grid';
import Pic from '../pic.jpg';
import { Link } from 'react-router-dom';


export function panel(menuHandler){
    return [
        <Grid container>
            <Grid item xs={12} id="image-section">
                <img src={Pic} className="img-rounded" alt="my Pic"  id="my-image" />
                <div className='row header-name'>
                    <div className='col-sm-12'>
                        <span id="first-name-text-header" > 
                            Pooya
                        </span>
                        <span id="last-name-text-header"> 
                            Oladazimi
                        </span> 
                    </div>                    
                </div>                
            </Grid>
            <Grid item xs={12} id="menu-section">
                <ul className='menu'>
                    <li className='menu-item' key={"about"}>
                        <Link to="/about" className='menu-anchor' onClick={menuHandler} value="about">About Me</Link>
                    </li>
                    <li className='menu-item' key={"exp"}>
                        <Link to="/exp" className='menu-anchor' onClick={menuHandler} value="exp">Experiences</Link>
                    </li>
                    <li className='menu-item' key={"edu"}>
                        <Link to="/edu" className='menu-anchor' onClick={menuHandler} value="edu">Education</Link>
                    </li>
                    <li className='menu-item' key={"findme"}>
                        <Link to="/find" className='menu-anchor' onClick={menuHandler} value="find">Find Me</Link>
                    </li>
                </ul>               
            </Grid>
    
        </Grid>
    ];
}
