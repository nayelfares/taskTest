export const  SCREEN_DURATION : number = 15
export const getCurrentTime = ():string=>{
   const now = new Date();
   let hours = now.getHours().toString()
   if (hours.length == 1){
      hours = `0${hours}`
   }
   let minutes = now.getMinutes().toString()
   if (minutes.length == 1){
      minutes = `0${minutes}`
   }
   let seconds = now.getSeconds().toString()
   if (seconds.length == 1){
      seconds = `0${seconds}`
   }
   return actualTimeToVirtual(`${hours}:${minutes}:${seconds}`);
}

export const currentVirtualTime=():number=>{
    return timeToVirtualMinutes(getCurrentTime());
}


export const actualTimeToVirtual = (time: string): string => {
   return virtualMinutesToTime(timeToVirtualMinutes(time) - 18000)
 };

export const timeToVirtualMinutes = (time: string): number => {
    return  Number(time.substr(0,2))*3600 +Number(time.substr(3,2))*60 + Number(time.substr(6,2))
  };

export const virtualMinutesToTime = (minutes: number): string => {
     let hours  = Math.floor(minutes/60)
     hours = hours % 24
     let hoursString = hours.toString()
     if(hoursString.length==1){
        hoursString = `0${hoursString}`
     }

     minutes = minutes % 60
     let minutesString = minutes.toString()
     if(minutesString.length==1){
        minutesString = `0${minutesString}`
     }

   return  `${hoursString}:${minutesString}`
 };

 export const virtualTimeToVirtualMinutes = (virtualTime:string):number=>{
   return  Number(virtualTime.substr(0,2))*60 +Number(virtualTime.substr(3,2)) 
 }

