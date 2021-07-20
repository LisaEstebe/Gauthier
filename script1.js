    // snipcart custom
        var s = skrollr.init({
            forceHeight: true
        });
        skrollr.menu.init(s);

        $(function() {
          Snipcart.do("bind", "cart.opened", function() {
            skrollr.destroy();
          });

          Snipcart.do("bind", "cart.closed", function() {
            var s = skrollr.init({
              forceHeight: true
            });

            skrollr.menu.init(s);
          });
        });


    // google analytics
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-41295742-1', 'giantsheadfreeride.com');
        ga('send', 'pageview');


    // lib
        function loadBg(e,s) {
            var s=typeof s!=='undefined' ? s:1000;
            $("div"+e).each(function() {
                if(typeof $(this).attr("data-src") !== 'undefined') {
                    $(this).css({opacity: 0});
                    $(this).css({backgroundImage: "url('" + $(this).data('src')+"')"});
                    $(this).animate({opacity:1}, s, 'easeOutQuad', function() {
                        $(this).removeAttr("data-src");
                    });
                }
            });
        }

        function loadImg(e, s) {
            s=typeof s!=='undefined' ? s:1000;
            $("img"+e).each(function() {
                if(typeof $(this).attr("data-src")!=='undefined') {
                    $(this).css({opacity: 0});
                    this.src = $(this).data('src');
                    $(this).animate({opacity:1},s,'easeOutQuad', function() {
                        $(this).removeAttr("data-src");
                    });
                }
            });
        }


    // main
        $(window).load(function(){
            $('body').animate({opacity:1},500);
            $("#checkout").delay(1000).animate({opacity:1},500);  // show content
            loadBg ("#page2bg",0);
            loadBg ("#page3bg",0);
            loadBg ("#page4bg",0);
            loadImg (".galSteam",0);
            loadImg (".galCup",0);
            loadImg (".imgBuy",0);
            loadImg (".cupGrow",0);
            loadImg (".cupPlant",0)
            loadImg (".infoTree",0);
        });

        //fonction mdp
        //
        //vidéos ssi résolution ok
