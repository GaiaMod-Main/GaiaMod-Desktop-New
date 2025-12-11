const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const path = require('path');
const https = require('https');
const DiscordRPC = require('discord-rpc');

let mainWindow;
let settingsWindow;
let updateWindow;
let discordClient = null;
let discordConnected = false;
let updateAvailable = false;

const APP_VERSION = '2.8.0';
const DISCORD_CLIENT_ID = '1442337181208281239';

// Initialize Discord RPC
function initDiscordRPC() {
  if (discordClient) return;
  
  discordClient = new DiscordRPC.Client({ transport: 'ipc' });
  
  discordClient.on('ready', () => {
    console.log('Discord RPC connected');
    discordConnected = true;
    updateDiscordPresence();
  });
  
  discordClient.login({ clientId: DISCORD_CLIENT_ID }).catch(err => {
    console.error('Failed to connect to Discord:', err);
    discordConnected = false;
  });
}

function updateDiscordPresence() {
  if (!discordClient || !discordConnected) return;
  
  discordClient.setActivity({
    details: 'Coding On ArkIDE',
    state: 'Building something awesome',
    startTimestamp: Date.now(),
    largeImageKey: 'arkide_logo',
    largeImageText: 'ArkIDE',
    instance: false,
  }).catch(err => {
    console.error('Failed to set Discord activity:', err);
  });
}

function disconnectDiscordRPC() {
  if (discordClient && discordConnected) {
    discordClient.clearActivity();
    discordClient.destroy();
    discordClient = null;
    discordConnected = false;
    console.log('Discord RPC disconnected');
  }
}

function updateSettingsIcon(hasUpdate) {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  
  const icon = hasUpdate ? '⚠️' : '⚙️';
  mainWindow.webContents.executeJavaScript(`
    (function() {
      const settingsBtn = document.querySelector('[data-settings-btn]');
      if (settingsBtn) {
        settingsBtn.textContent = '${icon}';
      }
    })();
  `);
}

