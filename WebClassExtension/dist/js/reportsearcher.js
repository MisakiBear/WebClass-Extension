"use strict";
// The script must be execute after all frames loaded
$(window).on('load', function () {
    var isexist = $('frame[name="answer"]').contents().find('input[name="report_upload"]').length;
    if (isexist != 0)
        chrome.runtime.sendMessage({ type: 'reportfinded' });
});
//# sourceMappingURL=reportsearcher.js.map