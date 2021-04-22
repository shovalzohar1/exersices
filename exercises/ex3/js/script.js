window.onload= function(){
    const colors=["#E9967A","#FFEBCD","#5F9EA0","#FF7F50","#8FBC8F","#66CDAA","#B0C4DE","#87CEFA","#FFB6C1","#D3D3D3","#BC8F8F","#D8BFD8"]
    const myName="Shoval Zohar"
    const lastNameLength= (myName.split(" ")[1]).length
    let counter=lastNameLength-1
    const plus=document.createElement("div")
        plus.className="plus"
        plus.onclick=function(e){
                addBox()
                e.stopPropagation()
        }
    function addBox(){
        
        const box=document.createElement("div")
        box.className="box"
        const boxes=document.getElementsByClassName("boxes")[0]
        const randomColor= colors[Math.floor(Math.random()*colors.length)]
        box.style.backgroundColor=randomColor
        box.appendChild(plus)
        if(counter%3===0){
            const star = document.createElement("div")
            star.className="star"
            box.appendChild(star)
        }
        box.onclick=function(){
            if(box.style.backgroundImage){
                box.style.backgroundImage="none"
                box.style.backgroundColor=randomColor
            }else{
                box.style.backgroundImage="url(images/football.png)"
                box.style.backgroundColor="white"
            }
        }
        counter++
        boxes.insertBefore(box,boxes.firstChild)
    }
    for(let i=0;i<lastNameLength;i++){
        addBox()
        
    }
    


}