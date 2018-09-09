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
                    <span className="text-left">Soil Suitability</span>
                </div>
                <div className="card-body">
                    <p className="card-text"><b>Reason for no implementation:</b></p>
                    <p className="card-text">Required an API Key & Registration into "SILO" website. The server and our implementation would currently not work with the specified CORS policy</p>
                </div>
            </div>
        )
    }
}