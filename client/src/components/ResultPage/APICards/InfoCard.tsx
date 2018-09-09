import * as React from "react";
// import Axios, {AxiosResponse} from "axios";

import "./APICard.less";
import { FrontEndController } from "../../../service/controller";

export default class InfoCard extends React.Component<{frontend: FrontEndController},{dataState: any}> {

    constructor(props: any) {
        super(props);
        this.state = {
            dataState: ""
        }
        this.changeCallback = this.changeCallback.bind(this);
        this.props.frontend.addChangeCallBack(this.changeCallback);
    }

    changeCallback(obj: any) {
        this.setState({
            dataState: obj
        })
    }

    componentWillMount() {
        this.setState({
            dataState: this.props.frontend.result
        })
        // Axios.post(
        //     'url'
        // ).then((response: AxiosResponse) => {
        //     console.log("InfoCard Response: " + JSON.stringify(response));
        //     this.setState({
        //         dataState: response.data
        //     })
        // })
    }

    render() {
        return (
            <div className="item card card-size-2"> {/* Set width here */}
                <div className="card-header">
                    <span className="text-left">Search...</span>
                </div>
                <div className="card-body">
                    <p className="card-text">Location: {this.state.dataState ? this.state.dataState.properties.qld_loca_2 : ""}</p>
                    <p className="card-text">Loc ID: {this.state.dataState ? this.state.dataState.properties.loc_pid : ""}</p>
                </div>
            </div>
        )
    }
}