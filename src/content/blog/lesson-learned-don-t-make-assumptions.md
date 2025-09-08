---
title: "Lesson Learned: Don't Make Assumptions"
date: "2025-09-08T20:03:34.669Z"
---

# Adding Spotify to the lastfriends.site tool

If you've been following along, I [wrote an app to compare Last.fm user data](https://www.theresasumma.com/blog/lastfriends-site-a-last-fm-music-comparison-tool). I set out to add [Spotify](https://spotify.com) data to the mix, giving a user an option to login and compare their Spotify data with a [Last.fm](https://last.fm)  user.

## API Limitations
After trying to trace down what seemed like a misconfigured callback or perhaps a cookie problem, I discovered that, while in development mode. My Spotify authorization only works for users I list.

To apply for increased access, you need to be a business entity with 250k monthly users. I do not have these requirements. So, my Spotify integration is dead in the water for any given user.

## Evaluating Me For Work?
[Lastfriends.site](https://lastfriends.site) is still working for Last.fm user comparisons.

If you are evaluating me for work, please reach out and I can put you on my list so that the Spotify integration will work for you on the site. Please email [theresasumma@gmail.com](mailto:theresasumma@gmail.com) to ask for access. Thank you.
