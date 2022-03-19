import { HelpRepository } from '@repositories';

export default class UpdateHelpService {
  constructor(private helpRepository: HelpRepository) {}

  async execute({ id, values }: HelpType.Update): Promise<boolean> {
    const help = await this.helpRepository.update({ id, values });

    if (!help) throw new Error('Failed to update help');

    return true;
  }
}
