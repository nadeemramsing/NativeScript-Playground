"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator = require('email-validator');
/*
The NativeScript framework's require() method is configured to look at the "main" value in an npm module's package.json file.
-> In the case of this module, the "main" value is "index.js".
-> Therefore, when you run require("email-validator"), you're actually requiring the file at node_modules/email_validator/index.js.
-> You could also type require("email-validator/index") to retrieve the same file.
*/
/* Supported npm modules: https://github.com/NativeScript/NativeScript/wiki/supported-npm-modules */
var User = (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return validator.validate(this.email);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUMzQzs7Ozs7RUFLRTtBQUVGLG9HQUFvRztBQUVwRztJQUFBO0lBT0EsQ0FBQztJQUhDLDJCQUFZLEdBQVo7UUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHZhbGlkYXRvciA9IHJlcXVpcmUoJ2VtYWlsLXZhbGlkYXRvcicpO1xyXG4vKiBcclxuVGhlIE5hdGl2ZVNjcmlwdCBmcmFtZXdvcmsncyByZXF1aXJlKCkgbWV0aG9kIGlzIGNvbmZpZ3VyZWQgdG8gbG9vayBhdCB0aGUgXCJtYWluXCIgdmFsdWUgaW4gYW4gbnBtIG1vZHVsZSdzIHBhY2thZ2UuanNvbiBmaWxlLiBcclxuLT4gSW4gdGhlIGNhc2Ugb2YgdGhpcyBtb2R1bGUsIHRoZSBcIm1haW5cIiB2YWx1ZSBpcyBcImluZGV4LmpzXCIuIFxyXG4tPiBUaGVyZWZvcmUsIHdoZW4geW91IHJ1biByZXF1aXJlKFwiZW1haWwtdmFsaWRhdG9yXCIpLCB5b3UncmUgYWN0dWFsbHkgcmVxdWlyaW5nIHRoZSBmaWxlIGF0IG5vZGVfbW9kdWxlcy9lbWFpbF92YWxpZGF0b3IvaW5kZXguanMuIFxyXG4tPiBZb3UgY291bGQgYWxzbyB0eXBlIHJlcXVpcmUoXCJlbWFpbC12YWxpZGF0b3IvaW5kZXhcIikgdG8gcmV0cmlldmUgdGhlIHNhbWUgZmlsZS5cclxuKi9cclxuXHJcbi8qIFN1cHBvcnRlZCBucG0gbW9kdWxlczogaHR0cHM6Ly9naXRodWIuY29tL05hdGl2ZVNjcmlwdC9OYXRpdmVTY3JpcHQvd2lraS9zdXBwb3J0ZWQtbnBtLW1vZHVsZXMgKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcblxyXG4gIGlzVmFsaWRFbWFpbCgpIHtcclxuICAgIHJldHVybiB2YWxpZGF0b3IudmFsaWRhdGUodGhpcy5lbWFpbCk7XHJcbiAgfVxyXG59Il19