# Twitter-Hide-Elements
Chrome Extension - Choose to hide either Twitter Views, Likes or Retweets or hide them all :-)

To select and hide the elements on the Twitter website, the script makes use of jQuery the JavaScript library. The `$('div[data-testid="cellInnerDiv"]')` function is utilized by the script. `find("article[data-testid="tweet"]")` selects the first tweet on the page, and `the.each()` function iterates over each tweet, hiding the appropriate elements in accordance with the options.

The script uses `$(this)` to refer to the current tweet being iterated over and then `uses.find()` to choose the appropriate elements to hide. The functions `hideAnalyticsOptions()`, `hideCommentsOptions()`, `hideRetweetsOptions()`, and `hideLikesOptions()` are used to hide each option, respectively.

It's crucial to keep in mind that this code is meant to be used as a browser extension, and that it should be loaded within the context of a web page rather than in a separate environment.

## Demo Video

[![Watch the video](https://i.ibb.co/wR4FGwz/Screenshot-2022-12-25-at-00-12-42.png)](https://www.youtube.com/watch?v=AgwuXLrIwYY&t)
