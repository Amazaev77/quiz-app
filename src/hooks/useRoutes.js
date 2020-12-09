import { Redirect, Route, Switch } from 'react-router-dom';
import AdminPage from '../components/AdminPage';
import Result from '../components/Result';
import Question from '../components/Question';
import TestStart from '../components/TestStart';
import TestList from '../components/TestList';
import Authorization from '../components/Authorization';
import { useAuth } from './useAuth';

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
  const isAuth = useAuth();
  
  return (
    <Switch>
      {routes.map((route) => {
        //todo 
        if (route.requiredAuth && !isAuth) {
          return null;
        }
        
        return (
          <Route 
            key={route.path}
            path={route.path} 
            exact={route.exact} 
            component={route.component}
          />
        )
      }
      )}
      <Redirect to='/' />
    </Switch>
  )
}
