var validator = require('email-validator');
/* 
The NativeScript framework's require() method is configured to look at the "main" value in an npm module's package.json file. 
-> In the case of this module, the "main" value is "index.js". 
-> Therefore, when you run require("email-validator"), you're actually requiring the file at node_modules/email_validator/index.js. 
-> You could also type require("email-validator/index") to retrieve the same file.
*/

/* Supported npm modules: https://github.com/NativeScript/NativeScript/wiki/supported-npm-modules */

export class User {
  email: string;
  password: string;

  isValidEmail() {
    return validator.validate(this.email);
  }
}