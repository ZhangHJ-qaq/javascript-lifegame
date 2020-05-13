function getRandomTrueFalse() {
    let i = Math.round(Math.random());
    return i === 0;
}

function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1 + "", 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

function removeAllChild(div) {
    while (div.hasChildNodes()) //当div下还存在子节点时 循环继续
    {
        div.removeChild(div.firstChild);
    }
}

function getWH(el, name) {
    var val = name === "width" ? el.offsetWidth : el.offsetHeight,
        which = name === "width" ? ['Left', 'Right'] : ['Top', 'Bottom'];
    // display is none
    if (val === 0) {
        return 0;
    }
    var style = getStyle(el);
    // 左右或上下两边的都减去
    for (var i = 0, a; a = which[i++];) {
        val -= parseFloat(style["border" + a + "Width"]) || 0;
        val -= parseFloat(style["padding" + a]) || 0;
    }
    return val;
}
