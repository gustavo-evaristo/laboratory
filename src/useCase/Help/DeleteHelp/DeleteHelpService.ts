import { HelpRepository } from '@repositories';

export default class DeleteHelpService {
  constructor(private helpRepository: HelpRepository) {}

  async execute(id: number): Promise<boolean> {
    const help = await this.helpRepository.delete(id);

    if (!help) throw new Error('Failed to delete help');

    return true;
  }
}
