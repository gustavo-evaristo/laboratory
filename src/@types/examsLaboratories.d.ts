declare namespace ExamsLaboratoriesType {
  type Values = {
    id: number;
    laboratory: number;
    _laboratory: LaboratoryType.Values;
    exam: number;
    _exam: ExamType.Values;
    status: string;
    created_at: Date;
    updated_at: Date;
  };

  type Create = {
    laboratory: number;
    exam: number;
  };

  type Update = {
    id: number;
    values: Values;
  };
}
