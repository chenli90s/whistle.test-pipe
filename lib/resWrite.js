
const { encrypt } = require('./cry')
module.exports = (server/* , options */) => {
  server.on('request', (req, res) => {
    let body;
    req.on('data', (data) => {
      body = body ? Buffer.concat([body, data]) : data;
    });
    req.on('end', () => {
      if (body) {
        const json = JSON.parse(body.toString())
        if(json.data && json.data.isParse){
          json.data = encrypt(json.stringify(json.data))
          delete json.isParse
        }
        res.end(JSON.stringify(json))
      } else {
        res.end();
      }
    });
  });
};
