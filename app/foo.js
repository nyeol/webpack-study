export default class Foo {
    constructor(){
        var el = document.createElement('div');
        el.className = 'foo';
        document.body.appendChild(el);
        this.el = el;
    }

    say(extra=''){
        this.el.innerText = `Hi~ ${extra}`;
    }
}
