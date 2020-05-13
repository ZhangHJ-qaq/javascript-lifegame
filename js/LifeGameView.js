//视图层 控制网页上的显示

class LifeGameView {
    constructor(rowCount, columnCount) {
        this.lifeGameBusiness = new LifeGameBusiness(rowCount, columnCount);
    }

    printBoard() {
        let gameBoardHTMLElement = document.getElementById("gameBoard");
        removeAllChild(gameBoardHTMLElement);

        let gameBoardData = this.lifeGameBusiness.lifeGameDataLayer.gameBorad;
        let rowCount = gameBoardData.length;
        let columnCount = gameBoardData[0].length;

        //添加dom元素

        for (let i = 0; i <= rowCount - 1; i++) {

            let rowElement = document.createElement("div");
            rowElement.classList.add("pure-g");

            for (let j = 0; j <= columnCount - 1; j++) {
                let cellElement = document.createElement("div");
                cellElement.classList.add("pure-u-1-24");
                if (gameBoardData[i][j] === true) {
                    cellElement.style.color = "black";
                    cellElement.style.backgroundColor = "black"
                } else {
                    cellElement.style.color = "white";
                    cellElement.style.backgroundColor = "white"
                }
                cellElement.classList.add("cell")
                rowElement.append(cellElement);
            }

            gameBoardHTMLElement.append(rowElement);
        }

        //调整每个cell的宽高
        let shouldBeHeight;
        for (let i = 0; i <= gameBoardHTMLElement.childNodes.length - 1; i++) {
            for (let j = 0; j <= gameBoardHTMLElement.childNodes[i].childNodes.length - 1; j++) {
                let cell = gameBoardHTMLElement.childNodes[i].childNodes[j];
                if (cell.nodeType === 1) {
                    if (typeof shouldBeHeight === 'undefined') {
                        shouldBeHeight = cell.clientWidth;
                    }
                    cell.style.height = shouldBeHeight + "px";
                }
            }
        }
    }

}