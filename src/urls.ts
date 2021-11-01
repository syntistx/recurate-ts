export default {
  default: '/',

  // Auth Path
  login: '/login',
  signup: '/signup',
  forgotPassword: '/forgot-password',

  // Submission Path
  submissions: '/submissions',
  submissison: '/submissions/:id',
  submissionLink: (id:Number) => `/submissions/${id}`,

  // Dashboard Path
  dashboard: '/dashboard',

  // Billing Path
  billings: '/billings',

  // Templates Path
  templates: '/templates',

  // Shop PATH
  shops: '/shops',
  shop: '/shops/:id',
  shopLink: (id:Number) => `/shops/${id}`,

  // Hep PATH
  help: '/help',

  // Status
  status: '/status',
};
