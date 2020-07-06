import { List, Select } from './database-action-interfaces';
import { LIST, SELECT } from './database-action-types';

export function list(result: string[] | null): List {
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