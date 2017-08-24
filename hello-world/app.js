/* 
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
*/

/* 
Creating app: 
-Done using NativeScript CLI
-"tns create" used
-E.g. "tns create HelloWorld --template nativescript-template-ng-tutorial"

-Among the Node modules installed are: -
*/