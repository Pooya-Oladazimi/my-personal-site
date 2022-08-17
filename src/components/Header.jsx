import Grid from '@material-ui/core/Grid';


export function header(){
    return [
        <Grid container>
            <Grid item xs={12} id="header">
                <span id="first-name-text-header" className='header-name'> 
                    Pooya
                </span>
                <span id="last-name-text-header" className='header-name'> 
                    Oladazimi
                </span>
            </Grid>            
        </Grid>
    ];
}