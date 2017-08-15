  <!DOCTYPE html> 
<html amp lang="en">
    <head>       
        <!--meta tags-->        
        <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">    

        <link rel="canonical" href="https://www.eduonix.com/assets/js/main_com.js" />
        <meta name="title" content="">
        <meta name="description" content="">
        <meta name="keywords" content="">
        <!--<meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1">-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
        
        <!--facebook-->
        <meta property="og:title" content=" "/>
        <meta property="og:type" content="" />  


        <!-- Start bing webmaster code-->
        <meta name="msvalidate.01" content="E8A046EBB03E499C265EB40C0AA6D7CC" />        

                <title></title> 
        <!--<script  type="text/javascript" src="jquery.js"></script>-->         
        <script  type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script> 

        <script type="text/javascript" src="https://www.eduonix.com/assets/js/jquery-ui.min.js"></script>       

        <!-- AMP LIBRARY --->
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <!-- AMP LIBRARY --->

        <script type="text/javascript"> var software_url = 'https://www.eduonix.com/';</script>
        <script type="text/javascript"> var img_url = 'https://cdnp-2f3a.kxcdn.com/assets/images/';</script>

        <script  type="text/javascript" src="https://cdnp-2f3a.kxcdn.com/assets/js/jquery.simplePopup.js" defer=""></script> 

        <!--bootstrap css-->
        <link href="https://cdnp-2f3a.kxcdn.com/assets/css/bootstrap-theme.min.css" rel="stylesheet">
        <link href="https://cdnp-2f3a.kxcdn.com/assets/css/bootstrap.min.css" rel="stylesheet">        
        <link href="https://cdnp-2f3a.kxcdn.com/assets/css/font-awesome.min.css" rel="stylesheet">

        <!--custom css-->
        <link href="https://cdnp-2f3a.kxcdn.com/assets/css/animate.min.css" rel="stylesheet">
        <link href="https://www.eduonix.com/assets/css/style.css" rel="stylesheet">
        <link href="https://cdnp-2f3a.kxcdn.com/assets/css/main.css" rel="stylesheet">
        <!--font css "open sans" -->
        <link href="https://cdnp-2f3a.kxcdn.com/assets/css/openSansFont.css" rel="stylesheet" type='text/css'>        
        <link rel="shortcut icon" href="https://cdnp-2f3a.kxcdn.com/assets/images/favicon.png">

        <script type="text/javascript" src="https://www.eduonix.com/assets/js/main.js" ></script>        
        <script type="text/javascript" src="https://www.eduonix.com/assets/js/custom.js" ></script>  

        <!-- AMP BOILERPLATE AND JS LIBRARY START - 01082016 -->
        <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>

        <!-- AMP BOILERPLATE AND JS LIBRARY END - 01082016 -->

        <!-- Start Site Only Markup - for Search box script on 18-08-2016-->
        <script type="application/ld+json">
            {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://www.eduonix.com/",
            "potentialAction": {
            "@type": "SearchAction",
            "target": "https://query.eduonix.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
            }
            }
        </script>

        <!--Site Only Markup - for Search box script on 18-08-2016 -->


        <!--Start Website Mark-up / Snippets script on 18-08-2016-->
        <script type='application/ld+json'> 
            {
            "@context": "http://www.schema.org",
            "@type": "WebSite",
            "name": "Eduonix Learning Solutions",
            "url": "https://www.eduonix.com/"
            }
        </script>
        <!--End Website Mark-up / Snippets script on 18-08-2016-->

        <script type="text/javascript">
            var verifyCallback = function(response) {
                alert(response);
            };
            var widgetId1;
            var widgetId2;
            var onloadCallback = function() {
                // Renders the HTML element with id 'example1' as a reCAPTCHA widget.
                // The id of the reCAPTCHA widget is assigned to 'widgetId1'.
                widgetId1 = grecaptcha.render('recaptcha1', {
                    'sitekey': '6LccgCQUAAAAAFDS9g24qPai6EY_NkiwS_sRKSsb',
                    'theme': 'light'
                });
                widgetId2 = grecaptcha.render(document.getElementById('recaptcha2'), {
                    'sitekey': '6LccgCQUAAAAAFDS9g24qPai6EY_NkiwS_sRKSsb'
                });
            };
        </script>

        <script type="text/javascript">

            function login_validation(user_name, pw, div) {
                var err = 0;
                if (user_name == '') {
                    err = 1;
                    $(div + '#errInput').text('Please Enter Email ID');
                } else {
                    $(div + '#errInput').text('');
                }
                if (pw == '') {
                    err = 1;
                    $(div + '#errpw').text('Please Enter Password');
                } else {
                    $(div + '#errpw').text('');
                }
                $(div + '.errmsg ').text('');
                return err;
            }
            function set_session(e) {
                var login_type = $("#login_type").val()
                var t = {
                    login_type: login_type
                };
                if (login_type == 'freebies' || login_type == 'made_free' || login_type == 'confirmation' || login_type == 'bundle_bww') {
                    t['poiu'] = $('#poiu').val();
                    t['cvbn'] = $('#cvbn').val();
                    t['module'] = $('#module').val();
                }
                if (login_type == 'bundle_bww') {
                    t['ids'] = qwer;
                }

                if (login_type == 'dealfuel-a' || login_type == 'dealfuel-b' || login_type == 'dealfuel-c' || login_type == 'inkydealsa'  || login_type == 'inkydeals' || login_type == 'dealmirror-a' || login_type == 'ben-hunt') {
                    t['dealf_coupon'] = $('#couponCode').val();
                }

                $.ajax({
                    method: "POST",
                    url: software_url + "login/set_session",
                    data: t
                }).done(function(t) {
                    console.log(t);
//                    exit();
                    window.location.href = e
                })
            }

            function login(method) {
                var div = '';
                var login_type = $('#login_type').val();
                if (method == 'page') {
                    div = '#loginPopUpPage '; //dont remove the space
                    login_type = 'redirection';
                } else {
                    div = '#loginPopUp '
                }
                var user_name = $(div + '#email').val();
                var pw = $(div + '#password').val();
                var err = login_validation(user_name, pw, div);
                if (err == 0) {
                    var datas = {
                        user_name: user_name,
                        pass: pw,
                        login_type: login_type
                    };
                    if (login_type == 'freebies' || login_type == 'made_free' || login_type == 'confirmation' || login_type == 'bundle_bww') {
                        datas['poiu'] = $('#poiu').val();
                        datas['cvbn'] = $('#cvbn').val();
                        datas['module'] = $('#module').val();
                    }
                    if (login_type == 'bundle_bww') {
                        datas['ids'] = qwer;
                    }

                    if (login_type == 'dealfuel-a' || login_type == 'dealfuel-b' || login_type == 'dealfuel-c'  || login_type == 'inkydealsa'   || login_type == 'inkydeals' || login_type == 'dealmirror-a' || login_type == 'ben-hunt') {
                        datas['dealf_coupon'] = $('#couponCode').val();
                    }

                    $.ajax({
                        method: "POST",
                        url: "https://www.eduonix.com/login/signin",
                        data: datas
                    })
                            .done(function(msg) {
                                res = msg.split("@");
                                if (res[0] == 0) {
                                    $(div + '.errmsg').text(res[1]);
                                } else {
                                    window.location.href = msg;
                                }
                            });
                }
            }

            function dash() {
                var user_name = $('#email').val();
                var pw = $('#password').val();
                var datas = {
                    redirect: 'dashboard_page',
                    prod_id: $('.item_number').val(),
                    user_name: user_name,
                    pass: pw
                };
                $.ajax({
                    method: "POST",
                    url: "https://www.eduonix.com/dashboard/signin",
                    data: datas
                })
                        .done(function(msg) {
                            res = msg.split("@");
                            if (res[0] == 0) {
                                $('.errmsg').text(res[1]);
                            } else {
                                window.location.href = msg;
                            }
                        });
            }

            function signup_validation(user_name, pw, fullname, div) {
                var err = 0;
                var re = /^[ A-Za-z_#&+-]*$/;
                if (fullname == '') {
                    $(div + '#si_err_N').text('Please Enter Name');
                    err = 1;
                } else if (!re.test(fullname)) {
                    $(div + '#si_err_N').text('Please Enter Valid Name');
                    err = 1;
                } else {
                    $(div + '#si_err_N').text('');
                }
                if (pw == '') {
                    $(div + '#si_err_P').text('Please Enter Password');
                    err = 1;
                } else if (pw.trim().length < 6) {
                    $(div + '#si_err_P').text('Password Required Minimum 6 characters');
                    err = 1;
                } else {
                    $(div + '#si_err_P').text('');
                }
                var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (user_name == '') {
                    $(div + '#si_err_E').text('Please Enter Email ID');
                    err = 1;
                } else if (!pattern.test(user_name)) {
                    $(div + '#si_err_E').text('Please Enter Valid Email ID');
                    err = 1;
                } else {
                    $(div + '#si_err_E').text('');
                }
                return err;
            }

            function signup(method) {
                var div = '';
                var g_recaptcha_response = '';
                var login_type = $('#login_type').val();
                if (method == 'page') {
                    div = '#signUpPopUpPage '; //dont remove the space
                    login_type = 'redirection';
                    g_recaptcha_response = grecaptcha.getResponse(widgetId2);
                } else {
                    div = '#signUpPopUp '; //dont remove the space
                    g_recaptcha_response = grecaptcha.getResponse(widgetId1);
                }
                var user_name = $(div + '#si_email').val();
                var pw = $(div + '#si_password').val();
                var fullname = $(div + '#si_fullName').val();
                var login_type = $(div + '#login_type').val();
                var err = signup_validation(user_name, pw, fullname, div);
                if (err == 0) {
                    var datas = {
                        FullName: fullname,
                        user_name: user_name,
                        pass: pw,
                        login_type: login_type,
                        g_recaptcha_response: g_recaptcha_response
                    }

                    if (login_type == 'freebies' || login_type == 'made_free' || login_type == 'confirmation' || login_type == 'bundle_bww') {
                        datas['poiu'] = $('#poiu').val();
                        datas['cvbn'] = $('#cvbn').val();
                        datas['module'] = $('#module').val();
                    }

                    if (login_type == 'bundle_bww') {
                        datas['ids'] = qwer;
                    }

                    if (login_type == 'dealfuel-a' || login_type == 'dealfuel-b' || login_type == 'dealfuel-c' || login_type == 'inkydealsa'   || login_type == 'inkydeals' || login_type == 'dealmirror-a' || login_type == 'ben-hunt') {
                        datas['dealf_coupon'] = $('#couponCode').val();
                    }

                    $.ajax({
                        method: "POST",
                        url: "https://www.eduonix.com/login/signup",
                        data: datas
                    })
                            .done(function(msg) {
                                res = msg.split("@");
                                if (res[0] == 0) {
                                    grecaptcha.reset(widgetId1);
                                    grecaptcha.reset(widgetId2);
                                    list = res[1].split("--");
                                    $(div + '#si_err_N').text('');
                                    $(div + '#si_err_E').text('');
                                    $(div + '#si_err_P').text('');
                                    $(div + '#si_err_A').text('');

                                    name = list[0][0];
                                    val1 = list[0].split(",");
                                    $(div + '#si_err_' + name).text(val1[1]);

                                    name = list[1][0];
                                    val1 = list[1].split(",");
                                    $(div + '#si_err_' + name).text(val1[1]);

                                    name = list[2][0];
                                    val1 = list[2].split(",");
                                    $(div + '#si_err_' + name).text(val1[1]);

                                    name = list[3][0];
                                    val1 = list[3].split(",");
                                    $(div + '#si_err_' + name).text(val1[1]);
                                } else {
                                    window.location.href = msg;
                                }
                            });
                }
            }

            function checkEmail(email) {
                var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (!filter.test(email)) {
                    return false;
                } else {
                    return true;
                }
            }

            function getPassword(div_id, login_div, sign_div_id) {
                var action = $('#' + div_id + ' .fgbtn').val();
                if (action == 'Send') {
                    $('#img_ajax').css('display', 'block');
                    $('#overlay').css('display', 'block');
                    var email = $('#' + div_id + ' .forget_email').val();
                    $.ajax({
                        method: "POST",
                        url: "https://www.eduonix.com/forget_password/check",
                        data: {EMailID: email}
                    })
                            .done(function(msg) {
                                if (msg == 1) {
                                    $('#' + div_id + ' .error_fg').text('Your Password has been sent to your E-Mail ID ' + email);
                                    $('#' + div_id + ' .error_fg').css('color', 'green');
                                    $('#' + div_id + ' .fgbtn').val('Login');
                                } else {
                                    $('#' + div_id + ' .error_fg').text(msg);
                                }
                                $('#img_ajax').css('display', 'none');
                                $('#overlay').css('display', 'none');
                            });
                } else {
                    showPopUp('redirection', login_div, sign_div_id);
                }
            }

            // Remove Special Characters coming from facebook start
            if (window.location.hash && window.location.hash == '#_=_') {
                window.location.hash = '';
            }
        </script>


        <!-- Start pushcrew.com -->
<!--        <script type="text/javascript">
            (function (p, u, s, h) {
                p._pcq = p._pcq || [];
                p._pcq.push(['_currentTime', Date.now()]);
                s = u.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://cdn.pushcrew.com/js/ea618df0805fe4f3a52a01a91f682c37.js';
                h = u.getElementsByTagName('script')[0];
                h.parentNode.insertBefore(s, h);
            })(window, document);
        </script>-->
        <!--  END pushcrew.com -->


        <!--Start Facebook Pixel Code on 2016-08-19 -->
        <script>
            !function(f, b, e, v, n, t, s) {
                if (f.fbq)
                    return;
                n = f.fbq = function() {
                    n.callMethod ?
                            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if (!f._fbq)
                    f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
            }(window,
                    document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1790153361204564');
            fbq('track', "PageView");</script>
    <noscript><img height="1" width="1" style="display:none"
                   src="https://www.facebook.com/tr?id=1790153361204564&ev=PageView&noscript=1"
                   /></noscript>
    <!--End Facebook Pixel Code on 2016-08-19 -->



    <!--Start of pinterest Script - From Sumesh on 09-09-2016-->
    <meta name="p:domain_verify" content="b73b14004f54b5c1cdffa15815bf5e6e"/>
    <!--End of pinterest Script - From Sumesh on 09-09-2016-->

</head>
<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top" onload="setBg();" onresize="showMenuIconSrnSize();">
        <!-- Google Tag Manager -->
<!--    <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-TTFCJR"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <script>(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({'gtm.start':
                        new Date().getTime(), event: 'gtm.js'});
            var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                    '//www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-TTFCJR');</script>-->
    <!-- End Google Tag Manager -->

    <div id="fb-root"></div>
    <script>
        $(document).bind('fbInit', function() {
            $('#fb_status').val('complete');
        });

        window.fbAsyncInit = function() {
            FB.init({
                appId: '1477281805897808', // App ID  
                channelUrl: 'https://www.eduonix.com/assets/others/channel.html',
                status: true, // check login status
                cookie: true, // enable cookies to allow the server to access the session
                xfbml: true, // parse XFBML
                version: 'v2.9' // use graph api version 2.8
            });

            FB.Event.subscribe('auth.authResponseChange', function(response)
            {
                if (response.status === 'connected')
                {
                    //document.getElementById("message").innerHTML += "";
                } else if (response.status === 'not_authorized')
                {
                    //document.getElementById("message").innerHTML += "<br>Failed to Connect";
                } else
                {
                }
            });

            $(document).trigger('fbInit');
        };

        function fblogin()
        {
            var fb_status = $('#fb_status').val();
            if (fb_status == 'complete') {
                FB.login(function(response) {
                    if (response.authResponse)
                    {
                        getPhoto();
                        getUserInfo();
                    } else
                    {
                        alert("User cancelled login or did not fully authorize.");
//                    console.log('User cancelled login or did not fully authorize.');
                    }
                }, {scope: 'public_profile,email,user_photos,user_videos'});
            } else {
//                      window.location.href = '';
                location.reload(true);
            }
        }

        function getUserInfo() {
            FB.api('/me?fields=email,name,id', function(response) {
                $('#img_ajax').css('display', 'block');
                $('#overlay').css('display', 'block');
                var login_type = $('#login_type').val();
                var dataTo_session = {
                    login_type: login_type,
                    mode: 'facebook'
                };

                if (login_type == 'freebies' || login_type == 'made_free' || login_type == 'confirmation' || login_type == 'bundle_bww') {
                    dataTo_session['poiu'] = $('#poiu').val();
                    dataTo_session['cvbn'] = $('#cvbn').val();
                    dataTo_session['module'] = $('#module').val();
                }

                if (login_type == 'bundle_bww') {
                    dataTo_session['ids'] = qwer;
                }


                if (login_type == 'dealfuel-a' || login_type == 'dealfuel-b' || login_type == 'dealfuel-c' || login_type == 'inkydealsa'   || login_type == 'inkydeals' || login_type == 'dealmirror-a' || login_type == 'ben-hunt') {
                    dataTo_session['dealf_coupon'] = $('#couponCode').val();
                }

                var dataTo_facebook = {
                    id: response.id,
                    name: response.name,
                    profile: $('#fb_pic').val(),
                    email: response.email
                };

                $.ajax({
                    method: "POST",
                    url: "https://www.eduonix.com/login/set_session",
                    data: dataTo_session
                })
                        .done(function(msg) {
                            var sess_arr = $.parseJSON(msg);
                            $.ajax({
                                method: "POST",
                                url: "https://www.eduonix.com/google/fb_login",
                                data: {session: sess_arr, facebook: dataTo_facebook}
                            })
                                    .done(function(url) {
                                        console.log(url);
                                        window.location.href = url;
                                    });
                            // another ajx call end
                        });
            });
            $('#img_ajax').css('display', 'none');
            $('#overlay').css('display', 'none');
        }

        function getPhoto()
        {
            FB.api('/me/picture?type=normal', function(response) {
                $('#fb_pic').val(response.data.url);
                console.log('pic' + response.data.url);
            });
        }
        function Logout()
        {
            FB.logout(function() {
                document.location.reload();
            });
        }

        // Load the SDK asynchronously
        (function(d) {
            var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement('script');
            js.id = id;
            js.async = true;
            js.src = "//connect.facebook.net/en_US/all.js";
            ref.parentNode.insertBefore(js, ref);
        }(document));

    </script>

    <script>
        function handle(e, id) {
            if (e.keyCode === 13) {
                // e.preventDefault(); // Ensure it is only this code that rusn
                if (id == 'proname')
                {
                    search_result();
                }
                if (id == 'pronamemb')
                {
                    search_resultmb();
                }
            }
        }
        function search_result() {

            var proname = $('#proname').val();
//        alert(proname);
            proname = proname.trim();
            if (proname == '') {
                window.location.href = software_url + 'courses';
            } else {

                window.location.href = software_url + 'search?proname=' + proname;
            }

        }
        function search_resultmb() {
            var pronamemb = $('#pronamemb').val();
//        alert(proname);
            pronamemb = pronamemb.trim();
            if (proname == '') {
                window.location.href = software_url + 'courses';
            } else {
                window.location.href = software_url + 'search?proname=' + pronamemb;

            }

        }
    </script>

    <script>(function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id))
                return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=1477281805897808";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>

    <div id="overlay"></div>
