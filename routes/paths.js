import qs from 'query-string';

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/account";
const ROOTS_HOMEPAGE = "/";
const ROOTS_DASHBOARD = "/dashboard";

export const PATH_PAGE = {
  page403: "/403",
  page404: "/404",
  page500: "/500",
};

export const PATH_AUTH = {
  root: ROOTS_HOMEPAGE,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
  registerInfo: path(ROOTS_AUTH, '/register-info'),
  verifyOtp: path(ROOTS_AUTH, "/verify-otp"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
  newPassword: path(ROOTS_AUTH, "/new-password"),
  confirm: path(ROOTS_AUTH, '/confirm'),
};

export const PATH_JOB = {
  root: { href: '/jobs', /*as: '/jobs'*/ },
  searchPath: '/jobs/search',
  search: (params = {}) => ({
    href: '/jobs/search' + '?' + qs.stringify(params),
    // as: '/jobs/search' + '?' + qs.stringify(params), // TODO
  }),
  detail: (slug) => ({
    href: '/jobs/' + slug,
    // as: '/jobs/' + slug, // TODO
  }),
  compare: '/jobs/compare',
};

export const PATH_PROFILE = {
  root: '/profile',
  examination: '/profile/examination',
  notification: '/profile/notification',
}

export const PATH_ORGANIZATION = {
  root: { href: '/organizations' },
  searchPath: '/organizations/search',
  search: (params = {}) => ({
    href: '/organizations/search' + '?' + qs.stringify(params),
  }),
  detail: (slug) => ({
    href: '/organizations/' + slug,
  }),
}

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  dashboard: path(ROOTS_DASHBOARD, "homepage"),

  profile: {
    root: path(ROOTS_DASHBOARD, "profile/"),
    view: (id) => path(ROOTS_DASHBOARD, `profile/${id}`),
  },
  notification: path(ROOTS_DASHBOARD, "notification"),
  task: {
    root: path(ROOTS_DASHBOARD, "task"),
  },
  jobs: {
    root: path(ROOTS_DASHBOARD, "jobs"),
    new: path(ROOTS_DASHBOARD, "jobs/new"),
  },
  jobDetail: {
    root: path(ROOTS_DASHBOARD, "job-detail"),
    view: (id) => path(ROOTS_DASHBOARD, `job-detail/${id}`),
  },
  clients: {
    root: path(ROOTS_DASHBOARD, "clients"),
  },
  candidates: path(ROOTS_DASHBOARD, "candidates"),
  users: {
    root: path(ROOTS_DASHBOARD, "users"),
    account: path(ROOTS_DASHBOARD, "users/account"),
  },
  interview: {
    root: path(ROOTS_DASHBOARD, "interview"),
  },
  board: {
    root: path(ROOTS_DASHBOARD, "board"),
    view: (cardId) => path(ROOTS_DASHBOARD, `board?cardId=${cardId}`),
  },
  recruiter: {
    root: path(ROOTS_DASHBOARD, "recruiter"),
  },
  report: {
    root: path(ROOTS_DASHBOARD, "report"),
    root2: path(ROOTS_DASHBOARD, "report/result"),
    root3: path(ROOTS_DASHBOARD, "report/conversion"),
    root4: path(ROOTS_DASHBOARD, "report/overtime"),
    root5: path(ROOTS_DASHBOARD, "report/tracking"),
  },
  blogs: {
    root: path(ROOTS_DASHBOARD, "blogs"),
  },

  hashtag: {
    root: path(ROOTS_DASHBOARD, "hashtag"),
  },
  companyinfor: {
    root: path(ROOTS_DASHBOARD, "companyinfor"),
    edit: path(ROOTS_DASHBOARD, "companyinfor/edit"),
  },
  report1: {
    root: path(ROOTS_DASHBOARD, "report1"),
  },
  report2: {
    root: path(ROOTS_DASHBOARD, "report2"),
  },
  report3: {
    root: path(ROOTS_DASHBOARD, "report3"),
  },
  report4: {
    root: path(ROOTS_DASHBOARD, "report4"),
  },
};
