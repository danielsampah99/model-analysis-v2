import { app, BrowserWindow } from 'electron'


const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600
	})

	win.loadFile("index.html")
}


// only create the main window when the application is ready
app.whenReady().then(() =>{

	createWindow()

	// open a window if none are opened on macos
	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
	})

})

// close the application when all apps on the user's device are closed.
// PS: This should work on all operating systems but windows
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})
