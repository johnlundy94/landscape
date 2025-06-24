import {FormData} from "../pages/Quote"

export interface WSMessage {
  action: "postQuote" | "getQuotes";
//   Are we using two properties fir FormData?
  data?: FormData;
  quote?: FormData
  quoteId?: string;
  error?: string;
}
