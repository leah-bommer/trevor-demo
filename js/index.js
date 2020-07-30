// TODO next: move circle positioning relative to input components adjusted to size of the screenshot 

var imgSequence = [
    ['/img/flow/1-homeScreen.png', [0, 0], 'This is the first label and I need length to test.', [1, 5]],
    ['/img/flow/2-editBills.png', [0, 0], 'This is the second label and I need length to test.', [2, 5]],
    ['/img/flow/3-editBillsExpandedSettings.png', [0, 0], 'This is the third label and I need length to test.', [3, 5]],
    ['/img/flow/4-editBills.png', [0, 0], 'This is the fourth label and I need length to test.', [4, 5]],
    ['/img/flow/5-editBillsExpandedLevels.png', [0, 0], 'This is the fifth label and I need length to test.', [5, 5]],
    ['/img/flow/6-homeScreen.png', [0, 0], 'This is the sixth label and I need length to test.', [6, 5]],
    ['/img/flow/7-editParts.png', [0, 0], 'This is the seventh label and I need length to test.', [7, 5]],
    ['/img/flow/8-homeScreen.png', [0, 0], 'This is the eighth label and I need length to test.', [8, 5]],
    ['/img/flow/9-bommerTree.png', [0, 0], 'This is the ninth label and I need length to test.', [9, 5]],
    ['/img/flow/10-settingsScreen.png', [0, 0], 'This is the tenth label and I need length to test.', [10, 5]],
    ['/img/flow/11-bommerTree.png', [0, 0], 'This is the eleventh label and I need length to test.', [11, 5]],
    ['/img/flow/12-exportScreen.png', [0, 0], 'This is the twelf. twelveth. twweeeeeelffffft label and I need length to test.', [12, 5]],
    ['/img/flow/13-bommerTree.png', [0, 0], 'This is the thirteenth label and I need length to test.', [13 , 5]]
];

var currImgIndex = 0;
var label = imgSequence[currImgIndex][2];
var position = imgSequence[currImgIndex][3];
document.getElementById('circle-label-id').textContent = label;

$('.circle').click(function() {
    
    //test
    // console.log('BEFORE CLICK: ' 
    //     + '\n' + 'Curent Image Index: ' + currImgIndex + '\n' 
    //     + 'Number of Total Images: ' + imgSequence.length
    // );

    //incriment index on click unless last image, then reset index to 0
    if ( currImgIndex + 1 < imgSequence.length) { currImgIndex++; } 
    else { currImgIndex = 0 }
    
    //update image to image at new index
    var currImage = imgSequence[currImgIndex][0];
    document.getElementById("screenshot-id").src = currImage;
    
    //update label
    label = imgSequence[currImgIndex][2];
    document.getElementById('circle-label-id').textContent = label;
    
    //update position to circle position at new index
    position = imgSequence[currImgIndex][3];
    updateCirclePosition(position);
    

    
    //test
    console.log('AFTER CLICK: ' 
        + '\n' + 'Curent Image Index: ' + currImgIndex 
        + '\n' + 'Number of Total Images: ' + imgSequence.length
        + '\n' + 'Current Image: ' + currImage
        + '\n' + 'Current Label: ' + label
        + '\n' + 'Current Position: ' + position
    );
    
})

function updateCirclePosition(position) {
    console.log('actually calling update position: ' + position);
}