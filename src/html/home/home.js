/**
 * Created by hasee on 2018/8/15.
 */
import index from './home.vue';
import Vue from 'vue';


new Vue({
    el:'#app',
    render: mod => mod(index)
});
