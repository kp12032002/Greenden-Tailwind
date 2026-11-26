var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function(){
    sidenav.style.right = 0
})

closenav.addEventListener("click", function(){
    sidenav.style.right = "-50%"
})

// search Functionality

var search = document.getElementById("search")
var container = document.getElementById("container")
var productList = container.querySelectorAll("div")

search.addEventListener("keyup", function(){
    var enteredValue = event.target.value.toUpperCase()

    for(count=0; count<productList.length; count=count+1){

        var productName = productList[count].querySelector("h1").textContent.toUpperCase()

        if(productName.indexOf(enteredValue)<0){
            productList[count].style.display = "none"
        }else {
            productList[count].style.display = "block"
        }
    }
})