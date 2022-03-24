import * as YUP from 'yup';

type EndPointController = 'create' | 'remove';

const create = YUP.object().shape({
  laboratory: YUP.number().required(),
  exam: YUP.number().required(),
});

const remove = YUP.object().shape({
  id: YUP.number().required(),
});

const schema = {
  create,
  remove,
};

export default async (type: EndPointController, body: Record<string, unknown>): Promise<void> => {
  if (!(await schema[type].isValid(body))) {
    throw new Error('Invalid fields');
  }
};
