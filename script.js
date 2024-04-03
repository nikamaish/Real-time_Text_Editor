require.config({ paths: { 'vs': 'node_modules/monaco-editor/min/vs' } });

require(['vs/editor/editor.main'], function() {
    var editor = monaco.editor.create(document.getElementById('editor-container'), {
        value: '',
        language: 'javascript',
        theme: 'vs-dark',
        automaticLayout: true
    });

    editor.getModel().onDidChangeContent(function(event) {
        var changes = event.changes;
        // Send changes to the server for real-time collaboration
    });

    editor.onDidChangeCursorPosition(function(event) {
        var cursorPosition = event.position;
        // Send cursor position to the server to update other users' cursors
    });
});
