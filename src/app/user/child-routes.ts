export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.module').then(m => m.ChartsModule),
    data: { icon: 'bar_chart', text: 'Charts' }
  },
  {
    path: 'tables',
    loadChildren: () =>
      import('./tables/tables.module').then(m => m.TablesModule),
    data: { icon: 'table_chart', text: 'Tables' }
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./forms/forms.module').then(
        m => m.FormModule
      ),
    data: { icon: 'code', text: 'Forms' }
  },

 
];
