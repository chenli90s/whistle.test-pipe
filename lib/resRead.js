
const { decrypt } = require('./cry')
module.exports = (server/* , options */) => {
  server.on('request', (req, res) => {
    let body;
    req.on('data', (data) => {
      body = body ? Buffer.concat([body, data]) : data;
      // console.log('-------')
      // console.log(data)
      // body = data
    });
    req.on('end', () => {
      // res.end(body)
      if (body) {
        const json = JSON.parse(body.toString())
        if(json.data && typeof(json.data) === 'string'){
          json.data = JSON.parse(decrypt(json.data))
          json.isParse = true
        }
        res.end(Buffer.from(JSON.stringify(json)));
      } else {
        res.end();
      }
    });
  });
};
