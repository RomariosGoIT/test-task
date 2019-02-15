const colors = [
  '#67c9de',
  '#ba6fcb',
  '#e39473',
  '#5aa9e6',
  '#ac5061',
  '#9ec07f',
  '#b4507b',
  '#345feb',
  '#6bd3dd',
  '#c1da90',
];

export const getColor = id => {
  let colorStyle = '';
  if (id <= 10) {
    colorStyle = colors[id - 1];
  } else if (id > 10) {
    colorStyle = colors[Number(id.toString().slice(1))];
  }
  return colorStyle;
};

export const getUniqueId = () =>
  '_' +
  Math.random()
    .toString(36)
    .substr(2, 9);
