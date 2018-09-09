import * as React from "react";

import "./ResultArea.less";

// import TemplateCard from "./APICards/TemplateCard";
import AirSampleCard from "./APICards/AirSampleCard";
import LandSuitabilityCard from "./APICards/LandSuitabilityCard";
import SoilSuitabilityCard from "./APICards/SoilSuitabilityCard";
import WildlifeCard from "./APICards/WildlifeCard";
import WildlifeCardMulti from "./APICards/WildlifeCardMulti";
import ConfidentialWildlifeCard from "./APICards/ConfidentialWildlifeCard";
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
        const grid = new Muuri('.grid', 
            { 
                dragEnabled: true, 
                // layout: {
                //     fillGaps: true
                // },
                layoutEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
            });
        // console.log(grid);
        setInterval(()=> {
            grid.refreshItems();
            grid.refreshSortData();
            // console.log("Print hello world");
        }, 1000);
    }

    render() {
        return (
            <div className="ResultArea">
                <div className="grid">
                    <InfoCard frontend={this.props.frontend}/>
                    <AirSampleCard frontend={this.props.frontend}/>
                    <WildlifeCard frontend={this.props.frontend}/>
                    <WildlifeCardMulti frontend={this.props.frontend}/>
                    <ConfidentialWildlifeCard frontend={this.props.frontend}/>
                    <LandSuitabilityCard frontend={this.props.frontend}/>
                    <SoilSuitabilityCard frontend={this.props.frontend}/>
                    {/* <TemplateCard query={{}}/> */}
                </div>
            </div>
        );
    }
}