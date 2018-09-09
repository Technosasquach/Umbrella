import * as React from "react";

import "./ResultPage.less";
import SearchContainer from "./ResultPage/SearchContainer";
import ResultArea from "./ResultPage/ResultArea";

export default class ResultPage extends React.Component<{frontend: any},{}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="ResultPage">
                <SearchContainer frontend={this.props.frontend}/>
                <ResultArea frontend={this.props.frontend}/>
            </div>
        );
    }
}