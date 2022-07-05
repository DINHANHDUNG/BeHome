export interface Company {
  phonenumber: string;
  address: string;
  email: string;
  images: [
    {
      id: number;
      imagename: string;
      type: string;
    }
  ];
}
