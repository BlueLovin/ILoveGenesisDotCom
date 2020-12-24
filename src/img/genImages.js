let GenesisHerself=[{id: 0, src:''}];

const tryRequire = (path) => {
    try {
        return require(`${path}`);
    } catch (err) {
        return false;
    }
};

for(let i = 1; i < 30; i++){
    var currentExtension;
    if(tryRequire('./genherself/' + i + '.JPEG')){
        

        currentExtension = '.JPEG';
    }
    else if(tryRequire('./genherself/' + i + '.JPG')){
        

        currentExtension = '.JPG';
    }
    else if(tryRequire('./genherself/' + i + '.PNG')){
        

        currentExtension = '.PNG';
    }
    else{
        console.log('oops, this function fucked up.');
        break;
    }
        GenesisHerself.push({id:i,src:require('./genherself/' + i + currentExtension).default});
        console.log(GenesisHerself[i].src);
}


export default GenesisHerself;