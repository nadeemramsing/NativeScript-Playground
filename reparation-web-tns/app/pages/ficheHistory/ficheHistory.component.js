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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmljaGVIaXN0b3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpY2hlSGlzdG9yeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsNERBQTBEO0FBTzFEO0lBR0ksK0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCx3Q0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FDakMsVUFBQyxHQUFHO1lBQ0EsS0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDckIsQ0FBQyxFQUNELFVBQUMsR0FBRztZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBYlEscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsc0NBQXNDLENBQUMsK0JBQStCO1NBQ3RGLENBQUM7eUNBS21DLDBCQUFXO09BSG5DLHFCQUFxQixDQWVqQztJQUFELDRCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi8uLi8uLi9zaGFyZWQvdXNlci5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImxvZ2luXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL2ZpY2hlSGlzdG9yeS9maWNoZUhpc3RvcnkuaHRtbCcgLy9QYXRoIHJlbGF0aXZlIHRvIFwiYXBwXCIgZm9sZGVyXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmljaGVIaXN0b3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByb3RlY3RlZCB1c2VycztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5nZXRVc2VycygpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59Il19