let Books = [
    {
        id: 0,
        title: "A special place for women",
        author: "laura hankin",
        edition: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/71ksbx-cXGL.jpg"

    },
    {
        id: 1,
        title: "Holdout",
        author: "jefferey kluger",
        edition: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/91EsW7FeDCL.jpg"

    },
    {
        id: 2,
        title: "Woman of light",
        author: "kali fajardo",
        edition: 3,
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1639027745l/58587145.jpg"
    },
    {
        id: 3,
        title: "Oh william",
        author: "newyork times",
        edition: 4,
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617988577l/56294820.jpg"
    },
    {
        id: 4,
        title: "Women talking",
        author: "mariam towes",
        edition: 6,
        image: "https://images-na.ssl-images-amazon.com/images/I/81VDB+MTX+L.jpg"
    },
    {
        id: 5,
        title: "Edge case",
        author: "yz  chin",
        edition: 3,
        image: "https://images-na.ssl-images-amazon.com/images/I/71DBo02Bn+L.jpg"
    }
];

let fav = [];
const ss = document.getElementsByClassName("favs")[0];
const display= (obj , arrayname) => {
    let temp = document.createElement('div');
    let titleCell = document.createElement('h4');
    let authorCell = document.createElement('h6');
    let imageCell = document.createElement('img');
    let button = document.createElement('button');
    const hiddenId = document.createElement('input');
    imageCell.src = obj.image;
    titleCell.innerText = obj.title;
    authorCell.innerText = obj.author; 
    imageCell.setAttribute("class", "image"); // imageCell.classList.add('image')
    titleCell.setAttribute("class", "title");
    authorCell.setAttribute("class", "author");
    hiddenId.setAttribute("id", obj.id);
    hiddenId.setAttribute("class", "hidden");
    temp.appendChild(imageCell);
    temp.appendChild(titleCell);
    temp.appendChild(authorCell);
    temp.appendChild(button); 
    

    if (arrayname === "Books") {
        document.getElementsByClassName("results")[0].appendChild(temp);
        button.innerText = "Add to favorites";
        button.addEventListener("click", e => {
            addtofavourites(obj)
        })
    }
    else {
        ss.appendChild(temp);
        button.innerText="delete from favourites";
        button.addEventListener("click", e => {
            removefromfvourites(obj)
        })
    }
};

//renderBooks("Books");

let addtofavourites= obj => { //arrow function
    fav = JSON.parse(localStorage.getItem("fav")) || [];
    fav.push(obj);
    localStorage.setItem("fav", JSON.stringify(fav));
}

let removefromfvourites=obj=> {                      
    console.log(obj.id) //console.log(el.id)
    fav = JSON.parse(localStorage.getItem('fav')) || [];
    fav= fav.filter((el)=> {el.id !== obj.id  })
    localStorage.setItem("fav", JSON.stringify(fav));
    ss.innerHTML = "";
    render(fav, "fav");

}

let render=(array, arrayname)=> {
    array.map((obj) => { display(obj,arrayname) });
}
render(Books, "Books"); 

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
document.getElementById('newBook').addEventListener('click', e => {
   e.preventDefault();
    AddNewBook(e);
})

function AddNewBook({target: {parentNode}}) {
    const title = parentNode[0].value;
    const author = parentNode[1].value;
    const edition = parentNode[2].value;
    const image = parentNode[3].value;
    const id = Books.length;
    const path = "img/"
    image=path.concat(JSON.stringify(image).slice(10,-10))
    const newBook = { id, title, author, edition, image };
    closeForm();
    Books.push(newBook);
    document.getElementById("Books").innerHTML = "";
    renderBooks("Books");
}






