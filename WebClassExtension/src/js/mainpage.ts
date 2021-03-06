let infobox = $('#NewestInformations');
let title = $('#UserTopInfo .page-header');
title.text('管理者からのお知らせ　 < クリックして格納 >');

// Collapse the notifications
switchInfoboxVisibility();

// Append the notifications if there are any unread messages
$(window).on('load', () => {
    // js-unread-message-count is updated by ajax, can't catch the updated timing
    setTimeout(() => {
        let value = $('#js-unread-message-count').text();
        if (value != '') {
            switchInfoboxVisibility();
        }
    }, 200);
});

$('#UserTopInfo .page-header').on('click', () => {
    switchInfoboxVisibility();
});

function switchInfoboxVisibility() {
    if (infobox.is(':visible') == true) {
        infobox.hide();
        title.text('管理者からのお知らせ　 > クリックして展開 <');
    } else {
        infobox.show();
        title.text('管理者からのお知らせ　 < クリックして格納 >');
    }
}

// Arrange the row
$('.row > div').each((_, elem) => {
    $(elem).removeAttr('class');
});

// Easter egg
let egg = ['(。・・)_旦', 'Σ(ﾟдﾟlll)', '(±.±)', '(ヾ;￣ω￣)ヾﾔﾚﾔﾚ',
    '┐(￣～￣)┌', '(-Д-＼)=３', '！(。_。)アレレ'];
$('.course-webclass').html('WebClass&nbsp;&nbsp;' + egg[Math.floor(Math.random() * egg.length)]);

// [Obsolete]
//$('.container .row').prepend('<div id="UserTopInfo"><h4 class="page-header"></h4>' +
//    '<iframe class="extinfo" style="width:100%;height:300;border:none;" ' +
//    'src=""></iframe></div>');