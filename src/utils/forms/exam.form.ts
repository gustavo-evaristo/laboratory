import * as YUP from 'yup';

type EndPointController = 'create' | 'update' | 'remove' | 'createInBatch' | 'updateInBatch' | 'removeInBatch';

const create = YUP.object().shape({
  name: YUP.string().required(),
  type: YUP.string().required(),
});

const createInBatch = YUP.object().shape({
  exams: YUP.array(
    YUP.object({
      name: YUP.string().required(),
      type: YUP.string().required(),
    }),
  ).required(),
});

const update = YUP.object().shape({
  id: YUP.number().required(),
  values: YUP.object({
    name: YUP.string(),
    type: YUP.string(),
    status: YUP.string(),
  }),
});

const updateInBatch = YUP.object().shape({
  exams: YUP.array(
    YUP.object().shape({
      id: YUP.number().required(),
      values: YUP.object({
        name: YUP.string(),
        type: YUP.string(),
        status: YUP.string(),
      }),
    }),
  ).required(),
});

const remove = YUP.object().shape({
  id: YUP.number().required(),
});

const removeInBatch = YUP.object().shape({
  exams: YUP.array().required(),
});

const schema = {
  create,
  createInBatch,
  update,
  updateInBatch,
  remove,
  removeInBatch,
};

export default async (type: EndPointController, body: Record<string, unknown>): Promise<void> => {
  if (!(await schema[type].isValid(body))) {
    throw new Error('Invalid fields');
  }
};
