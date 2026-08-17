export const backToHome = {
  template: `
    <div class="button-wrapper">
      <a class="button" :href="where">⬅ 홈으로 돌아가기</a>
    </div>
  `,
  props: ['text'],
  data() {
    return {
      where: location.protocol + '//' + location.host 
    };
  }
};
