import * as React from "react";
import Axios from "axios";
import "./SearchPage.less";

export default class SearchPage extends React.Component<{},{natureImage: string}> {

    constructor(props: any) {
        super(props);
        this.state = {
            natureImage: "http://hdqwalls.com/wallpapers/aerial-shot-of-trees-4k-kf.jpg"
        }
    }
    
    numb: any = 0;
    i: number = 0;
    dataObj: any = [];

    componentDidMount() {
        Axios.get(
            `https://pixabay.com/api/` +
            `?key=10054269-6256a71c360c65721e02ad0f6` +
            `&q="nature+aerial"` + 
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
        }, 10000);
        // Make timer (setInterval), repeat X times
            // Make request with Axios
            // setState({ natureImage: <imageURL> })
    }

    componentWillUnmount() {
        clearInterval(this.numb);
    }

    render() {
        return (
            <div className="SearchPage">
                <div className="SearchContent">
                    <div className="SearchContainer">
                        <input type="text" className="form-control form-control-lg"></input> 
                    </div>
                </div>
                <div className="SearchBG">
                    <img src={this.state.natureImage}></img>
                </div>
            </div>
        );
    }
}