// SETS ===============================

function draw(a) 
{
    const D = 30, r = 12; 
    const colors = ["red", "green", "blue", "black", "magenta", "indigo", "olive", "brown", ];
    let dict = {}
    let i = 0;
    for (let c of inputA.value) {
        dict[c] = colors[i++]
    }

    $canvas.height = a.length * D + D;
    const ctx = $canvas.getContext("2d");
    clearCanvas(ctx); 
 
    ctx.font = '18px arial';
    ctx.textAlign = "center" ;
    ctx.textBaseline = "middle" ;
    for(let i = 0; i < a.length; i++) {
        
        for (let j = 0; j < a[i].length; j++) {
            //
            let x = j * D + D ;  
            let y = i * D + D;
            let c = a[i][j];
        
            ctx.fillStyle = dict[c]; 
            ctx.beginPath(); 
            ctx.arc(x, y, r, 0, Math.PI*2);  
            ctx.fill();

            ctx.fillStyle = "white"; 
            ctx.fillText(c, x, y);

            ctx.strokeStyle = "white";
            ctx.beginPath(); 
            ctx.arc(x, y, r, 0, Math.PI*2);  
            ctx.stroke();                          
        }
    }
    
}

function clearCanvas(ctx) {
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

