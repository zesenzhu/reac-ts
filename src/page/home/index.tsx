/*
 * @Author: zhuzesen
 * @LastEditors: zhuzesen
 * @Date: 2021-02-24 20:19:12
 * @LastEditTime: 2021-02-24 21:47:33
 * @Description: 祝泽森
 * @FilePath: \TypeScript\react-ts\src\page\home\index.tsx
 */
import React, { memo, forwardRef, } from "react";
interface Props {
  children?: React.ReactNode
}

const Home: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (props: Props, ref) => {
  enum testEnum {
    a=10, b, c, d
  }
console.log(testEnum)
  return <p>这是ts</p>;
};

export default forwardRef(Home)
