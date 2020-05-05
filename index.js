
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

    if(localStorage.getItem('bookmarks') == null){
        var bookmarks = []
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    } else {
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
};

function fetch(){
    // 
    if(localStorage.getItem('bookmarks')){
        var item = JSON.parse(localStorage.getItem('bookmarks'));
        // console.log(item)
    // console.log(localStorage.getItem('bookmarks'))
        return item;
    }
};

function showBookmarks(){
    var bookmarks = fetch();
    console.log(bookmarks);

    var table = document.createElement('table');
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

    })
}




function remove(url){

    var bookmarks = fetch();

    for(i=0;i<bookmarks.length;i++){

        var bm = bookmarks[i];
        // console.log(bm.url)
        if(url === bm.url){
            bookmarks.splice(i,1);
            localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
            return;
        }

        
    }
    
}



fetchBtn.addEventListener('click',()=>{
    showBookmarks();

    var rmBtns = document.querySelectorAll('.remove');
    rmBtns.forEach((rm)=>{
        rm.addEventListener('click',()=>{
            var url = rm.parentElement.childNodes[3].innerText;
            remove(url);
            console.log(fetch())
        })
    })

        
    })

// 
addBtn.addEventListener('click',()=>{
    addBookMark();
})