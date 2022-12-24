let analytics_tag_btn = $("#on-off-analytics");
let comments_tag_btn = $("#on-off-comments");
let likes_tag_btn = $("#on-off-like");
let retweets_tag_btn = $("#on-off-retweets");
//let frnd_list_btn = $("#frnd_list");

analytics_tag_btn.click(function () {
  if ($(this).prop("checked") == true) {
    status_analytics = "start";
    console.log("start");
    chrome.storage.local.set({ running_status_analytics: status_analytics });
    reloadTwitterTabs();
  } else {
    status_analytics = "";
    chrome.storage.local.set({ running_status_analytics: status_analytics });
    reloadTwitterTabs();
  }
});

comments_tag_btn.click(function () {
  if ($(this).prop("checked") == true) {
    status_comment = "start";
    console.log("start");
    chrome.storage.local.set({ running_status_comments: status_comment });
    reloadTwitterTabs();
  } else {
    status_comment = "";
    chrome.storage.local.set({ running_status_comments: status_comment });
    reloadTwitterTabs();
  }
});

likes_tag_btn.click(function () {
  if ($(this).prop("checked") == true) {
    status_likes = "start";
    console.log("start");
    chrome.storage.local.set({ running_status_likes: status_likes });
    reloadTwitterTabs();
  } else {
    status_likes = "";
    chrome.storage.local.set({ running_status_likes: status_likes });
    reloadTwitterTabs();
  }
});

retweets_tag_btn.click(function () {
  if ($(this).prop("checked") == true) {
    status_retweets = "start";
    console.log("start");
    chrome.storage.local.set({ running_status_retweets: status_retweets });
    reloadTwitterTabs();
  } else {
    status_retweets = "";
    chrome.storage.local.set({ running_status_retweets: status_retweets });
    reloadTwitterTabs();
  }
});

chrome.storage.local.get(["running_status_analytics"], function (result) {
  console.log(result);
  if (
    typeof result.running_status_analytics != "undefined" &&
    result.running_status_analytics != ""
  ) {
    if (result.running_status_analytics == "start") {
      $("#on-off-analytics").attr("checked", "checked");
    } else {
      $("#on-off-analytics").removeAttr("checked");
    }
  } else {
    $("#on-off-analytics").removeAttr("checked");
    console.log("unchecked");
  }
});

chrome.storage.local.get(["running_status_comments"], function (result) {
  console.log(result);
  if (
    typeof result.running_status_comments != "undefined" &&
    result.running_status_comments != ""
  ) {
    if (result.running_status_comments == "start") {
      $("#on-off-comments").attr("checked", "checked");
    } else {
      $("#on-off-comments").removeAttr("checked");
    }
  } else {
    $("#on-off-comments").removeAttr("checked");
    console.log("unchecked");
  }
});

chrome.storage.local.get(["running_status_likes"], function (result) {
  console.log(result);
  if (
    typeof result.running_status_likes != "undefined" &&
    result.running_status_likes != ""
  ) {
    if (result.running_status_likes == "start") {
      $("#on-off-like").attr("checked", "checked");
    } else {
      $("#on-off-like").removeAttr("checked");
    }
  } else {
    $("#on-off-like").removeAttr("checked");
    console.log("unchecked");
  }
});

chrome.storage.local.get(["running_status_retweets"], function (result) {
  console.log(result);
  if (
    typeof result.running_status_retweets != "undefined" &&
    result.running_status_retweets != ""
  ) {
    if (result.running_status_retweets == "start") {
      $("#on-off-retweets").attr("checked", "checked");
    } else {
      $("#on-off-retweets").removeAttr("checked");
    }
  } else {
    $("#on-off-retweets").removeAttr("checked");
    console.log("unchecked");
  }
});

// NEW FUNCTION COMPTIBLE WITH V3
function reloadTwitterTabs() {
  chrome.windows.getAll({ populate: true }, function (windows) {
    windows.forEach(function (window) {
      if (window.type == "normal") {
        window.tabs.forEach(function (tab) {
          if (tab.url && tab.url.indexOf("twitter.com") != -1) {
            chrome.tabs.reload(tab.id);
          }
        });
      }
    });
  });
}
