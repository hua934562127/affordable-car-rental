<template>
  <div class="Banner">
<div class="swiper-container auto">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./img/banner1.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="./img/banner2.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="./img/banner1.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="./img/banner2.png" alt />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="sent">
      <span class="left">租</span>
      <span class="change" @click="cheng">{{ $store.state.option }}</span>
      <p class="area">{{ $store.state.option }}国际自助点</p>
      <div class="icon">
        <span id="door" :class="{door:flay1}" @click="flay1 = !flay1">上门</span>
        <span id="store" :class="{store:!flay1}" @click="flay1 = false">到店</span>
      </div>
    </div>
    <div class="sent">
      <span class="left">还</span>
      <span class="change" @click="chen">{{ $store.state.option2 }}</span>
      <p class="area">{{ $store.state.option2 }}国际自助点</p>
      <div class="icon">
        <span id="door" :class="{door:flay2}" @click="flay2 = !flay2">上门</span>
        <span id="store" :class="{store:!flay2}" @click="flay2 = false">到店</span>
      </div>
    </div>
    <div class="time">
        <div class="star" @click="fn" v-if='show1'>

          <p class="math">07月8日</p>
          <p class="clock">17：00</p>
        </div>
        <div class="star" @click="fn" v-else>
          <p class="math">{{ time1[1] }}月{{ time1[2] }}</p>
          <p class="clock">{{ time1[3] }}:{{ time1[4] }}</p>
        </div>
        <van-popup v-model="show">
          <van-datetime-picker v-model="currentDate" type="datetime" @confirm="confirm" @change="change" />
        </van-popup>
        <div class="day">
          <span v-if="me">2天</span>
          <span v-else>{{ reduce }}</span>
          <img src="./img/形状 4.png">
        </div>
        <div class="end" @click='fn1' v-if='show3'>
          <p class="math">07月10日</p>
          <p class="clock">17：00</p>
        </div>
        <div class="end" @click='fn1' v-else>
          <p class="math">{{ time3[1] }}月{{ time3[2] }}</p>
          <p class="clock">{{ time3[3] }}:{{ time3[4] }}</p>
        </div>
        <van-popup v-model="show2">
          <van-datetime-picker v-model="currentDate" type="datetime" @confirm="confirm1" @change="change1" />
        </van-popup>
    </div>
    <div class="choice">
      <input type="button" value="立即选车" @click="junp" />
    </div>
    <Recommend></Recommend>
  </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import Recommend from "../recommend/recommend";
