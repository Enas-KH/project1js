let Books= [
{ 
    id:0,
    title: "A special place for women",
    author: "laura hankin",
    edition: 1,
    image: "https://images-na.ssl-images-amazon.com/images/I/71ksbx-cXGL.jpg",
    flag:0
       
},
{   
    id:1,
    title: "Holdout",
    author: "jefferey kluger",
    edition: 1,
    image: "https://images-na.ssl-images-amazon.com/images/I/91EsW7FeDCL.jpg",
    flag:0
    
},
{   id:2,
    title: "Woman of light",
    author: "kali fajardo",
    edition: 3,
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1639027745l/58587145.jpg",
    flag:0
},
{   id:3,
    title: "Oh william",
    author: "newyork times",
    edition: 4,
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617988577l/56294820.jpg",
    flag:0
},
{   id:4,
    title: "Women talking",
    author: "mariam towes",
    edition: 6,
    image: "https://images-na.ssl-images-amazon.com/images/I/81VDB+MTX+L.jpg",
    flag:0
},
{   id:5,
    title: "Edge case",
    author: "yz  chin",
    edition: 3,
    image: "https://images-na.ssl-images-amazon.com/images/I/71DBo02Bn+L.jpg",
    flag:0
}
];
function display(obj)
{
    let temp = document.createElement('div');
    let titleCell=document.createElement('h4');
    let authorCell=document.createElement('h6');
    let imageCell=document.createElement('img');
    let button=document.createElement('button');
    imageCell.src=obj.image;
    titleCell.innerText=obj.title;
    authorCell.innerText=obj.author;
    button.innerHTML = "Add to favorites";
    imageCell.setAttribute("class","image");
    titleCell.setAttribute("class","title");
    authorCell.setAttribute("class","author");
    temp.appendChild(imageCell);
    temp.appendChild(titleCell);
    temp.appendChild(authorCell);
    temp.appendChild(button);
    document.getElementsByClassName("results")[0].appendChild(temp); 
    //button.addEventListener("click",function(){
    //    const filteredbookes=Books.filter((objects) => {
    //    if(){
//
    //    }
    //
    //}); 
    

    /*let  x =document.getElementsByClassName('results')[0];
    x.appendChild(temp);
    console.log(x);*/ 
  
};
Books.map((obj)=>{display(obj)})


