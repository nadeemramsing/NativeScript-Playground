"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsZ0NBQStCO0FBTy9CO0lBRUUsc0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUVsQywrQkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFOVSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUNBRVQ7U0FDRixDQUFDO3lDQUcwQixXQUFJO09BRm5CLFlBQVksQ0FPeEI7SUFBRCxtQkFBQztDQUFBLEFBUEQsSUFPQztBQVBZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgPHBhZ2Utb3V0bGV0PjwvcGFnZS1vdXRsZXQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gIH1cbn1cbiJdfQ==