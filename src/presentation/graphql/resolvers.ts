import { container } from 'tsyringe';

import { GetGreeting } from '../../application/greeting/GetGreeting';

export const resolvers = {
  Query: {
    greeting: () => {
      const useCase = container.resolve(GetGreeting);
      return useCase.execute();
    },
  },
};
