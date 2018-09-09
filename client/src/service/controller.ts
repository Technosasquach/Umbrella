
import Axios, {AxiosResponse} from "axios";

export class FrontEndController {

    public result: any = undefined;

    public doSearch(text: string) {
        Axios.post(
            "/api/findLoc/fuzzy/" + text
        ).then((response: AxiosResponse) => {
            console.log("PRIMARY RESPONSE: " + JSON.stringify(response.data));
            this.resultsVisFunc(true);
            this.setResult(response.data);
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