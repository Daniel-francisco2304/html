class Retangulo{
    constructor(altura,largura){
        this.altura = altura
        this.largura = largura
    }
    calcular_area(){
        let area = this.altura * this.largura
        console.log(`A area do retangulo é: ${area}`)
    }
    calcular_perimetro(){
        let perimetro = this.altura * 2 + this.largura * 2
        console.log(`O perimetro do retangulo é: ${perimetro}`)
    }
}

let retangulo = new Retangulo(10,50)
retangulo.calcular_area();
retangulo.calcular_perimetro();