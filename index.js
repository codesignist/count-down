const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 140,
    transparent: true,
    frame: false,
    center: true,
    resizable: false,
  });
  win.loadFile("index.html");
  // win.webContents.openDevTools();
};
app.whenReady().then(() => {
  createWindow();
});
