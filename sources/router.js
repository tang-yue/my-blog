// dva  router.js 比较好的写法
import React from 'react';
import dynamic from 'dva/dynamic';
import { routerRedux, Route, Switch, Redirect } from 'dva/router';

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
  const error = dynamic({
    app,
    component: () => import('./routes/system/error/index'),
  });
   
  // >>>>>>>>>>>>>>>路由数组 START <<<<<<<<<<<<<<<
  let routes = [
    {
      path: '/table-list',
      models: () => [import('./models/table-list.index.js')],
      component: () => import('./routes/table-list.index.js'),
    },
  ];
  // >>>>>>>>>>>>>>>路由数组 END <<<<<<<<<<<<<<<

  // 将数据源转换为 <Router > 标签的形式........
  return (
    <ConnectedRouter history={history}>
      <Page>
        <Switch>
          <Route path="/" exact render={() => (<Redirect to="/dashboard" />)} />
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route
                exact
                key={key}
                path={path}
                component={dynamic({ app, ...dynamics })}
              />
            ))
          }
          <Route component={error} />
        </Switch>
      </Page>
    </ConnectedRouter>
  );
}

export default RouterConfig;
