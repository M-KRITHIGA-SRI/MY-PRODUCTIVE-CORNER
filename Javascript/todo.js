const inputBoxt = document.getElementById("input-boxt");
const listContainer = document.getElementById("list-container");
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showlist(){
    listContainer.innerHTML=localStorage.getItem("data");
}
function addtask(){
    if(inputBoxt.value ===''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBoxt.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBoxt.value="";
    saveData();
}
listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

    
},false);

showlist(); 