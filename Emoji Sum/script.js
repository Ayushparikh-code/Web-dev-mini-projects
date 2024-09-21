document.getElementById('combine-btn').addEventListener('click', function() {
    const emoji1 = document.getElementById('emoji1').value; //To get the 'Emoji 1' value
    const emoji2 = document.getElementById('emoji2').value; //To get the 'Emoji 2' value

    const resultImage = `assets/${emoji1}-${emoji2}.png`; //To get the 'Sum' combination

    const resultImgElement = document.getElementById('result-img');
    resultImgElement.src = resultImage;

    resultImgElement.classList.remove('show');
    
    setTimeout(() => {
        resultImgElement.classList.add('show');
    }, 100);
});
