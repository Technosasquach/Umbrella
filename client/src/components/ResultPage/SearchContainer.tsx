import * as React from "react";
import Axios, {AxiosResponse} from "axios";

import "./SearchContainer.less";
import LogoSVG from "./../LogoSVG";

export default class ResultArea extends React.Component<{},{searchArea: string, searchResults: any[]}> {

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
        if(this.state.searchArea == null || this.state.searchArea == "") {
            this.setState({
                searchResults: [{}]
            });
        } else {
            Axios.post(
                "/api/findLoc/suggestions/" + this.state.searchArea
            ).then((response: AxiosResponse) => {
                this.setState({
                    searchResults: response.data
                });
            })
        }
    }

    handleKeyPress(event: any) {
        if (event.key === 'Enter') {
            this.search();
        }
    }

    search() {
        console.log("Hello World");
        Axios.post(
            "/api/findLoc/suggestions/" + this.state.searchArea
        ).then((response: AxiosResponse) => {
            console.log("Response: " + JSON.stringify(response.data));
        })
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
                    <div className="">
                        {this.state.searchResults.map(() => {
                            
                        })}
                    </div>
                </div>
                <div className="SearchOptions">
                    <button className="btn btn-outline-success">Export!</button>
                </div>
            </div>
        );
    }
}