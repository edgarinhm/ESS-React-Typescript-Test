class HttpClient {
  static async get(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}

export default HttpClient;
