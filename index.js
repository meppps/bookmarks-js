
var mainBtn = document.createElement('div');
var fetchBtn = document.createElement('div');

var background = '#f4f4f4';
var width = '30';
var height = '30';



mainBtn.style.cssText = `background: ${background}; width: ${width}px; height: ${height}px; position: fixed;bottom:0;left: 0;`;


fetchBtn.style.cssText = `background: ${'red'};width:${width}px;height:${height}px;position: fixed; top: 10;left:0;
`;


document.body.appendChild(mainBtn);
document.body.appendChild(fetchBtn);

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
}



fetchBtn.addEventListener('click',()=>{
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
        <td>${mark.site}</td><td>${mark.title}</td><td>${mark.url}</td>
        `;
        table.appendChild(row)

    })

})

// 
mainBtn.addEventListener('click',()=>{
    addBookMark();
})