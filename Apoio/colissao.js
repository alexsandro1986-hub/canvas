function blocoRect(r1, r2) {
    let catX = r1.centerX() - r2.centerX();
    let catY = r1.centerY() - r2.centerY();

    let somMetLarg = r1.metLargura() + r2.metLargura();
    let somMetAltura = r1.metAltura() + r2.metAltura();

    if (Math.abs(catX) < somMetLarg && Math.abs(catY) < somMetAltura) {
        // r2.visible = false;
        //  setTimeout(function(){
        //r2.visible = true;
        // },2000)

        let passarX = somMetLarg - Math.abs(catX);
        let passarY = somMetAltura - Math.abs(catY);

        if (passarX >= passarY) {
            if (catY > 0) {
                r1.posY += passarY;  

        }else{
            r1.posY -= passarY;
        }
        }else{
            if(catX >0 ){
                r1.posX += passarX;
            }else{
                r1.posX -= passarX;
            }
        }
    }
}