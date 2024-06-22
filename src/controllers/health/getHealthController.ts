import Controller from '../../config/api/controller';
import asyncHandler from '../../http/asyncHandler';

/**
 * @swagger
 * components:
 *   schemas:
 *     HealthResponse:
 *       type: object
 *       properties:
 *         data:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: Im Healthy!
 */

/**
 * @swagger
 * /health:
 *  get:
 *    tags: ['Admin']
 *    summary: Checks API Health
 *    description: Checks API Health
 *    responses:
 *      200:
 *        description: Mensagem de sucesso
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/HealthResponse'
 */

class GetHealthController extends Controller {
  async handle() {
    this.success({ message: 'Im Healthy!' });
  }
}

export default asyncHandler(GetHealthController);
