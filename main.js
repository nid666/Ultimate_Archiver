// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const { appXML } = require('genshi-lib'); let xml;
const fs = require('fs');
const ytdl = require('ytdl-core')
appXML().then( res => { xml = res;
  setTimeout(() => { createWindow(); }, 300);
}); let mainWindow;

function createWindow () {
  // Get some options from xml.
  var frame = xml['window-frame'] || 'default';
  if(frame == 'default') frame = false; else frame = true;
  // Create the browser window.
  // For more Browser's Properties visit
  // https://github.com/electron/electron/blob/master/docs/api/browser-window.md
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: frame,
    transparent: true,
    minWidth: 640,
    minHeight: 480,
    icon: `${__dirname}/assets/build/app-icon.png`,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    },
  });
  mainWindow.loadFile('index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  });
}

app.on('ready', function () { });

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
});