export default {
  name: "carrousel",
  data() {
    return {
      value: 0,
      value1: "a",
      option: [
        { text: "郑州", value: 0 },
        { text: "北京", value: 1 },
        { text: "上海", value: 2 }
      ],
      option1: [
        { text: "郑州", value: "a" },
        { text: "北京", value: "b" },
        { text: "上海", value: "c" }
      ],
      overlay: false,

      flay1:true,
      flay2:true,
      show:false,
      show1:true,
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date(),
      time:'',
      time1:'',
      //结束时间
       show2:false,
       show3:true,
       time2:'',
       time3:'',
       reduce:'',
       ST:'',
// <<<<<<< HEAD
       ET:'',
       me:true,
// =======
       ET:'',

      flay1: true,
      flay2: true
// >>>>>>> 93d46c7750c95d385bc8b091346e98a4ba970a5d

    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    junp() {
      this.$router.push("/carDetails");
    },
    cheng() {
      this.$store.commit("chengshi", "option");
      this.$router.push("/choice");
    },

    fn(){
      this.show = !this.show;
    },
    showPopup() {
      this.show = true;
    },
    confirm(val) {
      // console.log(val.toLocaleString()) // 打印出了时间
      this.show = false;
      this.time1 = this.time;
      console.log(this.time1);
      this.show1 = false;
      this.ST = this.time1[1]+'-'+this.time1[2];
      localStorage.setItem("starTime",this.ST);
      localStorage.setItem("huan",this.time1);
      console.log(this.ST);
    },
    change(e) {
      // console.log(e.getValues());
      this.time = e.getValues(); // 打印出了选中的时间，是个数组
    },
     fn1() {
      this.show2 = !this.show2;
    },
    confirm1(val) {
      // console.log(val.toLocaleString()) // 打印出了时间
      this.show2 = false;
      this.time3 = this.time2;
      console.log(this.time3);
      this.show3 = false;
      this.reduce = parseInt(this.time3[2]) - parseInt(this.time1[2])+'天';
      this.ET = this.time3[1]+'-'+this.time3[2];
      localStorage.setItem("endTIme",this.ET);
      localStorage.setItem("qu",this.time3);
      console.log(this.ET);
      this.me = false;
    },
    change1(e) {
      // console.log(e.getValues());
      this.time2 = e.getValues(); // 打印出了选中的时间，是个数组
    },

    chen() {
      this.$store.commit("chengshi", "option2");
      this.$router.push("/choice");
    }

  },
  components: {
    Recommend
  },
  mounted() {
    var mySwiper = new Swiper(".auto", {
      loop: true,
      effect: "slide",
      direction: "horizontal", // 垂直切换选项
      loop: false, // 循环模式选项
// <<<<<<< HEAD
      autoplay:{
      delay:1000,
      disableOnInteraction : false},
// =======
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
// >>>>>>> 93d46c7750c95d385bc8b091346e98a4ba970a5d
      },
      // 如果需要分页器
      pagination: {
      el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style scoped lang='less'>
.Banner {
  width: 100%;
// <<<<<<< HEAD
  flex:1;
// =======
  flex: 1;

// >>>>>>> 93d46c7750c95d385bc8b091346e98a4ba970a5d
  overflow: auto;
  /deep/.swiper-pagination-bullet {
    background: #ffc600;
  }
}
.Banner img {
  width: 7.5rem;
}
.van-dropdown-menu {
  width: 2rem;
  background: none;
  .van-dropdown-menu__title {
    color: white;
  }
}
.van-dropdown-item--down .van-popup {
  width: 30%;
}
.van-hairline--top-bottom::after {
  border: none;
}
.change {
  color: white;
  width: 0.6rem;
  height: auto;
  font-size: 0.26rem;
  margin-left: 0.19rem;
}
.sent {
  font-size: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 0 0.29rem;
  border-bottom: 1px solid #fafafa;
  .left {
    display: block;
    width: 0.24rem;
    height: 0.24rem;
    font-size: 0.24rem;
    color: white;
    background: #ffc600;
    text-align: center;
    line-height: 0.24rem;
    padding: 0.03rem;
    border-radius: 0.05rem;
  }
  .area {
    font-size: 0.26rem;
    color: white;
    margin-left: 0.38rem;
  }
  .icon {
    width: 1.26rem;
    height: 0.33rem;
    background: #dadada;
    border-radius: 0.17rem;
    position: absolute;
    right: 0.29rem;
    #door {
      display: inline-block;
      width: 0.64rem;
      height: 100%;
      color: black;
      font-size: 0.23rem;
      border-radius: 38%;
      text-align: center;
    }
    .door {
      background: #ffc600;
    }
    #store {
      display: inline-block;
      width: 0.62rem;
      height: 100%;
      color: black;
      font-size: 0.23rem;
      border-radius: 0.17rem;
      text-align: center;
    }
    .store {
      background: #ffc600;
    }
  }
}
.time {
  font-size: 0;
  display: flex;
  flex-direction: row;
  padding: 0 0.33rem;
  justify-content: space-between;
  margin-top: 0.39rem;
  margin-bottom:.41rem;
  .star {
    display: flex;
    flex-direction: column;
    font-size: 0.26rem;
    width: 1.5rem;
    align-items: center;
    .math {
      font-size: 0.26rem;
      margin: 0;
      color: white;
    }
    .clock {
      font-size: 0.2rem;
      margin: 0;
      color: #999999;
    }
  }
  .day {
    display: flex;
    flex-direction: column;
    font-size: 0.26rem;
    width: 2rem;
    align-items: center;
    span {
      color: #ffc600;
    }
    img {
      width: 100%;
      height: 0.14rem;
    }
  }
  .end {
    display: flex;
    flex-direction: column;
    font-size: 0.26rem;
    width: 1.5rem;
    align-items: center;
    .math {
      font-size: 0.26rem;
      margin: 0;
      color: white;
    }
    .clock {
      font-size: 0.2rem;
      margin: 0;
      color: #999999;
    }
  }
  .van-popup--center{
    width:65%;
  }
// <<<<<<< HEAD
// =======

// >>>>>>> 93d46c7750c95d385bc8b091346e98a4ba970a5d
}
.choice {
  text-align: center;
  input {
    width: 6.86rem;
    height: 0.89rem;
    background: #ffc600;
    font-size: 0.32rem;
    border: none;
    border-radius: 0.45rem;
  }
}
// <<<<<<< HEAD
// =======

// >>>>>>> 93d46c7750c95d385bc8b091346e98a4ba970a5d
</style>

