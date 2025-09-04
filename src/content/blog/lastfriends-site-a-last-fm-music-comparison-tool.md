---
title: "Lastfriends.site: A last.fm music comparison tool"
date: "2025-09-04T03:48:04.967Z"
---

## last.fm music comparison tool

![image](/img/lastfriends1.png)

Lastfriends is a little web tool I put together waiting for Meta access to continue with a social media sentiment analyzer tool, to be announced. It takes two usernames of users on [last.fm](https://last.fm), a tool that tracks your music listening. They offer a really simple REST API that made throwing this together an absolute breeze.

Check it out yourself at [lastfriends.site](https://lastfriends.site). If you don't have a username, use mine: "superexciting" and the username of someone who messaged me awhile back, "AlexxMusixx". Thanks, Alex. 😂

![image](/img/lastfriends2.png)

![image](/img/lastfriends3.png)

## The Stack
Lastfriends runs on [next.js](https://nextjs.org/) is hosted on [Vercel](https://vercel.app). The site you're reading this on is, also, so the whole thing was easy peasy. Really, I cannot stress how nice this whole process was. Smoothest build of my life. I really don't know what to say about it other than that it exists and you should play with it!

![image](/img/lastfriends4.png)

![image](/img/lastfriends5.png)

## The Future
In the coming days I'll be adding more charts and wordclouds for genres and artists. I'm also going to try my hand at showing "bursts" in listening data for a user and artist.

I might also try to massage the process that pulls a user's tracks. It's limited to 500 tracks right now, and I feel the data would be much richer if we could get conceivably someone's thousands of tracks for analysis.

## Thank you!
Thanks for reading. If you have any questions about implementation, please ask below or direct them to my email, [theresasumma@gmail.com](mailto:theresasumma@gmail.com). I can also be found on Threads at [@hellyeahitstheresa](https://www.threads.com/@hellyeahitstheresa).

You can review the codebase on [Github: theresaanna/lastfriends](https://github.com/theresaanna/lastfriends). 

Again, find the tool at [lastfriends.site](https://lastfriends.site). Have a great day!
