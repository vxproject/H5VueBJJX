<template>
  <div class="relative">
    <div class="absolute guangMode row center middle">
      <img src="../assets/inviteFriend_img/lingDang.png" class="lingDang mx-10" alt />
      <div class="guaG">
        <ul>
          <li
            class="for_model fs-26 fc-white pb-10"
            v-for="(item,index) in swiperList"
            :key="index"
          >
            {{item.title}}
            <span class="mx-10">成功邀请亲友</span>
            {{item.txt}}
          </li>
        </ul>
      </div>
    </div>

    <img src="../assets/inviteFriend_img/bg_img.png" class="bg_img" alt />
    <img src="../assets/inviteFriend_img/guiZe.png" class="guiZe absolute" alt @click="lookGuiZe" />
    <div class="absolute fs-22 biaoTi middle center w-all fc-af">邀请1位徒弟您赚了5元现金徒弟可赚1.5元</div>

    <div class="btm-mode-qin center column">
      <div class="row between w-686">
        <div
          @click="chooseOne(index)"
          :class="indChoose==index ? 'chooseItem bc-white  fs-36 fc-af middle center' :'chooseItem2 bc-ff fs-36 fc-33 middle center'"
          v-for="(item,index) in chooseList"
          :key="index"
        >{{item}}</div>
      </div>

      <div class="bc-white middle w-686 pt-54">
        <img src="../assets/inviteFriend_img/leftImg.png" class="bothImg mb-10 pr-30" alt />
        <div class="fs-32 fc-fd" v-if="indChoose == 0">请输入对方手机号码</div>
        <div class="fs-32 fc-33" v-if="indChoose == 1">
          全部邀请成功预计可得
          <span class="fc-d5">115元</span>
        </div>
        <img src="../assets/inviteFriend_img/rightImg.png" class="bothImg mt-10 pl-20" alt />
      </div>

      <div class="middle bc-white w-686 relative" v-if="indChoose == 1">
        <img src="../assets/inviteFriend_img/btn_img.png" class="btn_img" alt />
        <div class="fc-white fs-30 absolute middle center w-all h-70" style="bottom:0;left:0">一键全部邀请</div>
      </div>

      <div class="w-686 bc-white row center middle pt-40 pb-36 relative" v-if="indChoose == 0">
        <input
          type="number"
          placeholder="请输入11位电话号码"
          maxlength="11"
          class="fs-32 fc-d6 inputB middle center"
        />
        <img src="../assets/inviteFriend_img/tel.png" class="tel" alt />
        <img src="../assets/inviteFriend_img/buZhou.png" class="buZhou absolute" alt />
        <div class="fs-26 fc-white middle center absolute buZhou">第一步</div>
      </div>

      <span v-if="indChoose == 1">
        <div class="row around w-686 bc-white pt-30">
          <div
            class="fs-26 fc-66 wp-20 middle"
            v-for="(item,index) in titleList"
            :key="index"
          >{{item}}</div>
        </div>
        <div class="w-686 bc-white h-420 autoY">
          <div class="row around h-70 center" v-for="(item,index) in phoneList" :key="index">
            <div class="fs-26 fc-66 wp-20 textCenter line-1">{{item.title}}</div>
            <div class="fs-26 fc-66 wp-20 middle">{{item.tel}}</div>
            <div class="fs-26 fc-d5 wp-20 middle">{{item.money}}元</div>
            <div class="fs-26 fc-fd wp-20 middle yaoQinAnNiu">邀请加入</div>
          </div>
        </div>
        <p class="fs-22 fc-99 middle pt-30 bc-white w-686">已没有更多数据</p>
        <p class="fs-28 fc-66 middle pt-40 bc-white w-686">最终邀请亲友收入，以实际到账金额为准</p>
      </span>

      <div class="bc-white w-686 row-wrap middle relative" v-if="indChoose == 0">
        <div
          v-for="(item,index) in qinYouTuan"
          :key="index"
          class="row middle center itemGua"
          @click="chooseQinRen(index)"
        >
          <div class="quAn" v-if="!item.flag"></div>
          <img src="../assets/inviteFriend_img/xuAn.png" class="xuAn" v-if="item.flag" alt />
          <div class="fs-30 fc-33">{{item.txt}}</div>
        </div>
        <img src="../assets/inviteFriend_img/buZhou.png" class="buZhou2 absolute" alt />
        <div class="fs-26 fc-white middle center absolute buZhou2">第二步</div>
      </div>

      <div class="bc-white w-686 middle relative" v-if="indChoose == 0" @click="showInviteBomd">
        <img src="../assets/inviteFriend_img/hongAnNiu.png" class="hongAnNiu" alt />
        <div class="absolute center middle fs-32 fc-white w-all xiAnHin">邀请亲友加入赚现金</div>
        <img src="../assets/inviteFriend_img/buZhou.png" class="buZhou absolute" alt />
        <div class="fs-26 fc-white middle center absolute buZhou">第三步</div>
      </div>

      <div class="bc-white w-686 middle relative" v-if="indChoose == 1">
        <div class="absolute center middle fs-32 fc-white w-all xiAnHin2">识别更多亲友</div>
        <img src="../assets/inviteFriend_img/anNiu_ls.png" class="hongAnNiu" alt />
      </div>

      <div class="bc-white w-686 middle relative" @click="showCodeBomd">
        <img src="../assets/inviteFriend_img/huangAnNiu.png" class="hongAnNiu" alt />
        <div class="absolute center middle fs-32 fc-white w-all xiAnHin2">亲友在身边直接扫码</div>
      </div>
      <div
        class="bc-white w-686 middle pt-20 fs-24 fc-66 pb-37 radius-bot-15"
        @click="goLook"
      >手把手教亲友加入斗地主赚钱></div>

      <div class="bc-white w-686 mt-30 pt-40 pb-64 radius-15">
        <div class="middle row center pb-30">
          <img src="../assets/inviteFriend_img/leftImg.png" class="bothImg mb-10 pr-30" alt />
          <div class="fs-32 fc-fd">赚钱攻略</div>
          <img src="../assets/inviteFriend_img/rightImg.png" class="bothImg mt-10 pl-20" alt />
        </div>
        <div class="fs-26 fc-66 middle pb-54">轻松三步，您与亲友一起赚！</div>
        <div class="around row">
          <div class="column center" v-for="(item,index) in gongLueList" :key="index">
            <img :src="item.src" class="wh-80" alt />
            <div class="fs-26 fc-f4 mt-20">{{item.txt}}</div>
            <div class="fs-22 fc-66 w-140 textCenter mt-20">{{item.text}}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 活动规则弹窗 -->
    <div class="share" v-if="ruleBomd" @touchmove.prevent>
      <div class="rule-y">
        <img src="../assets/img/activity_rule.png" alt />
        <p>活动规则</p>
        <div>
          <p>邀请亲友长辈加入多狐斗地主赚金版，发出邀请后，通过短信形式发送给亲友长辈，亲友长辈可通过短信下载登录APP。</p>
          <p>
            亲友长辈成功登录APP完成3局有效斗地主后，您可获得
            <i>现金红包奖励</i>。
          </p>
          <p>
            亲友长辈成功登录APP，通过打斗地主可
            <i>赚红包劵</i>。
          </p>
        </div>
        <i @click="hideBomd">×</i>
      </div>
    </div>

    <!-- 亲友扫码的二维码弹窗 -->
    <div class="share" v-if="erWeiCodeBomd" @touchmove.prevent>
      <div class="er-code-y">
        <img src="../assets/img/er_wei_code.png" alt />
        <p>亲友在身边？让亲友通过微信/QQ扫一扫，扫描二维码，加入多狐斗地主赚金版拿红包。</p>
        <div>
          <div id="qrcode" ref="qrcode"></div>
        </div>
        <i @click="hideBomd">×</i>
      </div>
    </div>

    <!-- 邀请成功弹窗 -->
    <div class="share" v-if="inviteSuccessBomd" @touchmove.prevent>
      <div class="invite-success-y">
        <img src="../assets/img/invite_success.png" alt />
        <div>
          <p>
            请通知您的亲友短信，登录多狐斗地主赚金版APP，亲友登录成功，您可赚
            <i>现金红包</i>亲友连续打斗地主7天，您可赚
            <i>70红包卷</i>。
          </p>
          <p>
            赶紧通知亲友
            <i>赚红包</i>
          </p>
          <img @click="wxInvite()" src="../assets/img/weixin.png" alt />
          <span @click="wxInvite()">微信邀请</span>
        </div>
        <i @click="hideBomd">×</i>
      </div>
    </div>

    <!-- 返回，放弃弹窗 -->
    <div class="share" v-if="quitBomd" @touchmove.prevent>
      <div class="quit-y">
        <p>
          成功邀请全部亲友即可至少获得
          <i>115元</i>现金，现在放弃么？
        </p>
        <div>
          <a href="javascript:;" @click="upperLevel()">稍后再赚</a>
          <a href="javascript:;" @click="hideBomd">继续赚钱</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import QRCode from "qrcodejs2";
