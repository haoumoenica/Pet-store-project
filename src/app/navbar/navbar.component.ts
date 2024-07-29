import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private nav!: HTMLElement;

  ngOnInit(): void {
    this.nav = document.querySelector(".navbar") as HTMLElement;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY >= 56) {
      this.nav.classList.add("scroll-nav");
    } else {
      this.nav.classList.remove("scroll-nav");
    }

    if (window.innerWidth <= 767.98 && this.isNavbarExpanded()) {
      this.toggleNavbar();
    }
  }

  private isNavbarExpanded(): boolean {
    const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;
    return navbarCollapse.classList.contains('show');
  }

  private toggleNavbar(): void {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    navbarToggler.click();
  }
}
