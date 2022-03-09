//select all imgs
let img = document.querySelectorAll(".item-img");
// select icon of event
let close = document.getElementById("close");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
//show page var
let lightBoxContainer = document.getElementById("lightBoxContainer")
let lightBox =  document.getElementById("lightbox")
// extra variables to hold data
let currentIndex 
let imageArray  = []

//click
for(let i=0 ;i<img.length;i++){
        imageArray.push(img[i])
       // Event El click
            img[i].addEventListener("click",function(ev){                
               currentIndex= imageArray.indexOf(ev.target)
                let imagPath = ev.target.src;
                lightBox.style.backgroundImage="url("+imagPath+")"
                lightBoxContainer.style.display = "block"
            })
    }
// next arrow
    next.addEventListener("click",function(){

        currentIndex=   ++currentIndex;
        
        if(currentIndex >= img.length)
            {
                currentIndex=0;
            }
        
        let x= img[currentIndex].src
        lightBox.style.backgroundImage= "url('"+x+"')"
        
        
    })  

//prev arrow
    prev.addEventListener("click",function(){
    
       
        currentIndex=   --currentIndex;
        
        if(currentIndex < 0)
            {
                currentIndex=  img.length-1  ;
            }
        
        let x= img[currentIndex].src
        lightBox.style.backgroundImage= "url('"+x+"')"
        
        
    })
// close 
close.addEventListener("click",function(){
    lightBoxContainer.style.display = "none"
})



//keyboard ev
document.addEventListener("keydown",function(ev){
    
    //right arrow
    if(ev.keyCode == 39)
        {
             
            currentIndex=   ++currentIndex;

            if(currentIndex >= img.length)
                {
                    currentIndex=0;
                }

            let x= img[currentIndex].src
            lightBox.style.backgroundImage= "url('"+x+"')"
    
        }
    // left arrow
    else if(ev.keyCode == 37)
        {
              

            currentIndex=   --currentIndex;

            if(currentIndex < 0)
                {
                    currentIndex=  img.length-1  ;
                }

            let x= img[currentIndex].src
            lightBox.style.backgroundImage= "url('"+x+"')"
        }
    // esc key
    else if(ev.keyCode == 27)
        {
             
    lightBoxContainer.style.display = "none"
        }
    
    else
        {
            alert("this key not handeld")
        }
    
    
    
})
