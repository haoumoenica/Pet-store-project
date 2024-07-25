import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}

document.addEventListener("DOMContentLoaded",function(){
  let nav = document.querySelector(".navbar") as HTMLElement;

  window.addEventListener("scroll",function(){
    if(window.scrollY >= 56){
      nav.classList.add("scroll-nav");
    }else if(this.window.scrollY < 56){
      nav.classList.remove("scroll-nav");
    }
  })
})