//<![CDATA[

/*GLOBAL SETTINGS, USER CAN CHANGE*/
var MONTH_FORMAT = [, "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];


// JQuery hover event with timeout by Taufik Nurrohman - https://plus.google.com/108949996304093815163/about
(function(c){c.fn.hoverTimeout=function(d,e,f,g){return this.each(function(){var a=null,b=c(this);b.hover(function(){clearTimeout(a);a=setTimeout(function(){e.call(b)},d)},function(){clearTimeout(a);a=setTimeout(function(){g.call(b)},f)})})}})(jQuery);

// jquery replacetext plugin https://github.com/cowboy/jquery-replacetext
(function(e){e.fn.replaceText=function(t,n,r){return this.each(function(){var i=this.firstChild,s,o,u=[];if(i){do{if(i.nodeType===3){s=i.nodeValue;o=s.replace(t,n);if(o!==s){if(!r&&/</.test(o)){e(i).before(o);u.push(i)}else{i.nodeValue=o}}}}while(i=i.nextSibling)}u.length&&e(u).remove()})}})(jQuery);



// SelectNav.js - by: https://github.com/lukaszfiszer/selectnav.js - Adaptado por http://www.ideiasblog.com
window.selectnav=function(){"use strict";var e=function(e,t){function c(e){var t;if(!e)e=window.event;if(e.target)t=e.target;else if(e.srcElement)t=e.srcElement;if(t.nodeType===3)t=t.parentNode;if(t.value)window.location.href=t.value}function h(e){var t=e.nodeName.toLowerCase();return t==="ul"||t==="ol"}function p(e){for(var t=1;document.getElementById("selectnav"+t);t++);return e?"selectnav"+t:"selectnav"+(t-1)}function d(e){a++;var t=e.children.length,n="",l="",c=a-1;if(!t){return}if(c){while(c--){l+=o}l+=" "}for(var v=0;v<t;v++){var m=e.children[v].children[0];if(typeof m!=="undefined"){var g=m.innerText||m.textContent;var y="";if(r){y=m.className.search(r)!==-1||m.parentNode.className.search(r)!==-1?f:""}if(i&&!y){y=m.href===document.URL?f:""}n+='<option value="'+m.href+'" '+y+">"+l+g+"</option>";if(s){var b=e.children[v].children[1];if(b&&h(b)){n+=d(b)}}}}if(a===1&&u){n='<option value="">'+u+"</option>"+n}if(a===1){n='<select class="selectnav" id="'+p(true)+'">'+n+"</select>"}a--;return n}e=document.getElementById(e);if(!e){return}if(!h(e)){return}if(!("insertAdjacentHTML"in window.document.documentElement)){return}document.documentElement.className+=" js";var n=t||{},r=n.activeclass||"active",i=typeof n.autoselect==="boolean"?n.autoselect:true,s=typeof n.nested==="boolean"?n.nested:true,o=n.indent||"→",u=n.label||"Menu",a=0,f=" selected ";e.insertAdjacentHTML("afterend",d(e));var l=document.getElementById(p());if(l.addEventListener){l.addEventListener("change",c)}if(l.attachEvent){l.attachEvent("onchange",c)}return l};return function(t,n){e(t,n)}}();$(document).ready(function(){selectnav('nav');selectnav('nav1');});

// Tabslet jQuery plugin -  http://vdw.staytuned.gr
(function($,window,undefined){$.fn.tabslet=function(options){var defaults={mouseevent:"click",attribute:"href",animation:false,autorotate:false,pauseonhover:true,delay:2000,active:1,controls:{prev:".prev",next:".next"}};var options=$.extend(defaults,options);return this.each(function(){var $this=$(this);options.mouseevent=$this.data("mouseevent")||options.mouseevent;options.attribute=$this.data("attribute")||options.attribute;options.animation=$this.data("animation")||options.animation;options.autorotate=$this.data("autorotate")||options.autorotate;options.pauseonhover=$this.data("pauseonhover")||options.pauseonhover;options.delay=$this.data("delay")||options.delay;options.active=$this.data("active")||options.active;$this.find("> div").hide();$this.find("> div").eq(options.active-1).show();$this.find("> ul li").eq(options.active-1).addClass("active");var fn=eval(function(){$(this).trigger("_before");$this.find("> ul li").removeClass("active");$(this).addClass("active");$this.find("> div").hide();var currentTab=$(this).find("a").attr(options.attribute);if(options.animation){$this.find(currentTab).animate({opacity:"show"},"slow",function(){$(this).trigger("_after")})}else{$this.find(currentTab).show();$(this).trigger("_after")}return false});var init=eval("$this.find('> ul li')."+options.mouseevent+"(fn)");init;var elements=$this.find("> ul li"),i=options.active-1;function forward(){i=++i%elements.length;options.mouseevent=="hover"?elements.eq(i).trigger("mouseover"):elements.eq(i).click();var t=setTimeout(forward,options.delay);$this.mouseover(function(){if(options.pauseonhover){clearTimeout(t)}})}if(options.autorotate){setTimeout(forward,0);if(options.pauseonhover){$this.on("mouseleave",function(){setTimeout(forward,1000)})}}function move(direction){if(direction=="forward"){i=++i%elements.length}if(direction=="backward"){i=--i%elements.length}elements.eq(i).click()}$this.find(options.controls.next).click(function(){move("forward")});$this.find(options.controls.prev).click(function(){move("backward")});$this.on("destroy",function(){$(this).removeData()})})};$(document).ready(function(){$('[data-toggle="tabslet"]').tabslet()})})(jQuery);

// Simple Tab JQuery Plugin by Taufik Nurrohman - https://plus.google.com/108949996304093815163/about
(function(a){a.fn.simplyTab=function(b){b=jQuery.extend({active:1,fx:null,showSpeed:400,hideSpeed:400,showEasing:null,hideEasing:null,show:function(){},hide:function(){},change:function(){}},b);return this.each(function(){var e=a(this),c=e.children("[data-tab]"),d=b.active-1;e.addClass("simplyTab").prepend('<ul class="wrap-tab"></ul>');c.addClass("content-tab").each(function(){a(this).hide();e.find(".wrap-tab").append('<li><a href="#">'+a(this).data("tab")+"</a></li>")}).eq(d).show();e.find(".wrap-tab a").on("click",function(){var f=a(this).parent().index();a(this).closest(".wrap-tab").find(".activeTab").removeClass("activeTab");a(this).addClass("activeTab");if(b.fx=="slide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fade"){if(c.eq(f).is(":hidden")){c.hide().eq(f).fadeIn(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fancyslide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).delay(b.hideSpeed).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(c.eq(f).is(":hidden")){c.hide().eq(f).show()}}}}b.change.call(e);return false}).eq(d).addClass("activeTab")})}})(jQuery);

