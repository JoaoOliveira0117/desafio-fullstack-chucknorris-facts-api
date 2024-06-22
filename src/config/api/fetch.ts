class Fetch {
  baseUrl: string;
  headers = {
    'Content-Type': 'application/json',
  };

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  parseResponse(res: Response) {
    return res.json(); // node-fetch's Response.json() returns a promise
  }

  async get(endpoint: string) {
    const response = await fetch(`${this.baseUrl}${endpoint}`);

    return this.parseResponse(response);
  }

  async post(endpoint: string, body: any) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body),
    });

    return this.parseResponse(response);
  }

  async put(endpoint: string, body: any) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(body),
    });

    return this.parseResponse(response);
  }

  async delete(endpoint: string) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'DELETE',
    });

    return this.parseResponse(response);
  }
}

export default Fetch;
