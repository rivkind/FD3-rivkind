import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public url:string = "http://fe.it-academy.by/Examples/cards2.png";
  public offsetx:number = 0;
  public offsety:number = 0;
  public width:number = 144;
  public height:number = 194;

  clicked():void {
    if(this.offsetx==this.width*3){
      this.offsetx=0;
      this.offsety-=this.height;
    }else this.offsetx+=this.width;
  }
  
}


