let cellscontentDiv = document.querySelector('.cells-content');

function cellsinit() {
    let cellscontent = "<div class='top-left-cell'></div>";
    //top-row
    cellscontent += "<div class='top-row'>"
    for (let i = 0; i < 26; i++) {
        cellscontent += `<div class= 'top-row-cell'>${String.fromCharCode(65 + i)}</div>`;
    }
    cellscontent += "</div>"
    //left-col
    cellscontent += "<div class='left-col'>"
    for (let i = 0; i < 100; i++) {
        cellscontent += `<div class='left-col-cell'>${i + 1}</div>`
    }
    cellscontent += "</div>"
    cellscontent+="<div class='cells'>";
    for (let i = 0; i < 26; i++) {
        cellscontent += "<div class='row'>";
        //column
        for (let j = 0; j <100  ; j++) {
            cellscontent += "<div class='cell' contentEditable></div>";
        }
        cellscontent += "</div>";
    }
    cellscontent+="</div>"
    cellscontentDiv.innerHTML = cellscontent;
}
cellsinit();