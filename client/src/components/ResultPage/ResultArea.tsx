import * as React from "react";

import "./ResultArea.less";

// import TemplateCard from "./APICards/TemplateCard";
// import WildlifeCard from "./APICards/WildlifeCard";
import InfoCard from "./APICards/InfoCard";

// declare var Muuri: any;
const Muuri: any = require("muuri");

export default class ResultArea extends React.Component<{frontend: any},{}> {

    arraySizeN: any[] = [];

    constructor(props: any) {
        super(props);

        for(let i = 0; i < 10; i++) {
            this.arraySizeN.push(i);
        }
    }

    componentDidMount() {
        new Muuri('.grid', 
            { 
                dragEnabled: true, 
                // layout: {
                //     fillGaps: true
                // },
                layoutEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
            });
        // console.log(grid);
    }

    render() {
        return (
            <div className="ResultArea">
                <div className="grid">
                    <InfoCard frontend={this.props.frontend}/>

                    {/* <TemplateCard query={{}}/> */}
                </div>
            </div>
        );
    }
}