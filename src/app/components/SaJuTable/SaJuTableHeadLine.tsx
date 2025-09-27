import { SaJuMeta } from "@/app/types/SaJuData.type";
import { koreaYearMonthDay } from "@/app/utils/dateChange";

type SaJuTableHeadLineProps = SaJuMeta;

export default function SaJuTableHeadLine({
  firstName,
  lastName,
  birth,
}: SaJuTableHeadLineProps) {
  return (
    <div className="flex flex-col justify-center items-center mt-[clamp(2px,10vw,40px)] mb-[clamp(2px,5vw,20px)]">
      <h1
        className="text-base/4 text-[#424242] font-normal"
        style={{
          fontSize: "clamp(1px, 4.5vw, 18px)",
          lineHeight: "clamp(1px, 4.5vw, 18px)",
        }}
      >
        {firstName}
        {lastName}님의 사주
      </h1>
      <p
        className="text-[#424242] font-bold mt-[clamp(2px,3vw,12px)]"
        style={{
          fontSize: "clamp(1px, 5.5vw, 22px)",
          lineHeight: "clamp(1px, 5.5vw, 22px)",
        }}
      >
        {koreaYearMonthDay(birth)}
      </p>
    </div>
  );
}
