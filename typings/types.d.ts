type test = {
  firstArgument: number;
  secondArgument: number;
};
type datasheets = {
  id: number;
  name: string;
  link: string;
  faction_id: string;
  source_id: number;
  role: string;
  unit_composition: string;
  transport: null | string;
  power_points: number;
  priest: null | string;
  psyker: null | string;
  open_play_only: boolean;
  crusade_only: boolean;
  virtual: boolean;
  Cost: null | number;
  cost_per_unit: null | number;
  "": null;
};
type datasheets_options = {
  datasheet_id: string;
  line: string;
  button: string;
  description: string;
  is_index_wargear: boolean;
};
type keywords = {
  datasheet_id: string;
  keyword: string;
  model: string;
  is_faction_keyword: string;
};
type wargear = {};
type allWargear = {
  datasheet_id: string;
  line: string;
  wargear_id: string;
  cost: string;
  is_index_wargear: string;
  model: "";
  is_upgrade: "false";
  "": "";
};
