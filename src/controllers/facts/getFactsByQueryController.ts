import Controller from '../../config/api/controller';
import asyncHandler from '../../http/asyncHandler';
import ChuckNorrisService from '../../services/chuckNorris';

/**
 * @swagger
 * /facts/search:
 *   get:
 *     summary: Get Chuck Norris facts by query
 *     tags: [Facts]
 *     description: Get Chuck Norris facts by query
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Filter Chuck Norris facts by search string
 *       - in: query
 *         name: limit
 *         schema:
 *           type: number
 *           default: 10
 *         description: Limit results
 *     responses:
 *       '200':
 *         description: A Chuck norris fact list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 fact:
 *                   type: string
 */

class GetFactsByQueryController extends Controller {
  async handle() {
    const { search, limit } = this.req.query;
    const service = new ChuckNorrisService();
    const fact = await service.getFactsByQuery(search as string, Number(limit) );

    this.success({ fact });
  }
}

export default asyncHandler(GetFactsByQueryController);
