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
    path: 'employeeTable',
    loadChildren: () =>
      import('./employeeTable/employeeTable.module').then(m => m.EmployeeTableModule),
    data: { icon: 'table_chart', text: 'EmployeeTable' }
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./employeeDetails/employeeDetails.module').then(
        m => m.EmployeeDetailsModule
      ),
    data: { icon: 'assignment', text: 'EmployeeDetails' }
  },
];
