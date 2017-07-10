/**
 * Created by R4L on 2017/7/10.
 */
const electron = require('electron');
const { app } = electron;
const { BrowserWindow } = electron;
let win;
function createWindow() {
  // 创建窗口并加载页面
  win = new BrowserWindow({fullscreen:true});
  win.setFullScreen(true);

  win.loadURL(`file://${__dirname}/index.html`);

  // 打开窗口的调试工具
  // win.webContents.openDevTools();
  // 窗口关闭的监听
  // win.maximize();
  win.setFullScreen(true);

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});