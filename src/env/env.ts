function capitalize(wordArray: string[]) {
  return wordArray.map((word) => word.toUpperCase());
}

function splitWords(words: string) {
  return words.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
}

function getEnvVar(key: string) {
  return process.env[`REACT_APP_${capitalize(splitWords(key)).join('_')}`];
}

export default {
  influxdb: {
    address: getEnvVar('influxdbAddress') || 'http://localhost:8086',
  },
};
