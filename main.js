const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'public', 'icon.ico'), // Updated path for better compatibility
    //frame: false,
    webPreferences: {
      nodeIntegration: false, // Changed for security reasons
      contextIsolation: true
    }
  });

  // Load index.html into the new BrowserWindow
  //mainWindow.loadFile(path.join(__dirname, 'index.html'));
  // Load the index.html of the app.
  mainWindow.loadURL(
    require('url').format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  );
  mainWindow.webContents.openDevTools({ mode: 'detach' })

  // will set up later // Set default menu
  // const defaultMenu = Menu.buildFromTemplate([
  //   // Menu template goes here. You can define a custom menu or use Electron's default
  // ]);
  // Menu.setApplicationMenu(defaultMenu); // Set the menu for the application
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