<amp-img layout="responsive" align ="middle" style="z-index: 10002; display:none ;left: 50%; margin: auto; position: fixed;  top: 50%; width: 3%;" id="img_ajax" class="img-responsive" width="128" height="128" src="https://cdnp-2f3a.kxcdn.com/assets/images/loading.gif"  ></amp-img>
<div id="transparantLayer"></div>
<input type="hidden"  value="" id="login_type" />
<input type="hidden" value="" id="login_div" />
<input type="hidden" value="" id="fb_status" />
<input type="hidden" value="" id="fb_pic" />



<!-- login div  start -->
<div id="loginPopUp"  class="main_div">
    <div class="closeBtn"> <a href="#" class="demo" onclick="hidePopUp('loginPopUp');"> <img alt="close"  src="https://cdnp-2f3a.kxcdn.com/assets/images/close_button.png" width="24" height="24" /> </a> </div>
    <div class="panel1" style="display:block;"> 
        <div class="mainLogin">
            <div class="headerText">
                Sign in 
            </div>
            <div class="grayText">                                    
                with your social network
            </div>
        </div>
        <div class="footerLinks">
            <table class="tableCommon">
                <tr>
                    <td>
                                                <a onclick="set_session('')" >
                            <div  id="gPlusIcon" class="socialSiteBtns" >
                                <img width="244" height="44" class="img-responsive" style="width:100%;" src="https://cdnp-2f3a.kxcdn.com/assets/images/google+.png" ></amp-img>
                            </div>
                        </a>                                                                                          
                    </td>                    
                    <td>
                        <a onclick="fblogin();" >                                                                                                          
                            <div id="facebookIcon" class="socialSiteBtns" >
                                <img width="244" height="44" class="img-responsive" alt="connect with facebook" style="width:100%"  src="https://cdnp-2f3a.kxcdn.com/assets/images/facebook.png" />
                            </div>                                                    
                        </a>                                           
                    </td>                   
                </tr>                                
            </table>
        </div>

        <div class="orText" style="position:relative;">
            <table class="tableCommon">
                <tr>
                    <td width="47%" style="position:relative;">                                           
                        <div class="tableCommon" style="width:100%; left:-1px; position: absolute; border-top:1px solid #ccc;"> </div> 
                    </td>

                    <td width="10%" style="color: #ccc;">
                        or 
                    </td>

                    <td width="47%" style="position:relative;">
                        <div class="tableCommon"  style="width:100%; position: absolute; left: 0px; border-top:1px solid #ccc;"> </div> 
                    </td>
                </tr>
            </table>
        </div>         

        <div class="fieldsDiv">
            <input id="email" name="email" type="email" class="txtInput" placeholder="E-mail" style=" margin-right: 5px;" >
            <div id="errInput" class="errorMsg"></div>
        </div>

        <div class="fieldsDiv">
            <input id="password" name="password" type="password" class="txtInput" placeholder="Password"> <br/>
            <div id="errpw" class="errorMsg"></div>
        </div>
        <div class="fieldsDiv">
          <!-- <input onclick="login();" type="submit" value="Login" class="btnLogin"  data-loading-text="Login"> -->
            <img width="504" height="52" class="img-responsive"  alt="sign in" onclick="login('popup');" src="https://cdnp-2f3a.kxcdn.com/assets/images/sign_in_button.png" style="width:100%;" /> 
            <div class="errmsg errorMsg" style="margin-top: 0px;"></div>
            <input  type="hidden" class="" value=""  id="set_email">
        </div>
        <a href="#" style="font-family:Helvetica; margin-top: 7px;  font-size: 0.9em; color: #3399ff; margin-left: 1%; float: left;" onclick="showSignUpPopUp('redirection', 'loginPopUp', 'signUpPopUp');" >Not a member? <strong>Sign up</strong> </a> 
        <a href="#" style="font-family:Helvetica; margin-top: 7px; font-size: 0.9em; color: #3399ff;  margin-right:2%; float: right;" onclick="showFgtPwdDiv('loginPopUp', 'forget', '');" > forgot password </a>                                                                                                             
    </div>

    <div class="panel2" style="display:none;">
        <div class="fieldsDiv"><br/> 
            <input id="fgtemail" type="email" class="txtInput forget_email" placeholder="E-mail">
            <div class="error_fg errorMsg" ></div>
        </div>
        <div class="fieldsDiv">
            <!--<image onclick="getPassword('loginPopUp', 'signUpPopUp');" style="cursor:pointer; margin-top: 9px;" class="fgbtn" src="/images/send.png" />--> 
            <input onclick="getPassword('loginPopUp', 'signUpPopUp');" type="button" value="Send" class="btnLogin fgbtn"  data-loading-text="Send">                                       
        </div>
    </div>
