/*
Handle user events
*/



// Top level inputs

const scriptLocationChange = async (event) => {
    colourInput(event.target, false, true, false);
};

const scriptLocationSearch = async (event) => {
    const entryScriptNode = document.getElementById('entry-video');
    const value = await askForFile('video');
    if (value !== null) {
        entryScriptNode.value = value;
        await scriptLocationChange({ target: entryScriptNode });
    }
};

const oneFileOptionChange = (option) => (event) => {
    const onefileAdditionalFilesNote = document.getElementById('onefileAdditionalFilesNote');
    onefileAdditionalFilesNote.style.display = option === 'one-directory' ? 'none' : 'block'; // Show the note if one-directory is being used
    const oneFileButton = document.getElementById('one-file-button');
    oneFileButton.classList.add(option === 'one-file' ? 'selected' : 'unselected');
    oneFileButton.classList.remove(option !== 'one-file' ? 'selected' : 'unselected');
    const oneDirectoryButton = document.getElementById('one-directory-button');
    oneDirectoryButton.classList.add(option === 'one-directory' ? 'selected' : 'unselected');
    oneDirectoryButton.classList.remove(option !== 'one-directory' ? 'selected' : 'unselected');
    // File Folder Picker
    const entryDirectorySearch = document.getElementById('entry-directory-search');
    const entryDirectory = document.getElementById('entry-directory');
    entryDirectory.style.display = option === 'one-directory' ? 'none' : 'block'; // Show if one-directory is being used
    entryDirectorySearch.style.display = option === 'one-directory' ? 'none' : 'block'; // Show if one-directory is being used
    const entryVideoSearch = document.getElementById('entry-video-search');
    const entryVideo = document.getElementById('entry-video');
    entryVideo.style.display = option === 'one-file' ? 'none' : 'block'; // Show if one-file is being used
    entryVideoSearch.style.display = option === 'one-file' ? 'none' : 'block'; // Show if one-file is being used
    // Watch Button
    const watchFolderButton = document.getElementById('watch-folder-button');
    watchFolderButton.style.display = option === 'one-directory' ? 'none' : 'block'; // Show if one-directory is being used
    const packageButton = document.getElementById('package-button');
    packageButton.style.display = option === 'one-file' ? 'none' : 'block'; // Show if one-directory is being used
    updateCurrentCommandDisplay();
};

// const additionalFilesAddFiles = async (event) => {
//     const files = await askForFiles();
//     if (files !== null) {
//         const datasListNode = document.getElementById('datas-list');
//         files.forEach(file => {
//             addDoubleInputForSrcDst(datasListNode, 'datas', file, '.', true, true);
//         });
//     }
// };

// const additionalFilesAddFolder = async (event) => {
//     const folder = await askForFolder();
//     if (folder !== '') {
//         const datasListNode = document.getElementById('datas-list');
//         const destinationFolder = folder.split(/[/\\]/);
//         addDoubleInputForSrcDst(datasListNode, 'datas', folder, `${destinationFolder[destinationFolder.length - 1]}/`, true, true);
//     }
// };

// const additionalFilesAddBlank = (event) => {
//     const datasListNode = document.getElementById('datas-list');
//     addDoubleInputForSrcDst(datasListNode, 'datas', '', '.', true, true);
// };

// Settings section events

const outputDirectorySearch = async (event) => {
    const folder = await askForFolder();
    if (folder !== '') {
        const outputDirectoryInput = document.getElementById('output-directory');
        outputDirectoryInput.value = folder;
    }
};const entryDirectorySearch = async (event) => {
    const folder = await askForFolder();
    if (folder !== '') {
        const outputDirectoryInput = document.getElementById('entry-directory');
        outputDirectoryInput.value = folder;
    }
};


const rawArgumentsChange = (event) => {
    updateCurrentCommandDisplay();
};


const watchFolder = async (event) => {
    const entryFolderNode = document.getElementById('entry-directory');
    eel.watchfolder(entryFolderNode.value)();
};

const packageScript = async (event) => {
    const entryScriptNode = document.getElementById('entry-video').value;

    const ClientID = document.getElementById('vimeo-client').value;
    const ClientToken = document.getElementById('vimeo-token').value;
    const ClientSecret = document.getElementById('vimeo-secret').value;
    const VimeoCredentials = [ClientID,ClientToken,ClientSecret]
    eel.package(entryScriptNode,VimeoCredentials)();
};



