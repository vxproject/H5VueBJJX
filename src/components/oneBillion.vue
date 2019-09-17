<template>
  <div class="relative" v-if="hiddenFlag">
    <img src="../assets/oneBillion_img/topimg.png" class="topImg" alt />
    <div class="middle center topImg fs-22 fc-fb" @click="lookDetail">战绩</div>
    <img class="ls_billion" src="../assets/oneBillion_img/bg_ls.png" />
    <div class="jiangChi">
      <img src="../assets/oneBillion_img/jiangchi_ls.png" class="jiangchi_ls" alt />
    </div>
    <div class="absolute w-all middle z-500 t-279 fs-30 fc-white" v-if="cj_status != 5">当前奖池红包券</div>
    <div class="absolute w-all middle z-500 t-279 fs-30 fc-white" v-if="cj_status == 5">预计可获得红包券</div>
    <div
      class="absolute middle w-all z-500 t-365 fs-80 fc-fc"
      v-if="cj_status != 5"
    >{{getData.dk_all_coupon}}</div>
    <div
      class="absolute middle w-all z-500 t-365 fs-80 fc-fc"
      v-if="cj_status == 5"
    >{{getData.udk_money}}</div>
    <div
      class="absolute middle w-all z-500 t-530 fs-28 fc-white"
      v-if="cj_status == 1"
    >已经有{{getData.dk_person_num}}人参与</div>
    <div
      class="absolute middle w-all z-500 t-530 fs-28 fc-white"
      v-if="cj_status >1 && cj_status < 5"
    >已经有{{getData.rank.success_clock}}人打卡</div>
    <div
      class="absolute middle w-all z-500 t-530 fs-28 fc-white"
      v-if="cj_status == 5"
    >已经有{{getData.rank.success_clock}}人瓜分</div>
    <div v-if="!flag">
      <div class="absolute row around w-all z-1000 t-630">
        <!-- <img
          :src="item"
          v-for="(item,index) in imgList"
          :key="index"
          class="img_item"
        />-->
        <img src="../assets/oneBillion_img/zhuQian.png" class="img_item" alt />
        <img src="../assets/oneBillion_img/zhuBiao.png" class="img_item" alt />
        <img src="../assets/oneBillion_img/zhuXiang.png" class="img_item" alt />
      </div>
      <div class="absolute row around w-all fc-white t-760 z-1000">
        <div class="daKa fs-22 row">支付宝红包券</div>
        <div class>
          <div class="middle fs-22 daKa">规定时间内</div>
          <div class="middle fs-22 daKa">打卡</div>
        </div>
        <div class>
          <div class="middle fs-22 daKa">打卡成功</div>
          <div class="middle fs-22 daKa">瓜分红包券</div>
        </div>
      </div>
      <div class="absolute w-all z-500 t-870 middle" @click="baoMing">
        <img src="../assets/oneBillion_img/oneHund.png" class="oneHund" alt />
      </div>
      <div class="absolute w-all z-500 t-1010 middle">
        <img src="../assets/oneBillion_img/benZhouCaiFu.png" class="benZhouCaiFu" alt />
      </div>
      <div class="absolute w-all z-500 fs-22 fc-white t-1055 middle">财富的捷径是坚持不懈的努力</div>

      <div class="row middle baseline z-500 w-all bottom absolute">
        <div class="taiFen">
          <div
            class="absolute column center bottom w-all z-500 h-172 middle"
            v-if="getData.week.length > 1"
          >
            <div class="fs-26 fc-33">{{getData.week[1].nickname}}</div>
            <div class="fs-22 fc-66">打卡{{getData.week[1].days}}天</div>
            <div class="fs-22 fc-fd mt-10">+{{getData.week[1].money}}红包券</div>
          </div>
          <img src="../assets/oneBillion_img/taiLan.png" class="taiFen" alt />
          <div class="absolute t-110 w-all middle">
            <div class="wh-110 border-lan">
              <img
                :src="getData.week[1].head_pic"
                class="wh-110"
                alt
                v-if="getData.week.length > 1"
              />
            </div>
          </div>
          <div class="absolute w-all middle t-145">
            <img src="../assets/oneBillion_img/guLan.png" class="guItem" alt />
          </div>
        </div>
        <div class="taiHuang">
          <div
            class="absolute column center bottom w-all z-500 h-202 middle"
            v-if="getData.week.length > 0"
          >
            <div class="fs-26 fc-33">{{getData.week[0].nickname}}</div>
            <div class="fs-22 fc-66">打卡{{getData.week[0].days}}天</div>
            <div class="fs-22 fc-fd mt-10">+{{getData.week[0].money}}红包券</div>
          </div>
          <img src="../assets/oneBillion_img/taiHuang.png" class="taiHuang" alt />
          <div class="absolute t-110 w-all middle">
            <div class="wh-110 border-ye">
              <img
                :src="getData.week[0].head_pic"
                class="wh-110"
                alt
                v-if="getData.week.length > 0"
              />
            </div>
          </div>
          <div class="absolute w-all middle t-145">
            <img src="../assets/oneBillion_img/guHuang.png" class="guItem" alt />
          </div>
        </div>
        <div class="taiFen">
          <div
            class="absolute column center bottom w-all z-500 h-172 middle"
            v-if="getData.week.length > 2"
          >
            <div class="fs-26 fc-33">{{getData.week[2].nickname}}</div>
            <div class="fs-22 fc-66">打卡{{getData.week[2].days}}天</div>
            <div class="fs-22 fc-fd mt-10">+{{getData.week[2].money}}红包券</div>
          </div>
          <img src="../assets/oneBillion_img/taiFen.png" class="taiFen" alt />
          <div class="absolute t-110 w-all middle">
            <div class="wh-110 border-fen">
              <img
                :src="getData.week[2].head_pic"
                class="wh-110"
                alt
                v-if="getData.week.length > 2"
              />
            </div>
          </div>
          <div class="absolute w-all middle t-145">
            <img src="../assets/oneBillion_img/guFen.png" class="guItem" alt />
          </div>
        </div>
      </div>
    </div>
    <div v-if="flag">
      <div class="absolute w-all z-500 t-630 middle">
        <div
          class="oneHu_mode middle center fs-34 fc-white"
          v-if="cj_status == 2"
        >打卡倒计时：{{obj.hou}}:{{obj.min}}:{{obj.sec}}</div>
        <div
          class="oneHu_mode bc-f9 middle center fs-34 fc-d5"
          v-if="cj_status == 3"
          @click="startDaKa"
        >打卡</div>
        <div
          class="oneHu_mode middle center fs-34 fc-white"
          v-if="cj_status == 5"
        >瓜分倒计时：{{obj.hou}}:{{obj.min}}:{{obj.sec}}</div>
      </div>
      <div class="row middle absolute w-all z-500 t-760">
        <div class="center-mode mr-30 column around fc-d5 center" @click="lookDetail">
          <div class="fs-34">我的战绩</div>
          <div class="fs-26">查看我的打卡记录</div>
        </div>
        <div class="center-mode column around fc-d5 center" @click="recordShare">
          <div class="fs-34">邀请好友</div>
          <div>
            <div class="fs-26 middle">参与人数越多</div>
            <div class="fs-26">瓜分的红包券越多</div>
          </div>
        </div>
      </div>
      <div class="absolute t-1030 w-all middle">
        <img src="../assets/oneBillion_img/zhangkuang_ls.png" class="zhAnKua" alt />
      </div>
      <div class="absolute t-1070 w-all middle fs-22 fc-ff">
        <span class="mr-30 fc-59">昨日成功打卡{{getData.rank.success_clock}}人</span>
        昨日失败打卡{{getData.rank.fail_clock}}人
      </div>
      <div class="absolute bottom row w-all middle">
        <div
          class="btm-mode bc-white column center"
          v-for="(item,index) in arrList"
          :key="index"
          :class="index==0 ? 'mr-84' : ''"
        >
          <div class="fs-26 mt-21" :class="index == 0 ?'fc-f9':'fc-fe'">{{item}}</div>
          <div class="wh-110 mt-15" :class="index==0 ? 'border-ye':'border-fe'">
            <!-- index == 0 ? getData.rank.week_stars[0].head_pic :getData.rank.yesterday_stars[0].head_pic  -->
            <img
              :src="getData.rank.week_stars[0].head_pic "
              class="wh-110"
              alt
              v-if="index == 0 && getData.rank.week_stars.length > 0"
            />
            <img
              :src="getData.rank.yesterday_stars[0].head_pic "
              class="wh-110"
              alt
              v-if="index == 1 && getData.rank.yesterday_stars.length > 0"
            />
          </div>
          <div
            class="fs-24 fc-33 mt-10"
            v-if="index == 0 && getData.rank.week_stars.length > 0"
          >{{getData.rank.week_stars[0].nickname}}</div>
          <div
            class="fs-24 fc-33 mt-10"
            v-if="index == 1 && getData.rank.yesterday_stars.length > 0"
          >{{getData.rank.yesterday_stars[0].nickname }}</div>
          <div class="fs-20 fc-fd" v-if="index == 0 && getData.rank.week_stars.length > 0">
            <span class="fc-66">打卡{{getData.rank.week_stars[0].days}}天</span>
            +{{getData.rank.week_stars[0].money}}红包券
          </div>
          <div class="fs-20 fc-fd" v-if="index == 1 && getData.rank.yesterday_stars.length > 0">
            <span class="fc-66">打卡{{getData.rank.yesterday_stars[0].days}}天</span>
            +{{getData.rank.yesterday_stars[0].money}}红包券
          </div>
        </div>
      </div>
    </div>
    <!-- 报名成功弹窗 -->
    <div class="wind_bao_ls" v-if="canFlag" @touchmove.prevent>
      <div class="bao_model">
        <div class="absolute bc_chaMode middle center" @click="hidden_bao">
          <img src="../assets/oneBillion_img/bc_cha.png" class="bc_cha" alt />
        </div>
        <div class="middle">
          <img src="../assets/oneBillion_img/duiHao.png" class="duiHao" alt />
        </div>
        <div class="middle fs-34 fc-1a fw-500">参与成功</div>
        <div class="fc-66 fs-22 middle mt-50">记得明天08:00-16:00来打卡哦</div>
      </div>
    </div>
    <!-- 打卡成功弹窗 -->
    <div class="wind_bao_ls" v-if="dakaFlag" @touchmove.prevent>
      <div class="bao_model">
        <div class="absolute bc_chaMode middle center" @click="hidden_daKa">
          <img src="../assets/oneBillion_img/bc_cha.png" class="bc_cha" alt />
        </div>
        <div class="fc-1a fs-40 middle fw-500 daKaWind w-all">打卡成功</div>
        <div class="fw-bolder fs-80 fc-33 middle w-all">
          {{obj.hou}}
          <span class="mx-20">:</span>
          {{obj.min}}
          <span class="mx-20">:</span>
          {{obj.sec}}
        </div>
        <div class="middle w-all fs-34 fc-33 mt-21">倒计时结束后奖励自动瓜分到账</div>
      </div>
    </div>
    <!-- 瓜分红包券弹窗 -->
    <div class="wind_bao_ls" v-if="guaFenFalg" @touchmove.prevent>
      <div class="relative">
        <img src="../assets/oneBillion_img/guaFen_ls.png" class="bao_modelImg" alt />
        <div class="absolute guaFen_mode w-all">
          <div class="middle fs-36 fc-ed fw-500">恭喜您获得</div>
          <div class="fs-60 fc-ed middle">+169</div>
        </div>
        <div class="btn_guaFen middle">
          <div class="btn_gua_mode fs-30 middle center" @click="nextDaKa">继续打卡</div>
        </div>
        <div class="cancle_mode middle" @click="nextDaKa">
          <img src="../assets/oneBillion_img/cancel_ls.png" class="cancel_ls" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "oneBillion",
  data() {
    return {
      hiddenFlag: false, //数据加载状态
      flag: false,
      canFlag: false, //参加成功 弹窗状态
      dakaFlag: false, //打卡成功 弹窗状态
      guaFenFalg: false, //瓜分成功  弹窗状态
      arrList: ["本周财富之星", "昨日勤劳之星"],
      imgList: [
        "../assets/oneBillion_img/zhuQian.png",
        "../assets/oneBillion_img/zhuBiao.png",
        "../assets/oneBillion_img/zhuXiang.png"
      ],
      // getData: { week: [{ nickname: "", days: "", money: "" }] },
      getData: [],
      obj: { hou: "00", min: "00", sec: "00" }
    };
  },
  created() {
    this.getAllData();
  },
  methods: {
    /**
     * 请求页面数据
     */
    getAllData() {
      this.$axios
        .get(this.Http + "daka", {
          params: {
            token: jsonData.token
          }
        })
        .then(res => {
          console.info(res);
          if (res.data.status == 200) {
            this.getData = res.data.data;
            this.cj_status = res.data.data.cj_status; //1 参加活动 ，2 等待打卡 ，3 可以打卡，4 显示瓜分结果 ，5 打卡待瓜分
            // this.cj_status =1; //测试
            if (
              this.cj_status == 1 ||
              this.cj_status == 3 ||
              this.cj_status == 4
            ) {
              this.hiddenFlag = true;
            }
            if (this.cj_status == 4) {
              this.guaFenFalg = true;
            }
            if (
              this.cj_status == 2 ||
              this.cj_status == 3 ||
              this.cj_status == 5
            ) {
              this.flag = true;
            }
            var timestamp3 = Date.parse(new Date());
            if (this.cj_status == 2) {
              //如果是  等待打卡
              var unixTimestamp =
                (res.data.data.dk_stime * 1000 - timestamp3) / 1000;
              // var unixTimestamp = 5; //测试
              this.setTime(unixTimestamp);
            }
            if (this.cj_status == 5) {
              //如果是瓜分倒计时
              var unixTimestamp =
                (res.data.data.dk_etime * 1000 - timestamp3) / 1000;
              // var unixTimestamp = 5; //测试
              this.setTime(unixTimestamp);
            }
          } else {
            this.waitIng(res.data.message);
          }
        });
    },
    /**
     * 倒计时
     */
    setTime(unixTimestamp) {
      let that = this;
      var timeStamp = "";
      if (unixTimestamp > 0) {
        this.hiddenFlag = true;
        timeStamp = setInterval(res => {
          if (unixTimestamp > -1) {
            let hou = parseInt((unixTimestamp % (60 * 60 * 24)) / 3600);
            let min = parseInt(((unixTimestamp % (60 * 60 * 24)) % 3600) / 60);
            let sec = parseInt(((unixTimestamp % (60 * 60 * 24)) % 3600) % 60);
            let obj = {
              hou: this.timeFormat(hou),
              min: this.timeFormat(min),
              sec: this.timeFormat(sec)
            };
            unixTimestamp -= 1;
            that.obj = obj;
          } else {
            this.getAllData(); //打卡倒计时到了就再调用一下首页数据接口，此时状态变；
            clearInterval(timeStamp);
          }
        }, 1000);
      } else {
        this.hiddenFlag = true;
      }
    },

    timeFormat(param) {
      //小于10的格式化函数
      return param < 10 ? "0" + param : param;
    },
    /**
     * 查看我的战绩
     */
    lookDetail() {
      this.$router.push({
        name: "ownSuccess"
      });
    },
    /**
     * 参加报名
     */
    baoMing() {
      // this.flag = true; //测试
      // this.canFlag = true; //测试
      let postData = new URLSearchParams();
      postData.append("token", jsonData.token);
      this.$axios.post(this.Http + "party_coupon", postData).then(res => {
        if (res.data.status == 200) {
          //参加成功
          this.canFlag = true;
          this.getAllData();
        } else {
          this.waitIng(res.data.message);
        }
      });
    },
    /**
     * 隐藏  报名弹窗
     */
    hidden_bao() {
      this.canFlag = false;
    },
    /**
     * 隐藏  打卡弹窗
     */
    hidden_daKa() {
      this.dakaFlag = false;
    },
    /**
     * 隐藏 瓜分弹窗
     */
    nextDaKa() {
      this.guaFenFalg = false;
      this.getAllData(); //关闭瓜分弹窗后请求首页数据
    },
    /**
     * 开始打卡
     */
    startDaKa() {
      // this.dakaFlag = true; //测试
      let postData = new URLSearchParams();
      postData.append("token", jsonData.token);
      this.$axios.post(this.Http + "daka", postData).then(res => {
        if (res.data.status == 200) {
          //打卡成功
          this.dakaFlag = true;
          this.getAllData();
        } else {
          this.waitIng(res.data.message);
        }
      });
    },
    /**
     邀请好友
     */
    async recordShare() {
      const { data: res } = await this.$axios.get(this.Http + "share_info", {
        params: {
          token: jsonData.token,
          type: 1
        }
      });

      // 下面是调用安卓和ios微信分享接口 带连接的分享
      var ua = window.navigator.userAgent;
      if (ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1) {
        window.android.shareLink4WeChat(
          res.data.title,
          "http://ddz.hxtapp.com" + res.data.url + res.data.param,
          res.data.content,
          false
        );
      }
      if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        let obj = {
          type: 2,
          url: "http://ddz.hxtapp.com" + res.data.url + res.data.param,
          title: res.data.title,
          content: res.data.content,
          isTimeline: false
        };
        let newData = JSON.stringify(obj);
        window.webkit.messageHandlers.shareLink4WeChat.postMessage(newData);
      }
    },
    /**
     * 异常处理
     */
    waitIng(text) {
      text = text || "敬请期待，功能正在完善~";
      var ua = window.navigator.userAgent;
      if (ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1) {
        window.android.defHint4Toast(text);
      }
      if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        let obj = {
          type: 5,
          title: text,
          isTimeline: false
        };
        let newData = JSON.stringify(obj);
        window.webkit.messageHandlers.shareLink4WeChat.postMessage(newData);
      }
    }
  }
};
</script>
<style  scoped>
@import "../assets/oneBillion/oneBillion.css";
</style>