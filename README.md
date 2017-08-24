# NativeScript-Playground
Learning NativeScript for a better mobile experience.<br />
### Quick setup: https://docs.nativescript.org/start/quick-setup
Running<br /> 
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://www.nativescript.org/setup/win'))"<br />
into cmd installs iOS and Android Requirements (including Android SDK)<br />

##### Advanced setup: https://docs.nativescript.org/start/ns-setup-win
##### Choco install arguments: https://github.com/chocolatey/choco/wiki/CommandsInstall#installarguments
-Use Packages.config to install several packages and define their id, version, SOURCE, etc... <br />
<br />
-Source => PATH on PC can be used?<br />
##### Issues:
-ANDROID_HOME environment variable was not being found (had to rename "android-sdk" to "sdk")<br />
##### Useful cmd:
tns doctor<br />
IF "no issues detected" THEN installation complete.<br />
<br />
### Creating app:
-Done using NativeScript CLI<br />
<br />
-"tns create" used<br />
<br />
-E.g. "tns create HelloWorld --template nativescript-template-ng-tutorial" ~scaffolding/templating<br />
<br />
Other templates can be found here: <br />
https://github.com/NativeScript/NativeScript/wiki/Using-the-%60tns-create%60-command 
<br />
https://www.tjvantoll.com/2016/02/22/creating-nativescript-templates/#creating-your-own-templates<br />
<br />
-Among the Node modules installed are: @angular, nativescript-angular, tns-core-modules, typescript, rxjs<br />
<br />
### Running app:
##### cmd:
tns run android (for debugging, use tns debug android)<br />
##### Error:
Cannot find connected devices ~adb <br />
##### Solution:
Setup emulator (use Visual Studio Emulator for Android or Genymotion (https://github.com/NativeScript/nativescript-cli/issues/325))<br />
##### Useful cmd:
adb devices lists list of connected devices<br />
<br />
adb kill-server kills server<br />
<br />
adb start-server starts server<br />
<br />
### Project Structure:
On run, two new folders were created: <br />
1. hooks (after-watch, before-liveSync, before-prepare, before-watch)
2. platforms (~250 MB): Contains the Android stuffs (gradle, build, libs, src.main.java.com.tns)
<br />

### Debugging:
Use "Launch with Android" in VSCode's built-in debugger. 