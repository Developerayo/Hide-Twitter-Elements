$(function () {
  setInterval(() => {
    chrome.storage.local.get(["running_status"], function(result) {
      if (typeof result.running_status != "undefined" && result.running_status != "") {         
        if(result.running_status == "start") {
          hideOptions();
        }     
      }
    });
  }, 1000);

});

function hideOptions() {
    $first_tweet_li = $('div[data-testid="cellInnerDiv"]').find('article[data-testid="tweet"]');       
    $first_tweet_li.each(function (index, item) {
        $(this).find('a[aria-label="View Tweet analytics"][role="link"]').hide();
        $(this).find('div[aria-label][data-testid="retweet"]').hide();
        $(this).find('div[aria-label][data-testid="reply"]').hide();
        $(this).find('div[aria-label][data-testid="like"]').hide();
    });
}