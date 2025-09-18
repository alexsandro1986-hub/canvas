function blocoRect(r1,r2) {
    let catX = r1.CenterX() - r2.CenterX();
    let catY = r1.CenterY() - r2.CenterY();


    let somaMetadeLargura = r1.metadeLargura() + r2.metadeLargura();
    let somaMetadeAltura = r1.metadeAltura() + r2.metadeAltura();

    if (Math.abs(catX) < somaMetadeLargura && Math.abs(catY)< somaMetadeAltura){
        r2.visible = false;
        
    }
}