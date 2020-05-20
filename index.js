
var mainBtn = document.createElement('div');
var fetchBtn = document.createElement('div');
var addBtn = document.createElement('div');

var background = '#f4f4f4';
var width = '30';
var height = '30';


// function initBm(){
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

var firstBMS = [bookmark1,bookmark2];

// chrome.storage.sync.set({bookmarks:JSON.stringify(firstBMS)});
// chrome.storage.sync.get(['bookmarks'],(data)=>{console.log(data)});
// console.log(bookmarks)
// }
// initBm();



mainBtn.style.cssText = `background: ${background}; width: ${width}px; height: ${height}px; position: fixed;bottom:0;left: 0;color:black`;

addBtn.style.cssText = `background: green;width:${width}px;height:${height}px;position: fixed; top: 20;right:0;
`;


fetchBtn.style.cssText = `background: ${'red'};width:${width}px;height:${height}px;position: fixed; top: 10;left:0;
`;

addBtn.innerHTML = 'add';
fetchBtn.innerHTML = 'show';
mainBtn.innerHTML = 'M';


document.body.appendChild(mainBtn);
document.body.appendChild(fetchBtn);
document.body.appendChild(addBtn);


function addBookMark(){
    
    // const site = window.location.host;
    // const title = document.title;
    // const url = window.location.href;
    
    // // console.log(url)
    // var bookmark = {
    //     site: site,
    //     title: title,
    //     url: url
    // }; 


    // console.log(site,title,url);


    
    // // Add Bookmark
    // chrome.storage.sync.get(['bookmarks'],(data)=>{

        
    //     if(data.bookmarks){
    //         var bookmarks = JSON.parse(data.bookmarks);
    //         bookmarks.push(bookmark);
    //         chrome.storage.sync.set({test:JSON.stringify(bookmarks)});
    //     }else{
    //         var bookmarks = [];
    //         bookmarks.push(bookmark);
    //         chrome.storage.sync.set({test:JSON.stringify(bookmarks)});
    //     }

    // });


};



// Show bookmarks 

function showBookmarks(bookmarks){
    console.log('%c show bookmarks', 'color: yellow');

    chrome.storage.sync.get(['bookmarks'],(data)=>{
        console.log(data)

        var bookmarks = JSON.parse(data.bookmarks);

        console.log(bookmarks);

        var table = document.createElement('table');
        table.classList.add('bookmarkTable');
        table.innerHTML = `
        <tr><th>Site</th><th>Page</th><th>URL</th></tr>
        `
        document.body.appendChild(table);

        bookmarks.forEach((mark)=>{
            var row = document.createElement('tr');
            row.innerHTML = `
            <td>${mark.site}</td><td>${mark.title}</td><td>${mark.url}</td><td class="remove">X</td>
            `;
            table.appendChild(row)

    });

})};

// document.addEventListener('load',()=>{

// }

function selectRMS(rmBtns){
    console.log(rmBtns);
    rmBtns.forEach((rm)=>{
        console.log(rm);
        rm.addEventListener('click',()=>{
            console.log('Remove');
            var url = rm.parentElement.childNodes[3].innerText;
            remove(url);
            rm.parentElement.remove();
                return;
            })});
        };    


function initRm(){

    var rmBtns = document.querySelectorAll('td.remove');
    if(rmBtns.length === 0){
        setInterval(()=>{
            var rmBtns = document.querySelectorAll('td.remove');
            if(! rmBtns.length === 0){
                console.log(rmBtns);
                console.log(rmBtns);
            rmBtns.forEach((rm)=>{
                console.log(rm);
                rm.addEventListener('click',()=>{
                    console.log('Remove');
                    var url = rm.parentElement.childNodes[3].innerText;
                    remove(url);
                        return;
                    })});
            }

        },100)
    }else{
    console.log('RM BUTTONS LENGTH != 0');
    selectRMS(rmBtns);
        
    }
};
    
            
            // showBookmarks();


    fetchBtn.addEventListener('click',()=>{
        console.log('hfdshaf;lkjs')
        showBookmarks();
        initRm();
        });





function remove(url){

    // test > bookmarks 
    chrome.storage.sync.get(['bookmarks'],(data)=>{ 

    var bookmarks = JSON.parse(data.bookmarks)
    
    for(i=0;i<bookmarks.length;i++){


        
        var bm = bookmarks[i];
        // console.log(bm.url)
        if(url === bm.url){
            bookmarks.splice(i,1);
            chrome.storage.sync.set({bookmarks:JSON.stringify(bookmarks)});
            // chrome.storage.sync.get('bookmarks',JSON.stringify(bookmarks));
            return;
        }

        
    } 
});
}

function clearTable(){
    if(document.querySelector('.bookmarkTable')){
    document.querySelector('.bookmarkTable').remove();
    }
};


// 
addBtn.addEventListener('click',()=>{
    // addBookMark();
    const site = window.location.host;
    const title = document.title;
    const url = window.location.href;
    
    // console.log(url)
    var bookmark = {
        site: site,
        title: title,
        url: url
    }; 


    // console.log(site,title,url);
    // console.log(bookmark);


    
    // Add Bookmark
    chrome.storage.sync.get(['bookmarks'],(data)=>{

        
        if(data.bookmarks){
            var bookmarks = JSON.parse(data.bookmarks);
            bookmarks.push(bookmark);
            chrome.storage.sync.set({bookmarks:JSON.stringify(bookmarks)});
        }else{
            var bookmarks = [];
            bookmarks.push(bookmark);
            chrome.storage.sync.set({bookmarks:JSON.stringify(bookmarks)});
        }
        console.log('piss');

    });

 
        // Check if added
        chrome.storage.sync.get(['bookmarks'],(data)=>{

        
            if(data.bookmarks){
                var bookmarks = JSON.parse(data.bookmarks);
                // console.log(bookmarks);
            }else{
                // console.log('no bookmarks found')
            }
            console.log('piss');
    
        });
    // },2000)


    

    
    
    clearTable();
    // showBookmarks();
    
});


// })};