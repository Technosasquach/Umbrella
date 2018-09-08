import * as React from "react";

import "./ResultPage.less";
import SearchContainer from "./ResultPage/SearchContainer";
import ResultArea from "./ResultPage/ResultArea";

export default class ResultPage extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="ResultPage">
                <SearchContainer/>
                <ResultArea/>
            </div>
        );
    }
}