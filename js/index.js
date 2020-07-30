// TODO next: move circle positioning relative to input components adjusted to size of the screenshot 

var imgSequence = [
    ['/img/flow/1-homeScreen.png', [0, 0], 'This is the first label and I need length to test.'],
    ['/img/flow/2-editBills.png', [0, 0], 'This is the second label and I need length to test.'],
    ['/img/flow/3-editBillsExpandedSettings.png', [0, 0], 'This is the third label and I need length to test.'],
    ['/img/flow/4-editBills.png', [0, 0], 'This is the fourth label and I need length to test.'],
    ['/img/flow/5-editBillsExpandedLevels.png', [0, 0], 'This is the fifth label and I need length to test.'],
    ['/img/flow/6-homeScreen.png', [0, 0], 'This is the sixth label and I need length to test.'],
    ['/img/flow/7-editParts.png', [0, 0], 'This is the seventh label and I need length to test.'],
    ['/img/flow/8-homeScreen.png', [0, 0], 'This is the eighth label and I need length to test.'],
    ['/img/flow/9-bommerTree.png', [0, 0], 'This is the ninth label and I need length to test.'],
    ['/img/flow/10-settingsScreen.png', [0, 0], 'This is the tenth label and I need length to test.'],
    ['/img/flow/11-bommerTree.png', [0, 0], 'This is the eleventh label and I need length to test.'],
    ['/img/flow/12-exportScreen.png', [0, 0], 'This is the twelf. twelveth. twweeeeeelffffft label and I need length to test.'],
    ['/img/flow/13-bommerTree.png', [0, 0], 'This is the thirteenth label and I need length to test.']
];

var currImgIndex = 0;

$('.circle').click(function() {
    
    //test
    console.log('BEFORE: ' + currImgIndex, imgSequence.length, currImage);
    
    
    if ( currImgIndex + 1 < imgSequence.length) { currImgIndex++; } 
    else { currImgIndex = 0 }
    
    var currImage = imgSequence[currImgIndex][0];
    document.getElementById("screenshot-id").src= currImage;

    var currLabel = imgSequence[currImgIndex][2];
    document.getElementById('circle-label-id').textContent = currLabel;
    
    //test
    console.log('AFTER: ' + currImgIndex, imgSequence.length, currImage);
    
})

