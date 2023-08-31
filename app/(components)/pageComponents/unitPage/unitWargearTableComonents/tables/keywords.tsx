export default function Keywords(props) {
  const unit_keywords = props.unit_keywords;
  const faction_keywords = props.faction_keywords;
  return (
    <div>
      {" "}
      {/* Unit keywords*/}
      {Object.keys(unit_keywords).length >= 1 ? (
        <div
          className={
            "flex flex-row gap-1 bg-neutral-50 border border-neutral-300 rounded-md p-2.5 "
          }
        >
          <p className={"basis-1/5 p-2 text-xl font-light "}>Keywords</p>

          {unit_keywords.map((keyword: any, index: number) => (
            <p
              key={keyword.keyword}
              className="font-semibold p-2 underline decoration-dotted"
            >
              {keyword.keyword}
            </p>
          ))}
        </div>
      ) : (
        <p></p>
      )}
      {/* Faction keywords*/}
      {Object.keys(faction_keywords).length >= 1 ? (
        <div
          className={
            "flex flex-row gap-1 bg-neutral-50 border border-neutral-300 rounded-md p-2.5 "
          }
        >
          <p className={"basis-1/5 p-2 text-xl font-light "}>
            Faction Keywords
          </p>

          {faction_keywords.map((keyword: any, index: number) => (
            <p
              key={keyword.keyword}
              className="font-semibold p-2 underline decoration-dotted"
            >
              {keyword.keyword}
            </p>
          ))}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}
