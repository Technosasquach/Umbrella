import * as React from "react";

import "./SearchContainer.less";

export default class ResultArea extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="SearchContainer">
                <div className="SearchIcon">
                    <img src="https://via.placeholder.com/20x20"></img>
                    <span>Umbrella</span>
                </div>
                <div className="SearchZone input-group">
                    <input className="form-control" type="text" placeholder=">"></input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary">Search!</button>
                    </div>
                </div>
                <div className="SearchOptions">
                    <button className="btn btn-outline-success">Export!</button>
                </div>
            </div>
        );
    }
}