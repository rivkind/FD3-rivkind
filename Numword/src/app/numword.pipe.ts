import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:"numword",
  pure:true,
})
export class ApplesPipe {

  transform(num:number,word1:string,word2:string,word5:string):string {
    var str:any=num;
    var s:any = /^\d+$/;
    if(!s.test(str)) num=0;
    var dd=num%100;
    if ( (dd>=11) && (dd<=19) )
        return num+' '+word5;
    var d=num%10;
    if ( d==1 )
        return num+' '+word1;
    if ( (d>=2) && (d<=4) )
        return num+' '+word2;
    return num+' '+word5;
  }

}
