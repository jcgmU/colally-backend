import DataLoader from 'dataloader';

import { GetGreeting } from '../../application/greeting/GetGreeting';
import { container } from '../container';

export function createGreetingLoader() {
  return new DataLoader(async (keys: readonly number[]) => {
    const useCase = container.resolve(GetGreeting);
    return keys.map(() => useCase.execute());
  });
}
