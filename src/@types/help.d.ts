declare namespace HelpType {
  type Values = {
    id: number;
    owner: number;
    _owner: UserType.Values;
    title: string;
    description: string;
    category: string;
    file: string;
    status: string;
    is_private: boolean;
    stars: number;
    created_at: Date;
    updated_at: Date;
  };

  type Create = {
    owner: number;
    title: string;
    description: string;
    category: string;
    file?: string;
    status?: string;
    is_private: boolean;
  };

  type GetRequest = {
    id: number;
  };

  type Update = {
    id: number;
    values: Partial<HelpType.Values>;
  };

  type Delete = {
    id: number;
  };
}
