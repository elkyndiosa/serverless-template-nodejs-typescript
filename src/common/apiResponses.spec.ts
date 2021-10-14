import {
  corsErrorResponse,
  corsSuccessResponse,
  errorResponse,
  erroValidationDataResponse,
  successResponse,
} from './apiResponses';

describe('Responses apis with status', () => {
  test('successResponse - Validate that the api response returns the desired object', () => {
    const resp = successResponse({ name: 'elkyn diosa' });
    expect(resp.statusCode).toBe(200);
    expect(typeof resp.body).toBe('string');
    expect(resp.headers['Content-Type']).toBe('application/json');
    expect(resp.headers['Access-Control-Allow-Origin']).toBe('*');
  });
  test('errorResponse - Validate that the api response returns the desired object', () => {
    const resp = errorResponse({ name: 'elkyn diosa' });
    expect(resp.statusCode).toBe(500);
    expect(typeof resp.body).toBe('string');
    expect(resp.headers['Content-Type']).toBe('application/json');
    expect(resp.headers['Access-Control-Allow-Origin']).toBe('*');
  });
  test('erroValidationDataResponse  - Validate that the api response returns the desired object', () => {
    const resp = erroValidationDataResponse({ name: 'elkyn diosa' });
    expect(resp.statusCode).toBe(400);
    expect(typeof resp.body).toBe('string');
    expect(resp.headers['Content-Type']).toBe('application/json');
    expect(resp.headers['Access-Control-Allow-Origin']).toBe('*');
  });
  test('corsSuccessResponse - Validate that the api response returns the desired object', () => {
    const resp = corsSuccessResponse({ name: 'elkyn diosa' });
    expect(resp.statusCode).toBe(200);
    expect(typeof resp.body).toBe('string');
    expect(resp.headers['Content-Type']).toBe('application/json');
    expect(resp.headers['Access-Control-Allow-Origin']).toBe('*');
    expect(resp.allowCORS).toBe(true);
  });
  test('corsErrorResponse - Validate that the api response returns the desired object', () => {
    const resp = corsErrorResponse({ name: 'elkyn diosa' });
    expect(resp.statusCode).toBe(500);
    expect(typeof resp.body).toBe('string');
    expect(resp.headers['Content-Type']).toBe('application/json');
    expect(resp.headers['Access-Control-Allow-Origin']).toBe('*');
    expect(resp.allowCORS).toBe(true);
  });
});
