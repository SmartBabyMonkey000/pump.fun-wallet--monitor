import WebSocket from 'ws';

const ws = new WebSocket('wss://pumpportal.fun/api/data');

ws.on('open', function open() {

      // Subscribing to token creation events
      let payload = {
          method: "subscribeNewToken", 
        }
      ws.send(JSON.stringify(payload));

    //   // Subscribing to trades made by accounts
    //   payload = {
    //       method: "subscribeAccountTrade",
    //       keys: ["AArPXm8JatJiuyEffuC1un2Sc835SULa4uQqDcaGpAjV"] // array of accounts to watch
    //     }
    //   ws.send(JSON.stringify(payload));

    //   // Subscribing to trades on tokens
    //   payload = {
    //       method: "subscribeTokenTrade",
    //       keys: [] // array of token CAs to watch
    //     }
      ws.send(JSON.stringify(payload));
});

ws.on('message', function message(data) {
      
      const result = JSON.parse(data);
      if (!result.message)
        //ws.close(1000, 'Closing connection normally')

      console.log(JSON.parse(data));
});