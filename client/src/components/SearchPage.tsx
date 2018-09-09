import * as React from "react";
import Axios from "axios";
import "./SearchPage.less";

import LogoSVG from "./LogoSVG";

export default class SearchPage extends React.Component<{},{natureImage: string}> {

    constructor(props: any) {
        super(props);
        this.state = {
            natureImage: "https://www.architecture.uq.edu.au/filething/get/9464/PHP_P1190899.jpeg"
        }
    }
    
    numb: any = 0;
    i: number = 0;
    dataObj: any = [];

    componentDidMount() {
        Axios.get(
            `https://pixabay.com/api/` +
            `?key=10054269-6256a71c360c65721e02ad0f6` +
            `&q="aerial+nature+landscape+summer"` + 
            `&orientation="horizontal"`+
            `&editors_choice="false"`+
            `&min_width=3840`+
            `&min_height=2160`+
            `&category=nature`
        ).then((response: any) => {
            this.dataObj = response.data;
        })
        this.numb = setInterval(() => {
            this.i++;
            this.setState({
                natureImage: this.dataObj.hits[this.i]["largeImageURL"]
            });
        }, 5000);
        // Make timer (setInterval), repeat X times
            // Make request with Axios
            // setState({ natureImage: <imageURL> })
    }

    componentWillUnmount() {
        clearInterval(this.numb);
    }

    render() {
        return (
            <div className="FirstSearchPage">
                <div className="FirstSearchContent">
                    <div className="FirstSearchContainer">
                        <div className= "UmbrellaLogo">
                            <LogoSVG/>
                        </div>
                        <div className= "SearchBar">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control form-control-lg" placeholder='Search for "Loganholme"'></input>
                                <div className="input-group-append">
                                    <button className="btn btn-success btn-lg" type="button">Search!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="SearchBG">
                    <img src={this.state.natureImage}></img>
                </div>
            </div>
        );
    }
}