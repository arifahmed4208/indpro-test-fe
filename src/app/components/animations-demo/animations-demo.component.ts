import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animations-demo',
  templateUrl: './animations-demo.component.html',
  styleUrls: ['./animations-demo.component.scss'],
  animations: [trigger('fadeIn', [
    state('void', style({ opacity: 0 })),
    transition(':enter', [
      animate('1s', style({ opacity: 1 }))
    ])
  ])]
})
export class AnimationsDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
