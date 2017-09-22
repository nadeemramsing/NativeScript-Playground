"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var app_config_1 = require("./app.config");
var headers_service_1 = require("./headers.service");
var UserService = (function () {
    function UserService(http, headerService) {
        this.http = http;
        //Function Declarations
        this.getUsers = getUsers;
        this.headers = headerService.getHeaders();
    }
    UserService.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        //Lifecycle hooks, like OnInit() work with Directives and Components. They do NOT work with Services.
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, headers_service_1.HeaderService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
function getUsers() {
    return this.http.get(app_config_1.Config.BASEURL + "users", { headers: this.headers })
        .map(function (res) { return res.json(); }) //Needed; ELSE error!
    ;
}
console.log("0", this.headers); //this has not yet been initialized here => undefined
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBQ25ELHNDQUErQztBQUkvQyxpQ0FBK0I7QUFDL0IsZ0NBQThCO0FBRTlCLDJDQUFzQztBQUN0QyxxREFBa0Q7QUFHbEQ7SUFHSSxxQkFBb0IsSUFBVSxFQUFFLGFBQTRCO1FBQXhDLFNBQUksR0FBSixJQUFJLENBQU07UUFTOUIsdUJBQXVCO1FBQ2hCLGFBQVEsR0FBRyxRQUFRLENBQUM7UUFUdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLHFHQUFxRztJQUN6RyxDQUFDO0lBVlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUlpQixXQUFJLEVBQWlCLCtCQUFhO09BSG5ELFdBQVcsQ0FjdkI7SUFBRCxrQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLGtDQUFXO0FBZ0J4QjtJQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3BFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQyxxQkFBcUI7S0FFNUM7QUFDVCxDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMscURBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuLyogaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7ICovIC8vfjIwMCBLYlxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7IC8vfjEwIEtiXHJcblxyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL2FwcC5jb25maWdcIjtcclxuaW1wb3J0IHsgSGVhZGVyU2VydmljZSB9IGZyb20gXCIuL2hlYWRlcnMuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBoZWFkZXJzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgaGVhZGVyU2VydmljZTogSGVhZGVyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlclNlcnZpY2UuZ2V0SGVhZGVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmdPbkluaXRcIik7XHJcbiAgICAgICAgLy9MaWZlY3ljbGUgaG9va3MsIGxpa2UgT25Jbml0KCkgd29yayB3aXRoIERpcmVjdGl2ZXMgYW5kIENvbXBvbmVudHMuIFRoZXkgZG8gTk9UIHdvcmsgd2l0aCBTZXJ2aWNlcy5cclxuICAgIH1cclxuXHJcbiAgICAvL0Z1bmN0aW9uIERlY2xhcmF0aW9uc1xyXG4gICAgcHVibGljIGdldFVzZXJzID0gZ2V0VXNlcnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVzZXJzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQ29uZmlnLkJBU0VVUkwgKyBcInVzZXJzXCIsIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzIH0pXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSkgLy9OZWVkZWQ7IEVMU0UgZXJyb3IhXHJcbiAgICAgICAgLyogLmRvKHJlcyA9PiByZXMpICovXHJcbiAgICAgICAgO1xyXG59XHJcblxyXG5jb25zb2xlLmxvZyhcIjBcIiwgdGhpcy5oZWFkZXJzKTsgLy90aGlzIGhhcyBub3QgeWV0IGJlZW4gaW5pdGlhbGl6ZWQgaGVyZSA9PiB1bmRlZmluZWQiXX0=