import Controller from '../../config/api/controller';
import asyncHandler from '../../http/asyncHandler';
import ChuckNorrisService from '../../services/chuckNorris';

/**
 * @swagger
 * /facts/random:
 *   get:
 *     summary: Get a random Chuck Norris fact
 *     tags: [Facts]
 *     responses:
 *       '200':
 *         description: A random Chuck Norris fact
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 fact:
 *                   type: string
 */

class GetRandomFactController extends Controller {
  async handle() {
    const service = new ChuckNorrisService();
    const fact = await service.getRandomFact();
    
    this.success({ fact });
  }
}

export default asyncHandler(GetRandomFactController);
