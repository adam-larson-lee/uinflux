import { LIST, SELECT } from './measurement-action-types';

export interface List {
    type: typeof LIST,
    result: Array<string> | null
};

export interface Select {
    type: typeof SELECT,
    name: string
};

type DatabaseAction = List | Select;

export default DatabaseAction;
