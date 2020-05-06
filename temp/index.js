

var bookmark1 = {
    site: 'site',
    title: 'title',
    url: 'url'
}

var bookmark2 = {
    site: 'site2',
    title:'title2',
    url:'url2'
}

var bookmarks = [bookmark1,bookmark2];

chrome.storage.sync.set({test:JSON.stringify(bookmarks)});
// chrome.storage.sync.set({test:'this is some words'})

// var test = chrome.storage.sync.get(['test'],(data)=>{
//     // console.log(JSON.parse(data))
//     console.log(JSON.parse(data.test))
// })

function testing(){
 var test = chrome.storage.sync.get(['test'],(data)=>{
    // console.log(JSON.parse(data))
    console.log(JSON.parse(data.test));
    return JSON.parse(data.test)
})}

testing();
// var test = JSON.parse(chrome.storage.sync.get(['test']));
// console.log(test);
