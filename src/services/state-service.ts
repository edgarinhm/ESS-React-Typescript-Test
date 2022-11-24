import { IState } from "../interfaces/state";
import { option } from "../components/Select/Select";
import HttpClient from "../http-client/http-client";

class StateService {
  static async getStates(filter?: string) {
    const stateData: IState[] = await HttpClient.get("data/State.json");
    const stateOptions: option[] = stateData
      .filter((state: IState) => state.country_id === filter)
      .map((state: IState) => {
        return { value: state.state_id, label: state.state_name };
      });
    return stateOptions;
  }
}

export default StateService;
