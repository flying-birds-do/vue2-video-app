<template>
  <div class="bg_choice">
    <div class="resigin_sucess">
      <div class="sucess_cont">
        <img src="../assets/images/sucess_icon.png">
        <p>恭喜你注册成功</p>
      </div>
    </div>
    <!-- 选择喜欢的 -->
    <div class="choice_like">
      <p>来选择喜欢的视频类型吧 ...</p>
      <ul class="clearfix">
        <li v-for="(item,index) in items" :class="[defaultArr.indexOf(item.text) >= 0 ? 'choice1' : '']"  :key="index">
          <p class="cirle" :class="{choice: false}">
            <i :class="item.Mainland"></i>
          </p>
          <p>{{item.text}}</p>
          <p>{{item.chese}}</p>
          <input type="checkbox" class="mask_choice" v-model="defaultArr" :value="item.text">
          </i>
        </li>
      </ul>
      <button class="choice_complate" @click="enterHome">我选完了</button>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      items: [
        {
          Mainland: 'icon_Romance',
          text: 'Romance',
          chese: '言情'
        },
        {
          Mainland: 'icon_Musical',
          text: 'Comedy',
          chese: '喜剧'
        },
        {
          Mainland: 'icon_Comedy',
          text: 'Action',
          chese: '动作'
        },
        {
          Mainland: 'icon_Action',
          text: 'Cartoon',
          chese: '卡通'
        },
        {
          Mainland: 'icon_Cartoon',
          text: 'Dracula',
          chese: '恐怖'
        },
        {
          Mainland: 'icon_Dracula',
          text: 'Occident',
          chese: '欧美'
        },
        {
          Mainland: 'icon_japan',
          text: 'Japan',
          chese: '日韩'
        },
        {
          Mainland: 'icon_Mainland',
          text: 'Main',
          chese: '珠海'
        },
        {
          Mainland: 'icon_Mainland',
          text: 'Mainland',
          chese: '大陆'
        }
      ],
      defaultArr: []
    }
  },
  created () {
  },
  methods: {
    enterHome () {
      this.$router.push({ path: '/home/' })
    }
  }
}
</script>
<style type="text/css">
.mask_choice {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  z-index: 20;
  left: 0;
  top: 0;
}

.bg_choice {
  background: #1a1b28;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 100;
  position: relative;
}

.resigin_sucess {
  margin: auto;
  color: #fff;
  border-bottom: 1px dashed #2f2f2f;
}

.sucess_cont {
  width: 3rem;
  padding-top: 0.6rem;
  margin: auto;
  padding-bottom: 0.5rem;
  font-size: 0.27rem;
}

.resigin_sucess img {
  width: 0.8rem;
  height: 0.55rem;
  margin-bottom: 0.4rem;
}

.choice_like ul {
  padding: 0 0.3rem;
}

.choice_like>p {
  font-size: 0.24rem;
  color: #f6f6f6;
  text-align: left;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  padding-left: 0.3rem;
}

.choice_like ul li>p.cirle {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.75rem;
  background: #242539;
  position: relative;
  border: 2px solid #151620;
}

.choice_like ul li>p:nth-child(2) {
  color: #d6d6d6;
  font-size: 0.26rem;
  margin-bottom: 4px;
}

.choice_like ul li>p:nth-child(3) {
  color: #a5a5a5;
  font-size: 0.22rem;
}

.choice_like ul li {
  width: 1.5rem;
  margin-bottom: 0.42rem;
  float: left;
  width: 33.33%;
  position: relative;
}

.ml_7 {
  margin-left: 7%;
}

.mr_7 {
  margin-right: 7%;
}

.choice_like ul li>p {
  margin: 0 auto;
}

.choice_like ul li.choice1>p.cirle {
  background: #f7df13;
  margin: 0 auto;
}

.choice_like .icon_Romance {
  background: url('../assets/images/unRomance.png') no-repeat;
  background-size: 100%;
}

.choice_like .icon_Musical {
  background: url('../assets/images/Musical.png') no-repeat;
  background-size: 100%;
}

.choice_like .icon_Comedy {
  background: url('../assets/images/unComedy.png') no-repeat;
  background-size: 100%;
  width: 0.46rem;
  height: 0.67rem;
}

.choice_like .icon_Action {
  background: url('../assets/images/unAction.png') no-repeat;
  background-size: 100%;
}

.choice_like .icon_Cartoon {
  background: url('../assets/images/unCartoon.png') no-repeat;
  background-size: 100%;
  width: 0.44rem;
  height: 0.66rem;
}

.choice_like .icon_Dracula {
  background: url('../assets/images/unDracula.png') no-repeat;
  background-size: 100%;
}

.choice_like .icon_Occident {
  background: url('../assets/images/Occident.png') no-repeat;
  background-size: 100%;
  width: 0.46rem;
  height: 0.67rem;
}

.choice_like .icon_japan {
  background: url('../assets/images/uncart.png') no-repeat;
  background-size: 100%;
}

.choice_like .icon_Mainland {
  background: url('../assets/images/unMainland.png') no-repeat;
  background-size: 100%;
}

.choice_like ul li>p.cirle.choice .icon_Romance {
  background: url('../assets/images/Romance.png') no-repeat;
  background-size: 100%;
}

.choice_like ul li.choice>p.cirle .icon_Musical {
  background: url('../assets/images/Musical.png') no-repeat;
  background-size: 100%;
}

.choice_like ul li.choice>p.cirle .icon_Comedy {
  background: url('../assets/images/Comedy.png') no-repeat;
  background-size: 100%;
  width: 0.46rem;
  height: 0.67rem;
}

.choice_like ul li.choice1>p.cirle .icon_Action {
  background: url('../assets/images/Action.png') no-repeat;
  background-size: 100%;
}

.choice_like ul li.choice1>p.cirle .icon_Cartoon {
  background: url('../assets/images/Cartoon.png') no-repeat;
  background-size: 100%;
  width: 0.44rem;
  height: 0.66rem;
}

.choice_like ul li.choice1>p.cirle.choice .icon_Dracula {
  background: url('../assets/images/Dracula.png') no-repeat;
  background-size: 100%;
}

.choice_like ul li.choice1>p.cirle.icon_Occident {
  background: url('../assets/images/unOccident.png') no-repeat;
  background-size: 100%;
  width: 0.46rem;
  height: 0.67rem;
}

.choice_like ul li.choice1>p.cirle .icon_japan {
  background: url('../assets/images/cart.png') no-repeat;
  background-size: 100%;
}

.choice_like ul li.choice1>p.cirle .icon_Mainland {
  background: url('../assets/images/Mainland.png') no-repeat;
  background-size: 100%;
}

.choice_like ul li p i {
  width: 0.69rem;
  height: 0.7rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}

.choice_complate {
  background: url('../assets/images/choice_complate.png') no-repeat;
  width: 5.3rem;
  height: 1.5rem;
  border: none;
  outline: none;
  background-size: 100%;
  line-height: 1.5rem;
  color: #fff;
  font-size: 0.26rem;
}
</style>
