const inputbox = document.getElementById("input-box");
const tasklist = document.getElementById("task-list");

inputbox.addEventListener("keypress",function(event){
    if(event.key === "Enter") addtask();
})
function addtask(){
    if(inputbox.value === ''){
        let li = document.createElement('li'); 
        li.innerHTML = "Unnamed Task";
        tasklist.appendChild(li)
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    else{
        let li = document.createElement('li'); 
        li.innerHTML = inputbox.value;
        tasklist.appendChild(li)
        let span = document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

tasklist.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", tasklist.innerHTML);
}

function getData(){
    tasklist.innerHTML = localStorage.getItem("data");
}

getData();