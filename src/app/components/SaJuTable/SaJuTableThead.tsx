import { SaJuColumn } from "@/app/types/SaJuData.type";

interface SaJuTableTheadProps {
  columns: SaJuColumn[];
}

export default function SaJuTableThead({ columns }: SaJuTableTheadProps) {
  return (
    <thead>
      <tr className="border-[#000000] border-r-[1.05px] ">
        <th className="border-[#000000] border-r-[1.05px]" />
        {columns.map((col, index) => (
          <th
            key={index}
            className="text-[#000000] font-normal border-x-[0.49px] border-[#8A8A8A] pt-[clamp(1px,2vw,8px)] pb-[clamp(1px,2vw,8px)]"
            style={{
              fontSize: "clamp(1px, 6vw, 24px)",
            }}
          >
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