function AutoScroll(obj) {
  $(obj)
    .find("ul:first")
    .animate(
      {
        marginTop: "-15px"
      },
      1000,
      function() {
        $(this)
          .css({
            marginTop: "0px"
          })
          .find("li:first")
          .appendTo(this);
      }
    );
}
$(document).ready(function() {
  setInterval(res => {
    AutoScroll(".guaG");
  }, 1500);
});

export default {
  name: "inviteFriend",
  data() {
    return {
      ruleBomd: false, // 活动规则弹窗
      erWeiCodeBomd: false, // 亲友扫码的二维码弹窗
      inviteSuccessBomd: false, // 邀请成功弹窗
      quitBomd: false,

      swiperList: [
        { title: "王~", txt: "叶" },
        { title: "紫峰", txt: "小牧" },
        { title: "心欢喜", txt: "点点点" },
        { title: "茉莉", txt: "恒币~优" }
      ],
      indChoose: 0, //导航下标
      chooseList: ["手机号邀请", "通讯录邀请"],
      qinYouTuan: [
        { txt: "父母", flag: false },
        { txt: "兄弟", flag: false },
        { txt: "儿女", flag: false },
        { txt: "同学", flag: false },
        { txt: "同事", flag: false },
        { txt: "朋友", flag: false }
      ],
      gongLueList: [
        {
          src: "../assets/inviteFriend_img/bt_phone.png",
          txt: "第一步",
          text: "输入亲友手机号一键邀请"
        },
        {
          src: "../assets/inviteFriend_img/bt_people.png",
          txt: "第二步",
          text: "亲友登录APP赚现金红包"
        },
        {
          src: "../assets/inviteFriend_img/bt_youxi.png",
          txt: "第三步",
          text: "亲友玩斗地主我与亲友一起赚红包券"
        }
      ],
      titleList: ["昵称", "手机号码", "预计收入", "操作"],
      phoneList: [
        { title: "昵称", tel: "18088886565", money: 8 },
        { title: "昵称", tel: "18088886565", money: 8 },
        { title: "昵称昵称昵称昵称", tel: "18088886565", money: 8 },
        { title: "昵称", tel: "18088886565", money: 8 },
        { title: "昵称", tel: "18088886565", money: 8 },
        { title: "昵称昵称昵称昵称", tel: "18088886565", money: 8 },
        { title: "昵称", tel: "18088886565", money: 8 },
        { title: "昵称", tel: "18088886565", money: 8 },
        { title: "昵称昵称昵称昵称", tel: "18088886565", money: 8 },
        { title: "昵称", tel: "18088886565", money: 8 },
        { title: "昵称", tel: "18088886565", money: 8 },
        { title: "昵称", tel: "18088886565", money: 8 }
      ]
    };
  },
  methods: {
    /**
     * 选择导航
     */
    chooseOne(ind) {
      this.indChoose = ind;
    },
    /**
     * 选择亲人
     */
    chooseQinRen(ind) {
      this.qinYouTuan.forEach(item => {
        item.flag = false;
      });
      this.qinYouTuan[ind].flag = true;
    },
    /**
     * 查看规则
     */
    lookGuiZe() {
      this.ruleBomd = true;
    },
    /**
     * 手把手 跳转
     */
    goLook() {
      this.$router.push({
        name: "strategy"
      });
    },

    // 关闭弹框
    hideBomd() {
      this.ruleBomd = false;
      this.erWeiCodeBomd = false;
      this.inviteSuccessBomd = false;
      this.quitBomd = false;
    },
    // 显示邀请成功弹窗
    showInviteBomd() {
      this.inviteSuccessBomd = true;
    },
    // 显示亲友扫码的二维码弹窗
    async showCodeBomd() {
      console.info(jsonData);
      this.erWeiCodeBomd = true;
      const { data: res } = await this.$axios.get(this.Http + "face_invite", {
        params: {
          token: jsonData.token
        }
      });
      console.log(res);
      function qrcode() {
        let qrcode = new QRCode("qrcode", {
          width: 135, // 二维码宽度，单位像素
          height: 135, // 二维码高度，单位像素
          text: res.data.url // 生成二维码的链接
        });
      }
      this.$nextTick(() => {
        qrcode();
      });
    },
    // 调用安卓ios返回上一级接口
    upperLevel() {
      var ua = window.navigator.userAgent;
      if (ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1) {
        window.android.back4Native();
      }
      if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        let obj = {
          // type: 8 // 返回上一级 *ios未出
        };
        let newData = JSON.stringify(obj);
        window.webkit.messageHandlers.shareLink4WeChat.postMessage(newData);
      }
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
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../assets/inviteFriend/inviteFriend.css';
@import '../assets/styleAll/styleAll.min.css';
@import '../assets/css/tanChuang.css';

ul, li {
  margin: 0;
  padding: 0;
}
</style>