import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'HyperTrade',
    slug: 'hypertrade',
    banner: '/static/projects/hypertrade/banner.png',
    website: 'https://github.com/karanpratapsingh/HyperTrade',
    description:
      'Ready to deploy, distributed cryptocurrency trading bot. The idea of this project originally came from a script I used to automate buying and selling of fiat assets. I was curious and wanted to scale it into a real system which can execute trades for me. I had a lot of fun building this. I got to play with lots of different technologies while growing my financial knowledge.',
    shortDescription:
      'Ready to deploy, distributed cryptocurrency trading bot.',
    repository: 'https://github.com/karanpratapsingh/HyperTrade',
    stack: [
      Stack.nats,
      Stack.go,
      Stack.typescript,
      Stack.react,
      Stack.python,
      Stack.kubernetes,
      Stack.docker,
    ],
    dimensions: [360, 640],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fcharts.png?alt=media&token=62c42939-9371-4413-b85d-f2dd3b4534ca',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fdataframe.png?alt=media&token=f2e6523c-c9de-4fde-8fb3-434c74eb20d8',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fportfolio.png?alt=media&token=8f4e3da1-2dc2-4382-9fc8-1fbc18a98146',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fconfig.png?alt=media&token=f619b1da-47d5-4c33-b4d0-368adaead1c8',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fconfig-strategy.png?alt=media&token=68693230-4fce-420b-b419-d211a9568dc5',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fcharts-indicators.png?alt=media&token=21c7875f-5abe-4ceb-8057-4d7a70b67d33',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Ftelegram.png?alt=media&token=110874dd-fb96-4dd2-b299-12a62b092a04',
    ],
    deployment: {
      web: 'https://github.com/karanpratapsingh/HyperTrade',
    },
    subProjects: [],
  },
  {
    title: 'Peapods',
    slug: 'peapods',
    banner: '/static/projects/peapods/banner.png',
    website: 'https://peapods.com',
    description: `Peapods is a new type of decentralized social network that values real human interaction. The platform helps you become closer with your friends and make new ones. We value kindness, friendship, user privacy, and genuine connection. Together we can cure boredom, conquer loneliness, and fulfill the original promise of the internet to connect us in ways that matter.`,
    shortDescription:
      'Peapods is a new type of decentralized social network that values real human interaction.',
    repository: null,
    stack: [
      Stack.javascript,
      Stack.react,
      Stack.node,
      Stack.graphql,
      Stack.aws,
      Stack.arangodb,
    ],
    screenshots: [],
    deployment: {
      web: 'https://peapods.com',
    },
    subProjects: [],
  },
  {
    title: 'Proximity',
    slug: 'proximity',
    website: 'https://proximity-mobile.web.app',
    banner: '/static/projects/proximity/banner.jpeg',
    description:
      'An open source social media app that does not use your data against you.',
    repository: 'https://github.com/karanpratapsingh/Proximity',
    stack: [
      Stack.typescript,
      Stack.reactnative,
      Stack.node,
      Stack.graphql,
      Stack.postgres,
    ],
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
      android:
        'https://play.google.com/store/apps/details?id=com.proximity.app',
      ios: 'https://apps.apple.com/us/app/proximity-app/id1489041006',
    },
    subProjects: [],
  },
  {
    title: 'Velvet Live',
    slug: 'velvet-live',
    banner: '/static/projects/velvet-live/banner.png',
    website: 'https://boom.london',
    description: `Connect with shoppers who need your advice and expertise when they're shopping online. Assist and sell to customers the same way you would in-store, but now through chat and video straight from the app.`,
    repository: null,
    stack: [
      Stack.javascript,
      Stack.react,
      Stack.reactnative,
      Stack.graphql,
      Stack.gcp,
    ],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=b9b044ce-a3af-402f-a1db-1ae61621bb18',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=f551d87b-4f74-4d06-b81e-50ea8bf7feba',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=4f68239e-db81-43cc-b3a4-1a8642cfe4eb',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=5655d6e8-99d4-4c40-9782-ce12efeab256',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=32c12b1e-8e32-4d45-9001-9482d26bdaaf',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=609b7e74-8349-48ec-bcc0-4b0071dfb9b6',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=91880856-7288-420c-abb9-c1923f7ccd57',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=3dcdc3bd-cbb7-4d8e-9368-306158cce40d',
    ],
    deployment: {
      web: 'https://boom.london',
      android: 'https://play.google.com/store/apps/details?id=app.boom.mobile',
    },
    subProjects: [],
  },
  {
    title: 'Stewards',
    slug: 'stewards',
    website: 'https://stewards.app',
    repository: null,
    banner: '/static/projects/stewards/banner.png',
    description:
      'Mobile ordering solution with robot delivery. Stewards also provides variety of tools like staff application to manage orders, self checkout solution and admin dashboard.',
    stack: [
      Stack.javascript,
      Stack.react,
      Stack.reactnative,
      Stack.graphql,
      Stack.gcp,
    ],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=ba9d7163-8df6-43ae-b804-01cd221cc593',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=c8194dc7-08cf-4b8c-a3ad-f6c643291a95',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=37c14308-767c-41c7-a064-df8b63cd18e8',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=6ad6b4f6-ba09-423d-bd3f-b06ae093113a',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=cd2945c0-af97-4b3d-a503-d52174232a8e',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=6fcaeab6-d539-4f39-9985-e6ee85e28f0a',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=3c1fcd3e-4d93-4275-8d87-94a9b9236a9d',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=9733914a-61a9-41ed-b715-3334ca425588',
    ],
    deployment: {
      web: 'https://stewards.app',
      android:
        'https://play.google.com/store/apps/details?id=app.stewards.customer',
      ios: 'https://apps.apple.com/in/app/stewards-order-to-your-desk/id1479412118',
    },
    subProjects: [
      {
        title: 'Staff Management',
        repository: null,
        description:
          'Staff app for stewards restaurant staff, easily update menu, product availability and take live orders from customers.',
        deployment: {
          android:
            'https://play.google.com/store/apps/details?id=app.stewards.staff&hl=en',
        },
      },
      {
        title: 'Admin Dashboard',
        repository: null,
        description:
          'Staff administration app for stewards restaurant partners. This helps restaurant administrators to easily manage orders, receipts, tables, restaurant info etc.',
        deployment: {
          web: 'https://manage.stewards.app',
        },
      },
      {
        title: 'Self Checkout',
        repository: null,
        description:
          "Stewards self checkout solution for customers who don't like waiting. Available on demand for iPad and tablets.",
        deployment: {},
      },
    ],
  },
  {
    title: 'Celebrify',
    slug: 'celebrify',
    website: 'https://celebrify.in',
    banner: '/static/projects/celebrify/banner.jpeg',
    description:
      'Get personalized videos from your favorite celebrities at just one click. Request personalized video messages for your friends, family, loved ones or even yourself. Be it a doubt or even a special wish from your favorite celebrity.',
    repository: null,
    stack: [Stack.react, Stack.reactnative, Stack.django, Stack.aws],
    dimensions: [450, 270],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=93fffd15-08ca-4ffc-8fce-47bc269237ee',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=fd597baf-3aaa-4ad8-abe9-1d42c628285f',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=779ea419-adb0-4f62-8ef7-dcfa8d9a4228',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=e77b8603-4885-4eed-b108-f9f4bb751796',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=94f43db6-c835-404d-ab35-85ddad624a06',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=7794ae58-7e3a-45c5-a47a-6c86b909e423',
    ],
    deployment: {
      web: 'https://celebrify.in',
      android:
        'https://play.google.com/store/apps/details?id=com.celebrify.app',
      ios: 'https://apps.apple.com/us/app/celebrify-app/id1469588198',
    },
    subProjects: [],
  },
  {
    title: 'KCards',
    slug: 'kcards',
    banner: '/static/projects/kcards/banner.jpeg',
    description:
      'KCards is your one-stop replacement for paper cards. KCards help you to easily share your cards with other users and get real-time analytics on the shared cards.',
    repository: 'https://github.com/karanpratapsingh/KCards',
    stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongo],
    dimensions: [450, 270],
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
    subProjects: [],
  },
];