</div>

<div id="signUpPopUp"  class="main_div" >
    <div class="closeBtn"> <a href="#" onclick="hidePopUp('signUpPopUp');"> <img alt="close" src="https://cdnp-2f3a.kxcdn.com/assets/images/close_button.png" width="24" height="24" /> </a> </div>                       
    <div class="mainLogin" >
        <div class="headerText" style="margin-bottom: 20px;">Sign up</div>
    </div>
    <div class="fieldsDiv">
        <input maxlength ="20" id="si_fullName" name="fullName" type="text" class="txtInput" placeholder="Full Name">
        <div id="si_err_N" class="error_fg errorMsg"></div>
    </div>
    <div class="fieldsDiv">
        <input maxlength ="250" id="si_email" name="email" type="email" class="txtInput" placeholder="E-mail">
        <div id="si_err_E" class="error_fg errorMsg"></div>
    </div>
    <div class="fieldsDiv">
        <input maxlength ="50" minlength ="6" id="si_password" name="password" type="password" class="txtInput" placeholder="Password">
        <div id="si_err_P" class="error_fg errorMsg"></div>
    </div>
     <div id="recaptcha1"></div>
    <div class="fieldsDiv">   
        <div id="si_err_A" class="errorMsg"></div>
        <img  alt="signup" width="343" height="52" class="img-responsive" onclick="signup('popup')" style="cursor:pointer; margin-top: 9px;" src="https://cdnp-2f3a.kxcdn.com/assets/images/sign up_button.png" />
        <!-- <input type="submit" onclick="signup()" value="Sign Up" class="btnLogin"  data-loading-text="SignUp"> -->
    </div>
    <a href="#" style="font-family:Helvetica; margin-top: 7px;  font-size: 0.9em; color: #3399ff; margin-left: 1%; float: left;" onclick="showPopUp('redirection', 'loginPopUp', 'signUpPopUp');" >Already registered? <strong>Sign in</strong> </a>                                                     
