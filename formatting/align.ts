import { AlignKind } from "./align-kind";

export interface Align {
  getAlign(): AlignKind;
  setAlign(align: AlignKind);
}
