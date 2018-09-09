
import Axios, {AxiosResponse} from "axios";

export class FrontEndController {

    public result: any = undefined;

    public doSearch(text: string) {
        Axios.post(
            "/api/findLoc/fuzzy/" + text
        ).then((response: AxiosResponse) => {
            // console.log("PRIMARY RESPONSE: " + JSON.stringify(response.data));
            Axios.post(
                "/api/findLoc/absolute/" + response.data.properties.qld_loca_2
            ).then((response2: AxiosResponse) => {
                console.log("PRIMARY RESPONSE: " + JSON.stringify({ ...response.data, ...response2.data}));
                this.resultsVisFunc(true);
                this.setResult({ ...response.data, ...response2.data});
            })
        })
    }

    public setResult(resultObj: any) {
        this.result = resultObj;
        this.funcCallbacks.forEach((func: Function) => {
            func(this.result);
        })
    }

    funcCallbacks: Function[] = [()=>{}];
    public addChangeCallBack(func: Function) {
        this.funcCallbacks.push(func);
    }

    resultsVisFunc: Function = ()=>{};
    public mountSetResultsVisibility(a: Function) {
        this.resultsVisFunc = a;
    }
}