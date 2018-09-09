import * as React from "react";
import Axios, {AxiosResponse} from "axios";

import "./APICard.less";

export default class WildlifeCard extends React.Component<{frontend: any},{exampleState: any}> {

    constructor(props: any) {
        super(props);
        this.state = {
            exampleState: ""
        }
    }

    componentDidMount() {
        Axios.post(
            'url'
        ).then((response: AxiosResponse) => {
            console.log("Response: " + JSON.stringify(response));
            this.setState({
                exampleState: "Hello World"
            })
        })
    }

    render() {
        return (
            <div className="item card card-size-2"> {/* Set width here */}
                <div className="card-header">
                    <span className="text-left">Search...</span>
                    {/* <button onClick={(e)=>{ e.preventDefault(); this.setVisibilty(false) }} className="text-right float-right">X</button> */}
                </div>
                {/* <img className="card-img-top" src="https://via.placeholder.com/20x20" alt="Card image cap"></img> */}
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        )
    }
}