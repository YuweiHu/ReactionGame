var createdTime;
var clickedTime;
var reactTime;

function makeBox() {
    // //2000毫秒內的隨機秒數
    // var time = Math.random() * 2000;
    setTimeout(function() {
        //顯示方塊
        document.getElementById('box').style.display = 'block';
        createdTime = Date.now();
        //讓方塊出現在隨機位置
        randPositionTop = Math.floor(120 + Math.random() * (window.innerHeight - 280));
        randPositionLeft = Math.floor(Math.random() * (window.innerWidth - 140));
        document.getElementById('box').style.top = randPositionTop + 'px';
        document.getElementById('box').style.left = randPositionLeft + 'px';
    }, 100);
    //生成之圓形隨視窗大小而改變
    var dynamicBound;
    if (window.innerHeight > window.innerWidth) {
        dynamicBound = window.innerHeight / 10;
    } else {
        dynamicBound = window.innerWidth / 10;
    }
    dynamicBound = dynamicBound + 'px';
    document.documentElement.style.setProperty('--bound', dynamicBound);
}

document.getElementById('box').onclick = function() {
    this.style.display = 'none';
    clickedTime = Date.now();
    reactTime = (clickedTime - createdTime) / 1000;
    makeBox();
    document.getElementById('time').innerHTML = reactTime;
}

makeBox();