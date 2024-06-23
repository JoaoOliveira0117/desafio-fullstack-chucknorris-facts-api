import schema from "./schema";
import ChuckNorrisService from "../../services/chuckNorris";

const chuckNorrisService = new ChuckNorrisService();

const root = {
  randomFact: () => {
    return chuckNorrisService.getRandomFact();
  },
  factById: ({ id }: { id: string }) => {
    return chuckNorrisService.getFactById(id);
  },
  factsByQuery: ({ search, limit }: { search: string, limit: number }) => {
    return chuckNorrisService.getFactsByQuery(search as string, limit);
  }
};

export default { root, schema }