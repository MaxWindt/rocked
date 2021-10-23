eel.expose(putMessageInOutput);
function putMessageInOutput(message) {
    const outputNode = document.querySelector('#output textarea');
    if (message !== "") {
        outputNode.value += message; // Add the message
    
    if (!message.endsWith('\n')) {
        outputNode.value += '\n'; // If there was no new line, add one
    }
    // outputNode.style.height = 'auto';
    var textarea = document.getElementById('output');
    outputNode.scrollTop = textarea.scrollHeight;
    // Set the correct height to fit all the output and then scroll to the bottom
    // outputNode.style.height = '100px';
    // outputNode.style.height = (outputNode.scrollHeight + 10) + 'px';
    // window.scrollTo(0, outputNode.scrollHeight);
    }
}

eel.expose(signalStateOfGui);
function signalStateOfGui(state) {
    if (state == 'ready') {
        setPackagingState(PACKAGING_STATE_READY);
        console.log(state);
        // const outputTextAreaNode = document.querySelector('#output textarea');
        // outputTextAreaNode.classList.add('failure');
    }
    if (state == 'packaging') {
        setPackagingState(PACKAGING_STATE_PACKAGING);
        console.log(state);
        // const outputTextAreaNode = document.querySelector('#output textarea');
        // outputTextAreaNode.classList.add('failure');
    }
    if (state == 'complete') {
        setPackagingState(PACKAGING_STATE_COMPLETE);
        console.log(state);
        // const outputTextAreaNode = document.querySelector('#output textarea');
        // outputTextAreaNode.classList.add('failure');
    }
    window.scrollTo(0, document.body.scrollHeight);
}
