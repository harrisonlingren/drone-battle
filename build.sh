#!/bin/bash

echo "[Info] Installing dependencies..."
bower install

echo "[Info] Building source..."
gulp

cp ./src/index.html ./build/index.html
cp ./src/js/vendor/aframe/dist/aframe-v0.3.0.min.js ./build/aframe.min.js
cp -r ./src/assets ./build/
echo "[Info] Build successful! Compiled js/css/html located in ./build "

# echo "[Info] Starting HTTPster in ./build ..."
# httpster -d build
