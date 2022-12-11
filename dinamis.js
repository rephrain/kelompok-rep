function disp(){
    var data
    var i = 0
    var ele = document.getElementsByTagName('input')
    for(i = 0; i < ele.length; i++) {
        if(ele[i].type="radio") {
            if(ele[i].checked){
                if(ele[i].value=="book1"){
                    document.getElementById("grafik1").output = "grafik";
                }
                else if(ele[i].value=="book2"){
                    document.getElementById("grafik2").output = "grafik";
                }
                else if(ele[i].value=="book3"){
                    document.getElementById("grafik3").output = "grafik";
                }
                else if(ele[i].value=="book4"){
                    document.getElementById("grafik4").output = "grafik";
                }
                else{
                    document.getElementById("grafik5").output = "grafik";
                }
                
            }
        } 
    }
}
document.getElementById("select").addEventListener("click", disp);
