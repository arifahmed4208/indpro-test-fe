import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'FrontEndChallenge';
  isSidebarOpen = true;
  isMobileView = false

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobileView = window.innerWidth < 768;
    this.isSidebarOpen = !this.isMobileView;
  }

  toggleSidebar() {
    if (this.isMobileView) {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }

  onSidebarItemClicked() {
    this.toggleSidebar();
  }
}