function createUpdateWindow(latestVersion) {
  if (updateWindow) {
    updateWindow.focus();
    return;
  }

  updateWindow = new BrowserWindow({
    width: 500,
    height: 500,
    parent: mainWindow,
    modal: true,
    frame: true,
    resizable: true,
    minWidth: 400,
    minHeight: 250,
    icon: path.join(__dirname, 'assets/icons/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  Menu.setApplicationMenu(null);
  
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Update Available</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: rgb(41, 41, 41);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          padding: 20px;
        }
        .container {
          background: rgb(44, 44, 44);
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          padding: 30px;
          text-align: center;
          width: 100%;
          max-width: 400px;
        }
        h1 {
          color: #ffffff;
          margin-bottom: 10px;
          font-size: 24px;
        }
        .icon {
          font-size: 48px;
          margin-bottom: 15px;
        }
        p {
          color: #c0c0c0;
          margin-bottom: 25px;
          font-size: 14px;
          line-height: 1.6;
        }
        .version {
          background: #3a3a3a;
          padding: 10px;
          border-radius: 6px;
          margin-bottom: 25px;
          color: #ffffff;
          font-weight: bold;
          font-size: 18px;
        }
        .button-group {
          display: flex;
          gap: 10px;
          flex-direction: column;
        }
        button {
          padding: 12px 24px;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        .btn-primary {
          background: #3700ff;
          color: white;
        }
        .btn-primary:hover {
          background: #741dff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }
        .btn-secondary {
          background: #3a3a3a;
          color: white;
        }
        .btn-secondary:hover {
          background: #4a4a4a;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="icon">⚠️</div>
        <h1>Update Available</h1>
        <p>A new version of ArkIDE is ready to download!</p>
        <div class="version">Version ${latestVersion}</div>
        <div class="button-group">
          <button class="btn-primary" onclick="window.electronAPI.openUrl('https://github.com/The-ArkIDE-Project/ArkIDE-Desktop/releases/tag/v${latestVersion}')">
            ⬇️ Download Update
          </button>
          <button class="btn-secondary" onclick="window.close()">
            Close
          </button>
        </div>
      </div>
    </body>
    </html>
  `;
  
  updateWindow.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(html));
  
  updateWindow.on('closed', () => {
    updateWindow = null;
  });
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    frame: true,
    title: 'ArkIDE Desktop v' + APP_VERSION, 
    icon: path.join(__dirname, 'assets/icons/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  Menu.setApplicationMenu(null);
  mainWindow.loadFile('source/editor.html');

  mainWindow.on('page-title-updated', (event) => {
    event.preventDefault();
  });

  mainWindow.webContents.on('did-finish-load', () => {
    setTimeout(() => {
      mainWindow.webContents.executeJavaScript(`
        (function() {
          const textsToRemove = ['See Project Page', 'Back to Home', 'Upload'];
          let isRemoving = false;
          
          function removeButtons() {
            if (isRemoving) return;
            isRemoving = true;
            
            const elements = document.querySelectorAll('span, div, button, a');
            
            for (let el of elements) {
              const text = el.textContent.trim();
              
              if (el.hasAttribute && el.hasAttribute('data-settings-btn')) continue;
              
              if (text.toLowerCase().includes('save')) continue;
              
              if (text === 'Login' && el.children.length === 0) {
                try {
                  el.textContent = '';
                } catch(e) {}
                continue;
              }
              
              if (textsToRemove.includes(text)) {
                try {
                  el.remove();
                } catch(e) {}
              }
            }
            
            isRemoving = false;
          }
          
          removeButtons();
          setTimeout(removeButtons, 500);
          setTimeout(removeButtons, 1500);
          setTimeout(removeButtons, 3000);
        })();
      `);
    }, 1000);

    setTimeout(() => {
      mainWindow.webContents.executeJavaScript(`
        (function() {
          if (document.querySelector('[data-settings-btn]')) {
            return;
          }
          
          const settingsBtn = document.createElement('button');
          settingsBtn.textContent = '⚙️';
          settingsBtn.setAttribute('data-settings-btn', 'true');
          settingsBtn.style.cssText = \`
            position: fixed !important;
            top: 10px !important;
            right: 4px !important;
            z-index: 999999 !important;
            padding: 8px 8px !important;
            background:rgba(0, 0, 0, 0) !important;
            color: white !important;
            border: none !important;
            border-radius: 4px !important;
            cursor: pointer !important;
            font-family: Arial, sans-serif !important;
            font-size: 14px !important;
            transition: background 0.3s !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          \`;
          settingsBtn.onmouseover = () => settingsBtn.style.background = '#45a04a20';
          settingsBtn.onmouseout = () => settingsBtn.style.background = '#45a04a00';
          settingsBtn.onclick = () => window.electronAPI.openSettings();
          document.body.appendChild(settingsBtn);
        })();
      `);
    }, 25);
    
    // Check for updates after UI is loaded
    setTimeout(() => {
      checkForUpdatesBackground();
    }, 2000);
  });

  mainWindow.on('close', (e) => {
    if (mainWindow.readyToClose) {
      return;
    }
    
    e.preventDefault();
    dialog.showMessageBox(mainWindow, {
      type: 'question',
      buttons: ['Close', 'Cancel'],
      defaultId: 1,
      title: 'Close Ark IDE?',
      message: 'Are you sure you want to close?',
      detail: 'Make sure you saved your work.'
    }).then((response) => {
      if (response.response === 0) {
        mainWindow.readyToClose = true;
        mainWindow.destroy();
      }
    });
  });
}

function createSettingsWindow() {
  if (settingsWindow) {
    settingsWindow.focus();
    return;
  }

  settingsWindow = new BrowserWindow({
    width: 600,
    height: 850,
    parent: mainWindow,
    modal: false,
    frame: true,
    icon: path.join(__dirname, 'assets/icons/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  Menu.setApplicationMenu(null);
  settingsWindow.loadFile('settings.html');

  settingsWindow.on('closed', () => {
    settingsWindow = null;
  });
}

// Check for updates from GitHub
function checkForUpdates() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: '/repos/The-ArkIDE-Project/ArkIDE-Desktop/releases/latest',
      method: 'GET',
      headers: {
        'User-Agent': 'ArkIDE-Desktop'
      }
    };

    https.get(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const release = JSON.parse(data);
          const tag = typeof release.tag_name === "string" ? release.tag_name : "";
          const latestVersion = tag.startsWith("v") ? tag.slice(1) : tag;
          const isUpToDate = APP_VERSION === latestVersion;
          const isAhead = APP_VERSION.localeCompare(latestVersion, undefined, { numeric: true, sensitivity: 'base' }) > 0;
          
          resolve({
            currentVersion: APP_VERSION,
            latestVersion: latestVersion,
            isUpToDate: isUpToDate,
            isAhead: isAhead,
            downloadUrl: release.html_url,
            releaseName: release.name,
            releaseNotes: release.body || ""
          });
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

// Background update check
async function checkForUpdatesBackground() {
  try {
    const result = await checkForUpdates();
    
    // Only show update if there's a newer version available (not if ahead)
    if (!result.isUpToDate && !result.isAhead) {
      updateAvailable = true;
      updateSettingsIcon(true);
      createUpdateWindow(result.latestVersion);
    } else {
      updateAvailable = false;
      updateSettingsIcon(false);
    }
  } catch (error) {
    console.error('Background update check failed:', error);
  }
}

// IPC Handlers
ipcMain.on('window-minimize', () => {
  mainWindow.minimize();
});

ipcMain.on('window-maximize', () => {
  if (mainWindow.isMaximized()) {
    mainWindow.unmaximize();
  } else {
    mainWindow.maximize();
  }
});

ipcMain.on('window-close', () => {
  mainWindow.destroy();
});

ipcMain.on('open-settings', () => {
  createSettingsWindow();
});

ipcMain.handle('check-updates', async () => {
  try {
    const result = await checkForUpdates();
    
    // Update icon based on result
    if (!result.isUpToDate && !result.isAhead) {
      updateAvailable = true;
      updateSettingsIcon(true);
    } else {
      updateAvailable = false;
      updateSettingsIcon(false);
    }
    
    return result;
  } catch (error) {
    return { error: error.message };
  }
});

ipcMain.on('open-url', (event, url) => {
  require('electron').shell.openExternal(url);
});

// Discord RPC handlers
ipcMain.on('discord-enable', () => {
  initDiscordRPC();
});

ipcMain.on('discord-disable', () => {
  disconnectDiscordRPC();
});

ipcMain.handle('discord-status', () => {
  return discordConnected;
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('before-quit', async (event) => {
  console.log("App is quitting, cleaning up RPC…");

  if (discordClient) {
    event.preventDefault();

    try {
      await discordClient.clearActivity();
    } catch (_) {}

    try {
      await discordClient.destroy();
    } catch (_) {}

    discordClient = null;
    discordConnected = false;

    console.log("RPC cleaned up. Quitting…");
    app.exit(0);
  }
});