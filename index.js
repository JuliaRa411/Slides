const items=document.querySelectorAll('.item')
console.log(items);


items.forEach(item =>{
item.addEventListener ('mouseover', () =>{
removeFocus()
item.classList.add('selected')

})


removeFocus=() =>{
    items.forEach(item =>{
        item.classList.remove('selected')
    })      
}
})

// slides//
const end=document.querySelector("#end");
const go=document.querySelector("#go");
 
const picture = ["one.jpg", "two.jpg", "thre.jpg", "four.jpg", "five.jpg"]; 
console.log(picture[0]);
 let i = 0;

 go.addEventListener("click", () => {
i++;
if ( i>picture.length -1){ 
    i = 0
}
document.querySelector("#slides").src = picture[i]

 })

slides.addEventListener("click", () => {
    i--;
    if ( i< picture.length -1){ 
        i = 0
    }
 document.querySelector("#slides").src = picture[i]
    
     })

//Move In//

const finish=document.querySelector("#finish");
const start=document.querySelector("#start");
 
const pictureMove = ["1.jpeg","2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"]; 
console.log(pictureMove[0]);
 let p = 0;

 start.addEventListener("click", () => {
p++;
if ( p>pictureMove.length -1){ 
    p = 0
}
document.querySelector("#slidesMove").src = pictureMove[p]

 })

 slidesMove.addEventListener("click", () => {
    p--;
    if ( p< picture.length -1){ 
        p = 0
    }
 document.querySelector("#slidesMove").src = pictureMove[p]
    
     })