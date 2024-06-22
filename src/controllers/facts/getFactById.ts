import Controller from '../../config/api/controller';
import asyncHandler from '../../http/asyncHandler';
import ChuckNorrisService from '../../services/chuckNorris';

/**
 * @swagger
 * /facts/{id}:
 *   get:
 *     summary: Get Chuck Norris fact by ID
 *     tags: [Facts]
 *     description: Retrieve a Chuck Norris fact by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the Chuck Norris fact to retrieve
 *     responses:
 *       '200':
 *         description: A Chuck Norris fact
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
    const { id } = this.req.params;
    const service = new ChuckNorrisService();
    const fact = await service.getFactById(id);

    this.success({ fact });
  }
}

export default asyncHandler(GetFactsByQueryController);