const setupEvents = () => {
    // Script location
    document.getElementById('entry-video').addEventListener('input', scriptLocationChange);
    document.getElementById('entry-video-search').addEventListener('click', scriptLocationSearch);
    // Output bundle type
    document.getElementById('one-directory-button').addEventListener('click', oneFileOptionChange('one-directory'));
    document.getElementById('one-file-button').addEventListener('click', oneFileOptionChange('one-file'));
    // // Additional files
    // document.getElementById('additional-files-add-files-button').addEventListener('click', additionalFilesAddFiles);
    // document.getElementById('additional-files-add-folder').addEventListener('click', additionalFilesAddFolder);
    // document.getElementById('additional-files-add-blank').addEventListener('click', additionalFilesAddBlank);

    // Settings
    document.getElementById('output-directory-search').addEventListener('click', outputDirectorySearch);
    document.getElementById('entry-directory-search').addEventListener('click', entryDirectorySearch);
    document.getElementById('configuration-import').addEventListener('click', () => onConfigurationImport());
    document.getElementById('configuration-export').addEventListener('click', () => onConfigurationExport());

    // Build buttons
    document.getElementById('package-button').addEventListener('click', packageScript);
    document.getElementById('watch-folder-button').addEventListener('click', watchFolder);
    document.getElementById('open-output-folder-button').addEventListener('click', openOutputFolder);

    // Add configurationGetters
    const getEntryScript = () => (['filenames', document.getElementById('entry-video').value]);
    const getEntryDirectory = () => (['entry-directory', document.getElementById('entry-directory').value]);
    const getOnefile = () => (['onefile', document.getElementById('one-directory-button').classList.contains('unselected')]);
    const getClientID = () => (['vimeo-client', document.getElementById('vimeo-client').value]);
    const getClientToken = () => (['vimeo-token', document.getElementById('vimeo-token').value]);
    const getClientSecret = () => (['vimeo-secret', document.getElementById('vimeo-secret').value]);
    
    // const getIcon = () => {
    //     const path = document.getElementById('icon-path').value;
    //     return path === '' ? null : ['icon_file', path];
    // };
    configurationGetters.push(getEntryScript);
    configurationGetters.push(getEntryDirectory);
    configurationGetters.push(getOnefile);
    configurationGetters.push(getClientID);
    configurationGetters.push(getClientToken);
    configurationGetters.push(getClientSecret);
    // configurationGetters.push(getIcon);

    // Add configurationSetters
    const setEntryScript = (value) => {
        document.getElementById('entry-video').value = value;
        scriptLocationChange({ target: document.getElementById('entry-video') });
    };
    const setEntryDirectory = (value) => {
        document.getElementById('entry-directory').value = value;
    };
    const setClientID = (value) => {
        document.getElementById('vimeo-client').value = value;
  };
    const setClientToken = (value) => {
        document.getElementById('vimeo-token').value = value;
  };
    const setClientSecret = (value) => {
        document.getElementById('vimeo-secret').value = value;
   };
    const setOnefile = (value) => {
        oneFileOptionChange('one-directory');
        if (value) {
            document.getElementById('one-directory-button').classList.add('unselected');
            document.getElementById('one-file-button').classList.remove('unselected');
        } else {
            document.getElementById('one-directory-button').classList.remove('unselected');
            document.getElementById('one-file-button').classList.add('unselected');
        }
    };
    // const setAdditionalFile = (value) => {
    //     const datasListNode = document.getElementById('datas-list');
    //     const [val1, val2] = value.split(pathSeparator);
    //     addDoubleInputForSrcDst(datasListNode, 'datas', val1, val2, true, true);
    // };
    // const setIcon = (value) => document.getElementById('icon-path').value = value;
    configurationSetters['filenames'] = setEntryScript;
    configurationSetters['entry-directory'] = setEntryDirectory;
    //configurationSetters['onefile'] = setOnefile;
    
    // configurationSetters['datas'] = setAdditionalFile;
    // configurationSetters['icon_file'] = setIcon;
    configurationSetters['vimeo-client'] = setClientID;
    configurationSetters['vimeo-token'] = setClientToken;
    configurationSetters['vimeo-secret'] = setClientSecret;
    

    // Soft initialise (to trigger any required initial events)
    setEntryScript('');
    setOnefile(false);
};

const openOutputFolder = (event) => {
    eel.open_folder_in_explorer(document.getElementById('output-directory').value, document.getElementById('entry-video').value)();
};
