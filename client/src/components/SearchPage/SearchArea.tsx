import * as React from "react";

export default class SearchArea extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <h1>Hello World, {new Date().toLocaleTimeString()}</h1>
            </div>
        );
    }
}