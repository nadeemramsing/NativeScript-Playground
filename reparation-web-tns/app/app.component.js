"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
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
            template: "\n  <page-outlet></page-outlet>\n  "
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsZ0NBQStCO0FBRS9CLGlIQUFpSDtBQU1qSDtJQUVFLHNCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFbEMsK0JBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBTlUsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFDQUVUO1NBQ0YsQ0FBQzt5Q0FHMEIsV0FBSTtPQUZuQixZQUFZLENBT3hCO0lBQUQsbUJBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcblxuLyogQ2F1c2Ugb2YgXCJDYW4ndCByZXNvbHZlIGFsbCBwYXJhbWV0ZXJzIGZvciBBcHBDb21wb25lbnRcIjogUGFnZSBkb2VzIG5vdCBoYXZlIEBJbmplY3RhYmxlIGRlY29yYXRvciBpdCBzZWVtcyAqL1xuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gIDxwYWdlLW91dGxldD48L3BhZ2Utb3V0bGV0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICB9XG59XG4iXX0=