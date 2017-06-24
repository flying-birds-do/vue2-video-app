<template>
	<div class="alet_container" v-show="conShow">
		 <section class="tip_text_container">
            <div class="tip_icon">
                <span class="icon_loading" :class="{icon_cile:'icon_cile','icon_god':'icon_god'}"></span>
                <p>{{info_tip}}</p>
            </div>
        </section>
	</div>
</template>
<script type="text/javascript">
export default {
  name: 'alertText',
  props: ['conShow', 'info_tip'],
  data () {
    return {
      'icon_cile': false,
      'icon_god': false
    }
  }
}
</script>
<style type="text/css">
.alet_container {
  width: 60%;
  height: 50px;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -30%;
  margin-top: -25px;
  border-radius: 4px;
  line-height: 50px;
}
</style>
