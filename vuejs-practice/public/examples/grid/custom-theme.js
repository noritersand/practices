export default {
  outline: {
    border: 'red',
    showVerticalBorder: true
  },
  selection: {
    background: 'green',
    border: 'green'
  },
  scrollbar: {
    border: 'yellow',
    background: 'yellow',
    emptySpace: 'yellow',
    thumb: 'yellow',
    active: 'yellow'
  },
  frozenBorder: {
    border: 'purple'
  },
  area: {
    header: {
      background: 'blue',
      border: 'blue'
    },
    body: {
      background: null
    },
    summary: {
      background: 'aqua',
      border: 'aqua'
    }
  },
  row: {
    even: {
      background: 'burlywood',
      text: null
    },
    odd: {
      background: 'cornsilk',
      text: null
    },
    dummy: {
      background: 'darkgoldenrod'
    },
    hover: {
      background: '#ccc'
    }
  },
  cell: {
    normal: {
      background: 'rgba(0, 0, 0, 0)',
      border: '#e0e0e0',
      text: null,
      showVerticalBorder: true,
      showHorizontalBorder: true
    },
    header: {
      background: 'rgb(250, 250, 250)',
      border: '#ccc',
      text: null,
      showVerticalBorder: true,
      showHorizontalBorder: true
    },
    selectedHeader: {
      background: 'brown'
    },
    rowHeader: {
      background: 'cadetblue',
      border: 'cadetblue',
      text: null,
      showVerticalBorder: true,
      showHorizontalBorder: true
    },
    selectedRowHeader: {
      background: 'coral'
    },
    summary: {
      background: 'gold',
      border: null,
      text: null,
      showVerticalBorder: true,
      showHorizontalBorder: true
    },
    focused: {
      background: 'lightblue',
      border: null
    },
    focusedInactive: {
      border: null
    },
    required: {
      background: 'indigo',
      text: null
    },
    editable: {
      background: 'ivory',
      text: null
    },
    disabled: {
      background: 'darkslategrey',
      text: null
    },
    invalid: {
      background: 'lightpink',
      text: null
    },
    currentRow: {
      background: 'linen',
      text: null
    },
    evenRow: {
      background: null,
      text: null
    },
    oddRow: {
      background: null,
      text: null
    },
    dummy: {
      background: null
    }
  }
};