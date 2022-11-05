export interface IItem {
  [key: string]: boolean;
}

export type TItem = string | IItem | number | undefined;

export const classNames = (...args: TItem[]) => {
  const nameArr: string[] = [];
  args?.forEach?.((i) => {
    if (["string", "number"].includes(typeof i)) {
      nameArr.push(`${i}`);
    } else if (typeof i === "object" && i !== null) {
      Object.keys(i)?.forEach?.((j) => {
        if (i[j]) {
          nameArr.push(`${j}`);
        }
      });
    }
  });

  return nameArr.join(" ");
};
