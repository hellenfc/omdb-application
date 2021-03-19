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
exports.Movie = void 0;
const typeorm_1 = require("typeorm");
let Movie = class Movie {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Movie.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Movie.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Movie.prototype, "year", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Movie.prototype, "imdbid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Movie.prototype, "type", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Movie.prototype, "poster", void 0);
Movie = __decorate([
    typeorm_1.Entity()
], Movie);
exports.Movie = Movie;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW92aWUuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImVudGl0eS9Nb3ZpZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBaUU7QUFHakUsSUFBYSxLQUFLLEdBQWxCLE1BQWEsS0FBSztDQW9CakIsQ0FBQTtBQWpCRztJQURDLGdDQUFzQixFQUFFOztpQ0FDZDtBQUdYO0lBREMsZ0JBQU0sRUFBRTs7b0NBQ0s7QUFHZDtJQURDLGdCQUFNLEVBQUU7O21DQUNJO0FBR2I7SUFEQyxnQkFBTSxFQUFFOztxQ0FDTTtBQUdmO0lBREMsZ0JBQU0sRUFBRTs7bUNBQ0k7QUFHYjtJQURDLGdCQUFNLEVBQUU7O3FDQUNNO0FBbEJOLEtBQUs7SUFEakIsZ0JBQU0sRUFBRTtHQUNJLEtBQUssQ0FvQmpCO0FBcEJZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5LCBDb2x1bW4sIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xuXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBNb3ZpZSB7XG5cbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gICAgaWQ6IG51bWJlcjtcblxuICAgIEBDb2x1bW4oKVxuICAgIHRpdGxlOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uKClcbiAgICB5ZWFyOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uKClcbiAgICBpbWRiaWQ6IHN0cmluZztcblxuICAgIEBDb2x1bW4oKVxuICAgIHR5cGU6IHN0cmluZztcblxuICAgIEBDb2x1bW4oKVxuICAgIHBvc3Rlcjogc3RyaW5nO1xuXG59Il19