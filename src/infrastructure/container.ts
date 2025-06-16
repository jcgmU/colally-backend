import { container } from 'tsyringe';

import { GetGreeting } from '../application/greeting/GetGreeting';

export function setupContainer() {
  container.registerSingleton(GetGreeting, GetGreeting);
}

export { container };
