// Search Duck Duck Go !
// create context menu
browser.contextMenus.create({
    id: 'ddg',
    title: "Search Duck Duck Go !",
    contexts: ['selection']
});

// add action listener to the context menu
browser.contextMenus.onClicked.addListener(contextMenuActionDuck);

function contextMenuActionDuck(info, tab) {
    const url = "https://duckduckgo.com/?q=" + info.selectionText;
    browser.tabs.create({url: url});
}

