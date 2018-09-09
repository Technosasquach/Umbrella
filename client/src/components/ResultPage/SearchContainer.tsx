import * as React from "react";
// import Axios, {AxiosResponse} from "axios";

import "./SearchContainer.less";
import LogoSVG from "./../LogoSVG";
import { FrontEndController } from "../../service/controller";
// import SearchResults from "./SearchResults";

export default class ResultArea extends React.Component<{frontend: FrontEndController},{searchArea: string, searchResults: any[]}> {

    constructor(props: any) {
        super(props);
        this.state = {
            searchArea: "",
            searchResults: [{}]
        }
    }

    handleSearchChange(event: any) {
        this.setState({
            searchArea: event.target.value
        });
        // if(this.state.searchArea == null || this.state.searchArea == "") {
        //     this.setState({
        //         searchResults: [{}]
        //     });
        // } else {
        this.searchResults();
        // }
    }

    searchResults() {
        // Axios.post(
        //     "/api/findLoc/suggestions/" + this.state.searchArea
        // ).then((response: AxiosResponse) => {
        //     console.log("Search Results: " + JSON.stringify(response.data));
        //     this.setState({
        //         searchResults: response.data
        //     });
        // })
    }

    handleKeyPress(event: any) {
        if (event.key === 'Enter') {
            this.search();
        }
    }

    search(text?: string) {
        // let foundPlace: string = "";
        // if(text) {
        //     foundPlace = text;
        // } else {
        //     Axios.post(
        //         "/api/findLoc/suggestions/" + this.state.searchArea
        //     ).then((response: AxiosResponse) => {
        //         foundPlace = response.data[0].name;
        //     })
        // }
        // Axios.post(
        //     "/api/findLoc/absolute/" + foundPlace
        // ).then((response: AxiosResponse) => {
        //     console.log("PRIMARY RESPONSE: " + JSON.stringify(response.data));
        // })
        this.props.frontend.doSearch(this.state.searchArea);
    }

    render() {
        return (
            <div className="SearchContainer">
                <div className="SearchIcon">
                    <LogoSVG/>
                </div>
                <div className="SearchZone input-group">
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder=">"
                        value={this.state.searchArea} 
                        onChange={this.handleSearchChange.bind(this)}
                        onKeyPress={this.handleKeyPress.bind(this)}
                        onSubmit={()=>{this.search()}}>
                    </input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary">Search!</button>
                    </div>
                    {/* <div className="SearchResults">
                        {this.state.searchResults.map((obj: any) => {
                            <SearchResults resultObj={obj} searchFunc={this.search}/>
                        })}
                    </div> */}
                </div>
                <div className="SearchOptions">
                    <button className="btn btn-outline-success">Export!</button>
                </div>
            </div>
        );
    }
}