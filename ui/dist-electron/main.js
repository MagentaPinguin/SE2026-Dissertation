import { app, BrowserWindow } from "electron";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
const windowCfg = {};
const windowBuilder = () => {
    const mainWindow = new BrowserWindow(windowCfg);
    if (!process.env.UI_PATH)
        throw new Error("COULD NOT LOAD UI FROM PATH: " + process.env.UI_PATH);
    mainWindow.loadURL(path.join(app.getAppPath(), process.env.UI_PATH));
};
app.on("ready", () => {
    windowBuilder();
});
