# Skillmatch Enterprise UI

## Features

- Offline development using Docker
- Database branching leveraging [NeonDB](https://neondb.io)
- Database editor using [Drizzle Studio](https://orm.drizzle.team/kit-docs/overview#drizzle-studio)
- CI via GitHub Actions
- Vercel for serverless deployment
- Preview deployments via Vercel
- Tailwind UI components (e.g. from [catalyst template](https://catalyst.tailwindui.com/docs))

## Local Development

### Requirements

- Docker provided by [Rancher Desktop](https://rancherdesktop.io/)
- Nodejs managed by [Nodenv](https://github.com/nodenv)

### Start the development environment

```sh
npm run db:start-and-migrate
```

Start astro:

```sh
npm run dev
```

```sh

To stop the local development environment (no data is persisted):

```sh
npm run db:stop
```

### Connect to other environments

Your local `.env` contains key configurations for connecting to other environments, which you can adjust for your needs.

## Dev Deployments

For all non master branches, a single [dev database](https://console.neon.tech/app/projects/patient-violet-96767066/branches/br-lively-unit-a2d0db1k) is used executing migrations as well as used for preview deployments for each Pull-Request. If needed, [NeonDB](https://neondb.io) can be used to create a new database for each branch, which is not yet implemented. If needed, the dev branch database can be reset at any time.

## Production Deployment

For now, we are using [Vercel](https://vercel.com) for deployment. The application is deployed via GitHub actions.



---

```sh

# TODO
- pnpm
- templates

# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
