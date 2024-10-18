//select popup-layer and popup-overlay
var popuplayer=document.querySelector(".popup-layer")
var popupoverlay=document.querySelector(".popup-overlay")
var addbtn=document.getElementById("popup-plus-button")

addbtn.addEventListener("click",function(){
    popuplayer.style.display="block"
    popupoverlay.style.display="block"
})

var cancelbtn=document.getElementById("cancelmovie")


cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popuplayer.style.display="none"
    popupoverlay.style.display="none"
})


//selecting moviebox,submitbtn,movie-name-box,movie-director-name,review

var container= document.querySelector(".container")
var submitbtn=document.getElementById("addmovie")
var moviename=document.getElementById("Movie-name-box")
var mdirectorname=document.getElementById("Movie-director-name")
var review=document.getElementById("Review")

submitbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","moviebox")
    div.innerHTML=`<h2>${moviename.value}</h2>
    <h3>${mdirectorname.value}</h3>
                <p>
                   ${review.value}
                </p>  <button onclick="deletemovie(event)">Delete</button>`

    container.append(div)
    popuplayer.style.display="none"
    popupoverlay.style.display="none"
     

}) 

function deletemovie(event){
    event.target.parentElement.remove()
}

