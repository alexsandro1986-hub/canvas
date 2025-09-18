let Retangulo = function (posX, posY, width, height, color) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.visible = true;
}

Retangulo.prototype.metadeLargura = function () {
    return this.width / 2;

}

Retangulo.prototype.metadeAltura = function () {
    return this.height / 2;
}

Retangulo.prototype.CenterX = function () {
    return this.posX + this.metadeLargura();
}

Retangulo.prototype.CenterY = function () {
    return this.posY + this.metadeAltura();
}