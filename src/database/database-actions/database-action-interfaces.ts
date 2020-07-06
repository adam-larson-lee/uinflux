import { LIST, SELECT } from './database-action-types';

export interface List {
    type: typeof LIST,
    result: string[] | null
};

export interface Select {
    type: typeof SELECT,
    name: string
};

type DatabaseAction = List | Select;

export default DatabaseAction;
