import type { WSMessage } from "./types/WSMessage";

class WebSocketManager {
  // Class level properties with types 
  private static instance: WebSocketManager;
  private url: string;
  private ws: WebSocket | null = null;
  public isConnected: boolean = false;
  private messageCallback?: (message: WSMessage) => void;

  // Constructor only ever called once
  private constructor(url: string) {
    this.url = url;
    this.connect()
  }

  // Returns singleton instance, creating it on first call.
  public static getInstance(url: string): WebSocketManager {
    if (!WebSocketManager.instance) {
      WebSocketManager.instance = new WebSocketManager(url)
    }
    return WebSocketManager.instance;
  }

// Establish and re-establish the WebSocket connection
  private connect(): void {
    this.ws = new WebSocket(this.url);

    this.ws.onopen = (event) => {
      console.log("WebSocket connection established", this.url);
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

// Send any JSON object that matches WSMessage shape
  public sendMessage(message: WSMessage): void {
    if (this.isConnected && this.ws) {
      this.ws.send(JSON.stringify(message));
    } else {
      console.error("WebSocket connection is not open");
    }
  }

  // Register a callback to handle incoming messages
  setOnMessage(callback: (message: WSMessage) => void): void {
    this.messageCallback = callback
  }

  // Gracefully close the socket if open
  public close(): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.close();
    }
  }
}

const websocketUrl = process.env.REACT_APP_WS_API_GATEWAY_URL!;

const instance = WebSocketManager.getInstance(websocketUrl);

export default instance;
