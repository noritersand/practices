const Grid = toastui.Grid;

export const gridComponent = {
  template: `
    <grid :data="gridProps.data" :columns="gridProps.columns" />
  `,
  components: {
    grid: Grid
  },
  created() {
    this.gridProps = {
      data: [
        // for rowData prop
        {
          name: 'Beautiful Lies',
          artist: 'Birdy'
        },
        {
          name: 'X',
          artist: 'Ed Sheeran'
        }
      ],
      columns: [
        // for columnData prop
        {
          header: 'Name',
          name: 'name'
        },
        {
          header: 'Artist',
          name: 'artist'
        }
      ]
    };
  }
};