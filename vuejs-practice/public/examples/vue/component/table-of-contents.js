export const tableOfContents = {
  template: `
    <template v-if="headers">
      <h4>📌 목차</h4>
      <ul>
        <li v-for="item in headers" :style="{ 'margin-left': item.marginLeft }">
          <a :href="item.href">{{item.title}}</a>
        </li>
      </ul>
    </template>
  `,
  props: ['text'],
  data() {
    return {
      headers: null
    };
  },
  mounted() {
    let nodeList = document.querySelectorAll('h2, h3');
    let headers = [];
    nodeList.forEach((ele) => {
      let newId = ele.innerText.replace(/\s/g, '-');
      headers.push({
        title: ele.innerText,
        href: '#' + newId,
        marginLeft: ele.tagName == 'H2' ? 'auto' : '15px'
      });
      // 사실 마진 넣는건 꼼수고 딴 애덜은 nested ul로 처리했던데 어케한겨 😵‍💫
      ele.setAttribute('id', newId);
      this.headers = headers;
    });
  }
};
