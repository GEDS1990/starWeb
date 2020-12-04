<template>
    <div class="dialog" v-show="showMask">
        <div class="content">
            <div class="imgdiv">
                <div class="img-item">
                    <img src="../../static/images/1.png" alt="" @click="selectImg(1)"><em>白羊座</em>
                </div>
                <div class="img-item">
                    <img src="../../static/images/2.png" alt="" @click="selectImg(2)"><em>金牛座</em>
                </div>
                <div class="img-item">
                    <img src="../../static/images/3.png" alt="" @click="selectImg(3)"><em>双子座</em>
                </div>
                <div class="img-item">
                    <img src="../../static/images/4.png" alt="" @click="selectImg(4)"><em>巨蟹座</em>
                </div>
                <div class="img-item">
                    <img src="../../static/images/5.png" alt="" @click="selectImg(5)"><em>狮子座</em>
                </div>
                <div class="img-item">
                    <img src="../../static/images/6.png" alt="" @click="selectImg(6)"><em>天秤座</em>
                </div>
                <div class="img-item">
                    <img src="../../static/images/7.png" alt="" @click="selectImg(7)"><em>天蝎座</em>
                </div>
                <div class="img-item">
                    <img src="../../static/images/8.png" alt="" @click="selectImg(8)"><em>射手座</em>
                </div>
                <div class="img-item">
                    <img src="../../static/images/9.png" alt="" @click="selectImg(9)"><em>射手座</em>
                </div>     
                <div class="img-item">
                    <img src="../../static/images/10.png" alt="" @click="selectImg(10)"><em>摩羯座</em>
                </div>     
                <div class="img-item">
                    <img src="../../static/images/11.png" alt="" @click="selectImg(11)"><em>水瓶座</em>
                </div>     
                <div class="img-item">
                    <img src="../../static/images/12.png" alt="" @click="selectImg(12)"><em>双鱼座</em>
                </div>                
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'selectXz',
        props: {
            value: ''
        },
        data() {
            return {
                showMask: true,

            }
        },
        mounted() {
            this.showMask = this.value;
        },
        methods: {
            selectImg(imgSelected){
                this.$emit('callback',imgSelected);
            }
        },
        watch: {
            value(newVal, oldVal){
                this.showMask = newVal;
            },
        },
    }
</script>
<style scoped>
.dialog {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
}
.content {
    position: fixed;
    padding: 20px;
    width: 100%;
    min-height: 300px;
    border-radius: 5px;
    background:floralwhite;
    z-index: 50002;
    
}
.content img {
    width: 50px;
    height: 50px;
}
.content .imgdiv {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
}
.content .imgdiv .img-item {
    display: flex;
    flex-flow: column;
    width: 80px;
    height: 80px;
    margin: 10px;
}
.content .imgdiv .img-item img {
    width: 100%;
    height: 6   0%;
}

</style>
