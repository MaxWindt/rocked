/*
Handle the initialisation of the ui
*/

// PREVENT Drag & Drop
var // where files are dropped + file selector is opened
    dropRegion = document.getElementById("drop-region");

function preventDefault(e) {
    e.preventDefault();
      e.stopPropagation();
}
 
// dropRegion.addEventListener('dragenter', preventDefault, false);
// dropRegion.addEventListener('dragleave', preventDefault, false);
// dropRegion.addEventListener('dragover', preventDefault, false);
// dropRegion.addEventListener('drop', preventDefault, false);

// PREVENT Right click
    
document.addEventListener('contextmenu', event => event.preventDefault());

// Separator
let pathSeparator = '';


// Get initialisation data from the server and setup the ui
window.addEventListener("load", async () => {
    // Get initialisation data from Python
    const initialisationData = await eel.initialise()();
    pathSeparator = initialisationData.pathSeparator;

    // Setup ui events (for static content) and setup initial state
    setupEvents();

    // Setup language selection
    setupLanguageSelection();

    // Setup json config file is supplied
    if (initialisationData.suppliedUiConfiguration !== null) {
        importConfiguration(initialisationData.suppliedUiConfiguration);
    }

    // Setup nonPyinstallerConfiguration
    document.getElementById('output-directory').value = initialisationData.defaultOutputFolder;

    // If a file is provided, put it in the script location
    if (initialisationData.filename !== null) {
        configurationSetters['filenames'](initialisationData.filename);
    }

    // Try to translate to the default browser language
    translate();

    // If the server stops, close the UI
    window.eel._websocket.addEventListener('close', e => window.close());
});
