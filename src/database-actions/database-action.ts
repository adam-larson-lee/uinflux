import LIST from "./database-action-type";

interface DatabaseAction {
    type: typeof LIST,
    result: Array<string> | null
}

export default DatabaseAction