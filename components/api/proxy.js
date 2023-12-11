const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const response = await fetch('https://craftzdog.global.ssl.fastly.net/homepage/dog.glb');
  const data = await response.buffer();

  res.setHeader('Content-Type', 'model/gltf-binary');
  res.send(data);
};