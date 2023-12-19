@echo off

if "%~1"=="save" (
  git add .
  git commit -m "bot: auto saving today's the progress."
  git push --all
)

if "%~1"=="restore" (
  git pull
  yarn install
)

if "%~1"=="clean" (
  cd "android"
  gradlew clean
  cd "../"
)

if "%~1"=="build-apk" (
  cd "android"
  gradlew clean
  REM "Building release apk"
  gradlew assembleRelease
  cd "../"

  copy "android/app/build/outputs/apk/release\app-release.apk" "app-release.apk"
  rename "app-release.apk" "localhosty.apk"

  @REM adb install "localhosty.apk"
)
