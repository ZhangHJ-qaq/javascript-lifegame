//是游戏的数据层

class LifeGameDataLayer {
    constructor(rowCount, columnCount) {
        this.gameBorad = [];
        for (let i = 0; i <= rowCount - 1; i++) {
            this.gameBorad[i] = [];
            for (let j = 0; j <= columnCount - 1; j++) {
                this.gameBorad[i][j] = getRandomTrueFalse();
            }
        }
    }

    countNumberOfLivesAround(locationX, locationY) {
        let count = 0;
        for (let i = locationX - 1; i <= locationX + 1; i++) {
            for (let j = locationY - 1; j <= locationY + 1; j++) {
                if ((i !== locationX) || j !== locationY) {
                    if (i >= 0 && i <= this.gameBorad.length - 1 && j >= 0 && j <= this.gameBorad[0].length - 1) {
                        if (this.gameBorad[i][j] === true) {
                            count++;
                        }
                    }
                }
            }
        }
        return count;
    }

}