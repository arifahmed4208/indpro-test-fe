import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() isOpen: boolean = true;
  @Output() itemClicked = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onItemClick() {
    this.itemClicked.emit();
  }
}
