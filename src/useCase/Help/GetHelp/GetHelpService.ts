import { HelpRepository } from '@repositories';
import { isEmpty } from '@utils';

export default class GetHelpService {
  constructor(private helpRepository: HelpRepository) {}

  async execute(id: number): Promise<HelpType.Values> {
    const help = await this.helpRepository.findOne(id);

    if (isEmpty(help)) throw new Error('Help not exists');

    return help;
  }
}
