import * as React from "react";
// import Axios, {AxiosResponse} from "axios";

import "./APICard.less";
import { FrontEndController } from "../../../service/controller";
var GoogleMapsLoader = require('google-maps'); // only for common js environments


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
        // console.log(JSON.stringify(this.state.dataState));
        GoogleMapsLoader.KEY = "AIzaSyBdDG1TgRKj9ki8kR6BL-2Ody511-fqRyg";
        GoogleMapsLoader.LANGUAGE = 'en';
        GoogleMapsLoader.LIBRARIES = ['geometry', 'drawing', 'places'];
        GoogleMapsLoader.load((google: any) => {
            const center = {
                lat: (this.state.dataState.bbox[0] + this.state.dataState.bbox[2]) / 2,
                lng: (this.state.dataState.bbox[1] + this.state.dataState.bbox[3]) / 2,
            }
            const map = new google.maps.Map(
                document.getElementById('map'), 
                {zoom: 11, center }
            );
            new google.maps.Marker({position: center, map });

            const coords: any[] = [];
            this.state.dataState.shape[0][0].forEach((elm: any) => {
                coords.push({
                    lat: elm[1],
                    lng: elm[0]
                })
            });
            console.log("[SOMETHING]" + JSON.stringify(coords));
            const area = new google.maps.Polygon({
                path: coords,
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35
            });
            area.setMap(map);
        });
    }

    componentWillMount() {
        this.setState({
            dataState: this.props.frontend.result
        })
        console.log(JSON.stringify(this.state.dataState));
        // Axios.post(
        //     'url'
        // ).then((response: AxiosResponse) => {
        //     console.log("InfoCard Response: " + JSON.stringify(response));
        //     this.setState({
        //         dataState: response.data
        //     })
        // })
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="item card card-size-4"> {/* Set width here */}
                <div className="card-header">
                    <span className="text-left">Search...</span>
                </div>
                <div id="map" style={{width: "100%", height: "400px"}}>
                </div>
                <div className="card-body">
                    <p className="card-text">Location: {this.state.dataState ? this.state.dataState.properties.qld_loca_2 : ""}</p>
                    <p className="card-text">Loc ID: {this.state.dataState ? this.state.dataState.properties.loc_pid : ""}</p>
                </div>
            </div>
        )
    }
}
            