"use strict";

var app = require("app");
var BrowserWindow = require("browser-window");

var mainWindow = null;

require("./src/server/app");

app.on("ready", function () {
    mainWindow = new BrowserWindow({
        frame: false,
        height: 800,
        icon: "src/client/favicon.ico",
        width: 1450,
        "node-integration": false
    });

    mainWindow.loadURL("http://localhost:8000");
});
