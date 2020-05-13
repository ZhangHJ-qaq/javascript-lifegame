//业务层

class LifeGameBusiness {
    constructor(rowCount, columnCount) {
        this.lifeGameDataLayer = new LifeGameDataLayer(rowCount, columnCount)
    }

    updateBoard() {
        let newGameBord = [];
        let rowCount = this.lifeGameDataLayer.gameBorad.length;
        let columnCount = this.lifeGameDataLayer.gameBorad[0].length;
        for (let i = 0; i <= rowCount - 1; i++) {
            newGameBord[i] = [];
            for (let j = 0; j <= columnCount - 1; j++) {
                let lifeAround = this.lifeGameDataLayer.countNumberOfLivesAround(i, j);
                if (lifeAround === 3) {
                    newGameBord[i][j] = true;
                } else if (lifeAround === 2) {
                    newGameBord[i][j] = this.lifeGameDataLayer.gameBorad[i][j];
                } else {
                    newGameBord[i][j] = false;
                }
            }
        }
        this.lifeGameDataLayer.gameBorad = newGameBord;
    }


}