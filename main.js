const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const path = require('path');
const https = require('https');
const DiscordRPC = require('discord-rpc');

let mainWindow;
let settingsWindow;
let discordClient = null;
let discordConnected = false;

const APP_VERSION = '2.1.0';
const DISCORD_CLIENT_ID = '1442337181208281239'; // Replace with your Discord Application ID

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
    details: 'Making projects on ArkIDE',
    state: 'Building something awesome',
    startTimestamp: Date.now(),
    largeImageKey: 'arkide_logo', // Upload this in Discord Developer Portal
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

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    frame: true,
    icon: path.join(__dirname, 'assets/icons/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  Menu.setApplicationMenu(null);
  mainWindow.loadFile('source/editor.html');

  // Remove unwanted buttons - FIXED VERSION
  mainWindow.webContents.on('did-finish-load', () => {
    setTimeout(() => {
      mainWindow.webContents.executeJavaScript(`
        (function() {
          const textsToRemove = ['See Project Page', 'Back to Home', 'Upload'];
          let isRemoving = false; // Prevent infinite loops
          
          function removeButtons() {
            if (isRemoving) return; // Don't run if already running
            isRemoving = true;
            
            const elements = document.querySelectorAll('span, div, button, a');
            
            for (let el of elements) {
              const text = el.textContent.trim();
              
              // Skip our Settings button
              if (el.hasAttribute && el.hasAttribute('data-settings-btn')) continue;
              
              // Skip if text contains "Save" (case insensitive)
              if (text.toLowerCase().includes('save')) continue;
              
              // Special handling for "Login" - only remove the text, not the element
              if (text === 'Login' && el.children.length === 0) {
                try {
                  el.textContent = ''; // Clear the text but keep the element
                } catch(e) {}
                continue;
              }
              
              // Remove if text exactly matches other banned texts
              if (textsToRemove.includes(text)) {
                try {
                  el.remove();
                } catch(e) {
                  // Element already removed, ignore
                }
              }
            }
            
            isRemoving = false;
          }
          
          // Run a few times only
          removeButtons();
          setTimeout(removeButtons, 500);
          setTimeout(removeButtons, 1500);
          setTimeout(removeButtons, 3000);
        })();
      `);
    }, 1000);

    // Inject Settings button
    setTimeout(() => {
      mainWindow.webContents.executeJavaScript(`
        (function() {
          // Check if settings button already exists
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
  });

  mainWindow.on('close', (e) => {
    // Check if we've already confirmed the close
    if (mainWindow.readyToClose) {
      return; // Allow the close to proceed
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
      mainWindow.destroy(); // avoids close-loop freeze
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
          resolve({
            currentVersion: APP_VERSION,
            latestVersion: latestVersion,
            isUpToDate: APP_VERSION === latestVersion,
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
    return await checkForUpdates();
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

// Clean up Discord RPC on quit
app.on('before-quit', async (event) => {
  console.log("App is quitting, cleaning up RPC…");

  if (discordClient) {
    event.preventDefault(); // STOP QUIT until cleanup completes

    try {
      await discordClient.clearActivity();
    } catch (_) {}

    try {
      await discordClient.destroy();
    } catch (_) {}

    discordClient = null;
    discordConnected = false;

    console.log("RPC cleaned up. Quitting…");
    app.exit(0); // FORCE exit safely
  }
});
