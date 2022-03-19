import { HelpRepository } from '@repositories';

export default class ListHelpService {
  constructor(private helpRepository: HelpRepository) {}

  async execute(): Promise<HelpType.Values[]> {
    const helps = await this.helpRepository.findAll();

    return helps;
  }
}
