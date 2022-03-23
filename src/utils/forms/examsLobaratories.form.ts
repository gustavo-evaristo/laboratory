import * as YUP from 'yup';

type EndPointController = 'create' | 'update' | 'remove';

const create = YUP.object().shape({
  laboratory: YUP.number().required(),
  exam: YUP.number().required(),
});

const update = YUP.object().shape({
  id: YUP.number().required(),
  name: YUP.string(),
  address: YUP.string(),
  status: YUP.string(),
});

const remove = YUP.object().shape({
  id: YUP.number().required(),
});

const schema = {
  create,
  update,
  remove,
};

export default async (type: EndPointController, body: Record<string, unknown>): Promise<void> => {
  if (!(await schema[type].isValid(body))) {
    throw new Error('Invalid fields');
  }
};
