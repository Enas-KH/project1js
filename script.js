let Books= [
{
    title: "book1",
    author: "laura hankin",
    edition: 1,
    image: "img/book1"

},
{
    title: "book2",
    author: "jefferey kluger",
    edition: 1,
    image: "img/book2"
},
{
    title: "book3",
    author: "kali fajardo",
    edition: 3,
    image: "img/book3"
},
{
    title: "book4",
    author: "newyork times",
    edition: 4,
    image: "img/book4"
},
{
    title: "book5",
    author: "mariam towes",
    edition: 6,
    image: "img/book5"
},
{
    title: "book6",
    author: "yz  chin",
    edition: 3,
    image: "img/book6"
}
];
function display()
{
  var arrayLength = Books.length;
var temp;
  for (i = 0; i < arrayLength; i++) {
    temp = document.createElement('div');
    temp.className = 'results';
    temp.innerHTML = Books[i].title;
    let  x =document.getElementsByClassName('results')[0];
    x.appendChild(temp);
    console.log(x);
   
  }
}
display();
   /* let BooksTable = document.createElement("table")
    let BooksTableHead = document.createElement("thead")
    let BooksTableHeadRow = document.createElement("tr")
    let BooksTableHeaderHeading1 = document.createElement("th")
    let BooksTableHeaderHeading2 = document.createElement("th")
    let BooksTableHeaderHeading3 = document.createElement("th")
    let BooksTableHeaderHeading4 = document.createElement("th")
    let BooksTableHeaderHeading5 = document.createElement("th")
    
     Set heading titles for each <th> element */
    /*BooksTableHeaderHeading1.innerHTML = "Image";
    BooksTableHeaderHeading2.innerHTML = "Title";
    BooksTableHeaderHeading3.innerHTML = "author";
    BooksTableHeaderHeading4.innerHTML = "edition";
    BooksTableHeaderHeading5.innerHTML = " "; */

    /* document.getElementById("table").appendChild(BooksTable);

    let imgCell = document.createElement("td");
    let titleCell = document.createElement("td");
    let authorCell = document.createElement("td");
    let editionCell = document.createElement("td");
    let deleteCell = document.createElement("td");
    let imageElement = document.createElement("img");*/

    /*let deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-sm');
    deleteButton.classList.add('btn-danger');
    addDeleteEvent(deleteButton);
  deleteCell.appendChild(deleteButton);
  deleteCell.classList.add('align-middle');

  setCellContent(
    imgCell,
    titlecell,
    authorCell,
    editionCell,
    imageElement,
    img,
    title,
    author,
    edition
  );
  addImageCellEvents(imgCell);
  row.appendChild(imgCell);
  row.appendChild(titleCell);
  row.appendChild(authorCell);
  row.appendChild(editionCell);
  row.appendChild(deleteCell);

  function setCellContent(
    imgCell,
    titlecell,
    authorCell,
    editionCell,
    imageEl,
    title,
    image,
    author,
    edition
  ) {
    
    imageEl.src = image;
    imageEl.alt = "image not found";
    imageEl.width = 70;
    imageEl.classList.add('img-thumbnail');
    //set attributes for given "titleCell" <td> element
    titleCell.classList.add('align-middle');
    titleCell.innerHTML = title;
    authorCell.innerHTML = author;
    editionCell.innerHTML = edition;
    imageCell.appendChild(imageEl);
} */




/*
let body = document.createElement("tbody")
BooksTable.appendChild(body);
Books.forEach(function(Books) {
  let row = document.createElement("tr");
  createMovieCellElementsAndAttachEvents(row, book.title, book.img, book.author, book.edition)
  body.appendChild(row);
});
console.log("movie table: " + BooksTable.rows[1].childNodes[2].innerHTML);
//console.log(movieTable.rows[1].cells.item(2).innerHTML);
//console.log(document.images[0]);
console.log("container: " +document.getElementsByClassName('container')[0].childNodes)
//parentNode, childNodes[#], firstChild, lastChild, nextSibling, previousSibling
const table = document.getElementsByTagName('table')[0]
console.log("Table's grandparent node: " + table.parentNode.parentNode) //<div class="container">
console.log("Table parent node: " + table.parentNode) //<div id="table">
console.log("Table child nodes: " + table.childNodes) //<thead> and <tbody>
console.log("NUm of child nodes: " + table.childNodes.length) 
console.log("Table's first child': " + table.firstChild.nodeName) //<thead>
console.log("Table's last child': " + table.lastChild.nodeName) //<tbody>
console.log("Table's next sibling': " + table.nextSibling) //null
console.log("Table's previous sibling': " + table.previousSibling) //
table.childNodes.forEach(function(node){
  console.log(node) */

