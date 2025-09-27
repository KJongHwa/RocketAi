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
