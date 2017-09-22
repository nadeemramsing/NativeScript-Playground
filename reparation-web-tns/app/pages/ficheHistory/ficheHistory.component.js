"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("./../../shared/user.service");
var FicheHistoryComponent = (function () {
    function FicheHistoryComponent(userService) {
        this.userService = userService;
    }
    FicheHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (res) {
            _this.users = res;
            console.log(_this.users);
        }, function (err) {
            console.log(err);
        });
    };
    FicheHistoryComponent = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: 'pages/ficheHistory/ficheHistory.html' //Path relative to "app" folder
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], FicheHistoryComponent);
    return FicheHistoryComponent;
}());
exports.FicheHistoryComponent = FicheHistoryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmljaGVIaXN0b3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpY2hlSGlzdG9yeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsNERBQTBEO0FBTzFEO0lBR0ksK0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCx3Q0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FDakMsVUFBQyxHQUFHO1lBQ0EsS0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUNELFVBQUMsR0FBRztZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBZFEscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsc0NBQXNDLENBQUMsK0JBQStCO1NBQ3RGLENBQUM7eUNBS21DLDBCQUFXO09BSG5DLHFCQUFxQixDQWdCakM7SUFBRCw0QkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vLi4vc2hhcmVkL3VzZXIuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJsb2dpblwiLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9maWNoZUhpc3RvcnkvZmljaGVIaXN0b3J5Lmh0bWwnIC8vUGF0aCByZWxhdGl2ZSB0byBcImFwcFwiIGZvbGRlclxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpY2hlSGlzdG9yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcm90ZWN0ZWQgdXNlcnM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0VXNlcnMoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlcnMgPSByZXM7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59Il19