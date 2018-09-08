import * as React from "react";

import "./ResultArea.less";

import TemplateCard from "./APICards/TemplateCard";

// declare var Muuri: any;
const Muuri: any = require("muuri");

export default class ResultArea extends React.Component {

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
        console.log(grid);
    }

    render() {
        return (
            <div className="ResultArea">
                <div className="grid">
                    <TemplateCard query={{}}/>
                    <TemplateCard query={{}}/>
                    <TemplateCard query={{}}/>
                    <TemplateCard query={{}}/>
                    <TemplateCard query={{}}/>
                    <TemplateCard query={{}}/>
                    <TemplateCard query={{}}/>
                    <TemplateCard query={{}}/>
                    <TemplateCard query={{}}/>
                </div>
            </div>
        );
    }
}