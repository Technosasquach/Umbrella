import * as React from "react";

import "./APICard.less";
import { FrontEndController } from "../../../service/controller";

export default class Wildlife extends React.Component<{frontend: FrontEndController},{dataState: any, out: any}> {

    constructor(props: any) {
        super(props);
        this.state = {
            dataState: "",
            out: ""
        }
        this.changeCallback = this.changeCallback.bind(this);
        this.props.frontend.addChangeCallBack(this.changeCallback);
    }

    changeCallback(obj: any) {
        this.setState({
            dataState: obj
        })
    }

    componentDidMount() {
        this.setState({
            dataState: this.props.frontend.result
        });
    }

    render() {
        return (
            <div className="item card card-size-2"> {/* Set width here */}
                <div className="card-header">
                    <span className="text-left">Land Suitability</span>
                </div>
                <div className="card-body">
                    <p className="card-text"><b>Reason for no implementation:</b></p>
                    <p className="card-text">The API requires input of a projectID and/or polygonID to display results. We were not able to identify either parameter with the location data we have</p>
                    <p className="card-text">This is the exact reason the project exists, to over come this for most people. This is a major issue with the gov supplied APIs and dataset</p>
                </div>
            </div>
        )
    }
}