// TODO next: move circle positioning relative to input components adjusted to size of the screenshot 

var imgSequence = [
    ['/img/flow/1-homeScreen.png', [0, 0]],
    ['/img/flow/2-editBills.png', [0, 0]],
    ['/img/flow/3-editBillsExpandedSettings.png', [0, 0]],
    ['/img/flow/4-editBills.png', [0, 0]],
    ['/img/flow/5-editBillsExpandedLevels.png', [0, 0]],
    ['/img/flow/6-homeScreen.png', [0, 0]],
    ['/img/flow/7-editParts.png', [0, 0]],
    ['/img/flow/8-homeScreen.png', [0, 0]],
    ['/img/flow/9-bommerTree.png', [0, 0]],
    ['/img/flow/10-settingsScreen.png', [0, 0]],
    ['/img/flow/11-bommerTree.png', [0, 0]],
    ['/img/flow/12-exportScreen.png', [0, 0]],
    ['/img/flow/13-bommerTree.png', [0, 0]]
];

var currImgIndex = 0;

$('.circle').click(function() {
    
    //test
    console.log('BEFORE: ' + currImgIndex, imgSequence.length, currImage);
    
    
    if ( currImgIndex + 1 < imgSequence.length) { currImgIndex++; } 
    else { currImgIndex = 0 }
    
    var currImage = imgSequence[currImgIndex][0];
    document.getElementById("screenshotId").src= currImage;
    
    //test
    console.log('AFTER: ' + currImgIndex, imgSequence.length, currImage);
    
})

