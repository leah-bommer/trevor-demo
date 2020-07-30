// TODO next: move circle positioning relative to input components adjusted to size of the screenshot 

var imgSequence = [
    ['/img/flow/1-homeScreen.png', [100, 200]],
    ['/img/flow/2-editBills.png', [200, 300]]
];

var currImgIndex = 0;

function getImageHeight () {
    return $('.screenshot').height();
}

function getCircleRadius () {
    const selectCircle = document.querySelector('.circle');
    const circleCSSProperties = getComputedStyle(selectCircle);
    const height = parseFloat(circleCSSProperties.height);
    return height / 2;
}
