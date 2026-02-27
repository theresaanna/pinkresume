---
title: "Introducing GlossyCMS"
date: "2026-02-27T21:29:01.544Z"
---

GlossyCMS offers non-coders a way to build extremely customizable websites without too complicated of an admin interface and without janky WYSIWYG editors.

GlossyCMS is a [Payload CMS](https://payloadcms.com/) application at its core. Payload is built on [Next.js](https://nextjs.org/), which is built on the [React](https://react.dev/) library. It uses strict mode [TypeScript](https://www.typescriptlang.org/). I am hosting on [Vercel](https://vercel.com/) using [Neon](https://neon.com/) [PostgreSQL databases](https://www.postgresql.org/).

I have added a lot of custom functionality to the base Payload offering. Payload is a really nice framework, it offers a high level of customization via a thorough series of hooks. I have added comments with email address verification before posting, comment email notifications, a currently rudimentary newsletter tool, expanded search results indexing, color theming, front end edit guides, a media gallery, adult content verification, additional page and meta data editing, more.

I have reached my goal of 80% test coverage on custom code, but don't plan to slow down. I have introduced a series of Playwright E2E tests which I am working on expanding.

Once I have done that, I want to turn to piecing out some of these new features to either upstream contributions to Payload, or as Payload plugins. I have [submitted one patch](https://github.com/payloadcms/payload/pull/15781) already to Payload, and I'm sure I'll have a handful of plugins to open source.

Vercel is hosting an army of Glossy clones, where new instances are spun up automatically from a base repo and seeded db upon purchase by a user. I am offering a base subscription where you can only upload photos, and a pro subscription where you can also upload video and audio.

Please check it out at [Glossysites.live](https://glossysites.live) and let me know what you think. I hope you'll share with less technical folks in your life that may need a website.