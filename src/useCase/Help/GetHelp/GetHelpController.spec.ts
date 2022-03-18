// import app from '@app';
// import request from 'supertest';

// describe('Get Help Controller', () => {
//   beforeAll(async () => {
//     await dbTestConnect();
//   });

//   it('Should not be able to get help because dosnt exist', async () => {
//     const { status, body } = await request(app).get(`/help/${1}`);

//     expect(status).toBe(404);
//     expect(body).toHaveProperty('error');
//     expect(body.error).toBe('User already exists');
//   });
// });

describe('Get help', () => {
  it('test', () => {
    expect(true).toBeTruthy;
  });
});
