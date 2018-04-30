const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
    describe('# GET /', () => {
        it('should return Hello server!', (done) => {
            request(app)
                .get('/')
                .expect('Hello server!')
                .end(done)
        });
    });

    describe('# GET /users', () => {
        it('should return me in users', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Eugene',
                        age: 24
                    })
                })
                .end(done)
        })
    })
})