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
    public: boolean;
    stars: number;
    created_at: Date;
    updated_at: Date;
  };
}
