import * as React from "react";

import "./ResultArea.less";

// declare var Muuri: any;
const Muuri: any = require("muuri");

export default class ResultArea extends React.Component {

    arraySizeN: any[] = [];

    constructor(props: any) {
        super(props);

        for(let i = 0; i < 50; i++) {
            this.arraySizeN.push(i);
        }
    }

    componentDidMount() {
        const grid = new Muuri('.grid', 
            { 
                dragEnabled: true, 
                layout: {
                    fillGaps: true
                },
                layoutEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
            });
        console.log(grid);
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        return (
            <div className="ResultArea">
                <div className="grid">
                    {this.arraySizeN.map((val)=>{
                        const widthN = Math.round(Math.random() * 200 + 20);
                        const heightN = Math.round(Math.random() * 200 + 20);
                        return(
                            <div className="item" style={{ width: widthN, height: heightN, backgroundColor: this.getRandomColor()}}>
                                <span>Test</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}