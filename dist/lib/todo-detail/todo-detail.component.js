var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
export var TodoListComponent = (function () {
    function TodoListComponent() {
    }
    TodoListComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], TodoListComponent.prototype, "todo", void 0);
    TodoListComponent = __decorate([
        Component({
            selector: 'app-todo-detail',
            template: "\n  <div class=\"col s1\">\n    <span class=\"flow-text\">Todo:</span>\n  </div>\n  <div class=\"col s11\">\n    <span class=\"flow-text\">{{todo}}</span>\n  </div>\n  ",
            styles: [""]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoListComponent);
    return TodoListComponent;
}());
//# sourceMappingURL=D:/Developement/git/kd-angular2-components/lib/todo-detail/todo-detail.component.js.map