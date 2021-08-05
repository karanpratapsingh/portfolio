export const TagColor: Record<string, string> = {
  react: '#61DAF6',
  nextjs: '#000000',
  go: '#00ADD8',
  testing: '#049c64',
  reactnative: '#2D2D2D',
  redux: '#764ABC',
  node: '#68A063',
  javascript: '#F7DF1E',
  typescript: '#234A84',
  docker: '#0db7ed',
  kubernetes: '#326ce5',
  babel: '#f5db53',
  devops: '#0db7ed',
  android: '#56a036',
  ios: '#0c76e2',
  redis: '#D82C20',
  webpack: '#8dd6f9',
  aws: '#FF9900',
};

export enum Stack {
  ts,
  js,
  react,
  graphql,
  aws,
  firebase,
  redux,
  python,
  node,
  arango,
}

export const StackAssets: Record<Stack, string> = {
  [Stack.ts]:
    'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Fts-logo.png?alt=media&token=e0fe962b-956b-4612-9746-676e8798a0dc',
  [Stack.js]:
    'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Fjs-logo.png?alt=media&token=557f5a69-0aeb-487c-8b61-44e70ba45289',
  [Stack.react]:
    'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Freact-logo.png?alt=media&token=ef8f2d23-b005-400b-8677-d7b1165023da',
  [Stack.graphql]:
    'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Fgraphql-logo.png?alt=media&token=2842844e-a4a9-4318-8043-b246624fa7a4',
  [Stack.aws]:
    'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Faws-logo1.png?alt=media&token=9aa0ec54-be22-437c-add7-a0eb184793a9',
  [Stack.firebase]:
    'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Ffirebase-logo.png?alt=media&token=8e099681-593c-45b5-a115-51b1c8c0c3e4',
  [Stack.redux]:
    'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Fredux-logo.png?alt=media&token=c6c182b4-661b-4b3f-a4b4-1ed0ffce0418',
  [Stack.python]:
    'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Fpython-logo.png?alt=media&token=7dc0f28e-0f00-40bb-aa1f-50b281cc1ef7',
  [Stack.node]:
    'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Fnodejs-logo.png?alt=media&token=f8728d3d-ca94-4e31-addf-44a45cc9cfaa',
  [Stack.arango]:
    'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Farango-logo.png?alt=media&token=e64711b5-c00e-445d-b8b9-8b6654edb83e',
};
