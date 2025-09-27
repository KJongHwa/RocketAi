import { SaJuData } from "../types/SaJuData.type";

export const SaJuMockData: SaJuData = {
  meta: {
    firstName: "김",
    lastName: "종화",
    birth: "1996-07-24 05:30",
  },
  columns: [
    {
      label: "時",
      tenStar: { kr: "상관", cn: "傷官" },
      heavenlyStem: { kr: "임", cn: "壬", yinYang: "陽水" },
      earthlyBranch: { kr: "인", cn: "寅", yinYang: "陽木" },
      branchTenStar: { kr: "비견", cn: "比肩" },
      twelveFortune: { kr: "사", cn: "死" },
      twelveGodKill: { kr: "겁살", cn: "劫殺" },
      noblePeople: null,
    },
    {
      label: "日",
      tenStar: { kr: "비견", cn: "比肩" },
      heavenlyStem: { kr: "정", cn: "丁", yinYang: "陰火" },
      earthlyBranch: { kr: "사", cn: "巳", yinYang: "陰火" },
      branchTenStar: { kr: "겁재", cn: "劫財" },
      twelveFortune: { kr: "제왕", cn: "帝旺" },
      twelveGodKill: { kr: "지살", cn: "地殺" },
      noblePeople: null,
    },
    {
      label: "月",
      tenStar: { kr: "상관", cn: "傷官" },
      heavenlyStem: { kr: "계", cn: "癸", yinYang: "陰水" },
      earthlyBranch: { kr: "해", cn: "亥", yinYang: "陰水" },
      branchTenStar: { kr: "식신", cn: "食神" },
      twelveFortune: { kr: "태", cn: "胎" },
      twelveGodKill: { kr: "역마살", cn: "驛馬殺" },
      noblePeople: [{ kr: "천을귀인", cn: "天乙" }],
    },
    {
      label: "年",
      tenStar: { kr: "상관", cn: "傷官" },
      heavenlyStem: { kr: "계", cn: "癸", yinYang: "陰水" },
      earthlyBranch: { kr: "유", cn: "酉", yinYang: "陰金" },
      branchTenStar: { kr: "편재", cn: "偏財" },
      twelveFortune: { kr: "장생", cn: "長生" },
      twelveGodKill: { kr: "장성살", cn: "將星殺" },
      noblePeople: [
        { kr: "천을귀인", cn: "天乙" },
        { kr: "태극귀인", cn: "太極" },
        { kr: "문창귀인", cn: "文昌" },
      ],
    },
  ],
};
