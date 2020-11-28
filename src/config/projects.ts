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
  [Stack.aws]: 'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/stack%2Faws-logo1.png?alt=media&token=9aa0ec54-be22-437c-add7-a0eb184793a9',
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
  screenshots: string[];
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
    screenshots: [],
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
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=a9b5a094-8a16-4c84-af16-65bf2378d7d9',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=fca4c07e-c922-445e-a259-a06c038e0974',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=31dafec8-fc20-4d6f-96e7-312a4c847ac5',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-4-.png?alt=media&token=4067a226-5b7b-4ffa-859e-401323a864c4',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=c349a959-ab54-4e2d-8f8e-2393466bb5c0',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=f2c25e34-38e8-4886-b247-dc6f270c36d0',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=2af284b0-4266-4072-a900-cc9ef8521f74',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=e041e4bd-50fc-49a7-8a22-f6e98d3e1bc6',
    ],
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
    description: 'Connect with shoppers who need your advice and expertise when they’re shopping online. Assist and sell to customers the same way you would in-store, but now through chat and video straight from the app',
    repository: null,
    stack: [Stack.js, Stack.react, Stack.graphql, Stack.firebase],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=c41b260f-5a97-4866-b89a-3ac289f50196',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=0dafd070-46ce-4bca-97f4-7095c201f9e1',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=cac56afe-f067-4f70-aea6-3af3450632e7',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=7a66c8e1-c057-4620-84e2-55e255e9580a'
    ],
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
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=ba9d7163-8df6-43ae-b804-01cd221cc593',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=c8194dc7-08cf-4b8c-a3ad-f6c643291a95',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=a52089d7-0317-4129-a3fe-a876cb2c11f3', 
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=a4c56b49-3a36-4b4f-b0b2-3e3d97033c91'
    ],
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
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=93fffd15-08ca-4ffc-8fce-47bc269237ee',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=fd597baf-3aaa-4ad8-abe9-1d42c628285f',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=779ea419-adb0-4f62-8ef7-dcfa8d9a4228',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=e77b8603-4885-4eed-b108-f9f4bb751796',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=94f43db6-c835-404d-ab35-85ddad624a06',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=7794ae58-7e3a-45c5-a47a-6c86b909e423'
    ],
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
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=5de462e1-7368-49fd-843f-abd4cccb3317',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=30061b0b-5bed-47d5-bf43-16c44cf076e0',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=350180a1-f559-45e7-b887-dafd2cf9eb78',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=574212b2-cf17-4e11-b8c0-a3a81473aeec',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=ecff0737-b3b5-45cc-8d85-97b684f9c4b7',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=b49f3f8e-6596-47ab-b3e6-872f5f67d7fe',
    ],
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