const { app, BrowserWindow } = require('electron');
let mainWindow = null
//Cuando la aplicación esta lista
app.on('ready', () => {
    //Crear la ventana de la aplicación
    mainWindow = new BrowserWindow({
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    //Cargar Archivo HTML
    mainWindow.loadFile(__dirname + '/index.html');
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        // mainWindow.webContents.openDevTools();
    })
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});