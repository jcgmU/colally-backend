import 'reflect-metadata';
import { GetGreeting } from './GetGreeting';

describe('GetGreeting', () => {
  it('returns hello world message', () => {
    const useCase = new GetGreeting();
    expect(useCase.execute()).toEqual({ message: 'Hello World!' });
  });
});
