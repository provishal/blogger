//<![CDATA[
$(function(_0x868ex2) {
    _0x868ex2['fn']['lazyyard'] = function() {
        return this['each'](function() {
            var _0x868ex3 = _0x868ex2(this),
                _0x868ex4 = _0x868ex3['attr']('src'),
                _0x868ex5 = Math['round'](_0x868ex3['width']()),
                _0x868ex1 = Math['round'](_0x868ex3['height']()),
                _0x868ex6 = '/w' + _0x868ex5 + '-h' + _0x868ex1 + '-p-k-no-nu',
                _0x868ex7 = '';
            if (_0x868ex4['match']('s72-c')) {
                _0x868ex7 = _0x868ex4['replace']('/s72-c', _0x868ex6)
            } else {
                if (_0x868ex4['match']('w72-h')) {
                    _0x868ex7 = _0x868ex4['replace']('/w72-h72-p-k-no-nu', _0x868ex6)
                } else {
                    _0x868ex7 = _0x868ex4
                }
            };
            _0x868ex2(window)['on']('load resize scroll', _0x868ex8);

            function _0x868ex8() {
                var _0x868ex4 = _0x868ex2(window)['height'](),
                    _0x868ex5 = _0x868ex2(window)['scrollTop'](),
                    _0x868ex1 = _0x868ex3['offset']()['top'];
                if (_0x868ex5 + _0x868ex4 > _0x868ex1) {
                    var _0x868ex6 = new Image();
                    _0x868ex6['onload'] = function() {
                        _0x868ex3['addClass']('lazy-yard')
                    }, _0x868ex6['src'] = _0x868ex7
                }
            }
            _0x868ex8()
        })
    }
});
$(function() {
    $('.index-post .post-image-link .post-thumb, .PopularPosts .post-image-link .post-thumb, .FeaturedPost .entry-image-link .post-thumb,.about-author .author-avatar, .item-post .post-body img')['lazyyard']();
    $('#main-menu')['each'](function() {
        var _0x868ex9 = $(this)['find']('.LinkList ul > li')['children']('a'),
            _0x868exa = _0x868ex9['length'];
        for (var _0x868exb = 0; _0x868exb < _0x868exa; _0x868exb++) {
            var _0x868exc = _0x868ex9['eq'](_0x868exb),
                _0x868exd = _0x868exc['text']();
            if (_0x868exd['charAt'](0) !== '_') {
                var _0x868exe = _0x868ex9['eq'](_0x868exb + 1),
                    _0x868exf = _0x868exe['text']();
                if (_0x868exf['charAt'](0) === '_') {
                    var _0x868ex10 = _0x868exc['parent']();
                    _0x868ex10['append']('<ul class="sub-menu m-sub"/>')
                }
            };
            if (_0x868exd['charAt'](0) === '_') {
                _0x868exc['text'](_0x868exd['replace']('_', ''));
                _0x868exc['parent']()['appendTo'](_0x868ex10['children']('.sub-menu'))
            }
        };
        for (var _0x868exb = 0; _0x868exb < _0x868exa; _0x868exb++) {
            var _0x868ex11 = _0x868ex9['eq'](_0x868exb),
                _0x868ex12 = _0x868ex11['text']();
            if (_0x868ex12['charAt'](0) !== '_') {
                var _0x868ex13 = _0x868ex9['eq'](_0x868exb + 1),
                    _0x868ex14 = _0x868ex13['text']();
                if (_0x868ex14['charAt'](0) === '_') {
                    var _0x868ex15 = _0x868ex11['parent']();
                    _0x868ex15['append']('<ul class="sub-menu2 m-sub"/>')
                }
            };
            if (_0x868ex12['charAt'](0) === '_') {
                _0x868ex11['text'](_0x868ex12['replace']('_', ''));
                _0x868ex11['parent']()['appendTo'](_0x868ex15['children']('.sub-menu2'))
            }
        };
        $('#main-menu ul li ul')['parent']('li')['addClass']('has-sub');
        $('#main-menu ul > li a')['each'](function() {
            var _0x868ex16 = $(this),
                _0x868ex17 = _0x868ex16['text']()['trim'](),
                _0x868ex18 = _0x868ex17['toLowerCase'](),
                _0x868ex19 = _0x868ex17['split']('-'),
                _0x868ex1a = _0x868ex19[0];
            if (_0x868ex18['match']('-text')) {
                _0x868ex16['attr']('data-title', _0x868ex1a);
                _0x868ex16['parent']('li')['addClass']('li-home')['find']('> a')['text'](_0x868ex1a)
            };
            if (_0x868ex17['match']('-icon')) {
                _0x868ex16['attr']('data-title', _0x868ex1a);
                _0x868ex16['parent']('li')['addClass']('li-home li-home-icon')['find']('> a')['html']('<i class="fa fa-home"/>')
            }
        });
        $('#main-menu .widget')['addClass']('show-menu')
    });
    $('#main-menu-nav')['clone']()['appendTo']('.mobile-menu');
    $('.mobile-menu .has-sub')['append']('<div class="submenu-toggle"/>');
    $('.mobile-menu ul > li a')['each'](function() {
        var _0x868ex16 = $(this),
            _0x868ex1b = _0x868ex16['attr']('href')['trim'](),
            _0x868ex1c = _0x868ex1b['toLowerCase'](),
            _0x868ex1d = _0x868ex1b['split']('/'),
            _0x868ex1e = _0x868ex1d[0],
            _0x868ex1a = _0x868ex16['data']('title');
        _0x868ex16['parent']('li.li-home')['find']('> a')['text'](_0x868ex1a);
        if (_0x868ex1c['match']('mega-menu')) {
            _0x868ex16['attr']('href', '/search/label/' + _0x868ex1e + '?&max-results=' + postPerPage)
        }
    });
    $('.slide-menu-toggle')['on']('click', function() {
        $('body')['toggleClass']('nav-active')
    });
    $('.mobile-menu ul li .submenu-toggle')['on']('click', function(_0x868ex16) {
        if ($(this)['parent']()['hasClass']('has-sub')) {
            _0x868ex16['preventDefault']();
            if (!$(this)['parent']()['hasClass']('show')) {
                $(this)['parent']()['addClass']('show')['children']('.m-sub')['slideToggle'](170)
            } else {
                $(this)['parent']()['removeClass']('show')['find']('> .m-sub')['slideToggle'](170)
            }
        }
    });
    $('.show-search')['on']('click', function() {
        $('#nav-search')['fadeIn'](250)['find']('input')['focus']()
    });
    $('.hide-search')['on']('click', function() {
        $('#nav-search')['fadeOut'](250)['find']('input')['blur']()
    });
    $('.Label a, a.b-label')['attr']('href', function(_0x868ex16, _0x868ex1f) {
        return _0x868ex1f['replace'](_0x868ex1f, _0x868ex1f + '?&max-results=' + postPerPage)
    });
    $('.avatar-image-container img')['attr']('src', function(_0x868ex16, _0x868exb) {
        _0x868exb = _0x868exb['replace']('/s35-c/', '/s45-c/');
        _0x868exb = _0x868exb['replace']('//img1.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png');
        return _0x868exb
    });
    $('.author-description a')['each'](function() {
        $(this)['attr']('target', '_blank')
    });
    $('.post-nav')['each'](function() {
        var _0x868ex20 = $('a.prev-post-link')['attr']('href'),
            _0x868ex21 = $('a.next-post-link')['attr']('href');
        $['ajax']({
            url: _0x868ex20,
            type: 'get',
            success: function(_0x868ex22) {
                var _0x868ex1a = $(_0x868ex22)['find']('.blog-post h1.post-title')['text']();
                $('.post-prev a .post-nav-inner p')['text'](_0x868ex1a)
            }
        });
        $['ajax']({
            url: _0x868ex21,
            type: 'get',
            success: function(_0x868ex23) {
                var _0x868ex1a = $(_0x868ex23)['find']('.blog-post h1.post-title')['text']();
                $('.post-next a .post-nav-inner p')['text'](_0x868ex1a)
            }
        })
    });
    $('.post-body strike')['each'](function() {
        var _0x868ex16 = $(this),
            _0x868ex1c = _0x868ex16['text']();
        if (_0x868ex1c['match']('left-sidebar')) {
            _0x868ex16['replaceWith']('<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>')
        };
        if (_0x868ex1c['match']('right-sidebar')) {
            _0x868ex16['replaceWith']('<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>')
        };
        if (_0x868ex1c['match']('full-width')) {
            _0x868ex16['replaceWith']('<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>')
        }
    });
    $('#main-wrapper, #sidebar-wrapper')['each'](function() {
        if (fixedSidebar == true) {
            $(this)['theiaStickySidebar']({
                additionalMarginTop: 30,
                additionalMarginBottom: 30
            })
        }
    });
    $('.back-top')['each'](function() {
        var _0x868ex16 = $(this);
        $(window)['on']('scroll', function() {
            $(this)['scrollTop']() >= 100 ? _0x868ex16['fadeIn'](250) : _0x868ex16['fadeOut'](250)
        }), _0x868ex16['click'](function() {
            $('html, body')['animate']({
                scrollTop: 0
            }, 500)
        })
    });
    $('#main-menu #main-menu-nav li')['each'](function() {
        var _0x868ex24 = $(this),
            _0x868ex1b = _0x868ex24['find']('a')['attr']('href')['trim'](),
            _0x868ex16 = _0x868ex24,
            _0x868ex1c = _0x868ex1b['toLowerCase'](),
            _0x868ex1d = _0x868ex1b['split']('/'),
            _0x868ex1e = _0x868ex1d[0];
        _0x868ex37(_0x868ex16, _0x868ex1c, 4, _0x868ex1e)
    });
    $('#hot-section .widget-content')['each'](function() {
        var _0x868ex16 = $(this),
            _0x868ex1b = _0x868ex16['text']()['trim'](),
            _0x868ex1c = _0x868ex1b['toLowerCase'](),
            _0x868ex1d = _0x868ex1b['split']('/'),
            _0x868ex1e = _0x868ex1d[0];
        _0x868ex37(_0x868ex16, _0x868ex1c, 4, _0x868ex1e)
    });
    $('.common-widget .widget-content')['each'](function() {
        var _0x868ex16 = $(this),
            _0x868ex1b = _0x868ex16['text']()['trim'](),
            _0x868ex1c = _0x868ex1b['toLowerCase'](),
            _0x868ex1d = _0x868ex1b['split']('/'),
            _0x868ex25 = _0x868ex1d[0],
            _0x868ex1e = _0x868ex1d[1];
        _0x868ex37(_0x868ex16, _0x868ex1c, _0x868ex25, _0x868ex1e)
    });
    $('.related-ready')['each'](function() {
        var _0x868ex16 = $(this),
            _0x868ex1e = _0x868ex16['find']('.related-tag')['data']('label');
        _0x868ex37(_0x868ex16, 'related', 3, _0x868ex1e)
    });

    function _0x868ex26(_0x868ex27, _0x868exb) {
        for (var _0x868ex28 = 0; _0x868ex28 < _0x868ex27[_0x868exb]['link']['length']; _0x868ex28++) {
            if (_0x868ex27[_0x868exb]['link'][_0x868ex28]['rel'] == 'alternate') {
                var _0x868ex29 = _0x868ex27[_0x868exb]['link'][_0x868ex28]['href'];
                break
            }
        };
        return _0x868ex29
    }

    function _0x868ex2a(_0x868ex27, _0x868exb, _0x868ex29) {
        var _0x868ex2b = _0x868ex27[_0x868exb]['title']['$t'],
            _0x868ex2c = '<a href="' + _0x868ex29 + '">' + _0x868ex2b + '</a>';
        return _0x868ex2c
    }

    function _0x868ex2d(_0x868ex27, _0x868exb) {
        var _0x868ex2b = _0x868ex27[_0x868exb]['author'][0]['name']['$t'],
            _0x868ex2c = '<span class="post-author"><a>' + _0x868ex2b + '</a></span>';
        return _0x868ex2c
    }

    function _0x868ex2e(_0x868ex27, _0x868exb) {
        var _0x868ex4 = _0x868ex27[_0x868exb]['published']['$t'],
            _0x868ex5 = _0x868ex4['substring'](0, 4),
            _0x868ex6 = _0x868ex4['substring'](5, 7),
            _0x868ex2f = _0x868ex4['substring'](8, 10),
            _0x868ex8 = monthFormat[parseInt(_0x868ex6, 10) - 1] + ' ' + _0x868ex2f + ', ' + _0x868ex5,
            _0x868ex2c = '<span class="post-date">' + _0x868ex8 + '</span>';
        return _0x868ex2c
    }

    function _0x868ex30(_0x868ex27, _0x868exb) {
        var _0x868ex2b = _0x868ex27[_0x868exb]['title']['$t'],
            _0x868ex31 = _0x868ex27[_0x868exb]['content']['$t'],
            _0x868ex32 = $('<div>')['html'](_0x868ex31);
        if ('media$thumbnail' in _0x868ex27[_0x868exb]) {
            var _0x868ex33 = _0x868ex27[_0x868exb]['media$thumbnail']['url'],
                _0x868ex34 = _0x868ex33['replace']('/s72-c', '/w680');
            if (_0x868ex31['indexOf']('youtube.com/embed') > -1) {
                _0x868ex34 = _0x868ex33['replace']('/default.', '/hqdefault.')
            }
        } else {
            if (_0x868ex31['indexOf']('<img') > -1) {
                _0x868ex34 = _0x868ex32['find']('img:first')['attr']('src')
            } else {
                _0x868ex34 = noThumbnail
            }
        };
        var _0x868ex2c = '<img class="post-thumb" alt="' + _0x868ex2b + '" src="' + _0x868ex34 + '"/>';
        return _0x868ex2c
    }

    function _0x868ex35(_0x868ex27, _0x868exb) {
        if (_0x868ex27[_0x868exb]['category'] != undefined) {
            var _0x868ex36 = _0x868ex27[_0x868exb]['category'][0]['term'],
                _0x868ex2c = '<span class="post-tag">' + _0x868ex36 + '</span>'
        } else {
            _0x868ex2c = ''
        };
        return _0x868ex2c
    }

    function _0x868ex37(_0x868ex16, _0x868ex1c, _0x868ex25, _0x868ex1e) {
        if (_0x868ex1c['match']('mega-menu') || _0x868ex1c['match']('hot-posts') || _0x868ex1c['match']('featured') || _0x868ex1c['match']('post-list') || _0x868ex1c['match']('related')) {
            var _0x868ex38 = '';
            if (_0x868ex1e == 'recent') {
                _0x868ex38 = '/feeds/posts/default?alt=json-in-script&max-results=' + _0x868ex25
            } else {
                if (_0x868ex1e == 'random') {
                    var _0x868ex39 = Math['floor'](Math['random']() * _0x868ex25) + 1;
                    _0x868ex38 = '/feeds/posts/default?max-results=' + _0x868ex25 + '&start-index=' + _0x868ex39 + '&alt=json-in-script'
                } else {
                    _0x868ex38 = '/feeds/posts/default/-/' + _0x868ex1e + '?alt=json-in-script&max-results=' + _0x868ex25
                }
            };
            $['ajax']({
                url: _0x868ex38,
                type: 'get',
                dataType: 'jsonp',
                beforeSend: function() {
                    if (_0x868ex1c['match']('hot-posts')) {
                        _0x868ex16['html']('<div class="hot-loader"/>')['parent']()['addClass']('show-hot')
                    }
                },
                success: function(_0x868ex3a) {
                    if (_0x868ex1c['match']('mega-menu')) {
                        var _0x868ex3b = '<ul class="mega-menu-inner">'
                    } else {
                        if (_0x868ex1c['match']('hot-posts')) {
                            var _0x868ex3b = '<ul class="hot-posts">'
                        } else {
                            if (_0x868ex1c['match']('post-list')) {
                                var _0x868ex3b = '<ul class="custom-widget">'
                            } else {
                                if (_0x868ex1c['match']('related')) {
                                    var _0x868ex3b = '<ul class="related-posts">'
                                }
                            }
                        }
                    };
                    var _0x868ex3c = _0x868ex3a['feed']['entry'];
                    if (_0x868ex3c != undefined) {
                        for (var _0x868exb = 0, _0x868ex27 = _0x868ex3c; _0x868exb < _0x868ex27['length']; _0x868exb++) {
                            var _0x868ex29 = _0x868ex26(_0x868ex27, _0x868exb),
                                _0x868ex1a = _0x868ex2a(_0x868ex27, _0x868exb, _0x868ex29),
                                _0x868ex3d = _0x868ex30(_0x868ex27, _0x868exb),
                                _0x868ex36 = _0x868ex35(_0x868ex27, _0x868exb),
                                _0x868ex3e = _0x868ex2d(_0x868ex27, _0x868exb),
                                _0x868ex3f = _0x868ex2e(_0x868ex27, _0x868exb);
                            var _0x868ex40 = '';
                            if (_0x868ex1c['match']('mega-menu')) {
                                _0x868ex40 += '<div class="mega-item item-' + _0x868exb + '"><div class="mega-content"><div class="post-image-wrap"><a class="post-image-link" href="' + _0x868ex29 + '">' + _0x868ex3d + '</a>' + _0x868ex36 + '</div><h2 class="post-title">' + _0x868ex1a + '</h2><div class="post-meta">' + _0x868ex3f + '</div></div></div>'
                            } else {
                                if (_0x868ex1c['match']('hot-posts')) {
                                    if (_0x868exb == 0) {
                                        _0x868ex40 += '<li class="hot-item item-' + _0x868exb + '"><div class="hot-item-inner"><a class="post-image-link" href="' + _0x868ex29 + '">' + _0x868ex3d + '</a>' + _0x868ex36 + '<div class="post-info"><h2 class="post-title">' + _0x868ex1a + '</h2><div class="post-meta">' + _0x868ex3e + _0x868ex3f + '</div></div></div></li>'
                                    } else {
                                        _0x868ex40 += '<li class="hot-item item-' + _0x868exb + '"><div class="hot-item-inner"><a class="post-image-link" href="' + _0x868ex29 + '">' + _0x868ex3d + '</a>' + _0x868ex36 + '<div class="post-info"><h2 class="post-title">' + _0x868ex1a + '</h2><div class="post-meta">' + _0x868ex3f + '</div></div></div></li>'
                                    }
                                } else {
                                    if (_0x868ex1c['match']('post-list')) {
                                        _0x868ex40 += '<li class="item-' + _0x868exb + '"><a class="post-image-link" href="' + _0x868ex29 + '">' + _0x868ex3d + '</a><div class="post-info"><h2 class="post-title">' + _0x868ex1a + '</h2><div class="post-meta">' + _0x868ex3f + '</div></div></div></li>'
                                    } else {
                                        if (_0x868ex1c['match']('related')) {
                                            _0x868ex40 += '<li class="related-item item-' + _0x868exb + '"><div class="post-image-wrap"><a class="post-image-link" href="' + _0x868ex29 + '">' + _0x868ex3d + '</a>' + _0x868ex36 + '</div><h2 class="post-title">' + _0x868ex1a + '</h2><div class="post-meta">' + _0x868ex3f + '</div></li>'
                                        }
                                    }
                                }
                            };
                            _0x868ex3b += _0x868ex40
                        };
                        _0x868ex3b += '</ul>'
                    } else {
                        _0x868ex3b = '<ul class="no-posts">Error: No Posts Found <i class="fa fa-frown"/></ul>'
                    };
                    if (_0x868ex1c['match']('mega-menu')) {
                        _0x868ex16['addClass']('has-sub mega-menu')['append'](_0x868ex3b);
                        _0x868ex16['find']('a:first')['attr']('href', function(_0x868ex16, _0x868ex1f) {
                            if (_0x868ex1e == 'recent' || _0x868ex1e == 'random') {
                                _0x868ex1f = _0x868ex1f['replace'](_0x868ex1f, '/search/?&max-results=' + postPerPage)
                            } else {
                                _0x868ex1f = _0x868ex1f['replace'](_0x868ex1f, '/search/label/' + _0x868ex1e + '?&max-results=' + postPerPage)
                            };
                            return _0x868ex1f
                        })
                    } else {
                        if (_0x868ex1c['match']('hot-posts')) {
                            _0x868ex16['html'](_0x868ex3b)['parent']()['addClass']('show-hot')
                        } else {
                            _0x868ex16['html'](_0x868ex3b)
                        }
                    };
                    _0x868ex16['find']('.post-thumb')['lazyyard']()
                }
            })
        }
    }
    $('.blog-post-comments')['each'](function() {
        var _0x868ex41 = commentsSystem,
            _0x868ex42 = disqus_blogger_current_url,
            _0x868ex43 = '<div id="disqus_thread"/>',
            _0x868ex44 = $(location)['attr']('href'),
            _0x868ex45 = '<div class="fb-comments" data-width="100%" data-href="' + _0x868ex44 + '" data-numposts="5"></div>',
            _0x868ex46 = 'comments-system-' + _0x868ex41;
        if (_0x868ex41 == 'blogger') {
            $(this)['addClass'](_0x868ex46)['show']()
        } else {
            if (_0x868ex41 == 'disqus') {
                (function() {
                    var _0x868ex47 = document['createElement']('script');
                    _0x868ex47['type'] = 'text/javascript';
                    _0x868ex47['async'] = true;
                    _0x868ex47['src'] = '//' + disqusShortname + '.disqus.com/embed.js';
                    (document['getElementsByTagName']('head')[0] || document['getElementsByTagName']('body')[0])['appendChild'](_0x868ex47)
                })();
                $('#comments, #gpluscomments')['remove']();
                $(this)['append'](_0x868ex43)['addClass'](_0x868ex46)['show']()
            } else {
                if (_0x868ex41 == 'facebook') {
                    $('#comments, #gpluscomments')['remove']();
                    $(this)['append'](_0x868ex45)['addClass'](_0x868ex46)['show']()
                } else {
                    if (_0x868ex41 == 'hide') {
                        $(this)['hide']()
                    } else {
                        $(this)['addClass']('comments-system-default')['show']()
                    }
                }
            }
        }
    })
})
//]]>
