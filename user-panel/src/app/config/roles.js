import AdminDashboard from '../components/AdminPanel/Dashboard';
import DirectorDashboard from '../components/CastingDirectorPanel/Dashboard';

export default {
  //role name as a key.
  director: {
    routes: [
      {
        component: AdminDashboard,
        url: '/dashboard-director',
      },
    ],
  },
  admin: {
    routes: [
      {
        component: DirectorDashboard,
        url: '/dashboard-admin',
      },
    ],
  },
  common: {
    routes: [
      {
        component: 'CommonRoute',
        url: '/common-component',
      },
    ],
  },
};
