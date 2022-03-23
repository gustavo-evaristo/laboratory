import * as YUP from 'yup';

type EndPointController = 'create' | 'update' | 'remove';

const create = YUP.object().shape({
  name: YUP.string().required(),
  type: YUP.string().required(),
});

const update = YUP.object().shape({
  id: YUP.number().required(),
  name: YUP.string(),
  type: YUP.string(),
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
