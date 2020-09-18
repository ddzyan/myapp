const http = require('http');
const fs = require('fs');

const packageObj = require('./package.json');

const server = http.createServer((req, res) => {
  const {
    MY_NODE_NAME,
    MY_POD_NAME,
    MY_POD_NAMESPACE,
    MY_POD_IP,
  } = process.env;
  const url = req.url;
  const { version } = packageObj;
  const data = {
    version,
    url,
    nodeName: MY_NODE_NAME,
    myPodName: MY_POD_NAME,
    myPodNamespace: MY_POD_NAMESPACE,
    myPodIp: MY_POD_IP,
  };
  res.statusCode = 200;
  const dateTime = new Date();

  fs.writeFile(
    './log/res.log',
    dateTime.toLocaleString() + '\n',
    { flag: 'a' },
    function (err) {
      if (err) {
        res.end(err.message);
      }

      res.end(JSON.stringify(data));
    }
  );
});

server.listen(3000, () => {
  console.log('server is success');
});
