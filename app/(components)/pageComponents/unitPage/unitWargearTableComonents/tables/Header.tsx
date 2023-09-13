import PowerLevel from "./powerLevel";
export default function Header(props: any) {
  return (
    <>
      <div
        className={
          "grid grid-cols-5 bg-neutral-800 text-neutral-50 text-center text-2xl tracking-widest font-bold rounded-md p-2.5 drop-shadow-md"
        }
      >
        <div className="col-span-2">
          <PowerLevel powerLevel={props.datasheets[0].power_points} />
        </div>
        <div className="col-span-3 justify-self-start my-auto">
          {decodeURI(props.unit)}
        </div>
      </div>
    </>
  );
}
