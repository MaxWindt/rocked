const translationMap = {
    ui: { // Static UI elements
        title: {
            scriptLocation: {
                en: 'Choose Video File',
                ger: 'Video Datei auswählen'
            },
            oneFile: {
                en: 'Editing Mode',
                ger: 'Bearbeitungsmodus'
            },
            consoleWindow: {
                en: 'Console Window',
                ger: '控制台窗口'
            },
            icon: {
                en: 'Icon',
            },
            additionalFiles: {
                en: 'Additional Files',
                ger: '附加文件'
            },
            advanced: {
                en: 'Advanced',
                ger: '高级'
            },
            settings: {
                en: 'Settings',
                ger: 'Einstellungen'
            },
            currentCommand: {
                en: 'Current Command',
                ger: '当前命令'
            },
            output: {
                en: 'Output',
                ger: 'Ausgabe'
            },
            specificOptions: {
                en: 'auto-py-to-exe Specific Options',
                ger: 'auto-py-to-exe 特定的选项'
            },
            outputDirectory: {
                en: 'Output Directory',
                ger: 'Ausgabe Ordner'
            },
            increaseRecursionLimit: {
                en: 'Increase Recursion Limit',
                ger: '增加递归限制'
            },
            manuallyProvideOptions: {
                en: 'Manually Provide Options',
                ger: '手动提供选项'
            },
            manualArgumentInput: {
                en: 'Manual Argument Input',
                ger: '手动参数输入'
            },
            configuration: {
                en: 'Save Configuration',
                ger: 'Einstellungen speichern'
            }
        },
        button: {
            browse: {
                en: 'Browse',
                ger: 'Durchsuchen'
            },
            oneDirectory: {
                en: 'Edit Video',
                ger: 'Video bearbeiten'
            },
            oneFile: {
                en: 'Watch Zoom Folder',
                ger: 'Zoom Ordner beobachten'
            },
            consoleBased: {
                en: 'Console Based',
                ger: '基于控制台的'
            },
            windowBased: {
                en: 'Window Based (hide the console)',
                ger: '基于窗口的 (隐藏控制台)'
            },
            addFiles: {
                en: 'Add Files',
                ger: '添加文件'
            },
            addFolder: {
                en: 'Add Folder',
                ger: '添加目录'
            },
            addBlank: {
                en: 'Add Blank',
                ger: '添加空白'
            },
            importConfig: {
                en: 'Import Config',
                ger: 'Importiere Konfiguration'
            },
            exportConfig: {
                en: 'Export Config',
                ger: 'Exportiere Konfiguration'
            },
            convert: {
                en: 'Process',
                ger: 'Verarbeiten'
            },
            watchFolder: {
                en: 'Watch',
                ger: 'Ordner Beobachten'
            },
            openOutputFolder: {
                en: 'Open Output Folder',
                ger: 'Öffne Ausgabe Ordner'
            },
            enable: {
                en: 'Enable',
                ger: '开启'
            }
        },
        links: {
            helpPost: {
                en: 'Help Post',
                ger: '帮助帖子'
            }
        },
        placeholders: {
            pathToFile: {
                en: 'Path to video',
                ger: 'Pfad zum Video'
            },
            icoFile: {
                en: '.ico file',
                ger: '图标路径'
            },
            directory: {
                en: 'Folder',
                ger: 'Ordner'
            },
            arguments: {
                en: 'ARGUMENTS',
                ger: '参数'
            },
        },
        helpText: {
            outputDirectory: {
                en: 'The directory to put the output in. Will be created if it doesn\'t exist',
                ger: 'Das Verzeichnis, in dem die Ausgabe abgelegt werden soll. Wird erstellt, wenn es nicht vorhanden ist.'
            },
            increaseRecursionLimit: {
                en: 'Having this enabled will set the recursion limit to 5000 using sys.setrecursionlimit(5000).',
                ger: '启用此功能将使用sys.setrecursionlimit（5000）将递归限制设置为5000。'
            },
            manualArgumentInput: {
                en: 'Inject raw text into the generated command.',
                ger: '将原始文本插入到生成的命令中。'
            }
        },
        notes: {
            oneFileAdditionalFilesNote: {
                en: 'Here you can choose your Zoom Recording Folder. </br> It will be checked for new files\n' +
                    'and processed automatially with the given settings.',
                ger: 'Hier muss der Zoom Aufnahme Ordner ausgewählt werden. </br> Es wird nach dem Start\n' +
                    'automatisch auf neue Video Dateien überprüft und mit den gegebenen Einstellungen verarbeitet.'
            },
            rootDirectory: {
                en: 'If you want to put files in the root directory, put a period (.) in the destination.',
                ger: '如果要将文件放到根目录中，请在目标目录中输入句点(.)。'
            },
            somethingWrongWithOutput: {
                en: 'Something wrong with your exe? Read\n' +
                    '<a href="https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=application_link&utm_campaign=auto_py_to_exe_help&utm_content=bottom" target="_blank">\n' +
                    '    this post on how to fix common issues\n' +
                    '</a>\n' +
                    'for possible solutions.',
                ger: '你的exe有问题? 阅读' +
                    '<a href="https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=application_link&utm_campaign=auto_py_to_exe_help&utm_content=bottom" target="_blank">\n' +
                    '    这篇文章是关于如何修复常见问题的\n' +
                    '</a>\n' +
                    '寻找可能的解决方案。'
            }
        }
    },
    // Elements dynamically added to the DOM
    dynamic: {
        title: {
            // For the usage of constants.js:advancedSections
            generalOptions: {
                en: 'General Options',
                ger: '常规选项'
            },
            whatToBundleWhereToSearch: {
                en: 'What to bundle, where to search',
                ger: '捆绑什么，搜索哪里'
            },
            howToGenerate: {
                en: 'How to generate',
                ger: '如何生成'
            },
            windowsSpecificOptions: {
                en: 'Windows specific options',
                ger: 'Windows特定选项'
            },
            windowsSideBySideAssemblySearchingOptions: {
                en: 'Windows Side-by-side Assembly searching options (advanced)',
                ger: '窗口并排汇编搜索选项(高级)'
            },
            macOsxSpecificOptions: {
                en: 'Mac OS X specific options',
                ger: 'Mac OS X特定选项'
            },
            rarelyUsedSpecialOptions: {
                en: 'Rarely used special options',
                ger: '很少使用的特殊选项'
            },
            other: {
                en: 'Other',
                ger: '其他'
            },
        },
        button: {
            // For the usage of interface.js_createSubSectionInAdvanced
            browseForFile: {
                en: 'Browse for File',
                ger: '浏览文件'
            },
            browseForFolder: {
                en: 'Browse for Folder',
                ger: '浏览文件夹'
            },
            enable: {
                en: 'Enable',
                ger: '开启'
            },
            converting: {
                en: 'Converting...',
                ger: '转换中······'
            },
            clearOutput: {
                en: 'Clear Output',
                ger: '清除输出f'
            },
        },
        modal: {
            configModalTitle: {
                en: 'Override current configuration?',
                ger: '覆盖当前配置？'
            },
            configModalDescription: {
                en: 'All previously inserted values will be erased.',
                ger: '所有先前插入的值将被删除。'
            },
            configModalConfirmButton: {
                en: 'Confirm',
                ger: '确认'
            },
            configModalCancelButton: {
                en: 'Cancel',
                ger: '取消'
            }
        }
    },
    // Things like alerts
    nonDom: {
        alert: {
            noScriptsLocationProvided: {
                en: 'Please choose a File or directory',
                ger: 'Bitte wähle eine Datei oder ein Verzeichnis'
            },
            overwritePreviousOutput: {
                en: 'This action will overwrite a previous output in the output folder.\nContinue?',
                ger: '此操作将覆盖输出文件夹中以前的输出。\n是否继续？'
            }
        },
    }
};

