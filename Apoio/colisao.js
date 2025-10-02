function blocoRect(r1,r2){
    let catX = r1.CenterX() - r2.CenterX();
    let catY = r1.CenterY() - r2.CenterY();

    let somaMetLargura = r1.metLargura() + r2.metLargura();
    let somaMetAltura = r1.metAltura() + r2.metAltura();

    if(Math.abs(catX) < somaMetLargura && Math.abs(catY) < somaMetAltura){
        r2.visible = false;
        setTimeout(function(){
            r2.visible = true;
        },1000);
    }
}