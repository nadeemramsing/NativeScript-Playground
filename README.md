# NativeScript-Playground
Learning NativeScript for a better mobile experience.


Quick setup: https://docs.nativescript.org/start/quick-setup
Running 
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://www.nativescript.org/setup/win'))"
into cmd installs iOS and Android Requirements (including Android SDK)

Advanced setup: https://docs.nativescript.org/start/ns-setup-win

Choco install arguments: https://github.com/chocolatey/choco/wiki/CommandsInstall#installarguments
-Use Packages.config to install several packages and define their id, version, SOURCE, etc... 
-Source => PATH on PC can be used?

Issues:
-ANDROID_HOME environment variable was not being found (had to rename "android-sdk" to "sdk")

Use tns doctor to test; IF "no issues detected" THEN installation complete.



Creating app: 
-Done using NativeScript CLI
-"tns create" used
-E.g. "tns create HelloWorld --template nativescript-template-ng-tutorial" ~scaffolding/templating

Other templates can be found here: https://github.com/NativeScript/NativeScript/wiki/Using-the-%60tns-create%60-command and https://www.tjvantoll.com/2016/02/22/creating-nativescript-templates/#creating-your-own-templates

-Among the Node modules installed are: @angular, nativescript-angular, tns-core-modules, typescript, rxjs


 
Running app:
cmd: tns run android (for debugging, use tns debug android)

Error: Cannot find connected devices ~adb 
Solution: Setup emulator (use Visual Studio Emulator for Android or Genymotion (https://github.com/NativeScript/nativescript-cli/issues/325))

cmd: 
adb devices lists list of connected devices
adb kill-server kills server
adb start-server starts server

