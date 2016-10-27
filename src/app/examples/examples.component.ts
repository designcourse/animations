import { Component,
  trigger,
  state,
  style,
  transition,
  animate, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [
    trigger('fader', [

      state('in', style({transform: 'translateY(0)', opacity: '0'})),

      transition('void => *', [
        style({transform: 'translateY(-15px)',opacity: '1'}),
        animate(300)
      ])
  ]),
  ]
})
export class ExamplesComponent implements OnInit {
  state: string = 'in';

  constructor() { }

  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in');
  }

}
