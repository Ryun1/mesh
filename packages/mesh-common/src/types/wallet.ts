import { CIP30Extension } from "./cip30-extension";

export type Wallet = {
  id: string;
  name: string;
  icon: string;
  version: string;
  extensions: CIP30Extension[];
};
