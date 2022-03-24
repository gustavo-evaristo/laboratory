declare namespace ExamType {
  type Values = {
    id: number;
    name: string;
    type: string;
    status: string;
    created_at: Date;
    updated_at: Date;
  };

  type Create = {
    name: string;
    type: string;
  };

  type CreateInBatch = {
    exams: Create[];
  };

  type Update = {
    id: number;
    values?: Partial<Values>;
  };

  type UpdateInBatch = {
    exams: Update[];
  };

  type Delete = {
    id: number;
  };

  type DeleteInBatch = {
    exams: number[];
  };
}
