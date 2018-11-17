var todoapp = new Vue({
    el: "#todoapp",
    data() {
        return {
            todoStr: "",
            todofind: "",
            todolists: [],
            checkList: [],
            ifcheckbo: true,
            moreallIf: true
        }
    },
    computed: {
        endtodoStr: function() {
            return this.todoStr.trim()
        }
    },
    methods: {
        checksbtn(todoeventid, nulstatu, index) {
            if (nulstatu == 10) {
                this.todolists[index].todoeventstatue = 11
                this.checkList.push(todoeventid)
                $(`input[data-ifid = ${todoeventid}]`).css("background", 'url("/dagou.png") no-repeat center')
                $(`input[data-ifid = ${todoeventid}]`).css("background-size", ' 80% 80%')
                $(`p[data-showid = ${todoeventid} ]`).css("text-decoration", "line-through")
                $(`p[data-showid = ${todoeventid} ]`).css("color", "gainsboro")
                $(`p[data-showid = ${todoeventid} ]`).css("transition", "0.5s")

            } else if (nulstatu == 11) {
                this.todolists[index].todoeventstatue = 10;
                let xiabao = this.checkList.indexOf(todoeventid)
                if (xiabao > -1) {
                    this.checkList.splice(xiabao, 1)
                }
                $(`input[data-ifid = ${todoeventid}]`).css("background", 'none')
                $(`input[data-ifid = ${todoeventid}]`).css("background-size", ' 80% 80%')
                $(`p[data-showid = ${todoeventid} ]`).css("text-decoration", "")
                $(`p[data-showid = ${todoeventid} ]`).css("color", "black")
                $(`p[data-showid = ${todoeventid} ]`).css("transition", "0.5s")
            }
        },
        todobtn() {
            let sql = function() {
                let list;
                $.ajax({
                    url: '/posts/todo/gettodo',
                    type: "GET",
                    async: false,
                    success: function(mes) {
                        if (mes.code == 200) {
                            list = mes.res;
                        }
                    },
                    error: function() {
                        alert("出错")
                    }
                })
                return list;
            }


            let _vm = this;
            if ($("input[type='checkbox']").is(':checked')) {
                showAlterbox("已选中TODO事件")
            } else if (_vm.endtodoStr == '') {
                showAlterbox("请输入内容")
            } else {
                let codeif;
                $.ajax({
                    url: '/posts/todo/addtodo',
                    data: {
                        todoeventcontent: _vm.endtodoStr
                    },
                    async: false,
                    type: "POST",
                    success: function(mes) {
                        if (mes.code == 200) {
                            codeif = mes.code;
                            showAlterbox("添加成功")
                            $('#chbox1').css("background-color", "none")
                            $('#chbox2').css("background-color", "gainsboro")
                            $('#chbox3').css("background-color", "none")
                        }
                    },
                    error: function() {
                        alert("出错")
                    }
                })
                if (codeif == 200) {
                    _vm.todolists = sql();
                    _vm.todoStr = "";
                }
            }

        },
        deltodo(id) {
            let sql = function() {
                let list;
                $.ajax({
                    url: '/posts/todo/gettodo',
                    type: "GET",
                    async: false,
                    success: function(mes) {
                        if (mes.code == 200) {
                            list = mes.res;
                        }
                    },
                    error: function() {
                        alert("出错")
                    }
                })
                return list;
            }
            let _vm = this;
            let codeif;
            $.ajax({
                url: '/posts/todo/deltodo',
                data: {
                    userid: id
                },
                async: false,
                type: "POST",
                success: function(mes) {
                    if (mes.code == 200) {
                        showAlterbox("删除成功")
                        codeif = mes.code
                    }
                },
                error: function() {
                    alert("出错")
                }
            })
            if (codeif == 200) {
                _vm.todolists = sql();
            }
        },
        todofindbtn() {
            let _vm = this;
            $.ajax({
                url: '/posts/todo/findtoda',
                data: {
                    todoclickname: _vm.todofind
                },
                async: false,
                type: "POST",
                success: function(mes) {
                    if (mes.code == 200) {
                        _vm.todolists = mes.res
                        showAlterbox("搜索成功")
                        _vm.ifcheckbo = false
                        $('#chbox1').css("border", "1px solid gainsboro")
                        $('#chbox2').css("border", "none")
                        $('#chbox3').css("border", "none")
                    }
                },
                error: function() {
                    alert("出错")
                }
            })
        },
        todofindalldata() {
            window.location.href = "/posts/todo/todoother"
            localStorage.setItem('keyTodo', 'all')
        },
        todofinddeldata() {
            window.location.href = "/posts/todo/todoother"
            localStorage.setItem('keyTodo', 'del')
        },
        todofindactdata() {
            let _vm = this;
            $.ajax({
                url: '/posts/todo/gettodo',
                data: {

                },
                async: false,
                type: "GET",
                success: function(mes) {
                    if (mes.code == 200) {
                        _vm.todolists = mes.res
                        showAlterbox("返回Active的数据")
                        _vm.ifcheckbo = true
                        $('#chbox1').css("border", "none")
                        $('#chbox2').css("border", "1px solid gainsboro")
                        $('#chbox3').css("border", "none")
                    }
                },
                error: function() {
                    alert("出错")
                }
            })
        },
        todoMonth() {
            window.location.href = "/posts/todo/month"
        },
        moreAll() {

            if (this.moreallIf) {
                for (let moreval of this.todolists) {
                    if (moreval.todoeventstatue == 10) {
                        moreval.todoeventstatue = 11;
                        $(`input[data-ifid = ${moreval.todoeventid}]`).css("background", 'url("/dagou.png") no-repeat center')
                        $(`input[data-ifid = ${moreval.todoeventid}]`).css("background-size", ' 80% 80%')
                        $(`p[data-showid = ${moreval.todoeventid} ]`).css("text-decoration", "line-through")
                        $(`p[data-showid = ${moreval.todoeventid} ]`).css("color", "gainsboro")
                        $(`p[data-showid = ${moreval.todoeventid} ]`).css("transition", "0.5s")
                        this.checkList.push(moreval.todoeventid)
                    }
                }
                this.moreallIf = false;
            } else {
                for (let moreval of this.todolists) {
                    if (moreval.todoeventstatue == 11) {
                        $(`input[data-ifid = ${moreval.todoeventid}]`).css("background", 'none')
                        $(`input[data-ifid = ${moreval.todoeventid}]`).css("background-size", ' 80% 80%')
                        moreval.todoeventstatue = 10;
                        $(`p[data-showid = ${moreval.todoeventid} ]`).css("text-decoration", "")
                        $(`p[data-showid = ${moreval.todoeventid} ]`).css("color", "black")
                        $(`p[data-showid = ${moreval.todoeventid} ]`).css("transition", "0.5s")
                    }
                }
                this.moreallIf = true
                this.checkList = []
            }

        },
        todoclear() {
            let sql = function() {
                let list;
                $.ajax({
                    url: '/posts/todo/gettodo',
                    type: "GET",
                    async: false,
                    success: function(mes) {
                        if (mes.code == 200) {
                            list = mes.res;
                        }
                    },
                    error: function() {
                        alert("出错")
                    }
                })
                return list;
            }
            const _vm = this;
            $.ajax({
                url: '/posts/todo/clears',
                data: {
                    checkClearbox: _vm.checkList
                },
                async: false,
                type: "POST",
                success: function(mes) {
                    if (mes.code == 200) {
                        showAlterbox("批量删除成功")
                        codeif = mes.code
                    }
                },
                error: function() {
                    alert("出错")
                }
            })

            if (codeif == 200) {
                _vm.todolists = sql();
            }
        }


    },
    created: function() {
        let _vm = this;
        $.ajax({
            url: '/posts/todo/gettodo',
            data: {

            },
            type: "GET",
            success: function(mes) {
                if (mes.code == 200) {
                    _vm.todolists = mes.res;
                }
            },
            error: function() {
                alert("出错")
            }
        })

    }

})