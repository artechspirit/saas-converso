# Artech SaaS App

## Introduction

Welcome to the Artech SaaS App, a web application designed to provide users with personalized learning companions. This application is built using Next.js and incorporates several key components and flows to ensure a seamless user experience.

## Features

- **User Authentication**: Secure sign-in and authentication management.
- **Companion Management**: Create, manage, and interact with personalized learning companions.
- **User Journey**: Search and filter companions based on subjects and topics.
- **API Interaction**: Integration with external APIs and services for enhanced functionality.
- **Error Handling**: Proper capture and handling of errors to ensure a smooth user experience.

## Getting Started

To get started with the Artech SaaS App, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install` in the project root directory.
3. Start the development server by running `npm run dev`.
4. Access the application in your web browser at `http://localhost:3000`.

## Pages and Components

### Pages

- **Sign-in Page**: `/app/sign-in/[[...sign-in]]/page.tsx`
- **Home Page**: `/app/page.tsx`
- **Companions Page**: `/app/companions/page.tsx`
- **New Companion Page**: `/app/companions/new/page.tsx`
- **Companion Session Page**: `/app/companions/[id]/page.tsx`
- **Subscription Page**: `/app/subscription/page.tsx`
- **Sentry Example Page**: `/app/sentry-example-page/page.tsx`

### Components

- **CTA**: `/components/CTA.tsx`
- **CompanionCard**: `/components/CompanionCard.tsx`
- **CompanionList**: `/components/CompanionList.tsx`
- **CompanionForm**: `/components/CompanionForm.tsx`
- **Navbar**: `/components/Navbar.tsx`
- **NavItems**: `/components/NavItems.tsx`
- **SearchInput**: `/components/SearchInput.tsx`
- **SubjectFilter**: `/components/SubjectFilter.tsx`
- **CompanionComponent**: `/components/CompanionComponent.tsx`

## Configuration

- **Vapi SDK**: `/lib/vapi.sdk.ts`
- **Supabase**: `/lib/supabase.ts`
- **Middleware**: `/middleware.ts`
- **Sentry Configuration**: `/sentry.edge.config.ts` and `/sentry.server.config.ts`
- **TypeScript Configuration**: `/tsconfig.json`

## Dependencies

- **Next.js**: React framework for building web applications.
- **Clerk**: Authentication and user management.
- **Supabase**: Backend as a service for managing database operations.
- **Vapi AI**: AI-powered service for creating personalized learning companions.
- **Sentry**: Error monitoring and logging.

## Deployment

To deploy the Artech SaaS App, you can use Vercel. Follow the instructions provided by Vercel to set up and deploy your application.

## Contributing

If you would like to contribute to the Artech SaaS App, please follow the standard GitHub flow for submitting pull requests.

## Support

For any issues or questions, please create a new issue on the GitHub repository.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.