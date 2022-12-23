let save_tag_btn = $("#on-off");
//let frnd_list_btn = $("#frnd_list");

save_tag_btn.click(function () {
  if($(this).prop('checked') == true){    
    status = "start";
    console.log('start');
    chrome.storage.local.set({'running_status': status}); 
    reloadTwitterTabs();
  } else {
    status = "" 
    chrome.storage.local.set({'running_status': status});
    reloadTwitterTabs();    
  }
});


chrome.storage.local.get(["running_status"], function(result) {
  console.log(result);
    if (typeof result.running_status != "undefined" && result.running_status != "") { 
      
      if(result.running_status == "start") {
        $('#on-off').attr("checked", "checked");
      } else {
        $('#on-off').removeAttr("checked");
      }      
    } else {
      $('#on-off').removeAttr("checked");
      console.log('unchecked');
    }
  });

// NEW FUNCTION COMPTIBLE WITH V3
function reloadTwitterTabs() {
    chrome.windows.getAll({ populate: true }, function(windows) {
        windows.forEach(function(window) {
            if (window.type == "normal") {
                window.tabs.forEach(function(tab) {
                    if (tab.url && (tab.url.indexOf('twitter.com') != -1)) {
                        chrome.tabs.reload(tab.id);
                    }
                });
            }
        });
    });
}
