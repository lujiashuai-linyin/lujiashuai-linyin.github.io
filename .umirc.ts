import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    configProvider: {"theme": {"token": {"colorPrimary": "#00B96B", "borderRadius": 6}}},
    style: "less",
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '林音三弦',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      layout: false,
    },
    {
      name: '个人简历',
      path: '/profile-notes',
      component: './ProfileNotes',
    },
    {
        name: '项目列表',
        path: '/project-list',
        component: './ProjectList',
    },
  ],
  npmClient: 'pnpm',
});

