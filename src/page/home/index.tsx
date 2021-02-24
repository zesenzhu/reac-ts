/*
 * @Author: zhuzesen
 * @LastEditors: zhuzesen
 * @Date: 2021-02-24 20:19:12
 * @LastEditTime: 2021-02-24 21:47:33
 * @Description: 祝泽森
 * @FilePath: \TypeScript\react-ts\src\page\home\index.tsx
 */
import React, {  forwardRef, useState, useCallback } from "react";
import {  Drawer,  NavBar, Icon } from 'antd-mobile';
interface Props {
  children?: React.ReactNode
}

const Home: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (props: Props, ref) => {
  // enum testEnum {
  //   a = 10, b, c, d
  // }
  const [Open, setOpen] = useState(false);
  const onOpenChange = useCallback(
    () => {

      setOpen(pre => {
        console.log(pre)
        return !pre})
    },
    [Open],
  )
  return <div ><NavBar icon={<Icon onClick={onOpenChange} type="ellipsis" />} onLeftClick={onOpenChange}>Basic</NavBar>
    <Drawer
      className="my-drawer"
      style={{ minHeight: document.documentElement.clientHeight }}
      enableDragHandle
      contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
      sidebar={<div style={{height:'100%',width:'100%'}}></div>}
      open={Open}
      onOpenChange={onOpenChange}
    >
      Click upper-left corner
  </Drawer></div>
};

export default forwardRef(Home)
