import { injectable } from 'tsyringe';

import type { Greeting } from '../../domain/greeting/Greeting';

@injectable()
export class GetGreeting {
  execute(): Greeting {
    return { message: 'Hello World!' };
  }
}
