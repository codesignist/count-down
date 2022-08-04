const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: true,
    frame: false,
  });
  win.loadFile("index.html");
  win.webContents.openDevTools();
};
app.whenReady().then(() => {
  createWindow();
});
