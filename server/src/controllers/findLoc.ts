import * as QLDSub from "./qld.json";

export class findLoc {

    public static getGeoFromSuburb(suburbName: string){

        var matches = (<any>QLDSub).features.filter(function(item: any) {
            return (item.properties.qld_loca_2 == suburbName);
        });
    
        //Error case check
        if(matches.length == 0) {
            throw new Error('No Suburb matched the name provided')
        }
    
        //All matches should be viable so select the first match
        var match = matches[0]
    
        //Placeholder variables for Min/ Max values
        var coordinates = match.geometry.coordinates[0][0],
            maxLat = -360,
            maxLong = -360,
            minLat = 360,
            minLong = 360;
            
        for(var i = 0; i < coordinates.length; i++){
            if(coordinates[i][1] > maxLat) {
                maxLat = coordinates[i][1];
            } else if(coordinates[i][1] < minLat) {
                minLat = coordinates[i][1];
            }
            if(coordinates[i][0] > maxLong) {
                maxLong = coordinates[i][0];
            } else if(coordinates[i][0] < minLong) {
                minLong = coordinates[i][0]
            }
        }
        console.log(match)
        var upperLeft = [maxLat, minLong];
        var lowerRight = [minLat, maxLong];
    
        return {
            shape: match.geometry.coordinates,
            bbox: upperLeft.concat(lowerRight)
        };
    }

    public static getGeoFromID(id: string){

        var matches = (<any>QLDSub).features.filter(function(item: any) {
            return (item.id == id);
        });
    
        //Error case check
        if(matches.length == 0) {
            throw new Error('No Suburb matched the name provided')
        }
    
        //All matches should be viable so select the first match
        var match = matches[0]
    
        //Placeholder variables for Min/ Max values
        var coordinates = match.geometry.coordinates[0][0],
            maxLat = -360,
            maxLong = -360,
            minLat = 360,
            minLong = 360;
            
        for(var i = 0; i < coordinates.length; i++){
            if(coordinates[i][1] > maxLat) {
                maxLat = coordinates[i][1];
            } else if(coordinates[i][1] < minLat) {
                minLat = coordinates[i][1];
            }
            if(coordinates[i][0] > maxLong) {
                maxLong = coordinates[i][0];
            } else if(coordinates[i][0] < minLong) {
                minLong = coordinates[i][0]
            }
        }
        console.log(match)
        var upperLeft = [maxLat, minLong];
        var lowerRight = [minLat, maxLong];
    
        return {
            shape: match.geometry.coordinates,
            bbox: upperLeft.concat(lowerRight)
        };
    }
}