let familyImages = [];

for(let i = 1; i < 19; i++){
    familyImages.push(require('./family/' + i + '.JPG').default);
}

export default familyImages;