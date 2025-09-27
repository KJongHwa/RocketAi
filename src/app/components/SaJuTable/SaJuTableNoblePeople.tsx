import { SaJuColumn } from "@/app/types/SaJuData.type";

interface SaJuTableNoblePeopleProps {
  titleCn: string;
  titleKr: string;
  columns: SaJuColumn[];
}

export default function SaJuTableNoblePeople({
  titleCn,
  titleKr,
  columns,
}: SaJuTableNoblePeopleProps) {
  return (
    <tr className="border-[#000000] border-r-[1.05px] border-t-[1.05px] border-b-[1.05px]">
      <td className="text-center border-[#000000] border-r-[1.05px] py-[clamp(1px,2vw,8px)]">
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
      {columns.map((col, index) => (
        <td
          key={index}
          className="text-center border-x-[0.49px] border-[#8A8A8A] py-[clamp(1px,2vw,8px)]"
        >
          {col.noblePeople === null ? (
            <p
              className="text-[#000000] font-bold"
              style={{
                fontSize: "clamp(1px, 2.5vw, 10px)",
                lineHeight: "clamp(1px, 2.5vw, 10px)",
              }}
            >
              (없음)
            </p>
          ) : (
            <div className="flex flex-col gap-1">
              {col.noblePeople.map((arr, index) => (
                <div key={index}>
                  <p
                    className="text-[#000000] font-normal"
                    style={{
                      fontSize: "clamp(1px, 4vw, 16px)",
                      lineHeight: "clamp(1px, 5vw, 20px)",
                    }}
                  >
                    {arr.cn}
                  </p>
                  <p
                    className="text-[#000000] font-bold"
                    style={{
                      fontSize: "clamp(1px, 2.5vw, 10px)",
                      lineHeight: "clamp(1px, 2.5vw, 10px)",
                    }}
                  >
                    ({arr.kr})
                  </p>
                </div>
              ))}
            </div>
          )}
        </td>
      ))}
    </tr>
  );
}
