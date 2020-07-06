import { LIST } from './point-action-types';

export interface List {
    type: typeof LIST,
    result: unknown[] | null
};

type PointAction = List

export default PointAction;
