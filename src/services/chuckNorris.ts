import { URLSearchParams } from "url";
import Fetch from "../config/api/fetch";

type Fact = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

type FactsByQueryResponse = {
  total: number,
  result: Fact[]
}

class ChuckNorrisService {
  baseURL = 'https://api.chucknorris.io';
  headers = {
    'Content-Type': 'application/json',
  };
  api: Fetch

  constructor() {
    this.api = new Fetch(this.baseURL);
  }

  async getRandomFact() {
    const response = await this.api.get('/jokes/random') as Fact;
    return response;
  }

  async getFactsByQuery(query: string, limit=10) {
    const searchParams = new URLSearchParams({ query });
    const { result } = await this.api.get(`/jokes/search?${searchParams}`) as FactsByQueryResponse;
    return result.splice(0, limit);
  }

  async getFactById(id: string) {
    const response = await this.api.get(`/jokes/${id}`) as Fact;
    return response;
  }
}

export default ChuckNorrisService