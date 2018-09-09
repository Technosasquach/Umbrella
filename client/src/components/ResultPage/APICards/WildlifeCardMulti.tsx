import * as React from "react";
import Axios, {AxiosResponse} from "axios";
//import { parseString } from "xml2js";

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
        const boundBox = JSON.stringify(this.state.dataState.bbox);
        console.log(("http://environment.ehp.qld.gov.au/species/?op=getprojects&f=json&bbox=" + boundBox).replace(/\s|\[|\]/g,""));
        Axios.post(
            '/api/proxy', {
                url: ("http://environment.ehp.qld.gov.au/species/?op=getprojects&f=json&bbox=" + boundBox).replace(/\s|\[|\]/g,"")
            }
        ).then((response: AxiosResponse) => {
            console.log("Wildlife Response: " + JSON.stringify(response));
            this.setState({
                out: response
            });
            console.log("State Stuff:" + JSON.stringify(this.state.out["data"]["Project"][0]["ProjectID"]));
        });
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
                    <span className="text-left">Local Projects</span>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Local Projects</h5>
                    <span className="text-muted"><small>First 8 or less projects</small></span>
                </div>
                <ul className="list-group list-group-flush">
                    { this.state.out && this.state.out["data"] ? 
                        this.state.out["data"]["Project"].slice(0, 8).map((elm: any) => {
                            return (
                                <li className="list-group-item">{elm["Name"]}</li>
                            )
                        }) : "Data Loading"
                    }
                </ul>
                
            </div>
        )
    }
}