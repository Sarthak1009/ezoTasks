import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  ngOnInit(): void {
        //OPEN NAV ON HAMBURGUER CLICK
    $(".hamburguer").click(function(){
      $("nav").toggleClass("open");  
    });
    $("nav ul li").click(function(){
      $("nav").toggleClass("open");  
    });

  }
}
