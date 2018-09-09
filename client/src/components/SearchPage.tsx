import * as React from "react";
// import Axios from "axios";
import "./SearchPage.less";

import LogoSVG from "./LogoSVG";
import Particles from 'react-particles-js';
import { FrontEndController } from "../service/controller";

export default class SearchPage extends React.Component<{frontend: FrontEndController},{}> {



    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="FirstSearchPage">
                <SearchPageActual frontend={this.props.frontend} />
                <div className = "SearchParticles">
                    <Particles 
                    params={{
                    "particles": {
                        "number": {
                        "value": 100,
                        "density": {
                            "enable": false,
                            "value_area": 1000
                        }
                        },
                        "color": {
                        "value": "#ffffff"
                        },
                        "shape": {
                        "type": "circle",
                        "polygon": {
                            "nb_sides": 3
                        },
                        },
                        "opacity": {
                        "value": 0.43246706442958394,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.3,
                            "sync": false
                        }
                        },
                        "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 31.635045140775965,
                            "sync": false
                        }
                        },
                        "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                        },
                        "move": {
                        "enable": true,
                        "speed": 3.2034597365154363,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "resize": true
                        },
                        "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                            "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 231.17917602874746,
                            "size": 8.1115500360964,
                            "duration": 2
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                        }
                    }
                    }}/>
                </div>
            </div>
        );
    }
}


export class SearchPageActual extends React.Component<{frontend: FrontEndController},{searchBox : string}> {

    constructor(props: any) {
        super(props);
        this.state = {
            searchBox: ""
        }
    }

    
    handleSearchChange(event: any) {
        this.setState({
            searchBox: event.target.value
        });
    }

    handleKeyPress(event: any) {
        if (event.key === 'Enter') {
            this.search();
        }
    }

    search() {
        this.props.frontend.doSearch(this.state.searchBox);
    }

    render() {
        return (
            <div>
                <div className="FirstSearchContent">
                    <div className="FirstSearchContainer">
                        <div className= "UmbrellaLogo">
                            <LogoSVG/>
                        </div>
                        <div className= "SearchBar">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder='Search for a suburb in QLD'
                                    value={this.state.searchBox} 
                                    onChange={this.handleSearchChange.bind(this)}
                                    onKeyPress={this.handleKeyPress.bind(this)}
                                    onSubmit={()=>{this.search()}}>
                                </input>
                                <div className="input-group-append">
                                    <button className="btn btn-success btn-lg" type="button">Search!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="SearchBG">
                    <img src="https://www.architecture.uq.edu.au/filething/get/9464/PHP_P1190899.jpeg"></img>
                </div>
            </div>
        );
    }
}





