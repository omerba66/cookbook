import seed from './server/mongoose';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;

// TODO:// export to module i guess
const mongoStarted = seed();
mongoStarted();
//
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

require('update-electron-app')({
  repo: 'kitze/react-electron-example',
  updateInterval: '1 hour'
});

function createWindow () {
  mainWindow = new BrowserWindow({ width: 900, height: 680 });
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  mainWindow.on('closed', () => (mainWindow = null));
  mainWindow.webContents.openDevTools();

  const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

  installExtension(REACT_DEVELOPER_TOOLS).then((name) => {
    console.log(`Added Extension:  ${name}`);
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipc.on('synchronous-message', (event, arg) => {
  console.log(arg);// prints "ping"
  event.returnValue = 'pong';
});
