import { SaJuData } from "../../types/SaJuData.type";
import SaJuTableContainer from "./SaJuTableContainer";
import SaJuTableFiveElement from "./SaJuTableFiveElement";
import SaJuTableHeadLine from "./SaJuTableHeadLine";
import SaJuTableNoblePeople from "./SaJuTableNoblePeople";
import SaJuTableTenStar from "./SaJuTableTenStar";
import SaJuTableThead from "./SaJuTableThead";
import SaJuTableTwelve from "./SaJuTableTwelve";

interface SaJuTableProps {
  data: SaJuData;
}

export default function SaJuTable({ data }: SaJuTableProps) {
  return (
    <SaJuTableContainer>
      <SaJuTableHeadLine
        firstName={data.meta.firstName}
        lastName={data.meta.lastName}
        birth={data.meta.birth}
      />
      <table className="mb-[clamp(2px,10vw,40px)]">
        <SaJuTableThead columns={data.columns} />
        <tbody>
          <SaJuTableTenStar
            titleCn="十星"
            titleKr="십성"
            columns={data.columns}
            type="tenStar"
          />
          <SaJuTableFiveElement
            titleCn="天干"
            titleKr="천간"
            columns={data.columns}
            type="heavenlyStem"
          />
          <SaJuTableFiveElement
            titleCn="地支"
            titleKr="지지"
            columns={data.columns}
            type="earthlyBranch"
          />
          <SaJuTableTenStar
            titleCn="十星"
            titleKr="십성"
            columns={data.columns}
            type="branchTenStar"
          />
          <SaJuTableTwelve
            titleCn="十二運星"
            titleKr="십이운성"
            columns={data.columns}
            type="twelveFortune"
          />
          <SaJuTableTwelve
            titleCn="十二神殺"
            titleKr="십이신살"
            columns={data.columns}
            type="twelveGodKill"
          />
          <SaJuTableNoblePeople
            titleCn="貴人"
            titleKr="귀인"
            columns={data.columns}
          />
        </tbody>
      </table>
    </SaJuTableContainer>
  );
}