const translate = (language) => {
    if (language === undefined) {
        language = currentLanguage;
    }

    // Check that the language is supported
    language = _checkLanguageIsSupportedOrDefault(language);
    currentLanguage = language;

    // Update text inside elements
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");
    elementsToTranslate.forEach(element => {
        const keys = element.dataset.i18n.split(".");
        const translationBlock = keys.reduce((obj, i) => obj[i], translationMap);

        // If there is a translation, translate otherwise use the default language
        if (translationBlock !== undefined && translationBlock[language] !== undefined) {
            element.innerHTML = translationBlock[language];
        } else {
            element.innerHTML = translationBlock[_defaultLanguage];
        }
    });

    // Update placeholders
    const placeholdersToTranslate = document.querySelectorAll("[data-i18n_placeholder]");
    placeholdersToTranslate.forEach(element => {
        const keys = element.dataset.i18n_placeholder.split(".");
        const translationBlock = keys.reduce((obj, i) => obj[i], translationMap);

        if (translationBlock !== undefined && translationBlock[language] !== undefined) {
            element.placeholder = translationBlock[language];
        } else {
            element.placeholder = translationBlock[_defaultLanguage];
        }
    });

    // Update titles
    const titleToTranslate = document.querySelectorAll("[data-i18n_title]");
    titleToTranslate.forEach(element => {
        const keys = element.dataset.i18n_title.split(".");
        const translationBlock = keys.reduce((obj, i) => obj[i], translationMap);

        if (translationBlock !== undefined && translationBlock[language] !== undefined) {
            element.title = translationBlock[language];
        } else {
            element.title = translationBlock[_defaultLanguage];
        }
    });
};

const _getLanguage = () => {
    const language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
          navigator.language || // All browsers
          navigator.userLanguage; // IE <= 10

    let shortLang = language;
    if (shortLang.indexOf('-') !== -1) {
        shortLang = shortLang.split('-')[0];
    }
    if (shortLang.indexOf('_') !== -1) {
        shortLang = shortLang.split('_')[0];
    }

    return shortLang;
};

const _checkLanguageIsSupportedOrDefault = (language) => {
    if (supportedLanguages.map(x => x.code).indexOf(language) !== -1) {
        return language;
    } else {
        return _defaultLanguage;
    }
};

const getTranslation = (path) => {
    const keys = path.split(".");
    const translationBlock = keys.reduce((obj, i) => obj[i], translationMap);

    if (translationBlock !== undefined && translationBlock[currentLanguage] !== undefined) {
        return translationBlock[currentLanguage];
    } else {
        return translationBlock[_defaultLanguage];
    }
};

const _defaultLanguage = 'en';
const supportedLanguages = [
    {
        name: 'English',
        code: 'en',
    },
    {
        name: 'Deutsch',
        code: 'ger',
    },
];
let currentLanguage = _checkLanguageIsSupportedOrDefault(_getLanguage()); // Keeps track of the current language
