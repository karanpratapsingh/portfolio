export const StackColor: Record<string, string> = {
  // Languages
  go: '#00ADD8',
  python: '#4B8BBE',
  typescript: '#234A84',
  javascript: '#F7DF1E',

  // Frontend
  react: '#61DAF6',
  nextjs: '#000000',

  // Backend
  graphql: '#e535ab',
  node: '#68A063',
  django: '#092e20',

  // Tools, Libs
  babel: '#f5db53',
  redux: '#764ABC',

  // Mobile
  reactnative: '#2D2D2D',
  android: '#56a036',
  ios: '#0c76e2',

  // Databases
  postgres: '#336791',
  mongo: '#4DB33D',
  redis: '#D82C20',
  webpack: '#8dd6f9',

  // Cloud
  aws: '#FF9900',
  gcp: '#4285F4',
  docker: '#0db7ed',
  kubernetes: '#326ce5',

  // Misc.
  testing: '#049c64',
  devops: '#059f00',
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
    color: StackColor.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: StackColor.javascript,
  },
  [Stack.go]: {
    value: 'Go',
    color: StackColor.go,
  },
  [Stack.react]: {
    value: 'React',
    color: StackColor.react,
  },
  [Stack.reactnative]: {
    value: 'React Native',
    color: StackColor.reactnative,
  },
  [Stack.graphql]: {
    value: 'GraphQL',
    color: StackColor.graphql,
  },
  [Stack.aws]: {
    value: 'AWS',
    color: StackColor.aws,
  },
  [Stack.kubernetes]: {
    value: 'Kubernetes',
    color: StackColor.kubernetes,
  },
  [Stack.gcp]: {
    value: 'Google Cloud',
    color: StackColor.gcp,
  },
  [Stack.python]: {
    value: 'Python',
    color: StackColor.python,
  },
  [Stack.node]: {
    value: 'Node',
    color: StackColor.node,
  },
  [Stack.django]: {
    value: 'Django',
    color: StackColor.django,
  },
  [Stack.postgres]: {
    value: 'Postgres',
    color: StackColor.postgres,
  },
  [Stack.redis]: {
    value: 'Redis',
    color: StackColor.redis,
  },
  [Stack.mongo]: {},
  [Stack.mongo]: {
    value: 'MongoDB',
    color: StackColor.mongo,
  },
};
