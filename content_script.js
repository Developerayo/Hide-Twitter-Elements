$(function () {
  setInterval(() => {
    chrome.storage.local.get(["running_status_analytics"], function (result) {
      if (
        typeof result.running_status_analytics != "undefined" &&
        result.running_status_analytics != ""
      ) {
        if (result.running_status_analytics == "start") {
          hideAnalyticsOptions();
        }
      }
    });

    chrome.storage.local.get(["running_status_comments"], function (result) {
      if (
        typeof result.running_status_comments != "undefined" &&
        result.running_status_comments != ""
      ) {
        if (result.running_status_comments == "start") {
          hideCommentsOptions();
        }
      }
    });

    chrome.storage.local.get(["running_status_retweets"], function (result) {
      if (
        typeof result.running_status_retweets != "undefined" &&
        result.running_status_retweets != ""
      ) {
        if (result.running_status_retweets == "start") {
          hideRetweetsOptions();
        }
      }
    });

    chrome.storage.local.get(["running_status_likes"], function (result) {
      if (
        typeof result.running_status_likes != "undefined" &&
        result.running_status_likes != ""
      ) {
        if (result.running_status_likes == "start") {
          hideLikesOptions();
        }
      }
    });
  }, 700);
});

function hideAnalyticsOptions() {
  $first_tweet_li = $('div[data-testid="cellInnerDiv"]').find(
    'article[data-testid="tweet"]'
  );
  $first_tweet_li.each(function (index, item) {
    $(this).find('a[aria-label="View Tweet analytics"][role="link"]').hide();
    // $(this).find('div[aria-label][data-testid="retweet"]').hide();
    // $(this).find('div[aria-label][data-testid="reply"]').hide();
    // $(this).find('div[aria-label][data-testid="like"]').hide();
  });
}
function hideCommentsOptions() {
  $first_tweet_li = $('div[data-testid="cellInnerDiv"]').find(
    'article[data-testid="tweet"]'
  );
  $first_tweet_li.each(function (index, item) {
    // $(this).find('a[aria-label="View Tweet analytics"][role="link"]').hide();
    // $(this).find('div[aria-label][data-testid="retweet"]').hide();
    $(this).find('div[aria-label][data-testid="reply"]').hide();
    //$(this).find('div[aria-label][data-testid="like"]').hide();
  });
}
function hideRetweetsOptions() {
  $first_tweet_li = $('div[data-testid="cellInnerDiv"]').find(
    'article[data-testid="tweet"]'
  );
  $first_tweet_li.each(function (index, item) {
    // $(this).find('a[aria-label="View Tweet analytics"][role="link"]').hide();
    $(this).find('div[aria-label][data-testid="retweet"]').hide();
    // $(this).find('div[aria-label][data-testid="reply"]').hide();
    // $(this).find('div[aria-label][data-testid="like"]').hide();
  });
}

function hideLikesOptions() {
  $first_tweet_li = $('div[data-testid="cellInnerDiv"]').find(
    'article[data-testid="tweet"]'
  );
  $first_tweet_li.each(function (index, item) {
    // $(this).find('a[aria-label="View Tweet analytics"][role="link"]').hide();
    // $(this).find('div[aria-label][data-testid="retweet"]').hide();
    // $(this).find('div[aria-label][data-testid="reply"]').hide();
    $(this).find('div[aria-label][data-testid="like"]').hide();
  });
}
