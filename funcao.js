//função (function)
const calculo = function (valor){
    return valor * 3;
}

console.log(calculo(4));

//arrow function
const calculo2 = (valor) => valor * 3;

console.log(calculo2(5));

//exemplo function

const oldWay = function(nome, apelido){
    return `Meu nome é ${apelido}, ${nome}`;
}

console.log(oldWay('James Bond', 'Bond'));

//arrow function

const oldWay1 = (nome, apelido) => `Meu nome é ${apelido}, ${nome}`;

console.log(oldWay1('James Bond', 'Bond'));

//definição de um Objeto
//criando função sem arrow function
const sandwich = {
    bread: 'integral',
    cheese: 'white',

    prepare(){
        return `Eu quero um sandwich com farinha ${this.bread} e queijo ${this.cheese}`;
    },

    make(){
        const that = this;
        setTimeout( function(){
            console.log(that.prepare());
        }, 1000)
    }
}

sandwich.make();

//definição de um Objeto
//criando função com arrow function
const sandwich1 = {bread: 'integral', cheese: 'white',
                prepare(){return `Eu quero um sandwich com farinha ${this.bread} e queijo ${this.cheese}`;},
                make(){const that = this;
                setTimeout(function(){
                    console.log(that.prepare());
                },2000)
            }
}

sandwich1.make();

//array
const exemplo01 = [1, 2, 3, 4, 5];
const calcArray01 = exemplo01.map((item) => item * 2);
console.log(calcArray01);

const exemplo02 = ['João', 'Maria', 'Ana', 'José', 'Antonio'];
const calcArray02 = exemplo02.map((item) => item.length);
console.log(calcArray02);


//Diferença entre VAR, LET e CONST
var exibeMsg = function (){
    var msgForaDoIF = 'varJavaScript';
    if (msgForaDoIF == 'varJavaScript'){
        let msgDentroDoIF = 'letJavaScript';
        console.log(msgDentroDoIF);
        console.log(msgForaDoIF);
    }
    //console.log(msgDentroDoIF);
    console.log(msgForaDoIF);
}
console.log(exibeMsg());