 var conapp = new Vue({
     el: "#conapp",
     data() {
         return {
             moneykind: "",
             conskind: "",
             conskindlis: [],
             findStr: "",
             monthStr: "",
             moneyNub1: null,
             moneyNub2: null,
             theremonth: "本月",
             tatloMoney: "",
             spendMoney: "",
             incomeMoney: "",
             pageTotal: null,
             conslist: [],
             dialogFormVisible: false,
             formCons: {
                 coneventcontent: " ",
                 coneventmoney: null,
                 conevent: null,
                 conkind: null
             },
             ifpage: true,
             show: false
         }
     },
     computed: {

     },
     methods: {
         atchangemonth() {
             let changetime = this.monthStr;
             this.theremonth = changetime;
             localStorage.setItem("monthStr", changetime)
             if (changetime != null) {
                 this.functioncb(changetime)
             }
         },
         conschangeNub() {
             // /posts/cons/changebymoney
             const _nm = this;
             let moneylist;
             if (parseInt(this.moneyNub1) > parseInt(this.moneyNub2)) {
                 moneylist = [parseInt(this.moneyNub2), parseInt(this.moneyNub1)]
             } else {
                 moneylist = [parseInt(this.moneyNub1), parseInt(this.moneyNub2)]
             }
             $.ajax({
                 url: "/posts/cons/changebymoney",
                 data: {
                     coneventdate: _nm.monthStr,
                     moneyNub: moneylist
                 },
                 type: "POST",
                 success: function (mes) {
                     if (mes.code == 200) {
                         _nm.conslist = mes.res;
                         _nm.ifpage = false
                         showAlterbox("筛选成功");
                     }
                 }
             })
         },
         changeAll() {
             this.monthStr = new Date().getFullYear() + '-' + (new Date().getMonth() + 1);
             this.functioncb(this.monthStr)
         },
         findcons(findstr) {
             const _nm = this;
             $.ajax({
                 url: "/posts/cons/findbystr",
                 data: {
                     coneventdate: _nm.monthStr,
                     findStr: findstr
                 },
                 type: "POST",
                 success: function (mes) {
                     if (mes.code == 200) {
                         _nm.conslist = mes.res;
                         _nm.ifpage = false
                     }
                     showAlterbox("查找成功");
                 }
             })

         },
         dialogBtn() {
             const _nm = this;
             if (_nm.formCons.coneventcontent == " " && _nm.formCons.coneventcontent == null) {
                 showAlterbox("请输入消费的事件")
             } else if (_nm.formCons.coneventmoney == null) {
                 showAlterbox("价格必须是数字")
             } else if (_nm.formCons.conevent == null) {
                 showAlterbox("请输入消费类型")
             } else if (_nm.formCons.conkind == null) {
                 showAlterbox("请输入消费种类")
             } else {
                 $.ajax({
                     url: "/posts/cons/addcons",
                     data: {
                         coneventcontent: _nm.formCons.coneventcontent,
                         coneventmoney: _nm.formCons.coneventmoney,
                         conevent: _nm.formCons.conevent,
                         conkind: _nm.formCons.conkind
                     },
                     type: "POST",
                     success: function (mes) {
                         showAlterbox("添加成功");
                         _nm.dialogFormVisible = false;
                         _nm.formCons = {};
                         _nm.functioncb(_nm.monthStr)
                     }
                 })
             }

         },
         handleCurrentChange(val) {
             const _vm = this;
             $.ajax({
                 url: '/posts/cons/changemonth',
                 data: {
                     coneventdate: _vm.monthStr,
                     pageNub: val
                 },
                 async: false,
                 type: "POST",
                 success: function (mes) {
                     if (mes.code == 200) {
                         _vm.conslist = mes.res
                     }
                 },
                 error: function () {
                     alert("出错")
                 }
             })
         },
         functioncb(monthdate) {
             let _vm = this;
             _vm.ifpage = true
             //种类
             $.ajax({
                 url: "/posts/cons/conskind",
                 type: "GET",
                 success: function (mes) {
                     if (mes.code == 200) {
                         _vm.conskindlis = mes.res
                     }
                 },
                 error: function (err) {
                     alert(err)
                 }
             })

             $.ajax({
                 url: '/posts/cons/totalmoney',
                 data: {
                     coneventdate: monthdate
                 },
                 async: false,
                 type: "POST",
                 success: function (mes) {
                     if (mes.code == 200 && (mes.res).length > 0) {
                         _vm.tatloMoney = mes.res[0].datemoney;
                         _vm.spendMoney = mes.res[0].moneyspend;
                         _vm.incomeMoney = mes.res[0].moneyincome;
                         _vm.pageTotal = mes.total;
                     } else {
                         _vm.tatloMoney = "0";
                         _vm.spendMoney = 0;
                         _vm.incomeMoney = 0;
                         _vm.pageTotal = 0;
                     }
                 },
                 error: function () {
                     alert("出错")
                 }
             })
             //单月数据
             $.ajax({
                 url: '/posts/cons/changemonth',
                 data: {
                     coneventdate: monthdate,
                     pageNub: 1
                 },
                 async: false,
                 type: "POST",
                 success: function (mes) {
                     if (mes.code == 200) {
                         _vm.conslist = mes.res
                     }
                 },
                 error: function () {
                     alert("出错")
                 }
             })
         },
         changekind(kindid) {
             // /posts/cons/changebykind
             const _vm = this;
             $.ajax({
                 url: "/posts/cons/changebykind",
                 data: {
                     coneventdate: this.monthStr,
                     coneventkindid: kindid
                 },
                 type: "POST",
                 success: function (mes) {
                     if (mes.code == 200) {
                         _vm.conslist = mes.res;
                         _vm.ifpage = false
                     }
                 }
             })
         },

     },
     created: function () {
         let monthss = new Date().getFullYear() + '-' + (new Date().getMonth() + 1);
         this.monthStr = monthss;
         localStorage.setItem("monthStr", monthss)
         this.functioncb(this.monthStr)
     }

 })