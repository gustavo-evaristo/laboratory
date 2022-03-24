import * as YUP from 'yup';

type EndPointController = 'create' | 'update' | 'remove' | 'createInBatch' | 'removeInBatch' | 'updateInBatch';

const create = YUP.object().shape({
  name: YUP.string().required(),
  address: YUP.string().required(),
});

const createInBatch = YUP.object().shape({
  laboratories: YUP.array(
    YUP.object({
      name: YUP.string().required(),
      address: YUP.string().required(),
    }),
  ).required(),
});

const update = YUP.object().shape({
  id: YUP.number().required(),
  values: YUP.object({
    name: YUP.string(),
    address: YUP.string(),
    status: YUP.string(),
  }),
});

const updateInBatch = YUP.object().shape({
  laboratories: YUP.array(
    YUP.object().shape({
      id: YUP.number().required(),
      values: YUP.object({
        name: YUP.string(),
        address: YUP.string(),
        status: YUP.string(),
      }),
    }),
  ).required(),
});

const remove = YUP.object().shape({
  id: YUP.number().required(),
});

const removeInBatch = YUP.object().shape({
  laboratories: YUP.array().required(),
});

const schema = {
  create,
  createInBatch,
  update,
  remove,
  removeInBatch,
  updateInBatch,
};

export default async (type: EndPointController, body: Record<string, unknown>): Promise<void> => {
  if (!(await schema[type].isValid(body))) {
    throw new Error('Invalid fields');
  }
};
