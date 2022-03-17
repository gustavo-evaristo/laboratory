import GetHelpService from './GetHelpService';
import { dbConnect, dbClose } from '@database';
import { HelpRepository } from '@repositories';

describe('Get Help Service', () => {
  let helpRepository: HelpRepository;
  let getHelpService: GetHelpService;

  beforeAll(async () => {
    await dbConnect();

    helpRepository = new HelpRepository();
    getHelpService = new GetHelpService(helpRepository);
  });

  afterAll(async () => {
    await dbClose();
  });

  it('should not be able to get a help because  because it doesnt exist', () => {
    expect(async () => await getHelpService.execute(1)).rejects.toThrow(new Error('Help not exists'));
  });
});
