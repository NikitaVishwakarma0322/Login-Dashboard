const menu = [
  {
    title: "Dashboard",
    icon: <i class="fa fa-th" />,
    path: "/dashboard",
  },
  {
    title: "Job Desk",
    icon: <i class="fa fa-briefcase" />,
    path: "/job-desk",
  },
  {
    title: "Employee",
    icon: <i class="fa fa-users" />,
    childrens: [
      {
        title: "All Employee",
        path: "/all-employee",
      },
      {
        title: "Designation",
        path: "/designation",
      },
      {
        title: "Employee Status",
        path: "/employee-status",
      },
    ],
  },
  {
    title: "Leave",
    icon: <i class="fa fa-envelope-o" />,
    childrens: [
      {
        title: "Leave Status",
        path: "/leave-status",
      },
      {
        title: "Leave Request",
        path: "/leave-request",
      },
    ],
  },
  {
    title: "Attendance",
    icon: <i class="fa fa-address-book" />,
    childrens: [
      {
        title: "Daily Log",
        path: "/daily-log",
      },
      {
        title: "Attendance Req",
        path: "/attendance-req",
      },
      {
        title: "Summary",
        path: "/summary",
      },
    ],
  },
  {
    title: "Payroll",
    icon: <i class="fa fa-credit-card-alt" />,
    childrens: [
      {
        title: "Salary Gen",
        path: "/salary-generation",
      },
      {
        title: "Payrun",
        path: "/payrun",
      },
      {
        title: "Pay Slips",
        path: "/pay-slips",
      },
    ],
  },
  // {
  //   title: "Report Bug",
  //   icon: <FaCommentAlt />,
  //   path: "/contact-us",
  // },
];

export default menu;
