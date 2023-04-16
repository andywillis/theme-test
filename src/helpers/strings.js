function capitaliseWord(word) {
  const [ head, ...tail ] = word;
  return `${head.toUpperCase()}${tail.join('')}`;
}

export {
  // eslint-disable-next-line import/prefer-default-export
  capitaliseWord
};
