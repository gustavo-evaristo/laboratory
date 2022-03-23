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

  type Update = {
    name: number;
    values: Values;
  };
}
