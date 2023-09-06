export default function UnitStratagemHeader(props: any) {
  const stratagem = props.stratagem;
  const phases = props.phases;

  const beforeBattle = ["Before battle", "During deployment"];
  const anyTime = ["Any time", "Any of your phases", "Any phase"];
  const others = [
    "Enemy taking casualties",
    "Being targeted",
    "Taking casualties",
  ];
  const commandPhase = [
    "Command phase",
    "Enemy Command phase",
    "At the start of battle round",
    "At the start of your turn",
    "At the start of enemy turn",
    "End of your turn",
  ];
  const movementPhase = ["Movement phase", "Enemy Movement phase"];
  const psychicPhase = ["Enemy Psychic phase", "Psychic phase"];
  const shootingPhase = ["Shooting phase", "Enemy Shooting phase"];
  const chargeFightPhase = [
    "Charge phase",
    "Enemy Charge phase",
    "Enemy Fight phase",
    "Fight phase",
  ];
  const moralePhase = ["Enemy Morale phase", "Morale phase"];
  let stratPhase = phases.find(
    (item: { stratagem_id: any }) => item.stratagem_id == stratagem.id
  );
  if (beforeBattle.includes(stratPhase.phase)) {
    return (
      <li className=" bg-orange-950 p-1 rounded-lg">
        {stratagem.name}
        <span className="float-right block">{stratagem.cp_cost} CP</span>
      </li>
    );
  }
  if (anyTime.includes(stratPhase.phase)) {
    return (
      <li className=" bg-fuchsia-600 p-1 rounded-lg">
        {stratagem.name}
        <span className="float-right block">{stratagem.cp_cost} CP</span>
      </li>
    );
  }
  if (others.includes(stratPhase.phase)) {
    return (
      <li className=" bg-pink-950 p-1 rounded-lg">
        {stratagem.name}
        <span className="float-right block">{stratagem.cp_cost} CP</span>
      </li>
    );
  }
  if (commandPhase.includes(stratPhase.phase)) {
    return (
      <li className=" bg-stone-600 p-1 rounded-lg">
        {stratagem.name}
        <span className="float-right block">{stratagem.cp_cost} CP</span>
      </li>
    );
  }
  if (movementPhase.includes(stratPhase.phase)) {
    return (
      <li className=" bg-yellow-600 p-1 rounded-lg">
        {stratagem.name}
        <span className="float-right block">{stratagem.cp_cost} CP</span>
      </li>
    );
  }
  if (psychicPhase.includes(stratPhase.phase)) {
    return (
      <li className=" bg-blue-600 p-1 rounded-lg">
        {stratagem.name}
        <span className="float-right block">{stratagem.cp_cost} CP</span>
      </li>
    );
  }
  if (shootingPhase.includes(stratPhase.phase)) {
    return (
      <li className=" bg-green-600 p-1 rounded-lg">
        {stratagem.name}
        <span className="float-right block">{stratagem.cp_cost} CP</span>
      </li>
    );
  }
  if (chargeFightPhase.includes(stratPhase.phase)) {
    return (
      <li className=" bg-red-600 p-1 rounded-lg">
        {stratagem.name}
        <span className="float-right block">{stratagem.cp_cost} CP</span>
      </li>
    );
  }
  if (moralePhase.includes(stratPhase.phase)) {
    return (
      <li className=" bg-rose-600 p-1 rounded-lg">
        {stratagem.name}
        <span className="float-right block">{stratagem.cp_cost} CP</span>
      </li>
    );
  } else {
    return (
      <li className=" bg-stone-600 p-1 rounded-lg">
        {stratagem.name}
        <span className="float-right block">{stratagem.cp_cost} CP</span>
      </li>
    );
  }
  //   return (
  //     <li className=" bg-orange-900">
  //       {stratagem.name}
  //       <span className="float-right block">{stratagem.cp_cost} CP</span>
  //     </li>
  //   );
}

// strats grouped by phases {

//   'Enemy taking casualties': 27,
//   'Being targeted': 61,
//   'Taking casualties': 49,

//   'Before battle': 164,
//   'During deployment': 32,

//   'Any time': 4,
//   'Any of your phases': 1
//   'Any phase': 27,

//   'Command phase': 101,
//   'Enemy Command phase': 5,
//   'At the start of battle round': 36,
//   'At the start of your turn': 4,
//   'At the start of enemy turn': 1,
//   'End of your turn': 7,

//   'Movement phase': 183,
//   'Enemy Movement phase': 36,

//   'Enemy Psychic phase': 26,
//   'Psychic phase': 37,

//   'Shooting phase': 277,
//   'Enemy Shooting phase': 41,

//   'Charge phase': 77,
//   'Enemy Charge phase': 43,
//   'Enemy Fight phase': 282,
//   'Fight phase': 300,

//   'Enemy Morale phase': 2,
//   'Morale phase': 28,

// }
