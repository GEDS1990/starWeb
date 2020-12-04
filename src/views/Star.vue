<template>
  <div class="wrapper">
    <div class="header">
        <em class="xztitle">{{this.ysData.k0?this.ysData.k0:'星座运势'}}</em>
    </div>
    <div class="body">  
      <div class="astro">
        <img :src="srcImg" alt="" class="imgastro" @click="selectXz">
        <div>{{this.ysData.k11}}</div>
      </div>
      <div class="descs">
        <div class="d1">
          <div class="d11">
            <div class="title">特点</div>
            <div class="sub">{{this.ysData.k1?this.ysData.k1:'稳健固执'}}</div>
          </div>
        </div>
        <div class="d1">
          <div class="d11">
            <div class="title">掌管宫位</div>
            <div class="sub">{{this.ysData.k2?this.ysData.k2:'第二宫'}}</div>
          </div>
        </div>
        <div class="d1">
          <div class="d11">
            <div class="title">阴阳性</div>
            <div class="sub">{{this.ysData.k3?this.ysData.k3:'阴性'}}</div>
          </div>
        </div>
        <div class="d1">
          <div class="d11">
            <div class="title">最大特征</div>
            <div class="sub">{{this.ysData.k4?this.ysData.k4:'财富'}}</div>
          </div>
        </div>
        <div class="d1">
          <div class="d11">
            <div class="title">主管星</div>
            <div class="sub">{{this.ysData.k5?this.ysData.k5:'金星'}}</div>
          </div>
        </div>
        <div class="d1">
          <div class="d11">
            <div class="title">颜色</div>
            <div class="sub">{{this.ysData.k6?this.ysData.k6:'粉色'}}</div>
          </div>
        </div>
        <div class="d1">
          <div class="d11">
            <div class="title">珠宝</div>
            <div class="sub">{{this.ysData.k7?this.ysData.k7:'翡翠、玉'}}</div>
          </div>
        </div>
        <div class="d1">
          <div class="d11">
            <div class="title">幸运号码</div>
            <div class="sub">{{this.ysData.k8?this.ysData.k8:'6'}}</div>
          </div>
        </div>
        <div class="d1">
          <div class="d11">
            <div class="title">金属</div>
            <div class="sub">{{this.ysData.k9?this.ysData.k9:'木'}}</div>
          </div>
        </div>
      </div>
      <div class="showall">
        {{this.ysData.k10?this.ysData.k10:'无'}}
      </div>
    </div>
    <selectXz @callback="xzCallback" v-show="showDialog"></selectXz>
  </div>
</template>

<script>
import axios from 'axios';
import {getXZjson} from '@/request/api';
import selectXz from '@/components/Selectxz';
export default {
  name: 'star',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: '1',
      srcImg: window.location.protocol+"//"+window.location.host + window.location.pathname + '/static/images/1.png',
      ysData: {},
      showDialog: false,
    }
  },
  components: {
    'selectXz': selectXz,
  },
  mounted() {
    this.xzCallback(1);
  },
  methods: {
    xzCallback(imgSelected) {
      console.log("star,imgSelected:{}",imgSelected);
      this.showDialog = false;
      this.selected = imgSelected;
      this.srcImg = window.location.protocol+"//"+window.location.host + window.location.pathname + '/static/images/'+this.selected+'.png';
      var data = null;
      getXZjson(data, (res) => {
        // console.log(res);
        if(this.selected == 1){
          this.ysData = res.data.data1;
        }else if(this.selected == 2){
          this.ysData = res.data.data2;
        }else if(this.selected == 3){
          this.ysData = res.data.data3;
        }else if(this.selected == 4){
          this.ysData = res.data.data4;
        }else if(this.selected == 5){
          this.ysData = res.data.data5;
        }else if(this.selected == 6){
          this.ysData = res.data.data6;
        }else if(this.selected == 7){
          this.ysData = res.data.data7;
        }else if(this.selected == 8){
          this.ysData = res.data.data8;
        }else if(this.selected == 9){
          this.ysData = res.data.data9;
        }else if(this.selected == 10){
          this.ysData = res.data.data10;
        }else if(this.selected == 11){
          this.ysData = res.data.data11;
        }else if(this.selected == 12){
          this.ysData = res.data.data12;        
        }else{
          this.ysData = res.data.data1;
        }
      });
    },
    selectXz() {
      this.showDialog = true;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.xztitle {
  font-style: normal;
  color: rgba(255, 145, 190, 0.6);;
  font-size: 1.2rem;
  font-family: "微软雅黑", Arial;
}
.imgastro {
  width: 10rem;
  height: 10rem;
}
.xzselect {
  width: 100%;
  height: 2rem;
}
.descs {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  height: auto;
  border: none;
}
.d1 {
  text-align: center;
  width: 100px;
  height: 120px;
  margin: 0 9px 9px 0;
  background-image: url("../assets/images/item_bg.png");
  background-size: 100% 100%;
}
.d1 .d11 {
  height: 100%;
  width: 100%;
}
.d1 .d11 .title {
  color: chocolate;
  font-size: larger;
  font-weight: bold;
  margin-top: 24px;
}
.d1 .d11 .sub {
  color: blueviolet;
  font-size: medium;
  font-weight: bold;
  margin-bottom: 2px;;
  margin-top: 10px;
}
.d1 .d11 img {
  width: 50%;
  height: 20%;
  margin-bottom: 2px;
  margin-top: 20px;
}
.showall {
  padding: 10px;
  font-size: small;
  font-weight: bolder;
  text-align: left;
  color: brown;
  border: 1px solid cornflowerblue;
}
</style>
