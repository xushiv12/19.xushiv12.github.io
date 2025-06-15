let a=document.querySelectorAll("bt");
a.forEach(a1=>{
  let a2=a1.getAttribute("w");
  let a3=a1.getAttribute("h");
  if(!a2&&!a3){
    a1.style.cssText="width:100px;height:50px;background-color:red;";
  }else{
    a1.style.cssText=`width:${a2};height:${a3};background-color:red;`;
  }
  let a4=a1.getAttribute("s");
  if(a4){
    a1.addEventListener("click",()=>{
        eval(a4);
    });
  }
});
