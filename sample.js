import WebSocket from 'ws';

const ws = new WebSocket('wss://pumpportal.fun/api/data');

ws.on('open', function open() {

      // Subscribing to token creation events
      // let payload = {
      //     method: "subscribeNewToken", 
      //   }
      // ws.send(JSON.stringify(payload));

      // Subscribing to trades made by accounts
      let payload = {
          method: "subscribeAccountTrade",
          keys: ["4HDL1rsgbeWUjh1hqn7uCLkW8RdMvy1b3FpbKTipSisP"] // array of accounts to watch
        }
      ws.send(JSON.stringify(payload));

      // Subscribing to trades on tokens
      // payload = {
      //     method: "subscribeTokenTrade",
      //     keys: ["91WNez8D22NwBssQbkzjy4s2ipFrzpmn5hfvWVe2aY5p"] // array of token CAs to watch
      //   }
      // ws.send(JSON.stringify(payload));
});

ws.on('message', function message(data) {
  try {
    const parsedData = JSON.parse(data.toString());
    if (parsedData.message == undefined) {
      //ws.close(1000, 'Closing connection normally');
      console.log(parsedData.mint)
      return parsedData.mint;
    }
  } catch (error) {
    console.error('Error parsing message data:', error);
  }
  
});