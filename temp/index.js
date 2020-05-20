

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
// chrome.storage.sync.get(['test'],(data)=>{
//     // console.log(JSON.parse(data))
//      output = JSON.parse(data.test);
//     // console.log()
    
//     // console.log(output)

//     console.log(output)
// })



    var output;

   var ret = chrome.storage.sync.get(['test'],(data)=>{
        // console.log(JSON.parse(data))
         output = JSON.parse(data.test);
        // console.log()
        
        // console.log(output)

        // console.log(output)
        return output;
    });

    console.log(ret)
    

// getBMS();
// var ret = getBMS();
// console.log(ret);


