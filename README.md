# 🎯 로켓에이아이 운세박사 코딩테스트

> 로켓에이아이 회사의 자격요건 중 하나인 운세박사 Figma를 참고하여 Next.js와 Tailwind를 활용한 과제

<br>

## ⚙️ 기술 스택

<table align="center">
  <thead>
    <tr align="center">
      <th style="width: 20%; text-align: center;"> Framework </th>
      <th style="width: 20%; text-align: center;"> Language </th>
      <th style="width: 20%; text-align: center;"> UI </th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td style="text-align: center;">Next.js 14 (App Router)</td>
      <td style="text-align: center;">TypeScript</td>
      <td style="text-align: center;">Tailwind-CSS</td>
    </tr>
  </tbody>
</table>

## 📐 핵심 코드

```
// src/app/components/SaJuTable/SaJuTableTenStar.tsx
...
<td className="text-center border-[#000000] border-r-[1.05px] pt-[clamp(1px,2vw,8px)] pb-[clamp(1px,2vw,8px)]">
  <p className="text-[#000000] font-normal"
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
...
```

- width 크기가 작아질수록 padding과 fontSize 등을 반응형에 맞게 구현하기 위해 clamp 메서드 활용

```
// src/app/utils/fiveElements.Colors.ts

export const fiveElementColors: Record<
  string,
  { background: string; text: string; border: string }
> = {
  木: { background: "#18868C", text: "#FFFFFF", border: "#18868C" },
  火: { background: "#C23030", text: "#FFFFFF", border: "#C23030" },
  土: { background: "#D2B48C", text: "#000000", border: "#D2B48C" },
  金: { background: "#F9F9F9", text: "#000000", border: "#000000" },
  水: { background: "#2F2F2F", text: "#FFFFFF", border: "#2F2F2F" },
};

export function getElementColors(yinYang: string) {
  const element = yinYang.slice(-1);
  return fiveElementColors[element];
}
```

<br>

```
// src/app/components/SaJuTable/SaJuTableFiveElement.tsx
...
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
...
```

- 사주 테이블 중, 天干(천간)과 地支(지지) 부분이 오행의 구분에 따라 UI의 색이 바뀌는 것 같아 오행의 뒷글자를 추출하여 해당하는 스타일을 자동으로 입히도록 구현
