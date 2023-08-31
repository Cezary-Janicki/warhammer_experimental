import stripHTML from "../../parseData/stripHTML";
export default function PriestPsyker(props) {
  const datasheets = props.datasheets;
  return (
    <div>
      {datasheets[0]?.priest != null ? (
        <div
          className={
            "flex flex-row gap-1 bg-neutral-50 border border-neutral-300 rounded-md p-2.5 "
          }
        >
          <p className={"basis-1/5 p-2 font-semibold"}>Priest</p>
          <div className={"break-inside-avoid-column basis-4/5"}>
            <div>{stripHTML(datasheets[0]?.priest)}</div>
          </div>
        </div>
      ) : datasheets[0]?.psyker != null ? (
        <div
          className={
            "flex flex-row gap-1 bg-neutral-50 border border-neutral-300 rounded-md p-2.5 "
          }
        >
          <p className={"basis-1/5 p-2 font-semibold"}>Psyker</p>
          <div className={" break-inside-avoid-column basis-4/5"}>
            <div>{stripHTML(datasheets[0]?.psyker)}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
