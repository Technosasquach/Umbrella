import * as React from "react";

import "./SearchContainer.less";

export default class ResultArea extends React.Component<{resultObj: any, searchFunc: Function},{}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <a onClick={()=>{this.props.searchFunc(this.props.resultObj.ref)}} className="SearchResult">
                {this.props.resultObj.score}
            </a>
        );
    }
}