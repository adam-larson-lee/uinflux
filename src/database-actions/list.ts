import DatabaseAction from "./database-action";
import LIST from "./database-action-type";

function list(result: Array<string> | null): DatabaseAction {
  return {
    type: LIST,
    result,
  };
}

export default list;