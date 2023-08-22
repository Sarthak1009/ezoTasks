import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-image-api',
  templateUrl: './image-api.component.html',
  styleUrls: ['./image-api.component.scss']
})
export class ImageAPIComponent {
  sum = 50;
  direction = "";
constructor(public http: HttpClient){
  this.getProducts()
}
@HostListener("window:scroll", ["$event"])
onWindowScroll() {
//In chrome and some browser scroll is given to body tag
let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
let max = (document.documentElement.scrollHeight);
// pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
 if(pos == max)   {
  console.log(max)
  this.addImages()
 }
}
arrayforProduct: any = []
arrayForLoop: any = []
currentIndex: any = 0
getProducts(){
  this.http.get('https://db.ezobooks.in/kappa/image/task').subscribe((data)=>{
    this.arrayforProduct = data;
    this.addImages()
  })
}

addImages(){
  var lastindex
  for(let i = this.currentIndex; i< this.currentIndex+20; i++){
    this.arrayForLoop.push(this.arrayforProduct.items[i])
    lastindex = i
  }
  this.currentIndex = lastindex
}

}
