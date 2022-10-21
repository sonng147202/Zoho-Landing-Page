if(window.innerWidth < 768){
     const tabStandard = document.querySelector("#tab-standard");
     const tabRofessional=document.querySelector("#tab-rofessional");
     const tabui=document.querySelectorAll(".tabui");
     const tabhindin=document.querySelectorAll(".tabhindin");

     tabStandard.addEventListener('click',()=>{
        for(let i=0;i<tabhindin.length;i++){
            for(let j=0;j<tabui.length;j++){
                tabui[i].style.display="block";
            }
            tabhindin[i].style.display="none";
        }
     })
     tabRofessional.addEventListener('click',()=>{
        for(let i=0;i<tabui.length;i++){
            for(let j=0;j<tabhindin.length;j++){
                tabhindin[i].style.display="block";
            }
            tabui[i].style.display="none";
        }
     })

}
