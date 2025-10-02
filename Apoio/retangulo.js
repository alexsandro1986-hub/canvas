let Retangulo = function(posX, posY, width, height, color){
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.visible = true;
}
Retangulo.prototype.metLargura = function(){
    return this.width/2;
}
Retangulo.prototype.metAltura = function(){
    return this.height/2;
}
Retangulo.prototype.centerX = function(){
    return this.posX + this.metLargura();
}
Retangulo.prototype.centerY = function(){
    return this.posY + this.metAltura();
}