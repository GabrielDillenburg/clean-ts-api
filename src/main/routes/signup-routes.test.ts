import request from 'supertest'
import app from '../config/app'

describe(' Signup Routes', () => {
  test('Should parse body as JSON', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_passwordConfirmation'
      })
      .expect(200)
  })
})
