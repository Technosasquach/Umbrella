import * as React from "react";
import { render } from "react-dom";

import SearchPage from "./components/SearchPage";
import ResultPage from "./components/ResultPage";
import { FrontEndController } from "./service/controller";

// import "/node_modules/muuri/dist/muuri.min.js";
import "./public/animate.css";
import "./public/bootstrap.min.css";
import "./index.less";

export default class Root extends React.Component<{},{frontEndShow: boolean}> {

    constructor(props: any) {
        super(props);
        this.state = {
            frontEndShow: false
        }
        this.changeFrontendShow = this.changeFrontendShow.bind(this);
    }

    frontEndController = new FrontEndController();

    componentWillMount() {
        this.frontEndController.mountSetResultsVisibility(this.changeFrontendShow);
        // setTimeout(() => { this.frontEndController.doSearch("LOGAN"); }, 1000);
    }

    changeFrontendShow(bool: boolean) {
        this.setState({
            frontEndShow: bool
        })
    }

    render() {
        return (
            <div className="app">
                { !this.state.frontEndShow ? <SearchPage/> : <ResultPage frontend={this.frontEndController}/> }
            </div>
        );
    }
}

render(
    <Root />,
    document.getElementById("root")
);