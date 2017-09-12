"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PageOutletComponent = (function () {
    function PageOutletComponent() {
    }
    PageOutletComponent.prototype.ngOnInit = function () {
    };
    PageOutletComponent = __decorate([
        core_1.Component({
            selector: "page-outlet",
            template: "\n    <page-router-outlet></page-router-outlet>\n    "
            /*
            <page-router-outlet> replaces the *entire* screen
            <router-outlet> only replaces a portion?
        
            From official docs:
            page-router-outlet uses pages to navigate. The loaded component is shown in a new page.
            router-outlet replaces the content of the outlet with different component. It is the default outlet that comes from Angular.
            */
        }),
        __metadata("design:paramtypes", [])
    ], PageOutletComponent);
    return PageOutletComponent;
}());
exports.PageOutletComponent = PageOutletComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZS1vdXRsZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBaUJsRDtJQUNJO0lBQWdCLENBQUM7SUFFakIsc0NBQVEsR0FBUjtJQUVBLENBQUM7SUFMUSxtQkFBbUI7UUFmL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSx1REFFVDtZQUNEOzs7Ozs7O2NBT0U7U0FDTCxDQUFDOztPQUVXLG1CQUFtQixDQU8vQjtJQUFELDBCQUFDO0NBQUEsQUFQRCxJQU9DO0FBUFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJwYWdlLW91dGxldFwiLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XHJcbiAgICBgXHJcbiAgICAvKiBcclxuICAgIDxwYWdlLXJvdXRlci1vdXRsZXQ+IHJlcGxhY2VzIHRoZSAqZW50aXJlKiBzY3JlZW4gXHJcbiAgICA8cm91dGVyLW91dGxldD4gb25seSByZXBsYWNlcyBhIHBvcnRpb24/XHJcblxyXG4gICAgRnJvbSBvZmZpY2lhbCBkb2NzOlxyXG4gICAgcGFnZS1yb3V0ZXItb3V0bGV0IHVzZXMgcGFnZXMgdG8gbmF2aWdhdGUuIFRoZSBsb2FkZWQgY29tcG9uZW50IGlzIHNob3duIGluIGEgbmV3IHBhZ2UuXHJcbiAgICByb3V0ZXItb3V0bGV0IHJlcGxhY2VzIHRoZSBjb250ZW50IG9mIHRoZSBvdXRsZXQgd2l0aCBkaWZmZXJlbnQgY29tcG9uZW50LiBJdCBpcyB0aGUgZGVmYXVsdCBvdXRsZXQgdGhhdCBjb21lcyBmcm9tIEFuZ3VsYXIuXHJcbiAgICAqL1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VPdXRsZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG59Il19