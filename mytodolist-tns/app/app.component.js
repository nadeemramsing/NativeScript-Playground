"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <ActionBar title=\"My App\" class=\"action-bar\"></ActionBar>\n    <Image src=\"~/images/apple.jpg\"></Image>\n  ",
            styles: ["\n  @keyframes spin {\n    from { transform: rotate(0); } to { transform: rotate(360); }\n  }\n  Image {\n    animation-name: spin; animation-duration: 3s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n"]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFtQjFDO0lBQUE7SUFFQSxDQUFDO0lBRlksWUFBWTtRQWpCeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSx5SEFHVDtZQUNELE1BQU0sRUFBRSxDQUFDLHNQQVNWLENBQUM7U0FDRCxDQUFDO09BQ1csWUFBWSxDQUV4QjtJQUFELG1CQUFDO0NBQUEsQUFGRCxJQUVDO0FBRlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIk15IEFwcFwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxuICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9hcHBsZS5qcGdcIj48L0ltYWdlPlxuICBgLFxuICBzdHlsZXM6IFtgXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDApOyB9IHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwKTsgfVxuICB9XG4gIEltYWdlIHtcbiAgICBhbmltYXRpb24tbmFtZTogc3BpbjsgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIH1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcbn1cbiJdfQ==