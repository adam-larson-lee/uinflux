import { List } from './point-action-interfaces';
import { LIST } from './point-action-types';

export function list(result: unknown[] | null): List {
  return {
    type: LIST,
    result,
  };
};