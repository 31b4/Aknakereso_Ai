$(document).ready(function() {
    $("input[type=button]").click(function(){
        $("#keret").html("");
        let t=document.createElement("table");
        let sor=$("#sor").val();
        let oszlop=$("input[name=oszlop]").val();
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
        for (let i = 0; i < sor; i++) {
            for (let j = 0; j < oszlop; j++) {
                if($("tr").eq(i).find("td").eq(j).text()=="_") {
                    let db= 0
                    let nb = [[-1,-1],[-1,0],[-1,1],[1,-1],[1,0],[1,1],[0,-1],[0,1]]
                    for (let d = 0; d < nb.length; d++) {
                        if ($("tr").eq(i+nb[d][0]).find("td").eq(j+nb[d][1]).text()=="X") {
                            db++;
                        }
                    }
                    $("tr").eq(i).find("td").eq(j).text(db)
                }
            }
        }
        $("td").css("background-color","green");
        $("td:contains('X')").css("background-color","red");
        console.log(mezo)
        
    });
});

//hf uresmezok körülötte hány db bomba van, írjuk bele