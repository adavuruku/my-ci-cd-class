const request = require('supertest')
const app = require('../app')

describe('Default Endpoint', () => {
  it('should return status 200', async () => {
    const res = await request(app)
      .get('/')
    expect(res.statusCode).toEqual(200)
  })
})

describe('New Endpoint', () => {
  it('should return a static json response with status 201', async () => {
    const res = await request(app)
      .get('/ice-flakes')
    expect(res.body).toEqual({
      resource: 'ice-flakes',
      count: 205,
      shape: 'circle'
    })
    expect(res.statusCode).toEqual(201)
  })
})

describe('Get a user', () => {
  it('should return a static json response of user object with status 200', async () => {
    const res = await request(app)
      .get('/users/1')
    expect(res.body).toEqual({
      id: 1,
      firstName: 'Sherif',
      lastName: 'Adams',
      age: 25
    })
    expect(res.statusCode).toEqual(200)
  })
})

describe('Get all users', () => {
  it('should return a static json response of user object list with status 200', async () => {
    const res = await request(app)
      .get('/users')
    expect(res.body[1]).toEqual({
      id: 2,
      firstName: 'Joy',
      lastName: 'Amoka',
      age: 18
    })
    expect(res.statusCode).toEqual(200)
    expect(res.body.length).toEqual(3)
  })
})
