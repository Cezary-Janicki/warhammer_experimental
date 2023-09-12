export default function countRoles(units: any, faction: any) {
  //   const units = props.units;
  //   const faction = props.faction;
  let result = Array.isArray(units)
    ? units.reduce(function (
        acc: { [x: string]: any },
        val: { faction_id: any; role: string | number }
      ) {
        if (faction == val.faction_id) {
          acc[val.role] = (acc[val.role] || 0) + 1;
        }
        return acc;
      },
      {})
    : 0;
  return Object.keys(result);
}
