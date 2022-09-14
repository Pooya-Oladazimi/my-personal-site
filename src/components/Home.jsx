import React from 'react';
import '../styles/home.css';
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
        this.processUrl = this.processUrl.bind(this);
    }

    processUrl(){
        let target = this.props.match.params.tab;
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
        else if(target === "edu"){
            this.setState({
                aboutFlag: false,
                expFlag: false,
                eduFlag: true,
                findmeFlag: false
            });
        }
        else if(target === "find"){
            this.setState({
                aboutFlag: false,
                expFlag: false,
                eduFlag: false,
                findmeFlag: true
            });
        }
        else{
            this.setState({
                aboutFlag: true,
                expFlag: false,
                eduFlag: false,
                findmeFlag: false
            });
        }
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
        else if(target === "edu"){
            this.setState({
                aboutFlag: false,
                expFlag: false,
                eduFlag: true,
                findmeFlag: false
            });
        }
        else if(target === "find"){
            this.setState({
                aboutFlag: false,
                expFlag: false,
                eduFlag: false,
                findmeFlag: true
            });
        }
        else{
            this.setState({
                aboutFlag: true,
                expFlag: false,
                eduFlag: false,
                findmeFlag: false
            });
        }
    }

    componentDidMount(){
        this.processUrl();
    }


    render(){
        return(
            <div className='container-fluid'>
                <div className='row upper-part'>
                    <div className='col-sm-3' id="left-panel" key={"left-panel"}>
                    {panel(this.handleMenuClick)}
                    </div>
                    <div item className='col-sm-9' id="right-content" key={"right-content"}>
                        <div className='row' id="content-holder">
                            <div className='col-sm-12'>
                            {this.state.aboutFlag && <About></About>}
                            {this.state.expFlag && <Experience></Experience>}
                            {this.state.eduFlag && <Education></Education>}
                            {this.state.findmeFlag && <Findme></Findme>}
                            </div>
                        </div>                        
                        <div className='row' id="footer">
                            <div className='col-sm-12' key={"footer"}>
                                <p>Designed & Developed by <i>Pooya Oladazmi</i></p>
                            </div>                    
                        </div> 
                    </div>
                </div>                               
            </div>
        );
    }
}

export default withRouter(Home);