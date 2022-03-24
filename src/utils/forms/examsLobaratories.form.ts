import * as YUP from 'yup';

type EndPointController = 'create' | 'remove' | 'createInBatch' | 'removeInBatch';

const create = YUP.object().shape({
  laboratory: YUP.number().required(),
  exam: YUP.number().required(),
});

const createInBatch = YUP.object().shape({
  examsLaboratories: YUP.array(
    YUP.object({
      laboratory: YUP.number().required(),
      exam: YUP.number().required(),
    }),
  ).required(),
});

const remove = YUP.object().shape({
  id: YUP.number().required(),
});

const removeInBatch = YUP.object().shape({
  examsLaboratories: YUP.array().required(),
});

const schema = {
  create,
  createInBatch,
  remove,
  removeInBatch,
};

export default async (type: EndPointController, body: Record<string, unknown>): Promise<void> => {
  if (!(await schema[type].isValid(body))) {
    throw new Error('Invalid fields');
  }
};
