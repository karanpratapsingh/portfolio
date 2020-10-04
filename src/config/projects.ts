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
  arango
}

type TStackAsset = { [key in Stack]: string };

export const StackAssets: TStackAsset = {
  [Stack.ts]: 'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Fts-logo.png?alt=media&token=e0fe962b-956b-4612-9746-676e8798a0dc',
  [Stack.js]: 'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Fjs-logo.png?alt=media&token=557f5a69-0aeb-487c-8b61-44e70ba45289',
  [Stack.react]: 'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Freact-logo.png?alt=media&token=ef8f2d23-b005-400b-8677-d7b1165023da',
  [Stack.graphql]: 'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Fgraphql-logo.png?alt=media&token=2842844e-a4a9-4318-8043-b246624fa7a4',
  [Stack.aws]: 'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Faws-logo.png?alt=media&token=759af172-7473-4e44-a72a-61e2402dcab0',
  [Stack.firebase]: 'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Ffirebase-logo.png?alt=media&token=8e099681-593c-45b5-a115-51b1c8c0c3e4',
  [Stack.redux]: 'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Fredux-logo.png?alt=media&token=c6c182b4-661b-4b3f-a4b4-1ed0ffce0418',
  [Stack.python]: 'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Fpython-logo.png?alt=media&token=7dc0f28e-0f00-40bb-aa1f-50b281cc1ef7',
  [Stack.node]: 'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Fnodejs-logo.png?alt=media&token=f8728d3d-ca94-4e31-addf-44a45cc9cfaa',
  [Stack.arango]: 'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Farango-logo.png?alt=media&token=e64711b5-c00e-445d-b8b9-8b6654edb83e'
}

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface ISubProject {
  title: string;
  description: string;
  repository: string | null;
  deployment: Deployment,
}

export interface IProject {
  id: number;
  title: string;
  website: string;
  isOpenSource: boolean;
  banner: string;
  description: string;
  repository: string | null;
  stack: Stack[];
  deployment: {
    web?: string;
    android?: string;
    ios?: string;
  },
  subProjects: ISubProject[]
}

const projects: IProject[] = [
  {
    id: 0,
    title: 'Peapods',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fpeapods%2Fbanner.png?alt=media&token=20726ab4-332d-4cd7-afb1-2d1764deaf6b',
    website: 'https://peapods.com',
    isOpenSource: false,
    description: 'Upcoming social media platform for web 3.0',
    repository: null,
    stack: [Stack.js, Stack.react, Stack.graphql, Stack.aws, Stack.arango],
    deployment: {
      web: 'https://peapods.com',
    },
    subProjects: [],
  },
  {
    id: 1,
    title: 'Proximity',
    website: 'https://proximity-mobile.web.app',
    isOpenSource: true,
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fbanner.jpeg?alt=media&token=4d1d49e3-20ac-491e-8947-57a4e8520cc6',
    description: 'An open source social app that does not use your data against you',
    repository: 'https://github.com/karanpratapsingh/Proximity',
    stack: [Stack.ts, Stack.react, Stack.graphql, Stack.firebase],
    deployment: {
      web: 'https://proximity-mobile.web.app',
      android: 'https://play.google.com/store/apps/details?id=com.proximity.app',
      ios: 'https://apps.apple.com/us/app/proximity-app/id1489041006',
    },
    subProjects: [],
  },
  {
    id: 2,
    title: 'Velvet Live',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fbanner.png?alt=media&token=54a1f4e0-edfd-4e9e-bd2e-de4f6aff5049',
    website: 'https://boom.london',
    isOpenSource: false,
    description: 'An open source social app that does not use your data against you. The app effortlessly connects you to shoppers who need your advice and expertise when they’re shopping online. Assist and sell to customers the same way you would in-store, but now through chat and video straight from the app',
    repository: null,
    stack: [Stack.js, Stack.react, Stack.graphql, Stack.firebase],
    deployment: {
      web: 'https://boom.london',
      android: 'https://play.google.com/store/apps/details?id=app.boom.mobile',
    },
    subProjects: [],
  },
  {
    id: 3,
    title: 'Stewards',
    website: 'https://stewards.app',
    isOpenSource: false,
    repository: null,
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fbanner.png?alt=media&token=51bb3366-f4e8-4db1-9bfc-c8ebc8c63953',
    description: 'Mobile ordering solution with robot delivery. Stewards also provides variety of tools like staff application to manage orders, self checkout solution and admin dashboard',
    stack: [Stack.js, Stack.react, Stack.firebase],
    deployment: {
      web: 'https://stewards.app',
      android: 'https://play.google.com/store/apps/details?id=app.stewards.customer',
      ios: 'https://apps.apple.com/in/app/stewards-order-to-your-desk/id1479412118',
    },
    subProjects: [
      {
        title: 'Staff Management',
        repository: null,
        description: 'Staff app for stewards restaurant staff, easily update menu, product availability and take live orders from customers',
        deployment: {
          android: 'https://play.google.com/store/apps/details?id=app.stewards.staff&hl=en',
        },
      },
      {
        title: 'Admin Dashboard',
        repository: null,
        description: 'Staff administration app for stewards restaurant partners. This helps restaurant administrators to easily manage orders, receipts, tables, restaurant info etc.',
        deployment: {
          web: 'https://manage.stewards.app',
        },
      },
      {
        title: 'Self Checkout',
        repository: null,
        description: 'Stewards self checkout solution for customers who don\'t like waiting. Available on demand for iPad and tablets',
        deployment: {},
      }
    ]
  },
  {
    id: 4,
    title: 'Celebrify',
    isOpenSource: false,
    website: 'https://celebrify.in',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fbanner.jpeg?alt=media&token=94cd7e6c-6360-4f65-b08a-b95f5ce7d12c',
    description: 'Get personalized videos from your favorite celebrities at just one click. Request personalised video messages for your friends, family, loved ones or even yourself.Be it a doubt or even a special wish from your favorite celebrity.',
    repository: null,
    stack: [Stack.js, Stack.react, Stack.python, Stack.aws],
    deployment: {
      web: 'https://celebrify.in',
      android: 'https://play.google.com/store/apps/details?id=com.celebrify.app',
      ios: 'https://apps.apple.com/us/app/celebrify-app/id1469588198',
    },
    subProjects: []
  },
  {
    id: 5,
    title: 'KCards',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fbanner.jpeg?alt=media&token=39dc0d23-0edf-49f2-b662-f2f6ed99cfec',
    description: 'KCards is your one-stop replacement for paper cards. KCards help you to easily share your cards with other users and get real-time analytics on the shared cards',
    isOpenSource: false,
    repository: 'https://github.com/karanpratapsingh/KCards',
    stack: [Stack.js, Stack.react],
    deployment: {
      web: 'https://kcards-server.herokuapp.com',
      android: 'https://play.google.com/store/apps/details?id=com.kcards',
      ios: 'https://itunes.apple.com/us/app/kcards/id1461733524',
    },
    website: 'https://kcards-server.herokuapp.com',
    subProjects: []
  },
];

export default projects;