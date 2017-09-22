"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var user_service_1 = require("./shared/user.service");
var headers_service_1 = require("./shared/headers.service");
/* Cause of "Can't resolve all parameters for AppComponent": Page does not have @Injectable decorator it seems */
var AppComponent = (function () {
    function AppComponent(page) {
        this.page = page;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    AppComponent = __decorate([
        core_1.Component({
            providers: [user_service_1.UserService, headers_service_1.HeaderService],
            template: "\n  <page-outlet></page-outlet>\n  "
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsZ0NBQStCO0FBRS9CLHNEQUFvRDtBQUNwRCw0REFBeUQ7QUFFekQsaUhBQWlIO0FBT2pIO0lBRUUsc0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUVuQywrQkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFOVSxZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDVCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLCtCQUFhLENBQUM7WUFDdkMsUUFBUSxFQUFFLHFDQUVUO1NBQ0YsQ0FBQzt5Q0FHMEIsV0FBSTtPQUZuQixZQUFZLENBT3hCO0lBQUQsbUJBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBIZWFkZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL2hlYWRlcnMuc2VydmljZVwiO1xuXG4vKiBDYXVzZSBvZiBcIkNhbid0IHJlc29sdmUgYWxsIHBhcmFtZXRlcnMgZm9yIEFwcENvbXBvbmVudFwiOiBQYWdlIGRvZXMgbm90IGhhdmUgQEluamVjdGFibGUgZGVjb3JhdG9yIGl0IHNlZW1zICovXG5AQ29tcG9uZW50KHtcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIEhlYWRlclNlcnZpY2VdLFxuICB0ZW1wbGF0ZTogYFxuICA8cGFnZS1vdXRsZXQ+PC9wYWdlLW91dGxldD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gIH1cbn1cbiJdfQ==