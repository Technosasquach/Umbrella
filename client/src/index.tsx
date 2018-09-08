import * as React from "react";
import { render } from "react-dom";

import SearchPage from "./components/SearchPage";
import ResultPage from "./components/ResultPage";

// import "/node_modules/muuri/dist/muuri.min.js";
import "./public/animate.css";
import "./public/bootstrap.min.css";
import "./index.less";

export default class Root extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <SearchPage/>
                <ResultPage/>
            </div>
        );
    }
}

render(
    <Root />,
    document.getElementById("root")
);