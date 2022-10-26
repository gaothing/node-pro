const buildOptions = {
  input: ['index.js'],
  output: [{
    dir: 'dist/es',
    format: 'esm'
  },  {
    dir: "dist/cjs",
    format: "cjs",
  }]
};
export default buildOptions;