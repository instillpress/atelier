import { ScriptKind } from './script-kind';

export interface Script {
  getScript(): ScriptKind;
  setScript(script: ScriptKind);
}
