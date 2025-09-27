import { SaJuColumn } from "@/app/types/SaJuData.type";
import { getElementColors } from "@/app/utils/fiveElementsColors";

interface SaJuTableFiveElementProps {
  titleCn: string;
  titleKr: string;
  columns: SaJuColumn[];
  type: "heavenlyStem" | "earthlyBranch";
}

export default function SaJuTableFiveElement({
  titleCn,
  titleKr,
  columns,
  type,
}: SaJuTableFiveElementProps) {
  return (
    <tr className="border-[#000000] border-r-[1.05px] border-t-[1.05px]">
      <td className="text-center border-[#000000] border-r-[1.05px]">
        <p
          className="text-[#000000] font-normal"
          style={{
            fontSize: "clamp(1px, 3vw, 12px)",
            lineHeight: "clamp(1px, 4vw, 16px)",
          }}
        >
          {titleCn}
        </p>
        <p
          className="text-[#000000] font-bold"
          style={{
            fontSize: "clamp(1px, 2vw, 8px)",
            lineHeight: "clamp(1px, 2vw, 8px)",
          }}
        >
          ({titleKr})
        </p>
      </td>
      {columns.map((col, index) => {
        const choice = col[type];
        const { background, text, border } = getElementColors(choice.yinYang);
        return (
          <td
            key={index}
            className="text-center border-x-[0.49px] border-[#8A8A8A]"
          >
            <div
              className="rounded-xl border px-[clamp(2px,4vw,16px)] py-[clamp(2px,1vw,4px)] m-[clamp(2px,1vw,4px)]"
              style={{
                backgroundColor: background,
                color: text,
                borderColor: border,
              }}
            >
              <p
                className="font-normal"
                style={{
                  fontSize: "clamp(1px, 2vw, 8px)",
                  lineHeight: "clamp(1px, 2vw, 8px)",
                }}
              >
                {choice.kr}
              </p>
              <p
                className="font-normal"
                style={{
                  fontSize: "clamp(1px, 6vw, 24px)",
                  lineHeight: "clamp(1px, 8vw, 32px)",
                }}
              >
                {choice.cn}
              </p>
              <p
                className="font-bold"
                style={{
                  fontSize: "clamp(1px, 2vw, 8px)",
                  lineHeight: "clamp(1px, 2vw, 8px)",
                }}
              >
                {choice.yinYang}
              </p>
            </div>
          </td>
        );
      })}
    </tr>
  );
}
