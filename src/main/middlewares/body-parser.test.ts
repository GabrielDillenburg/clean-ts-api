import request from 'supertest'
import app from '../config/app'

describe(' Body parser Middleware', () => {
  test('Should parse body as JSON', async () => {
    app.post('/test_body_pareser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_pareser')
      .send({ name: 'any_name_for_test' })
      .expect({ name: 'any_name_for_test' })
  })
})
