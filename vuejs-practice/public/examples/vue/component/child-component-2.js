export const childComponent2 = {
  template: `
    <p>{{message}}</p>
    <p>{{'usable: ' + usable}}</p>
  `,
  data() {
    return {
      message: 'non-value props test'
    }
  },
  props: {
    usable: {
      type: Boolean
    }
  },
  methods: {
    probe() {
      debugger;
      console.log('probe');
    }
  }
};
