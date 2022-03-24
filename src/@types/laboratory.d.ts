declare namespace LaboratoryType {
  type Values = {
    id: number;
    name: string;
    address: string;
    status: string;
    created_at: Date;
    updated_at: Date;
  };

  type Create = {
    name: string;
    address: string;
  };

  type CreateInBatch = {
    laboratories: Create[];
  };

  type Update = {
    id: number;
    values?: Partial<Values>;
  };

  type UpdateInBatch = {
    laboratories: Update[];
  };

  type Delete = {
    id: number;
  };

  type DeleteInBatch = {
    laboratories: number[];
  };
}
