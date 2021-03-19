"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movies = void 0;
const typeorm_1 = require("typeorm");
let Movies = class Movies {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Movies.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Movies.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Movies.prototype, "year", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Movies.prototype, "type", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Movies.prototype, "poster", void 0);
Movies = __decorate([
    typeorm_1.Entity()
], Movies);
exports.Movies = Movies;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWVzLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJlbnRpdHkvTW92aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFnRjtBQUdoRixJQUFhLE1BQU0sR0FBbkIsTUFBYSxNQUFNO0NBaUJsQixDQUFBO0FBZEc7SUFEQyx1QkFBYSxFQUFFOztrQ0FDTDtBQUdYO0lBREMsZ0JBQU0sRUFBRTs7cUNBQ0s7QUFHZDtJQURDLGdCQUFNLEVBQUU7O29DQUNJO0FBR2I7SUFEQyxnQkFBTSxFQUFFOztvQ0FDSTtBQUdiO0lBREMsZ0JBQU0sRUFBRTs7c0NBQ007QUFmTixNQUFNO0lBRGxCLGdCQUFNLEVBQUU7R0FDSSxNQUFNLENBaUJsQjtBQWpCWSx3QkFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSwgQ29sdW1uLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBQcmltYXJ5Q29sdW1uIH0gZnJvbSBcInR5cGVvcm1cIjtcblxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgTW92aWVzIHtcblxuICAgIEBQcmltYXJ5Q29sdW1uKClcbiAgICBpZDogc3RyaW5nO1xuXG4gICAgQENvbHVtbigpXG4gICAgdGl0bGU6IHN0cmluZztcblxuICAgIEBDb2x1bW4oKVxuICAgIHllYXI6IHN0cmluZztcblxuICAgIEBDb2x1bW4oKVxuICAgIHR5cGU6IHN0cmluZztcblxuICAgIEBDb2x1bW4oKVxuICAgIHBvc3Rlcjogc3RyaW5nO1xuXG59Il19