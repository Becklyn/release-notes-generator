const Kaba = require("kaba");

module.exports = (new Kaba())
    .addJavaScriptEntries({
        "app": "js/app.ts"
    })
    .polyfillNode({path: true})
    .disableFileNameHashing()
    .disableChunkSplitting()
    .disableModuleConcatenation();
