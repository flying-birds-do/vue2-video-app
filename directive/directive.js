import Vue from 'vue'
   Vue.directive('clickDirective', {
        inserted: function (el) {
           el.focus(function () {
           console.log(1111)
           })
        }
    })
