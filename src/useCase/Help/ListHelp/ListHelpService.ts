import { HelpRepository } from '@repositories';
import { isEmpty } from '@utils';

export default class ListHelpService {
  constructor(private helpRepository: HelpRepository) {}

  async execute(): Promise<HelpType.Values[]> {
    const help = await this.helpRepository.findAll();

    if (isEmpty(help)) throw new Error('Helps not exists');

    return help;
  }
}
