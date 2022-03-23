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

  type Update = {
    id: number;
    values: Values;
  };
}
