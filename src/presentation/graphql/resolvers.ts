import { createGreetingLoader } from '../../infrastructure/dataloaders/greetingLoader';

const greetingLoader = createGreetingLoader();

export const resolvers = {
  Query: {
    greeting: () => greetingLoader.load(1),
  },
};
