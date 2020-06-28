import { List, Select } from './measurement-action-interfaces';
import { LIST, SELECT } from './measurement-action-types';

export function list(result: Array<string> | null): List {
  return {
    type: LIST,
    result,
  };
};

export function select(name: string): Select {
  return {
    type: SELECT,
    name,
  };
};