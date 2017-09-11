"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator = require('email-validator');
/*
The NativeScript framework's require() method is configured to look at the "main" value in an npm module's package.json file.
-> In the case of this module, the "main" value is "index.js".
-> Therefore, when you run require("email-validator"), you're actually requiring the file at node_modules/email_validator/index.js.
-> You could also type require("email-validator/index") to retrieve the same file.
*/
var User = (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return validator.validate(this.email);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUMzQzs7Ozs7RUFLRTtBQUVGO0lBQUE7SUFPQSxDQUFDO0lBSEMsMkJBQVksR0FBWjtRQUNFLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBUFksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdmFsaWRhdG9yID0gcmVxdWlyZSgnZW1haWwtdmFsaWRhdG9yJyk7XHJcbi8qIFxyXG5UaGUgTmF0aXZlU2NyaXB0IGZyYW1ld29yaydzIHJlcXVpcmUoKSBtZXRob2QgaXMgY29uZmlndXJlZCB0byBsb29rIGF0IHRoZSBcIm1haW5cIiB2YWx1ZSBpbiBhbiBucG0gbW9kdWxlJ3MgcGFja2FnZS5qc29uIGZpbGUuIFxyXG4tPiBJbiB0aGUgY2FzZSBvZiB0aGlzIG1vZHVsZSwgdGhlIFwibWFpblwiIHZhbHVlIGlzIFwiaW5kZXguanNcIi4gXHJcbi0+IFRoZXJlZm9yZSwgd2hlbiB5b3UgcnVuIHJlcXVpcmUoXCJlbWFpbC12YWxpZGF0b3JcIiksIHlvdSdyZSBhY3R1YWxseSByZXF1aXJpbmcgdGhlIGZpbGUgYXQgbm9kZV9tb2R1bGVzL2VtYWlsX3ZhbGlkYXRvci9pbmRleC5qcy4gXHJcbi0+IFlvdSBjb3VsZCBhbHNvIHR5cGUgcmVxdWlyZShcImVtYWlsLXZhbGlkYXRvci9pbmRleFwiKSB0byByZXRyaWV2ZSB0aGUgc2FtZSBmaWxlLlxyXG4qL1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuXHJcbiAgaXNWYWxpZEVtYWlsKCkge1xyXG4gICAgcmV0dXJuIHZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLmVtYWlsKTtcclxuICB9XHJcbn0iXX0=