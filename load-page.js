chrome.storage.sync.get("defaultOptions", function(defaults) {
    chrome.storage.sync.get(defaults.defaultOptions, function(options) {
        document.body.innerHTML += '<style>body { background: ' + options.bgColor + '} </style>'
        if (!options.url) {
            document.body.innerHTML +=
                '<iframe src="options.html"></iframe>' +
                // not using default options because I don't want options.html to
                // be visible as a default option but rather an invisible fallback
                '<style>iframe { position: absolute; top: 0; left: 0; height: 100%; width: 100%; border: 0; }</style>';
            return;
        }
        chrome.tabs.getCurrent(function(tab) {
            chrome.tabs.update(tab.id, { url: options.url });
        });
    });
});
