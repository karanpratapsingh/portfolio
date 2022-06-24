export type CourseContent = {
  name: string;
  slug?: string;
  description?: string;
  content?: CourseContent[];
};

export interface Course {
  title: string;
  slug: string;
  banner: string;
  description: string;
  content: CourseContent[];
}

export const courses: Course[] = [
  {
    title: 'Learn Go',
    slug: 'go',
    banner: '/static/courses/go/banner.png',
    description:
      'Master the fundamentals and advanced features of the Go programming language',
    content: [
      {
        name: 'Getting Started',
        content: [
          {
            name: 'Welcome to the course',
            slug: 'welcome-to-the-course',
          },
          {
            name: 'What is Go?',
            slug: 'what-is-go',
          },
          {
            name: 'Why learn Go?',
            slug: 'why-learn-go',
          },
          {
            name: 'Installation and Setup',
            slug: 'installation-and-setup',
          },
        ],
      },
      {
        name: 'Chapter I',
        content: [
          { name: 'Hello world', slug: 'hello-world' },
          {
            name: 'Variables and Data Types',
            slug: 'variables-and-data-types',
          },
          { name: 'String Formatting', slug: 'string-formatting' },
          { name: 'Flow Control', slug: 'flow-control' },
          { name: 'Functions', slug: 'functions' },
          { name: 'Modules', slug: 'modules' },
          { name: 'Workspaces', slug: 'workspaces' },
          { name: 'Packages', slug: 'packages' },
          { name: 'Useful Commands', slug: 'useful-commands' },
          { name: 'Build', slug: 'build' },
        ],
      },
      {
        name: 'Chapter II',
        content: [
          { name: 'Pointers', slug: 'pointers' },
          { name: 'Structs', slug: 'structs' },
          { name: 'Methods', slug: 'methods' },
          { name: 'Arrays and Slices', slug: 'arrays-and-slices' },
          { name: 'Maps', slug: 'maps' },
        ],
      },
      {
        name: 'Chapter III',
        content: [
          { name: 'Interfaces', slug: 'interfaces' },
          { name: 'Errors', slug: 'errors' },
          { name: 'Panic and Recover', slug: 'panic-and-recover' },
          { name: 'Testing', slug: 'testing' },
          { name: 'Generics', slug: 'generics' },
        ],
      },
      {
        name: 'Chapter IV',
        content: [
          { name: 'Concurrency', slug: 'concurrency' },
          { name: 'Goroutines', slug: 'goroutines' },
          { name: 'Channels', slug: 'channels' },
          { name: 'Select', slug: 'select' },
          { name: 'Sync Package', slug: 'sync-package' },
          {
            name: 'Advanced Concurrency Patterns',
            slug: 'advanced-concurrency-patterns',
          },
          { name: 'Context', slug: 'context' },
        ],
      },
      {
        name: 'Appendix',
        content: [
          { name: 'Next Steps', slug: 'next-steps' },
          { name: 'References', slug: 'references' },
        ],
      },
    ],
  },
  {
    title: 'System Design',
    slug: 'system-design',
    banner: '/static/courses/system-design/banner.png',
    description:
      'Learn how to design systems at scale and prepare for system design interviews',
    content: [
      {
        name: 'Getting Started',
        content: [
          {
            name: 'Welcome to the course',
            slug: 'welcome-to-the-course',
          },
          {
            name: 'What is system design?',
            slug: 'what-is-system-design',
          },
        ],
      },
      {
        name: 'Chapter I',
        content: [
          {
            name: 'TCP and UDP',
            slug: 'tcp-and-udp',
          },
          {
            name: 'OSI Model',
            slug: 'osi-model',
          },
          {
            name: 'IP',
            slug: 'ip',
          },
          {
            name: 'Domain Name System (DNS)',
            slug: 'domain-name-system',
          },
          {
            name: 'Load Balancing',
            slug: 'load-balancing',
          },
          {
            name: 'Clustering',
            slug: 'clustering',
          },
          {
            name: 'Caching',
            slug: 'caching',
          },
          {
            name: 'Content delivery network (CDN)',
            slug: 'content-delivery-network',
          },
          {
            name: 'Proxy',
            slug: 'proxy',
          },
          {
            name: 'Availability',
            slug: 'availability',
          },
          {
            name: 'Scalability',
            slug: 'scalability',
          },
          {
            name: 'Storage',
            slug: 'storage',
          },
        ],
      },
      {
        name: 'Chapter II',
        content: [
          {
            name: 'Databases and DBMS',
            slug: 'databases-and-dbms',
          },
          {
            name: 'SQL databases',
            slug: 'sql-databases',
          },
          {
            name: 'NoSQL databases',
            slug: 'nosql-databases',
          },
          {
            name: 'SQL vs NoSQL databases',
            slug: 'sql-vs-nosql-databases',
          },
          {
            name: 'Database replication',
            slug: 'database-replication',
          },
          {
            name: 'Indexes',
            slug: 'Indexes',
          },
          {
            name: 'Normalization and Denormalization',
            slug: 'normalization-and-denormalization',
          },
          {
            name: 'ACID and BASE consistency models',
            slug: 'acid-and-base-consistency-models',
          },
          {
            name: 'CAP theorem',
            slug: 'cap-theorem',
          },
          {
            name: 'PACELC Theorem',
            slug: 'pacelc-theorem',
          },
          {
            name: 'Transactions',
            slug: 'transactions',
          },
          {
            name: 'Distributed Transactions',
            slug: 'distributed-transactions',
          },
          {
            name: 'Sharding',
            slug: 'sharding',
          },
          {
            name: 'Consistent Hashing',
            slug: 'consistent-hashing',
          },
          {
            name: 'Federated databases',
            slug: 'federated-databases',
          },
        ],
      },
      {
        name: 'Chapter III',
        content: [
          {
            name: 'N-tier architecture',
            slug: 'n-tier-architecture',
          },
          {
            name: 'Message Brokers',
            slug: 'message-brokers',
          },
          {
            name: 'Message Queues',
            slug: 'message-queues',
          },
          {
            name: 'Publish-Subscribe',
            slug: 'publish-subscribe',
          },
          {
            name: 'Enterprise Service Bus (ESB)',
            slug: 'enterprise-service-bus',
          },
          {
            name: 'Monoliths and Microservices',
            slug: 'monoliths-microservices',
          },
          {
            name: 'Event-Driven Architecture (EDA)',
            slug: 'event-driven-architecture',
          },
          {
            name: 'Event Sourcing',
            slug: 'event-sourcing',
          },
          {
            name: 'Command and Query Responsibility Segregation (CQRS)',
            slug: 'command-and-query-responsibility-segregation',
          },
          {
            name: 'API Gateway',
            slug: 'api-gateway',
          },
          {
            name: 'REST, GraphQL, gRPC',
            slug: 'rest-graphql-grpc',
          },
          {
            name: 'Long polling, WebSockets, Server-Sent Events',
            slug: 'long-polling-websockets-server-sent-events',
          },
        ],
      },
      {
        name: 'Chapter IV',
        content: [
          {
            name: 'SLA, SLO, SLI',
            slug: 'sla-slo-sli',
          },
          {
            name: 'Disaster recovery',
            slug: 'disaster-recovery',
          },
          {
            name: 'Virtual Machines (VMs) and Containers',
            slug: 'virtual-machines-and-containers',
          },
          {
            name: 'Circuit breaker ',
            slug: 'circuit-breaker',
          },
          {
            name: 'Rate Limiting',
            slug: 'rate-limiting',
          },
          {
            name: 'OAuth 2.0 and OpenID Connect (OIDC)',
            slug: 'oauth2-and-openid-connect',
          },
          {
            name: 'Single Sign-On (SSO)',
            slug: 'single-sign-on',
          },
          {
            name: 'SSL, TLS, mTLS',
            slug: 'ssl-tls-mtls',
          },
        ],
      },
      {
        name: 'Appendix',
        content: [
          {
            name: 'Next Steps',
            slug: 'next-steps',
          },
          {
            name: 'References',
            slug: 'references',
          },
        ],
      },
    ],
  },
];