</div>
<!--login div end -->   

<!-- Navigation -->

<div class="container-fluid" style="background-color: #fff; position: relative; z-index: 9998;">
    <style type="text/css">
        .oneLiner{width: 61%;  
                  font-size: 0.98em;
                  font-family: 'Open Sans',sans-serif!important;
                  font-weight: 550;
                  color: #888787;}
        .logoDiv{background-color: #fff; padding-top:0px !important;}
        .logoDiv a:hover{background-color: #fff !important; }
        .menutext a:hover{background-color: #fff !important;}
        .menutext a {font-family: trajan_pro!important; font-size: 20px !important; color: #4c4c4c !important;}
        .loginMenuMarginLeft{margin-left: 172px; cursor: pointer;}
        .loginMenuMarginLeft a{font-size: 18px !important; }
        .signUpMenuMarginLeft{margin-left: 14px; cursor: pointer;}
        .signUpMenuMarginLeft a{font-size: 18px !important; }
        .searchAndstripMenu{position: fixed; right: 10px;  top: 36px; z-index: 9999;}
        .searchAndstripMenu span{cursor: pointer;}
        .menuSearchMobile{position: absolute;  right: 74px;  top: 18px;}     
        .dropDownForMobile{padding-top:38px !important;  padding-left: 0px; background-color:#fff;}
        .headerMainShadow{height: 108px; padding: 0px !important; width: 100%; background-color: #fff; position: fixed; right: 0px !important;  -webkit-box-shadow: 0px 1px 5px -1px rgba(0,0,0,0.75); -moz-box-shadow: 0px 1px 5px -1px rgba(0,0,0,0.75); box-shadow: 0px 1px 5px -1px rgba(0,0,0,0.75);}
        .txtCenter{text-align: center;}
        @media screen and (min-width:0px) and (max-width:1200px) {
            .txtCenter{text-align: left;}
            .logoDiv{background-color: #fff; padding-top:0px !important; padding-left: 29px;}
            #lnklogin{margin-left: 0px !important; margin-right: 25px !important;}
            .signUpMenuMarginLeft{margin-left: 0px; cursor: pointer; margin-right: 25px !important;}
            .menutext > a{padding-left: 0px !important; }
            .dropDownForMobile{padding-top:0px !important; padding-left: 29px; }
            .fullWidth{width: 100% !important;}
        }

        .eleVerticalAlign{vertical-align: bottom;}
        .open > a{background-color: #e7e7e7 !important;} 
        .open > a:hover{background-color: #e7e7e7 !important;}
        .logocommon > img{ width: 140px;}
    </style>

    <div class="searchAndstripMenu">
        <span id="mblIconSearch" class="glyphicon glyphicon-search menuSearchMobile"   aria-hidden="true" onclick="showMblSearch();"></span>
        <button onclick="hideMblSearch();" type="button" class="navbar-toggle navbar-default collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only" style="background-color: #000;">Toggle navigation</span>
            <span class="icon-bar" style="background-color: #000;"></span>
            <span class="icon-bar" style="background-color: #000;"></span>
            <span class="icon-bar" style="background-color: #000;"></span>
        </button>
    </div>
    <div class="row" >
        <div class="col-md-12 headerMainShadow txtCenter">

            <div class="fullWidth" style="display: inline-block;">
                <ul id="companyLogo" class="nav navbar-nav logoDiv" style="float: left;">
                    <li><a href="https://www.eduonix.com/"><amp-img width="140" height="63" src="https://cdnp-2f3a.kxcdn.com/assets/images/logo.png" alt="logo" class="img-responsive logocommon"> </amp-img></a></li>  
                </ul>
                <div id="navbar" class="collapse navbar-collapse fullWidth" style="float: left;">
                    <ul id="menuUL" class="nav navbar-nav dropDownForMobile">
                        <li class="menutext"> <a class="page-scroll" href="https://www.eduonix.com/" >HOME</a></li>   
                        <li class="menutext"> <a class="page-scroll" href="https://www.eduonix.com/courses">COURSES</a> </li>   
                        <li class="menutext"> <a class="page-scroll" href="https://www.eduonix.com/freebies">FREEBIES</a></li>   
                        <li class="menutext"> <a href="https://www.eduonix.com/deals" class="dropdown-toggle" >DEALS </a></li>   
                        <li class="menutext"> <a class="page-scroll" href="https://www.eduonix.com/blog">BLOG</a></li>   

                        
                                    <!--<li class="menutext" > <a class="page-scroll" href="https://www.eduonix.com/dashboard">DASHBOARD</a> </li>-->
                            <li class="menutext"> <a  href="#" style="font-weight: bold; color: #006633;" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">MY ACCOUNT<span class="caret"></span></a>  
                                <ul class="dropdown-menu subNavigation">  
                                                                        <li class="menutext fontText"><a style="font-size: 16px !important;" href="https://www.eduonix.com/dashboard">MY COURSES</a></li>

                                    <li class="menutext"><a style="font-size: 16px !important;" href="https://www.eduonix.com/log_out">LOGOUT</a></li>
                                </ul>
                            </li>
                            <li class="menutext">
                                <a class="page-scroll" href="#" >                                                
                                    <img  src="https://www.eduonix.com/assets/images/profile_images/default_user.png" alt="Profile Img" class="img-circle Profile" style="width: 45px; height: 45px; margin-top: -10px;" /> 
                                </a>  
                            </li>

                                            </ul>
                </div>
            </div> 
        </div>
    </div>
    <div id="forMblSearchInput" class="mblSearchTextbox">
<!--        <form  action="https://www.eduonix.com/search" method="post">
            <input type="text" name="proname" class="form-control input-lg" placeholder="Find Courses...">
        </form>-->
        <input autocomplete="off" type="text" onkeypress="handle(event, this.id)" id="pronamemb" name='proname' class="form-control inpHeight" placeholder="Search for Courses">
    </div>


    <a style="position: absolute;" class="navbar-brand page-scroll" href="#page-top"></a> 
</div>












<div class="center_body">
    <section class="aboutBannerSection" > 
        <div class="container">
            <div class="row">
                <div class="col-md-8 breadCrumbs">

                </div>  
                <div id="deskTopSearchDiv" class="col-md-4 searchIconSection">
                    <!--<input  id="searchinput1" onkeyup="getStates1('https://www.eduonix.com/',this.value)" onclick="getStates1('https://www.eduonix.com/',this.value)" class="placeHolderInput" placeholder="Search for Courses" type="text" style="border-radius: 5px; color: #515151; padding-left: 7px; height:30px; font-size: 17px;" > </input>-->
<!--                    <form  action="https://www.eduonix.com/search" method="post">
                        <input  autocomplete="false" id="searchinput1" name="proname" class="placeHolderInput" placeholder="Search for Courses" type="text" style="border-radius: 5px; color: #515151; padding-left: 7px; height:30px; font-size: 17px;" > </input>
                   <span id ="test" onclick="getsearch1();" class="glyphicon glyphicon-search" aria-hidden="true" style="cursor: pointer;  position:relative; left: 10px;  top: 3px;"></span> 
                        <button class="desksearch" type="submit" type="button"> <span class="glyphicon glyphicon-search" style="cursor: pointer;  position:relative; left: 10px;  top: 3px;"></span> </button>
                    </form>-->
                    <div id="results"  class="searchResultsDiv">  </div> 
                    <!--search code start-->
                    <div class="form-group input-group mrgnBottom">
                        <input autocomplete="off" type="text" onkeypress="handle(event, this.id)" id="proname" name='proname' class="form-control inpHeight" placeholder="Search for Courses">
                        <span class="input-group-btn">
                            <button id="search_btn" onclick="search_result();" class="btn" type="button" style="background: #00af6e;"><i class="fa fa-search"></i></button>
                        </span>
                    </div>
                    <!--search code end-->
                </div>               
            </div>
        </div>
    </section>     
    <section> 
        <div class="container-fluid">
             <div class="container-fluid">
                 <amp-img  src="https://cdnp-2f3a.kxcdn.com/assets/images/404_PageImg.png" alt="Page Not Found" class="img-responsive" width="1343" height="648" layout="responsive"></amp-img>
             <div id="pnfForDeskTOp" class="pageNotFnd">
                 <div>
                     > Go to the eduonix.com <a href="https://www.eduonix.com/" class="txtWhite" >home page </a>
                 </div>
                 <div>
                     > View our <a href="https://www.eduonix.com/courses" class="txtWhite">Course Page</a>
                 </div>
                 <div>
                     > You can <a href="https://www.eduonix.com/contact-us" class="txtWhite">Contact Us</a>
                 </div>
             </div>
             
             <div id="pnfForMbl" class="pageNotFndForMbl" style="display: none;">
                 <div>
                     > Go to the eduonix.com <a href="https://www.eduonix.com/" class="txtWhite" >home page </a>
                 </div>
                 <div>
                     > View our <a href="https://www.eduonix.com/courses" class="txtWhite">Course Page</a>
                 </div>
                 <div>
                     > You can <a href="https://www.eduonix.com/contact-us" class="txtWhite">Contact Us</a>
                 </div>
             </div>
             
         </div>
        </div>          
    </section>    
</div><style type="text/css">
    .newSprite{background-image:url(https://www.eduonix.com/assets/images/spritesFoo.png);background-repeat:no-repeat;display:block}.newSprite-PrivacyPolicyIcon_5{width:25px;height:25px;background-position:-9px -9px}.newSprite-about_us_8{width:25px;height:25px;background-position:-52px -9px}.newSprite-affiliates_6{width:22px;height:22px;background-position:-95px -9px}.newSprite-careerIcon_9{width:25px;height:22px;background-position:-135px -9px}.newSprite-contact_1{width:25px;height:25px;background-position:-178px -9px}.newSprite-faq_4{width:25px;height:25px;background-position:-221px -9px}.newSprite-our_web_blog_2{width:25px;height:25px;background-position:-264px -9px}.newSprite-teachforus_3{width:25px;height:25px;background-position:-307px -9px}.newSprite-tearms_conditions_7{width:25px;height:25px;background-position:-350px -9px}.pdZero{padding-left:0!important}@media (min-width:0px) and (max-width:768px){.divFloatLeft{float:left!important}}
    #notifyMeModal.modal{
        text-align: center;
    }
    #notifyMeModal.modal::before {
        content: "";	  
        display: inline-block;
        height: 100%;	 
        margin-right: -4px;
        vertical-align: middle;
    }
    #notifyMeModal .modal-dialog {	
        display: inline-block;	
        text-align: left;	
        vertical-align: middle;
    }	
    /* state popup */
    .popupHeadertitle{font-size: 1.6em !important; background-color: #8dc63f!important; color: #fff; font-family: 'Open Sans',sans-serif;}
    .pdAllSide20{padding: 20px 20px 30px 20px !important;}
    .nopopupborder{border: none !important; border-radius: 0px !important;    }
    .stateNote{margin-bottom: 13px !important;
font-family: 'Open Sans',sans-serif !important;
font-size: 1.1em !important;
}
.ddlState{width: 100% !important;          
    border: 1px solid #515151 !important;    
    height: 38px !important;
font-size: 1.2em !important;
}
.btnHtState38{background-color: #00ae6e !important; border-color: #00ae6e !important;  height: 38px !important;}
.btnHtState38:hover{background-color: #00ae6e !important; border-color: #00ae6e !important;}
.closeState{font-size: 1.7em !important; color: #fff !important; opacity: 1 !important; }
#errStateList{color: red;     font-size: .9em; font-family: 'Open Sans',sans-serif !important; margin-top:10px;}
.modal-open .modal{z-index:9999!important;overflow-y:hidden!important}.fade.in{z-index:9998}
 .modal-open{padding-right: 0px !important;} 
</style>
<footer>
    <div class="container">
        <style type="text/css">.eleVerticalAlign{vertical-align: bottom;} .eleVerticalAlign > img{width: 25px;}</style>

        <div class="row">
            <h3 class="Footer_Title">About Eduonix</h3>
        </div>
        <div class="row Foter_Border">
            <div class="col-md-4 col-xs-6 footer_1">
                <div class="col-sm-1 newSprite newSprite-contact_1 divFloatLeft"></div><div class="col-xl-10 pdZero"><p><a href="https://www.eduonix.com/contact-us">Contact Us</a></p></div>
                <div class="col-sm-1 newSprite newSprite-faq_4 divFloatLeft"></div><div class="col-xl-10 pdZero"> <p><a href="https://www.eduonix.com/f-a-q">FAQ</a></p></div>
                <div class="col-sm-1 newSprite newSprite-tearms_conditions_7 divFloatLeft"></div><div class="col-xl-10 pdZero"> <p><a href="https://www.eduonix.com/terms-and-conditions">Terms & Conditions</a></p></div>
            </div>
            <div class="col-md-3 col-xs-6 footer_1">

                <div class="col-sm-1 newSprite newSprite-our_web_blog_2 divFloatLeft"></div><div class="col-xl-10 pdZero"><p><a href="http://www.eduonix.com/blog">Our Webblog</a></p></div>
                <div class="col-sm-1 newSprite newSprite-PrivacyPolicyIcon_5 divFloatLeft"></div><div class="col-xl-10 pdZero"> <p><a href="https://www.eduonix.com/privacy-policy">Privacy Policy</a></p></div>
                <div class="col-sm-1 newSprite newSprite-about_us_8 divFloatLeft"></div><div class="col-xl-10 pdZero">  <p><a href="https://www.eduonix.com/about-us">About Us</a></p></div>

            </div>
            <div class="col-md-5 col-xs-12 footer_1">
                <div class="col-sm-1 newSprite newSprite-teachforus_3 divFloatLeft"></div><div class="col-xl-10 pdZero"><p><a href="https://www.eduonix.com/teach-for-us">Teach For Us</a></p></div>
                <div class="col-sm-1 newSprite newSprite-affiliates_6 divFloatLeft"></div><div class="col-xl-10 pdZero"> <p><a href="https://www.eduonix.com/affiliates">Affiliates</a></p></div>
                <div class="col-sm-1 newSprite newSprite-careerIcon_9 divFloatLeft"></div><div class="col-xl-10 pdZero"> <p><a href="https://www.eduonix.com/career">Opportunities</a></p></div>
            </div>
        </div>
        <div class="row">
            <p class="socialTitle text-center">Join Us On</p>
        </div>
        <div class="clearfix"></div>
        <div class="row">
            <div class="col-md-4 col-xs-offset-3 col-md-offset-5 socilBtn">
                <p class="text-center">
                    <a href="https://www.facebook.com/EDUonix" class="social fb" target="_blank"></a>
                    <a href="https://twitter.com/Tutor_Eduonix" class="social twt" target="_blank"></a>
                    <a href="https://plus.google.com/+EduonixLearning/posts" class="social gplus" target="_blank"></a>
                    <a href="https://www.youtube.com/c/eduonix" class="social tube" target="_blank"></a></p>
            </div>
        </div>
        <div class="clearfix"></div>
        <p class="copyright text-center">&#169; Eduonix Learning Solutions Pvt. Ltd. All Rights Reserved. <a style="color: #999;" href="https://www.eduonix.com/terms-and-conditions">Terms And Conditions</a> | <a style="color: #999;" href="https://www.eduonix.com/privacy-policy" >Privacy Policy</a> | <a href="https://www.eduonix.com/sitemap" style="color: #999;">Sitemap</a></p>
<!--        <p class="copyright text-center">&#169; Eduonix learning solutions pvt. ltd. all rights reserved. <a style="color: #999;" href="https://www.eduonix.com/terms-and-conditions">Terms And Conditions</a> | <a style="color: #999;" href="https://www.eduonix.com/privacy-policy" >Privacy Policy</a>  | <a href="#" style="color: #999;">Sitemap</a></p>-->
    </div>
</footer>

    
    <div id="notifyMeModal" class="modal fade" role="dialog" style="z-index: 9999;">
    <div class="modal-dialog modal-md">
        <div class="modal-header popupHeadertitle">
<button type="button" class="close closeState" data-dismiss="modal">&times;</button>
            Profile Update
        </div>
        <!-- Modal content-->
        <div class="modal-content nopopupborder">
          
            <div class="modal-body pdAllSide20">
                <div class="row">
                    <div class="col-md-12 stateNote">
                        <p>
                            Due to recent introduction of GST in the country we will need you to update your state of residence below. Please choose from the following
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10">
                        <select id="state_list" name="state_list"  class="ddlState">
                            <option value="">Select state</option>
                            <option  value="Andhra Pradesh" >Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam" >Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>                                         
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Orissa">Orissa</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                        <span id="errStateList"></span>
                    </div>
                    <div class="col-md-2">
                        <button name="submit" type="button" class="btn btn-primary btnHtState38" onclick="javascript:sumitStateFrm();">Submit</button>
                    </div>
                </div>
            </div>
          
        </div>

    </div>
</div>
<a id='backTop'>Back To Top</a> 



<!-- jQuery --> 

<script src="https://cdnp-2f3a.kxcdn.com/assets/js/bootstrap.min.js" ></script> 
<script src="https://cdnp-2f3a.kxcdn.com/assets/js/jquery.easing.min.js" defer=""></script> 
<script src="https://cdnp-2f3a.kxcdn.com/assets/js/jquery.backTop.min.js" defer=""></script> 

<!--<script src="https://cdnp-2f3a.kxcdn.com/assets/js/meter.js"></script> 
<script src="https://cdnp-2f3a.kxcdn.com/assets/js/scrolling-nav.js"></script> -->

   <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
        async defer>
    </script>

</div>
<script>
                          function sumitStateFrm()
                          {
                              if ($("#state_list").val() == "")
                              {
                                  $("#errStateList").html("Please select your state.");
                              } else
                              {
                                  $('#errStateList').html("");
                                  $('#errStateList').show();
                                  $.ajax({
                                      method: "POST",
                                      url: "https://www.eduonix.com/editprofile/update_state",
                                      data: {state_list: $("#state_list").val()},
                                      success: function (res) {

                                          $('#errStateList').css('color', '#00ae6e');
                                          $('#errStateList').text('Your information updated sucessfully...').removeClass('dn').addClass('db');
                                          $('#errStateList').fadeOut(5000);
                                          $('#notifyMeModal').modal('hide');
                                      },
                                      error: function (msg) {


                                      }
                                  });
                              }
                          }
</script>

<!--reamarketing code by madhuram aug 2017 10   start-->
<script>
if(jQuery('#poiu').length == 1) // product page
{
  var id =jQuery('#poiu').val();
  var page_type = "program";
  var price = jQuery('.productPrice span').text().replace(/[^0-9.]/g,'');
  var google_tag_params = {
    edu_pid: id, 
    edu_pagetype: page_type,
    edu_totalvalue: parseFloat(price)
  };
  jQuery('.productBuyButton').click(function(){
    (new Image()).src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/984412926/?guid=ON&script=0&data.edu_pagetype=lead";
  })
} else
  if(window.location.href.indexOf("/search") !=-1 || window.location.pathname == "/courses") // Cart page
  {
    var page_type = "searchresults";
    var google_tag_params = {
      edu_pagetype: page_type
    };
  }
  else  if(window.location.href.indexOf("place_conversion_page_url") !=-1)	// Category page
  {
   
    var page_type = "complete";
   var google_tag_params = {
      edu_pagetype: page_type
    };
  }
  else if(window.location.pathname == '/' ) //home page
  {
    
    var page_type = "home";
    var google_tag_params = {
      edu_pagetype: page_type
    };
  }
  else
  {
   
    var page_type = "other";
   var google_tag_params = {
      edu_pagetype: page_type
    };
  }
</script>
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 984412926;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/984412926/?guid=ON&amp;script=0"/>
</div>
</noscript>
<!--reamarketing code by madhuram aug 2017 10  end -->
<!-- Scripts -->

<!-- start sitepointproduction -->
<!--<script>(function($) {
        $(document).ready(function() {
            if (typeof DISQUSWIDGETS != "undefined") {
                DISQUSWIDGETS.loadCount($, "sitepointproduction")
            }
        });
    })(jQuery);</script>-->

<!-- End sitepointproduction -->

<!-- Start Perfectaudience Script To add it to our site-->
<!-- <script type="text/javascript">
    (function () {
        window._pa = window._pa || {};
        // _pa.orderId = "myOrderId"; // OPTIONAL: attach unique conversion identifier to conversions
        // _pa.revenue = "19.99"; // OPTIONAL: attach dynamic purchase values to conversions
        // _pa.productId = "myProductId"; // OPTIONAL: Include product ID for use with dynamic ads
        var pa = document.createElement('script');
        pa.type = 'text/javascript';
        pa.async = true;
        pa.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + "//tag.marinsm.com/serve/521763c924bdfa8163000052.js";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(pa, s);
    })();
</script> -->
<!--End Perfectaudience Script To add it to our site-->



<!-- Code Start site24x7 -->
<!-- <script type="text/javascript">var rumMOKey = '1c0d48c37de9499184626f021eaefb36';
    (function () {
        if (window.performance && window.performance.timing && window.performance.navigation) {
            var site24x7_rum_beacon = document.createElement('script');
            site24x7_rum_beacon.async = true;
            site24x7_rum_beacon.setAttribute('src', '//static.site24x7rum.com/js/rum-beacon-min.js');
            document.getElementsByTagName('head')[0].appendChild(site24x7_rum_beacon);
        }
    })(window)</script> -->
<!-- Code End site24x7 -->

<!-- Start Google Code for Remarketing Tag -->

<!--<script type="text/javascript">
    /* <![CDATA[ */
    var google_conversion_id = 919589874;
    var google_custom_params = window.google_tag_params;
    var google_remarketing_only = true;
    /* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js" defer="">
</script>
<noscript>
<div style="display:inline;">
    <img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/919589874/?value=0&amp;guid=ON&amp;script=0"/>
</div>
</noscript>-->

<!-- End Google Code for Remarketing Tag -->

<!-- Google Code for Remarketing Tag on 03-02-02017-->
<!--------------------------------------------------
Remarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. See more information and instructions on how to setup the tag on: http://google.com/ads/remarketingsetup
--------------------------------------------------->
<!--<script type="text/javascript">
    var google_tag_params = {
        edu_pid: 'REPLACE_WITH_VALUE',
        edu_plocid: 'REPLACE_WITH_VALUE',
        edu_pagetype: 'REPLACE_WITH_VALUE',
        edu_totalvalue: 'REPLACE_WITH_VALUE',
    };

    /* <![CDATA[ */
    var google_conversion_id = 984412926;
    var google_custom_params = window.google_tag_params;
    var google_remarketing_only = true;
    /* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
    <img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/984412926/?guid=ON&amp;script=0"/>
</div>
</noscript>-->
<!--End Google Code for Remarketing Tag on 03-02-02017-->

<!--Start of linkedin course - From Sumesh on 29-08-2016-->
<!--<script type="text/javascript">
    _linkedin_data_partner_id = "17047";
</script><script type="text/javascript">
    (function() {
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";
        b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
    })();
</script>-->
<!--END  of linkedin course - From Sumesh on 29-08-2016-->






<!--Start of linkedin course - From Sumesh on 22-02-2017-->
<!-- <script type="text/javascript">
    _linkedin_data_partner_id = "35267";
</script><script type="text/javascript">
    (function () {
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";
        b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
    })();
</script> -->
<!--END  of linkedin course - From Sumesh on 22-02-2017-->




<!--// Adroll code from Sumesh (16/9/2016) --start----------------->
<!-- <script type="text/javascript">
    adroll_adv_id = "QWTGXYRBUZASBCYUFHYJJI";
    adroll_pix_id = "D6QEVHDRG5CK5ABHERVVN3";
    /* OPTIONAL: provide email to improve user identification */
    /* adroll_email = "username@example.com"; */
    (function () {
        var _onload = function () {
            if (document.readyState && !/loaded|complete/.test(document.readyState)) {
                setTimeout(_onload, 10);
                return
            }
            if (!window.__adroll_loaded) {
                __adroll_loaded = true;
                setTimeout(_onload, 50);
                return
            }
            var scr = document.createElement("script");
            var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
            scr.setAttribute('async', 'true');
            scr.type = "text/javascript";
            scr.src = host + "/j/roundtrip.js";
            ((document.getElementsByTagName('head') || [null])[0] ||
                    document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
        };
        if (window.addEventListener) {
            window.addEventListener('load', _onload, false);
        } else {
            window.attachEvent('onload', _onload)
        }
    }());
</script> -->
<!--// Adroll code from Sumesh (16/9/2016) --end----------------->

<!-- Start  ViralMint JS on 2016-09-28-->
<!--<script type="text/javascript">
    window.vrlmnt = (function(d, s, id) {
        var js, vjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id))
            return;
        js = d.createElement(s);
        js.src = "//cdn.viralmint.com/js/viralmint-min.js";
        js.id = id;
        js.acc_id = "1475298066";
        vjs.parentNode.insertBefore(js, vjs);
        return window.vrlmnt || (v = {_e: [], ready: function(f) {
                v._e.push(f)
            }});
    }(document, "script", "viralmint-js"));
</script>-->
<!-- End ViralMint JS on 2016-09-28-->


<!-- Twitter universal website tag code on 2016-09-28-->
<!-- <script>
    !function (e, t, n, s, u, a) {
        e.twq || (s = e.twq = function () {
            s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
        }, s.version = '1.1', s.queue = [], u = t.createElement(n), u.async = !0, u.src = '//static.ads-twitter.com/uwt.js',
                a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a))
    }(window, document, 'script');
// Insert Twitter Pixel ID and Standard Event data below
    twq('init', 'nvija');
    twq('track', 'PageView');
</script> -->
<!-- End Twitter universal website tag code on 2016-09-28-->

<!-- Start Marketing script on 2016-10-19-->
<!-- <img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/919589874/?guid=ON&amp;script=0"/> -->
<!-- End Marketing script on 2016-10-19-->





<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-TTFCJR"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({'gtm.start':
                    new Date().getTime(), event: 'gtm.js'});
        var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
                '//www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-TTFCJR');</script>
<!-- End Google Tag Manager -->





</body>
</html>
