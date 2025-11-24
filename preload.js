const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  minimizeWindow: () => ipcRenderer.send('window-minimize'),
  maximizeWindow: () => ipcRenderer.send('window-maximize'),
  closeWindow: () => ipcRenderer.send('window-close'),
  openSettings: () => ipcRenderer.send('open-settings'),
  checkUpdates: () => ipcRenderer.invoke('check-updates'),
  openUrl: (url) => ipcRenderer.send('open-url', url),
  enableDiscord: () => ipcRenderer.send('discord-enable'),
  disableDiscord: () => ipcRenderer.send('discord-disable'),
  getDiscordStatus: () => ipcRenderer.invoke('discord-status')
});