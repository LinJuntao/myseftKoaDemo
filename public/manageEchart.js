function echartBoxs(lists){
    for(let i = 0;i<lists.length;i++ ){
        let mainbox = document.getElementById(`main${lists[i].dateId}`);
        let mainEchartBox = echarts.init(mainbox);
        //多次重复导出echarts
        mainEchartBox.setOption({
            title: {
                text: `${lists[i].datemonth}的情况`,
                x: "center"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br />{b} : ￥{c} ({d}%)"
            },
            legend: {
                orient: "vertical",
                left: "left",
                data: []
            },
            series: [{
                name: "数据来源",
                type: "pie",
                radius: "55%",
                data: [{name:"moneyspend",value:""},
                {name:"moneyincome",value:""},],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0,0,0,0.5)"
                    }
                }
            }]
        });

        mainEchartBox.showLoading();
        $.ajax({
            url: "/posts/user/oneuseechart",
            data: {
                userid: localStorage.getItem("id"),
                monthdate:lists[i].datemonth
            },
            type: "POST",
            success: function (data) {
                mainEchartBox.setOption({
                    legend: {
                        data: data.res.name
                    },
                    series: [{
                        data: data.res
                    }]
                });
                mainEchartBox.hideLoading();
            }
        });
        
    }
}