export const multiPlacePicker = {
  template: `
    <p>props.pickThese: {{pickThese}}</p>
    <select id="multiPlacePicker" placeholder="체크인장소 선택" multiple>
      <option value="">체크인장소 선택</option>
      <option value="A1234">전체</option>
      <option value="A2345">전략기획본부실</option>
      <option value="A3456">영업본부실</option>
      <option value="B4567">국내영업팀</option>
      <option value="B5678">우리집</option>
      <option value="B6789">너네집</option>
    </select>
  `,
  data() {
    return {
      selected: [],
    };
  },
  props: {
    pickThese: {
      type: Array,
      default: [],
      required: false
    }
  },
  mounted() {
    let $this = this;
    new TomSelect('#multiPlacePicker', {
      plugins: ['checkbox_options'],
      maxItems: 99,
      hideSelected: false,
      hidePlaceholder: true,
      onChange(values) {
        console.log('values:', values);
        $this.selected = values;
      },
      onInitialize() {
        console.log('$this.pickThese:', $this.pickThese);
        this.setValue($this.pickThese);
      }
    });
  }
};
