var sor
var oszlop
$(document).contextmenu(function() {
    return false;
});
function RestartGame(){
    $("#keret").html("");
}
$(document).ready(function() {
    $("input[type=button]").click(function(){
        var start = [-1,-1]
        $("#keret").html("");
        let t=document.createElement("table");
        sor=$("#sor").val();
        oszlop=$("input[name=oszlop]").val();
        let aknak=$("#akna").val();
        if(aknak>sor*oszlop-1){
            alert("nana")
            $("#akna").val(10)
            return
        }
        for (let i=0; i<sor; i++) {
            let s=document.createElement("tr");
            s.style.color="white"
            for (let j=0; j<oszlop; j++) {
                let c=document.createElement("td");
                c.innerHTML='_';
                c.style.width="25px"
                c.style.height="25px"
                c.style.textAlign="center"
                c.style.fontWeight="bold"
                
                s.append(c);
            }
            t.append(s);
        }
        $("#keret").append(t);
        /*
        let mezo = []
        for (let i = 0; i < sor; i++) {
            let sv = []
            for (let j = 0; j < oszlop; j++) {
                sv.push(0)
            }
            mezo.push(sv)
        }
        */
        let db_akna=0;
        while (db_akna<aknak) {
            let y=Math.floor(Math.random()*sor);
            let x=Math.floor(Math.random()*oszlop);
            if ($("tr").eq(y).find("td").eq(x).text()=="_") {
                //mezo[y][x]=1
                $("tr").eq(y).find("td").eq(x).text("X");
                db_akna++;
            }
        }
        $("td").css("background-color","grey");
        for (let i = 0; i < sor; i++) {
            for (let j = 0; j < oszlop; j++) {
                if($("tr").eq(i).find("td").eq(j).text()=="_") {
                    start = [i,j]
                    let db= 0
                    let nb = [[-1,-1],[-1,0],[-1,1],[1,-1],[1,0],[1,1],[0,-1],[0,1]]
                    for (let d = 0; d < nb.length; d++) {
                        if ($("tr").eq(i+nb[d][0]).find("td").eq(j+nb[d][1]).text()=="X") {
                            db++;
                        }
                    }
                    $("tr").eq(i).find("td").eq(j).text(db)
                    $("tr").eq(i).find("td").eq(j).click(function(){
                        

                        Rekurzio(this.parentNode.rowIndex,this.cellIndex)
                    })
                }else{
                    $("tr").eq(i).find("td").eq(j).click(function(){//endgame
                                alert("buktad")
                                RestartGame()
                    })
                    $("tr").eq(i).find("td").eq(j).contextmenu(function(){//endgame

                        $("tr").eq(this.parentNode.rowIndex).find("td").eq(this.cellIndex).css("background-color","red")
                   
                     
                

                    })
            
                }
                
            }
        }
        // $("#td").click(function(){
        //     if (this.text=="X") {
        //         this.css("background-color","red")
        //     }else{
        //        // alert('My position in table is: '+this.cellIndex+'x'+this.parentNode.rowIndex);
        //         Rekurzio(this.cellIndex,this.parentNode.rowIndex)
        //         //this.css("background-color","green")
        //     }
        // })
        //$("td").css("background-color","green");
        //$("td:contains('X')").css("background-color","red");
     
        //Rekurzio(start[0],start[1])
    });
});


//rekurziv korbejaras-------------------
function Rekurzio(x,y){
    //console.log(x,y)
    //your code to be executed after 1 second 
    //setTimeout(function() { 
    //}, 200);
    if ($("tr").eq(x).find("td").eq(y).text()!="0" && $("tr").eq(x).find("td").eq(y).text()!="X") {
        $("tr").eq(x).find("td").eq(y).css("background-color","black")

    } 
    if( $("tr").eq(x).find("td").eq(y).text()=="0" ){
        
        $("tr").eq(x).find("td").eq(y).css("background-color","black")
        $("tr").eq(x).find("td").eq(y).text("-")
        if (y+1<oszlop) {
            Rekurzio(x,y+1)
        }
        if (y-1>=0) {
            Rekurzio(x,y-1)
        }
        if (x+1<sor) {
            
            Rekurzio(x+1,y)
        }
        if (x-1>=0) {
            Rekurzio(x-1,y)
        }


    }









}