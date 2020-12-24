let DanteHimself=[];

const tryRequire = (path) => {
    try {
        return require(`${path}`);
    } catch (err) {
        return false;
    }
};

for(let i = 0; i < 11; i++){
    var currentExtension;
    if(tryRequire('./dante/' + (i + 1) + '.JPEG')){
        console.log('./dante/' + (i + 1) + '.JPEG');

        currentExtension = '.JPEG';
    }
    else if(tryRequire('./dante/' + (i + 1) + '.JPG')){
        console.log('./dante/' + (i + 1) + '.JPG');

        currentExtension = '.JPG';
    }
    else if(tryRequire('./dante/' + (i + 1) + '.PNG')){
        console.log('./dante/' + (i + 1) + '.PNG');

        currentExtension = '.PNG';
    }
    else{
        console.log('oops, this function fucked up.');
        break;
    }
        DanteHimself.push({id:i,src:require('./dante/' + (i + 1) + currentExtension).default});
        console.log(DanteHimself[i].src);
}


export default DanteHimself;