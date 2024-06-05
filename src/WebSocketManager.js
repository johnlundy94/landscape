class WebSocketManager {
  constructor(url) {
    if (!WebSocketManager.instance) {
      this.url = url;
      this.isConnected = false;
      this.ws = null;
      this.connect();
      WebSocketManager.instance = this;
    }

    return WebSocketManager.instance;
  }

  connect() {
    this.ws = new WebSocket(this.url);

    this.ws.onopen = (event) => {
      console.log("WebSocket connection established", event);
      this.isConnected = true;
    };

    this.ws.onerror = (event) => {
      console.error("WebSocket error observed:", event);
    };

    this.ws.onclose = (event) => {
      console.log("WebSocket connection closed", event);
      this.isConnected = false;
      // Retry connection after 3 seconds
      setTimeout(() => {
        console.log("Attempting to reconnect WebSocket...");
        this.connect();
      }, 3000);
    };
  }

  sendMessage(message) {
    if (this.isConnected) {
      this.ws.send(JSON.stringify(message));
    } else {
      console.error("WebSocket connection is not open");
    }
  }

  setOnMessage(callback) {
    this.ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      callback(message);
    };
  }

  close() {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.close();
    }
  }
}

const instance = new WebSocketManager(
  "wss://sp8bz6x76k.execute-api.us-east-2.amazonaws.com/dev/"
);

export default instance;
