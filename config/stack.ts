export const Colors: Record<string, string> = {
  // Languages
  go: '#00ADD8',
  python: '#4B8BBE',
  typescript: '#234A84',
  javascript: '#F7DF1E',

  // Frontend
  react: '#61DAF6',
  nextjs: '#000000',

  // Backend
  graphql: '#E535AB',
  node: '#68A063',
  django: '#092E20',

  // Tools, Libs
  babel: '#F5DB53',
  redux: '#764ABC',

  // Mobile
  reactnative: '#2D2D2D',
  android: '#56A036',
  ios: '#0C76E2',

  // Databases
  postgres: '#336791',
  mongo: '#4DB33D',
  redis: '#D82C20',
  webpack: '#8DD6F9',

  // Cloud
  aws: '#FF9900',
  gcp: '#4285F4',
  docker: '#0DB7Ed',
  kubernetes: '#326CE5',

  // Social
  linkedin: '#0077B5',
  twitter: '#1DA1F2',
  email: '#D44638',

  // Misc.
  testing: '#049C64',
  devops: '#059F00',
};

export enum Stack {
  // Languages
  go,
  typescript,
  javascript,
  python,

  // Frontend
  react,
  reactnative,

  // Backend
  graphql,
  node,
  django,

  // Cloud
  aws,
  gcp,
  kubernetes,

  // Databases
  redis,
  postgres,
  mongo,
}

export const WorkStack = [
  Stack.typescript,
  Stack.go,
  Stack.kubernetes,
  Stack.react,
  Stack.reactnative,
  Stack.graphql,
  Stack.aws,
  Stack.gcp,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.go]: {
    value: 'Go',
    color: Colors.go,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.reactnative]: {
    value: 'React Native',
    color: Colors.reactnative,
  },
  [Stack.graphql]: {
    value: 'GraphQL',
    color: Colors.graphql,
  },
  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },
  [Stack.kubernetes]: {
    value: 'Kubernetes',
    color: Colors.kubernetes,
  },
  [Stack.gcp]: {
    value: 'Google Cloud',
    color: Colors.gcp,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },
  [Stack.django]: {
    value: 'Django',
    color: Colors.django,
  },
  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },
  [Stack.redis]: {
    value: 'Redis',
    color: Colors.redis,
  },
  [Stack.mongo]: {},
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
};
