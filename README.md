# NativeScript-Playground
Learning NativeScript for a better mobile experience.<br />
<br />
###Quick setup: https://docs.nativescript.org/start/quick-setup<br />
Running<br /> 
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://www.nativescript.org/setup/win'))"<br />
into cmd installs iOS and Android Requirements (including Android SDK)<br />
<br />
Advanced setup: https://docs.nativescript.org/start/ns-setup-win<br />
Choco install arguments: https://github.com/chocolatey/choco/wiki/CommandsInstall#installarguments<br />
-Use Packages.config to install several packages and define their id, version, SOURCE, etc... <br />
-Source => PATH on PC can be used?<br />
Issues:<br />
-ANDROID_HOME environment variable was not being found (had to rename "android-sdk" to "sdk")<br />
Use tns doctor to test; IF "no issues detected" THEN installation complete.<br />
<br />
### Creating app: <br />
-Done using NativeScript CLI<br />
-"tns create" used<br />
-E.g. "tns create HelloWorld --template nativescript-template-ng-tutorial" ~scaffolding/templating<br />
Other templates can be found here: https://github.com/NativeScript/NativeScript/wiki/Using-the-%60tns-create%60-command and https://www.tjvantoll.com/2016/02/22/creating-nativescript-templates/#creating-your-own-templates<br />
-Among the Node modules installed are: @angular, nativescript-angular, tns-core-modules, typescript, rxjs<br />
<br />
### Running app:<br />
cmd: tns run android (for debugging, use tns debug android)<br />
Error: Cannot find connected devices ~adb <br />
Solution: Setup emulator (use Visual Studio Emulator for Android or Genymotion (https://github.com/NativeScript/nativescript-cli/issues/325))<br />
cmd: <br />
adb devices lists list of connected devices<br />
adb kill-server kills server<br />
adb start-server starts server<br />

