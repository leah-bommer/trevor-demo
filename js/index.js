
var imgSequence = [
    ['/img/flow/1-homeScreen.png', [100, 200]],
    ['/img/flow/2-editBills.png', [200, 300]]
];

var currImgIndex = 0;

// might need a rename, what this actually does is confusing
function adjustedImageHeight () {
    return ($('.screenshot').height()) / 785;
}

function getCircleRadius () {
    return adjustedImageHeight() * 40;
}

// TODO remove 
console.log('Adjusted Image Height ' + adjustedImageHeight());
console.log('Circle Radius: ' + getCircleRadius());

function animateCircle(circleRadius){
    var radius = getCircleRadius();
    var coordinates = imgSequence[currImgIndex][1];
    console.log(coordinates);
    var top = adjustedImageHeight(coordinates[1]) - radius;
    console.log('Top: ' + top);

    
    $('.circle')
        .animate({
            //top: second index of [width, height], so height of image at current step, minus a circle radius with get circle radius return subtracted
            top: adjustedImageHeight(coordinates[1]) - radius
        });

}

console.log('coordinates of circle: ');
animateCircle();
console.log(' At step: ' + currImgIndex);