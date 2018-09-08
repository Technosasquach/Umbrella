import * as React from "react";

import "./APICard.less";

export default class TemplateCard extends React.Component<{query: any},{isVisible: boolean}> {

    constructor(props: any) {
        super(props);
        this.state = {
            isVisible: true
        }
    }

    setVisibilty(a: any) {
        this.setState({
            isVisible: a
        })
    }

    render() {
        if (this.state.isVisible) {
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
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="card-body">
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                    <div className="card-footer">
                        <span className="text-muted text-left">2 days ago</span>
                        <a href="#" className="text-right float-right">Dataset</a>
                    </div>
                </div>
            )
        } else {
            return ("");
        }
    }
}