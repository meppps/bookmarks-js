
var mainBtn = document.createElement('div');
var fetchBtn = document.createElement('div');
var addBtn = document.createElement('div');

var background = '#f4f4f4';
var width = '30';
var height = '30';



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
    
    const site = window.location.host;
    const title = document.title;
    const url = window.location.href;
    
    // console.log(url)
    var bookmark = {
        site: site,
        title: title,
        url: url
    }; 


    console.log(bookmark);

    function fetch(){
        // 
        var test = chrome.storage.sync.get(['test'],(data)=>{
            // console.log(JSON.parse(data))
            console.log(JSON.parse(data.test))
        })
            return item;
        }
    };


    if(chrome.storage.sync.get(['bookmarks']) == null){
        var bookmarks = []
        bookmarks.push(bookmark);
        chrome.storage.sync.set({bookmarks:JSON.stringify(bookmarks)});
    } else {
        var bookmarks = JSON.parse(chrome.storage.sync.get(['bookmarks']));
        bookmarks.push(bookmark);
        chrome.storage.sync.set({bookmarks:JSON.stringify(bookmarks)});
    }
};




function initRm(){

    var rmBtns = document.querySelectorAll('.remove');
    rmBtns.forEach((rm)=>{
        rm.addEventListener('click',()=>{
            var url = rm.parentElement.childNodes[3].innerText;
            remove(url);

            document.querySelector('table.bookmarkTable').remove();
            showBookmarks();

            console.log(fetch())
        })
    });
};

function showBookmarks(){
    var bookmarks = fetch();
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
    initRm();
}



function remove(url){

    var bookmarks = fetch();

    for(i=0;i<bookmarks.length;i++){

        var bm = bookmarks[i];
        // console.log(bm.url)
        if(url === bm.url){
            bookmarks.splice(i,1);
            chrome.storage.sync.get('bookmarks',JSON.stringify(bookmarks));
            return;
        }

        
    }
    
}



fetchBtn.addEventListener('click',()=>{
    showBookmarks();

 
    });

// 
addBtn.addEventListener('click',()=>{
    addBookMark();
    document.querySelector('table.bookmarkTable').remove();
    showBookmarks();

});