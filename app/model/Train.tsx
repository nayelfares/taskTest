import React from 'react';
import { currentVirtualTime, SCREEN_DURATION, virtualMinutesToTime, virtualTimeToVirtualMinutes } from './Utils';

 export default class Train {
    constructor(
        destination:string,
        periodBetweenTrips:number,
        startTime:string,
        endTime:string) {
            this.destination = destination;
            this.periodBetweenTrips = periodBetweenTrips;
            this.startTime = virtualTimeToVirtualMinutes(startTime);
            this.endTime = virtualTimeToVirtualMinutes(endTime);
    }
    destination        : string;
    periodBetweenTrips : number;
    startTime          : number;
    endTime            : number;
    lastTrip           : number = -1;

    nextTrip():string {
        let now = currentVirtualTime()
        if(this.lastTrip == -1) {
            if((this.startTime - now) < SCREEN_DURATION){
                if((this.startTime - now) == 0 )
                   this.lastTrip = now
                return virtualMinutesToTime(this.startTime - now)
            }
        }else{
            if(this.periodBetweenTrips- (now - this.lastTrip) < SCREEN_DURATION){
                if(this.periodBetweenTrips- (now - this.lastTrip) == 0)
                   this.lastTrip = now
                return virtualMinutesToTime((this.periodBetweenTrips- (now - this.lastTrip)));
            }
        }
        return "";
    }
} 

