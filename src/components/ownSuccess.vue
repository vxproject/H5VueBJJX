<template>
  <div>
    <div class="bg-top">
      <div class="top-box">
        <ul>
          <li>
            <span>{{recordData.allMoney}}</span>
            <p>累计投入 (红包卷)</p>
          </li>
          <li>
            <span>{{recordData.zqMoney}}</span>
            <p>累计赚取 (红包卷)</p>
          </li>
          <li>
            <span>{{recordData.countDk}}</span>
            <p>成功打卡 (次)</p>
          </li>
        </ul>
      </div>
      <div class="bottom-box">
        <ul>
          <li v-for="(item, index) in recordData.list.data" :key="index">
            <span>{{item.periods}}期</span>
            <div>
              <div v-if="item.status === -1">待打卡</div>
              <div :class="item.status == 2 ? 'red' : 'green'" v-else>
                <span>{{item.status == 2 ? '未打卡' : '已打卡'}}</span>
                <span>{{item.status == 2 ? '-100' : '+'+item.udk_money}}红包卷</span>
              </div>
            </div>
          </li>
        </ul>
        <div>
          —
          <span>没有更多了</span> —
        </div>
      </div>
    </div>
    <div class="yellow-share" @click="recordShare()">分享</div>
  </div>
</template>
<script>
export default {
  name: "ownSuccess",
  data() {
    return {
      recordData: {}
    };
  },
  created() {
    this.getRecordData();
  },
  methods: {
    async getRecordData() {
      const { data: res } = await this.$axios.get(this.Http + "record", {
        params: {
          token: jsonData.token
        }
      });
      if (res.status !== 200) {
        return console.log(res.message);
      }
      this.recordData = res.data;
      console.log(this.recordData);
    },
    // 战绩分享
    async recordShare(){
      const {data:res} = await this.$axios.get(this.Http + "share_info",{
        params:{
          token: jsonData.token,
          type:1
        }
      })
      
      // 下面是调用安卓和ios微信分享接口 带连接的分享
      var ua = window.navigator.userAgent;
      if (ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1) {
          window.android.shareLink4WeChat(res.data.title, "http://ddz.hxtapp.com" + res.data.url + res.data.param, res.data.content, false);
      }
      if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        let obj = {
            type: 2,
            url: "http://ddz.hxtapp.com" + res.data.url + res.data.param,
            title: res.data.title,
            content: res.data.content,
            isTimeline: false
        }
        let newData = JSON.stringify(obj)
        window.webkit.messageHandlers.shareLink4WeChat.postMessage(newData)
      }
    }

  }
};
</script>
<style  scoped>
@import "../assets/css/ownSuccess.css";
</style>