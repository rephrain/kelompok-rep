import {csv} from "https://cdn.skypack.dev/d3-fetch@3";
function disp(){
    var data
    var i = 0
    var ele = document.getElementsByTagName('input')
    for(i = 0; i < ele.length; i++) {
        if(ele[i].type="radio") {
            if(ele[i].checked){
                if(ele[i].value=="book1"){
                    // data <= read_csv("csv/book1.csv")
                    console.log(1)
                    csv("csv/book5.csv").then((data) => {
                    console.log(data);
                    });
                }
                else if(ele[i].value=="book2"){
                    // data <= read_csv("csv/book2.csv")
                    console.log(2)
                    csv("csv/book2.csv").then((data) => {
                    console.log(data);
                    });
                }
                else if(ele[i].value=="book3"){
                    // data <= read_csv("csv/book3.csv")
                    console.log(3)
                    csv("csv/book3.csv").then((data) => {
                    console.log(data);
                    });
                }
                else if(ele[i].value=="book4"){
                    // data <= read_csv("csv/book4.csv")
                    console.log(4)
                    csv("csv/book4.csv").then((data) => {
                    console.log(data);
                    });
                }
                else{
                    // data <= read_csv("csv/book5.csv")
                    console.log(5)
                    csv("csv/book5.csv").then((data) => {
                    console.log(data);
                    });
                }
                
            }
        } 
    }
}
document.getElementById("select").addEventListener("click", disp);