$(document).ready(function() {
    $(".cmm-tabs").simplyTab({
        active: 1,
        fx: "fade",
        showSpeed: 400,
        hideSpeed: 400
    });
    $('.blogger-tab').append($('#comments'));
    $(".cmm-tabs.simplyTab .wrap-tab").wrap("<div class='cmm-tabs-header'/>");
    $('.cmm-tabs-header').prepend('<h3><h8>Post </h8>Comment<h9>s</h9></h3>')
});
$(document).ready(function() {
    $("ul#sub-menu").parent("li").addClass("hasSub");
    (jQuery)
});
$(document).ready(function() {
    $('a[name="ads-post-in"]').before($('#ads-post10').html());
    $('#ads-post10').html('')
});
$(document).ready(function() {
    $(".sidebar-wrapper .widget h2").wrap("<div class='widget-title'/>");
    $(".footer-sections .widget h2").wrap("<div class='widget-title'/>");
    $(".index .post-outer,.archive .post-outer").each(function() {
        $(this).find(".block-image .thumb a").attr("style", function(e, t) {
            return t.replace("/default.jpg", "/mqdefault.jpg")
        }).attr("style", function(e, t) {
            return t.replace("s72-c", "s1600")
        })
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#back-to-top').fadeIn()
        } else {
            $('#back-to-top').fadeOut()
        }
    });
    $('#back-to-top').hide().click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false
    });
    var search = $('.search');
    search.click(function(e) {
        e.preventDefault();
        if (search.is('.active') && $(e.target).is(search)) {
            search.removeClass('active')
        } else {
            search.addClass('active');
            search.find('input').focus()
        }
    });
    $('body').click(function(e) {
        if (search.is('.active') && !$(e.target).is('.search, .search form, .search input')) {
            search.removeClass('active')
        }
    });
    (function(e) {
        var t = e("a.newer-link");
        var n = e("a.older-link");
        e.get(t.attr("href"), function(n) {
            t.html('<strong>Next</strong><span>' + e(n).find(".post h1.post-title").text() + "</span>")
        }, "html");
        e.get(n.attr("href"), function(t) {
            n.html('<strong>Previous</strong><span>' + e(t).find(".post h1.post-title").text() + "</span>")
        }, "html")
    })(jQuery)
});
$("#related-posts").each(function() {
    var g = $(this).html();
    $.ajax({
        url: "/feeds/posts/default/-/" + g + "?alt=json-in-script&max-results=" + related_number,
        type: 'get',
        dataType: "jsonp",
        success: function(data) {
            var posturl = "";
            var htmlcode = '<div class="related">';
            for (var i = 0; i < data.feed.entry.length; i++) {
                for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                    if (data.feed.entry[i].link[j].rel == "alternate") {
                        posturl = data.feed.entry[i].link[j].href;
                        break
                    }
                }
                var posttitle = data.feed.entry[i].title.$t;
                var content = data.feed.entry[i].content.$t;
                var $content = $('<div>').html(content);
                if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                    var src2 = data.feed.entry[i].media$thumbnail.url;
                    var thumb = '<a class="related-img" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>'
                } else if (content.indexOf("<img") > -1) {
                    var src = $content.find('img:first').attr('src');
                    var thumb = '<a class="related-img" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"/>'
                } else {
                    var thumb = '<a class="related-img" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
                }
                htmlcode += '<li><div class="related-thumb">' + thumb + '</div><h3 class="related-title"><a href="' + posturl + '">' + posttitle + '</a></h3></li>'
            }
            htmlcode += '</div><div class="clear"/>';
            $("#related-posts").html(htmlcode);
            $('.related-img').each(function() {
                $(this).attr('style', function(i, src) {
                    return src.replace('/default.jpg', '/mqdefault.jpg')
                }).attr('style', function(i, src) {
                    return src.replace('s72-c', 's1600')
                })
            });
            $("p.trans").each(function() {
                var e = $(this).text();
                var t = $(this).attr("data-tran");
                $("#pages-wrap *").replaceText(e, t)
            })
        }
    })
});
$("#feat-sec .HTML .widget-content").each(function() {
    var th = $(this),
        label = th.text(),
        h2 = $(this).prev("h2").text();
    $.ajax({
        url: "/feeds/posts/default/-/" + label + "?alt=json-in-script&max-results=3",
        type: 'get',
        dataType: "jsonp",
        success: function(data) {
            var url = "";
            var boxcode = '<div class="uk-featured-post">';
            for (var i = 0; i < data.feed.entry.length; i++) {
                for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                    if (data.feed.entry[i].link[j].rel == "alternate") {
                        url = data.feed.entry[i].link[j].href;
                        break
                    }
                }
                var title = data.feed.entry[i].title.$t;
                var author_name = data.feed.entry[i].author[0].name.$t;
                var get_date = data.feed.entry[i].published.$t,
                    year = get_date.substring(0, 4),
                    month = get_date.substring(5, 7),
                    day = get_date.substring(8, 10),
                    date = MONTH_FORMAT[parseInt(month, 10)] + ' ' + day + ', ' + year;
                var content = data.feed.entry[i].content.$t;
                var $content = $('<div>').html(content);
                var re = /<\S[^>]*>/g;
                var snippet = content.replace(re, "");
                if (snippet.length > 96) {
                    snippet = '' + snippet.substring(0, 140) + '...'
                }
                if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                    var img2 = data.feed.entry[i].media$thumbnail.url;
                    var image = img2
                } else if (content.indexOf("<img") > -1) {
                    var img = $content.find('img:first').attr('src');
                    var image = img
                } else {
                    var image = NO_IMAGE
                }
                if (i == 0) {
                    boxcode += '<div class="uk-column1"><div class="uk-featured-item item1"><div class="uk-post-thumb"><a class="uk-image" href="' + url + '" style="background:url(' + image + ') no-repeat center center;background-size: cover"></a></div><div class="uk-post-inner"><div class="uk-post-caption"><h3 class="uk-post-title"><a href="' + url + '">' + title + '</a></h3><div class="date-header"><div id="meta-post"><span><i class="fa fa-user"/><a class="g-profile" rel="author">' + author_name + '</a></span><i class="fa fa-clock-o"/> <span class="published timeago">' + date + '</span></div></div><div class="meta-border"/><div class="uk-snippet"><span>' + snippet + '</span></div></div></div></div></div>'
                } else if (i == 1) {
                    boxcode += '<div class="uk-column2"><div class="uk-featured-item item2"><div class="uk-post-thumb"><a class="uk-image" href="' + url + '" style="background:url(' + image + ') no-repeat center center;background-size: cover"></a></div><div class="uk-post-inner"><div class="uk-post-caption"><h3 class="uk-post-title"><a href="' + url + '">' + title + '</a></h3><div class="date-header"><div id="meta-post"><span><i class="fa fa-user"/><a class="g-profile" rel="author">' + author_name + '</a></span><i class="fa fa-clock-o"/> <span class="published timeago">' + date + '</span></div></div></div></div></div>'
                } else if (i == 2) {
                    boxcode += '<div class="uk-featured-item item3"><div class="uk-post-thumb"><a class="uk-image" href="' + url + '" style="background:url(' + image + ') no-repeat center center;background-size: cover"></a></div><div class="uk-post-inner"><div class="uk-post-caption"><h3 class="uk-post-title"><a href="' + url + '">' + title + '</a></h3><div class="date-header"><div id="meta-post"><span><i class="fa fa-user"/><a class="g-profile" rel="author">' + author_name + '</a></span><i class="fa fa-clock-o"/> <span class="published timeago">' + date + '</span></div></div></div></div></div></div>'
                }
            }
            boxcode += '</div>';
            $("#feat-sec .HTML .widget-content").each(function() {
                th.html(boxcode);
                $(this).prev("h2").html('<a href="/search/label/' + label + '">' + h2 + '</a>');
                $(this).prev("h2").wrap('<div class="box-title"></div>');
                $(this).removeClass('widget-content').addClass('box-content');
                $(this).find('.box-image').each(function() {
                    $(this).attr('style', function(i, src) {
                        return src.replace('/default.jpg', '/mqdefault.jpg')
                    }).attr('style', function(i, src) {
                        return src.replace('s72-c', 's1600')
                    })
                })
            })
        }
    })
});
$('.HTML .widget-content').each(function() {
    var text = $(this).text();
    if (text.match('randomposts')) {
        $.ajax({
            url: "/feeds/posts/default?alt=json-in-script",
            type: 'get',
            dataType: "jsonp",
            success: function(datax) {
                var numpost = datax.feed.entry.length;
                var min = 0;
                var max = numpost - randomposts_number;
                var random = Math.floor(Math.random() * (max - min + 1)) + min;
                $.ajax({
                    url: "/feeds/posts/default?alt=json-in-script&start-index=" + random + "&max-results=" + randomposts_number,
                    type: 'get',
                    dataType: "jsonp",
                    success: function(data) {
                        var posturl = "";
                        var htmlcode = '<ul class="roma-widget">';
                        for (var i = 0; i < data.feed.entry.length; i++) {
                            for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                                if (data.feed.entry[i].link[j].rel == "alternate") {
                                    posturl = data.feed.entry[i].link[j].href;
                                    break
                                }
                            }
                            var posttitle = data.feed.entry[i].title.$t;
                            var tag = data.feed.entry[i].category[0].term;
                            var content = data.feed.entry[i].content.$t;
                            var $content = $('<div>').html(content);
                            if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                                var src2 = data.feed.entry[i].media$thumbnail.url;
                                var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>'
                            } else if (content.indexOf("<img") > -1) {
                                var src = $content.find('img:first').attr('src');
                                var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"/>'
                            } else {
                                var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
                            }
                            htmlcode += '<li><div class="wid-thumb">' + thumb + '</div><div class="p-head"><h3 class="wrp-titulo"><a href="' + posturl + '">' + posttitle + '</a></h3></div></li>'
                        }
                        htmlcode += '</ul><div class="clear"/>';
                        $('.HTML .widget-content').each(function() {
                            if ($(this).text().match('randomposts')) {
                                $(this).html(htmlcode);
                                $(this).find('.rcp-thumb').each(function() {
                                    $(this).attr('style', function(i, src) {
                                        return src.replace('/default.jpg', '/mqdefault.jpg')
                                    }).attr('style', function(i, src) {
                                        return src.replace('s72-c', 's1600')
                                    })
                                });
                                $("p.trans").each(function() {
                                    var e = $(this).text();
                                    var t = $(this).attr("data-tran");
                                    $("#pages-wrap *").replaceText(e, t)
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    if (text.match('recentposts')) {
        $.ajax({
            url: "/feeds/posts/default?alt=json-in-script",
            type: 'get',
            dataType: "jsonp",
            success: function(datax) {
                $.ajax({
                    url: "/feeds/posts/default?alt=json-in-script&max-results=" + recentposts_number,
                    type: 'get',
                    dataType: "jsonp",
                    success: function(data) {
                        var posturl = "";
                        var htmlcode = '<ul class="roma-widget">';
                        for (var i = 0; i < data.feed.entry.length; i++) {
                            for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                                if (data.feed.entry[i].link[j].rel == "alternate") {
                                    posturl = data.feed.entry[i].link[j].href;
                                    break
                                }
                            }
                            var posttitle = data.feed.entry[i].title.$t;
                            var tag = data.feed.entry[i].category[0].term;
                            var content = data.feed.entry[i].content.$t;
                            var $content = $('<div>').html(content);
                            if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                                var src2 = data.feed.entry[i].media$thumbnail.url;
                                var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>'
                            } else if (content.indexOf("<img") > -1) {
                                var src = $content.find('img:first').attr('src');
                                var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"/>'
                            } else {
                                var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
                            }
                            htmlcode += '<li><div class="wid-thumb">' + thumb + '</div><div class="p-head"><h3 class="wrp-titulo"><a href="' + posturl + '">' + posttitle + '</a></h3></div></li>'
                        }
                        htmlcode += '</ul><div class="clear"/>';
                        $('.HTML .widget-content').each(function() {
                            if ($(this).text().match('recentposts')) {
                                $(this).html(htmlcode);
                                $(this).find('.rcp-thumb').each(function() {
                                    $(this).attr('style', function(i, src) {
                                        return src.replace('/default.jpg', '/mqdefault.jpg')
                                    }).attr('style', function(i, src) {
                                        return src.replace('s72-c', 's1600')
                                    })
                                });
                                $("p.trans").each(function() {
                                    var e = $(this).text();
                                    var t = $(this).attr("data-tran");
                                    $("#pages-wrap *").replaceText(e, t)
                                })
                            }
                        })
                    }
                })
            }
        })
    }
});

//]]>
