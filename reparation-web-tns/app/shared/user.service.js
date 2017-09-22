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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBQ25ELHNDQUErQztBQUUvQywyQ0FBMkM7QUFFM0MsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUU5QiwyQ0FBc0M7QUFDdEMscURBQWtEO0FBR2xEO0lBR0kscUJBQW9CLElBQVUsRUFBRSxhQUE0QjtRQUF4QyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBUzlCLHVCQUF1QjtRQUNoQixhQUFRLEdBQUcsUUFBUSxDQUFDO1FBVHZCLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixxR0FBcUc7SUFDekcsQ0FBQztJQVZRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FJaUIsV0FBSSxFQUFpQiwrQkFBYTtPQUhuRCxXQUFXLENBY3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxrQ0FBVztBQWdCeEI7SUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNwRSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUMscUJBQXFCO0tBRTVDO0FBQ1QsQ0FBQztBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHFEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG4vKiBpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7ICovXHJcblxyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL2FwcC5jb25maWdcIjtcclxuaW1wb3J0IHsgSGVhZGVyU2VydmljZSB9IGZyb20gXCIuL2hlYWRlcnMuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBoZWFkZXJzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgaGVhZGVyU2VydmljZTogSGVhZGVyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlclNlcnZpY2UuZ2V0SGVhZGVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmdPbkluaXRcIik7XHJcbiAgICAgICAgLy9MaWZlY3ljbGUgaG9va3MsIGxpa2UgT25Jbml0KCkgd29yayB3aXRoIERpcmVjdGl2ZXMgYW5kIENvbXBvbmVudHMuIFRoZXkgZG8gTk9UIHdvcmsgd2l0aCBTZXJ2aWNlcy5cclxuICAgIH1cclxuXHJcbiAgICAvL0Z1bmN0aW9uIERlY2xhcmF0aW9uc1xyXG4gICAgcHVibGljIGdldFVzZXJzID0gZ2V0VXNlcnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVzZXJzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQ29uZmlnLkJBU0VVUkwgKyBcInVzZXJzXCIsIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzIH0pXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSkgLy9OZWVkZWQ7IEVMU0UgZXJyb3IhXHJcbiAgICAgICAgLyogLmRvKHJlcyA9PiByZXMpICovXHJcbiAgICAgICAgO1xyXG59XHJcblxyXG5jb25zb2xlLmxvZyhcIjBcIiwgdGhpcy5oZWFkZXJzKTsgLy90aGlzIGhhcyBub3QgeWV0IGJlZW4gaW5pdGlhbGl6ZWQgaGVyZSA9PiB1bmRlZmluZWQiXX0=