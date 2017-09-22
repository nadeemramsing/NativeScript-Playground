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
        this.getUsers = getUsers;
        this.headers = headerService.getHeaders();
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUErQztBQUUvQywyQ0FBMkM7QUFFM0MsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUU5QiwyQ0FBc0M7QUFDdEMscURBQWtEO0FBR2xEO0lBR0kscUJBQW9CLElBQVUsRUFBRSxhQUE0QjtRQUF4QyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBSXZCLGFBQVEsR0FBRyxRQUFRLENBQUM7UUFIdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUxRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FJaUIsV0FBSSxFQUFpQiwrQkFBYTtPQUhuRCxXQUFXLENBUXZCO0lBQUQsa0JBQUM7Q0FBQSxBQVJELElBUUM7QUFSWSxrQ0FBVztBQVV4QjtJQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3BFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQyxxQkFBcUI7S0FFNUM7QUFDVCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG4vKiBpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7ICovXHJcblxyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL2FwcC5jb25maWdcIjtcclxuaW1wb3J0IHsgSGVhZGVyU2VydmljZSB9IGZyb20gXCIuL2hlYWRlcnMuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBoZWFkZXJzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgaGVhZGVyU2VydmljZTogSGVhZGVyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlclNlcnZpY2UuZ2V0SGVhZGVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRVc2VycyA9IGdldFVzZXJzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVc2VycygpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KENvbmZpZy5CQVNFVVJMICsgXCJ1c2Vyc1wiLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycyB9KVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpIC8vTmVlZGVkOyBFTFNFIGVycm9yIVxyXG4gICAgICAgIC8qIC5kbyhyZXMgPT4gcmVzKSAqL1xyXG4gICAgICAgIDtcclxufSJdfQ==