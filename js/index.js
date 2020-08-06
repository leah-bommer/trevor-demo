// TODO next: move circle positioning relative to input components adjusted to size of the screenshot 

var imgSequence = [
    ['/img/flow/1-homeScreen.png', [0, 0], 'This is the first label and I need length to test.', [71.27, 15.55]],
    ['/img/flow/2-editBills.png', [0, 0], 'This is the second label and I need length to test.', [15.58, 22.27]],
    ['/img/flow/3-editBillsExpandedSettings.png', [0, 0], 'This is the third label and I need length to test.', [15.58, 22.27]],
    ['/img/flow/4-editBills.png', [0, 0], 'This is the fourth label and I need length to test.', [16.60, 57.61]]
];

var focusPoint = $('.focus-point');
var currImgIndex = 0;
var label = imgSequence[currImgIndex][2];
var startPosition = imgSequence[currImgIndex][3];
//set initial circle position
focusPoint.css('left', calculateCoordinates()[0] + 'px');
focusPoint.css('top', calculateCoordinates()[1] + 'px');
//set initial label text
document.getElementById('circle-label-text-id').textContent = label;

//get radius of the circle
function calculateRadius(){
    return radius = parseFloat($('.circle').css('height')) / 2;
};

//takes current screenshot dimesions and the current images x and y percent
//RETURN: an array [x,y] of the coordinates for the circle 
//no need for parameters since each image has coordinates associated with it
//most of this could go in one line, given im going to rewrite it in react im keeping it as minorly convoluted as i can
//currently going to be top left, will need a radius function to call to offset the position, but thats later
function calculateCoordinates(){
    var coordinates = [];
    var xPercent = imgSequence[currImgIndex][3][0];
    var yPercent = imgSequence[currImgIndex][3][1];
    var screenshotWidth = $('.screenshot').width();
    var screenshotHeight = $('.screenshot').height();
    var xPosition = (xPercent / 100) * screenshotWidth - calculateRadius();
    var yPosition = (yPercent / 100) * screenshotHeight - calculateRadius();
    coordinates.push(xPosition, yPosition);
    return coordinates;
}

//sets the x and y coordinates for focus point, seperated out because it was being used twice, on image change and on resize
function setXY(){
    $('.focus-point').animate({
        "left": calculateCoordinates()[0] + 'px',
        "top": calculateCoordinates()[1] + 'px'
    });
}

//resize
function updatePositionOnResize(){
    var resizeTimer;

    function resizeActions(){
        setXY();
    };

    //update position when image changes
    $(window).resize(function(){
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeActions, 250);
    });
};

//all actual circle positioning (+label by association, updates all focus point)
function positionCircle(){
    
    updatePositionOnResize();

    $('.focus-point').click(function() {
    
        //incriment index on click unless last image, then reset index to 0
        if ( currImgIndex + 1 < imgSequence.length) { currImgIndex++; } 
        else { currImgIndex = 0 }
        
        calculateCoordinates();
    
        //update circle location
        setXY();
    
        //update image to image at new index
        var currImage = imgSequence[currImgIndex][0];
        document.getElementById("screenshot-id").src = currImage;
        
        //update label
        label = imgSequence[currImgIndex][2];
        document.getElementById('circle-label-text-id').textContent = label;
        
    });
}

positionCircle();
