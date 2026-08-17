import { createApp } from '/lib/vue/vue.esm-browser.js';
import { backToHome } from '/examples/vue/component/back-to-home.js';
import { childComponent1 } from '/examples/vue/component/child-component-1.js'
import { childComponent2 } from '/examples/vue/component/child-component-2.js'

let vm = createApp({
  components: {
    backToHome, 
    childComponent1, childComponent2
  },
  data() {
    return {
      pageTitle: "Props",
      docs: [
        { title: "https://vuejs.org/api/options-state.html#props", url: "https://vuejs.org/api/options-state.html#props" },
        { title: "https://vuejs.org/guide/components/props.html#props-declaration", url: "https://vuejs.org/guide/components/props.html#props-declaration" },
        { title: "https://vuejs.org/guide/typescript/options-api.html#typing-component-props", url: "https://vuejs.org/guide/typescript/options-api.html#typing-component-props" },
      ],
      message: "Hello Vue! ✌️"
    };
  },
  created() {
    document.title += `: ${this.pageTitle}`;
  },
  props: {
    name: String,
    id: [Number, String],
    msg: { type: String, required: true },
    metadata: null
  },
  methods: {
    fn1() {
      try {
        this.msg = 'wasssssssup';   
      } catch (error) {
        document.querySelector('#result2').innerText = error;
      }
    }
  }
}, { msg: 'Hello Props?' }).mount("#app");
