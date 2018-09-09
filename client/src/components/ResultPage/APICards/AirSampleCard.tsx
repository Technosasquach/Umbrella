import * as React from "react";
import Axios, {AxiosResponse} from "axios";
import { parseString } from "xml2js";

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
        Axios.post(
            '/api/proxy', {
                url: "https://www.ehp.qld.gov.au/cgi-bin/air/xml.php?category=1&region=ALL"
            }
        ).then((response: AxiosResponse) => {
            parseString(response.data, (err: any, result: any) => {
                if(err) console.log(err);
                console.log("Air Quality Response: " + JSON.stringify(result));
                this.setState({
                    out: result
                })
            });
            
        })
    }

    render() {
        return (
            <div className="item card card-size-2"> {/* Set width here */}
                <div className="card-header">
                    <span className="text-left">Air Quality</span>
                </div>
                <div className="card-body">
                    <p className="card-text">?: {this.state.out ? "loaded" : "loading"}</p>
                </div>
                <div className="card-body">
                    <p className="card-text">
                        <small className="text-muted">Last updated | Date: { 
                            this.state.out && this.state.out["airdata"] ? 
                                this.state.out["airdata"]["category"][0]["$"]["measurementdate"] + 
                                " | Hour:" + 
                                this.state.out["airdata"]["category"][0]["$"]["measurementhour"] : 
                                "loading" 
                            }
                        </small>
                    </p>
                </div>
            </div>
        )
    }
}