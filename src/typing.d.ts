/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2019-11-08 22:09:12
 * @LastEditors: zb
 * @LastEditTime: 2019-11-08 22:09:50
 */
interface WebpackRequire {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
  }
  
  interface NodeRequire extends WebpackRequire {}
  
  declare var require: NodeRequire;