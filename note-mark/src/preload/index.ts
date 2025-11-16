import { contextBridge } from 'electron'


if(!process.contextIsolated) {
  throw new Error('Context isolation is not enabled')
}
try {
  contextBridge.exposeInMainWorld('electron', {
    ping: () => 'pong'
  })
} catch (error) {
  console.error(error)
}