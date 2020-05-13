//是游戏的实例 负责处理各种用户点击的事件

class LifeGameInstance {
    constructor() {
    }

    registerAllEvents() {
        let startButton = document.getElementById("startButton");
        let updateButton = document.getElementById("updateButton");
        let timeTag = document.getElementById("timeTag");
        let autoUpdateButton = document.getElementById("autoUpdateButton");
        let stopAutoUpdateButton = document.getElementById("stopAutoUpdateButton");

        let caller = this;

        startButton.onclick = function () {
            function f() {
                let rowCount = document.getElementById("rowCountInput").value;
                let columnCount = document.getElementById("columnCountInput").value;
                rowCount = parseInt(rowCount);
                columnCount = parseInt(columnCount);
                //检查用户的输入
                if (isNaN(rowCount) || rowCount <= 0 || rowCount >= 25) {
                    alert("输入的行数必须是1-24的整数");
                    return;
                }
                if (isNaN(columnCount) || columnCount <= 0 || columnCount >= 25) {
                    alert("输入的列数必须是1-24的整数");
                    return;
                }
                this.lifeGameView = new LifeGameView(rowCount, columnCount);
                this.lifeGameView.printBoard();
                timeTag.innerText = 0;
            }

            f.call(caller)


        }

        updateButton.onclick = function () {
            function f() {
                if (typeof this.lifeGameView !== 'undefined') {
                    this.lifeGameView.lifeGameBusiness.updateBoard();
                    this.lifeGameView.printBoard();
                } else {
                    alert("你需要先开始游戏，才能进行演化操作")
                }
                updateTimeTag(timeTag)


                function updateTimeTag(timeTag) {
                    let time = timeTag.innerText;
                    time = parseInt(time) + 1;
                    timeTag.innerText = time;

                }
            }

            f.call(caller)

        }

        autoUpdateButton.onclick = function () {
            function f() {
                if (typeof this.lifeGameView !== 'undefined') {
                    this.autoUpdateStarted = true;
                    let updateInterval = prompt("请输入演化的间隔，以毫秒计(1秒=1000毫秒)");
                    updateInterval = parseInt(updateInterval);
                    if (!isNaN(updateInterval) && updateInterval >= 10) {
                        this.autoUpdateID = setInterval(() => {
                            this.lifeGameView.lifeGameBusiness.updateBoard();
                            this.lifeGameView.printBoard();
                            updateTimeTag(timeTag)
                        }, updateInterval)
                    } else {
                        alert("你的间隔输入不正确，或间隔输入小于10毫秒")
                    }

                } else {
                    alert("你需要先开始游戏，才能进行演化操作")
                }

                function updateTimeTag(timeTag) {
                    let time = timeTag.innerText;
                    time = parseInt(time) + 1;
                    timeTag.innerText = time;

                }
            }

            f.call(caller)
        }

        stopAutoUpdateButton.onclick = function () {
            function f() {
                clearTimeout(this.autoUpdateID);
                this.autoUpdateStarted = false;
            }

            f.call(caller)

        }
    }


}