export const theme = Object.freeze({
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    ml: 24,
    l: 32,
    xl: 64,
  },
  fontWeights: {
    normal: 400,
    medium: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#4056b4',
    statsText: '#ff9',

    placeholder: '#f5ff00a6',
    inputText: 'yellow',
    inputBcg: ' #4056b4',
    background: 'rgba(0, 0, 0, 0.5)',
    primary: '#4056b4',
    BtnBackground: '#fefe60',
    secondary: '#30c',
  },
  radii: {
    none: '0',
    normal: '2px',
    round: '50%',
    sadVew: '20px',
  },
  borders: {
    none: 'none',
    loadMore: '2px solid #4056b4',
    serchBtn: '4px solid yellow',
  },
  shadows: {
    boxShadow: '0px 0px 4px 3px gray',
    buttonsShadow: ' 0 1px 1px #2d2020',
    deletButton: '3px 3px 3px 0 red',
  },
});
