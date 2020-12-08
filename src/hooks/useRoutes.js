import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom';
import AdminPage from '../components/AdminPage';
import Result from '../components/Result';
import Question from '../components/Question';
import TestStart from '../components/TestStart';
import TestList from '../components/TestList';
import Authorization from '../components/Authorization';

const routes = [
  {
    path: '/auth',
    component: Authorization,
    exact: false,
    requiredAuth: false
  },
  {
    path: '/admin',
    component: AdminPage,
    exact: false,
    requiredAuth: true
  },
  {
    path: '/:id/result',
    component: Result,
    exact: false,
    requiredAuth: false
  },
  {
    path: '/:id/:questionId',
    component: Question,
    exact: true,
    requiredAuth: false
  },
  {
    path: '/:id',
    component: TestStart,
    exact: false,
    requiredAuth: false
  },
  {
    path: '/',
    component: TestList,
    exact: false,
    requiredAuth: false
  }
]


export const useRoute = () => {
  const token = useSelector(state => state.authorization.token);
  
  return (
    <Switch>
      {routes.map((route, index) => {
        if (route.requiredAuth && !token) {
          return null;
        }
          return (
            <Route 
              key={index}
              path={route.path} 
              exact={route.exact} 
              component={route.component}
            />
          )
      }
      )}
      <Redirect to='/' />
      <Route>404</Route>
    </Switch>
  )
}
