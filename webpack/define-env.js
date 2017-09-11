module.exports = {
  define({ target, production }) {
    const nodeEnv = typeof production !== 'undefined' 
      ? production ? 'production' : 'development'
      : process.env.NODE_ENV;

    return {
      'process.env.NODE_ENV': JSON.stringify(nodeEnv)
    };
  }
};
