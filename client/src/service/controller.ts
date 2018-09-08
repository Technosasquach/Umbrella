export class FrontEndController {

    public result: any;

    public setResult(resultObj: any) {
        this.result = resultObj;
    }

    resultsVisFunc: Function = ()=>{};
    public mountSetResultsVisibility(a: Function) {
        this.resultsVisFunc = a;
    }
}