import powerHex from "@/public/powerHex.png";
import Image from "next/image";
export default function PowerLevel(props: any) {
  const powerLevel = props.powerLevel;
  return (
    <div className="flex">
      <Image src={powerHex} alt="power level hex" />
      <div
        //   className={
        //     powerLevel >= 10
        //       ? "relative right-[47px] top-1"
        //       : "relative right-[38px] top-1"
        //   }
        // >
        className={
          powerLevel >= 150
            ? "relative  text-lg right-[50px] top-1"
            : powerLevel >= 10
            ? "relative right-[47px] top-1"
            : "relative right-[38px] top-1"
        }
      >
        {powerLevel}
      </div>
    </div>
  );
}
