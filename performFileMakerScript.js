function performFileMakerScript() {
    FileMaker.PerformScriptWithOption ( "Show Custom Dialog", "Hello World!", "3" );
}

document.getElementById('run-script-button').addEventListener('click', performFileMakerScript);
