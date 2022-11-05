import { Big } from "big.js";

export const tuple = <T extends string[]>(...args: T) => args;

export const fillZero = (val: number, length: number = 3) => {
  if (typeof val !== "number") {
    return val;
  }
  return (Array(length).join("0") + val).slice(-length);
};

/**
 * json数据转换
 * @param data json字符串
 * @returns [any]
 */
export function getJSONToParse(data: string) {
  let resData = null;
  try {
    resData = JSON.parse(data);
  } catch (error) {}
  return resData;
}

type TNGBigArgs = number[] | NGBig[];

export class NGBig {
  big: Big;
  constructor(number: number) {
    this.big = new Big(number);
  }
  /**
   * @function plus 加法
   */
  plus(...args: TNGBigArgs) {
    const arg = [...args];
    for (let i of args) {
      this.big =
        typeof i === "number" ? this.big.plus(i) : this.big.plus(i.big);
    }
    return this;
  }
  /**
   * @function minus 减法
   */
  minus(...args: TNGBigArgs) {
    for (let i of args) {
      this.big =
        typeof i === "number" ? this.big.minus(i) : this.big.minus(i.big);
    }
    return this;
  }
  /**
   * @function multipy 乘法
   */
  multipy(...args: TNGBigArgs) {
    for (let i of args) {
      this.big =
        typeof i === "number" ? this.big.times(i) : this.big.times(i.big);
    }
    return this;
  }
  /**
   * @function div 除法
   */
  div(...args: TNGBigArgs) {
    for (let i of args) {
      this.big = typeof i === "number" ? this.big.div(i) : this.big.div(i.big);
    }
    return this;
  }
  /**
   * @function mod 模运算
   */
  mod(...args: TNGBigArgs) {
    for (let i of args) {
      this.big = typeof i === "number" ? this.big.mod(i) : this.big.mod(i.big);
    }
    return this;
  }
  /**
   * @function getNumber 获取真实值
   * @return number
   */
  getNumber() {
    return Number(this.big);
  }
  /**
   * @function getString 获取真实值
   * @return number
   */
  getString() {
    return this.big.toString();
  }
}

export const useBigNumber = (number: number) => {
  return new NGBig(number);
};
