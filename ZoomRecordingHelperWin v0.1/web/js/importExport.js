const importConfiguration = (configuration) => {
    // TODO Check for version to support older versions

    configuration.pyinstallerOptions.forEach(({ optionDest, value }) => {
        if (configurationSetters.hasOwnProperty(optionDest)) {
            configurationSetters[optionDest](value);
        } else {
            // TODO Warn user?
            // TODO noconfirm is expected to come here
        }
    });
};

const _collectDataToExport = () => {
    const nonPyinstallerConfiguration = getNonPyinstallerConfiguration();
    delete nonPyinstallerConfiguration.outputDirectory; // This does not need to be saved in the config

    return {
        version: "ZoomRecordingHelper V0.1",
        pyinstallerOptions: getCurrentConfiguration()
    }
};

const onConfigurationImport = async () => {
    // if (!isCommandDefault()) {
    //     const response = await displayModal(
    //         getTranslation('dynamic.modal.configModalTitle'),
    //         getTranslation('dynamic.modal.configModalDescription'),
    //         [
    //             getTranslation('dynamic.modal.configModalConfirmButton'),
    //             getTranslation('dynamic.modal.configModalCancelButton')
    //         ]);

    //     if (response !== getTranslation('dynamic.modal.configModalConfirmButton'))
    //         return;
    // }

    const data = await eel.import_configuration()();
    importConfiguration(data);
};


const onConfigurationExport = async () => {
    const data = _collectDataToExport();
    await eel.export_configuration(data)();
};

eel.expose(saveConfigurations);
function saveConfigurations() {
    const data = _collectDataToExport();
    eel.save_configuration_on_exit(data)
}