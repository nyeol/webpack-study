//import './index.css';
import Foo from './foo'


if(module.hot){
    module.hot.accept();

    module.hot.dispose((data)=>{
        data.skip = true;
        data.handler = btnClickHandler;
    });

    if(module.hot.data){
        var skip = module.hot.data.skip,
            handler = module.hot.data.handler;
        document.getElementsByTagName('button')[0].removeEventListener('click', handler);
    }
}

var btnClickHandler = () =>{
    //setTimeout(()=>{
        var foo = new Foo();
        foo.say();
    //}, 2000);
};

var btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', btnClickHandler);