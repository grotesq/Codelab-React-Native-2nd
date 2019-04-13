# React Native + NoxPlayer

Andriod Studio(이하 AS)를 이용해 Android Virtual Machine(이하 AVD)를 생성하지 않고 [Nox Player](https://kr.bignox.com/)(이하 녹스)를 이용하여 에뮬레이터를 연결하는 방법을 공유한다.

맥은 없고 AVD 설정하긴 힘들고 내 폰 꼽아서 하긴 싫은 흑우들에게 바친다. ㅠㅠ

1주차가 끝난 시점에서 4주차까지 이 설정으로 버틸 수 있을지는 모르겠다...

1. AVD를 위해 AS를 설치하지 않는다
2. Hyper-V & HAXM 등을 신경쓰지 않아도 된다.
2. Android SDK Tools 만 있으면 된다.

## Android SDK 설정

[Android SDK Tools](https://developer.android.com/studio#downloads)을 다운로드 받는다. `D:\dev\sdk\android` 에 풀었다.

경로 생각 잘하자. 실행 파일이 있는 위치는 `D:\dev\sdk\android\sdk-tools\bin`이다.

```
sdkmanager "platform-tools" "platforms;android-28"
```

필요한 파일을 받아서 어디서든 실행 가능하게 PATH 환경 변수에 추가한다.

![Imgur](https://i.imgur.com/PZWcToB.png)

`ANDROID_HOME`도 설정한다

![Imgur](https://i.imgur.com/mNHo0iM.png)

## 녹스 앱플레이어 설치

녹스를 다운로드하고 설치하고 실행한다. (Hyper-V 가 켜져 있으면 크러쉬가 날 수 있다. -_-/)

윈도우 창 상단 오른쪽에 톱니바퀴 클릭 (시스템 설정)

![Imgur](https://i.imgur.com/zWybP5f.png)

ROOT켜기 체크

![Imgur](https://i.imgur.com/h1qyDTH.png)

해상도를 스마트폰에 자기 해상도에 맞춰서 적절히 맞추자

![Imgur](https://i.imgur.com/VUbhsBq.png)

재시작 후 설정으로 들어간다. &#40;Tools → 설정&#41;

![Imgur](https://i.imgur.com/MXg0qgG.png)

이 후 개발자 모드를 활성화 시키는 방법은 다른 안드로이드와 같으므로 패스!

USB 디버깅을 활성화 한다.

![Imgur](https://i.imgur.com/hnyK6qR.png)

## 녹스 앱플레이어 연결

녹스가 실행중인 상태에서 콘솔&#40;터미널&#41;에서 아래와 같이 입력한다.

녹스 연결

```
adb connect 127.0.0.1:62001
```
```
adb server version (36) doesn't match this client (40); killing...
* daemon started successfully
connected to 127.0.0.1:62001
```

연결 되었는지 확인

```
adb devices
```

```
List of devices attached
127.0.0.1:62001 device
```

## 프로젝트 생성 및 실행

CLI 패키지 설치

```
npm install -g react-native-cli
npm install -g yarn
```

프로젝트 초기화(생성)

```
react-native init AwesomeProject
```

```
This will walk you through creating a new React Native project in D:\dev\projects\react-native\AwesomeProject
Using yarn v1.15.2
Installing react-native...
yarn add v1.15.2
info No lockfile found.
...
Done in 23.05s.

  Run instructions for iOS:
    • cd D:\dev\projects\react-native\AwesomeProject && react-native run-ios
    - or -
    • Open ios\AwesomeProject.xcodeproj in Xcode
    • Hit the Run button

  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd D:\dev\projects\react-native\AwesomeProject && react-native run-android
```

프로젝트 디렉토리로 이동

```
cd AwesomeProject
```

Metro Bundler 실행 &#40;콘솔 &#35;1&#41;

```
npm start
```

```
> LottoGenerator@0.0.1 start D:\dev\projects\react-native\LottoGenerator
> node node_modules/react-native/local-cli/cli.js start

┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  Running Metro Bundler on port 8081.                                         │
│                                                                              │
│  Keep Metro running while developing on any JS projects. Feel free to        │
│  close this tab and run your own Metro instance if you prefer.               │
│                                                                              │
│  https://github.com/facebook/react-native                                    │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘

Looking for JS files in
   D:\dev\projects\react-native\LottoGenerator

Loading dependency graph, done.
```

실행 시 옵션이 추가된다. &#40;`--deviceId 127.0.0.1:62001`&#41; &#40;콘솔 &#35;2&#41;

※ 위에 Metro Bundler 실행 안해도 이 단계에서 자동으로 띄워준다...

```shell
react-native run-android --deviceId 127.0.0.1:62001
```

```
info Starting JS server...
info Building the app...

> Configure project :app
File C:\Users\antop\.android\repositories.cfg could not be loaded.
Checking the license for package Android SDK Build-Tools 28.0.3 in D:\dev\sdk\android\licenses
License for package Android SDK Build-Tools 28.0.3 accepted.
Preparing "Install Android SDK Build-Tools 28.0.3 (revision: 28.0.3)".
"Install Android SDK Build-Tools 28.0.3 (revision: 28.0.3)" ready.
Installing Android SDK Build-Tools 28.0.3 in D:\dev\sdk\android\build-tools\28.0.3
"Install Android SDK Build-Tools 28.0.3 (revision: 28.0.3)" complete.
"Install Android SDK Build-Tools 28.0.3 (revision: 28.0.3)" finished.
C:\Users\antop\.gradle\caches\modules-2\files-2.1\com.squareup.okhttp3\okhttp\3.12.1\dc6d02e4e68514eff5631963e28ca7742ac69efe\okhttp-3.12.1.jar: D8: Type `org.conscrypt.Conscrypt` was not found, it is required for default or static interface methods desugaring of `java.security.Provider okhttp3.internal.platform.ConscryptPlatform.getProvider()`

> Task :app:bundleReleaseJsAndAssets
warning: the transform cache was reset.
Loading dependency graph, done.
info Writing bundle output to:, D:\dev\projects\react-native\AwesomeProject\android\app\build\generated\assets\react\release\index.android.bundle
info Done writing bundle output

> Task :app:lintVitalRelease
Calling mockable JAR artifact transform to create file: C:\Users\antop\.gradle\caches\transforms-1\files-1.1\android.jar\bd2c9107bd4c264b05130cf4636eacea\android.jar with input D:\dev\sdk\android\platforms\android-28\android.jar
C:\Users\antop\.gradle\caches\modules-2\files-2.1\com.squareup.okhttp3\okhttp\3.12.1\dc6d02e4e68514eff5631963e28ca7742ac69efe\okhttp-3.12.1.jar: D8: Type `org.conscrypt.Conscrypt` was not found, it is required for default or static interface methods desugaring of `java.security.Provider okhttp3.internal.platform.ConscryptPlatform.getProvider()`

BUILD SUCCESSFUL in 2m 42s
53 actionable tasks: 53 executed
info Running D:\dev\sdk\android/platform-tools/adb -s 127.0.0.1:62001 reverse tcp:8081 tcp:8081
info Installing the app on the device (cd android && adb -s 127.0.0.1:62001 install app/build/outputs/apk/debug/app-debug.apk
Performing Push Install
app/build/outputs/apk/debug/app-debug.apk: 1 file pushed. 4.5 MB/s (31700523 bytes in 6.755s)
        pkg: /data/local/tmp/app-debug.apk
Success
info Starting the app on 127.0.0.1:62001 (D:\dev\sdk\android/platform-tools/adb -s 127.0.0.1:62001 shell am start -n com.awesomeproject/com.awesomeproject.MainActivity)...
Starting: Intent { cmp=com.awesomeproject/.MainActivity }
```

실행된다.

![Imgur](https://i.imgur.com/rRDQgyh.png)

## Hot Reloading 활성화 하기

R 두번 입력으로 리로드가 안된다...

개발 메뉴를 열어서 Reload 하거나 Hot Reloading을 활성화 해서 개발하자. ㅠㅠ 

녹스는 단축키에 이미 설정이 되어 있다. `Page Down` 키 누르면 나온다.

![Imgur](https://i.imgur.com/32ZL3BD.png)

다른 방법으로는 콘솔에서 `adb shell input keyevent 82` 입력

Hot Reloading 활성화 하자.

![Imgur](https://i.imgur.com/Sed0oVA.png)

소스 파일 수정시 바로 반영된다.

## 출처

https://facebook.github.io/react-native/docs/getting-started.html

https://docs.microsoft.com/ko-kr/xamarin/android/get-started/installation/android-emulator/hardware-acceleration?pivots=windows

https://developer.android.com/studio/command-line/sdkmanager

https://developer.android.com/studio/releases/platform-tools

https://stackoverflow.com/questions/46235080/nox-emulator-with-react-native

https://facebook.github.io/react-native/docs/debugging