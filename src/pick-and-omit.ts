export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>; //ほしいものを選択
type SmallProfile = Omit<DetailedProfile, 'height'>; //除外するものを選択

type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>;
type MySmallProfile = MyOmit;
