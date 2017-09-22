"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
/* import { Observable } from 'rxjs/Rx'; */
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var app_config_1 = require("./app.config");
var headers_service_1 = require("./headers.service");
var UserService = (function () {
    function UserService(http, headerService) {
        this.http = http;
        this.headers = headerService.getHeaders();
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(app_config_1.Config.BASEURL + "users", { headers: this.headers })
            .map(function (res) { return res.json(); }) //Needed; ELSE error!
        ;
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, headers_service_1.HeaderService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUErQztBQUUvQywyQ0FBMkM7QUFFM0MsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUU5QiwyQ0FBc0M7QUFDdEMscURBQWtEO0FBR2xEO0lBR0kscUJBQW9CLElBQVUsRUFBRSxhQUE0QjtRQUF4QyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFTSw4QkFBUSxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDcEUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDLHFCQUFxQjtTQUU1QztJQUNULENBQUM7SUFaUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBSWlCLFdBQUksRUFBaUIsK0JBQWE7T0FIbkQsV0FBVyxDQWF2QjtJQUFELGtCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbi8qIGltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JzsgKi9cclxuXHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vYXBwLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBIZWFkZXJTZXJ2aWNlIH0gZnJvbSBcIi4vaGVhZGVycy5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGhlYWRlcnM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBoZWFkZXJTZXJ2aWNlOiBIZWFkZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gaGVhZGVyU2VydmljZS5nZXRIZWFkZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFVzZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KENvbmZpZy5CQVNFVVJMICsgXCJ1c2Vyc1wiLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKSAvL05lZWRlZDsgRUxTRSBlcnJvciFcclxuICAgICAgICAgICAgLyogLmRvKHJlcyA9PiByZXMpICovXHJcbiAgICAgICAgICAgIDtcclxuICAgIH1cclxufSJdfQ==