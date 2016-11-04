import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-detail',
  template: `
  <div class="col s1">
    <span class="flow-text">Todo:</span>
  </div>
  <div class="col s11">
    <span class="flow-text">{{todo}}</span>
  </div>
  `,
  styles: [""]
})
export class TodoDetailComponent implements OnInit {

  @Input() todo: string;

  constructor() { }
  ngOnInit() { }
}
