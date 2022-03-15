declare namespace UserType {
  type Values = {
    id: number;
    name: string;
    email: string;
    password: string;
    avatar: string;
    active: boolean;
    created_at: Date;
    updated_at: Date;
  };

  type Create = {
    name: string;
    email: string;
    password: string;
    avatar: string;
  };

  type CreateRequest = {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
    avatar: string;
  };

  type Find = {
    id?: number;
    email?: string;
  };

  type Update = {
    id: number;
    values: UserType.Values;
  };

  type Auth = {
    email: string;
    password: string;
  };
}
