'use strict';




class animals {
    constructor(animalsOption){
        this.name = animalsOption.name;
        this.age = animalsOption.age;
        this.hastail = animalsOption.hasTail;
        this.speed = animalsOption.speed;
    };

    getHourForThisDistance(distance){
        return  distance/this.speed;
    }
    voice(){
        console.log('voice');
    }
}


class car {
    type = 'car';
    constructor(name,model){
        this.name = name;
        this.model = model;
    }
}
class cat extends animals{
    constructor(catObj){
        super(catObj);
        this.cawls = catObj.cawls;
    }
    speeder(){
        
        let s = super.getHourForThisDistance(100);
        console.log(this.name + ': ' + s);
        
        return s<=1 ? 'too fast': s>1 && s<5 ? 'normal' : 'brake';
        
    }
    get getTest(){
        console.log('get test');
    }
    set getTest1(value){
        this.cawls = value;
        console.log('set test');
        console.log(value);
    }
    ['test' + 'smth'](){
        alert('PASSED')
    }
}


let panterra = new cat({
    name: 'panterra',
    age: 5,
    hastail: true,
    speed: 100, 
    cawls: 'big'
});


panterra.getTest1 = 'too big';
panterra.getTest;
console.log(panterra);

let smthTest = 'testsmth';
//panterra[smthTest]();
/*let girrafe = new animals('giraffe',5, true,25);
console.log(girrafe.getHourForThisDistance(100));
let zebra = new animals('zebra',5, true);
let bmw = new car('bmw','x7');
console.log(bmw);
console.log(girrafe);*/ 
console.log('...........................');

class component{
    constructor(nigora){
        this.$el = document.querySelector(nigora);
    }
    hide(){
        this.$el.style.display = 'none';
    }
    show(){
        this.$el.style.display = 'block';
    }
    addHTML(value){
        this.$el.insertAdjacentHTML('beforeend',value);
    }
}

class box extends component{
    constructor(options){
        super(options.selector);
        console.log(this);
        this.$el.style.width = this.$el.style.height = options.size + 'px'; 
        this.$el.style.backgroundColor = options.color;
    }

}

const box1 = new box({
    selector: '#box1',
    size: 100,
    color: 'red'
});

document.querySelector('.hide').onclick = function(){
    box1.hide();
}

document.querySelector('.show').onclick = function(){
    box1.show();
}
box1.addHTML('<b>ya gotov</b>');
