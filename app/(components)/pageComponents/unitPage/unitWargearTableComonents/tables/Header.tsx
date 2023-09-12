export default function Header(props: any) {
  return (
    <div
      className={
        "bg-neutral-800 text-neutral-50 text-center text-2xl tracking-widest font-bold rounded-md p-2.5 drop-shadow-md"
      }
    >
      {decodeURI(props.unit)}
    </div>
  );
}
