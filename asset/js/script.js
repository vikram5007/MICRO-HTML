var name_val=document.querySelector("#user");
var frame=document.getElementById("framer");
name_val.addEventListener("click",nameDisp);

function nameDisp(){
    alert("called");
    frame.src="/asset/components/vikram/index.html";
}

