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
      console.log("WebSocket connection established", this.ws.url);
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
    console.log("setOnMessage called with callback:", callback); // Log when setOnMessage is called
    this.ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("WebSocket message received: ", message);

      callback(message);
    };
  }

  close() {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.close();
    }
  }
}

const websocketUrl = process.env.REACT_APP_WS_API_GATEWAY_URL;

const instance = new WebSocketManager(websocketUrl);

export default instance;
