// 运行时配置
import './app.less';
import { RuntimeConfig } from '@umijs/max';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout:RuntimeConfig["layout"] = () => {
  return {
    layout: "top",
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    footerRender: () => (
      <div style={{color: "rgb(255 255 255 / 50%)", textAlign: "center", marginTop: "15px"}}>
        <p>欢迎来到林音的个人网站!</p>
      </div>
    )
  };
};
