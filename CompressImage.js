document.addEventListener('DOMContentLoaded', function() {
    // remove header and footer

    //$('div.footer').remove();
    document.querySelector("body > header.header").remove();

    document.querySelector("body > div.footer").remove();

    //change button color and text
    document.getElementById('pickfiles').style.backgroundColor = '#00B98C';

    document.querySelector("#pickfiles > span").innerHTML = 'Select Images';

    // change color of drive and dropbox
    document.getElementById('gdrive_file_selector').remove();
    document.querySelector("#dropbox_file_selector").remove();

    document.querySelector("#uploader > div.uploader__droptxt").remove();



    //change title text and subtitle
    document.querySelector("#workArea > div.tool__header > h1").innerHTML = 'Image Compresser';

    // $('h1.tool__header__title').css({ 'color': '#454545', ' text-align': 'center', 'font-weight': '700', 'font-size': '2.25rem', 'line-height': '1.3', 'border': '0 solid' });
    document.querySelector("#workArea > div.tool__header > h2:nth-child(3)").innerHTML = ' <strong>Compress JPG, PNG, SVG or GIF.</strong>';



}, true);

window.onload = function() {
    $('h1.tool__header__title').css({ 'color': '#454545', ' text-align': 'center', 'font-weight': '700', 'font-size': '2.25rem', 'line-height': '1.3', 'border': '0 solid', 'font-family': 'Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji' });
    $('#pickfiles').css({
        'border-radius': '99px',
        'background-color': '#00B98C',
        'font-size': '1.5rem',
        'vertical-align': 'middle',
        'line-height': '1.5',
        // 'min-width': '226px',
        //  'padding': '.75rem 2rem',
        ' font-weight': '700',
    });
    setTimeout(() => {

        window.flutter_inappwebview.callHandler('updateoffset', false);

    }, 500);


}

document.addEventListener('load', function() {
    document.body.style.backgroundImage = 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)'; //'rgba(0, 0, 0, .5)';
    document.getElementById('workArea').style.backgroundImage = 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)';

    $('#pickfiles').click(function() {
        setInterval(() => {

            $('#orderByName').hide();
            $('#upload-status > div.uploading__status__title.user.last').css({ 'margin-top': '20px', 'margin-bottom': '5px' });
            $('#upload-status > div.uploading__status__title.user.last').text('Uploading...');
            $('#upload-status > div.uploading__status__file').remove();
            $('#upload-status > div.uploading__status__info').remove();
            $('#upload-status > div.uploading__bar').remove();
            //  $('#upload-status > div.uploading__status__percent').remove();

        }, 200);
        var mutationObserver = new MutationObserver(function(mutations, observer) {
            for (var i = 0; i < mutations.length; ++i) {
                // look through all added nodes of this mutation
                for (var j = 0; j < mutations[i].addedNodes.length; ++j) {
                    // was a child added with ID of 'bar'?
                    if (mutations[i].addedNodes[j].id == "processTask") {

                        document.querySelector("#processTaskTextBtn").innerHTML = 'Compress Image';
                        $('#pickfiles').css({ 'background': '#63FFD9' });
                        $('#pickfiles > svg').attr('stroke', 'black');
                        // $('#processTask').css('background-color', 'blue');
                        $('#processTask').css({ 'background-color': '#00B98C', 'border-radius': '99px', 'font-size': '20px' });
                        $('#processTask > span:nth-child(1)').text('Compress');
                        $('#processTask > span:nth-child(2) > svg').remove();
                        $('#processTask > span:nth-child(2)').append(`<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>`);
                        $('#settingsToogle').hide();
                        $('#uploader').hide();
                        $('#uploadDisk').hide();
                        $('#orderByName').hide();
                        $('#processTask').click(function() {
                            $('#uploading').hide();
                            $('div.process').empty();
                            $('div.process').append(`<p style="-webkit-text-size-adjust: 100%;
                            -webkit-font-smoothing: antialiased;
                            direction: ltr;
                            text-align: center;
                            box-sizing: inherit;
                            margin: 0;
                            padding: 0;
                            border: 0;
                            font: inherit;
                            vertical-align: baseline;
                            margin-top: 20px;
                            font-weight: 600;
                            margin-bottom: 12px;
                            letter-spacing: 0;
                            color: #383e45;
                            font-size: 20px;
                            line-height: 26px;" id="processText" class="processAction title2">Processing...</p>`);

                            if (document.querySelector("#fileGroups").childNodes.length > 1) {
                                window.flutter_inappwebview.callHandler('fileInfo', false, 'ImageTools.zip');
                            } else {
                                window.flutter_inappwebview.callHandler('fileInfo', true, $('.file__info__name').text());
                            }



                        });
                        observer.disconnect();

                    };




                }
            }
        });

        mutationObserver.observe(document.documentElement, {
            attributes: true,
            characterData: true,
            childList: true,
            subtree: true,
            attributeOldValue: true,
            characterDataOldValue: true
        });
    });



}, true);