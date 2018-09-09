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
                    <span className="text-left">Local Project Highlight</span>
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        {
                            this.state.out && this.state.out["data"] ?
                            this.state.out["data"]["Project"][0]["Name"] :
                            ""
                        }
                    </h5>
                    {this.state.out && this.state.out["data"] && this.state.out["data"]["Project"][0]["CustodianOrganisation"] ?
                        <p className="card-text">
                            {
                                this.state.out && this.state.out["data"] ?
                                "Primary Custodian:" + this.state.out["data"]["Project"][0]["CustodianOrganisation"]["Name"] :
                                ""
                            }
                        </p> : "Primary Custodian: N/A"
                    }
                    <p className="card-text text-muted">
                        {
                            this.state.out && this.state.out["data"] ?  
                            "Project ID: " + this.state.out["data"]["Project"][0]["ProjectID"] :
                            "Data is loading Please Wait"
                        }
                    </p>
                </div>
            </div>
        )
    }
}