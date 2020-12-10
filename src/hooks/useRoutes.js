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
    component: Authorization
  },
  {
    path: '/admin',
    component: AdminPage,
    requiredAuth: true
  },
  {
    path: '/:id/result',
    component: Result
  },
  {
    path: '/:id/:questionId',
    component: Question,
    exact: true
  },
  {
    path: '/:id',
    component: TestStart
  },
  {
    path: '/',
    component: TestList
  }
]

export const useRoute = () => {
  const isAuth = useAuth();
  
  return (
    <Switch>
      {routes.map((route) => {
        // Если требование к авторизации есть
        // и пользователь не авторизован, route c компонентом не выводится
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
