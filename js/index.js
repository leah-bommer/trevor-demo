
var imgSequence = [
    ['/img/flow/1-homeScreen.png', [100, 200]],
    ['/img/flow/2-editBills.png', [200, 300]]
];

var currImgIndex = 0;

// might need a rename, what this actually does is confusing
// function adjustedImageHeight () {
//     return ($('.screenshot').height()) / 785;
// }

function getImageHeight () {
    return $('.screenshot').height();
}


function getCircleRadius () {
    const selectCircle = document.querySelector('.circle');
    const circleCSSProperties = getComputedStyle(selectCircle);
    const height = parseFloat(circleCSSProperties.height);
    return height / 2;
}

function placeAndAnimateCircle(){
    var radius = getCircleRadius();
    var coordinates = imgSequence[currImgIndex][1];
    console.log('Coordinates of circle: ' + coordinates);
    console.log('With Radius: ' + radius);
    console.log('At step: ' + currImgIndex);

    $('.circle')
        .animate({
            top: 34,
            left: 100
        });
}

placeAndAnimateCircle();