(function() {
    function fetchDeviceInfo() {
        var iosImg = document.getElementById("iosImg");
        var androidImg = document.getElementById("androidImg");
        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i)
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
            }
        };
        var android = false,
            ios = false;
        if (isMobile.Android() && isMobile.Android().length) android = true;
        if (isMobile.iOS() && isMobile.iOS().length) ios = true;
        if (iosImg && androidImg)
            if (android && !ios) {
                androidImg.classList.remove("hide");
                iosImg.classList.add("hide");
                androidImg.classList.add("show")
            } else if (!android && ios) {
            androidImg.classList.add("hide");
            iosImg.classList.remove("hide");
            iosImg.classList.add("show")
        }
    }
    fetchDeviceInfo()
})();
var currentOpenTabTag = "";

function showNotifications() {
    $(".notification-icon").parent(".notification").find(".notification-list-container").show(), $(".personal-banking-overlay, .personal-banking-container, .search-overlay").hide();
    $(".menu-level-2 .right-side-menu .menu-leaf").removeClass("is-active");
    $(".sub-menu-wrapper").removeClass("is-active")
}

function closeNotifications() {
    $(".noti-close-btn").closest(".notification").find(".notification-list-container, .notification-overlay").hide(), $("body").removeClass("no-scroll"), $(".notification-icon, .menu-search-box, .user-login").show()
}

function closePersonalBanking() {
    $(".personal-banking").removeClass("is-active"), $(".personal-close-btn").closest(".personal-banking-wrapper").siblings(".personal-banking-overlay").hide().removeClass("is-active"), $(".personal-close-btn").closest(".personal-banking-wrapper").find(".personal-banking-container, .personal-banking-overlay").hide()
}

function closeSerach() {
    $("#search-main, #Search").val(""), $(".search-overlay, .overlay-search-box").hide(), $("header .menu-search-box #search-main, .mobile .search-box #Search").val("");
    $(".search-overlay").removeClass("is-active"), $("body").removeClass("no-scroll"), $(".burger-menu").show()
}

function closeRightProduct() {
    $(".find-product-menu").find(".title").removeClass("is-active");
    $(".find-product-menu").find(".find-product-dropdown").removeClass("is-active");
    $(".find-product-menu").siblings(".menu-overlay").hide();
    $(".fp-selectmenu").removeClass("ui-selectmenu-open");
    $(".ui-selectmenu-button").removeClass("ui-selectmenu-button-open")
}

function searchsearchList(searchArray, inputText, ulElement) {
    $(ulElement).html("");
    for (var index$0 = 0; index$0 < searchArray.length; index$0++) {
        var searchListItem = searchArray[index$0]["searchList"];
        var searchLinkItem = searchArray[index$0]["searchLink"];
        if (searchListItem.toUpperCase().includes(inputText.toUpperCase()) || inputText == "all") {
            if (inputText != "all") searchListItem = searchListItem.replace(inputText, "\x3cb\x3e" + inputText + "\x3c/b\x3e");
            $("\x3cli\x3e \x3ca href\x3d'" + searchLinkItem + "'\x3e" + searchListItem +
                "\x3c/a\x3e\x3c/li\x3e").appendTo(ulElement)
        }
    }
}

function contactUsSlider() {
    !$(".contact-slider").hasClass("slick-initialized") && $(".contact-slider").slick({
        dots: !0,
        infinite: !0,
        autoplay: !0,
        autoplaySpeed: 2E3,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    })
}
$(function($) {
    $(document).click(function(e) {
        if ($(document).width() >= 960) {
            var $menu = $(".menu-container");
            var menuClick = $(e.target).closest(".menu-inner").parent().hasClass("menu-level-3");
            if (menuClick) {
                $(".body-overlay").show();
                return true
            }
            $menu.is(e.target) || 0 !== $menu.has(e.target).length || !$(".menu-overlay").hasClass("is-active") || $(".login-overlay").hasClass("is-active") ? $menu.is(e.target) || 0 !== $menu.has(e.target).length || ($(".primary-menu \x3e li").stop(!0, !0).removeClass("is-active"), $(".secondary-menu-wrapper").stop(!0, !0).fadeOut().removeClass("is-active"), $(".body-overlay").removeClass("is-active"), $(".body-overlay").hide()) : ($(".menu-overlay").hide(), $("body").removeClass("no-scroll"), $(".primary-menu \x3e li, .menu-overlay").removeClass("is-active"), $(".notification-list-container, .notification-menu-overlay").hide(), $(".personal-banking-container, .personal-banking-overlay").hide(), $(".personal-banking").removeClass("is-active"));
            var $menu2 = $(".menu-container .overlay-search-box");
            !$menu2.is(e.target) && 0 ===
                $menu2.has(e.target).length && $(".menu-overlay").hasClass("is-active") && ($(".search-overlay, .overlay-search-box").hide(), $("header .menu-search-box #search-main, .mobile .search-box #Search").val(""), $("#search-main, #Search").val(""), $("body").removeClass("no-scroll"))
        }
        var $target = $(e.target);
        if (!$target.closest(".menu-level-2 .right-side-menu .menu-leaf").length) {
            $(".menu-level-2 .right-side-menu .menu-leaf").removeClass("is-active");
            $(".menu-level-2 .right-side-menu .menu-leaf").find(".sub-menu-wrapper").removeClass("is-active");
            if ($(".contact-slider").hasClass("slick-initialized")) $(".contact-slider").slick("unslick")
        }
        var $menu1 = $(".main-menu .primary-menu");
        navigator.userAgent.match(/iPad/i) || null != navigator.userAgent.match(/iPad/i) ? $menu1.is(e.target) || 0 !== $menu1.has(e.target).length || ($(".secondary-menu-wrapper").hide(), $(".body-overlay").hide()) : !$menu1.is(e.target) && 0 === $menu1.has(e.target).length && $(".body-overlay").hasClass("is-active") && ($(".secondary-menu-wrapper").hide(), $(".body-overlay").hide());
        if (!$(e.target).closest(".find-product-menu").length &&
            !$(e.target).closest(".fp-selectmenu").length && $(".find-product-dropdown").hasClass("is-active") && !$target.hasClass("ui-selectmenu-text")) closeRightProduct()
    });
    navigator.userAgent.match(/iPad/i) || null != navigator.userAgent.match(/iPad/i) ? $(".menu-level-1 .menu-leaf").on("click", function() {
        closeNotifications(), closePersonalBanking(), closeRightProduct(), $(".notification-list-container, .notification-menu-overlay, .search-overlay").hide(), clickIndex = $(".menu-level-1 .menu-leaf").index($(this)), $(this).hasClass("is-active") &&
            $(".menu-level-1 .menu-leaf.is-active").index($(".menu-level-1 .menu-leaf") == clickIndex) ? ($(this).removeClass("is-active"), $(this).find(".sub-menu-wrapper").removeClass("is-active")) : ($(".menu-level-1 .menu-leaf").removeClass("is-active"), $(".menu-level-1 .menu-leaf").find(".sub-menu-wrapper").removeClass("is-active"), $(this).addClass("is-active"), $(this).find(".sub-menu-wrapper").addClass("is-active")), contactUsSlider()
    }) : $(".menu-level-1 .menu-leaf, .menu-level-2 .right-side-menu .menu-leaf").hover(function() {
        closeNotifications(),
            closePersonalBanking(), closeRightProduct(), closeSerach(), $(this).addClass("is-active"), $(this).find(".sub-menu-wrapper").addClass("is-active"), contactUsSlider()
    }, function() {
        $(this).removeClass("is-active"), $(this).find(".sub-menu-wrapper").removeClass("is-active");
        $(".contact-slider").slick("unslick")
    });
    $(window).bind("resize", function() {
        $(document).width() < 479 ? ($(".notification-icon").on("click", function() {
                $(document).width() < 479 && $(".menu-search-box, .notification-icon, .user-login").hide()
            }), $(".noti-close-btn:visible").length >
            0 && $(".menu-search-box, .notification-icon, .user-login").hide()) : $(document).width() >= 479 && $(".menu-search-box, .notification-icon, .user-login").show()
    }).trigger("resize"), $(".body-overlay").hover(function() {
        $(this).fadeOut()
    });
    $(".menu-close-btn").click(function(e) {
        $(".other-dropdown").removeClass("active"), $(".menu-inner .left-side-menu li.active").addClass("current"), $(".personal-menu").removeClass("active"), $(".menu-level-1").removeClass("active")
    }), $(".menu-btn").on("click", function() {
        $(".menu-btn, .right-block, .lang-icon-mob, .languageselect-mob").toggleClass("hide"),
            $(".countryselect-mob").toggleClass("active"), $(".main-menu-wrapper").toggleClass("is-active"), $(".menu-list-item .menu-fold").removeClass("is-active"), $(".menu-tab-content .menu-tab-item").hide(), $(".menu-tab-content .menu-tab-item:eq(0)").show()
    }), $(".menu-back-link").on("click", function() {
        $(this).closest(".menu-fold").toggleClass("is-active")
    })
});
var breadcrumbEl = $(".breadcrumb-nav");
if (breadcrumbEl.length) {
    var bcElBottomOffset = breadcrumbEl.get(0).offsetTop + breadcrumbEl.get(0).offsetHeight + 30;
    $(window).on("scroll", function() {
        var mainMenuEl = $(".header-menu").get(0);
        if (mainMenuEl && window.pageYOffset + mainMenuEl.offsetHeight > bcElBottomOffset) {
            breadcrumbEl.addClass("sticky");
            if ($(".sf-search-wrapper").length <= 0) breadcrumbEl.addClass("nosearch")
        } else breadcrumbEl.removeClass("sticky")
    })
} else $(window).on("scroll", function() {
    $(window).scrollTop() > 130 ? ($(".new-header.desktop").hasClass("sticky-enable") &&
        $(".new-header.desktop").addClass("sticky"), $(".new-header.mobile").hasClass("sticky-enable") && $(".new-header.mobile").addClass("sticky")) : ($(".new-header.desktop").removeClass("sticky"), $(".new-header.mobile").removeClass("sticky"))
});
$(document).ready(function() {
    $(".mobile-menu-wrapper .menu-tab-lists .menu-tab-list .menu-tab").click(function() {
        if ($(this).parent().hasClass("personal-tab")) $(".mobile-menu-wrapper .menu-tab-content .menu-list-item ul:first").show();
        $(this).parent().find(".menu-tab-ul").toggle("show")
    });
    $("#language-drop li").click(function() {
        var selectedCountryLanguage = $(this).find("a").text();
        $(".languageselect #language span").text(selectedCountryLanguage), $("#language-drop").removeClass("is-active")
    });
    offerHeaderDefault();

    function offerHeaderDefault() {
        if ($("header").hasClass("offer-header")) {
            $(".mobile-menu-wrapper .menu-tab-lists .menu-tab-list .menu-tab").removeClass("active");
            $(".mobile-menu-wrapper .menu-tab-lists .menu-tab-list .menu-tab-ul").hide();
            $(".mobile-menu-wrapper .menu-tab-content .menu-list-item ul:first").hide()
        }
    }
    $(".close-menu").click(function() {
        offerHeaderDefault()
    });
    $(".login-overlay .menu-list-item li a").off("click").on("click", function(e) {
        if (!isMobile.iPad()) return;
        var $this = $(this);
        e.preventDefault();
        var dataIpad = $this[0].getAttribute("data-ipad");
        var href = $this[0].getAttribute("href");
        if (dataIpad) window.location.href = dataIpad;
        else window.location.href = href
    });
    $(document).ready(function() {
        $(".student.horizontal-tab a").click(function() {
            $(this).parents(".student.horizontal-tab").find("li").removeClass("active");
            $(this).parent().addClass("active");
            var currentTab = $(this).attr("href");
            currentOpenTabTag = $(this).attr("tag");
            loadSolutionFilterCards($(this).attr("href"), $(this).attr("tag"));
            onChangeOfSolutionFilter($(this));
            $(this).parents(".studenthorizontal.horizontal-link-tab").find(".solutionpanel.tab-panel").removeClass("active");
            $(currentTab).addClass("active");
            resetStudentForm();
            letsGetStartedCall("#" + $(this).parents().attr("id"));
            handleStudentNudges($(this).parents().attr("tag"));
            return false
        })
    })
});

function stickmenuforspecificdiv(classname, stickname, scroll) {
    if ($("." + classname).length > 0) {
        var divstart = $("." + classname).offset().top + 50;
        var divheight = $("." + classname).outerHeight();
        var divheight = $("." + classname).outerHeight();
        var divend = divstart + divheight - 100;
        if (scroll >= divstart && scroll < divend && $("." + classname).isOnScreen()) $("." + classname + " ." + stickname).addClass("sticky");
        else $("." + classname + " ." + stickname).removeClass("sticky")
    }
}
$(window).bind("scroll", function() {
    var scroll = $(window).scrollTop();
    stickmenuforspecificdiv("stickwholediv", "stick", scroll)
});

function queryParameters() {
    var result = {},
        param, params = document.location.search.split(/\?|&/);
    params.forEach(function(it) {
        if (!it && it === "") return;
        param = it.split("\x3d");
        result[param[0]] = param[1]
    });
    return result ? result : null
}

function getQueryParams() {
    return document.location.search
}

function setActiveTabAccordingURL() {
    $(".menu-level-1 .link-area a").each(function() {
        $(this).parent().parent().removeClass("current");
        if (window.location.pathname.indexOf("parent") > -1 && $(this).attr("href").indexOf("parent") > -1) {
            $(this).parent().parent().addClass("current");
            localStorage.setItem("link-name", "PARENT");
            return false
        } else if (window.location.pathname.indexOf("student") > -1 && $(this).attr("href").indexOf("student") > -1) {
            $(this).parent().parent().addClass("current");
            localStorage.setItem("link-name",
                "STUDENT");
            return false
        } else if (window.location.pathname.indexOf("institute") > -1 && $(this).attr("href").indexOf("institute") > -1) {
            $(this).parent().parent().addClass("current");
            localStorage.setItem("link-name", "INSTITUTE");
            return false
        }
    });
    if (window.location.pathname.indexOf("solutions") > -1) {
        $(".menu-level-1 .link-area a").each(function() {
            $(this).parent().parent().removeClass("current")
        });
        localStorage.removeItem("link-name")
    }
    if (!(window.location.pathname.indexOf("campus-power/") > -1)) localStorage.setItem("link-name",
        "CAMPUS POWER")
}
var FedID = $.cookie("FedID");
var FedID_NLI = $.cookie("Fed_ID_NLI");
$(document).ready(function() {
    addClassesToSegments();
    checkFedIdUser();
    var segmentName = readSegmentCookie("SEGMENT");
    replaceSelectedSegment(segmentName)
});

function checkFedIdUser() {
    if (typeof FedID != "undefined")
        if (FedID != null) $(".new-user-login").css("display", "none");
    if ($("#notificationIcon").length == 0);
    else if (typeof FedID != "undefined") {
        if (FedID != null) {
            $("#notificationIcon").insertAfter($(".user-login"));
            $("#notificationIcon").css("display", "block")
        }
    } else {
        $("#notificationIcon").insertAfter($(".new-user-login"));
        $("#notificationIcon").css("display", "block")
    }
}

function writeCookie(bankingSegment) {
    createSegmentCookie("SEGMENT", bankingSegment, 30)
}

function createSegmentCookie(cookieName, bankingSegment, expireTime) {
    var timestamp = "";
    if (expireTime) {
        var currentDate = new Date;
        currentDate.setTime(currentDate.getTime() + expireTime * 24 * 60 * 60 * 1E3);
        timestamp = "; expires\x3d" + currentDate.toUTCString()
    }
    document.cookie = cookieName + "\x3d" + bankingSegment + timestamp + ";"
}

function readSegmentCookie(cookieName) {
    var cookieString = cookieName + "\x3d";
    var cookiesArray = document.cookie.split(";");
    for (var i = 0; i < cookiesArray.length; i++) {
        var segmantCookie = cookiesArray[i];
        while (segmantCookie.charAt(0) == " ") segmantCookie = segmantCookie.substring(1, segmantCookie.length);
        if (segmantCookie.indexOf(cookieString) == 0) return segmantCookie.substring(cookieString.length, segmantCookie.length)
    }
    return null
}

function replaceSelectedSegment(segmentName) {
    if (segmentName != "" && segmentName != null && /^[a-zA-Z\d]*$/i.test(segmentName)) {
        if (segmentName == "Personal") segmentName = "PersonalBanking";
        if (segmentName == "Corporate") segmentName = "CorporateBanking";
        if (segmentName == "NRIBANKING") segmentName = "NRIBanking";
        var segmentText = $("." + segmentName).text();
        var segmentHref = $("." + segmentName).attr("href");
        if (segmentText != null && segmentText != "" && segmentHref != null && segmentHref != "" && typeof segmentText != "undefined" && typeof segmentHref !=
            "undefined") {
            $("#loginsection").replaceWith('\x3ca display-text\x3d"' + segmentName + '" class\x3d"ic-btn white" id\x3d"loginsection" href\x3d"' + segmentHref + '"\x3e' + segmentText + "\x3c/a\x3e");
            $("#login-btn").replaceWith('\x3ca id\x3d"login-btn" class\x3d"ic-btn" href\x3d"' + segmentHref + '" target\x3d"_self"\x3eLOGIN\x3c/a\x3e')
        }
    }
    var loginSection = $("#loginsection").attr("display-text");
    if (loginSection != "" && loginSection != null) {
        loginSection = loginSection.replace(" ", "");
        if ($("a").hasClass(loginSection)) $("a." +
            loginSection).parent().remove()
    }
}
$(".personal-list li a").on("click", function(e) {
    var anchorText = $(this).text();
    var cookieText = anchorText.replace(/\s+/g, "");
    writeCookie(cookieText)
});

function addClassesToSegments() {
    $(".personal-list li a").each(function() {
        $(this).addClass($(this).text().replace(/\s+/g, ""))
    })
}
$(function($) {
    $(".notification-icon").on("mouseover", function(event) {
        closeRightProduct();
        event.stopPropagation(), $(".notification-menu-overlay").is(":visible") ? closeNotifications() : showNotifications()
    }), $(".noti-close-btn").on("click", function() {
        closeNotifications()
    }), $(".personal-banking").on("mouseover", function(event) {
        $(".menu-level-2 .right-side-menu .menu-leaf").removeClass("is-active");
        $(".sub-menu-wrapper").removeClass("is-active");
        closeRightProduct();
        event.preventDefault(), event.stopPropagation(),
            $(this).addClass("is-active"), $(this).parent(".personal-banking-wrapper").siblings(".personal-banking-overlay").show().addClass("is-active"), $(this).parent(".personal-banking-wrapper").find(".personal-banking-container").show(), $(".notification-list-container, .notification-menu-overlay, .search-overlay").hide()
    }), $(".personal-close-btn").on("click", function() {
        closePersonalBanking()
    }), $(".personal-banking-container").on("mouseleave", function() {
        closePersonalBanking()
    }), $(".personal-list a").on("click",
        function(e) {
            $(".personal-banking a").html(e.currentTarget.text), $(".personal-banking-overlay, .personal-banking-container").hide()
        }), $(".device-noti-btn").on("click", function() {
        $(this).closest(".notification").siblings(".notification-menu-overlay").show().addClass("is-active"), $(".languageselect-mob").addClass("active"), $(".languageselect-mob").removeClass("hide"), $(".countryselect-mob").addClass("active"), $(".notification-list-container").show(), $("body").addClass("no-scroll"), $(".search-wrapper, .device-noti-btn, .mob-user-login").hide(),
            $(".noti-close-btn .close-icon").show(), $(".burger-menu").hide();
        $(".search").hide()
    }), $(".noti-close-btn .close-icon").on("click", function() {
        $(".notification-icon, .menu-search-box, .user-login").show(), $(".search-wrapper, .device-noti-btn, .mob-user-login").show(), $(this).closest(".notification-menu-overlay").hide().removeClass("is-active"), $(".languageselect-mob").removeClass("active"), $(".languageselect-mob").addClass("hide"), $(".countryselect-mob").removeClass("active"), $("body").removeClass("no-scroll"),
            $(".burger-menu").show();
        $(".search").show()
    }), $(".mob-user-login .ic-btn").on("click", function() {
        $(this).hide(), $(".burger-menu").hide(), $(".login-overlay, .login-close-btn, .languageselect-mob").show(), $(".countryselect-mob").addClass("active"), $(".search-wrapper, .notification").hide(), $(".languageselect-mob").removeClass("hide");
        $(".countryselect-mob").removeClass("hide");
        $(".search").hide()
    }), $(".login-close-btn").on("click", function() {
        $(this).hide(), $(".burger-menu").show(), $(".search-wrapper, .notification,.mob-user-login .ic-btn").show(),
            $(".languageselect-mob").addClass("hide");
        $(".countryselect-mob").removeClass("active");
        $(".login-overlay").hide();
        $(".search").show()
    }), $(".user-login").on("click", function(e) {
        $(this).find(".login-overlay").hasClass("is-active") ? ($(this).find(".login-overlay").removeClass("is-active"), $(this).find(".login-overlay").hide()) : ($(this).find(".login-overlay").show(), $(this).find(".login-overlay").addClass("is-active"), $(".personal-banking").removeClass("is-active"), $(".personal-banking-overlay").removeClass("is-active").hide(),
            $(".personal-banking-container").hide(), $(".notification-list-container, .notification-menu-overlay, .search-overlay").hide())
    }), $(".login-close-btn").on("click", function() {
        $(".search-wrapper, .notification,.mob-user-login .ic-btn").show()
    }), $(".menu-level-1 .other-menu").hover(function(e) {
        e.preventDefault()
    }), $(".menu-level-1 .personal-menu").hover(function() {}, function() {
        if ($(".personal-menu").hasClass("active")) $(".menu-close-btn").trigger("click")
    }), $(".menu-level-1 .personal-menu .link-area a").hover(function(e) {
        e.preventDefault();
        $(".menu-level-1-child .menu-leaf").removeClass("is-active");
        $(".other-menu").removeClass("active current");
        $(".menu-level-1-child .sub-menu-wrapper").removeClass("is-active");
        $(".other-dropdown").removeClass("active");
        $(this).closest(".personal-menu").addClass("active");
        $(this).closest(".personal-menu").find(".other-dropdown").addClass("active");
        $(".menu-level-1").addClass("active")
    }), $(".menu-level-1-child li").click(function(e) {
        if ($(e.target).closest(".contact-slider").length) return true;
        $(this).hasClass("other-menu") ||
            $(".menu-close-btn").trigger("click")
    }), $(".menu-tab").on("click", function() {
        $(".menu-tab-ul").hide(), $(".menu-tab").removeClass("active"), $(this).addClass("active"), $(this).siblings("ul").toggle()
    }), $(".menu-tab-list li").on("click", function() {
        $(".menu-tab-list ul li").removeClass("is-active"), clickIndex = $(this).parent("ul").find("li").index($(this)), showDiv = $(this).parent("ul").attr("data-tab"), null != showDiv && "" != showDiv && ($(".menu-tab-item").hide(), $("#" + showDiv).find(".menu-tab-item").hide(),
            $("#" + showDiv + " .menu-tab-item:eq(" + clickIndex + ")").show()), $(".menu-tab-list ul").hide(), $(this).addClass("is-active"), "business-tab" == showDiv ? $(".business-tab .menuitem-active").html($(this).find("a").html()) : "personal-tab" == showDiv && $(".personal-tab .menuitem-active").html($(this).find("a").html())
    }), $(".menu-list-item ul li p").on("click", function() {
        $(".menu-tab-list .menu-tab").removeClass("active"), $(".menu-tab-list .menu-tab-ul").hide(), $(this).siblings(".menu-fold").toggleClass("is-active")
    });

    function removeActiveClass(el) {
        $(".menu-level-1 ul li").removeClass("active current")
    }
    $(".menu-level-1 .link-area a").off("click").on("click", function() {
        $this = $(this);
        removeActiveClass($this);
        localStorage.setItem("link-name", $this.text());
        $this.closest("li").addClass("current")
    });
    $(".menu-level-1 .dropdown-inner ul li a").off("click").on("click", function() {
        $this = $(this);
        $(".menu-level-1 .dropdown-inner").find("li").each(function() {
            $(this).find("a").removeClass("active")
        });
        localStorage.setItem("link-name",
            $this.text());
        $this.addClass("active");
        $(".menu-level-1 .other-menu.active .link-area a").html($this.text() + '\x3cspan class\x3d"open-status"\x3e\x3c/span\x3e')
    })
});
$(document).ready(function() {
    $(".languageselect-mob span").click(function() {
        $(".languageselect-mob #language-drop").toggleClass("active")
    });
    $(".languageselect-mob #language-drop li").click(function() {
        var selectedCountryLanguage = $(this).find("a").text();
        $(".languageselect-mob span").text(selectedCountryLanguage);
        $(".languageselect-mob #language-drop").removeClass("active")
    });
    $(document).click(function(event) {
        var $target = $(event.target);
        if (!$target.closest(".languageselect-mob span").length && !$target.closest(".languageselect-mob #language-drop").length) $(".languageselect-mob #language-drop").removeClass("active")
    })
});
$(window).on("load", function() {
    var link = localStorage.getItem("link-name");
    if (link) {
        $(".menu-level-1 ul li").removeClass("active current");
        $(".menu-level-1 ul li.other-menu").each(function() {
            var that = $(this);
            if (that.find(".link-area a").text().indexOf(link) >= 0) that.addClass("current");
            else $(this).find(".other-dropdown ul li").each(function() {
                $(this).find("a").removeClass("active");
                if ($(this).find("a").text().indexOf(link) >= 0) {
                    that.addClass("current");
                    that.find(".link-area a").html(link + '\x3cspan class\x3d"open-status"\x3e\x3c/span\x3e');
                    $(this).find("a").addClass("active")
                }
            })
        })
    }
});
$(function($) {
    $(".menu-search-box, .icon-search").on("click", function(event) {
        event.stopPropagation(), $(".search-overlay, .overlay-search-box, .search-filter-box").show(), $(".search-overlay").addClass("is-active"), $("#search-main").val(""), $("body").addClass("no-scroll"), $(".burger-menu").hide(), $(".notification-list-container, .notification-menu-overlay, .personal-banking-overlay, .personal-banking-container").hide()
    }), $(".search-btns button.close-btn").on("click", function(event) {
        event.preventDefault(),
            closeSerach()
    });
    $(".menu-level-2 .right-side-menu .menu-leaf").click(function(event) {
        if ($(document).width() >= 960) {
            $(".sub-menu-wrapper").removeClass("is-active");
            $(".menu-level-2 .right-side-menu .menu-leaf").removeClass("is-active");
            $(this).addClass("is-active");
            $(this).find(".sub-menu-wrapper").addClass("is-active");
            closePersonalBanking();
            contactUsSlider()
        }
    })
});
$(document).ready(function() {
    var searchArray = [{
        searchList: "How to open bank account online?",
        searchLink: "https://www.google.com/"
    }, {
        searchList: "How to Link Aadhar Card to your bank account in 4 simple...",
        searchLink: "https://www.google.com/"
    }, {
        searchList: "How to access your ICICI Bank Canada account?",
        searchLink: "https://www.google.com/"
    }, {
        searchList: "How to recharge TataSky DTH with an SMS",
        searchLink: "https://www.google.com/"
    }, {
        searchList: "How to login to your ICICI Bank Canada account?",
        searchLink: "https://www.google.com/"
    }];
    $("header .menu-search-box #search-main, .mobile .search-box #Search ").focus(function() {
        $("header .menu-search-box #search-main, .mobile header .menu-search-box #Search").addClass("active");
        $("header .search-listing, .mobile .search-listing ul, .mobile.search-listing ul").show();
        $("header .menu-search-box #search-main, .mobile .search-box #Search").val("");
        $("header .search-listing, .mobile .search-listing").addClass("active");
        var inputText = $(this)[0].value;
        if (inputText.length > 0) searchsearchList(searchArray,
            inputText, "header ul.search-list, .mobile ul.search-list");
        else $("header .search-list").html("")
    });
    $("header .menu-search-box input, .mobile .search-box input").keyup(function() {
        var inputText = $(this)[0].value;
        if (inputText.length > 0) searchsearchList(searchArray, inputText, "header ul.search-list, .mobile ul.search-list");
        else $("header .search-list, .mobile .search-list").html("")
    });
    $(document).click(function(event) {
        var $target = $(event.target);
        if (!$target.closest(".search").length && !$target.closest(".search-filter-box").length &&
            !$target.closest(".search-overlay").length) {
            $("header .menu-search-box input, .mobile header .menu-search-box input").removeClass("active");
            $("header .menu-search-box #search-main, .mobile .search-box #Search").val("");
            $("header .search-listing, .mobile .search-listing").removeClass("active")
        }
        $("header .search-listing, .mobile .search-listing .search-overlay-area").click(function() {
            if ($("header .search-listing, .mobile .search-listing").hasClass("active")) {
                $("header .menu-search-box input, .mobile header .menu-search-box input").removeClass("active");
                $("header .search-listing, .mobile .search-listing").removeClass("active")
            }
        })
    });
    $(".search-overlay").click(function() {
        $("header .menu-search-box #search-main, .mobile .search-box #Search").val("")
    });
    $(document).on("click", "header .search-list li, .mobile .search-list li", function() {
        $("header .menu-search-box #search-main, .mobile .search-box #Search").val($(this).text());
        $("header .search-overlay").hide()
    })
});
$(function($) {
    navigator.userAgent.match(/iPad/i) || null != navigator.userAgent.match(/iPad/i) ? $("ul.primary-menu").on("touchstart", function() {
            $(".body-overlay").show().addClass("is-active")
        }, function() {
            $(".body-overlay").hide().removeClass("is-active")
        }) : $("ul.primary-menu").hover(function() {
            closeRightProduct();
            closeNotifications(), closePersonalBanking(), closeSerach()
        }, function() {
            $(".body-overlay").hide().removeClass("is-active")
        }), navigator.userAgent.match(/iPad/i) || null != navigator.userAgent.match(/iPad/i) ?
        $("ul.primary-menu \x3e li").on("click", function() {
            $(".menu-level-1-child .menu-leaf").removeClass("is-active"), $(".menu-level-1-child .sub-menu-wrapper").removeClass("is-active"), $(".menu-level-1-child .sub-menu-wrapper").removeClass("is-active"), $(".menu-close-btn").trigger("click"), $(this).hasClass("is-active") ? ($(".secondary-menu-wrapper").removeClass("is-active"), $(".secondary-menu-wrapper").hide()) : ($(".secondary-menu-wrapper").removeClass("is-active"), $(".secondary-menu-wrapper").hide(), $(this).find(".secondary-menu-wrapper").addClass("is-active"),
                $(this).find(".secondary-menu-wrapper").show())
        }) : $("ul.primary-menu \x3e li").hover(function() {
            $(this).hasClass("is-active") || ($(".secondary-menu-wrapper").stop(!0, !0).slideUp().removeClass("is-active"), $(".primary-menu \x3e li").stop(!0, !0).removeClass("is-active")), $(".body-overlay").hasClass("is-active") ? $(this).find(".secondary-menu-wrapper").stop(!0, !0).toggle().toggleClass("is-active") : $(this).find(".secondary-menu-wrapper").stop(!0, !0).slideToggle(1E3).toggleClass("is-active"), $(this).stop(!0, !0).toggleClass("is-active");
            if ($(this).find(".secondary-menu-wrapper").length > 0) $(".body-overlay").show().addClass("is-active");
            else $(".body-overlay").hide().removeClass("is-active")
        }, function() {
            $(".secondary-menu-wrapper").stop(!0, !0).slideUp().removeClass("is-active"), $(".primary-menu \x3e li").stop(!0, !0).removeClass("is-active")
        }), navigator.userAgent.match(/iPad/i) || null != navigator.userAgent.match(/iPad/i) ? $(".secondary-menu \x3e li").on("click", function() {
            var listItem = $(this).index();
            $parent =
                $(this).closest(".menu-container"), $parent.find(".secondary-menu \x3e li").removeClass("active"), $(this).addClass("active"), $parent.find(".second-menu-tab-item").each(function(i) {
                    i == listItem ? ($(this).show(), $(this).parent(".secondary-menu-wrapper").addClass("is-active"), $(this).parent(".secondary-menu-wrapper").show()) : $(this).hide()
                })
        }) : $(".secondary-menu \x3e li").hover(function() {
            var listItem = $(this).index();
            $parent = $(this).closest(".menu-container"), $parent.find(".secondary-menu \x3e li").removeClass("active"),
                $(this).addClass("active"), $parent.find(".second-menu-tab-item").each(function(i) {
                    i == listItem ? $(this).show() : $(this).hide()
                })
        });
    $(".menu-level-3 .find-product-menu .title").click(function(event) {
        if (event.target !== this) return;
        closeNotifications();
        closePersonalBanking();
        closeSerach();
        $(this).toggleClass("is-active");
        $(this).siblings(".find-product-dropdown").toggleClass("is-active");
        $(this).parent().siblings(".menu-overlay").toggle()
    });
    $(".menu-level-3  .find-pro-select").selectmenu({
        classes: {
            "ui-selectmenu-menu": "fp-selectmenu"
        }
    })
});
$(document).ready(function() {
    $("#dropDown").selectmenu({
        change: function() {
            if ($(this).val() != "") window.location = $(this).val()
        }
    });
    if ($(".scrollContainerWrapper").length > 0)
        if (document.readyState === "interactive")
            if (location.hash !== "") scrollToElement(location.hash);
            else window.scrollTo(0, 0)
});
$('.scrollContainerWrapper a[href*\x3d"#"]').click(function(event) {
    if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
        event.preventDefault();
        scrollToElement(this.hash)
    }
});

function scrollToElement(hash) {
    var target = $(hash);
    if (target.length) {
        var offSetPadding = 0;
        var desktopHeader = $(".new-header.desktop")[0];
        if (desktopHeader) {
            var desktopHeaderHeight = desktopHeader.offsetHeight;
            var extraDesktopHeight = $(".new-header.desktop.sticky-enable.sticky").length !== 0 ? 0 : desktopHeaderHeight;
            desktopHeaderHeight = desktopHeaderHeight + extraDesktopHeight;
            var mobileHeaderHeight = ($(".new-header.mobile")[0] ? desktopHeader.offsetHeight : 0) + ($(".new-header.mobile \x3e .search")[0] ? desktopHeader.offsetHeight :
                0);
            offSetPadding = desktopHeaderHeight === 0 ? mobileHeaderHeight : desktopHeaderHeight
        }
        var extraPadding = 8;
        $("html, body").animate({
            scrollTop: target.offset().top - offSetPadding - extraPadding
        }, 500)
    }
}
(function($, $document) {
    $document.on("dialog-ready", function() {
        var COMPOSITE_MULTIFIELD_SELECTOR = "coral-multifield[data-granite-coral-multifield-composite]",
            FILE_REFERENCE_PARAM = "fileReference",
            registry = $(window).adaptTo("foundation-registry"),
            ALLOWED_MIME_TYPE = "image/jpeg",
            adapters = registry.get("foundation.adapters");
        var fuAdapter = _.reject(adapters, function(adapter) {
            return adapter.type !== "foundation-field" || adapter.selector !== "coral-fileupload.cq-FileUpload"
        });
        if (_.isEmpty(fuAdapter)) return;
        fuAdapter =
            fuAdapter[0];
        var orignFn = fuAdapter.adapter;
        fuAdapter.adapter = function(el) {
            return Object.assign(orignFn.call(el), {
                getName: function() {
                    return el.name
                },
                setName: function(name) {
                    var prefix = name.substr(0, name.lastIndexOf(el.name));
                    el.name = name;
                    $("input[type\x3d'hidden'][data-cq-fileupload-parameter]", el).each(function(i, el) {
                        if ($(el).data("data-cq-fileupload-parameter") !== "filemovefrom") this.setAttribute("name", prefix + this.getAttribute("name"))
                    })
                }
            })
        };
        $document.on("foundation-contentloaded", function(e) {
            var composites =
                $(COMPOSITE_MULTIFIELD_SELECTOR, e.target);
            composites.each(function() {
                Coral.commons.ready(this, function(el) {
                    addThumbnails(el)
                })
            })
        });

        function addThumbnails(multifield) {
            var $multifield = $(multifield),
                dataPath = $multifield.closest(".cq-dialog").attr("action"),
                mfName = $multifield.attr("data-granite-coral-multifield-name");
            dataPath = dataPath + "/" + getStringAfterLastSlash(mfName);
            $.ajax({
                url: dataPath + ".2.json",
                cache: false
            }).done(handler);

            function handler(mfData) {
                multifield.items.getAll().forEach(function(item,
                    i) {
                    var $mfItem = $(item),
                        $fileUpload = $mfItem.find("coral-fileupload");
                    if (_.isEmpty($fileUpload)) return;
                    var itemName = getJustItemName($fileUpload.attr("name"));
                    if (_.isEmpty(mfData[itemName]) || _.isEmpty(mfData[itemName][FILE_REFERENCE_PARAM])) return;
                    var imagePath = mfData[itemName][FILE_REFERENCE_PARAM];
                    $fileUpload.trigger($.Event("assetselected", {
                        path: imagePath,
                        group: "",
                        mimetype: ALLOWED_MIME_TYPE,
                        param: "",
                        thumbnail: getThumbnailHtml(imagePath)
                    }))
                })
            }

            function getThumbnailHtml(path) {
                return "\x3cimg class\x3d'cq-dd-image' src\x3d'" +
                    path + "/_jcr_content/renditions/cq5dam.thumbnail.319.319.png'\x3e"
            }

            function getJustItemName(itemName) {
                itemName = itemName.substr(itemName.indexOf(mfName) + mfName.length + 1);
                itemName = itemName.substring(0, itemName.indexOf("/"));
                return itemName
            }
        }

        function getStringAfterLastSlash(str) {
            if (!str || str.indexOf("/") == -1) return "";
            return str.substr(str.lastIndexOf("/") + 1)
        }
    })
})(jQuery, jQuery(document));
$(document).ready(function() {
    $(".countryselect-mob #country").click(function() {
        $(".countryselect-mob #country-drop").toggleClass("active")
    });
    $(".countryselect-mob #country-drop li").click(function() {
        var selectedCountryImage = $(this).find("img").attr("src");
        $(".countryselect-mob #country").find("img").attr("src", selectedCountryImage);
        $(".countryselect-mob #country-drop").removeClass("active")
    });
    $(document).click(function(event) {
        var $target = $(event.target);
        if (!$target.closest(".countryselect-mob #country").length &&
            !$target.closest(".countryselect-mob #country-drop").length) $(".countryselect-mob #country-drop").removeClass("active")
    });
    $(".countryselect li").click(function() {
        var selectedCountryImage = $(this).find("img").attr("src");
        $(".countryselect #country").find("img").attr("src", selectedCountryImage), $("#country-drop").removeClass("is-active")
    })
});
$(function($) {
    $(".menu-leaf.countryselect").hover(function() {
        closeNotifications(), closePersonalBanking(), closeRightProduct(), closeSerach(), $(this).addClass("is-active"), $(this).find(".sub-menu-wrapper").addClass("is-active"), contactUsSlider()
    }, function() {
        $(this).removeClass("is-active"), $(this).find(".sub-menu-wrapper").removeClass("is-active");
        $(".contact-slider").slick("unslick")
    })
});

function toogleFooter() {
    $(".accordion-identifier").unbind("click"), $(".accordion-identifier").on("click", function() {
        $(window).width() <= 768 && ($(this).next(".acc-default").slideToggle(this), $(this).toggleClass("collapsible-arrows"))
    })
}
$(this).closest("#include-footer") && ($("select").selectmenu(), $("#group-websites1, #group-websites2").selectmenu({
    change: function() {
        if ("" != $(this).val()) {
            var url = $(this).val();
            window.open(url, "_blank")
        }
    }
}));
var timeout = 0;

function setDropdownPostition() {
    var eTop, eTopWindow = $(".ui-selectmenu-button-open").offset().top - $(window).scrollTop(),
        bottomSpace = $(window).height() - eTopWindow,
        menuHeight = $(".ui-selectmenu-open ul").height();
    var menuButton = document.querySelector(".ui-selectmenu-button-open");
    var menuWrapper = document.querySelector(".ui-selectmenu-open");
    bottomSpace > menuHeight ? Popper.createPopper(menuButton, menuWrapper, {
        placement: "bottom"
    }) : Popper.createPopper(menuButton, menuWrapper, {
        placement: "top"
    })
}
$(window).on("load resize orientationchange", function() {
    clearInterval(timeout), $(window).width() >= 991 ? ($(".acc-default").show(), $(".acc-label").removeClass("accordion-identifier")) : ($(".acc-default").hide(), $(".acc-label").addClass("accordion-identifier"), timeout = setTimeout(function() {}, 250))
}), $(".top-menu-list-wrapper .menu-list, .bottom-menu-list-wrapper .menu-links,.footer .primary-inner").on("click", function() {
    $(window).width() < 991 && (!$(this).find(".acc-default:visible").length > 0 && ($(".top-menu-list-wrapper, .bottom-menu-list-wrapper").find(".acc-default:visible").slideToggle(this),
        $(".top-menu-list-wrapper, .bottom-menu-list-wrapper").find(".collapsible-arrows").toggleClass("collapsible-arrows")), $(this).find(".acc-default").slideToggle(this), $(this).find(".accordion-identifier").toggleClass("collapsible-arrows"))
}), $(".ui-selectmenu-button").click(function() {
    $(".ui-selectmenu-button-open").length > 0 && setDropdownPostition()
});
$(document).ready(function() {
    benefitShortCardSlider()
});

function benefitShortCardSlider() {
    $(".benefit-short-card .cards-list-carousel").slick({
        dots: !0,
        arrows: !0,
        infinite: !0,
        autoplay: !0,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                dots: !1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                dots: !0,
                arrows: !1
            }
        }, {
            breakpoint: 560,
            settings: {
                slidesToShow: 1,
                dots: !0,
                arrows: !1
            }
        }]
    })
}
var cardListItem = $(".benefit-short-card .card-list-item-carousel");
if (cardListItem) cardListItem.slick({
    dots: !0,
    arrows: !0,
    infinite: !0,
    autoplay: !0,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            dots: !1
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
            dots: !0,
            arrows: !1
        }
    }, {
        breakpoint: 560,
        settings: {
            slidesToShow: 1,
            dots: !0,
            arrows: !1
        }
    }]
});
$(window).on("load resize orientationchange", function() {
    $(".benefit-short-card .card-list-item-carousel .card-list").equalHeights()
});
$(window).on("load", function() {
    $(".mscroll").mCustomScrollbar()
});

function iframeHeight() {
    $(".banner-slider .video-media iframe").height($(".image-media").height()), $(".banner-slider .video-media video").height($(".image-media").height())
}

function setClassTagline() {
    setTimeout(function() {
        $(".banner-list .tagline").addClass("banner-nudge-active")
    }, 1E3)
}
if ($(document).width() > 991 && $(".d-img.unica-banner").length > 0) $(".banner-slider").on("afterChange init", function(e, slick) {
    $(".slick-active .d-img.unica-banner a.postEvent span.presentation-post-event-mccm").attr("class", "presentation-post-event");
    BannerPostEvent();
    $(".slick-active .d-img.unica-banner a.postEvent span.presentation-post-event").remove()
});
else if ($(document).width() < 991 && $(".m-img.unica-banner").length > 0) $(".banner-slider").on("afterChange init", function(e, slick) {
    $(".slick-active .m-img.unica-banner a.postEvent span.presentation-post-event-mccm").attr("class",
        "presentation-post-event");
    BannerPostEvent();
    $(".slick-active .m-img.unica-banner a.postEvent span.presentation-post-event").remove()
});
var bannerSlider;
if ($(document).width() < 991) {
    bannerSlider = $(".banner-slider.hero-mobile.i-home-banner").slick({
        dots: !0,
        infinite: !0,
        autoplay: !0,
        autoplaySpeed: 5E3,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                adaptiveHeight: !0
            }
        }]
    });
    if ($(".banner-slider.hero-mobile.hero-desktop").length === 0) $(".banner-slider.hero-desktop").remove()
} else {
    bannerSlider = $(".banner-slider.hero-desktop.i-home-banner").slick({
        dots: !0,
        infinite: !0,
        autoplay: !0,
        autoplaySpeed: 5E3,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                adaptiveHeight: !0
            }
        }]
    });
    if ($(".banner-slider.hero-mobile.hero-desktop").length === 0) $(".banner-slider.hero-mobile").remove()
}

function BannerPostEvent() {
    if ($(".unica-banner .presentation-post-event").length > 0) $(".unica-banner .presentation-post-event").each(function(i) {
        var link = $(this).attr("data-presentation");
        $.ajax({
            url: link,
            success: function(data) {},
            error: function(jqXHR, statusText, errorThrown) {
                consoleLog(errorThrown)
            }
        })
    })
}
var viewedBannerNames = "";

function isHomePage() {
    var urlPath = window.location.pathname.split("/").pop();
    if (window.location.pathname === "/" || window.location.pathname === "/homepage" || urlPath === "homepage" || urlPath === "homepage.html") return true;
    return false
}
if (isHomePage()) $("a").bind("click", function(e) {
    if (e.ctrlKey || $(this).attr("target") === "_blank") dataLayer.push({
        event: "custom_event",
        eventCategory: "home-page-banners",
        eventAction: "hp-banner-view",
        eventLabel: "NA",
        bannerName: viewedBannerNames
    })
});
window.addEventListener("beforeunload", function() {
    if (isHomePage()) dataLayer.push({
        event: "custom_event",
        eventCategory: "home-page-banners",
        eventAction: "hp-banner-view",
        eventLabel: "NA",
        bannerName: viewedBannerNames
    })
});
bannerSlider.on("afterChange", function(event, slick, currentSlide, nextSlide) {
    if (isHomePage()) {
        var isImgSelected = false;
        var totalBanners = $(".i-home-banner .banner-list.slick-slide").not(".slick-cloned").length;
        if (!(totalBanners === viewedBannerNames.split("|").length)) $($(".i-home-banner .banner-list.slick-slide").not(".slick-cloned")[currentSlide]).find("img").each(function(j) {
            if ($(this).is(":visible") === true && isImgSelected === false) {
                var bannerName = $(this).attr("src").split("/").pop().split(".")[0];
                viewedBannerNames =
                    viewedBannerNames + "|" + bannerName;
                isImgSelected = true
            }
        })
    }
});
bannerSlider.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
    $(".banner-list .tagline").removeClass("banner-nudge-active");
    setClassTagline();
    var nextSlick = $(slick.$slides[nextSlide]);
    slick = $(slick.$slider);
    playPauseVideo(slick, nextSlick, "pause")
});
$(document).ready(function() {
    if (isHomePage()) {
        var isImgSelected = false;
        $(".i-home-banner .banner-list.slick-slide.slick-active").not(".slick-cloned").find("img").each(function(j) {
            if ($(this).is(":visible") === true && isImgSelected === false) {
                var bannerName = $(this).attr("src").split("/").pop().split(".")[0];
                viewedBannerNames = bannerName;
                isImgSelected = true
            }
        })
    }
    iframeHeight();
    setClassTagline();
    var nudgeDataUrl = "https://asia-south1-quantum-flood-755.cloudfunctions.net/nudge-all-product";
    $(".banner-list .media").each(function() {
        var d =
            "";
        var f = "";
        var bannertype = $(this).children("input#bannertype").val();
        var bannervariant = $(this).children("input#bannervariant").val();
        d = bannertype;
        f = bannervariant;
        if (typeof d != "undefined" && typeof f != "undefined")
            if (d != null && d != "" && f != null && f != "") $.ajax({
                dataType: "json",
                url: nudgeDataUrl,
                data: {
                    product: d,
                    variant: f
                },
                type: "POST",
                success: function(b) {
                    if (b && b.message) {
                        var i = b.message;
                        $(".banner-list .media .tagline." + d + " .anchornudge").append("\x3cp\x3e" + i + "\x3c/p\x3e");
                        $(".banner-list .media .tagline." + d +
                            " .anchornudge").css("color", "#FFFFFF");
                        $(".banner-list .media .tagline." + d).css("display", "block")
                    }
                },
                error: function() {
                    console.log("defaultnudgeapi calling unsuccessful")
                }
            })
    })
});
var timeout = 0;
$(window).resize(function() {
    clearInterval(timeout), timeout = setTimeout(function() {
        iframeHeight()
    }, 100)
});

function postMessageToPlayer(player, command) {
    if (player == null || command == null) return;
    player.contentWindow.postMessage(JSON.stringify(command), "*")
}

function playPauseVideo(slick, nextSlick, control) {
    var currentSlide, slideType, player, nextSliderType;
    nextSliderType = nextSlick.attr("class").split(" ")[1];
    currentSlide = slick.find(".slick-current");
    slideType = currentSlide.attr("class").split(" ")[1];
    if (!(slideType === "youtube" || nextSliderType === "youtube")) return;
    player = currentSlide.find("iframe").get(0) ? currentSlide.find("iframe").get(0) : nextSlick.find("iframe").get(0);
    if (nextSliderType === "youtube") control = "play";
    if (slideType === "youtube" || nextSliderType ===
        "youtube") switch (control) {
        case "play":
            postMessageToPlayer(player, {
                event: "command",
                func: "mute"
            });
            postMessageToPlayer(player, {
                event: "command",
                func: "playVideo"
            });
            break;
        case "pause":
            postMessageToPlayer(player, {
                event: "command",
                func: "pauseVideo"
            });
            break
    }
}
var vidClip = $("#myVideo");
$.each(vidClip, function() {
    this.controls = !1
});
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
});
(new WOW).init();
if (vidClip[0]) vidClip[0].play();
bannerSlider.on("init", function(slick) {
    slick = $(slick.currentTarget);
    setTimeout(function() {
        playPauseVideo(slick, "play")
    }, 1E3)
});

function setCardsHeight() {
    var heights = [],
        divHeight = "",
        maxHeight = "";
    $(".card-lists .card-item").each(function(index) {
        sectionInner = $(this), heights = [], divHeight = $(this).height(), heights.push(divHeight)
    }), maxHeight = Math.max.apply(null, heights), $(".card-lists .card-item").height(maxHeight)
}
$(".card-section .card-lists").slick({
    dots: !1,
    arrows: !1,
    infinite: !1,
    autoplay: !1,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    margin: 10,
    asNavFor: ".card-nav",
    responsive: [{
        breakpoint: 1250,
        settings: {
            arrows: !0,
            slidesToShow: 3,
            autoplay: !0
        }
    }, {
        breakpoint: 1024,
        settings: {
            dots: !0,
            autoplay: !0,
            arrows: !1,
            slidesToShow: 2
        }
    }, {
        breakpoint: 767,
        settings: {
            dots: !0,
            autoplay: !0,
            arrows: !1,
            slidesToShow: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            autoplay: !1,
            dots: !0,
            centerMode: !0,
            centerPadding: "20px"
        }
    }]
}), $(".card-nav").slick({
    infinite: !1,
    variableWidth: !0,
    slidesToScroll: 1,
    asNavFor: ".card-lists",
    dots: !1,
    centerMode: !1,
    focusOnSelect: !0
}), $(".card-nav \x3e div").click(function() {
    $(".card-section .card-lists").slick("slickGoTo", $(this).index())
}), $(".offer-slider").slick({
    dots: !0,
    infinite: !0,
    autoplay: !0,
    autoplaySpeed: 2E3,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
}), $(document).ready(function() {
    $(".card-lists.card-other-lists .card-item").eq(2).addClass("faster-card");
    $(".card-section .card-item").equalHeights(), $(window).width() <= 768 && ($(".card-section .card-item").removeClass("wow slideInLeft"),
        $(".card-section .card-item").removeClass("wow slideInRight"))
}), $(window).on("load", function() {
    $(".mscroll").mCustomScrollbar();
    $(".card-section .bill-list").click(function() {
        $(".card-section").addClass("bill-list-hover");
        $(".find-right-product-section").addClass("active");
        $(".ask-ipal").addClass("active")
    });
    $(document).click(function(event) {
        var $target = $(event.target);
        if (!$target.closest(".bill-list").length) {
            $(".card-section").removeClass("bill-list-hover");
            $(".find-right-product-section").removeClass("active");
            $(".ask-ipal").removeClass("active")
        }
    })
}), $(window).on("load resize orientationchange", function() {
    $(".card-section .card-item").equalHeights()
}), (new WOW).init(), $(window).on("resize", function() {
    setTimeout(setCardsHeight, 2E3)
});
$(window).resize(function() {
    var w_width = $(window).width();
    if (w_width > 991) $(".card-section .bill-list").hover(function() {
        $(".card-section").addClass("bill-list-hover");
        $(".find-right-product-section.desktop-section").addClass("active")
    }, function() {
        $(".card-section").removeClass("bill-list-hover");
        $(".find-right-product-section.desktop-section").removeClass("active")
    })
});
if (!navigator.userAgent.match(/iPad/i) && navigator.userAgent.match(/iPad/i) == null) $(".card-section .bill-list").hover(function() {
    $(".card-section").toggleClass("bill-list-hover");
    $(".find-right-product-section.desktop-section").toggleClass("active")
});
$(".offer-ul-slider").slick({
    dots: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1260,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
$(".openvideo.impbile").on("click", function(e) {
    e.preventDefault();
    $(".video-popup.imobile").show();
    return false
});
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
});
$(document).ready(function() {
    (function addRootclass() {
        if ($(".tabswithcarousel .slider").length > 0) $("body").addClass("atm-landing-page")
    })()
});
var current = 1;
var interval;
var isClicked = false;
$(".digitalbanking-ul li").on("click", function(e) {
    var dataSrc = $(this).attr("id");
    $(this).closest(".digitalbanking").find(".digital-img").attr("src", dataSrc)
});
$(".digitalbanking-ul li").on("click", function() {
    $(".digitalbanking-ul li").removeClass("active");
    $(this).toggleClass("active");
    var index = this.getAttribute("index");
    current = parseInt(index);
    var divs = $(".digitalbanking-media .media-list").hide();
    divs.eq(current).fadeIn("normal");
    current++;
    if (current === divs.length) isClicked = true;
    else isClicked = false;
    startAnimation()
});
$(".qrcodebox .qrcode-icon").click(function() {
    $(this).next(".qrcode-popup").show();
    clearInterval(interval);
    $(".digitalbanking-ul li").removeClass("active")
});
$(".qrcode-popup .close").click(function() {
    $(".qrcode-popup").hide();
    startAnimation();
    $(".digitalbanking-ul li").eq(0).addClass("active")
});

function startAnimation() {
    clearInterval(interval);
    interval = setInterval(function() {
        var divs = $(".digitalbanking-media .media-list").hide();
        var ulList = $(".digitalbanking-ul li").removeClass("active");
        if (isClicked && divs.length == current) current = 0;
        divs.eq(current).fadeIn("normal");
        ulList.eq(current).addClass("active");
        if (current < divs.length - 1) current++;
        else current = 0
    }, 1E4)
}
startAnimation();
(function() {
    $(".banner-component .banner-slider .banner-slide .media-list").slick({
        dots: !0,
        arrows: !1,
        infinite: !1,
        autoplay: !1,
        autoplaySpeed: 5E3,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $(".banner-slider .banner-video .media-list").slick({
        dots: !0,
        arrows: !1,
        infinite: !0,
        autoplay: !0,
        autoplaySpeed: 5E3,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                adaptiveHeight: !1
            }
        }]
    });
    $(".banner-slider .banner-multiple-video .video-right").slick({
        dots: !0,
        arrows: !1,
        infinite: !0,
        autoplay: !0,
        autoplaySpeed: 5E3,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 640,
            settings: {
                arrows: !1,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: !1,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $(".banner-component .banner-slider .banner-slide.full-width-slider").slick({
        dots: !0,
        arrows: !1,
        infinite: !1,
        autoplay: !1,
        autoplaySpeed: 5E3,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 767,
            settings: {
                adaptiveHeight: !0
            }
        }]
    });
    $(".banner-slider .img-description").slick({
        dots: !0,
        arrows: !1,
        infinite: !1,
        autoplay: !1,
        autoplaySpeed: 1E3,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                arrows: !1
            }
        }]
    })
})();
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
});
$(document).ready(function() {
    $(".service-offerd-slider").not(".slick-initialized").slick({
        dots: true,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2E3,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 640,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    })
});
setTimeout(function() {
    $(".service-offerd-slider .item").equalHeights()
}, 500);
$(".close.crossel").click(function(e) {
    var $videoEl = $(".cross-sell-popup.ifsc-page-cross-sell-popup").length > 0 && $(".cross-sell-popup.ifsc-page-cross-sell-popup").find("iframe");
    $videoEl.attr("src", $videoEl.attr("src"))
});
$(document).ready(function() {
    var ukExchRate = $("#UKRates_Popups_Rates");
    if (ukExchRate.length > 0) $.ajax({
        type: "GET",
        url: "/content/icicibank.exchangerate.json",
        contentType: "application/json;charset\x3dutf-8",
        data: {
            CountryCode: "UK"
        },
        success: function(response, textStatus, xhr) {
            if (typeof response === "string") response = JSON.parse(response);
            if (xhr.status === 200 && xhr.readyState === 4) {
                var h = response && response.Rates.length > 0 ? response.Rates[0].Rate : "91.46";
                if (h && h > 0) ukExchRate.text(h)
            }
        },
        error: function(xhr) {
            ukExchRate.text("91.46")
        }
    })
});
var cookieTextArea = $(".cookieTextArea");
var timeInterval = parseInt($("#privacyPolicyTimeInterval").val());
if (cookieTextArea.length > 0) {
    if (cookieTextArea.length > 0 && $(document).width() > 980 && $.cookie("cookieNote") != "hide") {
        cookieTextArea.insertBefore("header.new-header");
        cookieTextArea.css("display", "block");
        cookieTextArea.delay(timeInterval).slideUp()
    } else if ($(document).width() < 980 && $.cookie("cookieNote") != "hide") {
        cookieTextArea.insertBefore("footer");
        cookieTextArea.css("display", "block");
        cookieTextArea.delay(timeInterval).slideUp()
    }
    $(".cookieBandClose").click(function(e) {
        e.preventDefault();
        var dateobj =
            new Date;
        var str = "";
        dateobj.setTime(dateobj.getTime() + 1);
        str += dateobj.toGMTString();
        $.cookie("cookieNote", "hide", {
            expires: 10,
            path: "/"
        });
        cookieTextArea.remove()
    })
}

function setBlogHeight() {
    var heights = [],
        height = "",
        maxHeight = "";
    $(".blog-section .slick-slide .card-inner").each(function() {
        height = $(this).find(".image").outerHeight() + $(this).find(".content").outerHeight(), heights.push(height)
    }), maxHeight = Math.max.apply(null, heights), $(".blog-section .slick-slide .card-inner").each(function() {
        $(this).height(maxHeight)
    })
}
$(".blog-slider").slick({
    dots: !0,
    infinite: !0,
    autoplay: !1,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 991,
        settings: {
            arrows: !1,
            slidesToShow: 2
        }
    }, {
        breakpoint: 640,
        settings: {
            slidesToShow: 1,
            arrows: !1,
            dots: !0,
            centerMode: !0,
            centerPadding: "15px",
            infinite: !0
        }
    }]
}), $(window).on("load", function() {
    setBlogHeight()
}), $(window).on("resize", function() {
    setTimeout(setBlogHeight, 2E3)
}), (new WOW).init();
$(window).resize(function() {
    WhatsappShow()
});

function WhatsappShow() {
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 1900 && $(document).width() < 991) $(".whatsapp-link").hide();
        else $(".whatsapp-link").show()
    })
}(function() {
    $(".handpicked-slider").not(".slick-initialized").slick({
        dots: true,
        arrows: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1
    })
})();
$(".scrolltop-btn").click(function() {
    return $("html, body").animate({
        scrollTop: 0
    }, "slow"), !1
}), $(window).on("scroll", function() {
    var height = $("#scrollTo-height").data("height");
    if ($(window).scrollTop() > height) $(".scrolltop").show();
    else $(".scrolltop").hide()
});
(function() {
    var refer_data = {};
    var selectedProdArray = [];

    function validateReferVoucherForm() {
        var enable_submit_btn = true;
        var friend_name = $(".friend_name").val();
        var friend_mobile_number = $(".friend_mobile_number").val();
        var friend_email = $(".friend_email").val();
        if (friend_name == "" || selectedProdArray.length == 0) {
            refer_data = {
                name: friend_name,
                mobile_number: friend_mobile_number,
                email: friend_email,
                product: selectedProdArray
            };
            enable_submit_btn = false
        }
    }

    function createContinueAppCard() {
        var tvc_apiresponse;
        var constinueEl =
            document.getElementById("continue-html");
        var continueURL = "https://asia-south1-quantum-flood-755.cloudfunctions.net/dropoffwidget?FedID\x3d" + FedID_NLI;
        var xhr = new XMLHttpRequest;
        xhr.withCredentials = false;
        xhr.addEventListener("readystatechange", function() {
            if (this.readyState === 4) {
                var apiResponseVar = this.responseText !== "" && JSON.parse(this.responseText);
                var d = JSON.stringify(apiResponseVar);
                tvc_apiresponse = apiResponseVar && apiResponseVar.payload && apiResponseVar.payload[0];
                var elResArray = constinueEl && JSON.parse(constinueEl.innerText);
                if (elResArray && elResArray.length > 0) {
                    var productFound = tvc_apiresponse && elResArray.find(function(value) {
                        if (value.productKey == String(tvc_apiresponse)) return value
                    });
                    productFound ? document.getElementById("continue-app").innerHTML += productFound.cardDetail : document.getElementById("continue-app").innerHTML += elResArray[0].cardDetail
                }
            }
        });
        xhr.open("GET", continueURL);
        xhr.setRequestHeader("apikey", "6dmSNHi5hezjxwXm");
        xhr.send(continueURL)
    }
    $(document).ready(function() {
        createContinueAppCard();
        $(".amazon-box").addClass("hide");
        $("#product-select-button").remove();
        $(".logout-banner-select select[multiple]").multiselect({
            columns: 1,
            search: false,
            texts: {
                placeholder: "Select a product"
            },
            showCheckbox: true,
            onOptionClick: function(element, option) {
                if (option.checked) selectedProdArray.push(option.value);
                else {
                    var index$1 = selectedProdArray.indexOf(option.value);
                    if (index$1 > -1) selectedProdArray.splice(index$1, 1)
                }
                validateReferVoucherForm()
            }
        });
        $(".ms-options-wrap \x3e .ms-options \x3e ul input[type\x3d'checkbox']").click(function() {
            var countchecked =
                $(".ms-options-wrap \x3e .ms-options \x3e ul input[type\x3d'checkbox']:checked").length;
            if (countchecked >= 5) $(".ms-options-wrap \x3e .ms-options \x3e ul input[type\x3d'checkbox']").not(":checked").attr("disabled", true);
            else $(".ms-options-wrap \x3e .ms-options \x3e ul input[type\x3d'checkbox']").not(":checked").attr("disabled", false)
        });
        $("form").on("focus", "input[type\x3dnumber]", function(e) {
            $(this).on("wheel.disableScroll", function(e) {
                e.preventDefault()
            })
        });
        $("#agree").click(function() {
            if (this.checked) $("#refer-submit").removeClass("disable");
            else $("#refer-submit").addClass("disable")
        });
        $("#refer-submit").on("click", function(e) {
            e.preventDefault();
            var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var friend_name = $(".friend_name").val();
            var friend_mobile_number = $(".friend_mobile_number").val();
            var friend_email = $(".friend_email").val();
            var inValidCount = 0;
            if (friend_name == "") {
                $("#fname-err").removeClass("hide");
                inValidCount++
            } else $("#fname-err").addClass("hide");
            if (friend_mobile_number.length < 10) {
                $("#mobile-err").removeClass("hide");
                inValidCount++
            } else $("#mobile-err").addClass("hide");
            if (friend_email != "")
                if (!regEmail.test(friend_email)) {
                    $("#email-err").removeClass("hide");
                    inValidCount++
                } else $("#email-err").addClass("hide");
            if (selectedProdArray.length == 0) {
                $("#product-err").removeClass("hide");
                inValidCount++
            } else $("#product-err").addClass("hide");
            if (inValidCount == 0) {
                var formajax = $(".voucher-box").find("form").attr("ajax-page");
                var productId = [];
                productId = selectedProdArray;
                var customerName = $(".voucher-box").find("form div input.friend_name").val();
                var words = customerName.split(" ");
                if (words.length == 1) {
                    var customerFirstName = customerName;
                    var customerLastName = customerName
                } else {
                    var customerFirstName = customerName.substr(0, customerName.indexOf(" "));
                    var k = customerName.substr(customerName.indexOf(" "));
                    var customerLastName = k.replace(/ /g, "")
                }
                var customerContactNo = $(".voucher-box").find("form div input.friend_mobile_number").val();
                var customerEmailId = $(".voucher-box").find("form div input.friend_email").val();
                var callbackRequest;
                if (typeof formajax !=
                    "undefined" && typeof productId != "undefined" && typeof customerFirstName != "undefined" && typeof customerLastName != "undefined" && typeof customerContactNo != "undefined" || typeof customerEmailId != "undefined")
                    if (formajax != null && formajax != "" && productId != null && productId != "" && customerFirstName != null && customerFirstName != "" && customerLastName != null && customerLastName != "" && customerContactNo != null && customerContactNo != "" || customerEmailId != null || customerEmailId != "") callbackRequest = formajax + "apiname\x3dsave\x26productCode\x3d" +
                        productId + "\x26custName\x3d" + customerFirstName + "\x26lastName\x3d" + customerLastName + "\x26custMobNo\x3d" + customerContactNo + "\x26custEmail\x3d" + customerEmailId;
                if (typeof callbackRequest != "undefined")
                    if (callbackRequest != null && callbackRequest != "") $.ajax({
                        dataType: "json",
                        url: callbackRequest,
                        type: "GET",
                        success: function(response) {
                            getCallbackResults = response.getCallbackResults;
                            var successFlag = 0;
                            if (getCallbackResults)
                                for (var i = 0; i < getCallbackResults.length; i++) {
                                    var crmServiceResponce = getCallbackResults[i].IsSuccess;
                                    var message = getCallbackResults[i].Message;
                                    var crmItemKey = getCallbackResults[i].ItemKey;
                                    if (typeof message != "undefined" && typeof crmItemKey != "undefined" && typeof crmServiceResponce != "undefined")
                                        if (message != null && message != "" && crmItemKey != null && crmItemKey != "" && crmServiceResponce != null && crmServiceResponce != "")
                                            if (message == "Success") successFlag++
                                }
                            if (successFlag != 0 && productId.length >= successFlag) {
                                $(".voucher-content").addClass("hide");
                                $(".amazon-box").removeClass("hide");
                                $(".lt-card.voucher-box").css("background-color",
                                    "#fff2eb");
                                $("#refer-error-txt").text("Error while submitting form")
                            } else {
                                $(".voucher-box").find("form p.note").removeClass("hide");
                                $("#refer-form").trigger("reset")
                            }
                        },
                        error: function() {
                            if (inValidCount == 0) {
                                $(".voucher-box").find("form p.note").removeClass("hide");
                                $("#refer-form").trigger("reset");
                                $("#refer-error-txt").text("Error while submitting form")
                            }
                            executed = false
                        }
                    })
            }
        });
        $("#product-select").selectmenu({
            change: validateReferVoucherForm
        })
    });

    function copyCode(elementId, btnId, type) {
        var copyText = document.getElementById(elementId);
        var textArea = document.createElement("textarea");
        if (type == "input") {
            copyText.disabled = false;
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            copyText.disabled = true
        } else {
            textArea.value = copyText.textContent;
            document.body.appendChild(textArea);
            textArea.select()
        }
        document.execCommand("Copy");
        var selection = window.getSelection ? window.getSelection() : document.selection ? document.selection : null;
        if (!!selection) selection.empty ? selection.empty() : selection.removeAllRanges();
        textArea.remove();
        $("#" + btnId).html("copied")
    }
    $(window).resize(function() {
        lbCardsSlick();
        ltCardsSlick()
    });

    function lbCardsSlick() {
        if ($(window).width() > 991) {
            if ($(".lb-cards").hasClass("slick-initialized")) $(".lb-cards").slick("unslick");
            return true
        }
    }

    function ltCardsSlick() {
        if ($(window).width() > 991) {
            if ($(".lt-cards").hasClass("slick-initialized")) $(".lt-cards").slick("unslick");
            return true
        }
        $(".lt-cards").slick({
            dots: true,
            arrows: false,
            infinite: false,
            autoplay: false,
            adaptiveHeight: false,
            centerMode: true,
            slidesToShow: 1,
            centerPadding: "10px",
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            margin: 10,
            asNavFor: ".card-navs"
        }), $(".card-navs").slick({
            infinite: false,
            arrows: false,
            variableWidth: true,
            slidesToScroll: 2,
            asNavFor: ".lt-cards",
            dots: false,
            centerMode: false,
            focusOnSelect: true
        }), $(".lb-cards").slick({
            dots: false,
            arrows: false,
            infinite: false,
            autoplay: false,
            adaptiveHeight: false,
            centerMode: true,
            slidesToShow: 1,
            centerPadding: "10px",
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            margin: 10
        }), $(".logout-top .card-navs \x3e div").click(function() {
            $(".lt-cards").slick("slickGoTo",
                $(this).index())
        });
        $(".lt-cards").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
            $(".rate-icon").removeClass("active");
            $(".share-icon").removeClass("active");
            $(".refer-icon").removeClass("active");
            if (nextSlide == 0) $(".rate-icon").addClass("active");
            else if (nextSlide == 1) $(".share-icon").addClass("active");
            else if (nextSlide == 2) $(".refer-icon").addClass("active")
        });
        equalizeSliderHeight(".lt-cards")
    }
    $(".letters_validate").on("input", function(e) {
        this.value = this.value.replace(/[^a-zA-Z .]/g,
            "")
    });
    $(".numbers_validate").on("keypress", function(e) {
        return numberValidate(e)
    });

    function lettersValidate(e) {
        e = e ? e : window.event;
        var clipboardData = e.clipboardData ? e.clipboardData : window.clipboardData;
        var key = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
        var str = e.type && e.type == "paste" ? clipboardData.getData("Text") : String.fromCharCode(key);
        return /^[a-zA-Z\s]*$/.test(str)
    }

    function numberValidate(e) {
        if (e.currentTarget.value.length >= 10) return false;
        e = e ? e : window.event;
        var clipboardData = e.clipboardData ?
            e.clipboardData : window.clipboardData;
        var key = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
        var str = e.type && e.type == "paste" ? clipboardData.getData("Text") : String.fromCharCode(key);
        return /^\d+$/.test(str)
    }

    function equalizeSliderHeight(slider) {
        var slides = $(slider).find(".slick-slide");
        var maxheight = 0;
        slides.each(function(index) {
            maxheight = maxheight > slides[index].clientHeight ? maxheight : slides[index].clientHeight
        });
        slides.each(function(index) {
            $(this).css({
                height: maxheight
            })
        })
    }
    $(window).on("load resize orientationchange",
        function() {
            $(".lb-cards .lb-card").equalHeights()
        });
    $(window).on("unload", function() {
        $(".ms-options-wrap \x3e .ms-options \x3e ul input[type\x3d'checkbox']").off("click");
        $(".more_TNC").off("click");
        $("#agree").off("click");
        $(".logout-top .card-navs \x3e div").off("click")
    })
})();
var ticker = 1;
var nseEl;
$(document).ready(function() {
    nseEl = $(".share-value-iframe .share-value");
    var nseDisable;
    if ($("#interest-rates").attr("data-disableNSETicker")) nseDisable = JSON.parse($("#interest-rates").attr("data-disableNSETicker"));
    if (!nseDisable) loadNseTicker();
    $(function($, win) {
        $.fn.inViewport = function(cb) {
            return this.each(function(i, el) {
                function visPx() {
                    var H = $(this).height(),
                        r = el.getBoundingClientRect(),
                        t = r.top,
                        b = r.bottom;
                    return cb.call(el, Math.max(0, t > 0 ? H - t : b < H ? b : H))
                }
                visPx();
                $(win).on("resize scroll", visPx)
            });
            $(".animate-element")
        }
    }(jQuery, window));
    $(".rates-slider").slick({
        dots: !0,
        arrows: !1,
        infinite: !0,
        autoplay: !0,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    })
});
var nseUrl = $("#interest-rates").attr("data-nseURL");

function loadNseTicker() {
    $.ajax({
        dataType: "JSON",
        url: nseUrl,
        type: "GET",
        success: function(response) {
            var nseResponseObj = response.find(function(e) {
                return e.exchange == "NSE"
            });
            $(".share-value").removeClass("hide");
            var el = $(".share-value .price");
            el.text(nseResponseObj["Current"]);
            animateNumbers(el);
            localStorage.setItem("nseTicker", nseResponseObj["Current"])
        },
        error: function(err) {
            var nseTickerValue = localStorage.getItem("nseTicker");
            $(".share-value").removeClass("hide");
            var el = $(".share-value .price");
            el.text(nseTickerValue);
            animateNumbers(el);
            ticker++;
            if (ticker < 3) setTimeout(function() {
                loadNseTicker()
            }, 200)
        }
    })
}

function animateNumbers(priceEl) {
    priceEl.inViewport(function(px) {
        if (px > 0 && !this.initNumAnim) {
            this.initNumAnim = true;
            $(this).prop("Counter", 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2E3,
                step: function(now) {
                    $(this).text(now.toFixed(2));
                    $(this).text(Math.round(now * 100) / 100)
                }
            })
        }
    })
}
$(document).ready(function() {
    $(".browse-product-slider").slick({
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            },
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }]
    })
});
$(document).ready(function() {
    $(".browse-product-slider").slick({
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            },
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }]
    })
});
$(document).ready(function() {
    loadOnlyCallback()
});

function loadOnlyCallback() {
    !$(".loan-forms .form-slider").hasClass("slick-initialized") && $(".loan-forms .form-slider").slick({
        dots: true,
        infinite: false,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                dots: true,
                infinite: false,
                autoplay: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true
            }
        }],
        onInit: function() {
            $(".slick-next .slick-arraow").css("pointer-events",
                "none")
        }
    });

    function deactiveArrow() {
        $(".form-slider .slick-arrow").addClass("arrow-disable")
    }

    function activateArrow() {
        $(".form-slider .slick-arrow").removeClass("arrow-disable")
    }

    function showFormError() {
        $(".form-slider .slick-active").find(".form-group-inner").addClass("error")
    }
    var disableEventsClass = "disable-el";

    function disableSlickDots(index) {
        $("#offer-form .slick-dots li").eq(index).addClass(disableEventsClass);
        $("#offer-form-mob .slick-dots li").eq(index).addClass(disableEventsClass)
    }

    function enableSlickDot(index) {
        $("#offer-form .slick-dots li").eq(index).removeClass(disableEventsClass);
        $("#offer-form-mob .slick-dots li").eq(index).removeClass(disableEventsClass)
    }

    function validateMobile($this) {
        flag = false;
        msg = "";
        mobile = $($this).val();
        if ($.trim(mobile) == "") disableSlickDots(2);
        else if (!$.isNumeric(mobile)) {
            showFormError();
            msg = "Please enter valid Mobile number";
            $($this).addClass("error");
            disableSlickDots(2)
        } else if (mobile.length < 10) {
            showFormError();
            msg = "Please enter valid Mobile number";
            $($this).addClass("error");
            disableSlickDots(2)
        } else {
            $($this).removeClass("error");
            $(".form-slider .slick-active").find(".form-group-inner").removeClass("error");
            activateArrow();
            enableSlickDot(2);
            flag = true
        }
        $(".error-msg").html(msg);
        return flag
    }

    function validateName($this) {
        flag = false;
        msg = "";
        var regName = /^[a-zA-Z ]+$/;
        name = $($this).val();
        if ($.trim(name) == "") {
            disableSlickDots(1);
            disableSlickDots(2)
        } else if (!regName.test(name)) {
            showFormError();
            msg = "Please enter valid first Name";
            $($this).addClass("error");
            disableSlickDots(1);
            disableSlickDots(2)
        } else {
            $($this).removeClass("error");
            $(".form-slider .slick-active").find(".form-group-inner").removeClass("error");
            activateArrow();
            enableSlickDot(1);
            $(".slick-dots").show();
            flag = true
        }
        $(".error-msg").html(msg);
        return flag
    }

    function validateEmail($this) {
        flag = false;
        msg = "";
        var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        email = $($this).val();
        $(".slick-arrow").removeClass("active-btn-submit");
        $(".cust-btn-submit").removeClass("active-btn-submit");
        if ($.trim(email) == "");
        else if (!regEmail.test(email)) {
            showFormError();
            msg = "Please enter valid Email ID";
            $($this).addClass("error")
        } else {
            $($this).removeClass("error");
            $(".form-slider .slick-active").find(".form-group-inner").removeClass("error");
            activateArrow();
            $(".slick-dots").show();
            flag = true;
            $(".slick-arrow").addClass("active-btn-submit");
            $(".cust-btn-submit").addClass("active-btn-submit")
        }
        $(".error-msg").html(msg);
        return flag
    }
    var timeout = 0;
    clearInterval(timeout);
    $(".form-slider").on("afterChange", function(event, slick, currentSlide) {
        $(".slick-arrow").show();
        $(".cust-btn-submit").hide();
        if (currentSlide == 3)
            if (!validateMobile($(".input-mobile"))) $(".form-slider").slickGoTo(parseInt(0));
            else if (!validateName($(".input-name"))) $(".form-slider").slickGoTo(parseInt(1));
        else if (!validateEmail($(".input-email"))) $(".form-slider").slickGoTo(parseInt(2));
        else {
            $("#offer-form-mob").trigger("reset");
            $("#offer-form").trigger("reset")
        }
        if (currentSlide == 0) {
            if (!validateName($(".input-name"))) deactiveArrow();
            else activateArrow();
            $(".slick-arrow").removeClass("btn-submit active-btn-submit");
            $(".cust-btn-submit").removeClass("active-btn-submit")
        } else if (currentSlide == 1) {
            if (!validateMobile($(".input-mobile"))) deactiveArrow();
            else activateArrow();
            $(".cust-btn-submit").removeClass("active-btn-submit");
            $(".slick-arrow").removeClass("btn-submit active-btn-submit")
        } else if (currentSlide == 2) {
            $(".slick-arrow").val("Submit");
            $(".slick-arrow").text("Submit");
            $(".slick-arrow").addClass("btn-submit");
            if (!validateEmail($(".input-email"))) deactiveArrow();
            else activateArrow();
            if ($(".cust-btn-submit").length <= 0) $('\x3cbutton class\x3d"cust-btn-submit" type\x3d"button" aria-disabled\x3d"true" value\x3d"Submit"\x3eSubmit\x3c/button\x3e').insertAfter(".form-slider .slick-next");
            else $(".cust-btn-submit").show();
            $(".slick-arrow").hide()
        } else {
            $("#offer-form").trigger("reset");
            $("#offer-form-mob").trigger("reset")
        }
    });
    $("form input").on("keyup", function() {
        deactiveArrow();
        if ($(this).hasClass("input-mobile")) validateMobile($(this));
        else if ($(this).hasClass("input-name")) validateName($(this));
        else if ($(this).hasClass("input-email")) validateEmail($(this))
    });
    deactiveArrow();
    disableSlickDots(1);
    disableSlickDots(2);
    $(".slick-arrow").on("click", function(e) {
        if ($(this).hasClass("arrow-disable")) e.preventDefault()
    });
    if ($(".lead-callback").length >
        0) $(document).on("click", "button.cust-btn-submit", function() {
        $(this).addClass("activeCall");
        getOnlyCallback()
    });

    function getOnlyCallback() {
        var executed = false;
        if (!executed) {
            executed = true;
            console.log("send response from here");
            var formajax = $(".activeCall").parent().parent().parent().parent().parent().find("#offer-form").attr("ajax-page");
            console.log("formajax: " + formajax);
            var productId = $(".activeCall").parent().parent().parent().parent().parent().find("#productId").val() || $("#productId").text();
            console.log("productId: " +
                productId);
            var customerName = $(".activeCall").parent().parent().parent().parent().parent().find("#offer-form").find("#name").val();
            var words = customerName.split(" ");
            if (words.length == 1) {
                var customerFirstName = customerName;
                var customerLastName = customerName
            } else {
                var customerFirstName = customerName.substr(0, customerName.indexOf(" "));
                var k = customerName.substr(customerName.indexOf(" "));
                var customerLastName = k.replace(/ /g, "")
            }
            var customerContactNo = $(".activeCall").parent().parent().parent().parent().parent().find("#offer-form").find("#mobile").val();
            var customerEmailId = $(".activeCall").parent().parent().parent().parent().parent().find("#offer-form").find("#email").val();
            console.log("customerFirstName: " + customerFirstName);
            console.log("customerContactNo: " + customerContactNo);
            console.log("customerEmailId: " + customerEmailId);
            var callbackRequest;
            if (typeof formajax != "undefined" && typeof productId != "undefined" && typeof customerFirstName != "undefined" && typeof customerLastName != "undefined" && typeof customerContactNo != "undefined" && typeof customerEmailId !=
                "undefined")
                if (formajax != null && formajax != "" && productId != null && productId != "" && customerFirstName != null && customerFirstName != "" & customerLastName != null && customerLastName != "" && customerContactNo != null && customerContactNo != "" && customerEmailId != null && customerEmailId != "") callbackRequest = formajax + "apiname\x3dsave\x26productCode\x3d" + productId + "\x26custName\x3d" + customerFirstName + "\x26lastName\x3d" + customerLastName + "\x26custMobNo\x3d" + customerContactNo + "\x26custEmail\x3d" + customerEmailId;
            if (typeof callbackRequest !=
                "undefined")
                if (callbackRequest != null && callbackRequest != "") $.ajax({
                    dataType: "json",
                    url: callbackRequest,
                    type: "GET",
                    success: function(response) {
                        getCallbackResults = response.getCallbackResults;
                        console.log("Get callback response json :" + response.getCallbackResults.length);
                        console.log("Get callback response :" + getCallbackResults);
                        var successFlag = 0;
                        for (var i = 0; i < getCallbackResults.length; i++) {
                            var crmServiceResponce = getCallbackResults[i].IsSuccess;
                            var message = getCallbackResults[i].Message;
                            var crmItemKey = getCallbackResults[i].ItemKey;
                            console.log("Get callback message :" + message);
                            console.log("Get callback CRM ID :" + crmItemKey);
                            if (typeof message != "undefined" && typeof crmItemKey != "undefined" && typeof crmServiceResponce != "undefined")
                                if (message != null && message != "" && crmItemKey != null && crmItemKey != "" && crmServiceResponce != null && crmServiceResponce != "")
                                    if (message == "Success") {
                                        successFlag++;
                                        console.log("You have successfully registered to get a callback from out expert.");
                                        $("form.offer-form").css("display", "none");
                                        $(".loan-forms .content .success-msg").css("display",
                                            "inline-block");
                                        $(".loan-forms .content .success-msg p").css("display", "inline-block")
                                    }
                        }
                    },
                    error: function() {
                        console.log("Get callback response calling unsuccessful");
                        executed = false
                    }
                })
        }
    }
}
$(document).ready(function() {
    $(".search-filter-slider").slick({
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 360,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })
});
$(".way-to-bank-slider").not(".slick-initialized").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
});
$(function($) {
    $("#ways-to-bank-tabs ul li a").on("click", function(e) {
        $(".way-to-bank-slider").not(".slick-initialized").slick("refresh")
    })
});
$(document).ready(function() {
    var cashbackOffers = [];
    var cashbackUrl = $("#cashBackURL").val();
    var compareBuyUrl = $("#compareBuyURL").val();
    var compareBuySliderDiv = "\x3cdiv class\x3d'trending-deals-slider'\x3e";
    var cashbackSliderDiv = "\x3cdiv class\x3d'trending-deals-slider'\x3e";
    $.ajax({
        dataType: "json",
        url: cashbackUrl,
        type: "GET",
        success: function(res) {
            cashbackOffers = res.data;
            for (var j = 0; j < cashbackOffers.length; j++) {
                var name = cashbackOffers[j].attributes.name;
                var description = cashbackOffers[j].attributes.short_description;
                var storeIdentifier = cashbackOffers[j].attributes.unique_identifier;
                var imgurl = cashbackOffers[j].attributes.image_url;
                var activeateUrl;
                var storeUrl;
                activeateUrl = "/offers/cashback-and-buy/cashback-and-buy.page?redirectURL\x3d/stores/" + storeIdentifier + "";
                storeUrl = "/offers/cashback-and-buy/cashback-and-buy.page?storeUrl\x3d/stores/" + storeIdentifier + "";
                cashbackSliderDiv += "\x3cdiv class\x3d'deal-card'\x3e\x3cdiv class\x3d'deal-inner'\x3e\x3cdiv class\x3d'image'\x3e\x3ca target\x3d'blank' href\x3d'" + storeUrl +
                    "'\x3e\x3cimg style\x3d'height: 50px; width: 90px;' src\x3d'" + imgurl + "'\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'offer'\x3e\x3ca target\x3d'blank' href\x3d'" + storeUrl + "'\x3e" + name + "\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'description'\x3e" + description + "\x3c/div\x3e\x3cdiv class\x3d'buttons'\x3e\x3ca href\x3d'" + activeateUrl + "' class\x3d'ic-btn'\x3eActivate now\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e"
            }
            cashbackSliderDiv = cashbackSliderDiv + "\x3c/div\x3e";
            $("#cashbackOffers").append(cashbackSliderDiv);
            $("#cashbackOffers").css("display", "block");
            $("#cashbackOffers .trending-deals-slider").slick({
                dots: true,
                infinite: true,
                autoplay: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true
                    }
                }, {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                        centerMode: true,
                        centerPadding: "15px",
                        infinite: true
                    }
                }]
            });
            setTimeout(function() {
                $("#cashback .trending-deals-slider .deal-card").equalHeights()
            })
        },
        error: function() {
            console.log("cashbackOffersApi calling unsuccessful")
        }
    });
    $.ajax({
        dataType: "json",
        url: compareBuyUrl,
        type: "GET",
        success: function(data) {
            comparebuyOffers = data.products;
            for (var k = 0; k < comparebuyOffers.length; k++) {
                var ribbonLabel = comparebuyOffers[k]["ribbonLabel"];
                var title = comparebuyOffers[k]["title"];
                var imgSrc = comparebuyOffers[k]["imageUrl"];
                var vendorUrl = comparebuyOffers[k]["vendorRedirectUrl"];
                var detailsUrl = comparebuyOffers[k]["productDetailPageUrl"];
                var cta1 = comparebuyOffers[k]["CTA_Name_1"];
                var cta2 = comparebuyOffers[k]["CTA_Name_2"];
                var maxprice = comparebuyOffers[k]["maxprice"];
                var minprice = comparebuyOffers[k]["minprice"];
                var tagName = comparebuyOffers[k]["tagname"];
                if (typeof FedID != "undefined")
                    if (FedID != null && FedID != "") {
                        vendorUrl = vendorUrl + "\x26" + tagName + "\x3d" + FedID;
                        compareBuySliderDiv += "\x3cdiv class\x3d'deal-card'\x3e\x3cdiv class\x3d'deal-inner'\x3e\x3cdiv class\x3d'offer-strip'\x3e\x3cp\x3e" + ribbonLabel + "\x3c/p\x3e\x3c/div\x3e\x3cdiv class\x3d'img-offer-wrapper'\x3e\x3cdiv class\x3d'image'\x3e\x3ca href\x3d'" +
                            vendorUrl + "'\x3e\x3cimg src\x3d'" + imgSrc + "'/\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'offer'\x3e\x3cdiv class\x3d'name' style\x3d'font-size:medium;'\x3e\x3ca href\x3d'" + vendorUrl + "'\x3e" + title + "\x3c/a\x3e\x3c/div\x3e\x3cdiv classs\x3d'price-wrapper'\x3e\x3cspan class\x3d'new-price'\x3e " + minprice + "\x3c/span\x3e\x3cspan class\x3d'old-price'\x3e " + maxprice + "\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'buttons'\x3e\x3ca href\x3d'" + vendorUrl + "' class\x3d'ic-btn'\x3e" + cta1 + "\x3c/a\x3e\x3ca href\x3d'" +
                            detailsUrl + "' class\x3d'ic-more'\x3e" + cta2 + "\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e"
                    } else {
                        vendorUrl = "https://nli.icicibank.com/NewRetailWeb/paymeTryHome.htm?paymid\x3dXXXXXXXXXX";
                        compareBuySliderDiv += "\x3cdiv class\x3d'deal-card'\x3e\x3cdiv class\x3d'deal-inner'\x3e\x3cdiv class\x3d'offer-strip'\x3e\x3cp\x3e" + ribbonLabel + "\x3c/p\x3e\x3c/div\x3e\x3cdiv class\x3d'img-offer-wrapper'\x3e\x3cdiv class\x3d'image'\x3e\x3ca href\x3d'" + detailsUrl + "'\x3e\x3cimg src\x3d'" + imgSrc + "'/\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'offer'\x3e\x3cdiv class\x3d'name' style\x3d'font-size:medium;'\x3e\x3ca href\x3d'" +
                            detailsUrl + "'\x3e" + title + "\x3c/a\x3e\x3c/div\x3e\x3cdiv classs\x3d'price-wrapper'\x3e\x3cspan class\x3d'new-price'\x3e " + minprice + "\x3c/span\x3e\x3cspan class\x3d'old-price'\x3e " + maxprice + "\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'buttons'\x3e\x3ca href\x3d'" + detailsUrl + "' class\x3d'ic-btn'\x3e" + cta2 + "\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e"
                    }
                else compareBuySliderDiv += "\x3cdiv class\x3d'deal-card'\x3e\x3cdiv class\x3d'deal-inner'\x3e\x3cdiv class\x3d'offer-strip'\x3e\x3cp\x3e" +
                    ribbonLabel + "\x3c/p\x3e\x3c/div\x3e\x3cdiv class\x3d'img-offer-wrapper'\x3e\x3cdiv class\x3d'image'\x3e\x3ca href\x3d'" + detailsUrl + "'\x3e\x3cimg src\x3d'" + imgSrc + "'/\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'offer'\x3e\x3cdiv class\x3d'name' style\x3d'font-size:medium;'\x3e\x3ca href\x3d'" + detailsUrl + "'\x3e" + title + "\x3c/a\x3e\x3c/div\x3e\x3cdiv classs\x3d'price-wrapper'\x3e\x3cspan class\x3d'new-price'\x3e " + minprice + "\x3c/span\x3e\x3cspan class\x3d'old-price'\x3e " + maxprice + "\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'buttons'\x3e\x3ca href\x3d'" +
                    detailsUrl + "' class\x3d'ic-btn'\x3e" + cta2 + "\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e"
            }
            compareBuySliderDiv = compareBuySliderDiv + "\x3c/div\x3e";
            $("#comparebuy").append(compareBuySliderDiv);
            $("#comparebuy").css("display", "block");
            $("#comparebuy .trending-deals-slider").slick({
                dots: true,
                infinite: true,
                autoplay: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true
                    }
                }, {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                        centerMode: true,
                        centerPadding: "15px",
                        infinite: true
                    }
                }]
            });
            setTimeout(function() {
                $("#compareandbuy .trending-deals-slider .deal-card").equalHeights()
            })
        },
        error: function() {
            console.log("compareBuyOffersApi calling unsuccessful")
        }
    })
});
$(document).ready(function() {
    if ($(window).width() < 991) $("body").toggleClass("notification-enabled", $(".download-notification").length && $(".download-notification").is(":visible") ? true : false);
    $(".download-notification .close").click(function() {
        $("body").removeClass("notification-enabled");
        $(".download-notification").hide()
    })
});

function downloadapp() {
    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        var m = $(".smartphone-btn").attr("data-ios-url");
        var l = $(".image-src").attr("data-ios-src");
        var o = $(".image-src").attr("data-ios-alt");
        $(".smartphone-btn").attr("href", m);
        $(".image-src").attr("src", l);
        $(".image-src").attr("alt", o);
        setTimeout(function() {
            $("body").removeClass("notification-enabled");
            $(".download-notification").hide()
        }, 15E3)
    } else if (navigator.userAgent.match(/(Android)/)) {
        var q = $(".smartphone-btn").attr("data-android-url");
        var n = $(".image-src").attr("data-android-src");
        var p = $(".image-src").attr("data-android-alt");
        $(".smartphone-btn").attr("href", q);
        $(".image-src").attr("src", n);
        $(".image-src").attr("alt", p);
        setTimeout(function() {
            $("body").removeClass("notification-enabled");
            $(".download-notification").hide()
        }, 15E3)
    } else;
    $(".smartphone-btn").click(function(s) {
        s.preventDefault();
        var r = this;
        setTimeout(function() {
            window.location = r.getAttribute("href")
        }, 25);
        window.location = "imobileapp://"
    })
}
$(window).on("load resize", function() {
    downloadapp()
});
$(".disclaimer-popup .close").on("click", function() {
    $(".disclaimer-popup").hide()
});
var oldModelHref;
$(".static-modal-launcher").on("click", function(e) {
    e.preventDefault();
    $(".disclaimer-popup").show();
    var j = $(this).attr("href");
    var i = $(".disclaimer-popup .popup-inner-content");
    var newPopup = false;
    if (oldModelHref !== j) {
        oldModelHref = j.slice();
        newPopup = true;
        i.empty()
    } else {
        oldModelHref = j.slice();
        $(".disclaimer-popup").show()
    }
    if (newPopup) $.ajax({
        url: j,
        success: function(aL) {
            i.html($(aL).find(".disclaimer-modal-content"));
            $(".disclaimer-popup").show()
        }
    })
});
! function() {
    var $selectMainCategory = $("#intSelectOne");
    var $selectSubCategory = $("#intSelectTwo");
    var domainUrl = document.location.origin;
    var rightProductDiv = document.getElementById("find-right-product");
    var findProductServletPath = document.getElementById("find-product-servlet-path");
    var servletURL = findProductServletPath && findProductServletPath.getAttribute("data-frpServletPath");
    var dataExpPath = findProductServletPath && findProductServletPath.getAttribute("data-expPath");
    var frpURL = domainUrl + servletURL +
        "?expPath\x3d" + dataExpPath;
    $(document).ready(function() {
        if (servletURL && dataExpPath) $.getJSON(frpURL, function(result) {
            $selectMainCategory.selectmenu();
            $selectSubCategory.selectmenu();
            result && result.ProductList && createDropdown(result.ProductList)
        }).fail(function() {})
    });

    function createDropdown(productList) {
        var filterArray = [];
        var currentURL = window.location.href;
        if (currentURL.indexOf("/nri-banking/nri-banking") > -1) {
            var currentURL = window.location.href;
            if (currentURL.indexOf("/nri-banking/nri-banking") > -1) var subCategoryfilter =
                productList.filter(function(data) {
                    return data.SubCategory == "Regular"
                });
            if (currentURL.indexOf("/nri-banking/nri-banking") > -1) var mainCategoryfilter = productList.filter(function(data) {
                return data.SubCategory != "Regular"
            });
            var filterArray = $.merge(subCategoryfilter, mainCategoryfilter);
            productList = filterArray;
            var uniqueCategory = [];
            productList.forEach(function(itm) {
                !uniqueCategory.includes(itm.MainCategory) && uniqueCategory.push(itm.MainCategory) && $selectMainCategory.append($("\x3coption\x3e", {
                    value: itm.MainCategory,
                    text: itm.MainCategory
                }))
            })
        } else {
            var uniqueCategory$2 = [];
            productList = rearrangeProductList(productList);
            productList.forEach(function(itm) {
                !uniqueCategory$2.includes(itm.MainCategory) && uniqueCategory$2.push(itm.MainCategory) && $selectMainCategory.append($("\x3coption\x3e", {
                    value: itm.MainCategory,
                    text: itm.MainCategory
                }))
            })
        }

        function rearrangeProductList(orignalList) {
            var defaultMainCategory = $("#defaultMainCategory").text().trim();
            var defaultSubCategory = $("#defaultSubCategory").text().trim();
            var defaultMainArray =
                orignalList.filter(function(data) {
                    return data.MainCategory === defaultMainCategory
                });
            var defaultSubArray = defaultMainArray.filter(function(data) {
                return data.SubCategory === defaultSubCategory
            });
            var notDefaultMainArray = orignalList.filter(function(data) {
                return data.MainCategory !== defaultMainCategory
            });
            var notDefaultSubArray = defaultMainArray.filter(function(data) {
                return data.SubCategory !== defaultSubCategory
            });
            var arrangedSubArray = $.merge(defaultSubArray, notDefaultSubArray);
            var arrangedMainArray = $.merge(arrangedSubArray,
                notDefaultMainArray);
            return arrangedMainArray
        }
        document.getElementById("intSelectOne") ? document.getElementById("intSelectOne").selectedIndex = "1" : null;
        $selectMainCategory.selectmenu("refresh");
        var selectedMainValue = document.querySelector("#intSelectOne") ? document.querySelector("#intSelectOne").value : null;
        if (selectedMainValue) {
            productList.forEach(function(itm) {
                if (itm.MainCategory == selectedMainValue) $selectSubCategory.append($("\x3coption\x3e", {
                    value: itm.SubCategory,
                    text: itm.SubCategory
                }))
            });
            document.getElementById("intSelectTwo") ?
                document.getElementById("intSelectTwo").selectedIndex = "1" : null;
            $selectSubCategory.selectmenu("refresh")
        }
        var selectedSubValue = document.querySelector("#intSelectTwo") ? document.querySelector("#intSelectTwo").value : null;
        if (selectedSubValue) {
            var selectedProductLink = productList.find(function(value) {
                if (value.SubCategory === selectedSubValue) return value
            }).Link;
            var xhttp = new XMLHttpRequest;
            xhttp.onload = function() {
                rightProductDiv ? rightProductDiv.innerHTML = this.responseText : null;
                document.dispatchEvent(startloadEvent);
                deepLinking()
            };
            if (typeof Event === "function") var startloadEvent = new Event("start-product");
            else {
                var startloadEvent = document.createEvent("Event");
                startloadEvent.initEvent("start-product", true, true)
            }
            xhttp.open("GET", domainUrl + selectedProductLink + ".html");
            xhttp.send()
        }
        $selectMainCategory.on("selectmenuchange", function(event, mainCategory) {
            var uniqueSubCategory = [];
            var filteredSubCategory = [];
            var selectedMainCategory = mainCategory.item.value;
            $selectSubCategory.html($("\x3coption\x3e", {
                text: " Select "
            })).selectmenu("refresh");
            productList.forEach(function(itm) {
                if (itm.MainCategory == selectedMainCategory) {
                    filteredSubCategory.push(itm);
                    if (!uniqueSubCategory.includes(itm.SubCategory)) {
                        uniqueSubCategory.push(itm.SubCategory);
                        $selectSubCategory.append($("\x3coption\x3e", {
                            value: itm.SubCategory,
                            text: itm.SubCategory
                        }))
                    }
                }
            });
            $selectSubCategory.selectmenu("refresh");
            if (filteredSubCategory.length === 1) {
                $selectSubCategory.trigger("selectmenuchange", filteredSubCategory);
                document.getElementById("intSelectTwo").selectedIndex = "1";
                $selectSubCategory.selectmenu("refresh")
            }
        });
        var productLoader = document.getElementById("find-product-loader");
        $selectSubCategory.on("selectmenuchange", function(event, subCategory) {
            productLoader ? productLoader.classList.remove("hide") : null;
            var selectedSubCategory = subCategory.item ? subCategory.item.value : subCategory.SubCategory;
            var selectedProductLink = productList.find(function(value) {
                if (value.SubCategory == selectedSubCategory) return value
            }).Link;
            var xhttp = new XMLHttpRequest;
            xhttp.onload = function() {
                productLoader ? productLoader.classList.add("hide") :
                    null;
                rightProductDiv ? rightProductDiv.innerHTML = this.responseText : null;
                if (typeof Event === "function") var startloadEvent = new Event("start-product");
                else {
                    var startloadEvent = document.createEvent("Event");
                    startloadEvent.initEvent("start-product", true, true)
                }
                document.dispatchEvent(startloadEvent);
                deepLinking()
            };
            xhttp.open("GET", domainUrl + selectedProductLink + ".html");
            xhttp.send()
        })
    }
}();
$(document).ready(function() {
    initCardSlick();
    $(".orange-hub-filter-section .sort-dropdown span").click(function() {
        $(this).addClass("active");
        $(".sort-dropdown .dropdown-wrapper").toggle()
    });
    $(".orange-hub-filter-section .sort-tools .sort-dropdown li").click(function() {
        $(".sort-tools .sort-dropdown li").removeClass("active");
        $(this).addClass("active");
        $(".sort-dropdown span").removeClass("active");
        $(".sort-tools .sort-dropdown span").text($(this).text());
        $(".sort-dropdown .dropdown-wrapper").hide()
    });
    $(".orange-hub-filter-section .sort-tools .title").click(function() {
        $(".sort-dropdown .dropdown-wrapper").toggle("show")
    });
    $(".orangebook-download .orangebook-cards-slider").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2E3,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 557,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "15px"
            }
        }]
    });
    $(".orange-hub-filter-section .sidebar-content li div").click(function(event) {
        if (event.target !== this) return;
        if ($(event.target).closest(".mCSB_draggerContainer").length > 0) return;
        if ($(this).parent().hasClass("active") && $(this).parent().hasClass("dropdown")) {
            $(this).parent().find(".dropdown-list").slideToggle();
            $(this).parent().removeClass("active");
            return
        } else {
            $(".dropdown-list").hide();
            $(this).parent().find(".dropdown-list").slideDown()
        }
        $(".sidebar-content li div").parent().removeClass("active");
        $(this).parent().addClass("active");
        if ($(this).parent().hasClass("dropdown")) {
            $(this).parent().find(".dropdown-list li").removeClass("active");
            $(this).parent().find(".dropdown-list li").first().addClass("active")
        } else if ($(window).width() < 991) $(".sidebar-header .close").click()
    });
    $(".orange-hub-filter-section .sidebar-content .selection-filters .dropdown-list li").click(function(event) {
        $(".sidebar-content .dropdown-list li").removeClass("active");
        $(this).addClass("active");
        if ($(window).width() < 991) $(".sidebar-header .close").click()
    });
    $(".orangebook-dropdown .dropdown-list").mCustomScrollbar();
    $(".orangebook-ul ul").mCustomScrollbar();
    $(window).bind("scroll", function() {
        if ($(".orangebook-lists ").length == 0) return;
        if ($(window).width() < 991) {
            var filterSectionEl = $(".filter-section");
            var headerEl1 = $(".new-header.mobile.sticky-enable .device-menu-top");
            var headerEl2 = $(".new-header.mobile.sticky-enable .search");
            var headerHeight = headerEl1.length ? headerEl1.get(0).offsetHeight + (headerEl2.length ? headerEl2.get(0).offsetHeight : 0) : 0;
            if (filterSectionEl.length) {
                var filterSectionOffTop =
                    filterSectionEl.get(0).offsetTop - headerHeight;
                if (window.pageYOffset > filterSectionOffTop) $(".filter-top").addClass("filter-sticky");
                else $(".filter-top").removeClass("filter-sticky")
            }
        } else if ($(window).width() > 991) {
            $(".filter-top").removeClass("filter-sticky");
            $(".search-container").removeClass("filter-sticky")
        }
        $(".orangebook-lists .orangebook-list").each(function(index) {
            if ($(".card-loading").length > 0) return;
            if ($(this).isOnScreen() && $(this).hasClass("hidden-card")) {
                var thisElement = $(this);
                thisElement.removeClass("hidden-card");
                thisElement.addClass("card-loading");
                setTimeout(function() {
                    thisElement.removeClass("card-loading");
                    thisElement.addClass("auto-height")
                }, 2E3)
            }
        })
    })
});
$(window).on("load orientationchange", function() {
    initCardSlick()
});

function initCardSlick() {
    if ($(window).width() > 560) {
        if ($(".orangebook-card-m-slider").hasClass("slick-initialized")) $(".orangebook-card-m-slider").slick("unslick");
        return true
    }
    $(".orangebook-card-m-slider").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        infinite: true,
        centerMode: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "15px"
    })
}
$(function() {
    $(document).on("click", ".podcast-play-btn", function(e) {
        e.preventDefault();
        $(".podcast-popup").show();
        audio.src = e.target.getAttribute("data-value");
        audio.play()
    });
    $(".podcast-popup .close-icon").click(function(e) {
        $(".podcast-popup").hide();
        audio.pause()
    });
    var audio = $("audio")[0];
    var durUpdated = false;
    $(".audioPlayer .play-icon").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("pause-icon");
        if (audio.paused) audio.play();
        else audio.pause()
    });
    if (audio) {
        audio.onplay = function() {
            durUpdated =
                false
        };
        audio.ontimeupdate = function() {
            $(".progress").css("width", audio.currentTime / audio.duration * 100 + "%");
            $(".start-time").text(formatTime(audio.currentTime));
            !durUpdated && audio.duration && $(".total").text(formatTime(audio.duration)) && (durUpdated = true)
        };
        audio.onended = function() {
            $(this).toggleClass("play-icon")
        }
    }
    $(".progress-bar").click(function(e) {
        e.preventDefault();
        audio.currentTime = e.offsetX / $(this).width() * audio.duration
    });

    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        seconds =
            Math.floor(seconds % 60);
        seconds = seconds >= 10 ? seconds : "0" + seconds;
        return minutes + ":" + seconds
    }
});
$(".orange-hub-filter-section .toggle-checkbox-ul-more").click(function() {
    $(this).hide();
    $(".checkbox-ul-more").show()
});

function resetFilter() {
    if ($(".filter-top.filter-sticky").length > 0) {
        $(".feature-video-inner").show();
        $(".announcement-section").show();
        $(".filter-inner-container").removeClass("active");
        $(".filter-top").removeClass("filter-selected");
        $(".filter-top").removeClass("filter-sticky");
        $(".filter-cat").hide()
    }
}
$(".orange-hub-filter-section .sidebar-header .close, .sidebar-footer .apply").click(function() {
    closeSidebarFilter()
});

function closeSidebarFilter() {
    $(".sidebar-content").removeClass("active");
    $(".filter-top").removeClass("filter-selected");
    $(".filter-top").removeClass("filter-sticky");
    resetFilter();
    $("body").removeClass("no-scroll");
    if ($(window).width() < 991) $("html, body").animate({
        scrollTop: $(".filter-section").offset().top - ($(".new-header.mobile").height() + $(".new-header.mobile .search").height() + 10)
    });
    else $("html, body").animate({
        scrollTop: $(".filter-section").offset().top
    })
}
$(".orange-hub-filter-section .sidebar-footer .clear-all").click(function() {
    $(".sidebar-content .checkbox-list input").prop("checked", false);
    $(".sidebar-content .checkbox-list input").closest("li").removeClass("active");
    closeSidebarFilter()
});
$(".orange-hub-filter-section .filter-top .filter-icon").click(function() {
    $(".filter-cat").show();
    if (!$(".filter-top").hasClass("filter-sticky")) $(".filter-top").addClass("filter-sticky");
    $(".filter-top").addClass("filter-selected");
    $(".sidebar-content").addClass("active");
    $("body").addClass("no-scroll");
    $(".filter-cat").addClass("active")
});
$(document).on("click", ".filter-cat .filter-clear", function() {
    $(".filter-inner-container").removeClass("active");
    $(".filter-top").removeClass("filter-selected");
    $(".filter-top").removeClass("filter-sticky");
    $(".search-container").removeClass("filter-sticky");
    $(".filter-cat").hide()
});
$("#subcribe-form").on("submit", function(e) {
    e.preventDefault();
    var fname = document.forms["subcribe-form"]["name"].value;
    var email = document.forms["subcribe-form"]["email"].value;
    var isValid = true;
    var $fnameEl;
    $("#subcribe-form .error").removeClass("error");
    $("#subcribe-form .error-txt").hide();
    var fnameInvalid = !/^[a-zA-Z ]*$/g.test(fname);
    if (fname == null || fname == "") {
        $fnameEl = $("#subcribe-form #name");
        $fnameEl.addClass("error");
        $("#subcribe-form #fname-err").show();
        isValid = false
    }
    if (fnameInvalid) {
        $fnameEl =
            $("#subcribe-form #name");
        $fnameEl.addClass("error");
        $("#subcribe-form #fname-num-err").show();
        isValid = false
    }
    if (email == null || email == "" || !/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
        var $emailEl = $("#subcribe-form #email");
        $emailEl.addClass("error");
        $("#subcribe-form #email-err").show();
        isValid = false
    }
    if (isValid) $("#subcribe-form")[0].reset()
});
var activeInnertab;
handleOninnerTabChange();
document.addEventListener("start-product", function() {
    handleOninnerTabChange()
});

function handleOninnerTabChange() {
    setTimeout(function() {
        var tabList = $(".tabpanel-inner .product-tabs ul li");
        $.each(tabList, function() {
            $("." + $(this).attr("id") + "-leftpanel").hide();
            $("." + $(this).attr("id") + "-rightPanel").hide()
        });
        activeInnertab = $(".tabpanel-inner .product-tabs ul li.active").attr("id");
        if (activeInnertab) {
            $("." + activeInnertab + "-leftpanel").show();
            $("." + activeInnertab + "-rightPanel").show()
        }
    }, 0)
}
$(document).off("start-product");
! function() {
    var cardsData = {
        cards: []
    };
    var domainUrl = location.origin;
    var filterEl = $(".orange-hub-filter-section");
    var searchPath, cardGroupCount;
    if (filterEl.length > 0) {
        searchPath = filterEl.attr("data-searchpath");
        cardGroupCount = filterEl.attr("data-cardGroupCount")
    }
    var start = 0;
    var loader = $("#initialLoading");

    function fetchblogsData() {
        return fetch(domainUrl + "/content/icicibank.blogsearch.json?searchPath\x3d" + searchPath + "\x26start\x3d" + start + "\x26orderby\x3dpublishdate").then(function(response) {
            return response.json()
        }).then(function(data) {
            if (data &&
                data["cards"]) cardsData = data;
            sortCards(cardsData["cards"])
        }).catch(function() {
            loader.removeClass("card-loading")
        })
    }
    var tempArray = [];
    var bgfilters = [];
    if (searchPath) fetchblogsData();

    function sortCards(dataArray) {
        setTimeout(function() {
            var sortId = $(".sort-dropdown .dropdown-inner li.active").attr("id");
            if (sortId == "latest") {
                dataArray.sort(custom_sort_date);
                dataArray.reverse()
            } else if (sortId == "oldest") dataArray.sort(custom_sort_date);
            else if (sortId == "viewed") {
                dataArray.sort(custom_sort_view);
                dataArray.reverse()
            } else if (sortId ==
                "liked") {
                dataArray.sort(custom_sort_like);
                dataArray.reverse()
            }
            createOrangeList(dataArray)
        }, 500)
    }

    function custom_sort_date(a, b) {
        return (new Date(a.publishdate)).getTime() - (new Date(b.publishdate)).getTime()
    }

    function custom_sort_view(a, b) {
        var viewsOne = a.viewers,
            viewsTwo = b.viewers;
        if (viewsOne == undefined) viewsOne = 0;
        if (viewsTwo == undefined) viewsTwo = 0;
        return parseInt(viewsOne) - parseInt(viewsTwo)
    }

    function custom_sort_like(a, b) {
        var likeOne = a.likes,
            likeTwo = b.likes;
        if (likeOne == undefined) likeOne = 0;
        if (likeTwo ==
            undefined) likeTwo = 0;
        return parseInt(likeOne) - parseInt(likeTwo)
    }
    $(".orange-hub-filter-section .filter-content .search-box-area input").focus(function() {
        $(".filter-content .search-box-area input").val("")
    });
    $(".orange-hub-filter-section .filter-content .search-box-area input").keyup(function() {
        var inputText = $(this)[0].value;
        if (inputText.length > 0) {
            var titleArray = searchItems(cardsData["cards"], "title", inputText);
            var resultArray = titleArray;
            resultArray = uniqueData(resultArray, "cardId");
            sortCards(resultArray)
        } else sortCards(cardsData["cards"])
    });

    function uniqueData(array, property) {
        var unique = {};
        var distinct = [];
        for (var i in array) {
            if (typeof unique[array[i][property]] == "undefined") distinct.push(array[i]);
            unique[array[i][property]] = 0
        }
        return distinct
    }

    function handleAllChecklist() {
        $(".filter-content .filter-cat").show();
        $(".filter-content .filter-cat").addClass("active");
        if ($(window).width() > 991) createFilterArray()
    }
    $(document).on("click", ".orange-hub-filter-section .sidebar-content .type-checkbox-list input", function() {
        $(".sidebar-content .volume-checkbox-list input").prop("checked",
            false);
        handleAllChecklist()
    });
    $(document).on("click", ".orange-hub-filter-section .sidebar-content .volume-checkbox-list input", function() {
        $(".sidebar-content .type-checkbox-list input").prop("checked", false);
        handleAllChecklist()
    });

    function createFilterArray() {
        bgfilters = [];
        $.each($(".sidebar-content .checkbox-list input:checked"), function() {
            if (bgfilters.indexOf($(this).val()) == -1) bgfilters.push($(this).val())
        });
        if (bgfilters.length == 0) {
            if ($(window).width() <= 991) {
                $(".filter-inner-container").removeClass("active");
                $(".filter-top").removeClass("filter-selected");
                $(".filter-top").removeClass("filter-sticky")
            }
            $(".filter-content .filter-cat").hide();
            $(".filter-content .filter-cat").removeClass("active");
            sortCards(cardsData["cards"]);
            generateFilterTags("#filterTags", "")
        } else {
            generateFilterTags("#filterTags", bgfilters);
            renderOfferCards()
        }
    }
    $(document).on("click", ".orange-hub-filter-section  .filter-cat img", function() {
        var removefilterId = $(this).closest("span").attr("data-filter");
        $("[value\x3d" + removefilterId + "]").prop("checked",
            false);
        $("[value\x3d" + removefilterId + "]").closest("li").removeClass("active");
        createFilterArray()
    });
    $(document).on("click", ".orange-hub-filter-section  .filter-cat .filter-clear", function() {
        $(".sidebar-content .checkbox-list input").prop("checked", false);
        $(".sidebar-content .checkbox-list input").closest("li").removeClass("active");
        createFilterArray()
    });
    $(".orange-hub-filter-section  .sidebar-header .close").click(function() {
        $(".filter-content .filter-cat").hide();
        $(".filter-content .filter-cat").removeClass("active");
        $(".sidebar-content .checkbox-list input").prop("checked", false);
        $(".sidebar-content .checkbox-list input").closest("li").removeClass("active");
        $(this).parent().removeClass("active")
    });
    $(".orange-hub-filter-section .sidebar-footer .apply, .orange-hub-filter-section  .sidebar-footer .clear-all").click(function() {
        setTimeout(function() {
            createFilterArray()
        }, 500)
    });
    $(".orange-hub-filter-section .sort-dropdown .dropdown-inner li").click(function() {
        if (tempArray.length > 0) sortCards(tempArray);
        else sortCards(cardsData["cards"])
    });
    $(".orange-hub-filter-section .sidebar-content .selection-filters li div").click(function(event) {
        if (event.target !== this) return;
        if ($(event.target).closest(".mCSB_draggerContainer").length > 0) return;
        clearCheckFilters();
        if ($(this).parent().hasClass("dropdown")) renderOfferCards($(this).siblings(".dropdown-list").find("li:first").attr("id"));
        else renderOfferCards($(this).parent().attr("id"))
    });
    $(".orange-hub-filter-section  .sidebar-content .selection-filters .dropdown-list li").click(function(event) {
        clearCheckFilters();
        renderOfferCards($(this).attr("id"))
    });
    $(".orangebook-dropdown .menu-item").click(function(event) {
        clearCheckFilters();
        renderOfferCards("all")
    });

    function clearCheckFilters() {
        $(".sidebar-content .checkbox-list input").prop("checked", false);
        $(".filter-content .filter-cat").show();
        $(".filter-content .filter-cat").addClass("active");
        createFilterArray()
    }

    function renderOfferCards(filterId) {
        tempArray = [];
        if (filterId == "all") sortCards(cardsData["cards"]);
        else {
            for (var index$3 = 0; index$3 < cardsData["cards"].length; index$3++) {
                var element =
                    cardsData["cards"][index$3];
                if (element["categoryid"].toLowerCase() == filterId || element["subcategory"].toLowerCase() == filterId || element["typeid"].toLowerCase() == filterId) tempArray.push(element);
                if (bgfilters.indexOf(element["volumeId"].toLowerCase()) != -1 || bgfilters.indexOf(element["typeid"].toLowerCase()) != -1) tempArray.push(element)
            }
            sortCards(tempArray)
        }
    }

    function intToString(value) {
        if (!value) return 0;
        if (value && value.length <= 3) return value;
        var suffixes = ["", "K", "M", "B", "T"];
        var suffixNum = Math.floor(("" +
            value).length / 3);
        var shortValue = parseFloat((suffixNum != 0 ? value / Math.pow(1E3, suffixNum) : value).toPrecision(2));
        if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
        return shortValue + suffixes[suffixNum]
    }

    function getTimePassed(publishDate) {
        var countDownDate = (new Date(publishDate)).getTime();
        var now = (new Date).getTime();
        var distance = now - countDownDate;
        var hours = Math.floor(distance % (1E3 * 60 * 60 * 24) / (1E3 * 60 * 60));
        var minutes = Math.floor(distance % (1E3 * 60 * 60) / (1E3 * 60));
        var days = Math.floor(distance / (1E3 * 60 * 60 * 24));
        var months = Math.floor(days / 31);
        var years = Math.floor(months / 12);
        var message = "";
        if (years == 1) message = years + " Year Ago";
        else if (years > 0) message = years + " Years Ago";
        else if (months == 1) message = months + " Month Ago";
        else if (months > 0) message = months + " Months Ago";
        else if (days == 1) message = days + " Day Ago";
        else if (days > 1 && days < 7) message = days + " Days Ago";
        else if (days >= 7) {
            var weeks = Math.round(days / 7);
            if (weeks == 1) message = weeks + " Week Ago";
            else message = weeks + " Weeks Ago"
        } else if (hours == 1) message = hours + " Hour Ago";
        else if (hours >
            0) message = hours + " Hours Ago";
        else message = minutes + " Minutes Ago";
        return message
    }

    function createOrangeList(cardData) {
        var htmlMarkup = "";
        for (var index$4 = 0, len = cardData.length; index$4 < len; index$4++) {
            if (index$4 % cardGroupCount == 0)
                if (index$4 >= cardGroupCount) htmlMarkup += '\x3cdiv class\x3d"orangebook-list hidden-card"\x3e';
                else htmlMarkup += '\x3cdiv class\x3d"orangebook-list"\x3e';
            htmlMarkup += generateHTML(cardData[index$4]["image"], cardData[index$4]["type"], cardData[index$4]["readTime"] + "mins Read", getTimePassed(cardData[index$4]["publishdate"]),
                cardData[index$4]["link"], cardData[index$4]["title"], cardData[index$4]["tags"], intToString(cardData[index$4]["viewers"]), intToString(cardData[index$4]["likes"]), cardData[index$4]["video"], cardData[index$4]["videoDuration"], cardData[index$4]["podcast"], cardData[index$4]["podcastDuration"], cardData[index$4]["imagealtText"], index$4);
            if (index$4 % cardGroupCount == cardGroupCount - 1) htmlMarkup += "\x3c/div\x3e"
        }
        if (htmlMarkup.length > 0) {
            $("#orangeListWrapper").html(htmlMarkup);
            $(".filter-top .sort-tools").removeClass("disable-sorting")
        } else {
            $("#orangeListWrapper").html('\x3cdiv class\x3d"no-result"\x3e\x3c/div\x3e');
            $(".filter-top .sort-tools").addClass("disable-sorting")
        }
        loader.removeClass("card-loading")
    }

    function generateHTML(cardImage, cardType, readTime, timeAgo, pageLink, cardTitle, tagsArr, viewers, likes, cardVideo, cardVideoDuration, cardPodcast, cardPodcastDuration, imagealtText, index) {
        var lowerCaseCardType = cardType.toLowerCase();
        var whatsapplnk = "https://api.whatsapp.com/send?url\x3d" + pageLink + "?rel\x3d0\x26text\x3d" + cardTitle,
            fblink = "https://www.facebook.com/sharer/sharer.php?u\x3d" + document.domain + pageLink + "?rel\x3d0\x26text\x3d" +
            cardTitle,
            twitterlink = "https://twitter.com/intent/tweet?url\x3d" + pageLink + "?rel\x3d0\x26text\x3d" + cardTitle,
            linkdinlink = "https://www.linkedin.com/shareArticle?mini\x3dtrue?url\x3d" + pageLink + "?rel\x3d0\x26text\x3d" + cardTitle;
        tagsArr = tagsArr.split(",");
        var tagsHtml = tagsArr.map(function(tag) {
            if (tag) return '\x3cdiv class\x3d"tag"\x3e' + tag + "\x3c/div\x3e";
            else return ""
        }).join("");
        var html = '\x3cdiv class\x3d"orangebook-card"\x3e\x3cdiv class\x3d"card-inner"\x3e\x3cdiv class\x3d"media"\x3e' + (lowerCaseCardType ===
                "video" || lowerCaseCardType === "webinar" ? '\x3cimg src\x3d"' + cardImage + '" alt\x3d"" loading\x3d"lazy"\x3e\x3ca href\x3d"' + cardVideo + '" class\x3d"play-btn"\x3e\x3c/a\x3e' : lowerCaseCardType === "podcast" ? '\x3cimg src\x3d"assets/images/orange-hub/podcast-img.jpg" alt\x3d"" loading\x3d"lazy"\x3e\x3ca href\x3d"#" data-value\x3d"' + cardPodcast + '" class\x3d"play-btn podcast-play-btn"\x3e\x3c/a\x3e' : '\x3ca href\x3d"' + pageLink + '" target\x3d"_blank"\x3e' + '\x3cimg src\x3d"' + cardImage + '" alt\x3d"' + imagealtText + '" loading\x3d"lazy"\x3e\x3c/a\x3e') +
            '\x3c/div\x3e\x3cdiv class\x3d"content"\x3e\n        \x3cdiv class\x3d"card-top"\x3e\n            \x3cdiv class\x3d"blue-tag"\x3e' + (cardType === "Webinar" ? "Video" : cardType) + '\x3c/div\x3e\n        \x3cdiv class\x3d"date"\x3e' + (lowerCaseCardType === "video" || lowerCaseCardType === "webinar" ? cardVideoDuration + " | " + timeAgo : lowerCaseCardType === "podcast" ? cardPodcastDuration + " | " + timeAgo : readTime + " | " + timeAgo) + '\x3c/div\x3e\n        \x3c/div\x3e\x3ca href\x3d"' + (lowerCaseCardType === "video" || lowerCaseCardType ===
                "webinar" ? cardVideo : pageLink) + '" target\x3d"_blank"\x3e' + '\x3ch2 class\x3d"card-title"\x3e' + cardTitle + "\x3c/h2\x3e" + '\x3c/a\x3e\x3cdiv class\x3d"card-tags"\x3e' + tagsHtml + '\x3c/div\x3e\n        \n        \x3cdiv class\x3d"card-bottom"\x3e\n            \x3cdiv class\x3d"date-readtime"\x3e\x3cspan class\x3d"num-viewer"\x3e' + viewers + '\x3c/span\x3e\x3c/div\x3e\n        \x3cdiv class\x3d"bookmark-share"\x3e\n            \x3cdiv class\x3d"share" data-text\x3d"Check out this blog"\x3e\x3c/div\x3e\n            \x3cdiv class\x3d"share-content"\x3e\n                \x3cdiv class\x3d"inner-content"\x3e\n                    \x3cdiv class\x3d"share-header"\x3e\n                        \x3cp\x3eShare\x3c/p\x3e\x3cspan class\x3d"close-icon"\x3e\x3cimg\n                                src\x3d"/content/dam/icicibank/icici-assets/icons/close-orange.svg"\n                                alt\x3d"fb" loading\x3d"lazy"\x3e\x3c/span\x3e\n                    \x3c/div\x3e\n                    \x3cul class\x3d"share-link"\x3e\n                        \x3cli\x3e\x3ca href\x3d"' +
            whatsapplnk + '" target\x3d"_blank"\x3e\x3cspan\n                                    class\x3d"n-icon"\x3e\x3cimg\n                                        src\x3d"/content/dam/icicibank/icici-assets/icons/video/whatsapp.svg"\n                                        alt\x3d"whatsapp" loading\x3d"lazy"\x3e\x3c/span\x3e \x3cspan\n                                    class\x3d"h-icon"\x3e\x3cimg\n                                        src\x3d"/content/dam/icicibank/icici-assets/icons/video/whatsapp-o.svg"\n                                        alt\x3d"whatsapp" loading\x3d"lazy"\x3e \x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\n                        \x3cli\x3e\x3ca href\x3d"' +
            fblink + '" target\x3d"_blank"\x3e \x3cspan\n                                    class\x3d"n-icon"\x3e\x3cimg\n                                        src\x3d"/content/dam/icicibank/icici-assets/icons/fb-black.svg"\n                                        alt\x3d"fb" loading\x3d"lazy"\x3e\x3c/span\x3e\x3cspan\n                                    class\x3d"h-icon"\x3e\x3cimg\n                                        src\x3d"/content/dam/icicibank/icici-assets/icons/fb-orange.svg"\n                                        alt\x3d"fb" loading\x3d"lazy"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\n                        \x3cli\x3e\x3ca href\x3d"' +
            twitterlink + '" target\x3d"_blank"\x3e\x3cspan\n                                    class\x3d"n-icon"\x3e\x3cimg\n                                        src\x3d"/content/dam/icicibank/icici-assets/icons/tw-black.svg"\n                                        alt\x3d"tw" loading\x3d"lazy"\x3e\x3c/span\x3e\x3cspan\n                                    class\x3d"h-icon"\x3e\x3cimg\n                                        src\x3d"/content/dam/icicibank/icici-assets/icons/tw-orange.svg"\n                                        alt\x3d"tw" loading\x3d"lazy"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\n                        \x3cli\x3e\x3ca href\x3d"' +
            linkdinlink + '" target\x3d"_blank"\x3e\x3cspan\n                                    class\x3d"n-icon"\x3e\x3cimg\n                                        src\x3d"/content/dam/icicibank/icici-assets/icons/ln-black.svg"\n                                        alt\x3d"ln" loading\x3d"lazy"\x3e\x3c/span\x3e\x3cspan\n                                    class\x3d"h-icon"\x3e\x3cimg\n                                        src\x3d"/content/dam/icicibank/icici-assets/icons/ln-orange.svg"\n                                        alt\x3d"ln" loading\x3d"lazy"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\n                    \x3c/ul\x3e\n                    \x3cdiv class\x3d"youtube-text"\x3e\x3cinput type\x3d"text" id\x3d"bloglink' +
            index + '" name\x3d"link"\n                            value\x3d"' + domainUrl + pageLink + '"\x3e\x3cspan id\x3d"btn-bloglink' + index + '" onclick\x3d"copyCode(\'bloglink' + index + "','btn-bloglink" + index + "','input')\"\x3eCopy\x3c/span\x3e\n                    \x3c/div\x3e\n                \x3c/div\x3e\n            \x3c/div\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n      \x3c/div\x3e\n      \x3c/div\x3e\n      \x3c/div\x3e";
        return html
    }
    if ($(".orange-hub-filter-section")) $("body").addClass("experiencefr-blog-filter")
}();
$(".trending-deals-slider.featured-products-atm-page").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1025,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true
        }
    }, {
        breakpoint: 640,
        settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
            centerMode: true,
            centerPadding: "15px",
            infinite: true
        }
    }]
});
$(window).on("load resize", function() {
    $(".trending-deals-slider .slick-arrow").on("click", function() {
        setTimeout(function() {
            $(".trending-deals-slider.featured-products-atm-page .deal-card").equalHeights()
        }, 100)
    })
});
$("#nudgeForTrendingDeals").hide();
$(".deals-section .nav-tabs li a").on("click", function() {
    $(".deals-section .slick-slider").slick("refresh");
    setTimeout(function() {
        $(".trending-deals-slider.featured-products-atm-page .deal-card").equalHeights()
    }, 100);
    $(".compare-step-1").removeClass("hide");
    $(".compare-step-2").addClass("hide");
    $(".compare-step-3").addClass("hide");
    var nudgeContent = $(this).data("nudge-content");
    if (nudgeContent != undefined) {
        $("#nudgeForTrendingDeals p").empty().append(nudgeContent);
        $("#nudgeForTrendingDeals").show()
    } else $("#nudgeForTrendingDeals").hide()
});

function trendingDealSliderHeight(selector) {
    var heights = [];
    var height = "";
    var maxHeight = "";
    $("#myTabContent .tab-pane.active .trending-deals-slider .slick-list .slick-track").each(function() {
        $(this).find($(selector)).each(function() {
            height = $(this).height();
            heights.push(height)
        });
        maxHeight = Math.max.apply(null, heights);
        $("#myTabContent .tab-pane.active .trending-deals-slider .slick-list .slick-track").find($(selector)).each(function() {
            $(this).height(maxHeight)
        })
    })
}

function setOfferHeight() {
    trendingDealSliderHeight(".deal-card");
    trendingDealSliderHeight(".offer");
    trendingDealSliderHeight(".description");
    trendingDealSliderHeight(".img-offer-wrapper")
}
setOfferHeight();
$(window).on("load", function() {
    setTimeout(function() {
        $(".trending-deals-slider.featured-products-atm-page .deal-card").equalHeights()
    }, 1E3)
});
(function() {
    $(".recomeded-cards-section .cards-list").slick({
        dots: !0,
        arrows: !0,
        infinite: !1,
        autoplay: !1,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: !1,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 640,
            settings: {
                arrows: !1,
                centerMode: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "45px"
            }
        }]
    });
    $(window).on("load resize orientationchange", function() {
        $(".debit-cards-section .trending-deals-slider .description").equalHeights()
    })
})();
var activetab;
handleOnTabChange();
document.addEventListener("start-product", function() {
    handleOnTabChange();
    loadCallback()
});

function handleOnTabChange() {
    setTimeout(function() {
        $(".reward-panel .product-tabs li").each(function(i) {
            $("." + $(this).attr("id") + "-leftpanel").hide();
            $("." + $(this).attr("id") + "-rightPanel").hide()
        });
        $(".loan-forms .form-slider").slick("refresh");
        activetab = $(".product-tabs ul li.active").attr("id");
        if (activetab) {
            $("." + activetab + "-leftpanel").show();
            $("." + activetab + "-rightPanel").show();
            if ($(".product-tabs li.active").attr("id") === "product-tab-0") $("input[name\x3d" + activetab + "]:eq(1)").attr("checked",
                true);
            else $("input[name\x3d" + activetab + "]:first").attr("checked", true);
            handleChangeLifestyleIncome()
        }
    }, 0)
}

function handleChangeLifestyleIncome() {
    $(".each-content").each(function(i) {
        $(".each-content").addClass("hide")
    });
    $(".left-image").each(function(i) {
        $(".left-image").addClass("hide")
    });
    setTimeout(function() {
        var income = document.querySelector('input[name\x3d"' + activetab + '"]:checked') ? document.querySelector('input[name\x3d"' + activetab + '"]:checked').value : null;
        if (income && activetab) {
            $("." + activetab + "-" + income.replace(".", "-")).removeClass("hide");
            $("." + activetab + "-" + income.replace(".", "-")).parent().show();
            $("." + activetab + "-" + income.replace(".", "-")).show();
            $(".card-" + activetab + "-" + income.replace(".", "-")).removeClass("hide")
        }
    }, 15)
}

function loadCallback() {
    !$(".loan-forms .form-slider").hasClass("slick-initialized") && $(".loan-forms .form-slider").slick({
        dots: true,
        infinite: false,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                dots: true,
                infinite: false,
                autoplay: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true
            }
        }],
        onInit: function() {
            $(".slick-next .slick-arraow").css("pointer-events",
                "none")
        }
    });

    function deactiveArrow() {
        $(".form-slider .slick-arrow").addClass("arrow-disable")
    }

    function activateArrow() {
        $(".form-slider .slick-arrow").removeClass("arrow-disable")
    }

    function showFormError() {
        $(".form-slider .slick-active").find(".form-group-inner").addClass("error")
    }
    var disableEventsClass = "disable-el";

    function disableSlickDots(index) {
        $("#offer-form .slick-dots li").eq(index).addClass(disableEventsClass);
        $("#offer-form-mob .slick-dots li").eq(index).addClass(disableEventsClass)
    }

    function enableSlickDot(index) {
        $("#offer-form .slick-dots li").eq(index).removeClass(disableEventsClass);
        $("#offer-form-mob .slick-dots li").eq(index).removeClass(disableEventsClass)
    }

    function validateMobile($this) {
        flag = false;
        msg = "";
        mobile = $($this).val();
        if ($.trim(mobile) == "") disableSlickDots(2);
        else if (!$.isNumeric(mobile)) {
            showFormError();
            msg = "Please enter valid Mobile number";
            $($this).addClass("error");
            disableSlickDots(2)
        } else if (mobile.length < 10) {
            showFormError();
            msg = "Please enter valid Mobile number";
            $($this).addClass("error");
            disableSlickDots(2)
        } else {
            $($this).removeClass("error");
            $(".form-slider .slick-active").find(".form-group-inner").removeClass("error");
            activateArrow();
            enableSlickDot(2);
            flag = true
        }
        $(".error-msg").html(msg);
        return flag
    }

    function validateName($this) {
        flag = false;
        msg = "";
        var regName = /^[a-zA-Z ]+$/;
        name = $($this).val();
        if ($.trim(name) == "") {
            disableSlickDots(1);
            disableSlickDots(2)
        } else if (!regName.test(name)) {
            showFormError();
            msg = "Please enter valid first Name";
            $($this).addClass("error");
            disableSlickDots(1);
            disableSlickDots(2)
        } else {
            $($this).removeClass("error");
            $(".form-slider .slick-active").find(".form-group-inner").removeClass("error");
            activateArrow();
            enableSlickDot(1);
            $(".slick-dots").show();
            flag = true
        }
        $(".error-msg").html(msg);
        return flag
    }

    function validateEmail($this) {
        flag = false;
        msg = "";
        var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        email = $($this).val();
        $(".slick-arrow").removeClass("active-btn-submit");
        $(".cust-btn-submit").removeClass("active-btn-submit");
        if ($.trim(email) == "");
        else if (!regEmail.test(email)) {
            showFormError();
            msg = "Please enter valid Email ID";
            $($this).addClass("error")
        } else {
            $($this).removeClass("error");
            $(".form-slider .slick-active").find(".form-group-inner").removeClass("error");
            activateArrow();
            $(".slick-dots").show();
            flag = true;
            $(".slick-arrow").addClass("active-btn-submit");
            $(".cust-btn-submit").addClass("active-btn-submit")
        }
        $(".error-msg").html(msg);
        return flag
    }
    var timeout = 0;
    clearInterval(timeout);
    $(".form-slider").on("afterChange", function(event, slick, currentSlide) {
        $(".slick-arrow").show();
        $(".cust-btn-submit").hide();
        if (currentSlide == 3)
            if (!validateMobile($(".input-mobile"))) $(".form-slider").slickGoTo(parseInt(0));
            else if (!validateName($(".input-name"))) $(".form-slider").slickGoTo(parseInt(1));
        else if (!validateEmail($(".input-email"))) $(".form-slider").slickGoTo(parseInt(2));
        else {
            $("#offer-form-mob").trigger("reset");
            $("#offer-form").trigger("reset")
        }
        if (currentSlide == 0) {
            if (!validateName($(".input-name"))) deactiveArrow();
            else activateArrow();
            $(".slick-arrow").removeClass("btn-submit active-btn-submit");
            $(".cust-btn-submit").removeClass("active-btn-submit")
        } else if (currentSlide == 1) {
            if (!validateMobile($(".input-mobile"))) deactiveArrow();
            else activateArrow();
            $(".cust-btn-submit").removeClass("active-btn-submit");
            $(".slick-arrow").removeClass("btn-submit active-btn-submit")
        } else if (currentSlide == 2) {
            $(".slick-arrow").val("Submit");
            $(".slick-arrow").text("Submit");
            $(".slick-arrow").addClass("btn-submit");
            if (!validateEmail($(".input-email"))) deactiveArrow();
            else activateArrow();
            if ($(".cust-btn-submit").length <= 0) $('\x3cbutton class\x3d"cust-btn-submit" type\x3d"button" aria-disabled\x3d"true" value\x3d"Submit"\x3eSubmit\x3c/button\x3e').insertAfter(".form-slider .slick-next");
            else $(".cust-btn-submit").show();
            $(".slick-arrow").hide()
        } else {
            $("#offer-form").trigger("reset");
            $("#offer-form-mob").trigger("reset")
        }
    });
    $("form input").on("keyup", function() {
        deactiveArrow();
        if ($(this).hasClass("input-mobile")) validateMobile($(this));
        else if ($(this).hasClass("input-name")) validateName($(this));
        else if ($(this).hasClass("input-email")) validateEmail($(this))
    });
    deactiveArrow();
    disableSlickDots(1);
    disableSlickDots(2);
    $(".slick-arrow").on("click", function(e) {
        if ($(this).hasClass("arrow-disable")) e.preventDefault()
    });
    $(document).on("click",
        "button.cust-btn-submit",
        function() {
            $(this).addClass("activeCall");
            getCallback()
        });
    var getCallback = function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;
                console.log("send response from here");
                var formajax = $(".activeCall").parent().parent().parent().parent().parent().find("#offer-form").attr("ajax-page");
                console.log("formajax: " + formajax);
                var callbackId = $("#callBackId").text();
                var productId = $("#" + callbackId).text();
                console.log("productId: " + productId);
                var customerName = $(".activeCall").parent().parent().parent().parent().parent().find("#offer-form").find("#name").val();
                var words = customerName.split(" ");
                if (words.length == 1) {
                    var customerFirstName = customerName;
                    var customerLastName = customerName
                } else {
                    var customerFirstName = customerName.substr(0, customerName.indexOf(" "));
                    var k = customerName.substr(customerName.indexOf(" "));
                    var customerLastName = k.replace(/ /g, "")
                }
                var customerContactNo = $(".activeCall").parent().parent().parent().parent().parent().find("#offer-form").find("#mobile").val();
                var customerEmailId = $(".activeCall").parent().parent().parent().parent().parent().find("#offer-form").find("#email").val();
                console.log("customerFirstName: " + customerFirstName);
                console.log("customerContactNo: " + customerContactNo);
                console.log("customerEmailId: " + customerEmailId);
                var callbackRequest;
                if (typeof formajax != "undefined" && typeof productId != "undefined" && typeof customerFirstName != "undefined" && typeof customerLastName != "undefined" && typeof customerContactNo != "undefined" && typeof customerEmailId != "undefined")
                    if (formajax != null && formajax != "" && productId != null && productId != "" && customerFirstName != null && customerFirstName != "" &
                        customerLastName != null && customerLastName != "" && customerContactNo != null && customerContactNo != "" && customerEmailId != null && customerEmailId != "") callbackRequest = formajax + "apiname\x3dsave\x26productCode\x3d" + productId + "\x26custName\x3d" + customerFirstName + "\x26lastName\x3d" + customerLastName + "\x26custMobNo\x3d" + customerContactNo + "\x26custEmail\x3d" + customerEmailId;
                if (typeof callbackRequest != "undefined")
                    if (callbackRequest != null && callbackRequest != "") $.ajax({
                        dataType: "json",
                        url: callbackRequest,
                        type: "GET",
                        success: function(response) {
                            getCallbackResults =
                                response.getCallbackResults;
                            console.log("Get callback response json :" + response.getCallbackResults.length);
                            console.log("Get callback response :" + getCallbackResults);
                            var successFlag = 0;
                            for (var i = 0; i < getCallbackResults.length; i++) {
                                var crmServiceResponce = getCallbackResults[i].IsSuccess;
                                var message = getCallbackResults[i].Message;
                                var crmItemKey = getCallbackResults[i].ItemKey;
                                console.log("Get callback message :" + message);
                                console.log("Get callback CRM ID :" + crmItemKey);
                                if (typeof message != "undefined" && typeof crmItemKey !=
                                    "undefined" && typeof crmServiceResponce != "undefined")
                                    if (message != null && message != "" && crmItemKey != null && crmItemKey != "" && crmServiceResponce != null && crmServiceResponce != "")
                                        if (message == "Success") {
                                            successFlag++;
                                            console.log("You have successfully registered to get a callback from out expert.");
                                            $("form.offer-form").css("display", "none");
                                            $(".loan-forms .content .success-msg").css("display", "inline-block");
                                            $(".loan-forms .content .success-msg p").css("display", "inline-block")
                                        }
                            }
                        },
                        error: function() {
                            console.log("Get callback response calling unsuccessful");
                            executed = false
                        }
                    })
            }
        }
    }()
}
$(document).ready(function() {
    $("body").addClass("experiencefr-handpicked");
    var mccmmaxCookieValue = 3,
        mccminitCookie = 1,
        mccmexpirationDays = 1;
    var mccmcookieName = "mccmdealsOfferSetCount";
    if (jQuery.cookie(mccmcookieName) == null) jQuery.cookie(mccmcookieName, mccminitCookie, {
        expires: mccmexpirationDays
    });
    else {
        var mccmcookie_value = jQuery.cookie(mccmcookieName);
        mccmcookie_value = parseInt(mccmcookie_value);
        if (mccmcookie_value >= mccminitCookie && mccmcookie_value < mccmmaxCookieValue) {
            mccmcookie_value++;
            jQuery.cookie(mccmcookieName,
                mccmcookie_value, {
                    expires: mccmexpirationDays
                })
        }
        if (mccmcookie_value >= mccmmaxCookieValue) jQuery.cookie(mccmcookieName, mccminitCookie, {
            expires: mccmexpirationDays
        })
    }
    mccmHandpickedOffersCookieVal();

    function handPickedOffers(sliderdiv, cardsliderdiv) {
        var fileUrlOffer = $("#non-unica-handpicked-json").val();
        var result = {
            "offers": []
        };
        $.getJSON(fileUrlOffer, function(data) {
            if (data && data.offers) result = data;
            var cookieVal = $("input[id\x3d'readonlycategories']").val();
            var valArrCount = 0;
            if (typeof cookieVal != "undefined")
                if (cookieVal !=
                    null && cookieVal != "") {
                    var valArr = cookieVal.split(",");
                    valArrCount = valArr.length
                }
            var offerId = [];
            var defaultOffer = [];
            for (var d = 0; d < result.offers.length; d++)
                if (result.offers[d].trendingOfferShow == "0") defaultOffer.push(result.offers[d].offerId);
            var loopCount = 0;
            if (valArrCount == 1) loopCount = 3;
            else if (valArrCount == 2) loopCount = 2;
            else if (valArrCount == 3) loopCount = 1;
            else;
            for (var k = 0; k < valArrCount; k++) {
                var count = 0;
                for (var i = 0; i < result.offers.length; i++) {
                    var categoryArr = result.offers[i].category.split(":");
                    for (var j =
                            0; j < categoryArr.length; j++) {
                        var currOfferId = result.offers[i].offerId;
                        if (categoryArr[j] == valArr[k] && !offerId.includes(currOfferId)) {
                            offerId.push(result.offers[i].offerId);
                            ++count
                        } else;
                    }
                    if (loopCount == count) break
                }
            }
            var diffCount = defaultOffer.length - offerId.length;
            for (var o = 0; o < defaultOffer.length; o++)
                if (!offerId.includes(defaultOffer[o])) offerId.push(defaultOffer[o]);
            var countNew = 0;
            for (var h = 0; h <= offerId.length; h++)
                for (var p = 0; p < result.offers.length; p++)
                    if (result.offers[p].offerId == offerId[h]) {
                        var favouriteClass =
                            $("input#favouriteClass").val();
                        var offerShareLinkPage = $("input#offerShareLinkPage").val();
                        var url = result.offers[p].Url;
                        var offerView = result.offers[p].offerViews;
                        var view = "";
                        var offerPageUrl = result.offers[p].brandLink;
                        var smallOfferImageRef = result.offers[p].smallOfferImageRef;
                        var eventTrackCode = result.offers[p].eventTrackCode;
                        var OfferDespOne = result.offers[p].offerDesp1;
                        var OfferDespTwo = result.offers[p].offerDesp2;
                        var OfferDespThree = result.offers[p].offerDesp3;
                        var OfferDespFour = result.offers[p].offerDesp4;
                        var categoryName = result.offers[p].categoryName;
                        var categoryLink = result.offers[p].categoryLink;
                        var OfferId = result.offers[p].offerId;
                        var OfferTitle = result.offers[p].offerTitle;
                        var display = "";
                        var pageurl = offerShareLinkPage + offerPageUrl;
                        var fbShare = "https://www.facebook.com/sharer/sharer.php?u\x3d" + pageurl;
                        var lkShare = "https://www.linkedin.com/shareArticle?mini\x3dtrue\x26amp;url\x3d" + pageurl;
                        var twShare = "https://twitter.com/intent/tweet?url\x3d" + pageurl + "\x26amp;text\x3d" + OfferTitle;
                        var gpShare = "https://plus.google.com/share?url\x3d" +
                            pageurl + "\x26amp;text\x3d" + OfferTitle;
                        if (countNew >= 3) display = "display:none;";
                        if (offerView != null && offerView != "")
                            if (offerView.length == 4) view = offerView.substr(0, 1) + "." + offerView.substr(2, 1) + "K Views";
                            else if (offerView.length == 5) view = offerView.substr(1, 2) + "K Views";
                        else if (offerView.length == 6) view = offerView.substr(1, 3) + "K Views";
                        else if (offerView.length == 7) view = offerView.substr(0, 1) + "." + offerView.substr(2, 1) + "M Views";
                        else view = offerView + " Views";
                        sliderdiv += "\x3cdiv class\x3d'offer-card h-view'\x3e\x3cdiv class\x3d'card-inner'\x3e\x3cdiv class\x3d'media'\x3e\x3ca class\x3d'deeplinking' data-app\x3d'" +
                            offerPageUrl + "'\x3e\x3cimg src\x3d'" + smallOfferImageRef + "' loading\x3d'lazy'\x3e\x3c/img\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'content'\x3e\x3ca target\x3d'_blank' data-app\x3d'" + offerPageUrl + "' class\x3d'card-title deeplinking'\x3e" + OfferDespOne + "\x3c/a\x3e\x3cdiv class\x3d'card-bottom'\x3e\x3cdiv class\x3d'date-readtime'\x3e\x3cspan class\x3d'num-viewer'\x3e" + view + "\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d'bookmark-share'\x3e\x3cdiv class\x3d'handpickedfav bookmark' offer-id\x3d'" + OfferId +
                            "'\x3e\x3c/div\x3e\x3cdiv class\x3d'share' data-text\x3d'check out this link'\x3e\x3c/div\x3e\x3cdiv class\x3d'share-content'\x3e\x3cdiv class\x3d'inner-content'\x3e\x3cdiv class\x3d'share-header'\x3e\x3cp\x3eShare\x3c/p\x3e \x3cspan class\x3d'close-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg' alt\x3d'fb'/\x3e\x3c/span\x3e \x3c/div\x3e\x3cul class\x3d'share-link'\x3e\x3cli\x3e\x3ca href\x3d'https://api.whatsapp.com/send?url\x3d" +
                            window.location.origin + offerPageUrl + "\x26text\x3d" + OfferDespOne + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp.svg' alt\x3d'whatsapp'\x3e\x3c/span\x3e \x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg' alt\x3d'whatsapp'\x3e \x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://www.facebook.com/sharer/sharer.php?u\x3d" +
                            window.location.origin + offerPageUrl + "\x26text\x3d" + OfferDespOne + "' target\x3d'_blank' tabindex\x3d'0'\x3e \x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg' alt\x3d'fb'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg'alt\x3d'fb'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://twitter.com/intent/tweet?url\x3d" +
                            window.location.origin + offerPageUrl + "\x26text\x3d" + encodeURI(OfferDespOne) + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg' alt\x3d'tw'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg' alt\x3d'tw'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://www.linkedin.com/shareArticle?mini\x3dtrue?url\x3d" +
                            window.location.origin + offerPageUrl + "\x26text\x3d" + OfferDespOne + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg' alt\x3d'ln'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg' alt\x3d'ln'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'youtube-text' style\x3d'display:none;'\x3e\x3cinput type\x3d'text' name\x3d'link' value\x3d'" +
                            window.location.origin + offerPageUrl + "' /\x3e\x3cspan\x3eCopy\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e \x3c/div\x3e \x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
                        countNew++;
                        break
                    }
            $("[data-tabtitle]").each(function() {
                if ($(this).attr("data-tabtitle") && $(this).attr("data-tabtitle").replace(/ /g, "").toLowerCase().includes("handpicked")) $(this).html(countNew)
            });
            sliderdiv = sliderdiv + "\x3c/div\x3e";
            cardsliderdiv = cardsliderdiv + "\x3c/div\x3e";
            if ($("#mccmtrendingoffers")) {
                $("#mccmtrendingoffers").append(sliderdiv);
                $("#mccmtrendingoffers .offer-card .card-inner .content a").click(function() {
                    var nameArr = $("#mccmtrendingoffers .offer-card .card-inner .media a").attr("data-app").split("/");
                    var eventLabel = nameArr[nameArr.length - 1];
                    var activeTab = $(".nav.nav-tabs.offer-nav-tabs li.active a").attr("data-tabtitles").toLowerCase().replace(/ /g, "_");
                    dataLayer.push({
                        "event": "custom_event",
                        "eventCategory": "offer_zone",
                        "eventAction": "offer_selected",
                        "eventLabel": (activeTab + "_" + eventLabel.replace(/ /g, "_")).toLowerCase()
                    })
                });
                deepLinking()
            }
            var DealsandOffersCookieVal = $.cookie("mccmdealsOfferSetCount");
            if (DealsandOffersCookieVal == 1) $("#deal" + DealsandOffersCookieVal).css("display", "block");
            else if (DealsandOffersCookieVal == 2) $("#deal" + DealsandOffersCookieVal).css("display", "block");
            else if (DealsandOffersCookieVal == 3) $("#deal" + DealsandOffersCookieVal).css("display", "block");
            else;
            $("#mccmtrendingoffers .offer-slider").slick({
                dots: true,
                infinite: true,
                autoplay: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        arrows: false
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true
                    }
                }, {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                        centerMode: true,
                        centerPadding: "45px",
                        infinite: true
                    }
                }]
            });
            $("#mccmtrendingoffers .offer-slider .offer-card").equalHeights();
            var o = localStorage.getItem("HandpickedIdsFav");
            var e = [];
            var m = [];
            if (typeof o != "undefined")
                if (o != null && o != "") {
                    var s = o.split(",");
                    for (var k = 0; k < s.length; k++) {
                        m.push(s[k]);
                        e.push(s[k])
                    }
                    for (var k = 0; k < m.length; k++) {
                        $('.handpickedfav.bookmark[offer-id\x3d"' +
                            m[k] + '"]').addClass("active");
                        $('.handpickedfav.bookmark[offer-id\x3d"' + m[k] + '"]').parent().parent().parent().parent().parent().addClass("favouirite");
                        $('.handpickedfav.bookmark[offer-id\x3d"' + m[k] + '"]').css({
                            background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
                        })
                    }
                }
            $(document).on("click", ".handpickedfav.bookmark", function(f) {
                var c = $(this).attr("offer-id");
                if (!$(this).hasClass("active")) {
                    $(this).addClass("active");
                    $(this).css({
                        background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
                    });
                    e.push(c);
                    e = g(e);
                    b()
                } else {
                    var a = localStorage.HandpickedIdsFav.split(",");
                    a = g(a);
                    $(this).removeClass("active");
                    $(this).css({
                        background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/bookmark.svg) no-repeat 0 0%"
                    });
                    a.splice($.inArray(c, a), 1);
                    e = g(a);
                    b()
                }
            });

            function b() {
                localStorage.setItem("HandpickedIdsFav", e)
            }

            function g(c) {
                var a = [];
                $.each(c, function(f, h) {
                    if ($.inArray(h, a) == -1) a.push(h)
                });
                return a
            }

            function p(a) {
                return a.filter(function(h, f, c) {
                    return f == c.indexOf(h)
                })
            }
        })
    }

    function mccmHandpickedOffersCookieVal() {
        var presentVal = $("#mccmTrendingLivesiteIdVal").val();
        if (typeof presentVal != "undefined") {
            if (presentVal != null && presentVal != "") {
                var newcookieVal = presentVal.replace(",", "and");
                var cookie_valueArr = [];
                if (typeof FedID != "undefined")
                    if (FedID != null && FedID != "") {
                        var mccmCookieName = "mccmCategoryOffers";
                        var url_string = window.location.href;
                        var url = new URL(url_string);
                        var id = url.searchParams.get("id");
                        var initCookie = newcookieVal;
                        var expirationDays = 1;
                        if (initCookie != null)
                            if (jQuery.cookie(mccmCookieName) ==
                                null) jQuery.cookie(mccmCookieName, initCookie, {
                                path: "/"
                            }, {
                                expires: expirationDays
                            });
                            else {
                                var cookie_value = jQuery.cookie(mccmCookieName) + "and";
                                cookie_value += initCookie;
                                cookie_valueArr.push(cookie_value);
                                var uniqueLivesiteId = cookie_valueArr.filter(function(itm, i, cookie_valueArr) {
                                    return i == cookie_valueArr.indexOf(itm)
                                });
                                jQuery.cookie(mccmCookieName, uniqueLivesiteId, {
                                    path: "/"
                                }, {
                                    expires: expirationDays
                                })
                            }
                    }
            }
        } else {
            var cookie_valueArr = [];
            if (typeof FedID != "undefined")
                if (FedID != null && FedID != "") {
                    var mccmCookieName =
                        "mccmCategoryOffers";
                    var url_string = window.location.href;
                    var url = new URL(url_string);
                    var id = url.searchParams.get("id");
                    var initCookie = id;
                    var expirationDays = 1;
                    if (initCookie != null)
                        if (jQuery.cookie(mccmCookieName) == null) jQuery.cookie(mccmCookieName, initCookie, {
                            path: "/"
                        }, {
                            expires: expirationDays
                        });
                        else {
                            var cookie_value = jQuery.cookie(mccmCookieName) + "and";
                            cookie_value += initCookie;
                            cookie_valueArr.push(cookie_value);
                            var uniqueLivesiteId = cookie_valueArr.filter(function(itm, i, cookie_valueArr) {
                                return i == cookie_valueArr.indexOf(itm)
                            });
                            jQuery.cookie(mccmCookieName, uniqueLivesiteId, {
                                path: "/"
                            }, {
                                expires: expirationDays
                            })
                        }
                }
        }
    }
    if ($("body").hasClass("indexPage")) $("h1.visitedOffer").css("margin", "10px 10px -25px 10px");
    mccmHandpickedOffers();

    function compareStrings(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return a < b ? -1 : a > b ? 1 : 0
    }

    function compareNumbers(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return a > b ? -1 : a > b ? 1 : 0
    }

    function defaultPickedOffers(mccmFilterOfferid, sliderdiv, cardsliderdiv) {
        var mccmPopularOfferJson = $("#non-unica-handpicked-json").val();
        var mccmCategoryIdVal = [];
        for (var i = 0; i < mccmFilterOfferid.length; i++) mccmCategoryIdVal.push(mccmFilterOfferid[i]);
        var mccmlength = mccmCategoryIdVal.length;
        var mccmOfferIds;
        var mccmOfferIdsArr = [];
        $.getJSON(mccmPopularOfferJson, function(result) {
            var sortedDefaultUnicaPopularOfferJson = result.offers;
            for (var k = 0; k < sortedDefaultUnicaPopularOfferJson.length; k++) {
                mccmOfferIds = sortedDefaultUnicaPopularOfferJson[k].offerViews;
                mccmOfferIdsArr.push(mccmOfferIds)
            }
            var count = 0;
            var booleanflag = true;
            for (var i = 0; i < sortedDefaultUnicaPopularOfferJson.length; i++)
                if (count <
                    3 - mccmCategoryIdVal.length) {
                    for (var j = 0; j < mccmCategoryIdVal.length; j++)
                        if (sortedDefaultUnicaPopularOfferJson[i].livesiteId != mccmCategoryIdVal[j]) {
                            count = count + 1;
                            booleanflag = false
                        } else booleanflag = true;
                    if (booleanflag == false) {
                        if (sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"] != "" && sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"] != "undefined") {
                            var offerDescription = "\x3cstrong\x3e" + sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"] + "\x3c/strong\x3e " + sortedDefaultUnicaPopularOfferJson[i]["offerDesp2"];
                            var dealsOfferdescription = sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"]
                        } else {
                            var offerDescription = sortedDefaultUnicaPopularOfferJson[i]["offerDesp2"] + " \x3cstrong\x3e" + sortedDefaultUnicaPopularOfferJson[i]["offerDesp3"] + "\x3c/strong\x3e " + sortedDefaultUnicaPopularOfferJson[i]["offerDesp4"];
                            var dealsOfferdescription = sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"]
                        }
                        sliderdiv += "\x3cdiv class\x3d'offer-card h-view'\x3e\x3cdiv class\x3d'card-inner'\x3e\x3cdiv class\x3d'media'\x3e\x3ca href\x3d'" +
                            sortedDefaultUnicaPopularOfferJson[i]["brandLink"] + "'\x3e\x3cimg src\x3d'" + sortedDefaultUnicaPopularOfferJson[i]["smallOfferImageRef"] + "'\x3e\x3c/img\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'content'\x3e\x3ca href\x3d'" + sortedDefaultUnicaPopularOfferJson[i]["brandLink"] + "' class\x3d'card-title'\x3e" + sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"] + "\x3c/a\x3e\x3cdiv class\x3d'card-bottom'\x3e\x3cdiv class\x3d'date-readtime'\x3e\x3cspan class\x3d'num-viewer'\x3e" + sortedDefaultUnicaPopularOfferJson[i]["offerViews"] +
                            "\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d'bookmark-share'\x3e\x3cdiv class\x3d'handpickedfav bookmark' offer-id\x3d'" + sortedDefaultUnicaPopularOfferJson[i]["offerId"] + "'\x3e\x3c/div\x3e\x3cdiv class\x3d'share'\x3e\x3c/div\x3e\x3cdiv class\x3d'share-content'\x3e\x3cdiv class\x3d'inner-content'\x3e\x3cdiv class\x3d'share-header'\x3e\x3cp\x3eShare\x3c/p\x3e \x3cspan class\x3d'close-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg' alt\x3d'fb'/\x3e\x3c/span\x3e \x3c/div\x3e\x3cul class\x3d'share-link'\x3e\x3cli\x3e\x3ca href\x3d'https://api.whatsapp.com/send?url\x3d" +
                            window.location.origin + sortedDefaultUnicaPopularOfferJson[i]["brandLink"] + "\x26text\x3d" + sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"] + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp.svg' alt\x3d'whatsapp'\x3e\x3c/span\x3e \x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg' alt\x3d'whatsapp'\x3e \x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://www.facebook.com/sharer/sharer.php?u\x3d" +
                            window.location.origin + sortedDefaultUnicaPopularOfferJson[i]["brandLink"] + "\x26text\x3d" + sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"] + "' target\x3d'_blank' tabindex\x3d'0'\x3e \x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg' alt\x3d'fb'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg'alt\x3d'fb'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://twitter.com/intent/tweet?url\x3d" +
                            window.location.origin + sortedDefaultUnicaPopularOfferJson[i]["brandLink"] + "\x26text\x3d" + encodeURI(sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"]) + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg' alt\x3d'tw'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg' alt\x3d'tw'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://www.linkedin.com/shareArticle?mini\x3dtrue?url\x3d" +
                            window.location.origin + sortedDefaultUnicaPopularOfferJson[i]["brandLink"] + "\x26text\x3d" + sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"] + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg' alt\x3d'ln'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg' alt\x3d'ln'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'youtube-text' style\x3d'display:none;'\x3e\x3cinput type\x3d'text' name\x3d'link' value\x3d'" +
                            window.location.origin + sortedDefaultUnicaPopularOfferJson[i]["brandLink"] + "' /\x3e\x3cspan\x3eCopy\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e \x3c/div\x3e \x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
                        if ($("div").hasClass("deals-and-more-offers")) cardsliderdiv += "\x3cdiv class\x3d'offer'\x3e\x3ca href\x3d'" + sortedDefaultUnicaPopularOfferJson[i]["brandLink"] + "'\x3e\x3cimg src\x3d'" + sortedDefaultUnicaPopularOfferJson[i]["smallOfferImageRef"] + "'\x3e\x3cp\x3e" + sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"] +
                            "\x3c/p\x3e\x3c/a\x3e\x3c/div\x3e";
                        else;
                    } else;
                }
            sliderdiv = sliderdiv + "\x3c/div\x3e";
            cardsliderdiv = cardsliderdiv + "\x3c/div\x3e";
            $("#mccmtrendingoffers").append(sliderdiv);
            var DealsandOffersCookieVal = $.cookie("mccmdealsOfferSetCount");
            if (DealsandOffersCookieVal == 1) $("#deal" + DealsandOffersCookieVal).css("display", "block");
            else if (DealsandOffersCookieVal == 2) $("#deal" + DealsandOffersCookieVal).css("display", "block");
            else if (DealsandOffersCookieVal == 3) $("#deal" + DealsandOffersCookieVal).css("display", "block");
            else;
            $("#mccmtrendingoffers .offer-slider").slick({
                dots: true,
                infinite: true,
                autoplay: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        arrows: false
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true
                    }
                }, {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                        centerMode: true,
                        centerPadding: "45px",
                        infinite: true
                    }
                }]
            });
            $("#mccmtrendingoffers .offer-slider .offer-card").equalHeights();
            var o = localStorage.getItem("HandpickedIdsFav");
            var e = [];
            var m = [];
            if (typeof o != "undefined")
                if (o != null && o != "") {
                    var s = o.split(",");
                    for (var k = 0; k < s.length; k++) {
                        m.push(s[k]);
                        e.push(s[k])
                    }
                    for (var k = 0; k < m.length; k++) {
                        $('.handpickedfav.bookmark[offer-id\x3d"' + m[k] + '"]').addClass("active");
                        $('.handpickedfav.bookmark[offer-id\x3d"' + m[k] + '"]').parent().parent().parent().parent().parent().addClass("favouirite");
                        $('.handpickedfav.bookmark[offer-id\x3d"' + m[k] + '"]').css({
                            background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
                        })
                    }
                }
            $(document).on("click",
                ".handpickedfav.bookmark",
                function(f) {
                    var c = $(this).attr("offer-id");
                    if (!$(this).hasClass("active")) {
                        $(this).addClass("active");
                        $(this).css({
                            background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
                        });
                        e.push(c);
                        e = g(e);
                        b()
                    } else {
                        var a = localStorage.HandpickedIdsFav.split(",");
                        a = g(a);
                        $(this).removeClass("active");
                        $(this).css({
                            background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/bookmark.svg) no-repeat 0 0%"
                        });
                        a.splice($.inArray(c, a), 1);
                        e = g(a);
                        b()
                    }
                });

            function b() {
                localStorage.setItem("HandpickedIdsFav", e)
            }

            function g(c) {
                var a = [];
                $.each(c, function(f, h) {
                    if ($.inArray(h, a) == -1) a.push(h)
                });
                return a
            }

            function p(a) {
                return a.filter(function(h, f, c) {
                    return f == c.indexOf(h)
                })
            }
        })
    }

    function mccmHandpickedOffers() {
        if (jQuery.cookie("mccmCategoryOffers") != null) {
            $(".deals-and-more-offers").empty();
            var mccmCookieVal = $.cookie("mccmCategoryOffers");
            var mccCokiesplitVal = mccmCookieVal.split("and");
            var mccCookieValArr = [];
            for (var i =
                    0; i < mccCokiesplitVal.length; i++) mccCookieValArr.push(mccCokiesplitVal[i]);
            var mccmCategoryValCount = $("#mccmTrendingCategoryValCount").val();
            if (mccmCategoryValCount > 0) {
                $(".offerContent").empty();
                var unicaPopularOfferJson = "/content/icicibank.apigee.json";
                var mccmCategoryVal = [];
                for (var i = 1; i <= mccmCategoryValCount; i++) mccmCategoryVal.push($("#mccmTrendingCategory" + i).val());
                $("#mccmTrendingCategoryVal").val(mccmCategoryVal);
                var mccmCategoryIds = $("#mccmTrendingCategoryVal").val();
                $(".offerContent").css("display",
                    "block");
                $(".locate-near-by").css("display", "none");
                var mccmOfferCount = $("#mccmTrendingCategoryValCount").val();
                var categoryIds;
                var livesiteIds;
                var mccmIds;
                var unicaCategoryIds = mccmCategoryIds.split(",");
                var categoryIdArr = [];
                var livesiteIdArr = [];
                var mccmIdArr = [];
                var mccmArray = [];
                var filteredMccmArray = [];
                var mccmfilterCategoryListArray = [];
                var filterdata = [];
                if (mccmOfferCount > 0) $.getJSON(unicaPopularOfferJson, function(result) {
                    filterdata = result.UnicaPopularOffers;
                    for (var l = 0; l < mccCookieValArr.length; l++) {
                        filtereddata =
                            $.grep(filterdata, function(n, i) {
                                return n.Livesite != mccCookieValArr[l]
                            });
                        filterdata = filtereddata
                    }
                    var sortedUnicaPopularOfferJson = filtereddata.sort(function(a, b) {
                        return compareStrings(a.MCCMCategory, b.MCCMCategory)
                    });
                    for (var k = 0; k < sortedUnicaPopularOfferJson.length; k++) {
                        mccmIds = sortedUnicaPopularOfferJson[k].MCCMCategory;
                        mccmIdArr.push(mccmIds)
                    }
                    $.each(sortedUnicaPopularOfferJson, function(index, value) {
                        if ($.inArray(value.MCCMCategory, mccmArray) == -1) {
                            mccmArray.push(value.MCCMCategory);
                            filteredMccmArray.push(value)
                        }
                    });
                    filteredMccmArray = JSON.stringify(filteredMccmArray);
                    filteredMccmObj = JSON.parse(filteredMccmArray);
                    var mccmfiltercount = 0;
                    var mccmfilterOfferid = [];
                    var slider_div = "\x3cdiv class\x3d'offer-slider'\x3e";
                    var card_slider_div = "\x3cdiv class\x3d'offer-slider'\x3e";
                    for (var n = 0; n < unicaCategoryIds.length; n++)
                        for (var p = 0; p < filteredMccmObj.length; p++) {
                            categoryIds = sortedUnicaPopularOfferJson[p].Category.split(":");
                            livesiteIds = sortedUnicaPopularOfferJson[p].Livesite.split(":");
                            if (unicaCategoryIds[n] === filteredMccmObj[p]["MCCMCategory"]) {
                                mccmfiltercount =
                                    mccmfiltercount + 1;
                                mccmfilterCategoryListArray.push(unicaCategoryIds[n]);
                                mccmfilterOfferid.push(filteredMccmObj[p]["Livesite"]);
                                for (var b = 0; b < livesiteIds.length; b++) {
                                    var count = 0;
                                    for (var a = 0; a < categoryIds.length; a++) {
                                        count = count + 1;
                                        categoryIdArr.push(categoryIds[a]);
                                        livesiteIdArr.push(livesiteIds[b]);
                                        if (count > 1);
                                        else {
                                            var mccmcount = 0;
                                            if (filteredMccmObj[p]["offerDesp1"] != "" && filteredMccmObj[p]["offerDesp1"] != "undefined") {
                                                var offerDescription = "\x3cstrong\x3e" + filteredMccmObj[p]["offerDesp1"] + "\x3c/strong\x3e " +
                                                    filteredMccmObj[p]["offerDesp2"];
                                                var dealsOfferdescription = filteredMccmObj[p]["offerDesp1"]
                                            } else {
                                                var offerDescription = filteredMccmObj["offerDesp2"] + " \x3cstrong\x3e" + filteredMccmObj[p]["offerDesp3"] + "\x3c/strong\x3e " + filteredMccmObj[p]["offerDesp4"];
                                                var dealsOfferdescription = filteredMccmObj[p]["offerDesp1"]
                                            }
                                            slider_div += "\x3cdiv class\x3d'offer-card h-view'\x3e\x3cdiv class\x3d'card-inner'\x3e\x3cdiv class\x3d'media'\x3e\x3ca href\x3d'" + filteredMccmObj[p]["brandLink"] + "'\x3e\x3cimg src\x3d'" + filteredMccmObj[p]["smallOfferImage"] +
                                                "'\x3e\x3c/img\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'content'\x3e\x3ca href\x3d'" + filteredMccmObj[p]["brandLink"] + "' class\x3d'card-title'\x3e" + filteredMccmObj[p]["offerDesp1"] + "\x3c/a\x3e\x3cdiv class\x3d'card-bottom'\x3e\x3cdiv class\x3d'date-readtime'\x3e\x3cspan class\x3d'num-viewer'\x3e" + filteredMccmObj[p]["offerViews"] + "\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d'bookmark-share'\x3e\x3cdiv class\x3d'handpickedfav bookmark' offer-id\x3d'" + filteredMccmObj[p]["offerId"] + "'\x3e\x3c/div\x3e\x3cdiv class\x3d'share'\x3e\x3c/div\x3e\x3cdiv class\x3d'share-content'\x3e\x3cdiv class\x3d'inner-content'\x3e\x3cdiv class\x3d'share-header'\x3e\x3cp\x3eShare\x3c/p\x3e \x3cspan class\x3d'close-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg' alt\x3d'fb'/\x3e\x3c/span\x3e \x3c/div\x3e\x3cul class\x3d'share-link'\x3e\x3cli\x3e\x3ca href\x3d'https://api.whatsapp.com/send?url\x3d" +
                                                window.location.origin + filteredMccmObj[p]["brandLink"] + "\x26text\x3d" + filteredMccmObj[p]["offerDesp1"] + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp.svg' alt\x3d'whatsapp'\x3e\x3c/span\x3e \x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg' alt\x3d'whatsapp'\x3e \x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://www.facebook.com/sharer/sharer.php?u\x3d" +
                                                window.location.origin + filteredMccmObj[p]["brandLink"] + "\x26text\x3d" + filteredMccmObj[p]["offerDesp1"] + "' target\x3d'_blank' tabindex\x3d'0'\x3e \x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg' alt\x3d'fb'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg'alt\x3d'fb'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://twitter.com/intent/tweet?url\x3d" +
                                                window.location.origin + filteredMccmObj[p]["brandLink"] + "\x26text\x3d" + encodeURI(filteredMccmObj[p]["offerDesp1"]) + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg' alt\x3d'tw'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg' alt\x3d'tw'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://www.linkedin.com/shareArticle?mini\x3dtrue?url\x3d" +
                                                window.location.origin + filteredMccmObj[p]["brandLink"] + "\x26text\x3d" + filteredMccmObj[p]["offerDesp1"] + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg' alt\x3d'ln'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg' alt\x3d'ln'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'youtube-text' style\x3d'display:none;'\x3e\x3cinput type\x3d'text' name\x3d'link' value\x3d'" +
                                                window.location.origin + filteredMccmObj[p]["brandLink"] + "' /\x3e\x3cspan\x3eCopy\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e \x3c/div\x3e \x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
                                            if ($("div").hasClass("deals-and-more-offers")) card_slider_div += "\x3cdiv class\x3d'offer'\x3e\x3ca href\x3d'" + filteredMccmObj[p]["brandLink"] + "'\x3e\x3cimg src\x3d'" + filteredMccmObj[p]["smallOfferImage"] + "'\x3e\x3cp\x3e" + filteredMccmObj[p]["offerDesp1"] + "\x3c/p\x3e\x3c/a\x3e\x3c/div\x3e";
                                            else;
                                        }
                                    }
                                }
                            }
                        }
                    var DealsandOffersCookieVal =
                        $.cookie("mccmdealsOfferSetCount");
                    if (DealsandOffersCookieVal == 1) $("#deal" + DealsandOffersCookieVal).css("display", "block");
                    else if (DealsandOffersCookieVal == 2) $("#deal" + DealsandOffersCookieVal).css("display", "block");
                    else if (DealsandOffersCookieVal == 3) $("#deal" + DealsandOffersCookieVal).css("display", "block");
                    else;
                    $("#mccmTrendingLivesiteIdVal").val(mccmfilterOfferid);
                    mccmHandpickedOffersCookieVal();
                    if (mccmfiltercount == 0) handPickedOffers(slider_div, card_slider_div);
                    else if (mccmfiltercount == 1) defaultPickedOffers(mccmfilterOfferid,
                        slider_div, card_slider_div);
                    else if (mccmfiltercount == 2) defaultPickedOffers(mccmfilterOfferid, slider_div, card_slider_div);
                    else if (mccmfiltercount == 3) defaultPickedOffers(mccmfilterOfferid, slider_div, card_slider_div);
                    else defaultPickedOffers(mccmfilterOfferid, slider_div, card_slider_div)
                });
                else console.log("no mccm offers found")
            } else {
                var slider_div = "\x3cdiv class\x3d'offer-slider'\x3e";
                var card_slider_div = "\x3cdiv class\x3d'offer-slider'\x3e";
                handPickedOffers(slider_div, card_slider_div)
            }
        } else {
            $(".deals-and-more-offers").empty();
            var mccmCategoryValCount = $("#mccmTrendingCategoryValCount").val();
            if (mccmCategoryValCount > 0) {
                $(".offerContent").empty();
                var unicaPopularOfferJson = "/content/icicibank.apigee.json";
                var mccmCategoryVal = [];
                for (var i = 1; i <= mccmCategoryValCount; i++) mccmCategoryVal.push($("#mccmTrendingCategory" + i).val());
                $("#mccmTrendingCategoryVal").val(mccmCategoryVal);
                var mccmCategoryIds = $("#mccmTrendingCategoryVal").val();
                $(".offerContent").css("display", "block");
                $(".locate-near-by").css("display", "none");
                var mccmOfferCount =
                    $("#mccmTrendingCategoryValCount").val();
                var categoryIds;
                var livesiteIds;
                var mccmIds;
                var unicaCategoryIds = mccmCategoryIds.split(",");
                var categoryIdArr = [];
                var livesiteIdArr = [];
                var mccmIdArr = [];
                var mccmArray = [];
                var filteredMccmArray = [];
                var mccmfilterCategoryListArray = [];
                var filterdata = [];
                if (mccmOfferCount > 0) $.getJSON(unicaPopularOfferJson, function(result) {
                    var sortedUnicaPopularOfferJson = result.UnicaPopularOffers.sort(function(a, b) {
                        return compareStrings(a.MCCMCategory, b.MCCMCategory)
                    });
                    for (var k = 0; k <
                        sortedUnicaPopularOfferJson.length; k++) {
                        mccmIds = sortedUnicaPopularOfferJson[k].MCCMCategory;
                        mccmIdArr.push(mccmIds)
                    }
                    $.each(sortedUnicaPopularOfferJson, function(index, value) {
                        if ($.inArray(value.MCCMCategory, mccmArray) == -1) {
                            mccmArray.push(value.MCCMCategory);
                            filteredMccmArray.push(value)
                        }
                    });
                    filteredMccmArray = JSON.stringify(filteredMccmArray);
                    filteredMccmObj = JSON.parse(filteredMccmArray);
                    var mccmfiltercount = 0;
                    var mccmfilterOfferid = [];
                    var slider_div = "\x3cdiv class\x3d'offer-slider'\x3e";
                    var card_slider_div =
                        "\x3cdiv class\x3d'offer-slider'\x3e";
                    for (var n = 0; n < unicaCategoryIds.length; n++)
                        for (var p = 0; p < filteredMccmObj.length; p++) {
                            categoryIds = sortedUnicaPopularOfferJson[p].Category.split(":");
                            livesiteIds = sortedUnicaPopularOfferJson[p].Livesite.split(":");
                            if (unicaCategoryIds[n] === filteredMccmObj[p]["MCCMCategory"]) {
                                mccmfiltercount = mccmfiltercount + 1;
                                mccmfilterCategoryListArray.push(unicaCategoryIds[n]);
                                mccmfilterOfferid.push(filteredMccmObj[p]["Livesite"]);
                                for (var b = 0; b < livesiteIds.length; b++) {
                                    var count = 0;
                                    for (var a = 0; a < categoryIds.length; a++) {
                                        count = count + 1;
                                        categoryIdArr.push(categoryIds[a]);
                                        livesiteIdArr.push(livesiteIds[b]);
                                        if (count > 1);
                                        else {
                                            var mccmcount = 0;
                                            if (filteredMccmObj[p]["offerDesp1"] != "" && filteredMccmObj[p]["offerDesp1"] != "undefined") {
                                                var offerDescription = "\x3cstrong\x3e" + filteredMccmObj[p]["offerDesp1"] + "\x3c/strong\x3e " + filteredMccmObj[p]["offerDesp2"];
                                                var dealsOfferdescription = filteredMccmObj[p]["offerDesp1"]
                                            } else {
                                                var offerDescription = filteredMccmObj["offerDesp2"] + " \x3cstrong\x3e" + filteredMccmObj[p]["offerDesp3"] +
                                                    "\x3c/strong\x3e " + filteredMccmObj[p]["offerDesp4"];
                                                var dealsOfferdescription = filteredMccmObj[p]["offerDesp1"]
                                            }
                                            slider_div += "\x3cdiv class\x3d'offer-card h-view'\x3e\x3cdiv class\x3d'card-inner'\x3e\x3cdiv class\x3d'media'\x3e\x3ca href\x3d'" + filteredMccmObj[p]["brandLink"] + "'\x3e\x3cimg src\x3d'" + filteredMccmObj[p]["smallOfferImage"] + "'\x3e\x3c/img\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'content'\x3e\x3ca href\x3d'" + filteredMccmObj[p]["brandLink"] + "' class\x3d'card-title'\x3e" + filteredMccmObj[p]["offerDesp1"] +
                                                "\x3c/a\x3e\x3cdiv class\x3d'card-bottom'\x3e\x3cdiv class\x3d'date-readtime'\x3e\x3cspan class\x3d'num-viewer'\x3e" + filteredMccmObj[p]["offerViews"] + "\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d'bookmark-share'\x3e\x3cdiv class\x3d'handpickedfav bookmark' offer-id\x3d'" + filteredMccmObj[p]["offerId"] + "'\x3e\x3c/div\x3e\x3cdiv class\x3d'share'\x3e\x3c/div\x3e\x3cdiv class\x3d'share-content'\x3e\x3cdiv class\x3d'inner-content'\x3e\x3cdiv class\x3d'share-header'\x3e\x3cp\x3eShare\x3c/p\x3e \x3cspan class\x3d'close-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg' alt\x3d'fb'/\x3e\x3c/span\x3e \x3c/div\x3e\x3cul class\x3d'share-link'\x3e\x3cli\x3e\x3ca href\x3d'https://api.whatsapp.com/send?url\x3d" +
                                                window.location.origin + filteredMccmObj[p]["brandLink"] + "\x26text\x3d" + filteredMccmObj[p]["offerDesp1"] + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp.svg' alt\x3d'whatsapp'\x3e\x3c/span\x3e \x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg' alt\x3d'whatsapp'\x3e \x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://www.facebook.com/sharer/sharer.php?u\x3d" +
                                                window.location.origin + filteredMccmObj[p]["brandLink"] + "\x26text\x3d" + filteredMccmObj[p]["offerDesp1"] + "' target\x3d'_blank' tabindex\x3d'0'\x3e \x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg' alt\x3d'fb'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg'alt\x3d'fb'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://twitter.com/intent/tweet?url\x3d" +
                                                window.location.origin + filteredMccmObj[p]["brandLink"] + "\x26text\x3d" + encodeURI(filteredMccmObj[p]["offerDesp1"]) + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg' alt\x3d'tw'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg' alt\x3d'tw'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://www.linkedin.com/shareArticle?mini\x3dtrue?url\x3d" +
                                                window.location.origin + filteredMccmObj[p]["brandLink"] + "\x26text\x3d" + filteredMccmObj[p]["offerDesp1"] + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg' alt\x3d'ln'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg' alt\x3d'ln'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'youtube-text' style\x3d'display:none;'\x3e\x3cinput type\x3d'text' name\x3d'link' value\x3d'" +
                                                window.location.origin + filteredMccmObj[p]["brandLink"] + "' /\x3e\x3cspan\x3eCopy\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e \x3c/div\x3e \x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
                                            if ($("div").hasClass("deals-and-more-offers")) card_slider_div += "\x3cdiv class\x3d'offer'\x3e\x3ca href\x3d'" + filteredMccmObj[p]["brandLink"] + "'\x3e\x3cimg src\x3d'" + filteredMccmObj[p]["smallOfferImage"] + "'\x3e\x3cp\x3e" + filteredMccmObj[p]["offerDesp1"] + "\x3c/p\x3e\x3c/a\x3e\x3c/div\x3e";
                                            else;
                                        }
                                    }
                                }
                            }
                        }
                    var DealsandOffersCookieVal =
                        $.cookie("mccmdealsOfferSetCount");
                    if (DealsandOffersCookieVal == 1) $("#deal" + DealsandOffersCookieVal).css("display", "block");
                    else if (DealsandOffersCookieVal == 2) $("#deal" + DealsandOffersCookieVal).css("display", "block");
                    else if (DealsandOffersCookieVal == 3) $("#deal" + DealsandOffersCookieVal).css("display", "block");
                    else;
                    $("#mccmTrendingLivesiteIdVal").val(mccmfilterOfferid);
                    mccmHandpickedOffersCookieVal();
                    if (mccmfiltercount == 0) handPickedOffers(slider_div, card_slider_div);
                    else if (mccmfiltercount == 1) defaultPickedOffers(mccmfilterOfferid,
                        slider_div, card_slider_div);
                    else if (mccmfiltercount == 2) defaultPickedOffers(mccmfilterOfferid, slider_div, card_slider_div);
                    else if (mccmfiltercount == 3) defaultPickedOffers(mccmfilterOfferid, slider_div, card_slider_div);
                    else defaultPickedOffers(mccmfilterOfferid, slider_div, card_slider_div)
                });
                else console.log("no mccm offers found")
            } else {
                var slider_div = "\x3cdiv class\x3d'offer-slider'\x3e";
                var card_slider_div = "\x3cdiv class\x3d'offer-slider'\x3e";
                handPickedOffers(slider_div, card_slider_div)
            }
        }
    }
    $("#mccmtrendingoffers .offer-slider").slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
                centerMode: true,
                centerPadding: "45px",
                infinite: true
            }
        }]
    });
    $("#mccmtrendingoffers .offer-slider .offer-card").equalHeights()
});
$(document).ready(function() {
    $("body").addClass("experiencefr-handpicked");
    var mccmmaxCookieValue = 3,
        mccminitCookie = 1,
        mccmexpirationDays = 1;
    var mccmcookieName = "mccmdealsOfferSetCount";
    if (jQuery.cookie(mccmcookieName) == null) jQuery.cookie(mccmcookieName, mccminitCookie, {
        expires: mccmexpirationDays
    });
    else {
        var mccmcookie_value = jQuery.cookie(mccmcookieName);
        mccmcookie_value = parseInt(mccmcookie_value);
        if (mccmcookie_value >= mccminitCookie && mccmcookie_value < mccmmaxCookieValue) {
            mccmcookie_value++;
            jQuery.cookie(mccmcookieName,
                mccmcookie_value, {
                    expires: mccmexpirationDays
                })
        }
        if (mccmcookie_value >= mccmmaxCookieValue) jQuery.cookie(mccmcookieName, mccminitCookie, {
            expires: mccmexpirationDays
        })
    }
    mccmHandpickedOffersCookieVal();

    function handPickedOffers(sliderdiv, cardsliderdiv) {
        var fileUrlOffer = $("#non-unica-handpicked-json").val();
        var result = {
            offers: []
        };
        $.getJSON(fileUrlOffer, function(data) {
            if (data && data.offers) result = data;
            var cookieVal = $("input[id\x3d'readonlycategories']").val();
            var valArrCount = 0;
            if (typeof cookieVal != "undefined")
                if (cookieVal !=
                    null && cookieVal != "") {
                    var valArr = cookieVal.split(",");
                    valArrCount = valArr.length
                }
            var offerId = [];
            var defaultOffer = [];
            for (var d = 0; d < result.offers.length; d++)
                if (result.offers[d].trendingOfferShow == "0") defaultOffer.push(result.offers[d].offerId);
            var loopCount = 0;
            if (valArrCount == 1) loopCount = 3;
            else if (valArrCount == 2) loopCount = 2;
            else if (valArrCount == 3) loopCount = 1;
            else;
            for (var k = 0; k < valArrCount; k++) {
                var count = 0;
                for (var i = 0; i < result.offers.length; i++) {
                    var categoryArr = result.offers[i].category.split(":");
                    for (var j =
                            0; j < categoryArr.length; j++) {
                        var currOfferId = result.offers[i].offerId;
                        if (categoryArr[j] == valArr[k] && !offerId.includes(currOfferId)) {
                            offerId.push(result.offers[i].offerId);
                            ++count
                        } else;
                    }
                    if (loopCount == count) break
                }
            }
            var diffCount = defaultOffer.length - offerId.length;
            for (var o = 0; o < defaultOffer.length; o++)
                if (!offerId.includes(defaultOffer[o])) offerId.push(defaultOffer[o]);
            var countNew = 0;
            for (var h = 0; h <= offerId.length; h++)
                for (var p = 0; p < result.offers.length; p++)
                    if (result.offers[p].offerId == offerId[h]) {
                        var offerShareLinkPage =
                            $("input#offerShareLinkPage").val();
                        var brand = result.offers[p].brand;
                        var offerView = result.offers[p].offerViews;
                        var view = "";
                        var offerPageUrl = result.offers[p].pagePath;
                        var smallOfferImage = result.offers[p].smallOfferImage;
                        var eventTrackCode = result.offers[p].eventTrackCode;
                        var OfferDespOne = result.offers[p].offerDesp1;
                        var OfferDespTwo = result.offers[p].offerDesp2;
                        var OfferDespThree = result.offers[p].offerDesp3;
                        var OfferDespFour = result.offers[p].offerDesp4;
                        var OfferId = result.offers[p].offerId;
                        var display =
                            "";
                        var pageurl = offerShareLinkPage + offerPageUrl;
                        if (countNew >= 3) display = "display:none;";
                        if (offerView != null && offerView != "")
                            if (offerView.length == 4) view = offerView.substr(0, 1) + "." + offerView.substr(2, 1) + "K Views";
                            else if (offerView.length == 5) view = offerView.substr(1, 2) + "K Views";
                        else if (offerView.length == 6) view = offerView.substr(1, 3) + "K Views";
                        else if (offerView.length == 7) view = offerView.substr(0, 1) + "." + offerView.substr(2, 1) + "M Views";
                        else view = offerView + " Views";
                        sliderdiv += "\x3cdiv class\x3d'deal-card' style\x3d'height:363px'\x3e\x3cdiv class\x3d'deal-inner'\x3e\x3cdiv class\x3d'image'\x3e\x3ca href\x3d'" +
                            offerPageUrl + "'\x3e\x3cimg src\x3d'" + smallOfferImage + "' loading\x3d'lazy'\x3e\x3c/img\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'offer' style\x3d'height:90px'\x3e\x3ca href\x3d'" + offerPageUrl + "'\x3e" + OfferDespOne + "\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'description'\x3e" + OfferDespTwo + OfferDespThree + OfferDespFour + "\x3c/div\x3e\x3cdiv class\x3d'buttons'\x3e\x3ca href\x3d'" + offerPageUrl + "' rel\x3d'" + eventTrackCode + "' class\x3d'ic-btn'\x3eKnow more\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
                        if ($("div").hasClass("deals-and-more-offers")) cardsliderdiv +=
                            "\x3cdiv class\x3d'offer'\x3e\x3ca href\x3d'" + offerPageUrl + "' rel\x3d'" + eventTrackCode + "'\x3e\x3cimg src\x3d'" + smallOfferImage + "' loading\x3d'lazy'\x3e\x3cp\x3e" + OfferDespOne + "\x3c/p\x3e\x3c/a\x3e\x3c/div\x3e";
                        else;
                        countNew++;
                        break
                    }
            sliderdiv = sliderdiv + "\x3c/div\x3e";
            cardsliderdiv = cardsliderdiv + "\x3c/div\x3e";
            if ($("#trendingoffers")) $("#trendingoffers").append(sliderdiv);
            var DealsandOffersCookieVal = $.cookie("mccmdealsOfferSetCount");
            if (DealsandOffersCookieVal == 1) $("#deal" + DealsandOffersCookieVal).css("display",
                "block");
            else if (DealsandOffersCookieVal == 2) $("#deal" + DealsandOffersCookieVal).css("display", "block");
            else if (DealsandOffersCookieVal == 3) $("#deal" + DealsandOffersCookieVal).css("display", "block");
            else;
            $("#trendingoffers .trending-deals-slider").slick({
                dots: true,
                infinite: true,
                autoplay: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true
                    }
                }, {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true,
                        centerMode: true,
                        centerPadding: "15px",
                        infinite: true
                    }
                }]
            })
        })
    }

    function mccmHandpickedOffersCookieVal() {
        var presentVal = $("#mccmTrendingLivesiteIdVal").val();
        if (typeof presentVal != "undefined") {
            if (presentVal != null && presentVal != "") {
                var newcookieVal = presentVal.replace(",", "and");
                var cookie_valueArr = [];
                if (typeof FedID != "undefined")
                    if (FedID != null && FedID != "") {
                        var mccmCookieName = "mccmCategoryOffers";
                        var url_string = window.location.href;
                        var url = new URL(url_string);
                        var id = url.searchParams.get("id");
                        var initCookie =
                            newcookieVal;
                        var expirationDays = 1;
                        if (initCookie != null)
                            if (jQuery.cookie(mccmCookieName) == null) jQuery.cookie(mccmCookieName, initCookie, {
                                path: "/"
                            }, {
                                expires: expirationDays
                            });
                            else {
                                var cookie_value = jQuery.cookie(mccmCookieName) + "and";
                                cookie_value += initCookie;
                                cookie_valueArr.push(cookie_value);
                                var uniqueLivesiteId = cookie_valueArr.filter(function(itm, i, cookie_valueArr) {
                                    return i == cookie_valueArr.indexOf(itm)
                                });
                                jQuery.cookie(mccmCookieName, uniqueLivesiteId, {
                                    path: "/"
                                }, {
                                    expires: expirationDays
                                })
                            }
                    }
            }
        } else {
            var cookie_valueArr = [];
            if (typeof FedID != "undefined")
                if (FedID != null && FedID != "") {
                    var mccmCookieName = "mccmCategoryOffers";
                    var url_string = window.location.href;
                    var url = new URL(url_string);
                    var id = url.searchParams.get("id");
                    var initCookie = id;
                    var expirationDays = 1;
                    if (initCookie != null)
                        if (jQuery.cookie(mccmCookieName) == null) jQuery.cookie(mccmCookieName, initCookie, {
                            path: "/"
                        }, {
                            expires: expirationDays
                        });
                        else {
                            var cookie_value = jQuery.cookie(mccmCookieName) + "and";
                            cookie_value += initCookie;
                            cookie_valueArr.push(cookie_value);
                            var uniqueLivesiteId =
                                cookie_valueArr.filter(function(itm, i, cookie_valueArr) {
                                    return i == cookie_valueArr.indexOf(itm)
                                });
                            jQuery.cookie(mccmCookieName, uniqueLivesiteId, {
                                path: "/"
                            }, {
                                expires: expirationDays
                            })
                        }
                }
        }
    }
    mccmHandpickedOffers();

    function compareStrings(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return a < b ? -1 : a > b ? 1 : 0
    }

    function compareNumbers(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return a > b ? -1 : a > b ? 1 : 0
    }

    function defaultPickedOffers(mccmFilterOfferid, sliderdiv, cardsliderdiv) {
        var mccmPopularOfferJson = $("#non-unica-handpicked-json").val();
        var mccmCategoryIdVal = [];
        for (var i = 0; i < mccmFilterOfferid.length; i++) mccmCategoryIdVal.push(mccmFilterOfferid[i]);
        var mccmlength = mccmCategoryIdVal.length;
        var mccmOfferIds;
        var mccmOfferIdsArr = [];
        $.getJSON(mccmPopularOfferJson, function(result) {
            var sortedDefaultUnicaPopularOfferJson = result.offers;
            for (var k = 0; k < sortedDefaultUnicaPopularOfferJson.length; k++) {
                mccmOfferIds = sortedDefaultUnicaPopularOfferJson[k].offerViews;
                mccmOfferIdsArr.push(mccmOfferIds)
            }
            for (var i = 0; i < sortedDefaultUnicaPopularOfferJson.length; i++)
                for (var j =
                        0; j < mccmCategoryIdVal.length; j++) {
                    sortedfiltereddata = $.grep(sortedDefaultUnicaPopularOfferJson, function(n, i) {
                        return n.offerId != mccmCategoryIdVal[j]
                    });
                    sortedDefaultUnicaPopularOfferJson = sortedfiltereddata
                }
            var count = 0;
            var booleanflag = true;
            for (var i = 0; i < sortedDefaultUnicaPopularOfferJson.length; i++)
                if (count < 3 - mccmCategoryIdVal.length) {
                    for (var j = 0; j < mccmCategoryIdVal.length; j++)
                        if (sortedDefaultUnicaPopularOfferJson[i].liveSiteId != mccmCategoryIdVal[j]) {
                            count = count + 1;
                            booleanflag = false
                        } else booleanflag =
                            true;
                    if (sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"] != "" && sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"] != "undefined") {
                        var offerDescription = "\x3cstrong\x3e" + sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"] + "\x3c/strong\x3e " + sortedDefaultUnicaPopularOfferJson[i]["offerDesp2"];
                        var dealsOfferdescription = sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"]
                    } else {
                        var offerDescription = sortedDefaultUnicaPopularOfferJson[i]["offerDesp2"] + " \x3cstrong\x3e" + sortedDefaultUnicaPopularOfferJson[i]["offerDesp3"] +
                            "\x3c/strong\x3e " + sortedDefaultUnicaPopularOfferJson[i]["offerDesp4"];
                        var dealsOfferdescription = sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"]
                    }
                    sliderdiv += "\x3cdiv class\x3d'deal-card' style\x3d'height:363px'\x3e\x3cdiv class\x3d'deal-inner'\x3e\x3cdiv class\x3d'image'\x3e\x3ca href\x3d'" + sortedDefaultUnicaPopularOfferJson[i]["pagePath"] + "'\x3e\x3cimg src\x3d'" + sortedDefaultUnicaPopularOfferJson[i]["smallOfferImage"] + "' loading\x3d'lazy'\x3e\x3c/img\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'offer' style\x3d'height:90px'\x3e\x3ca href\x3d'" +
                        sortedDefaultUnicaPopularOfferJson[i]["pagePath"] + "'\x3e" + sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"] + "\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'description'\x3e" + sortedDefaultUnicaPopularOfferJson[i]["offerDesp2"] + sortedDefaultUnicaPopularOfferJson[i]["offerDesp3"] + sortedDefaultUnicaPopularOfferJson[i]["offerDesp4"] + "\x3c/div\x3e\x3cdiv class\x3d'buttons'\x3e\x3ca href\x3d'" + sortedDefaultUnicaPopularOfferJson[i]["pagePath"] + "' class\x3d'ic-btn'\x3eKnow more\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
                    if ($("div").hasClass("deals-and-more-offers")) cardsliderdiv += "\x3cdiv class\x3d'offer'\x3e\x3ca href\x3d'" + sortedDefaultUnicaPopularOfferJson[i]["pagePath"] + "'\x3e\x3cimg src\x3d'" + sortedDefaultUnicaPopularOfferJson[i]["smallOfferImage"] + "' loading\x3d'lazy'\x3e\x3cp\x3e" + sortedDefaultUnicaPopularOfferJson[i]["offerDesp1"] + "\x3c/p\x3e\x3c/a\x3e\x3c/div\x3e";
                    else;
                }
            sliderdiv = sliderdiv + "\x3c/div\x3e";
            cardsliderdiv = cardsliderdiv + "\x3c/div\x3e";
            $("#trendingoffers").append(sliderdiv);
            var DealsandOffersCookieVal =
                $.cookie("mccmdealsOfferSetCount");
            if (DealsandOffersCookieVal == 1) $("#deal" + DealsandOffersCookieVal).css("display", "block");
            else if (DealsandOffersCookieVal == 2) $("#deal" + DealsandOffersCookieVal).css("display", "block");
            else if (DealsandOffersCookieVal == 3) $("#deal" + DealsandOffersCookieVal).css("display", "block");
            else;
            $("#trendingoffers .trending-deals-slider").slick({
                dots: true,
                infinite: true,
                autoplay: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [{
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                            dots: true
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                            dots: true,
                            centerMode: true,
                            centerPadding: "15px",
                            infinite: true
                        }
                    }
                ]
            })
        })
    }

    function mccmHandpickedOffers() {
        if (jQuery.cookie("mccmCategoryOffers") != null) {
            $(".deals-and-more-offers").empty();
            var mccmCookieVal = $.cookie("mccmCategoryOffers");
            var mccCokiesplitVal = mccmCookieVal.split("and");
            var mccCookieValArr = [];
            for (var i = 0; i < mccCokiesplitVal.length; i++) mccCookieValArr.push(mccCokiesplitVal[i]);
            var mccmCategoryValCount = $("#mccmTrendingCategoryValCount").val();
            if (mccmCategoryValCount > 0) {
                $(".offerContent").empty();
                var unicaPopularOfferJson = $("#unica-handpicked-json").val();
                var mccmCategoryVal = [];
                for (var i = 1; i <= mccmCategoryValCount; i++) mccmCategoryVal.push($("#mccmTrendingCategory" + i).val());
                $("#mccmTrendingCategoryVal").val(mccmCategoryVal);
                var mccmCategoryIds = $("#mccmTrendingCategoryVal").val();
                $(".offerContent").css("display", "block");
                $(".locate-near-by").css("display", "none");
                var mccmOfferCount =
                    $("#mccmTrendingCategoryValCount").val();
                var categoryIds;
                var livesiteIds;
                var mccmIds;
                var unicaCategoryIds = mccmCategoryIds.split(",");
                var categoryIdArr = [];
                var livesiteIdArr = [];
                var mccmIdArr = [];
                var mccmArray = [];
                var filteredMccmArray = [];
                var mccmfilterCategoryListArray = [];
                var filterdata = [];
                if (mccmOfferCount > 0) $.getJSON(unicaPopularOfferJson, function(result) {
                    filterdata = result.UnicaPopularOffers;
                    for (var l = 0; l < mccCookieValArr.length; l++) {
                        filtereddata = $.grep(filterdata, function(n, i) {
                            return n.Livesite != mccCookieValArr[l]
                        });
                        filterdata = filtereddata
                    }
                    var sortedUnicaPopularOfferJson = filtereddata.sort(function(a, b) {
                        return compareStrings(a.MCCMCategory, b.MCCMCategory)
                    });
                    for (var k = 0; k < sortedUnicaPopularOfferJson.length; k++) {
                        mccmIds = sortedUnicaPopularOfferJson[k].MCCMCategory;
                        mccmIdArr.push(mccmIds)
                    }
                    $.each(sortedUnicaPopularOfferJson, function(index, value) {
                        if ($.inArray(value.MCCMCategory, mccmArray) == -1) {
                            mccmArray.push(value.MCCMCategory);
                            filteredMccmArray.push(value)
                        }
                    });
                    filteredMccmArray = JSON.stringify(filteredMccmArray);
                    filteredMccmObj =
                        JSON.parse(filteredMccmArray);
                    var mccmfiltercount = 0;
                    var mccmfilterOfferid = [];
                    var slider_div = "\x3cdiv class\x3d'trending-deals-slider'\x3e";
                    var card_slider_div = "\x3cdiv class\x3d'offer-slider'\x3e";
                    for (var n = 0; n < unicaCategoryIds.length; n++)
                        for (var p = 0; p < filteredMccmObj.length; p++) {
                            categoryIds = sortedUnicaPopularOfferJson[p].Category.split(":");
                            livesiteIds = sortedUnicaPopularOfferJson[p].Livesite.split(":");
                            if (unicaCategoryIds[n] === filteredMccmObj[p]["MCCMCategory"]) {
                                mccmfiltercount = mccmfiltercount + 1;
                                mccmfilterCategoryListArray.push(unicaCategoryIds[n]);
                                mccmfilterOfferid.push(filteredMccmObj[p]["offerId"]);
                                for (var b = 0; b < livesiteIds.length; b++) {
                                    var count = 0;
                                    for (var a = 0; a < categoryIds.length; a++) {
                                        count = count + 1;
                                        categoryIdArr.push(categoryIds[a]);
                                        livesiteIdArr.push(livesiteIds[b]);
                                        if (count > 1);
                                        else {
                                            var mccmcount = 0;
                                            if (filteredMccmObj[p]["offerDesp1"] != "" && filteredMccmObj[p]["offerDesp1"] != "undefined") {
                                                var offerDescription = "\x3cstrong\x3e" + filteredMccmObj[p]["offerDesp1"] + "\x3c/strong\x3e " + filteredMccmObj[p]["offerDesp2"];
                                                var dealsOfferdescription = filteredMccmObj[p]["offerDesp1"]
                                            } else {
                                                var offerDescription = filteredMccmObj["offerDesp2"] + " \x3cstrong\x3e" + filteredMccmObj[p]["offerDesp3"] + "\x3c/strong\x3e " + filteredMccmObj[p]["offerDesp4"];
                                                var dealsOfferdescription = filteredMccmObj[p]["offerDesp1"]
                                            }
                                            slider_div += "\x3cdiv class\x3d'deal-card' style\x3d'height:363px'\x3e\x3cdiv class\x3d'deal-inner'\x3e\x3cdiv class\x3d'image'\x3e\x3ca href\x3d'" + filteredMccmObj[p]["pagePath"] + "' \x3e\x3cimg src\x3d'" + filteredMccmObj[p]["smallOfferImage"] +
                                                "' loading\x3d'lazy'\x3e\x3c/img\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'offer' style\x3d'height:90px'\x3e\x3ca href\x3d'" + filteredMccmObj[p]["pagePath"] + "' \x3e" + filteredMccmObj[p]["offerDesp1"] + "\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'description'\x3e" + filteredMccmObj[p]["offerDesp2"] + filteredMccmObj[p]["offerDesp3"] + filteredMccmObj[p]["offerDesp4"] + "\x3c/div\x3e\x3cdiv class\x3d'buttons'\x3e\x3ca href\x3d'" + filteredMccmObj[p]["pagePath"] + "' class\x3d'ic-btn'\x3eKnow more\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
                                            if ($("div").hasClass("deals-and-more-offers")) card_slider_div += "\x3cdiv class\x3d'offer'\x3e\x3ca href\x3d'" + filteredMccmObj[p]["pagePath"] + "'\x3e\x3cimg src\x3d'" + filteredMccmObj[p]["smallOfferImage"] + "' loading\x3d'lazy'\x3e\x3cp\x3e" + filteredMccmObj[p]["offerDesp1"] + "\x3c/p\x3e\x3c/a\x3e\x3c/div\x3e";
                                            else;
                                        }
                                    }
                                }
                            }
                        }
                    var DealsandOffersCookieVal = $.cookie("mccmdealsOfferSetCount");
                    if (DealsandOffersCookieVal == 1) $("#deal" + DealsandOffersCookieVal).css("display", "block");
                    else if (DealsandOffersCookieVal == 2) $("#deal" +
                        DealsandOffersCookieVal).css("display", "block");
                    else if (DealsandOffersCookieVal == 3) $("#deal" + DealsandOffersCookieVal).css("display", "block");
                    else;
                    $("#mccmTrendingLivesiteIdVal").val(mccmfilterOfferid);
                    mccmHandpickedOffersCookieVal();
                    if (mccmfiltercount == 0) defaultPickedOffers(mccmfilterOfferid, slider_div, card_slider_div);
                    else if (mccmfiltercount == 1) defaultPickedOffers(mccmfilterOfferid, slider_div, card_slider_div);
                    else if (mccmfiltercount == 2) defaultPickedOffers(mccmfilterOfferid, slider_div, card_slider_div);
                    else if (mccmfiltercount == 3) defaultPickedOffers(mccmfilterOfferid, slider_div, card_slider_div);
                    else defaultPickedOffers(mccmfilterOfferid, slider_div, card_slider_div)
                });
                else;
            } else {
                var slider_div = "\x3cdiv class\x3d'trending-deals-slider'\x3e";
                var card_slider_div = "\x3cdiv class\x3d'offer-slider'\x3e";
                handPickedOffers(slider_div, card_slider_div)
            }
        } else {
            $(".deals-and-more-offers").empty();
            var mccmCategoryValCount = $("#mccmTrendingCategoryValCount").val();
            if (mccmCategoryValCount > 0) {
                $(".offerContent").empty();
                var unicaPopularOfferJson = $("#unica-handpicked-json").val();
                var mccmCategoryVal = [];
                for (var i = 1; i <= mccmCategoryValCount; i++) mccmCategoryVal.push($("#mccmTrendingCategory" + i).val());
                $("#mccmTrendingCategoryVal").val(mccmCategoryVal);
                var mccmCategoryIds = $("#mccmTrendingCategoryVal").val();
                $(".offerContent").css("display", "block");
                $(".locate-near-by").css("display", "none");
                var mccmOfferCount = $("#mccmTrendingCategoryValCount").val();
                var categoryIds;
                var livesiteIds;
                var mccmIds;
                var unicaCategoryIds = mccmCategoryIds.split(",");
                var categoryIdArr = [];
                var livesiteIdArr = [];
                var mccmIdArr = [];
                var mccmArray = [];
                var filteredMccmArray = [];
                var mccmfilterCategoryListArray = [];
                var filterdata = [];
                if (mccmOfferCount > 0) $.getJSON(unicaPopularOfferJson, function(result) {
                    var sortedUnicaPopularOfferJson = result.UnicaPopularOffers.sort(function(a, b) {
                        return compareStrings(a.MCCMCategory, b.MCCMCategory)
                    });
                    for (var k = 0; k < sortedUnicaPopularOfferJson.length; k++) {
                        mccmIds = sortedUnicaPopularOfferJson[k].MCCMCategory;
                        mccmIdArr.push(mccmIds)
                    }
                    $.each(sortedUnicaPopularOfferJson,
                        function(index, value) {
                            if ($.inArray(value.MCCMCategory, mccmArray) == -1) {
                                mccmArray.push(value.MCCMCategory);
                                filteredMccmArray.push(value)
                            }
                        });
                    filteredMccmArray = JSON.stringify(filteredMccmArray);
                    filteredMccmObj = JSON.parse(filteredMccmArray);
                    var mccmfiltercount = 0;
                    var mccmfilterOfferid = [];
                    var slider_div = "\x3cdiv class\x3d'trending-deals-slider'\x3e";
                    var card_slider_div = "\x3cdiv class\x3d'offer-slider'\x3e";
                    for (var n = 0; n < unicaCategoryIds.length; n++)
                        for (var p = 0; p < filteredMccmObj.length; p++) {
                            categoryIds = sortedUnicaPopularOfferJson[p].Category.split(":");
                            livesiteIds = sortedUnicaPopularOfferJson[p].Livesite.split(":");
                            if (unicaCategoryIds[n] === filteredMccmObj[p]["MCCMCategory"]) {
                                mccmfiltercount = mccmfiltercount + 1;
                                mccmfilterCategoryListArray.push(unicaCategoryIds[n]);
                                mccmfilterOfferid.push(filteredMccmObj[p]["offerId"]);
                                for (var b = 0; b < livesiteIds.length; b++) {
                                    var count = 0;
                                    for (var a = 0; a < categoryIds.length; a++) {
                                        count = count + 1;
                                        categoryIdArr.push(categoryIds[a]);
                                        livesiteIdArr.push(livesiteIds[b]);
                                        if (count > 1);
                                        else {
                                            var mccmcount = 0;
                                            if (filteredMccmObj[p]["offerDesp1"] !=
                                                "" && filteredMccmObj[p]["offerDesp1"] != "undefined") {
                                                var offerDescription = "\x3cstrong\x3e" + filteredMccmObj[p]["offerDesp1"] + "\x3c/strong\x3e " + filteredMccmObj[p]["offerDesp2"];
                                                var dealsOfferdescription = filteredMccmObj[p]["offerDesp1"]
                                            } else {
                                                var offerDescription = filteredMccmObj["offerDesp2"] + " \x3cstrong\x3e" + filteredMccmObj[p]["offerDesp3"] + "\x3c/strong\x3e " + filteredMccmObj[p]["offerDesp4"];
                                                var dealsOfferdescription = filteredMccmObj[p]["offerDesp1"]
                                            }
                                            slider_div += "\x3cdiv class\x3d'deal-card' style\x3d'height:363px'\x3e\x3cdiv class\x3d'deal-inner'\x3e\x3cdiv class\x3d'image'\x3e\x3ca href\x3d'" +
                                                filteredMccmObj[p]["pagePath"] + "'\x3e\x3cimg src\x3d'" + filteredMccmObj[p]["smallOfferImage"] + "' loading\x3d'lazy'\x3e\x3c/img\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'offer' style\x3d'height:90px'\x3e\x3ca href\x3d'" + filteredMccmObj[p]["pagePath"] + "'\x3e" + filteredMccmObj[p]["offerDesp1"] + "\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'description'\x3e" + filteredMccmObj[p]["offerDesp2"] + filteredMccmObj[p]["offerDesp3"] + filteredMccmObj[p]["offerDesp4"] + "\x3c/div\x3e\x3cdiv class\x3d'buttons'\x3e\x3ca href\x3d'" +
                                                filteredMccmObj[p]["pagePath"] + "' class\x3d'ic-btn'\x3eKnow more\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
                                            if ($("div").hasClass("deals-and-more-offers")) card_slider_div += "\x3cdiv class\x3d'offer'\x3e\x3ca href\x3d'" + filteredMccmObj[p]["pagePath"] + "'\x3e\x3cimg src\x3d'" + filteredMccmObj[p]["smallOfferImage"] + "' loading\x3d'lazy'\x3e\x3cp\x3e" + filteredMccmObj[p]["offerDesp1"] + "\x3c/p\x3e\x3c/a\x3e\x3c/div\x3e";
                                            else;
                                        }
                                    }
                                }
                            }
                        }
                    var DealsandOffersCookieVal = $.cookie("mccmdealsOfferSetCount");
                    if (DealsandOffersCookieVal ==
                        1) $("#deal" + DealsandOffersCookieVal).css("display", "block");
                    else if (DealsandOffersCookieVal == 2) $("#deal" + DealsandOffersCookieVal).css("display", "block");
                    else if (DealsandOffersCookieVal == 3) $("#deal" + DealsandOffersCookieVal).css("display", "block");
                    else;
                    $("#mccmTrendingLivesiteIdVal").val(mccmfilterOfferid);
                    mccmHandpickedOffersCookieVal();
                    if (mccmfiltercount == 0) defaultPickedOffers(mccmfilterOfferid, slider_div, card_slider_div);
                    else if (mccmfiltercount == 1) defaultPickedOffers(mccmfilterOfferid, slider_div,
                        card_slider_div);
                    else if (mccmfiltercount == 2) defaultPickedOffers(mccmfilterOfferid, slider_div, card_slider_div);
                    else if (mccmfiltercount == 3) defaultPickedOffers(mccmfilterOfferid, slider_div, card_slider_div);
                    else defaultPickedOffers(mccmfilterOfferid, slider_div, card_slider_div)
                });
                else;
            } else {
                var slider_div = "\x3cdiv class\x3d'trending-deals-slider'\x3e";
                var card_slider_div = "\x3cdiv class\x3d'offer-slider'\x3e";
                handPickedOffers(slider_div, card_slider_div)
            }
        }
    }
    $("#trendingoffers .trending-deals-slider").slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
                centerMode: true,
                centerPadding: "15px",
                infinite: true
            }
        }]
    })
});
$(document).ready(function() {
    var categoryId, divId, cityname;
    var localLat, localLong, sorteds;
    var resultJSON = [];
    var date = new Date;
    var currentDate = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + date.getDate();

    function process(date) {
        var parts = date.split("-");
        return new Date(parts[0], parts[1] - 1, parts[2])
    }
    var domainName = window.location.origin;
    var nearbyOffers = domainName + "/content/icicibank.nearbyoffers.json";
    var citiesJson = {
        "mapDetails": []
    };
    if ($("#offerlisting-offerblock").length) {
        $.ajax({
            type: "GET",
            url: nearbyOffers,
            datatype: "json",
            async: !1,
            success: function(data) {
                if (data && JSON.parse(data)["mapDetails"]) citiesJson = JSON.parse(data);
                if (citiesJson && citiesJson.mapDetails) {
                    var uniqueCategory = [];
                    var len = citiesJson.mapDetails.length;
                    for (var i$5 = 0; i$5 < len; i$5++) {
                        var el = citiesJson.mapDetails[i$5];
                        if (el.Category && uniqueCategory.indexOf(el.Category.toLowerCase()) == -1) {
                            uniqueCategory.push(el.Category.toLowerCase());
                            $(".offer-dropdown .categorySelect").append("\x3coption\x3e" + el.Category + "\x3c/option\x3e")
                        }
                    }
                }
            }
        });
        initBlocks()
    }
    var defaultCategory = "All Category";
    var defaultCity = "Mumbai";
    getCityData(citiesJson, defaultCategory, defaultCity);
    categoryId = $(".offer-dropdown .categorySelect").children(":selected").text();
    $(".offer-dropdown .categorySelect").selectmenu({
        change: function(event, ui) {
            $("#offerlisting-offerblock").empty();
            categoryId = $(".offer-dropdown .categorySelect").children(":selected").text().trim();
            var citySelectedDropdown = $(".offer-dropdown .citySelect option:selected").val();
            $("#offerblock_location").empty();
            $("#offerblock_location").attr("style", "display:none;");
            $("[data-tabtitle]").each(function() {
                if ($(this).attr("data-tabtitle") && $(this).attr("data-tabtitle").replace(/ /g, "").toLowerCase().includes("nearby")) $(this).empty()
            });
            getCityData(citiesJson, categoryId, citySelectedDropdown)
        }
    });
    $(".offer-dropdown .citySelect").selectmenu().on("selectmenuchange", function(event, ui) {
        categoryId = $(".offer-dropdown .categorySelect").children(":selected").text();
        var citySelectedDropdown = $(".offer-dropdown .citySelect option:selected").val();
        $("[data-tabtitle]").each(function() {
            if ($(this).attr("data-tabtitle") && $(this).attr("data-tabtitle").replace(/ /g, "").toLowerCase().includes("nearby")) $(this).empty()
        });
        getCityData(citiesJson, categoryId, citySelectedDropdown)
    });

    function initBlocks() {
        var selected;
        var citySelected;
        var defaultCity = "Mumbai";
        var citynameval;
        $(".offer-dropdown .citySelect option:selected").val();
        if (typeof google === "object" && typeof google.maps === "object") var geocoder = new google.maps.Geocoder;
        var chkUrl = window.location.href;
        if (chkUrl.indexOf("lat\x3d") >= 0 && chkUrl.indexOf("long\x3d") >= 0) {
            var prefixLat = chkUrl.substring(0, chkUrl.indexOf("lat\x3d"));
            suffixLat = chkUrl.substring(chkUrl.indexOf("lat\x3d"));
            suffixLat = suffixLat.substring(suffixLat.indexOf("\x3d") + 1);
            suffixLat = parseFloat(suffixLat.substring(0, suffixLat.indexOf("\x26")));
            var prefixLong = chkUrl.substring(0, chkUrl.indexOf("long\x3d"));
            suffixLong = chkUrl.substring(chkUrl.indexOf("long\x3d"));
            suffixLong = parseFloat(suffixLong.substring(suffixLong.indexOf("\x3d") + 1));
            pos1 = {
                lat: suffixLat,
                lng: suffixLong
            };
            showPosition(pos1)
        } else;

        function showPosition(position) {
            if (typeof position.lat != "undefined" && typeof position.lng != "undefined") {
                var lat = position.lat;
                var lng = position.lng
            } else {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude
            }
            if (typeof google === "object" && typeof google.maps === "object") cityLatLng(lat, lng)
        }

        function cityLatLng(lat, lng) {
            var latlng = new google.maps.LatLng(lat, lng);
            geocoder.geocode({
                latLng: latlng
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK)
                    if (results[1]) {
                        for (var i =
                                0; i < results[0].address_components.length; i++)
                            for (var b = 0; b < results[0].address_components[i].types.length; b++)
                                if (results[0].address_components[i].types[b] == "locality") {
                                    city = results[0].address_components[i];
                                    break
                                }
                        cityname = city.short_name.replace(/\s+/g, "-").toLowerCase();
                        var getcityData = [];
                        if (citiesJson && citiesJson.mapDetails) getcityData = $.grep(citiesJson.mapDetails, function(element, index) {
                            return element.City == city.short_name
                        });
                        if ($(".offer-dropdown .citySelect option[id\x3d'" + cityname + "City']").length ==
                            0 && getcityData.length > 0) $(".offer-dropdown .citySelect").append('\x3coption id\x3d"' + cityname + 'City"\x3e' + city.short_name + "\x3c/option\x3e").selectmenu("refresh");
                        if (typeof cityname != "undefined")
                            if (cityname != null && cityname != "") {
                                $(".offer-dropdown .citySelect").val(city.short_name);
                                $(".offer-dropdown .citySelect").selectmenu("refresh").trigger("selectmenuchange");
                                citySelected = $(".offer-dropdown .citySelect option:selected").val();
                                citynameval = city.short_name
                            }
                    } else;
                else;
            })
        }

        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    $(".offer-dropdown .citySelect option:selected").val("Mumbai");
                    citySelected = $(".offer-dropdown .citySelect option:selected").val();
                    break;
                case error.POSITION_UNAVAILABLE:
                    break;
                case error.TIMEOUT:
                    break;
                case error.UNKNOWN_ERROR:
                    break
            }
        }
    }

    function getCityData(citiesnameJson, categorydatavalue, citydatavalue) {
        $("#offerlisting-offerblock").empty();
        $("#nearbytabcount").empty();
        var ShopNamearr = new Array(citiesnameJson.length);
        var Addressarr = new Array(citiesnameJson.length);
        var Localityarr = new Array(citiesnameJson.length);
        var Cityarr = new Array(citiesnameJson.length);
        var OfferDescriptionarr1 =
            new Array(citiesnameJson.length);
        var OfferDescriptionarr2 = new Array(citiesnameJson.length);
        var StartDatearr = new Array(citiesnameJson.length);
        var EndDatearr = new Array(citiesnameJson.length);
        var Latitudearr = new Array(citiesnameJson.length);
        var Longitudearr = new Array(citiesnameJson.length);
        var TandCLinkarr = new Array(citiesnameJson.length);
        var ThumbnailUrlarr = new Array(citiesnameJson.length);
        var Categoryarr = new Array(citiesnameJson.length);
        var GetDirectionUrlarr = new Array(citiesnameJson.length);
        var CategoryFilterarr =
            new Array(citiesnameJson.length);
        var CityFilterarr = new Array(citiesnameJson.length);
        var categoryvaldata = citiesnameJson;
        var cityvaldata = citiesnameJson;
        var getcityData;
        if (categorydatavalue.trim() != "All Category") getcityData = $.grep(cityvaldata.mapDetails, function(element, index) {
            var dataarray;
            if (element.Category == categorydatavalue) dataarray = element.City == citydatavalue;
            return dataarray
        });
        else getcityData = $.grep(cityvaldata.mapDetails, function(element, index) {
            var dataarray;
            dataarray = element.City == citydatavalue;
            return dataarray
        });
        var slider_div = "\x3cdiv class\x3d'offer-slider'\x3e";
        var dataCount = 0;
        for (var i = 0; i < getcityData.length; i++) {
            ShopNamearr[i] = getcityData[i].ShopName;
            Addressarr[i] = getcityData[i].Address;
            Localityarr[i] = getcityData[i].Locality;
            Cityarr[i] = getcityData[i].City;
            OfferDescriptionarr1[i] = getcityData[i].OfferDescription1;
            OfferDescriptionarr2[i] = getcityData[i].OfferDescription2;
            StartDatearr[i] = getcityData[i].StartDate;
            EndDatearr[i] = getcityData[i].EndDate;
            Latitudearr[i] = getcityData[i].Latitude;
            Longitudearr[i] = getcityData[i].Longitude;
            TandCLinkarr[i] = getcityData[i].TandCLink;
            ThumbnailUrlarr[i] = getcityData[i].ThumbnaiUrl;
            Categoryarr[i] = getcityData[i].Category;
            GetDirectionUrlarr[i] = getcityData[i].GetDirectionUrl;
            CityFilterarr[i] = getcityData[i].City;
            if (typeof ShopNamearr[i] != "undefined")
                if (ShopNamearr[i] != "") ShopNamearr[i] = ShopNamearr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof Addressarr[i] != "undefined")
                if (Addressarr[i] != "") Addressarr[i] = Addressarr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof Localityarr[i] != "undefined")
                if (Localityarr[i] != "") Localityarr[i] = Localityarr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof Cityarr[i] != "undefined")
                if (Cityarr[i] != "") Cityarr[i] = Cityarr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof OfferDescriptionarr1[i] != "undefined")
                if (OfferDescriptionarr1[i] != "") OfferDescriptionarr1[i] = OfferDescriptionarr1[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof OfferDescriptionarr2[i] != "undefined")
                if (OfferDescriptionarr2[i] != "") OfferDescriptionarr2[i] = OfferDescriptionarr2[i].replace(/\s+/g,
                    "-").toLowerCase();
            if (typeof StartDatearr[i] != "undefined")
                if (StartDatearr[i] != "") StartDatearr[i] = StartDatearr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof EndDatearr[i] != "undefined")
                if (EndDatearr[i] != "") EndDatearr[i] = EndDatearr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof Latitudearr[i] != "undefined")
                if (Latitudearr[i] != "") Latitudearr[i] = Latitudearr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof Longitudearr[i] != "undefined")
                if (Longitudearr[i] != "") Longitudearr[i] = Longitudearr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof TandCLinkarr[i] != "undefined")
                if (TandCLinkarr[i] != "") TandCLinkarr[i] = TandCLinkarr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof ThumbnailUrlarr[i] != "undefined")
                if (ThumbnailUrlarr[i] != "") ThumbnailUrlarr[i] = ThumbnailUrlarr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof Categoryarr[i] != "undefined")
                if (Categoryarr[i] != "") Categoryarr[i] = Categoryarr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof GetDirectionUrlarr[i] != "undefined")
                if (GetDirectionUrlarr[i] != "") GetDirectionUrlarr[i] = GetDirectionUrlarr[i].replace(/\s+/g,
                    "-").toLowerCase();
            var UriTitle = encodeURI(getcityData[i].OfferDescription1 + " " + getcityData[i].OfferDescription2);
            if (process(getcityData[i].EndDate) >= process(currentDate) && process(getcityData[i].StartDate) <= process(currentDate))
                if (i < 12) {
                    dataCount++;
                    slider_div += "\x3cdiv class\x3d'offer-card h-view " + Cityarr[i] + "' style\x3d'height: 140px;'\x3e\x3cdiv class\x3d'card-inner'\x3e\x3cdiv class\x3d'media'\x3e\x3ca target\x3d'_blank' href\x3d'" + getcityData[i].GetDirectionUrl + "'\x3e\x3cimg style\x3d'height: auto; width: 75px;'src\x3d'" +
                        getcityData[i].ThumbnaiUrl + "'\x3e\x3c/img\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'content'\x3e\x3ca target\x3d'_blank' href\x3d'" + getcityData[i].GetDirectionUrl + "' class\x3d'card-title'\x3e" + getcityData[i].OfferDescription1 + " " + getcityData[i].OfferDescription2 + "\x3c/a\x3e\x3cdiv class\x3d'card-bottom'\x3e\x3cdiv class\x3d'date-readtime'\x3e\x3cspan class\x3d'num-viewer'\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d'bookmark-share'\x3e\x3cdiv class\x3d'share'\x3e\x3c/div\x3e\x3cdiv class\x3d'share-content'\x3e\x3cdiv class\x3d'inner-content'\x3e\x3cdiv class\x3d'share-header'\x3e\x3cp\x3eShare\x3c/p\x3e \x3cspan class\x3d'close-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg' alt\x3d'fb'/\x3e\x3c/span\x3e \x3c/div\x3e\x3cul class\x3d'share-link'\x3e\x3cli\x3e\x3ca href\x3d'https://api.whatsapp.com/send?url\x3d" +
                        window.location.host + getcityData[i].GetDirectionUrl + "\x26text\x3d" + getcityData[i].OfferDescription1 + " " + getcityData[i].OfferDescription2 + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp.svg' alt\x3d'whatsapp'\x3e\x3c/span\x3e \x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg' alt\x3d'whatsapp'\x3e \x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://www.facebook.com/sharer/sharer.php?u\x3d" +
                        window.location.host + getcityData[i].GetDirectionUrl + "\x26text\x3d" + getcityData[i].OfferDescription1 + " " + getcityData[i].OfferDescription2 + "' target\x3d'_blank' tabindex\x3d'0'\x3e \x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg' alt\x3d'fb'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg'alt\x3d'fb'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://twitter.com/intent/tweet?url\x3d" +
                        window.location.host + getcityData[i].GetDirectionUrl + "\x26text\x3d" + UriTitle + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg' alt\x3d'tw'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg' alt\x3d'tw'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://www.linkedin.com/shareArticle?mini\x3dtrue?url\x3d" +
                        window.location.host + getcityData[i].GetDirectionUrl + "\x26text\x3d" + getcityData[i].OfferDescription1 + " " + getcityData[i].OfferDescription2 + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg' alt\x3d'ln'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg' alt\x3d'ln'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e \x3c/div\x3e \x3c/div\x3e \x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e"
                }
        }
        $("[data-tabtitle]").each(function() {
            if ($(this).attr("data-tabtitle") &&
                $(this).attr("data-tabtitle").replace(/ /g, "").toLowerCase().includes("nearby")) {
                $(this).append(dataCount);
                $(this).addClass("num")
            }
        });
        dataCount = 0;
        slider_div = slider_div + "\x3c/div\x3e";
        $("#offerlisting-offerblock").append(slider_div);
        if ($("#nearby-offer .offer-slider").length > 0) $("#nearby-offer  .offer-slider").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            infinite: false,
            autoplay: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "45px"
                }
            }]
        })
    }
    $("[data-tabtitle]").each(function() {
        if ($(this).attr("data-tabtitle") && $(this).attr("data-tabtitle").replace(/ /g, "").toLowerCase().includes("shop")) $(this).parent().css("padding-right", "10px")
    })
});
$(window).on("load resize orientationchange", function() {
    setTimeout(function() {
        $("#compareandbuy .trending-deals-slider .deal-card").equalHeights();
        $("#cashback .trending-deals-slider .deal-card").equalHeights();
        $("#trendingoffers .trending-deals-slider .deal-card").equalHeights();
        $("#offerblock .trending-deals-slider .deal-card").equalHeights()
    }, 500)
});
$(document).ready(function() {
    $("body").addClass("experiencefr-nearby");
    var cityname;
    var date = new Date;
    var currentDate = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + date.getDate();

    function process(date) {
        var parts = date.split("-");
        return new Date(parts[0], parts[1] - 1, parts[2])
    }
    $(".home-page-deals .nav-tabs li a").on("click", function() {
        if ($(this).parent().attr("data-nudge")) {
            $("#nudgeForTrendingDeals p").empty().append($("#nudgeValueContent").val());
            $("#nudgeForTrendingDeals").show()
        } else $("#nudgeForTrendingDeals").hide();
        $("#compareandbuy .trending-deals-slider").slick("refresh");
        $("#cashback .trending-deals-slider").slick("refresh");
        $("#trendingoffers .trending-deals-slider").slick("refresh");
        $("#offerblock .trending-deals-slider").slick("refresh");
        setTimeout(function() {
                $("#compareandbuy .trending-deals-slider .deal-card").equalHeights();
                $("#cashback .trending-deals-slider .deal-card").equalHeights();
                $("#trendingoffers .trending-deals-slider .deal-card").equalHeights();
                $("#offerblock .trending-deals-slider .deal-card").equalHeights()
            },
            500)
    });
    var domainName = window.location.origin;
    var nearbyOffers = domainName + "/content/icicibank.nearbyoffers.offset.limit.city.lat.lng.store.sort.searchTerm.filters.json";
    var citiesJson;
    var cityvaldata;
    $(".place-filter .citySelect").selectmenu();
    if ($("#offerblock").length) $.ajax({
        type: "GET",
        url: nearbyOffers,
        datatype: "json",
        success: function(data) {
            citiesJson = data;
            if (citiesJson && citiesJson.length > 0) {
                citiesJson.sort(function(a, b) {
                    return a.City - b.City
                });
                cityvaldata = citiesJson
            }
            initBlocks();
            getCityData(citiesJson,
                defaultCity)
        }
    });
    var citySelectedDropdown;
    var defaultCity = $(".place-filter .citySelect option").length ? $(".place-filter .citySelect option")[0].text : "Mumbai";
    $(".place-filter span").on("DOMSubtreeModified", function() {
        var changedcityval = $(this).find(".ui-selectmenu-text").text();
        if (typeof changedcityval != "undefined")
            if (changedcityval != "") {
                citySelectedDropdown = changedcityval;
                getCityData(citiesJson, citySelectedDropdown);
                blockLength = $(".myOffers." + citySelectedDropdown).length;
                if (blockLength > 0) $(".myOffers." +
                    citySelectedDropdown).attr("style", "display:block;");
                else {
                    citySelectedDropdown = defaultCity.replace(/\s+/g, "-").toLowerCase();
                    $(".myOffers." + citySelectedDropdown).attr("style", "display:block;")
                }
            }
    });

    function initBlocks() {
        var defaultCity = $(".place-filter .citySelect option").length ? $(".place-filter .citySelect option")[0].text : "Mumbai";
        var citynameval;
        $("#nearbyoffers div span").find(".ui-selectmenu-text").text();

        function showPosition(position) {
            if (typeof position.lat != "undefined" && typeof position.lng !=
                "undefined") {
                var lat = position.lat;
                var lng = position.lng
            } else {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude
            }
            if (typeof google === "object" && typeof google.maps === "object") cityLatLng(lat, lng)
        }

        function cityLatLng(lat, lng) {
            var latlng = new google.maps.LatLng(lat, lng);
            geocoder.geocode({
                latLng: latlng
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK)
                    if (results[1]) {
                        for (var i = 0; i < results[0].address_components.length; i++)
                            for (var b = 0; b < results[0].address_components[i].types.length; b++)
                                if (results[0].address_components[i].types[b] ==
                                    "locality") {
                                    city = results[0].address_components[i];
                                    break
                                }
                        cityname = city.short_name.replace(/\s+/g, "-").toLowerCase();
                        var getcityData = [];
                        if (cityvaldata && cityvaldata.length > 0) getcityData = $.grep(cityvaldata, function(element, index) {
                            return element.City == city.short_name
                        });
                        if ($(".place-filter .citySelect option[value\x3d'" + city.short_name + "']").length == 0 && getcityData.length > 0) $(".place-filter .citySelect").append('\x3coption value\x3d"' + city.short_name + '"\x3e' + city.short_name + "\x3c/option\x3e").selectmenu("refresh");
                        if (typeof cityname != "undefined")
                            if (cityname != null && cityname != "") {
                                $(".place-filter").find(".ui-selectmenu-text").text(city.short_name);
                                $(".place-filter .citySelect option[value\x3d" + city.short_name + "]").attr("selected", "selected").change();
                                citySelected = $(".place-filter").find(".ui-selectmenu-text").text();
                                citynameval = city.short_name
                            }
                    } else;
                else;
            })
        }

        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    $("#nearbyoffers div span").find(".ui-selectmenu-text").text(defaultCity);
                    citySelected =
                        $("#nearbyoffers div span").find(".ui-selectmenu-text").text();
                    break;
                case error.POSITION_UNAVAILABLE:
                    break;
                case error.TIMEOUT:
                    break;
                case error.UNKNOWN_ERROR:
                    break
            }
        }
    }

    function getCityData(citiesnameJson, citydatavalue) {
        $("#offerblock").empty();
        var ShopNamearr = [];
        var Addressarr = [];
        var Localityarr = [];
        var Cityarr = [];
        var OfferDescriptionarr1 = [];
        var OfferDescriptionarr2 = [];
        var StartDatearr = [];
        var EndDatearr = [];
        var Latitudearr = [];
        var Longitudearr = [];
        var TandCLinkarr = [];
        var ThumbnailUrlarr = [];
        var Categoryarr = [];
        var GetDirectionUrlarr = [];
        var CityFilterarr = [];
        var cityvaldata = citiesnameJson;
        var getcityData = $.grep(cityvaldata, function(element, index) {
            return element.City == citydatavalue
        });
        var slider_div = "\x3cdiv class\x3d'trending-deals-slider extra-offer-text'\x3e";
        var nearbyItemCount = 0;
        for (var i = 0; i < getcityData.length; i++)
            if (nearbyItemCount > 10) break;
            else if (process(getcityData[i].EndDate) >= process(currentDate) && process(getcityData[i].StartDate) <= process(currentDate)) {
            nearbyItemCount += 1;
            ShopNamearr[i] = getcityData[i].ShopName;
            Addressarr[i] = getcityData[i].Address;
            Localityarr[i] = getcityData[i].Locality;
            Cityarr[i] = getcityData[i].City;
            OfferDescriptionarr1[i] = getcityData[i].OfferDescription1;
            OfferDescriptionarr2[i] = getcityData[i].OfferDescription2;
            StartDatearr[i] = getcityData[i].StartDate;
            EndDatearr[i] = getcityData[i].EndDate;
            Latitudearr[i] = getcityData[i].Latitude;
            Longitudearr[i] = getcityData[i].Longitude;
            TandCLinkarr[i] = getcityData[i].TandCLink;
            ThumbnailUrlarr[i] = getcityData[i].ThumbnaiUrl;
            Categoryarr[i] = getcityData[i].Category;
            GetDirectionUrlarr[i] = getcityData[i].GetDirectionUrl;
            CityFilterarr[i] = getcityData[i].City;
            if (typeof ShopNamearr[i] != "undefined")
                if (ShopNamearr[i] != "") ShopNamearr[i] = ShopNamearr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof Addressarr[i] != "undefined")
                if (Addressarr[i] != "") Addressarr[i] = Addressarr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof Localityarr[i] != "undefined")
                if (Localityarr[i] != "") Localityarr[i] = Localityarr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof Cityarr[i] != "undefined")
                if (Cityarr[i] !=
                    "") Cityarr[i] = Cityarr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof OfferDescriptionarr1[i] != "undefined")
                if (OfferDescriptionarr1[i] != "") OfferDescriptionarr1[i] = OfferDescriptionarr1[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof OfferDescriptionarr2[i] != "undefined")
                if (OfferDescriptionarr2[i] != "") OfferDescriptionarr2[i] = OfferDescriptionarr2[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof StartDatearr[i] != "undefined")
                if (StartDatearr[i] != "") StartDatearr[i] = StartDatearr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof EndDatearr[i] != "undefined")
                if (EndDatearr[i] != "") EndDatearr[i] = EndDatearr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof Latitudearr[i] != "undefined")
                if (Latitudearr[i] != "") Latitudearr[i] = Latitudearr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof Longitudearr[i] != "undefined")
                if (Longitudearr[i] != "") Longitudearr[i] = Longitudearr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof TandCLinkarr[i] != "undefined")
                if (TandCLinkarr[i] != "") TandCLinkarr[i] = TandCLinkarr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof ThumbnailUrlarr[i] !=
                "undefined")
                if (ThumbnailUrlarr[i] != "") ThumbnailUrlarr[i] = ThumbnailUrlarr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof Categoryarr[i] != "undefined")
                if (Categoryarr[i] != "") Categoryarr[i] = Categoryarr[i].replace(/\s+/g, "-").toLowerCase();
            if (typeof GetDirectionUrlarr[i] != "undefined")
                if (GetDirectionUrlarr[i] != "") GetDirectionUrlarr[i] = GetDirectionUrlarr[i].replace(/\s+/g, "-").toLowerCase();
            slider_div += "\x3cdiv class\x3d'deal-card myOffers " + Cityarr[i] + "'\x3e\x3cdiv class\x3d'deal-inner'\x3e\x3cdiv class\x3d'image'\x3e\x3ca href\x3d'" +
                getcityData[i].GetDirectionUrl + "'\x3e\x3cimg src\x3d'" + getcityData[i].ThumbnaiUrl + "' loading\x3d'lazy'\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'offer'\x3e\x3ca href\x3d'" + getcityData[i].GetDirectionUrl + "'\x3e" + getcityData[i].OfferDescription1 + "\x3c/a\x3e\x3cp class\x3d'offer-red'\x3e" + getcityData[i].OfferDescription2 + "\x3c/p\x3e\x3c/div\x3e\x3cdiv class\x3d'description'\x3e" + getcityData[i].Address + "\x3c/div\x3e\x3cdiv class\x3d'buttons'\x3e\x3ca href\x3d'" + getcityData[i].GetDirectionUrl + "' class\x3d'ic-btn'\x3eGet Directions\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e"
        }
        slider_div =
            slider_div + "\x3c/div\x3e";
        $("#offerblock").append(slider_div);
        $("#offerblock .trending-deals-slider").slick({
            dots: !0,
            infinite: !0,
            autoplay: !0,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: !1,
                    dots: !0
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: !1,
                    dots: !0,
                    centerMode: !0,
                    centerPadding: "15px",
                    infinite: !0
                }
            }]
        })
    }
});
$(document).ready(function() {
    var qaSelectedProdArray = [];
    $(".quick-action-select select[multiple]").multiselect({
        columns: 1,
        search: false,
        texts: {
            placeholder: "Select product type"
        },
        showCheckbox: true,
        onOptionClick: function(element, option) {
            if (option.checked) qaSelectedProdArray.push(option.value);
            else {
                var index$6 = qaSelectedProdArray.indexOf(option.value);
                if (index$6 > -1) qaSelectedProdArray.splice(index$6, 1)
            }
        }
    });
    $(".callback-form .input-group").click(function() {
        $(".input-group").removeClass("active");
        $(this).addClass("active")
    });
    $(document).on("click", function(e) {
        if (!$(".callback-form .input-group").is(e.target) && $(".callback-form .input-group").has(e.target).length === 0) $(".input-group").removeClass("active")
    });
    $("#lead-form-1").on("submit", function(e) {
        e.preventDefault();
        var productId = [];
        productId = qaSelectedProdArray;
        var formajax = $("#lead-form-1").attr("ajax-page");
        var fname = document.forms["lead-form-1"]["fname"].value;
        var lname = document.forms["lead-form-1"]["lname"].value;
        var mobNum = document.forms["lead-form-1"]["mob-num"].value;
        var email = document.forms["lead-form-1"]["email"].value;
        var productType = document.forms["lead-form-1"]["product-type"].value;
        var pincode = document.forms["lead-form-1"]["pincode"].value;
        var isValid = true;
        $("#lead-form-1 .error").removeClass("error");
        $("#lead-form-1 .error-txt").hide();
        var fnameInvalid = !/^[a-zA-Z ]*$/g.test(fname);
        var lnameInvalid = !/^[a-zA-Z ]*$/g.test(lname);
        if (fname == null || fname == "") {
            var $fnameEl = $("#lead-form-1 #qa-fname");
            $fnameEl.addClass("error");
            $fnameEl.closest(".input-group").addClass("error");
            $("#lead-form-1 #fname-err").show();
            isValid = false
        }
        if (fnameInvalid) {
            var $fnameEl = $("#lead-form-1 #qa-fname");
            $fnameEl.addClass("error");
            $fnameEl.closest(".input-group").addClass("error");
            $("#lead-form-1 #fname-num-err").show();
            isValid = false
        }
        if (lname == null || lname == "") {
            var $lnameEl = $("#lead-form-1 #q-lname");
            $lnameEl.addClass("error");
            $lnameEl.closest(".input-group").addClass("error");
            $("#lead-form-1 #lname-err").show();
            isValid = false
        }
        if (lnameInvalid) {
            var $lnameEl = $("#lead-form-1 #qa-lname");
            $lnameEl.addClass("error");
            $lnameEl.closest(".input-group").addClass("error");
            $("#lead-form-1 #lname-num-err").show();
            isValid = false
        }
        if (mobNum == null || mobNum == "" || mobNum.length < 10 || !/^[0-9]*$/.test(mobNum)) {
            var $mobNumEl = $("#lead-form-1 #qa-mob-num");
            $mobNumEl.addClass("error");
            $mobNumEl.closest(".input-group").addClass("error");
            $("#lead-form-1 #mob-err").show();
            isValid = false
        }
        if (email == null || email == "" || !/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
            var $emailEl = $("#lead-form-1 #qa-email");
            $emailEl.addClass("error");
            $emailEl.closest(".input-group").addClass("error");
            $("#lead-form-1 #email-err").show();
            isValid = false
        }
        if (productType == null || productType == "") {
            var $prodTypeEl = $("#lead-form-1 #product-type");
            $prodTypeEl.addClass("error");
            $prodTypeEl.closest(".input-group").addClass("error");
            $("#lead-form-1 #product-type-err").show();
            isValid = false
        }
        if (productId.length < 0 || productId.length == 0) {
            var $prodTypeEl = $("#lead-form-1 #product-type");
            $prodTypeEl.addClass("error");
            $prodTypeEl.closest(".input-group").addClass("error");
            $("#lead-form-1 #product-type-err").show();
            isValid =
                false
        }
        if (pincode == null || pincode == "" || pincode.length < 6 || !/^[0-9]*$/.test(pincode)) {
            var $pincodeEl = $("#lead-form-1 #qa-pincode");
            $pincodeEl.addClass("error");
            $pincodeEl.closest(".input-group").addClass("error");
            $("#lead-form-1 #pincode-err").show();
            isValid = false
        }
        if (!formajax) isValid = false;
        if (isValid) {
            var callbackRequest = formajax + "apiname\x3dsave\x26productCode\x3d" + productId + "\x26custName\x3d" + fname + "\x26lastName\x3d" + lname + "\x26custMobNo\x3d" + mobNum + "\x26custEmail\x3d" + email + "\x26pinCode\x3d" + pincode;
            $.ajax({
                dataType: "json",
                url: callbackRequest,
                type: "GET",
                success: function(response) {
                    var getCallbackResults = response.getCallbackResults;
                    var successFlag = 0;
                    var succMsg = "CRM ";
                    if (getCallbackResults)
                        for (var i = 0; i < getCallbackResults.length; i++) {
                            var crmServiceResponce = getCallbackResults[i].IsSuccess;
                            var message = getCallbackResults[i].Message;
                            var crmItemKey = getCallbackResults[i].ItemKey;
                            if (typeof message != "undefined" && typeof crmItemKey != "undefined" && typeof crmServiceResponce != "undefined")
                                if (message && crmItemKey &&
                                    crmServiceResponce)
                                    if (message == "Success") {
                                        succMsg = succMsg + crmItemKey;
                                        succMsg = succMsg + " ";
                                        successFlag++
                                    }
                        }
                    if (successFlag != 0 && productId.length >= successFlag) {
                        var displayMsg = $("#success-txt p#successMsg strong").text();
                        $("#success-txt p#successMsg strong").text(succMsg);
                        $("#success-txt").addClass("show");
                        $("#lead-form-1")[0].reset();
                        qaSelectedProdArray = [];
                        $("#lead-form-1 #product-type").multiselect("reload");
                        setTimeout(function() {
                            $("#success-txt").removeClass("show")
                        }, 3E4)
                    } else {
                        $("#error-txt").text("Error while submitting form");
                        $("#error-txt").addClass("error")
                    }
                },
                error: function() {
                    $("#error-txt").text("Error while submitting form");
                    $("#error-txt").addClass("error")
                }
            })
        }
    });
    var qaipalBtn = document.querySelector(".quickactions .ipalBtn .link");
    qaipalBtn && qaipalBtn.addEventListener("click", function(e) {
        e.preventDefault();
        document.getElementsByClassName("widget-side__opener-icon")[0].click()
    })
});
!$(".loan-forms .form-slider").hasClass("slick-initialized") && $(".loan-forms .form-slider").slick({
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
            dots: true,
            infinite: false,
            autoplay: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true
        }
    }],
    onInit: function() {
        $(".slick-next .slick-arraow").css("pointer-events", "none")
    }
});

function deactiveArrow() {
    $(".form-slider .slick-arrow").addClass("arrow-disable")
}

function activateArrow() {
    $(".form-slider .slick-arrow").removeClass("arrow-disable")
}

function showFormError() {
    $(".form-slider .slick-active").find(".form-group-inner").addClass("error")
}
var disableEventsClass = "disable-el";

function disableSlickDots(index) {
    $("#offer-form .slick-dots li").eq(index).addClass(disableEventsClass);
    $("#offer-form-mob .slick-dots li").eq(index).addClass(disableEventsClass)
}

function enableSlickDot(index) {
    $("#offer-form .slick-dots li").eq(index).removeClass(disableEventsClass);
    $("#offer-form-mob .slick-dots li").eq(index).removeClass(disableEventsClass)
}

function validateMobile($this) {
    flag = false;
    msg = "";
    mobile = $($this).val();
    if ($.trim(mobile) == "") disableSlickDots(2);
    else if (!$.isNumeric(mobile)) {
        showFormError();
        msg = "Please enter valid Mobile number";
        $($this).addClass("error");
        disableSlickDots(2)
    } else if (mobile.length < 10) {
        showFormError();
        msg = "Please enter valid Mobile number";
        $($this).addClass("error");
        disableSlickDots(2)
    } else {
        $($this).removeClass("error");
        $(".form-slider .slick-active").find(".form-group-inner").removeClass("error");
        activateArrow();
        enableSlickDot(2);
        flag = true
    }
    $(".error-msg").html(msg);
    return flag
}

function validateName($this) {
    flag = false;
    msg = "";
    var regName = /^[a-zA-Z ]+$/;
    name = $($this).val();
    if ($.trim(name) == "") {
        disableSlickDots(1);
        disableSlickDots(2)
    } else if (!regName.test(name)) {
        showFormError();
        msg = "Please enter valid Name";
        $($this).addClass("error");
        disableSlickDots(1);
        disableSlickDots(2)
    } else {
        $($this).removeClass("error");
        $(".form-slider .slick-active").find(".form-group-inner").removeClass("error");
        activateArrow();
        enableSlickDot(1);
        $(".slick-dots").show();
        flag = true
    }
    $(".error-msg").html(msg);
    return flag
}

function validateEmail($this) {
    flag = false;
    msg = "";
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    email = $($this).val();
    if ($.trim(email) == "");
    else if (!regEmail.test(email)) {
        showFormError();
        msg = "Please enter valid Email ID";
        $($this).addClass("error")
    } else {
        $($this).removeClass("error");
        $(".form-slider .slick-active").find(".form-group-inner").removeClass("error");
        activateArrow();
        $(".slick-dots").show();
        flag = true
    }
    $(".error-msg").html(msg);
    return flag
}
var timeout = 0;
$(window).on("load resize orientationchange", function() {
    clearInterval(timeout);
    $(".form-slider").on("afterChange", function(event, slick, currentSlide) {
        if (currentSlide == 3)
            if (!validateMobile($(".input-mobile"))) $(".form-slider").slickGoTo(parseInt(0));
            else if (!validateName($(".input-name"))) $(".form-slider").slickGoTo(parseInt(1));
        else if (!validateEmail($(".input-email"))) $(".form-slider").slickGoTo(parseInt(2));
        else {
            $("#offer-form-mob").trigger("reset");
            $("#offer-form").trigger("reset")
        }
        if (currentSlide ==
            0)
            if (!validateName($(".input-name"))) deactiveArrow();
            else activateArrow();
        else if (currentSlide == 1)
            if (!validateMobile($(".input-mobile"))) deactiveArrow();
            else activateArrow();
        else if (currentSlide == 2)
            if (!validateEmail($(".input-email"))) deactiveArrow();
            else activateArrow();
        else {
            $("#offer-form").trigger("reset");
            $("#offer-form-mob").trigger("reset")
        }
    });
    $("form input").on("keyup", function() {
        deactiveArrow();
        if ($(this).hasClass("input-mobile")) validateMobile($(this));
        else if ($(this).hasClass("input-name")) validateName($(this));
        else if ($(this).hasClass("input-email")) validateEmail($(this))
    });
    deactiveArrow();
    disableSlickDots(1);
    disableSlickDots(2);
    $(".slick-arrow").on("click", function(e) {
        if ($(this).hasClass("arrow-disable")) e.preventDefault()
    })
});
$(document).ready(function() {
    $("#product-type2-button").remove();
    $("select[multiple]").multiselect({
        columns: 1,
        search: false,
        texts: {
            placeholder: "Select product type"
        }
    })
});
$(document).ready(function() {
    $("#getCallBackPopup").click(function() {
        $("#imodal-callback-popup1").show()
    });
    var qaSelectedProdArray = [];
    $("#product-type2").change(function() {
        qaSelectedProdArray = $(this).val()
    });
    $(".multiselect-dropdown select[multiple]").multiselect({
        columns: 1,
        search: false,
        texts: {
            placeholder: "Select product type"
        },
        showCheckbox: true,
        onOptionClick: function(element, option) {
            if (option.checked) qaSelectedProdArray.push(option.value);
            else {
                var index$7 = qaSelectedProdArray.indexOf(option.value);
                if (index$7 > -1) qaSelectedProdArray.splice(index$7, 1)
            }
        }
    });
    $(".callback-form .input-group").click(function() {
        $(".input-group").removeClass("active");
        $(this).addClass("active")
    });
    $(document).on("click", function(e) {
        if (!$(".callback-form .input-group").is(e.target) && $(".callback-form .input-group").has(e.target).length === 0) $(".input-group").removeClass("active")
    });
    $("#lead-form-2").on("submit", function(e) {
        e.preventDefault();
        var productId = [];
        productId = qaSelectedProdArray;
        var formajax = $("#lead-form-2").attr("ajax-page");
        var fname = document.forms["lead-form-2"]["firstNameId"].value;
        var lname = document.forms["lead-form-2"]["lastNameId"].value;
        var mobNum = document.forms["lead-form-2"]["contactNoId"].value;
        var email = document.forms["lead-form-2"]["emailId"].value;
        var productType = document.forms["lead-form-2"]["product-type2"].value;
        var pincode = document.forms["lead-form-2"]["pincodeId"].value;
        var isValid = true;
        $("#lead-form-2 .error").removeClass("error");
        $("#lead-form-2 .error-txt").hide();
        var fnameInvalid = !/^[a-zA-Z ]*$/g.test(fname);
        var lnameInvalid = !/^[a-zA-Z ]*$/g.test(lname);
        if (fname == null || fname == "") {
            var $fnameEl = $("#lead-form-2 #firstNameId");
            $fnameEl.addClass("error");
            $fnameEl.closest(".input-group").addClass("error");
            $("#lead-form-2 #fname-err").show();
            isValid = false
        }
        if (fnameInvalid) {
            var $fnameEl = $("#lead-form-2 #firstNameId");
            $fnameEl.addClass("error");
            $fnameEl.closest(".input-group").addClass("error");
            $("#lead-form-2 #fname-num-err").show();
            isValid = false
        }
        if (lname == null || lname == "") {
            var $lnameEl = $("#lead-form-2 #lastNameId");
            $lnameEl.addClass("error");
            $lnameEl.closest(".input-group").addClass("error");
            $("#lead-form-2 #lname-err").show();
            isValid = false
        }
        if (lnameInvalid) {
            var $lnameEl = $("#lead-form-2 #lastNameId");
            $lnameEl.addClass("error");
            $lnameEl.closest(".input-group").addClass("error");
            $("#lead-form-2 #lname-num-err").show();
            isValid = false
        }
        if (mobNum == null || mobNum == "" || mobNum.length < 10 || !/^[0-9]*$/.test(mobNum)) {
            var $mobNumEl = $("#lead-form-2 #contactNoId");
            $mobNumEl.addClass("error");
            $mobNumEl.closest(".input-group").addClass("error");
            isValid = false
        }
        if (email == null || email == "" || !/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
            var $emailEl = $("#lead-form-2 #emailId");
            $emailEl.addClass("error");
            $emailEl.closest(".input-group").addClass("error");
            isValid = false
        }
        if (productType == null || productType == "") {
            var $prodTypeEl = $("#lead-form-2 #product-type2");
            $prodTypeEl.addClass("error");
            $prodTypeEl.closest(".input-group").addClass("error");
            $("#lead-form-2 #product-type-err").show();
            isValid = false
        }
        if (productId.length < 0 || productId.length == 0) {
            var $prodTypeEl =
                $("#lead-form-2 #product-type2");
            $prodTypeEl.addClass("error");
            $prodTypeEl.closest(".input-group").addClass("error");
            $("#lead-form-2 #product-type-err").show();
            isValid = false
        }
        if (pincode == null || pincode == "" || pincode.length < 6 || !/^[0-9]*$/.test(pincode)) {
            var $pincodeEl = $("#lead-form-2 #pincodeId");
            $pincodeEl.addClass("error");
            $pincodeEl.closest(".input-group").addClass("error");
            isValid = false
        }
        if (!formajax) isValid = false;
        if (isValid) {
            var callbackRequest = formajax + "apiname\x3dsave\x26productCode\x3d" + "CC" + "\x26custName\x3d" +
                fname + "\x26lastName\x3d" + lname + "\x26custMobNo\x3d" + mobNum + "\x26custEmail\x3d" + email + "\x26pinCode\x3d" + pincode + "\x26cardType\x3dcoral";
            console.log(callbackRequest);
            $.ajax({
                dataType: "json",
                url: callbackRequest,
                type: "GET",
                success: function(response) {
                    var getCallbackResults = response.getCallbackResults;
                    var successFlag = 0;
                    var succMsg = "CRM ";
                    if (getCallbackResults)
                        for (var i = 0; i < getCallbackResults.length; i++) {
                            var crmServiceResponce = getCallbackResults[i].IsSuccess;
                            var message = getCallbackResults[i].Message;
                            var crmItemKey =
                                getCallbackResults[i].ItemKey;
                            if (typeof message != "undefined" && typeof crmItemKey != "undefined" && typeof crmServiceResponce != "undefined")
                                if (message && crmItemKey && crmServiceResponce)
                                    if (message == "Success") {
                                        succMsg = succMsg + crmItemKey;
                                        succMsg = succMsg + " ";
                                        successFlag++
                                    }
                        }
                    if (successFlag != 0 && productId.length >= successFlag) {
                        var displayMsg = $("#success-txt-coral p#successMsg strong").text();
                        $("#success-txt-coral p#successMsg strong").text(succMsg);
                        $("#success-txt-coral").addClass("show");
                        $("#lead-form-2")[0].reset();
                        qaSelectedProdArray = [];
                        $("#lead-form-2 #product-type2").multiselect("reload");
                        setTimeout(function() {
                            $("#success-txt-coral").removeClass("show")
                        }, 3E4)
                    } else {
                        $("#error-txt").text("Error while submitting form");
                        $("#error-txt").addClass("error")
                    }
                },
                error: function() {
                    $("#error-txt").text("Error while submitting form");
                    $("#error-txt").addClass("error")
                }
            })
        }
    })
});
var activetab;
var isCalculator = false;
document.addEventListener("start-product", function() {
    handleLiOnTabChange()
});

function handleLiOnTabChange() {
    $(".main-calculator").hide();
    var calculatorSet = document.getElementById("calculator-id") ? document.getElementById("calculator-id").innerText : null;
    setTimeout(function() {
        activetab = $(".product-tabs ul li.active").attr("id");
        $("#" + activetab + "-container").show();
        var scriptPath = document.getElementById(activetab + "-js") ? document.getElementById(activetab + "-js").innerText : null;
        var cssPath = document.getElementById(activetab + "-css") ? document.getElementById(activetab + "-css").innerText :
            null;
        scriptPath ? loadJS(scriptPath, activetab + "-script") : null;
        cssPath ? loadCSS(cssPath, activetab + "-style") : null;
        isCalculator = calculatorSet && calculatorSet.search(activetab) > -1;
        $(".tabs-two-column-calculator .left-panel .card-panel").hide();
        $(".tabs-two-column-calculator .right-panel .tab-pane").hide();
        if (isCalculator) {
            $(".calculator-unique").show();
            $(".no-calculator").hide();
            $("#" + activetab + "-rightPanel").hide();
            $("#" + activetab + "-leftPanel").hide();
            $("#" + activetab + "-container .left-panel .card-panel").show();
            $("#" + activetab + "-container .right-panel .tab-pane").show()
        } else {
            $(".calculator-unique").hide();
            $(".no-calculator").show();
            $("#" + activetab + "-rightPanel").show();
            $("#" + activetab + "-leftPanel").show();
            loadCallback();
            windowLoadCallback()
        }
    }, 0)
}

function loadJS(filepath, scriptid) {
    var jsElm = document.createElement("script");
    jsElm.type = "application/javascript";
    jsElm.setAttribute("id", scriptid);
    jsElm.src = filepath;
    if (!document.getElementById(scriptid)) document.body.appendChild(jsElm)
}

function loadCSS(filepath, cssId) {
    var head = document.getElementsByTagName("head")[0];
    var cssElm = document.createElement("link");
    cssElm.type = "text/css";
    cssElm.href = filepath;
    cssElm.id = cssId;
    cssElm.rel = "stylesheet";
    if (!document.getElementById(cssId)) head.appendChild(cssElm)
}
$(".pointer-carousel-with-link .varaints-pointer-cards").slick({
    dots: !0,
    arrows: !0,
    infinite: !1,
    autoplay: !1,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            dots: !1
        }
    }, {
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            dots: !0,
            arrows: !1
        }
    }, {
        breakpoint: 560,
        settings: {
            slidesToShow: 1,
            dots: !0,
            arrows: !1
        }
    }]
});
(function() {
    $(".how-it-works-slider").slick({
        dots: !0,
        arrows: !0,
        infinite: !0,
        autoplay: !0,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: !1
            }
        }]
    });
    $(window).on("load resize orientationchange", function() {
        if ($(window).width() > 991) $(".row, .how-it-works-slider").each(function() {
            $(this).find(".how-it-works-card-inner").equalHeights()
        })
    })
})();
$(document).ready(function() {
    if ($(".multicards").length <= 1)
        if ($(".multicards .section-inner .how-it-works-wrapper .section-title").is(":empty")) $(".multicards .section-inner .how-it-works-wrapper .section-title").remove()
});
$(document).ready(function() {
    var brandDetailsEle = $("#brand-details");
    if (!brandDetailsEle) return;

    function initBrandSlick() {
        if ($(window).width() > 560) return $(".brand-section .offer-cards").hasClass("slick-initialized") && $(".brand-section .offer-cards").slick("unslick"), !0;
        $(".brand-section .offer-cards").not(".slick-initialized").slick({
            dots: !0,
            arrows: !1,
            infinite: !0,
            centerMode: !0,
            autoplay: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "15px"
        })
    }
    var searchPath = brandDetailsEle.attr("data-searchpath");
    var brandId = brandDetailsEle.attr("data-propval");
    var brandIdProp = brandDetailsEle.attr("data-prop");
    var jsonData = "/content/icicibank.offersearch.json?searchPath\x3d" + searchPath + "\x26start\x3d0\x26prop\x3d" + brandIdProp + "\x26value\x3d" + brandId + "";
    var requestsData = {
        cards: []
    };
    if (searchPath) $.getJSON(jsonData, function(resultJSON) {
        var tempArray1 = [];
        if (resultJSON && resultJSON.cards) requestsData = resultJSON.cards;
        else requestsData = [];
        var noOffer = "No Offer Found";
        if (typeof requestsData != "undefined")
            if (requestsData !=
                "") {
                $(".page-heading").append(" " + "(" + requestsData.length + ")");
                for (var index$8 = 0; index$8 < requestsData.length; index$8++) {
                    var offerViews = requestsData[index$8]["offerViews"];
                    var offerId = requestsData[index$8]["offerId"];
                    var offerImage = requestsData[index$8]["offerImage"];
                    var offerDesp1 = requestsData[index$8]["offerDesp1"];
                    var offerDesp2 = requestsData[index$8]["offerDesp2"];
                    var offerTitle = requestsData[index$8]["offerTitle"];
                    var brandId = requestsData[index$8]["brandId"];
                    var brandLink = requestsData[index$8]["pagePath"];
                    var categoryLink = requestsData[index$8]["categoryLink"];
                    var startDate = requestsData[index$8]["startDate"];
                    var endDate = requestsData[index$8]["endDate"];
                    var Livesite = requestsData[index$8]["Livesite"];
                    if (typeof offerViews != "undefined") {
                        if (offerViews != "") offerViews = offerViews
                    } else offerViews = "";
                    if (typeof offerId != "undefined") {
                        if (offerId != "") offerId = '\x3cinput type\x3d"hidden" id\x3d"offerId" value\x3d"' + offerId + '"\x3e'
                    } else offerId = "";
                    if (typeof offerImage != "undefined") {
                        if (offerImage != "") offerImage = offerImage
                    } else offerImage =
                        "";
                    if (typeof offerDesp1 != "undefined") {
                        if (offerDesp1 != "") offerDesp1 = offerDesp1
                    } else offerDesp1 = "";
                    if (typeof offerDesp2 != "undefined") {
                        if (offerDesp2 != "") offerDesp2 = offerDesp2
                    } else offerDesp2 = "";
                    if (typeof offerTitle != "undefined") {
                        if (offerTitle != "") offerTitle = offerTitle
                    } else offerTitle = "";
                    if (typeof brandId != "undefined") {
                        if (brandId != "") brandId = '\x3cinput type\x3d"hidden" id\x3d"brandId" value\x3d"' + brandId + '"\x3e'
                    } else brandId = "";
                    if (typeof brandLink != "undefined") {
                        if (brandLink != "") brandLink = brandLink
                    } else brandLink =
                        "";
                    if (typeof categoryLink != "undefined") {
                        if (categoryLink != "") categoryLink = categoryLink
                    } else categoryLink = "";
                    if (typeof startDate != "undefined") {
                        if (startDate != "") startDate = startDate
                    } else startDate = "";
                    if (typeof endDate != "undefined") {
                        if (endDate != "") endDate = endDate
                    } else endDate = "";
                    var currentdate = (new Date).toISOString().replace(/T/, " ").replace(/\..+/, "");
                    var ofeerTime;
                    if (endDate > startDate) {
                        if (endDate > currentdate) ofeerTime = '\x3cdiv class\x3d"time"\x3e\x3cspan\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/offer/timer.svg" alt\x3d"time"/\x3e\x3c/span\x3e\x3cspan class\x3d"remaining-time" data-time\x3d"' +
                            endDate + '"\x3e\x3c/span\x3e\x3c/div\x3e'
                    } else ofeerTime = '\x3cdiv class\x3d"time"\x3e\x3cspan\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/offer/timer.svg" alt\x3d"time"/\x3e\x3c/span\x3e\x3cspan class\x3d"remaining-time"data-time\x3d"' + endDate + '"\x3e\x3c/span\x3e\x3c/div\x3e';
                    var description = offerDesp1 + " " + offerDesp2;
                    var quotient = Math.floor(index$8 / 2);
                    var remainder = index$8 % 2;
                    tempArray1.push(remainder);
                    var len = tempArray1.length;
                    $("#offerDetails").append('\x3cdiv class\x3d"offer-card"\x3e' +
                        offerId + '\x3cdiv class\x3d"card-inner"\x3e' + brandId + '\x3cdiv class\x3d"media"\x3e\x3cimg src\x3d"' + offerImage + '" alt\x3d"amazon"/\x3e\x3c/div\x3e' + ofeerTime + '\x3cdiv class\x3d"content"\x3e\x3cdiv class\x3d"title"\x3e' + offerTitle + '\x3c/div\x3e\x3cdiv class\x3d"description"\x3e' + description + '\x3c/div\x3e\x3cdiv class\x3d"button-group"\x3e \x3ca href\x3d"' + brandLink + '" class\x3d"ic-btn" target\x3d"_blank"\x3eSee Full Offer\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"card-bottom"\x3e\x3cdiv class\x3d"date-readtime"\x3e\x3cspan class\x3d"num-viewer"\x3e' +
                        offerViews + '\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"bookmark-share"\x3e\x3cdiv class\x3d"offerfav bookmark" offer-id\x3d"' + Livesite + '"\x3e\x3c/div\x3e\x3cdiv class\x3d"share" data-text\x3d"check out this link"\x3e\x3c/div\x3e\x3cdiv class\x3d"share-content"\x3e\x3cdiv class\x3d"inner-content"\x3e\x3cdiv class\x3d"share-header"\x3e\x3cp\x3eShare\x3c/p\x3e\x3cspan class\x3d"close-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg" alt\x3d"fb" /\x3e\x3c/a\x3e\x3c/span\x3e\x3c/div\x3e\x3cul class\x3d"share-link"\x3e\x3cli\x3e\x3ca href\x3d"https://api.whatsapp.com/send?url\x3d' +
                        window.location.origin + brandLink + "\x26text\x3d" + offerTitle + '" target\x3d"_blank" tabindex\x3d"0"\x3e\x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp.svg" alt\x3d"whatsapp"\x3e\x3c/span\x3e \x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg" alt\x3d"whatsapp"\x3e \x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d"https://www.facebook.com/sharer/sharer.php?url\x3d' +
                        window.location.host + brandLink + "\x26text\x3d" + offerTitle + '" target\x3d"_blank" tabindex\x3d"0"\x3e \x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg" alt\x3d"fb"\x3e\x3c/span\x3e\x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg"alt\x3d"fb"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d"https://twitter.com/intent/tweet?url\x3d' +
                        window.location.host + brandLink + "\x26text\x3d" + encodeURI(offerTitle) + '" target\x3d"_blank" tabindex\x3d"0"\x3e\x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg" alt\x3d"tw"\x3e\x3c/span\x3e\x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg" alt\x3d"tw"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d"https://www.linkedin.com/shareArticle?mini\x3dtrue?url\x3d' +
                        window.location.host + brandLink + "\x26text\x3d" + offerTitle + '" target\x3d"_blank" tabindex\x3d"0"\x3e\x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg" alt\x3d"ln"\x3e\x3c/span\x3e\x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg" alt\x3d"ln"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e')
                }
            }
        if (typeof requestsData ==
            "undefined" && typeof brandId != "undefined") {
            $(".brand-page .page-heading").append(" " + "(0)");
            $("#offerDetails").append("\x3ch5\x3eNo Offer Found\x3c/h5\x3e")
        }
        initBrandSlick();
        getRemainingTime();
        var o = localStorage.getItem("OfferIdsFav");
        var e = [];
        var m = [];
        if (typeof o != "undefined")
            if (o != null && o != "") {
                var s = o.split(",");
                for (var k = 0; k < s.length; k++) {
                    m.push(s[k]);
                    e.push(s[k])
                }
                for (var k = 0; k < m.length; k++) {
                    $('.offerfav.bookmark[offer-id\x3d"' + m[k] + '"]').addClass("active");
                    $('.offerfav.bookmark[offer-id\x3d"' +
                        m[k] + '"]').parent().parent().parent().parent().parent().addClass("favouirite");
                    $('.offerfav.bookmark[offer-id\x3d"' + m[k] + '"]').css({
                        background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
                    })
                }
            }
        $(document).on("click", ".offerfav.bookmark", function(f) {
            var c = $(this).attr("offer-id");
            if (!$(this).hasClass("active")) {
                $(this).addClass("active");
                $(this).css({
                    background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
                });
                e.push(c);
                e = g(e);
                b()
            } else {
                var a = localStorage.OfferIdsFav.split(",");
                a = g(a);
                $(this).removeClass("active");
                $(this).css({
                    background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/bookmark.svg) no-repeat 0 0%"
                });
                a.splice($.inArray(c, a), 1);
                e = g(a);
                b()
            }
        });

        function b() {
            localStorage.setItem("OfferIdsFav", e)
        }

        function g(c) {
            var a = [];
            $.each(c, function(f, h) {
                if ($.inArray(h, a) == -1) a.push(h)
            });
            return a
        }

        function p(a) {
            return a.filter(function(h, f, c) {
                return f == c.indexOf(h)
            })
        }

        function getRemainingTime() {
            $("span.remaining-time").each(function(element) {
                var thisItem =
                    $(this);
                var countDownDate = moment($(this).attr("data-time")).valueOf();
                var x = setInterval(function() {
                    var now = (new Date).getTime();
                    var distance = countDownDate - now;
                    var days = Math.floor(distance / (1E3 * 60 * 60 * 24));
                    var hours = Math.floor(distance % (1E3 * 60 * 60 * 24) / (1E3 * 60 * 60));
                    var minutes = Math.floor(distance % (1E3 * 60 * 60) / (1E3 * 60));
                    var seconds = Math.floor(distance % (1E3 * 60) / 1E3);
                    var timeRemains = "";
                    if (days > 0) timeRemains += days + "d ";
                    if (hours.toString().length == 1) hours = 0 + hours.toString();
                    if (minutes.toString().length == 1) minutes =
                        0 + minutes.toString();
                    if (seconds.toString().length == 1) seconds = 0 + seconds.toString();
                    timeRemains += hours + "." + minutes + "." + seconds;
                    thisItem.text(timeRemains);
                    if (distance < 0) {
                        clearInterval(x);
                        thisItem.text("EXPIRED")
                    }
                }, 1E3)
            })
        }
    });
    $(".az-icon-close").hide();
    $(".az-icon ").click(function() {
        $(this).hide();
        $(".brand-nav").show();
        $(".az-icon-close").show()
    });
    $(".az-icon-close").click(function() {
        $(this).hide();
        $(".brand-nav").hide();
        $(".az-icon").show()
    });
    $(window).bind("scroll", function() {
        $(".brand-lists .brand-list").each(function(index) {
            if ($(".card-loading").length >
                0) return;
            if ($(this).isOnScreen() && $(this).hasClass("hidden-card")) {
                var thisElement = $(this);
                thisElement.removeClass("hidden-card");
                thisElement.addClass("card-loading");
                setTimeout(function() {
                    thisElement.removeClass("card-loading");
                    thisElement.addClass("auto-height")
                }, 2E3)
            }
        })
    });
    $(window).resize(function() {
        initBrandSlick()
    })
});
$(document).ready(function() {
    if ($("#serviceRequestJson").attr("data-searchpath")) {
        var jsonData = "/content/icicibank.brandsearch.json?searchPath\x3d" + $("#serviceRequestJson").attr("data-searchpath") + "\x26start\x3d0";
        $.getJSON(jsonData, function(resultJSON) {
            if (resultJSON && resultJSON.brands) var OffersBrand = resultJSON.brands;
            else var OffersBrand = [];
            var titleFirstChar = "",
                brandSectionArray = [];
            for (var index$9 = 0; index$9 < OffersBrand.length; index$9++) {
                var element = OffersBrand[index$9];
                titleFirstChar = element["BrandTitle"].charAt(0).toUpperCase();
                if (brandSectionArray.indexOf(titleFirstChar) == -1) brandSectionArray.push(titleFirstChar)
            }
            brandSectionArray.reverse();
            for (var index$10 = 0; index$10 < brandSectionArray.length; index$10++);
            $(".brand-nav li").removeClass("ln-disabled");
            $.each($(".brand-nav li"), function() {
                if (brandSectionArray.indexOf($(this).text().toUpperCase()) == -1 && $(this).text().toUpperCase() != "ALL") $(this).addClass("ln-disabled")
            });
            generateBrandCardstems(OffersBrand);
            $(".brand-top-content .search-box-area input").keyup(function() {
                var inputText =
                    $(this)[0].value;
                if (inputText.length > 0) generateBrandCardstems(searchItems(OffersBrand, "BrandTitle", inputText));
                else generateBrandCardstems(OffersBrand)
            });
            $(document).on("click", ".brandlisting-page ul.ln-letters li", function() {
                $(".ln-letters li").removeClass("ln-selected");
                var letter = $(this)[0].className;
                if (letter.toLowerCase() == "all") generateBrandCardstems(OffersBrand);
                else generateBrandCardstems(searchItems(OffersBrand, "BrandTitle", letter, true));
                $(this).addClass("ln-selected")
            });
            $(window).resize(function() {
                generateBrandCardstems(OffersBrand)
            })
        })
    }
});

function generateBrandCardstems(brandData) {
    var html = "",
        cardGroupCount;
    if ($(window).width() <= 1200) cardGroupCount = 6;
    else cardGroupCount = 8;
    for (var index$11 = 0; index$11 < brandData.length; index$11++) {
        if (index$11 % cardGroupCount == 0)
            if (index$11 >= cardGroupCount) html += '\x3cdiv class\x3d"brand-list hidden-card"\x3e';
            else html += '\x3cdiv class\x3d"brand-list"\x3e';
        html += generateCardHTML(brandData[index$11]["OfferId"], brandData[index$11]["BrandPageLink"], brandData[index$11]["BrandLogoPath"], brandData[index$11]["BrandTitle"],
            brandData[index$11]["PopularBrand"]);
        if (index$11 % cardGroupCount == cardGroupCount - 1) html += "\x3c/div\x3e"
    }
    html.length > 0 ? $("#brandListingWrapper").html(html) : $("#brandListingWrapper").html('\x3cdiv class\x3d"no-result"\x3e\x3c/div\x3e')
}

function generateCardHTML(offerId, brandUrl, brandIconPath, brandTitle, popularBrand) {
    var cardHTML = "";
    cardHTML = '\x3cdiv class\x3d"brand-card" id\x3d"' + offerId + '"\x3e\x3ca href\x3d"' + brandUrl + '" target\x3d"_blank"\x3e\x3cdiv class\x3d"media"\x3e\x3cimg src\x3d"' + brandIconPath + '" alt\x3d"" /\x3e\x3c/div\x3e\x3cdiv class\x3d"content"\x3e\x3cdiv class\x3d"title"\x3e' + brandTitle + "\x3c/div\x3e\x3c/div\x3e\x3c/a\x3e\x3c/div\x3e";
    return cardHTML
}

function searchItems(itemsArray, key, inputText, startsWith) {
    var tempItemArray = [];
    for (var index$12 = 0; index$12 < itemsArray.length; index$12++) {
        var itemKeyValue = itemsArray[index$12][key];
        if (startsWith) {
            if (itemKeyValue.toUpperCase().startsWith(inputText.toUpperCase())) tempItemArray.push(itemsArray[index$12])
        } else if (itemKeyValue.toUpperCase().includes(inputText.toUpperCase())) tempItemArray.push(itemsArray[index$12])
    }
    return tempItemArray
}
$(document).ready(function() {
    var searchPath = $("#category-details").attr("data-searchpath");
    var catId = $("#category-details").attr("data-propval");
    var catIdProp = $("#category-details").attr("data-prop");
    var jsonData = "/content/icicibank.offersearch.json?searchPath\x3d" + searchPath + "\x26start\x3d0\x26prop\x3d" + catIdProp + "\x26value\x3d" + catId + "";
    var requestsData = {
        cards: []
    };
    if (searchPath && catIdProp && catId) $.getJSON(jsonData, function(responseJson) {
        var resultJSON = responseJson;
        resultJSON.cards.sort(function(x,
            y) {
            if (x === "" && y === "") return 0;
            var xVal = parseInt(x.offerPriority);
            var yVal = parseInt(y.offerPriority);
            if (xVal !== 0 && !xVal) xVal = Number.MAX_VALUE;
            if (yVal !== 0 && !yVal) yVal = Number.MAX_VALUE;
            if (xVal === yVal) return new Date(x.startDate) - new Date(y.startDate);
            return xVal - yVal
        });
        if (resultJSON && resultJSON["cards"]) requestsData = resultJSON["cards"];
        if (requestsData.length > 0) $("#category-detailspage-heading").append(" " + "(" + requestsData.length + ")");
        if (typeof requestsData == "undefined") {
            $("#category-detailspage-heading").append(" " +
                "(0)");
            $("#category-offerdetails").append("\x3ch5\x3eNo Offer Found\x3c/h5\x3e")
        }
        for (var index$13 = 0; index$13 < requestsData.length; index$13++) {
            var offerViews = requestsData[index$13]["offerViews"];
            var offerId = requestsData[index$13]["offerId"];
            var offerImage = requestsData[index$13]["Image"];
            var offerDesp1 = requestsData[index$13]["offerDesp1"];
            var offerDesp2 = requestsData[index$13]["offerDesp2"];
            var offerTitle = requestsData[index$13]["offerTitle"];
            var offerPromoCode = requestsData[index$13]["offerPromoCode"];
            var brandId = requestsData[index$13]["brandId"];
            var brandLink = requestsData[index$13]["pagePath"];
            var categoryLink = requestsData[index$13]["categoryLink"];
            var startDate = requestsData[index$13]["startDate"];
            var endDate = requestsData[index$13]["endDate"];
            if (typeof offerViews != "undefined") {
                if (offerViews != "") offerViews = offerViews
            } else offerViews = "";
            if (typeof offerId != "undefined") {
                if (offerId != "") offerId = '\x3cinput type\x3d"hidden" id\x3d"offerId" value\x3d"' + offerId + '"\x3e'
            } else offerId = "";
            if (typeof offerImage !=
                "undefined") {
                if (offerImage != "") offerImage = offerImage
            } else offerImage = "";
            if (typeof offerDesp1 != "undefined") {
                if (offerDesp1 != "") offerDesp1 = offerDesp1
            } else offerDesp1 = "";
            if (typeof offerDesp2 != "undefined") {
                if (offerDesp2 != "") offerDesp2 = offerDesp2
            } else offerDesp2 = "";
            if (typeof offerTitle != "undefined") {
                if (offerTitle != "") offerTitle = offerTitle
            } else offerTitle = "";
            var res = offerPromoCode.substring(0, 2);
            var matches = res.match(/\d+/g);
            var end = endDate.split(" ")[0];
            var expDate = end.split("-");
            var year = expDate[0];
            var monthno =
                expDate[1] - 1;
            var day = expDate[2];
            var month = new Array;
            month[0] = "Jan";
            month[1] = "Feb";
            month[2] = "Mar";
            month[3] = "Apr";
            month[4] = "May";
            month[5] = "Jun";
            month[6] = "Jul";
            month[7] = "Aug";
            month[8] = "Sept";
            month[9] = "Oct";
            month[10] = "Nov";
            month[11] = "Dec";
            var no = month[monthno];
            var monthDate = no + " " + day + ", " + year;
            if (matches != null || offerPromoCode.includes("Rs") || offerPromoCode.includes("?") || offerPromoCode.includes("RS")) offerPromoCode = '\x3cdiv class\x3d"offer-coupon-content"\x3e\x3cdiv class\x3d"offer-coupon-inner"\x3e\x3cdiv class\x3d"offer-tags"\x3e\x3cdiv class\x3d"tag"\x3e\x3cp\x3eGet flat ' +
                offerPromoCode + '\x3c/p\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"offer-tags"\x3e\x3cdiv class\x3d"tag"\x3e\x3cp\x3eOffer period: Till ' + monthDate + "\x3c/p\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
            else offerPromoCode = '\x3cdiv class\x3d"offer-coupon-content"\x3e\x3cp class\x3d"label"\x3eUse Coupon Code:\x3c/p\x3e\x3cdiv class\x3d"offer-coupon-inner"\x3e\x3cdiv class\x3d"offer-coupon-area"\x3e\x3cdiv class\x3d"offer-Coupon"\x3e \x3cspan id\x3d"referal-coupon' + index$13 + '" class\x3d"coupon"\x3e' +
                offerPromoCode + '\x3c/span\x3e\x3cspan id\x3d"btn-referal-coupon' + index$13 + '" onclick\x3d"copyCode(\'referal-coupon' + index$13 + "', 'btn-referal-coupon" + index$13 + '\')" class\x3d"copy"\x3eCopy Code\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"offer-tags"\x3e\x3cdiv class\x3d"tag"\x3e\x3cp\x3eOffer period: Till ' + monthDate + "\x3c/p\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
            if (typeof brandId != "undefined") {
                if (brandId != "") brandId = brandId
            } else brandId = "";
            if (typeof brandLink !=
                "undefined") {
                if (brandLink != "") brandLink = brandLink
            } else brandLink = "";
            if (typeof categoryLink != "undefined") {
                if (categoryLink != "") categoryLink = categoryLink
            } else categoryLink = "";
            if (typeof startDate != "undefined") {
                if (startDate != "") startDate = startDate
            } else startDate = "";
            if (typeof endDate != "undefined") {
                if (endDate != "") endDate = endDate
            } else endDate = "";
            var currentdate = (new Date).toISOString().replace(/T/, " ").replace(/\..+/, "");
            var ofeerTime;
            if (endDate > startDate) {
                if (endDate > currentdate) ofeerTime = '\x3cdiv class\x3d"time"\x3e\x3cspan\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/timer.svg" alt\x3d"time"/\x3e\x3c/span\x3e\x3cspan class\x3d"remaining-time"\x3e' +
                    endDate + "\x3c/span\x3e\x3c/div\x3e"
            } else ofeerTime = '\x3cdiv class\x3d"time"\x3e\x3cspan\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/timer.svg" alt\x3d"time"/\x3e\x3c/span\x3e\x3cspan class\x3d"remaining-time"\x3eExpired\x3c/span\x3e\x3c/div\x3e';
            var description = offerDesp1 + " " + offerDesp2;
            $("#category-offerdetails").append('\x3cdiv class\x3d"offer-card"\x3e' + offerId + '\x3cdiv class\x3d"card-inner"\x3e\x3cdiv class\x3d"media"\x3e\x3cimg src\x3d"' + offerImage +
                '" alt\x3d"" loading\x3d"lazy"\x3e\x3c/div\x3e\x3cdiv class\x3d"content"\x3e\x3cdiv class\x3d"top-content"\x3e\x3cdiv class\x3d"title"\x3e' + offerTitle + '\x3c/div\x3e\x3cdiv class\x3d"description"\x3e' + description + "\x3c/div\x3e" + offerPromoCode + '\x3cdiv class\x3d"bottom-content"\x3e\x3cdiv class\x3d"button-group offerdetails-target"\x3e\x3ca href\x3d"' + brandLink + '" class\x3d"ic-btn" tabindex\x3d"0"\x3eSee Full Offer\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"card-bottom"\x3e\x3cdiv class\x3d"date-readtime"\x3e\x3cspan class\x3d"num-viewer"\x3e' +
                offerViews + '\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"bookmark-share"\x3e\x3cdiv class\x3d"bookmark" offer-id\x3d"' + brandId + '"\x3e\x3c/div\x3e\x3cdiv class\x3d"share"\x3e\x3c/div\x3e\x3cdiv class\x3d"share-content"\x3e\x3cdiv class\x3d"inner-content"\x3e\x3cdiv class\x3d"share-header"\x3e\x3cp\x3eShare\x3c/p\x3e\x3cspan class\x3d"close-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg" alt\x3d"fb"\x3e\x3c/span\x3e\x3c/div\x3e\x3cul class\x3d"share-link"\x3e\x3cli\x3e\x3ca href\x3d"https://api.whatsapp.com/send?url\x3d' +
                window.location.host + brandLink + "\x26text\x3d" + offerTitle + '" target\x3d"_blank" tabindex\x3d"0"\x3e\x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp.svg" alt\x3d"whatsapp"\x3e\x3c/span\x3e \x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg" alt\x3d"whatsapp"\x3e \x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d"https://www.facebook.com/sharer/sharer.php?u\x3d' +
                window.location.host + brandLink + "\x26text\x3d" + offerTitle + '" target\x3d"_blank" tabindex\x3d"0"\x3e \x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg" alt\x3d"fb"\x3e\x3c/span\x3e\x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg"alt\x3d"fb"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d"https://twitter.com/intent/tweet?url\x3d' +
                window.location.host + brandLink + "\x26text\x3d" + encodeURI(offerTitle) + '" target\x3d"_blank" tabindex\x3d"0"\x3e\x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg" alt\x3d"tw"\x3e\x3c/span\x3e\x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg" alt\x3d"tw"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d"https://www.linkedin.com/shareArticle?mini\x3dtrue?url\x3d' +
                window.location.host + brandLink + "\x26text\x3d" + offerTitle + '" target\x3d"_blank" tabindex\x3d"0"\x3e\x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg" alt\x3d"ln"\x3e\x3c/span\x3e\x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg" alt\x3d"ln"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
            if ($(window).width() < 991) $(".offerdetails-target a").attr("target", "_blank")
        }
    });
    var o = localStorage.getItem("OfferIdsFav");
    var hp = localStorage.getItem("HandpickedIdsFav");
    var e = [];
    var m = [];
    if (typeof o != "undefined" || typeof hp != "undefined")
        if (o != null && o != "" || hp != null && hp != "") {
            var s = o != null && o != "" && o.split(",");
            var x = hp != null && hp != "" && hp.split(",");
            for (var k = 0; k < s.length; k++) {
                m.push(s[k]);
                e.push(s[k])
            }
            for (var i = 0; i < x.length; i++) {
                m.push(x[i]);
                e.push(x[i])
            }
            for (var k = 0; k < m.length; k++) {
                $('.bookmark[offer-id\x3d"' +
                    m[k] + '"]').addClass("active");
                $('.bookmark[offer-id\x3d"' + m[k] + '"]').parent().parent().parent().parent().parent().addClass("favouirite");
                $('.bookmark[offer-id\x3d"' + m[k] + '"]').css({
                    background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
                })
            }
        }
    $(document).on("click", ".offerdetails-page .bookmark", function(f) {
        var c = $(this).attr("offer-id");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(this).css({
                background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
            });
            e.push(c);
            e = g(e);
            b()
        } else {
            var a = localStorage.OfferIdsFav.split(",");
            a = g(a);
            $(this).removeClass("active");
            $(this).css({
                background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/bookmark-orange.png) no-repeat 0 0%"
            });
            a.splice($.inArray(c, a), 1);
            e = g(a);
            b()
        }
    });

    function b() {
        localStorage.setItem("OfferIdsFav", e)
    }

    function g(c) {
        var a = [];
        $.each(c, function(f, h) {
            if ($.inArray(h, a) == -1) a.push(h)
        });
        return a
    }

    function p(a) {
        return a.filter(function(h, f, c) {
            return f == c.indexOf(h)
        })
    }
});
var nearby_offer_slider;
$(document).ready(function() {
    initBrandListSlick();
    initCategoriesListSlick();
    timerInit();
    offerCardSlider();
    checkOffer();
    gaTrackingOfferPage();
    $(".sort-dropdown li:nth-child(1)").addClass("active"); {
        $(".filter-offer-section .filter-top .filter-icon").click(function() {
            $(".announcement-section").hide();
            if (!$(".filter-top").hasClass("filter-sticky")) $(".filter-top").addClass("filter-sticky");
            $(".filter-top").addClass("filter-selected");
            $(".sidebar-content").addClass("active");
            $("body").addClass("no-scroll")
        });
        $(".filter-offer-section .sort-tools .title").click(function() {
            $(".sort-dropdown .dropdown-wrapper").toggle("show")
        });
        $(document).on("click", ".filter-offer-section .filter-content .filter-cat .filter-clear", function() {
            $(".announcement-section").show();
            $(".filter-inner-container").removeClass("active");
            $(".filter-top").removeClass("filter-selected");
            $(".filter-top").removeClass("filter-sticky");
            $(".filter-content .filter-cat").hide()
        })
    }
    $(".star-review span").on("click", function() {
        $(this).siblings().removeClass("checked");
        $(this).prevAll().addClass("checked");
        $(this).addClass("checked");
        $(this).parent().next('input[name\x3d"rating"]').val($(this).parent().find(".checked").length)
    });
    $(".copy-to-clipboard").on("click", function() {
        $(this).prev("input").select();
        document.execCommand("copy")
    });
    $(".filter-offer-section .sidebar-header .close, .sidebar-footer .apply").click(function() {
        $(".sidebar-content").removeClass("active");
        $(".sb-brands").removeClass("active");
        $(".filter-top").removeClass("filter-selected");
        $(".filter-top").removeClass("filter-sticky");
        $("body").removeClass("no-scroll");
        if ($(window).width() < 991) $("html, body").animate({
            scrollTop: $(".filter-section").offset().top - ($(".new-header.mobile").height() + $(".new-header.mobile .search").height() + 10)
        });
        else $("html, body").animate({
            scrollTop: $(".filter-section").offset().top
        })
    });
    if ($(".offer-slider").length > 0 && $(".offer-slider").hasClass("slick-initialized")) $(".offer-slider").slick("unslick");
    $(".offer-slider").not(".slick-initialized").slick({
        dots: true,
        arrows: true,
        infinite: false,
        autoplay: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 640,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "45px"
            }
        }]
    });
    $(".offer-nav-tabs li").click(function() {
        $("#shop .offer-slider").slick("refresh");
        $("#nearby-offer  .offer-slider").slick("refresh");
        $("#mccmtrendingoffers .offer-slider").slick("refresh");
        setTimeout(function() {
            $("#nearby-offer  .offer-slider .offer-card").equalHeights();
            $("#mccmtrendingoffers .offer-slider .offer-card").equalHeights();
            $("#shop .offer-slider .offer-card").equalHeights()
        }, 500)
    });
    $(".offer-card .card-inner .card-title").equalHeights();
    $(".filter-offer-section .sb-brands .more-link").click(function() {
        $(this).addClass("active");
        $(".sidebar-content").addClass("noscroll-bar");
        $(".sb-brands .brand-poupup").show();
        if ($(window).width() < 991) $(".sb-brands").addClass("active")
    });
    if ($(window).width() < 991) $(".filter-offer-section .sb-brands .heading h5").click(function() {
        $(".sb-brands").removeClass("active");
        $(".sb-brands .more-link").removeClass("active")
    });
    $(".filter-offer-section .brand-poupup .close").click(function() {
        $(".sb-brands .brand-poupup").hide();
        $(".sb-brands").removeClass("active");
        $(".sb-brands .more-link").removeClass("active");
        $(".sidebar-content .sb-brands .search-box-area input").val("");
        $(".sidebar-content").removeClass("noscroll-bar")
    });
    $(".filter-offer-section .sb-brands .search-box-area input").focus(function() {
        $(".sidebar-content").addClass("noscroll-bar")
    });
    $(".filter-offer-section .brand-poupup-bottom .clear-all").click(function() {
        $.each($(".sidebar-content .brand-poupup .brand-poupup-middle input:checked"),
            function() {
                $(this).prop("checked", false)
            })
    });
    $(".filter-offer-section .sidebar-footer .clear-all").click(function() {
        $(".sidebar-footer .clear-all").click(function() {
            $(".sidebar-content .checkbox-list input").prop("checked", false);
            $(".sidebar-content .checkbox-list input").closest("li").removeClass("active")
        })
    });
    $(".filter-offer-section .brand-poupup-bottom .apply").click(function() {
        $(".brand-poupup .close").click();
        $(".sidebar-content .sb-brands .search-box-area input").val("")
    });
    $(".filter-offer-section .sb-brands .filter-clear").click(function() {
        $(".sb-brands .filter-cat").hide();
        $(".sb-brands .filter-cat").removeClass("active")
    });
    $(".sb-payment .read-more-less").hide();
    $(".filter-offer-section .sb-payment .more-link").click(function() {
        $(".read-more-less").slideToggle();
        $("#loadMore").toggleClass("active");
        var text = $(this).text();
        $(this).text(text == "show 3 more" ? "show less" : "show 3 more")
    });
    $(".filter-offer-section .sort-dropdown span").click(function() {
        $(this).addClass("active");
        $(".sort-dropdown .dropdown-wrapper").toggle()
    });
    $(".filter-offer-section .sort-tools .sort-dropdown li").click(function() {
        $(".sort-tools .sort-dropdown li").removeClass("active");
        $(this).addClass("active");
        $(".sort-dropdown span").removeClass("active");
        $(".sort-tools .sort-dropdown span").text($(this).text());
        $(".sort-dropdown .dropdown-wrapper").hide()
    });
    $(window).bind("scroll", function() {
        if ($(".filter-top").hasClass("filter-selected")) return;
        if ($(".filter-offer-section").length == 0) return;
        var topPosition = 0;
        if ($(".feature-offer-section").length > 0) $(".feature-offer-section").each(function(index, val) {
            topPosition += $(val).height()
        });
        topPosition += 150;
        if ($(".announcement-section:visible").length >
            0) topPosition += $(".announcement-section").height();
        if (topPosition <= 0) topPosition = 100;
        if ($(window).width() < 991)
            if ($(window).scrollTop() > topPosition) $(".filter-top").addClass("filter-sticky");
            else $(".filter-top").removeClass("filter-sticky");
        else if ($(window).width() > 991) $(".filter-top").removeClass("filter-sticky");
        if ($(window).width() > 991) {
            $(".sidebar-content").removeClass("disable-sticky");
            removeStickyOfferSidebar(".footer")
        }
        $(".offer-lists .offer-list").each(function(index) {
            if ($(".card-loading").length >
                0) return;
            if ($(this).isOnScreen() && $(this).hasClass("hidden-card")) {
                var thisElement = $(this);
                thisElement.removeClass("hidden-card");
                thisElement.addClass("card-loading");
                setTimeout(function() {
                    thisElement.removeClass("card-loading");
                    thisElement.addClass("auto-height");
                    $(".offer-list").eq(0).append(thisElement.find(".offer-card"));
                    $(".auto-height").remove()
                }, 2E3)
            }
        })
    });

    function removeStickyOfferSidebar(elementVar) {
        if ($(elementVar).length > 0)
            if ($(elementVar).isOnScreen() && $(".card-loading").length <= 0 && $(".sidebar-content").hasClass("sticky-sidebar")) $(".sidebar-content").addClass("disable-sticky")
    }
    $(".filter-offer-section .sidebar-content .sb-categories li .menu-item").click(function(event) {
        if ($(this).parent().hasClass("active") && $(this).parent().hasClass("dropdown")) {
            $(this).parent().find(".dropdown-list").slideToggle();
            $(this).parent().removeClass("active");
            return
        } else {
            $(".dropdown-list").hide();
            $(this).parent().find(".dropdown-list").slideDown()
        }
        $(this).parent().addClass("active");
        if (!$(this).parent().hasClass("dropdown"))
            if ($(window).width() < 991) $(".sidebar-header .close").click()
    });
    $(".filter-offer-section .sb-categories .checkbox-list input").change(function() {
        $(this).prop("checked") ?
            $(this).closest("li").addClass("active") : $(this).closest("li").removeClass("active")
    });
    $(window).resize(function() {
        initBrandListSlick();
        initCategoriesListSlick();
        $(".offer-card .card-inner .card-title").equalHeights()
    });
    (function addRootclass() {
        if ($(".offerbanner").length > 0) {
            var rootEl = $(".container.page-content");
            rootEl.addClass("offerdetails-page")
        }
    })()
});
var searchPlace;

function initNearbyMap() {
    getNearbyLocation();
    initializeNearbyAutoComplete();

    function initializeNearbyAutoComplete() {
        searchPlace = new google.maps.places.Autocomplete(document.getElementById("searchPlaces"), {
            types: ["geocode"],
            componentRestrictions: {
                country: "in"
            }
        })
    }
}
$(document).ready(function() {
    if ($("#filterSection").length > 0)
        if (typeof google === "object" && typeof google.maps === "object") initNearbyMap()
});

function initBrandListSlick() {
    if ($(window).width() > 991) {
        if ($(".feature-offer-card .brand-list").hasClass("slick-initialized")) $(".feature-offer-card .brand-list").slick("unslick");
        return true
    }
    $(".feature-offer-card .brand-list").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1
    })
}

function initCategoriesListSlick() {
    if ($(window).width() > 991) {
        if ($(".feature-offer-card .categories-list").hasClass("slick-initialized")) $(".feature-offer-card .categories-list").slick("unslick");
        return true
    }
    $(".feature-offer-card .categories-list").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1
    })
}

function timerInit() {
    var countDownDate = (new Date("22 Aug 2020 18:22:25")).getTime();
    var x = setInterval(function() {
        var now = (new Date).getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1E3 * 60 * 60 * 24));
        var hours = Math.floor(distance % (1E3 * 60 * 60 * 24) / (1E3 * 60 * 60));
        var minutes = Math.floor(distance % (1E3 * 60 * 60) / (1E3 * 60));
        var seconds = Math.floor(distance % (1E3 * 60) / 1E3);
        var timeRemains = "";
        if (days > 0) timeRemains += days + "d ";
        if (hours.toString().length == 1) hours = 0 + hours.toString();
        if (minutes.toString().length ==
            1) minutes = 0 + minutes.toString();
        if (seconds.toString().length == 1) seconds = 0 + seconds.toString();
        timeRemains += hours + "." + minutes + "." + seconds;
        $("span.remaining-time").text(timeRemains);
        if (distance < 0) {
            clearInterval(x);
            $("span.remaining-time").text("EXPIRED")
        }
    }, 1E3)
}
var index = 0;

function offerCardSlider() {
    nearby_offer_slider = $(".offer-card-slider").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $(".offer-card-slider .left-arr-btn-shop").click(function() {
        var index = +$(this).parent().parent().parent().parent().attr("data-slick-index") + 1;
        dataLayer.push({
            "event": "custom_event",
            "eventCategory": "HB_nearby_offers",
            "eventAction": "know_more_banner_click",
            "eventLabel": index + "_" + $(this).parent().parent().find("h4").text()
        })
    });
    $(".offer-card-slider .left-arr-btn").length > 0 && $(".offer-card-slider .left-arr-btn").click(function() {
        var index = +$(this).parent().parent().parent().parent().attr("data-slick-index") + 1;
        dataLayer.push({
            "event": "custom_event",
            "eventCategory": "HB_nearby_offers",
            "eventAction": "get_direction_banner_click",
            "eventLabel": index + "_" + $(this).parent().parent().find("h4").text()
        })
    })
}

function checkOffer() {
    var today = new Date;
    var offer_date = new Date(Date.parse($(".offer-tags span").text()));
    if (offer_date < today) {
        $(".offer-top-content").addClass("expired");
        $(".offer-expired-section").show()
    } else {
        $(".offer-top-content").removeClass("expired");
        $(".offer-expired-section").hide()
    }
}
if ($(".related-offers-slider .offer-card").length > 0) $(".related-offers-slider .offer-card").not(".slick-initialized").slick({
    dots: true,
    arrows: true,
    infinite: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 991,
        settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 768,
        settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
$(window).on("beforeunload", function() {
    $(".filter-top .filter-icon").off("click");
    $(".sort-tools .title").off("click");
    $(".star-review span").off("click");
    $(".sidebar-header .close, .sidebar-footer .apply").off("click");
    $(".offer-nav-tabs li").off("click");
    $(".offer-card .card-inner .card-title").off("click");
    $(".sb-brands .more-link").off("click");
    $(".sb-brands .heading h5").off("click");
    $(".brand-poupup .close").off("click");
    $(".brand-poupup-bottom .clear-all").off("click");
    $(".sidebar-footer .clear-all").off("click");
    $(".brand-poupup-bottom .apply").off("click");
    $(".sb-brands .filter-clear").off("click");
    $(".sb-payment .more-link").off("click");
    $(".sort-dropdown span").off("click");
    $(".sort-tools .sort-dropdown li").off("click");
    $(".sidebar-content .sb-categories li .menu-item").off("click");
    $(".sidebar-header .close").off("click")
});

function gaTrackingOfferPage() {
    $(".popular-allBrands").click(function() {
        dataLayer.push({
            "event": "custom_event",
            "eventCategory": "offer_zone",
            "eventAction": "view_all_popular_brands"
        })
    });
    $(".ga-brandList").click(function() {
        dataLayer.push({
            "event": "custom_event",
            "eventCategory": "offer_zone",
            "eventAction": "select_popular_brand",
            "eventLabel": $(this).attr("name").toLowerCase().replace(/ /g, "_")
        })
    });
    $(".popular-allCategories").click(function() {
        dataLayer.push({
            "event": "custom_event",
            "eventCategory": "offer_zone",
            "eventAction": "view_all_popular_categories"
        })
    });
    $(".ga-categoriesList").click(function() {
        dataLayer.push({
            "event": "custom_event",
            "eventCategory": "offer_zone",
            "eventAction": "select_popular_categories",
            "eventLabel": $(this).text().toLowerCase().replace(/ /g, "_")
        })
    });
    $(".nav.nav-tabs.offer-nav-tabs .offesTabComponent a").click(function() {
        dataLayer.push({
            "event": "custom_event",
            "eventCategory": "offer_zone",
            "eventAction": "offers_category_tab",
            "eventLabel": $(this).attr("data-tabtitles").toLowerCase().replace(/ /g,
                "_")
        })
    });
    $(".offer-card.shop-card a").click(function() {
        var eventLabel = $(".offer-card.shop-card a .card-inner .media img").attr("alt").replace(/ /g, "_");
        dataLayer.push({
            "event": "custom_event",
            "eventCategory": "offer_zone",
            "eventAction": "offers_category_tab",
            "eventLabel": eventLabel.toLowerCase()
        })
    });
    $("#filterSection .sb-offer-type .radio-list input").click(function() {
        dataLayer.push({
            "event": "custom_event",
            "eventCategory": "offer_zone",
            "eventAction": "filter_selected",
            "eventLabel": $(this).parent().text().toLowerCase().replace(/ /g,
                "_")
        })
    });
    $(".sb-categories .heading .link").click(function() {
        dataLayer.push({
            "event": "custom_event",
            "eventCategory": "offer_zone",
            "eventAction": "view_all_categories",
            "eventLabel": ""
        })
    });
    $(".contnet .dropdown .menu-item").click(function() {
        dataLayer.push({
            "event": "custom_event",
            "eventCategory": "offer_zone",
            "eventAction": "category_selected",
            "eventLabel": $(this).text().trim().toLowerCase().replace(/ /g, "_")
        })
    });
    $("#filterSection .checkbox-list.category-checkbox").click(function() {
        var topCategory = $(this).parent().parent().parent().parent().attr("id").trim().toLowerCase().replace(/ /g,
            "_");
        var checkboxName = $(this).text().trim().toLowerCase().replace(/ /g, "_");
        dataLayer.push({
            "event": "custom_event",
            "eventCategory": "offer_zone",
            "eventAction": topCategory,
            "eventLabel": checkboxName
        })
    });
    $(".sb-box .more-link").click(function() {
        dataLayer.push({
            "event": "custom_event",
            "eventCategory": "offer_zone",
            "eventAction": "show_more_brands",
            "eventLabel": ""
        })
    });
    $(".sb-brands .heading .link").click(function() {
        dataLayer.push({
            "event": "custom_event",
            "eventCategory": "offer_zone",
            "eventAction": "view_all_brands",
            "eventLabel": ""
        })
    });
    $("#brandListWrapper .checkbox-list.checkbox-popup-list").click(function() {
        dataLayer.push({
            "event": "custom_event",
            "eventCategory": "offer_zone",
            "eventAction": "brand_selected_apply",
            "eventLabel": $(this).text().trim().toLowerCase().replace(/ /g, "_")
        })
    })
}
$(document).ready(function() {
    var offerData = {
        cards: []
    };
    var popularOfferData = {
        PopularOffers: []
    };
    var searchPath = $("#filterSection").attr("data-searchPath");

    function generateHTML(brandIcon, remainingTime, cardTitle, cardDescription, viewCount, brandName, brandPageUrl, offerPageUrl, offerCategoryPageUrl, offerCategoryPageLinkText, liveSiteId) {
        var html = '\x3cdiv class\x3d"offer-card"\x3e\x3cdiv class\x3d"card-inner"\x3e\x3cdiv class\x3d"media"\x3e\x3ca href\x3d"' + offerPageUrl + '" target\x3d"_blank"\x3e\x3cimg src\x3d"' +
            brandIcon + '" alt\x3d"' + brandName + '" loading\x3d"lazy"\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"time"\x3e\x3cspan\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/offer/timer.svg" alt\x3d"time" loading\x3d"lazy"\x3e\x3c/span\x3e\x3cspan class\x3d"remaining-time" data-time\x3d"' + remainingTime + '"\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"content"\x3e\x3cdiv class\x3d"title"\x3e \x3ca href\x3d"' + offerPageUrl + '" target\x3d"_blank"\x3e' + cardTitle + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"description"\x3e \x3ca href\x3d"' +
            offerPageUrl + '" target\x3d"_blank"\x3e' + cardDescription + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"button-group"\x3e \x3ca href\x3d"' + offerPageUrl + '" target\x3d"_blank" class\x3d"ic-btn" name\x3d"' + cardDescription + '"\x3eKnow more\x3c/a\x3e\x3ca href\x3d"' + offerCategoryPageUrl + '" class\x3d"ic-more" target\x3d"_blank"\x3e' + offerCategoryPageLinkText + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"card-bottom"\x3e\x3cdiv class\x3d"date-readtime"\x3e\x3cspan class\x3d"num-viewer"\x3e' + viewCount + '\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"bookmark-share"\x3e\x3cdiv class\x3d"offerfav bookmark" offer-id\x3d' +
            liveSiteId + '\x3e\x3c/div\x3e\x3cdiv class\x3d"share" data-url\x3d"' + offerPageUrl + '" data-title\x3d"' + cardTitle + '" data-text\x3d"check out this link"\x3e\x3c/div\x3e\x3cdiv class\x3d"share-content"\x3e\x3cdiv class\x3d"inner-content"\x3e\x3cdiv class\x3d"share-header"\x3e\x3cp\x3eShare\x3c/p\x3e \x3cspan class\x3d"close-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg" alt\x3d"fb" loading\x3d"lazy"\x3e\x3c/span\x3e\x3c/div\x3e\x3cul class\x3d"share-link"\x3e\x3cli\x3e\x3ca href\x3d"https://api.whatsapp.com/send?url\x3d' +
            window.location.host + offerPageUrl + "?\x26text\x3d" + cardTitle + '" target\x3d"_blank"\x3e \x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp.svg" alt\x3d"whatsapp" loading\x3d"lazy"\x3e\x3c/span\x3e\x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp-o.svg" alt\x3d"whatsapp" loading\x3d"lazy"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d"https://www.facebook.com/sharer/sharer.php?u\x3d' +
            window.location.host + offerPageUrl + "?\x26text\x3d" + cardTitle + '" target\x3d"_blank"\x3e \x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg" alt\x3d"fb" loading\x3d"lazy"\x3e\x3c/span\x3e\x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg" alt\x3d"fb" loading\x3d"lazy"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d"https://twitter.com/intent/tweet?url\x3d' +
            window.location.host + offerPageUrl + "?\x26text\x3d" + encodeURI(cardTitle) + '" target\x3d"_blank"\x3e \x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg" alt\x3d"tw" loading\x3d"lazy"\x3e\x3c/span\x3e\x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg" alt\x3d"tw" loading\x3d"lazy"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d"https://www.linkedin.com/shareArticle?mini\x3dtrue?url\x3d' +
            window.location.host + offerPageUrl + "?\x26text\x3d" + cardTitle + '" target\x3d"_blank"\x3e \x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg" alt\x3d"ln" loading\x3d"lazy"\x3e\x3c/span\x3e\x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg" alt\x3d"ln" loading\x3d"lazy"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d"youtube-text" style\x3d"display:none;"\x3e\x3cinput type\x3d"text" name\x3d"link" value\x3d"' +
            window.location.host + offerPageUrl + '"\x3e\x3cspan\x3eCopy\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e';
        return html
    }

    function generateOfferListItems(offerData) {
        var html = "",
            offerCardGroupCount = 6;
        for (var index$14 = 0; index$14 < offerData.length; index$14++) {
            if (index$14 % offerCardGroupCount == 0)
                if (index$14 >= offerCardGroupCount) html += '\x3cdiv class\x3d"offer-list hidden-card"\x3e';
                else html += '\x3cdiv class\x3d"offer-list"\x3e';
            html += generateHTML(offerData[index$14]["offerImage"],
                offerData[index$14]["endDate"], offerData[index$14]["offerTitle"], offerData[index$14]["offerDesp1"] ? offerData[index$14]["offerDesp1"] : "" + " " + offerData[index$14]["offerDesp2"] ? offerData[index$14]["offerDesp2"] : "" + " " + offerData[index$14]["offerDesp3"] ? offerData[index$14]["offerDesp3"] : "" + " " + offerData[index$14]["offerDesp4"] ? offerData[index$14]["offerDesp4"] : "", offerData[index$14]["offerViews"], offerData[index$14]["brandName"], offerData[index$14]["brandLink"] ? offerData[index$14]["brandLink"] : "#", offerData[index$14]["pagePath"] ?
                offerData[index$14]["pagePath"] : "#", offerData[index$14]["categoryLink"] ? offerData[index$14]["categoryLink"] : "#", offerData[index$14]["categoryName"] ? "View " + offerData[index$14]["categoryName"] + " Offers" : "View Offers", offerData[index$14]["offerId"] ? offerData[index$14]["offerId"] : "");
            if (index$14 % offerCardGroupCount == offerCardGroupCount - 1) html += "\x3c/div\x3e"
        }
        if (html.length > 0) {
            $("#offerListWrapper").html(html);
            $(".filter-top .sort-tools").removeClass("disable-sorting");
            getRemainingTime();
            modifyPreviousLikedOffers()
        } else {
            $("#offerListWrapper").html('\x3cdiv class\x3d"no-result"\x3e\x3c/div\x3e');
            $(".filter-top .sort-tools").addClass("disable-sorting")
        }
        $("#offerListWrapper .button-group a.ic-btn").click(function(e) {
            dataLayer.push({
                event: "custom_event",
                eventCategory: "offer_zone",
                eventAction: "know_more",
                eventLabel: $(this).attr("name").toLowerCase().replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "_")
            })
        })
    }

    function custom_sort_date(a, b) {
        return (new Date(a.startDate)).getTime() - (new Date(b.startDate)).getTime()
    }

    function custom_sort_view(a, b) {
        return a.offerViews - b.offerViews
    }

    function custom_sort_like(a, b) {
        return (new Date(a.Likes)).getTime() -
            (new Date(b.Likes)).getTime()
    }

    function getRemainingTime() {
        $("span.remaining-time").each(function(element) {
            var thisItem = $(this);
            var countDownDate = moment($(this).attr("data-time")).valueOf();
            var x = setInterval(function() {
                var now = (new Date).getTime();
                var distance = countDownDate - now;
                var days = Math.floor(distance / (1E3 * 60 * 60 * 24));
                var hours = Math.floor(distance % (1E3 * 60 * 60 * 24) / (1E3 * 60 * 60));
                var minutes = Math.floor(distance % (1E3 * 60 * 60) / (1E3 * 60));
                var seconds = Math.floor(distance % (1E3 * 60) / 1E3);
                var timeRemains = "";
                if (days >
                    0) timeRemains += days + "d ";
                if (hours.toString().length == 1) hours = 0 + hours.toString();
                if (minutes.toString().length == 1) minutes = 0 + minutes.toString();
                if (seconds.toString().length == 1) seconds = 0 + seconds.toString();
                timeRemains += hours + "." + minutes + "." + seconds;
                thisItem.text(timeRemains);
                if (distance < 0) {
                    clearInterval(x);
                    thisItem.text("EXPIRED")
                }
            }, 1E3)
        })
    }
    var o, h, e = [],
        m = [];

    function modifyPreviousLikedOffers() {
        o = localStorage.getItem("OfferIdsFav");
        h = localStorage.getItem("HandpickedIdsFav");
        e = [];
        m = [];
        var hArry = [];
        if (typeof o !=
            "undefined")
            if (o != null && o != "") {
                var s = o.split(",");
                for (var k = 0; k < s.length; k++) {
                    m.push(s[k]);
                    e.push(s[k])
                }
                for (var k = 0; k < m.length; k++) {
                    $('.offerfav.bookmark[offer-id\x3d"' + m[k] + '"]').addClass("active");
                    $('.offerfav.bookmark[offer-id\x3d"' + m[k] + '"]').parent().parent().parent().parent().parent().addClass("favouirite");
                    $('.offerfav.bookmark[offer-id\x3d"' + m[k] + '"]').css({
                        background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
                    })
                }
            }
        if (typeof h !=
            "undefined") {
            var handp = [];
            if (h != null && h != "") {
                var s = h.split(",");
                for (var k = 0; k < s.length; k++) {
                    handp.push(s[k]);
                    e.push(s[k])
                }
                for (var k = 0; k < m.length; k++) {
                    $('.offerfav.bookmark[offer-id\x3d"' + handp[k] + '"]').addClass("active");
                    $('.offerfav.bookmark[offer-id\x3d"' + handp[k] + '"]').parent().parent().parent().parent().parent().addClass("favouirite");
                    $('.offerfav.bookmark[offer-id\x3d"' + handp[k] + '"]').css({
                        background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
                    })
                }
            }
        }
    }
    $(document).on("click", ".filter-offer-section .offerfav.bookmark", function(f) {
        var c = $(this).attr("offer-id");
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(this).css({
                background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
            });
            e.push(c);
            e = g(e);
            b()
        } else {
            var a = localStorage.OfferIdsFav.split(",");
            a = g(a);
            $(this).removeClass("active");
            $(this).css({
                background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/bookmark.svg) no-repeat 0 0%"
            });
            a.splice($.inArray(c, a), 1);
            e = g(a);
            b()
        }
    });

    function b() {
        localStorage.setItem("OfferIdsFav", e)
    }

    function g(c) {
        var a = [];
        $.each(c, function(f, h) {
            if ($.inArray(h, a) == -1) a.push(h)
        });
        return a
    }

    function p(a) {
        return a.filter(function(h, f, c) {
            return f == c.indexOf(h)
        })
    }

    function favourite() {
        var o = localStorage.getItem("OfferIdsFav");
        var e = [];
        var m = [];
        if (typeof o != "undefined")
            if (o != null && o != "") {
                var s = o.split(",");
                for (var k = 0; k < s.length; k++) {
                    m.push(s[k]);
                    e.push(s[k])
                }
                for (var k = 0; k < m.length; k++) {
                    $('.offerfav.bookmark[offer-id\x3d"' +
                        m[k] + '"]').addClass("active");
                    $('.offerfav.bookmark[offer-id\x3d"' + m[k] + '"]').parent().parent().parent().parent().parent().addClass("favouirite");
                    $('.offerfav.bookmark[offer-id\x3d"' + m[k] + '"]').css({
                        background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
                    })
                }
            }
    }

    function uniqueData(array, property) {
        var unique = {};
        var distinct = [];
        for (var i in array) {
            if (typeof unique[array[i][property]] == "undefined") distinct.push(array[i]);
            unique[array[i][property]] =
                0
        }
        return distinct
    }
    if (searchPath) {
        var url = "/content/icicibank.offersearch.json?searchPath\x3d" + searchPath + "\x26start\x3d0";
        $.ajax({
            url: url,
            success: function(data) {
                if (data && data.cards) {
                    offerData = data;
                    for (var i = 0; i < offerData["cards"].length; i++)
                        if (offerData["cards"][i].PopularOffersShow == 1) popularOfferData.PopularOffers.push(offerData["cards"][i]);
                    sortCards(offerData["cards"])
                }
            },
            error: function(jqXHR, statusText, errorThrown) {
                console.log(errorThrown)
            }
        })
    }
    var tempArray = [];
    var nfilters = [];
    $(".filter-offer-section .filter-content .search-box-area input").focus(function() {
        $(".filter-content .search-box-area input").val("")
    });
    $(".filter-offer-section .filter-content .search-box-area input").keyup(function() {
        var inputText = $(this)[0].value;
        if (inputText.length > 0) {
            var titleArray = searchItems(offerData["cards"], "offerTitle", inputText);
            var descArray = searchItems(offerData["cards"], "offerDesp1", inputText);
            var brandArray = searchItems(offerData["cards"], "brandName", inputText);
            var resultArray = titleArray.concat(descArray, brandArray);
            resultArray = uniqueData(resultArray, "offerId");
            sortCards(resultArray)
        } else sortCards(offerData["cards"])
    });
    $(".filter-offer-section .sb-categories #all").click(function() {
        renderOfferCards("all")
    });
    if ($(window).width() < 991) $(".filter-offer-section .sb-categories #all").attr("target", "_blank");
    $(".filter-offer-section input[name\x3d'offer-type']").click(function() {
        if ($(this).hasClass("current-active")) return false;
        $("input[name\x3d'offer-type']").removeClass("current-active");
        $(this).addClass("current-active");
        if (this.value == "popular_Offers") sortCards(popularOfferData["PopularOffers"]);
        else if (this.value ==
            "liked") {
            tempArray = [];
            var o = localStorage.getItem("OfferIdsFav");
            var handp = localStorage.getItem("HandpickedIdsFav");
            var e = [];
            var m = [];
            var h = [];
            var favID = [];
            if (typeof o != "undefined")
                if (o != null && o != "") {
                    var s = o.split(",");
                    for (var k = 0; k < s.length; k++) {
                        m.push(s[k]);
                        e.push(s[k])
                    }
                    for (var k = 0; k < m.length; k++)
                        if (typeof offerData["cards"] != "undefined")
                            if (offerData["cards"] != null && offerData["cards"] != "")
                                for (var ind = 0; ind < offerData["cards"].length; ind++) {
                                    var element = offerData["cards"][ind];
                                    if (element["offerId"] ==
                                        m[k]) tempArray.push(element)
                                }
                }
            if (typeof handp != "undefined")
                if (handp != null && handp != "") {
                    var splt = handp.split(",");
                    for (var k = 0; k < splt.length; k++) {
                        h.push(splt[k]);
                        e.push(splt[k])
                    }
                    for (var k = 0; k < h.length; k++) {
                        if (typeof popularOfferData["PopularOffers"] != "undefined")
                            if (popularOfferData["PopularOffers"] != null && popularOfferData["PopularOffers"] != "")
                                for (var index$15 = 0; index$15 < popularOfferData["PopularOffers"].length; index$15++) {
                                    var element = popularOfferData["PopularOffers"][index$15];
                                    if (element["offerId"] ==
                                        h[k]) {
                                        favID.push[element["offerId"]];
                                        tempArray.push(element)
                                    }
                                }
                        if (typeof offerData["cards"] != "undefined")
                            if (offerData["cards"] != null && offerData["cards"] != "")
                                for (var ind$16 = 0; ind$16 < offerData["cards"].length; ind$16++) {
                                    var element = offerData["cards"][ind$16];
                                    if (element["offerId"] == h[k]) {
                                        favID.push[element["offerId"]];
                                        tempArray.push(element)
                                    }
                                }
                    }
                }
            var uniqueTempArray = [].concat($jscomp.arrayFromIterable(new Set(tempArray)));
            sortCards(uniqueTempArray);
            favourite()
        } else renderOfferCards(this.value)
    });
    $(document).on("click",
        ".filter-offer-section .sidebar-content .category-checkbox.checkbox-list input, .filter-offer-section .sidebar-content .brand-checkbox.checkbox-list input",
        function() {
            $(".filter-offer-section .filter-content .filter-cat").show();
            $(".filter-offer-section .filter-content .filter-cat").addClass("active");
            if ($(window).width() > 991) createFilterArrayForOffers()
        });
    $(document).on("click", ".filter-offer-section .sidebar-content .paymentgateway.checkbox-list input", function(event) {
        var redLink = $(this).val();
        window.open(redLink);
        event.preventDefault()
    });
    $(document).on("click", ".filter-offer-section .sidebar-content .checkbox-popup-list input", function() {
        $(".filter-content .filter-cat").show();
        $(".filter-content .filter-cat").addClass("active")
    });
    $(".filter-offer-section .brand-poupup-bottom .apply").click(function() {
        createFilterArrayForOffers();
        $("html, body").animate({
            scrollTop: $("#filterSection").offset().top - $("header").height()
        })
    });

    function createFilterArrayForOffers() {
        nfilters = [];
        $.each($(".filter-offer-section .sidebar-content .checkbox-list input:checked"),
            function() {
                if (nfilters.indexOf($(this).val()) == -1) nfilters.push($(this).val())
            });
        $.each($(".filter-offer-section .sidebar-content .checkbox-popup-list input:checked"), function() {
            if (nfilters.indexOf($(this).val()) == -1) nfilters.push($(this).val())
        });
        if (nfilters.length == 0) {
            if ($(window).width() <= 991) {
                $(".feature-offer-section").show();
                $(".announcement-section").show();
                $(".filter-inner-container").removeClass("active");
                $(".filter-top").removeClass("filter-selected");
                $(".filter-top").removeClass("filter-sticky")
            }
            $(".filter-content .filter-cat").hide();
            $(".filter-content .filter-cat").removeClass("active");
            sortCards(offerData["cards"]);
            generateFilterTags("#offerFilterTags", "")
        } else {
            generateFilterTags("#offerFilterTags", nfilters);
            renderOfferCards()
        }
        $(".offer-getDirection").click(function() {
            var filterIndex = +$(this).attr("index") + 1;
            dataLayer.push({
                "event": "custom_event",
                "eventCategory": "CB_nearby_offers",
                "eventAction": "get_direction_banner_click",
                "eventLabel": filterIndex + "_" + $(this).attr("name")
            })
        })
    }

    function renderOfferCards(filterId) {
        tempArray = [];
        if (filterId == "all") sortCards(offerData["cards"]);
        else {
            for (var index$17 = 0; index$17 < offerData["cards"].length; index$17++) {
                var element = offerData["cards"][index$17];
                if (element["Category"] == filterId || element["Type"].replace(/ /g, "_").toLowerCase() == filterId) tempArray.push(element);
                if (nfilters.indexOf(element["brandId"]) != -1 || multiTagCategoryCheck(element["Category"])) tempArray.push(element)
            }
            sortCards(tempArray)
        }
    }

    function multiTagCategoryCheck(catergories) {
        var categoryExist = false,
            catArr = catergories.split(",");
        for (var i$18 = 0, len = catArr.length; i$18 < len; i$18++)
            if (nfilters.indexOf(catArr[i$18]) != -1) {
                categoryExist = true;
                break
            }
        return categoryExist
    }
    $(document).on("click", ".filter-offer-section .filter-cat img", function() {
        var removefilterId = $(this).closest("span").attr("data-filter");
        $("[value\x3d" + removefilterId + "]").prop("checked", false);
        $("[value\x3d" + removefilterId + "]").closest("li").removeClass("active");
        createFilterArrayForOffers()
    });
    $(document).on("click", ".filter-offer-section .filter-cat .filter-clear",
        function() {
            $(".sidebar-content .checkbox-list input").prop("checked", false);
            $(".sidebar-content .checkbox-list input").closest("li").removeClass("active");
            createFilterArrayForOffers()
        });
    $(".filter-offer-section .sidebar-header .close").click(function() {
        $(".filter-content .filter-cat").hide();
        $(".filter-content .filter-cat").removeClass("active");
        $(".sidebar-content .checkbox-list input").prop("checked", false);
        $(".sidebar-content .checkbox-list input").closest("li").removeClass("active");
        $(this).parent().removeClass("active")
    });
    $(".filter-offer-section .sidebar-footer .apply").click(function() {
        setTimeout(function() {
            createFilterArrayForOffers()
        }, 500)
    });
    $(".filter-offer-section .sort-dropdown .dropdown-inner li").click(function() {
        if (tempArray.length > 0) sortCards(tempArray);
        else sortCards(offerData["cards"])
    });

    function sortCards(dataArray) {
        var sortId = $(".sort-dropdown .dropdown-inner li.active").attr("id");
        if (sortId == "latest") {
            dataArray.sort(custom_sort_date);
            dataArray.reverse()
        } else if (sortId == "oldest") dataArray.sort(custom_sort_date);
        else if (sortId == "viewed") {
            dataArray.sort(custom_sort_view);
            dataArray.reverse()
        } else if (sortId == "liked") {
            dataArray.sort(custom_sort_like);
            dataArray.reverse()
        }
        generateOfferListItems(dataArray)
    }
});
$(document).ready(function() {
    var itemBrandArray = {
        "brands": []
    };
    var brandSearchPath = $("#filterSection").attr("data-brandSearchPath");
    var url = "/content/icicibank.brandsearch.json?searchPath\x3d" + brandSearchPath + "\x26start\x3d0";
    if (brandSearchPath) $.ajax({
        url: url,
        success: function(data) {
            if (data && data.brands) itemBrandArray = data;
            generatePopupListItems(itemBrandArray.brands)
        },
        error: function(jqXHR, statusText, errorThrown) {
            console.log(errorThrown)
        }
    });
    $(".filter-offer-section .sidebar-content .sb-brands .search-box-area input").focus(function() {
        $(".sidebar-content .sb-brands .brand-poupup").show();
        generatePopupListItems(itemBrandArray.brands)
    });
    $(".filter-offer-section .sb-brands .more-link").click(function() {
        generatePopupListItems(itemBrandArray.brands)
    });
    $(".filter-offer-section .sidebar-content .sb-brands .search-box-area input").keyup(function() {
        var inputText = $(this)[0].value;
        if (inputText.length > 0) generatePopupListItems(searchItems(itemBrandArray.brands, "BrandTitle", inputText));
        else generatePopupListItems(itemBrandArray.brands)
    })
});

function generatePopupListItems(requestsData) {
    var html = "",
        mostPopularArray = [],
        sectionArray = [];
    if (requestsData) {
        for (var index$19 = 0; index$19 < requestsData.length; index$19++) {
            var element = requestsData[index$19];
            if (element["PopularBrand"] && element["PopularBrand"].toLowerCase() == "true") mostPopularArray.push(element)
        }
        if (mostPopularArray.length > 0) {
            var popularBrandHtml = "";
            html += '\x3cdiv class\x3d"list list-title"\x3e\x3ch4\x3ePOPULAR\x3c/h4\x3e\x3c/div\x3e';
            for (var index$20 = 0; index$20 < mostPopularArray.length; index$20++) {
                popularBrandHtml +=
                    '\x3clabel id\x3d"checkboxID' + (index$20 + 1) + '" class\x3d"checkbox-list brand-checkbox"\x3e' + mostPopularArray[index$20].BrandTitle + '\x3cinput type\x3d"checkbox" value\x3d"' + mostPopularArray[index$20].BrandId + '"\x3e\x3cspan class\x3d"checkmark"\x3e\x3c/span\x3e\x3c/label\x3e';
                html += generateBrandHTML(mostPopularArray[index$20]["BrandTitle"], mostPopularArray[index$20]["BrandId"])
            }
            $("#popular-brands-filter").empty().append(popularBrandHtml)
        }
        if (requestsData.length > 0) {
            requestsData.sort(compare);
            for (var index$21 =
                    0; index$21 < requestsData.length; index$21++)
                if (requestsData[index$21]["BrandId"]) {
                    var secTitle = requestsData[index$21]["BrandTitle"] ? requestsData[index$21]["BrandTitle"].charAt(0).toUpperCase() : "";
                    if (sectionArray.indexOf(secTitle) == -1) {
                        sectionArray.push(secTitle);
                        html += '\x3cdiv class\x3d"list list-title"\x3e\x3ch4\x3e' + secTitle + "\x3c/h4\x3e\x3c/div\x3e"
                    }
                    html += generateBrandHTML(requestsData[index$21]["BrandTitle"], requestsData[index$21]["BrandId"])
                }
        }
    }
    $("#brandListWrapper").html(html);
    $(".filter-offer-section .brand-poupup .brand-nav li").removeClass("ln-disabled");
    $.each($(".brand-poupup .brand-nav li"), function() {
        if ($(this).text() && sectionArray.indexOf($(this).text().toUpperCase()) == -1) $(this).addClass("ln-disabled")
    });
    var timeout = null;
    $(document).on("click", ".filter-offer-section .brand-poupup .brand-nav li", function() {
        if (timeout != null) clearTimeout(timeout);
        var selectedChar = $(this).text();
        var flag = false;
        $(".brand-poupup .brand-poupup-middle .list").addClass("ln-disabled");
        $(".brand-poupup .brand-poupup-middle .list h4").removeClass("ln-active");
        $.each($(".brand-poupup .brand-poupup-middle .list"),
            function() {
                if ($(this).text() && $(this).text().toUpperCase() == selectedChar) flag = true;
                if ($(this).text() && $(this).text().toUpperCase().charAt(0) == selectedChar.toUpperCase() && flag) {
                    $(this).removeClass("ln-disabled");
                    $(this).find("h4").addClass("ln-active")
                }
            });
        timeout = setTimeout(function() {
            $(".brand-poupup-middle").scrollCenterORI(".ln-active", 500)
        }, 200)
    })
}

function generateBrandHTML(cardTitle, cardBrandId) {
    var checkBoxValue = cardBrandId;
    var html = '\x3cdiv class\x3d"list"\x3e\x3clabel class\x3d"checkbox-list checkbox-popup-list"\x3e' + cardTitle + '\x3cinput type\x3d"checkbox" value\x3d"' + checkBoxValue + '"\x3e\x3cspan class\x3d"checkmark"\x3e\x3c/span\x3e\x3c/label\x3e\x3c/div\x3e';
    return html
}

function compare(a, b) {
    if (a.BrandTitle.toUpperCase() < b.BrandTitle.toUpperCase()) return -1;
    if (a.BrandTitle.toUpperCase() > b.BrandTitle.toUpperCase()) return 1;
    return 0
}
if ($(".siteCapture").length > 0 && $(document).width() > 980) {
    $(".siteCaptureContent").css("display", "block");
    $(".siteCaptureContent #popup-modal-background").addClass("active");
    $(".siteCaptureContent #popup-modal-content").addClass("active")
}
$(".siteCapture .siteCaptureContent div#modal-close").click(function() {
    $(".siteCaptureContent #popup-modal-content,.siteCaptureContent #popup-modal-background").remove()
});
if ($(document).width() < 980 && $(".mob_siteCapture").length > 0) {
    $(".mob_siteCapture").css("display", "block");
    $(".mob_siteCapture #popup-modal-background").addClass("active");
    $(".mob_siteCapture #popup-modal-content").addClass("active")
}
$(".mob_siteCapture #popup-modal-content div#modal-close").click(function() {
    $(".mob_siteCapture #popup-modal-content,.mob_siteCapture #popup-modal-background").remove()
});
(function() {
    $(".additional-content-slider").slick({
        dots: !0,
        arrows: !0,
        infinite: !0,
        autoplay: !0,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $(".additional-content-tab .nav-tabs li a").on("click", function() {
        $(".additional-content-wrapper .slick-slider").slick("refresh")
    })
})();
$(document).ready(function() {
    if ($(".additionalcontent .section-inner .section-title").is(":empty")) $(".additionalcontent .section-inner .section-title").remove()
});
$(document).ready(function() {
    var videoJson = "/content/icicibank.videosdata.json";
    var videoId = $(".related-video").attr("data-videoid");
    var videoSubCategory = $(".related-video").attr("data-videosubcategory");
    var counter = 0;
    if (typeof videoId != "undefined" && typeof videoSubCategory != "undefined")
        if (videoId != null && videoId != "" && videoSubCategory != null && videoSubCategory != "") $.getJSON(videoJson, function(resultJSON) {
            var videoData = resultJSON.Videodata;
            var $jscomp$loop$68 = {};
            $jscomp$loop$68.$jscomp$loop$prop$index$22$69 =
                0;
            for (; $jscomp$loop$68.$jscomp$loop$prop$index$22$69 < videoData.length; $jscomp$loop$68 = {
                    $jscomp$loop$prop$index$22$69: $jscomp$loop$68.$jscomp$loop$prop$index$22$69
                }, $jscomp$loop$68.$jscomp$loop$prop$index$22$69++) {
                var videotitle = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["videotitle"];
                var videoid = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["videoid"];
                var type = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["type"];
                var category = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["category"];
                var subcategory = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["subcategory"];
                var thumbnailimage = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["thumbnailimage"];
                var referencelink = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["referencelink"];
                var detailpage = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["detailpagelink"];
                var descriptionone = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["descriptionone"];
                var descriptiontwo = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["descriptiontwo"];
                var descriptionthree = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["descriptionthree"];
                var cta1 = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["cta1"];
                var cta1link = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["cta1link"];
                var cta2 = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["cta2"];
                var cta2link = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["cta2link"];
                var cta3 = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["cta3"];
                var cta3link = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["cta3link"];
                var views = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["views"];
                var likes = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["likes"];
                var publishdate = videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["publishdate"];
                if (typeof videotitle != "undefined") {
                    if (videotitle != "") videotitle = videotitle
                } else videotitle = "";
                if (typeof videoid != "undefined") {
                    if (videoid != "") videoid = videoid
                } else videoid = "";
                if (typeof type != "undefined") {
                    if (type != "") type = type
                } else type = "";
                if (typeof category != "undefined") {
                    if (category !=
                        "") category = category
                } else category = "";
                if (typeof subcategory != "undefined") {
                    if (subcategory != "") subcategory = subcategory
                } else subcategory = "";
                if (typeof thumbnailimage != "undefined") {
                    if (thumbnailimage != "") thumbnailimage = thumbnailimage
                } else thumbnailimage = "";
                if (typeof referencelink != "undefined") {
                    if (referencelink != "") referencelink = '\x3ca class\x3d"pdf" href\x3d"' + referencelink + '" target\x3d"_blank"\x3e\x3c/a\x3e'
                } else referencelink = "";
                if (typeof detailpage != "undefined") {
                    if (detailpage != "") detailpage = detailpage
                } else detailpage =
                    "";
                if (typeof views != "undefined") {
                    if (views != "") views = '\x3cspan class\x3d"num-viewer"\x3e' + intToString(views) + " \x3c/span\x3e"
                } else views = "0";
                if (typeof likes != "undefined") {
                    if (likes != "") likes = '\x3cspan class\x3d"like"\x3e' + intToString(likes) + " Likes \x3c/span\x3e"
                } else likes = "";
                if (typeof publishdate != "undefined") {
                    if (publishdate != "") publishdate = '\x3cspan class\x3d"date"\x3e' + getTimePassed(publishdate) + "\x3c/span\x3e"
                } else publishdate = "";
                if (videoId == videoid) {
                    var getPublishDate = function($jscomp$loop$68) {
                        return function() {
                            return videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["publishdate"].split("T")[0]
                        }
                    }($jscomp$loop$68);
                    $(".top-content-left").append('\x3cdiv class\x3d"tag-list"\x3e\x3cspan\x3e' + category + "\x3c/span\x3e\x3cspan\x3e" + subcategory + "\x3c/span\x3e\x3c/div\x3e\x3ch1\x3e" + videotitle + '\x3c/h1\x3e\x3cdiv class\x3d"date-readtime"\x3e' + publishdate + "" + views + "" + likes + "\x3c/div\x3e");
                    $(".top-content-right").append('\x3cdiv class\x3d"bookmark-share"\x3e' + referencelink + '\x3cdiv class\x3d"bookmark" video-id\x3d"' + videoid + '"\x3e\x3c/div\x3e\x3cdiv class\x3d"share"\x3e\x3c/div\x3e\x3cdiv class\x3d"share-content"\x3e\x3cdiv class\x3d"inner-content"\x3e\x3cdiv class\x3d"share-header"\x3e\x3cp\x3eShare\x3c/p\x3e\x3cspan class\x3d"close-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg" alt\x3d"fb" /\x3e\x3c/a\x3e\x3c/span\x3e\x3c/div\x3e\x3cul class\x3d"share-link"\x3e\x3cli\x3e\x3ca href\x3d"https://api.whatsapp.com/send?url\x3d' +
                        window.location.host + detailpage + "\x26text\x3d" + videotitle + '" target\x3d"_blank" tabindex\x3d"0"\x3e\x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp.svg" alt\x3d"whatsapp"\x3e\x3c/span\x3e \x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg" alt\x3d"whatsapp"\x3e \x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d"https://www.facebook.com/sharer/sharer.php?u\x3d' +
                        window.location.host + detailpage + "\x26text\x3d" + videotitle + '" target\x3d"_blank" tabindex\x3d"0"\x3e \x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg" alt\x3d"fb"\x3e\x3c/span\x3e\x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg"alt\x3d"fb"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d"https://twitter.com/intent/tweet?url\x3d' +
                        window.location.host + detailpage + "\x26text\x3d" + encodeURI(videotitle) + '" target\x3d"_blank" tabindex\x3d"0"\x3e\x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg" alt\x3d"tw"\x3e\x3c/span\x3e\x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg" alt\x3d"tw"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d"https://www.linkedin.com/shareArticle?mini\x3dtrue?url\x3d' +
                        window.location.host + detailpage + "\x26text\x3d" + videotitle + '" target\x3d"_blank" tabindex\x3d"0"\x3e\x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg" alt\x3d"ln"\x3e\x3c/span\x3e\x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg" alt\x3d"ln"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d"youtube-text"\x3e\x3cinput type\x3d"text"  name\x3d"link" id\x3d"video-detail" value\x3d"https://www.youtube.com/watch?v\x3d' +
                        videoid + "\" /\x3e\x3cspan id\x3d\"btn-video-detail\" onclick\x3d\"copyCode('video-detail','btn-video-detail','input')\"\x3eCopy\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e");
                    if (typeof descriptionone != "undefined") {
                        if (descriptionone != "") descriptionone = descriptionone
                    } else descriptionone = "";
                    if (typeof descriptiontwo != "undefined") {
                        if (descriptiontwo != "") descriptiontwo = descriptiontwo
                    } else descriptiontwo = "";
                    if (typeof descriptionthree != "undefined") {
                        if (descriptionthree != "") descriptionthree =
                            descriptionthree
                    } else descriptionthree = "";
                    $(".vd-description .bottom-content .desc").append("\x3cp\x3e" + descriptionone + '\x3c/p\x3e\x3cdiv class\x3d"read-more-less"\x3e\x3cp\x3e' + descriptiontwo + "\x3c/p\x3e\x3cp\x3e" + descriptionthree + "\x3c/p\x3e\x3c/div\x3e");
                    if (typeof cta1 != "undefined") {
                        if (cta1 != "") cta1 = cta1
                    } else cta1 = "";
                    if (typeof cta2 != "undefined") {
                        if (cta2 != "") cta2 = cta2
                    } else cta2 = "";
                    if (typeof cta3 != "undefined") {
                        if (cta3 != "") cta3 = cta3
                    } else cta3 = "";
                    if (typeof cta1link != "undefined")
                        if (cta1link != "") $(".add_button").append('\x3ca target\x3d"_blank" href\x3d"' +
                            cta1link + '" class\x3d"ic-btn"\x3e' + cta1 + "\x3c/a\x3e");
                    if (typeof cta2link != "undefined")
                        if (cta2link != "") $(".add_button").append('\x3ca target\x3d"_blank" href\x3d"' + cta2link + '" class\x3d"ic-more" \x3e' + cta2 + "\x3c/a\x3e");
                    if (typeof cta3link != "undefined")
                        if (cta3link != "") $(".add_button").append('\x3ca target\x3d"_blank" href\x3d"' + cta3link + '" class\x3d"ic-btn"\x3e' + cta3 + "\x3c/a\x3e")
                }
                if (videoSubCategory == videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["subcategory"])
                    if (counter < 4)
                        if (videoId != videoData[$jscomp$loop$68.$jscomp$loop$prop$index$22$69]["videoid"]) {
                            counter++;
                            var x = "\x3cdiv class\x3d'video-card'\x3e\x3cdiv class\x3d'card-inner'\x3e\x3cdiv class\x3d'media'\x3e\x3cimg src\x3d'" + thumbnailimage + "' alt\x3d'video'/\x3e\x3ca target\x3d'_blank' href\x3d'" + detailpage + "' class\x3d'play-btn'\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'content'\x3e\x3ch3\x3e\x3ca target\x3d'_blank' href\x3d'" + detailpage + "' class\x3d'card-title'\x3e" + videotitle + "\x3c/a\x3e\x3c/h3\x3e\x3cdiv class\x3d'card-bottom'\x3e\x3cdiv class\x3d'date-readtime'\x3e\x3cspan class\x3d'date'\x3e" +
                                publishdate + "\x3c/span\x3e" + views + "\x3c/div\x3e\x3cdiv class\x3d'bookmark-share'\x3e" + referencelink + "\x3cdiv class\x3d'bookmark' video-id\x3d'" + videoid + "'\x3e\x3c/div\x3e\x3cdiv class\x3d'share'\x3e\x3c/div\x3e\x3cdiv class\x3d'share-content'\x3e\x3cdiv class\x3d'inner-content'\x3e\x3cdiv class\x3d'share-header'\x3e\x3cp\x3eShare\x3c/p\x3e\x3cspan class\x3d'close-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg' alt\x3d'fb' /\x3e\x3c/a\x3e\x3c/span\x3e\x3c/div\x3e\x3cul class\x3d'share-link'\x3e\x3cli\x3e\x3ca href\x3d'https://api.whatsapp.com/send?url\x3d" +
                                window.location.host + detailpage + "\x26text\x3d" + videotitle + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp.svg' alt\x3d'whatsapp'\x3e\x3c/span\x3e \x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg' alt\x3d'whatsapp'\x3e \x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://www.facebook.com/sharer/sharer.php?u\x3d" +
                                window.location.host + detailpage + "\x26text\x3d" + videotitle + "' target\x3d'_blank' tabindex\x3d'0'\x3e \x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg' alt\x3d'fb'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg'alt\x3d'fb'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://twitter.com/intent/tweet?url\x3d" +
                                window.location.host + detailpage + "\x26text\x3d" + encodeURI(videotitle) + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg' alt\x3d'tw'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg' alt\x3d'tw'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://www.linkedin.com/shareArticle?mini\x3dtrue?url\x3d" +
                                window.location.host + detailpage + "\x26text\x3d" + videotitle + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg' alt\x3d'ln'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg' alt\x3d'ln'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'youtube-text'\x3e\x3cinput type\x3d'text' id\x3d'related-video" +
                                $jscomp$loop$68.$jscomp$loop$prop$index$22$69 + "' name\x3d'link' value\x3d'https://www.youtube.com/watch?v\x3d" + videoid + "' /\x3e\x3cspan id\x3d'btn-related-video" + $jscomp$loop$68.$jscomp$loop$prop$index$22$69 + "' onclick\x3d\"copyCode('related-video" + $jscomp$loop$68.$jscomp$loop$prop$index$22$69 + "','btn-related-video" + $jscomp$loop$68.$jscomp$loop$prop$index$22$69 + "','input')\"\x3eCopy\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
                            $(".related-video-inner").append(x)
                        }
            }
            $("body").mouseup(function() {
                $(".share-content").removeClass("active")
            });
            var o = localStorage.getItem("videoIdsFav");
            var e = [];
            var m = [];
            if (typeof o != "undefined")
                if (o != null && o != "") {
                    var s = o.split(",");
                    for (var k = 0; k < s.length; k++) {
                        m.push(s[k]);
                        e.push(s[k])
                    }
                    for (var k = 0; k < m.length; k++) {
                        $('.bookmark[video-id\x3d"' + m[k] + '"]').addClass("active");
                        $('.bookmark[video-id\x3d"' + m[k] + '"]').css({
                            background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
                        })
                    }
                }
            $(document).on("click", ".bookmark", function(f) {
                var c = $(this).attr("video-id");
                if (!$(this).hasClass("active")) {
                    $(this).addClass("active");
                    $(this).css({
                        background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
                    });
                    e.push(c);
                    e = g(e);
                    b()
                } else {
                    var a = localStorage.getItem("videoIdsFav") ? localStorage.getItem("videoIdsFav").split(",") : [];
                    a = g(a);
                    $(this).removeClass("active");
                    $(this).css({
                        background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/bookmark-orange.png) no-repeat 0 0%"
                    });
                    a.splice($.inArray(c,
                        a), 1);
                    e = g(a);
                    b()
                }
            });

            function b() {
                localStorage.setItem("videoIdsFav", e)
            }

            function g(c) {
                var a = [];
                $.each(c, function(f, h) {
                    if ($.inArray(h, a) == -1) a.push(h)
                });
                return a
            }

            function p(a) {
                return a.filter(function(h, f, c) {
                    return f == c.indexOf(h)
                })
            }

            function intToString(value) {
                if (!value) return 0;
                if (value && value.length <= 3) return value;
                var suffixes = ["", "K", "M", "B", "T"];
                var suffixNum = Math.floor(("" + value).length / 3);
                var shortValue = parseFloat((suffixNum != 0 ? value / Math.pow(1E3, suffixNum) : value).toPrecision(2));
                if (shortValue %
                    1 != 0) shortValue = shortValue.toFixed(1);
                return shortValue + suffixes[suffixNum]
            }

            function getTimePassed(publishDate) {
                var countDownDate = (new Date(publishDate)).getTime();
                var now = (new Date).getTime();
                var distance = now - countDownDate;
                var hours = Math.floor(distance % (1E3 * 60 * 60 * 24) / (1E3 * 60 * 60));
                var minutes = Math.floor(distance % (1E3 * 60 * 60) / (1E3 * 60));
                var days = Math.floor(distance / (1E3 * 60 * 60 * 24));
                var months = Math.floor(days / 31);
                var years = Math.floor(months / 12);
                var message = "";
                if (years == 1) message = years + " Year Ago";
                else if (years >
                    0) message = years + " Years Ago";
                else if (months == 1) message = months + " Month Ago";
                else if (months > 0) message = months + " Months Ago";
                else if (days == 1) message = days + " Day Ago";
                else if (days > 1 && days < 7) message = days + " Days Ago";
                else if (days >= 7) {
                    var weeks = Math.round(days / 7);
                    if (weeks == 1) message = weeks + " Week Ago";
                    else message = weeks + " Weeks Ago"
                } else if (hours == 1) message = hours + " Hour Ago";
                else if (hours > 0) message = hours + " Hours Ago";
                else message = minutes + " Minutes Ago";
                return message
            }
        });
    if ($(".looking-for-slider").length > 0) $(".looking-for-slider").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        variableWidth: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                infinite: true
            }
        }]
    });
    $(".read-more-less").hide();
    $(".bottom-content .ic-more").click(function() {
        $(".read-more-less").slideToggle();
        var text = $(this).text();
        $(this).text(text == "Read more" ? "Read less" : "Read more")
    })
});

function initVideoSlick() {
    if ($(window).width() > 560) {
        if ($(".video-card-m-slider").hasClass("slick-initialized")) $(".video-card-m-slider").slick("unslick");
        return true
    }
    $(".video-card-m-slider").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        infinite: true,
        centerMode: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "15px"
    })
}
$(document).ready(function() {
    initVideoSlick();
    $(".sort-dropdown li:first").addClass("active");
    $(".sidebar-content ul li:first").addClass("active");
    $(".feature-video-inner .left-content .card-inner").click(function() {
        $(this).addClass("hide");
        $(".feature-video-inner .left-content .iframe-video").removeClass("hide");
        var symbol = $(".iframe-video iframe")[0].src.indexOf("?") > -1 ? "\x26" : "?";
        $(".iframe-video iframe")[0].src += symbol + "autoplay\x3d1"
    });
    $(".feature-video-section.orange-hub-section .feature-video-inner .left-content .card-inner").off("click"); {
        $(".filter-video-section .filter-top .filter-icon").click(function() {
            $(".announcement-section").hide();
            $(".feature-video-inner").hide();
            $(".filter-inner-container").addClass("active");
            $(".filter-cat").show();
            if (!$(".filter-top").hasClass("filter-sticky")) {
                $(".iplay-video-page.search-container").addClass("filter-sticky");
                $(".filter-top").addClass("filter-sticky")
            }
            $(".filter-top").addClass("filter-selected");
            $(".sidebar-content").addClass("active");
            $("body").addClass("no-scroll");
            $(".filter-cat").addClass("active")
        });
        $(".filter-video-section .sort-tools .title").click(function() {
            $(".sort-dropdown .dropdown-wrapper").toggle("show")
        });
        $(document).on("click", ".filter-video-section .filter-cat .filter-clear", function() {
            $(".feature-video-inner").show();
            $(".announcement-section").show();
            $(".filter-inner-container").removeClass("active");
            $(".filter-top").removeClass("filter-selected");
            $(".filter-top").removeClass("filter-sticky");
            $(".iplay-video-page.search-container").removeClass("filter-sticky");
            $(".filter-cat").hide()
        });
        $(".filter-video-section .dropdown-list").mCustomScrollbar()
    }
    $(window).bind("scroll", function() {
        if ($(".filter-top").hasClass("filter-selected")) return;
        if ($(".filter-section.filter-video-section").length == 0) return;
        var topPosition = 0;
        if ($(".filter-section.filter-video-section").length > 0) topPosition += $(".filter-section.filter-video-section").position().top;
        if (topPosition <= 0) topPosition = 100;
        if ($(window).width() < 991)
            if ($(window).scrollTop() > topPosition) {
                $(".filter-top").addClass("filter-sticky");
                $(".iplay-video-page.search-container").addClass("filter-sticky")
            } else {
                $(".filter-top").removeClass("filter-sticky");
                $(".iplay-video-page.search-container").removeClass("filter-sticky")
            }
        else if ($(window).width() > 991) {
            $(".filter-top").removeClass("filter-sticky");
            $(".iplay-video-page.search-container").removeClass("filter-sticky")
        }
        if ($(window).width() > 991) {
            if ($(window).scrollTop() > topPosition) {
                $(".filterVideo.sidebar-content").addClass("sticky-sidebar");
                $(".filterVideo.filter-inner-container").addClass("sticky-enable")
            } else {
                $(".filterVideo.sidebar-content").removeClass("sticky-sidebar");
                $(".filterVideo.filter-inner-container").removeClass("sticky-enable")
            }
            $(".sidebar-content").removeClass("disable-sticky");
            removeStickySidebar(".looking-for-section");
            removeStickySidebar(".smart-way-section");
            removeStickySidebar(".footer")
        }
        $(".video-lists .video-list").each(function(index) {
            if ($(".card-loading").length > 0) return;
            if ($(this).isOnScreen() && $(this).hasClass("hidden-card")) {
                var thisElement = $(this);
                thisElement.removeClass("hidden-card");
                thisElement.addClass("card-loading");
                setTimeout(function() {
                    thisElement.removeClass("card-loading");
                    thisElement.addClass("auto-height")
                }, 2E3)
            }
        })
    });

    function removeStickySidebar(elementVar) {
        if ($(elementVar).length >
            0)
            if ($(elementVar).isOnScreen() && $(".card-loading").length <= 0 && $(".sidebar-content").hasClass("sticky-sidebar")) $(".sidebar-content").addClass("disable-sticky")
    }
    $(".filter-video-section .sidebar-content .sidebar-body li").click(function() {
        if ($(window).width() > 991) $("body, html").animate({
            scrollTop: $(".filter-video-section").offset().top - $("header").height()
        })
    });
    $(window).resize(function() {
        initVideoSlick()
    });
    $(".filter-video-section .sidebar-content li div").click(function(event) {
        if (event.target !==
            this) return;
        if ($(event.target).closest(".mCSB_draggerContainer").length > 0) return;
        if ($(this).parent().hasClass("active") && $(this).parent().hasClass("dropdown")) {
            $(this).parent().find(".dropdown-list").slideToggle();
            $(this).parent().removeClass("active");
            return
        } else {
            $(".dropdown-list").hide();
            $(this).parent().find(".dropdown-list").slideDown()
        }
        $(".sidebar-content li div").parent().removeClass("active");
        $(this).parent().addClass("active");
        if ($(this).parent().hasClass("dropdown")) {
            $(this).parent().find(".dropdown-list li").removeClass("active");
            $(this).parent().find(".dropdown-list li").first().addClass("active")
        } else if ($(window).width() < 991) $(".sidebar-header .close").click()
    });
    $(".filter-video-section .sidebar-content .dropdown-list li").click(function(event) {
        $(".sidebar-content .dropdown-list li").removeClass("active");
        $(this).addClass("active");
        if ($(window).width() < 991) $(".sidebar-header .close").click()
    });
    $(".filter-video-section .sort-tools .sort-dropdown span").click(function() {
        $(this).addClass("active");
        $(".sort-dropdown .dropdown-wrapper").toggle()
    });
    $(".filter-video-section .sort-tools .sort-dropdown li").click(function() {
        $(".sort-tools .sort-dropdown li").removeClass("active");
        $(this).addClass("active");
        $(".sort-dropdown span").removeClass("active");
        $(".sort-tools .sort-dropdown span").text($(this).text());
        $(".sort-dropdown .dropdown-wrapper").hide()
    });
    $(".filter-video-section .sidebar-header .close").click(function() {
        $(".sidebar-content").removeClass("active");
        $("body").removeClass("no-scroll");
        if ($(window).width() < 991) {
            window.scrollTo(0, 0);
            resetFilter()
        } else $("html, body").animate({
            scrollTop: $(".filter-section").offset().top
        })
    });
    $(window).on("load", function() {
        var urlHash = window.location.hash || window.top.location.hash;
        if (urlHash.length > 0)
            if ($(urlHash).hasClass("dropdown")) {
                $(".sidebar-content li").removeClass("active");
                $(".sidebar-content li" + urlHash).addClass("active");
                $(".sidebar-content li" + urlHash).find(".dropdown-list").slideDown();
                $(".sidebar-content li" + urlHash + " .dropdown-list li:first").click()
            } else $(".sidebar-content li" +
                urlHash + " div").click()
    })
});

function resetFilter() {
    if ($(".filter-top.filter-sticky").length > 0) {
        $(".feature-video-inner").show();
        $(".announcement-section").show();
        $(".filter-inner-container").removeClass("active");
        $(".filter-top").removeClass("filter-selected");
        $(".filter-top").removeClass("filter-sticky");
        $(".iplay-video-page.search-container").removeClass("filter-sticky");
        $(".filter-cat").hide()
    }
}
$(window).on("unload", function() {
    $(".feature-video-inner .left-content .card-inner").off("click");
    $(".filter-top .filter-icon").off("click");
    $(".sort-tools .title").off("click");
    $(".sidebar-content .sidebar-body li").off("click");
    $(".sidebar-content li div").off("click");
    $(".sidebar-header .close").off("click");
    $(".sort-dropdown span").off("click");
    $(".sort-tools .sort-dropdown li").off("click")
});
$(document).ready(function() {
    var videoJson = "/content/icicibank.videosdata.json";
    var videoData = {
        videoDetails: []
    };
    if ($("#videoListWrapper").length || $("#popular-videos").length || $("#featured-video").length) {
        var getTimePassed$23 = function(publishDate) {
            var countDownDate = (new Date(publishDate)).getTime();
            var now = (new Date).getTime();
            var distance = now - countDownDate;
            var hours = Math.floor(distance % (1E3 * 60 * 60 * 24) / (1E3 * 60 * 60));
            var minutes = Math.floor(distance % (1E3 * 60 * 60) / (1E3 * 60));
            var days = Math.floor(distance / (1E3 *
                60 * 60 * 24));
            var months = Math.floor(days / 31);
            var years = Math.floor(months / 12);
            var message = "";
            if (years == 1) message = years + " Year Ago";
            else if (years > 0) message = years + " Years Ago";
            else if (months == 1) message = months + " Month Ago";
            else if (months > 0) message = months + " Months Ago";
            else if (days == 1) message = days + " Day Ago";
            else if (days > 1 && days < 7) message = days + " Days Ago";
            else if (days >= 7) {
                var weeks = Math.round(days / 7);
                if (weeks == 1) message = weeks + " Week Ago";
                else message = weeks + " Weeks Ago"
            } else if (hours == 1) message = hours + " Hour Ago";
            else if (hours > 0) message = hours + " Hours Ago";
            else message = minutes + " Minutes Ago";
            return message
        };
        var intToString$24 = function(value) {
            if (!value) return 0;
            if (value && value.length <= 3) return value;
            var suffixes = ["", "K", "M", "B", "T"];
            var suffixNum = Math.floor(("" + value).length / 3);
            var shortValue = parseFloat((suffixNum != 0 ? value / Math.pow(1E3, suffixNum) : value).toPrecision(2));
            if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
            return shortValue + suffixes[suffixNum]
        };
        var custom_sort_like$25 = function(a, b) {
            var likeOne =
                a.likes,
                likeTwo = b.likes;
            if (likeOne == undefined) likeOne = 0;
            if (likeTwo == undefined) likeTwo = 0;
            return likeOne - likeTwo
        };
        var custom_sort_view$26 = function(a, b) {
            var viewsOne = a.views,
                viewsTwo = b.views;
            if (viewsOne == undefined) viewsOne = 0;
            if (viewsTwo == undefined) viewsTwo = 0;
            return viewsOne - viewsTwo
        };
        var custom_sort_date$27 = function(a, b) {
            return (new Date(a.publishdate)).getTime() - (new Date(b.publishdate)).getTime()
        };
        var generateHTML$28 = function(vidTitle, videoThumbnailImage, type, viewCount, timePassed, youtubeVideoId, pdfLink,
            detailpagelink, index) {
            var playBtn = "",
                titleLink = "#",
                viewClass = "download",
                imgUrl = "",
                videoDivs = "";
            var pdfSpan = pdfLink ? '\x3ca target\x3d"_blank" class\x3d"' + viewClass + '" download href\x3d"' + pdfLink + '"\x3e\x3c/a\x3e' : "";
            if (type == "Video") {
                playBtn = '\x3ca target\x3d"_blank" href\x3d"' + detailpagelink + '" class\x3d"play-btn"\x3e\x3c/a\x3e';
                imgUrl = '\x3ca target\x3d"_blank" href\x3d"' + detailpagelink + '"\x3e';
                titleLink = detailpagelink;
                viewClass = "num-viewer";
                videoDivs = pdfLink ? '\x3ca target\x3d"_blank" download class\x3d"pdf" href\x3d"' +
                    pdfLink + '"\x3e\x3c/a\x3e\x3cdiv class\x3d"bookmark" video-id\x3d"' + youtubeVideoId + '"\x3e\x3c/div\x3e' : '\x3cdiv class\x3d"bookmark" video-id\x3d"' + youtubeVideoId + '"\x3e\x3c/div\x3e';
                pdfSpan = '\x3cspan class\x3d"' + viewClass + '"\x3e' + viewCount + "\x3c/span\x3e"
            }
            var html = '\x3cdiv class\x3d"video-card"\x3e\x3cdiv class\x3d"card-inner"\x3e\x3cdiv class\x3d"media"\x3e ' + imgUrl + ' \x3cimg src\x3d"' + videoThumbnailImage + '" alt\x3d"video"\x3e\x3c/a\x3e' + playBtn + '\x3c/div\x3e\x3cdiv class\x3d"content"\x3e\x3ca target\x3d"_blank" href\x3d"' +
                titleLink + '" class\x3d"card-title"\x3e' + vidTitle + '\x3c/a\x3e\x3cdiv class\x3d"card-bottom"\x3e\x3cdiv class\x3d"date-readtime"\x3e\x3cspan class\x3d"date"\x3e' + timePassed + "\x3c/span\x3e" + pdfSpan + '\x3c/div\x3e\x3cdiv class\x3d"bookmark-share"\x3e' + videoDivs + '\x3cdiv class\x3d"share"\x3e\x3c/div\x3e\x3cdiv class\x3d"share-content"\x3e\x3cdiv class\x3d"inner-content"\x3e\x3cdiv class\x3d"share-header"\x3e\x3cp\x3e' + shareText + '\x3c/p\x3e\x3cspan class\x3d"close-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg" alt\x3d"close" /\x3e\x3c/a\x3e\x3c/span\x3e\x3c/div\x3e\x3cul class\x3d"share-link"\x3e\x3cli\x3e\x3ca href\x3d"https://api.whatsapp.com/send?url\x3d' +
                window.location.host + "/" + titleLink + "\x26text\x3d" + vidTitle + '" target\x3d"_blank" tabindex\x3d"0"\x3e\x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp.svg" alt\x3d"whatsapp"\x3e\x3c/span\x3e \x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg" alt\x3d"whatsapp"\x3e \x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d"https://www.facebook.com/sharer/sharer.php?u\x3d' +
                window.location.host + "/" + titleLink + "\x26text\x3d" + vidTitle + '" target\x3d"_blank" tabindex\x3d"0"\x3e \x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg" alt\x3d"fb"\x3e\x3c/span\x3e\x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg"alt\x3d"fb"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d"https://twitter.com/intent/tweet?url\x3d' +
                window.location.host + "/" + titleLink + "\x26text\x3d" + encodeURI(vidTitle) + '" target\x3d"_blank" tabindex\x3d"0"\x3e\x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg" alt\x3d"tw"\x3e\x3c/span\x3e\x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg" alt\x3d"tw"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d"https://www.linkedin.com/shareArticle?mini\x3dtrue?url\x3d' +
                window.location.host + "/" + titleLink + "\x26text\x3d" + vidTitle + '" target\x3d"_blank" tabindex\x3d"0"\x3e\x3cspan class\x3d"n-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg" alt\x3d"ln"\x3e\x3c/span\x3e\x3cspan class\x3d"h-icon"\x3e\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg" alt\x3d"ln"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d"youtube-text"\x3e\x3cinput type\x3d"text" id\x3d"video-list' +
                index + '" name\x3d"link" value\x3d"https://www.youtube.com/watch?v\x3d' + youtubeVideoId + '" /\x3e\x3cspan id\x3d"btn-video-list' + index + '"  onclick\x3d"copyCode(\'video-list' + index + "','btn-video-list" + index + "','input')\"\x3e" + copyText + "\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
            return html
        };
        var generateVideoListItems = function(videoData) {
            var html = "",
                videoCardGroupCount = 6;
            for (var index$29 = 0; index$29 < videoData.length; index$29++) {
                if (index$29 %
                    videoCardGroupCount == 0)
                    if (index$29 >= videoCardGroupCount) html += '\x3cdiv class\x3d"video-list hidden-card"\x3e';
                    else html += '\x3cdiv class\x3d"video-list"\x3e';
                var type = videoData[index$29]["type"];
                html += generateHTML$28(videoData[index$29]["videotitle"], videoData[index$29]["thumbnailimage"], type, intToString$24(videoData[index$29]["views"]), getTimePassed$23(videoData[index$29]["publishdate"]), videoData[index$29]["videoid"], videoData[index$29]["referencelink"], videoData[index$29]["detailpagelink"], index$29);
                if (index$29 % videoCardGroupCount == videoCardGroupCount - 1) html += "\x3c/div\x3e"
            }
            if (html.length > 0) {
                $("#videoListWrapper").html(html);
                $(".filter-top .sort-tools").removeClass("disable-sorting")
            } else {
                $("#videoListWrapper").html('\x3cdiv class\x3d"no-result"\x3e\x3c/div\x3e');
                $(".filter-top .sort-tools").addClass("disable-sorting")
            }
        };
        var copyText = $(".feature-video-inner").attr("data-copyText");
        var shareText = $(".feature-video-inner").attr("data-shareText");
        $.getJSON(videoJson, function(resultJSON) {
            if (resultJSON &&
                resultJSON.Videodata) {
                var p = function(a) {
                    return a.filter(function(h, f, c) {
                        return f == c.indexOf(h)
                    })
                };
                var g = function(c) {
                    var a = [];
                    $.each(c, function(f, h) {
                        if ($.inArray(h, a) == -1) a.push(h)
                    });
                    return a
                };
                var b = function() {
                    localStorage.setItem("videoIdsFav", likedVideos)
                };
                var sortCards$30 = function(dataArray) {
                    var sortId = $(".sort-dropdown .dropdown-inner li.active").attr("id");
                    if (sortId == "latest") {
                        dataArray.sort(custom_sort_date$27);
                        dataArray.reverse()
                    } else if (sortId == "oldest") dataArray.sort(custom_sort_date$27);
                    else if (sortId == "viewed") {
                        dataArray.sort(custom_sort_view$26);
                        dataArray.reverse()
                    } else if (sortId == "liked") {
                        dataArray.sort(custom_sort_like$25);
                        dataArray.reverse()
                    }
                    generateVideoListItems(dataArray);
                    var o = localStorage.getItem("videoIdsFav");
                    var e = [];
                    var m = [];
                    if (typeof o != "undefined")
                        if (o != null && o != "") {
                            var s = o.split(",");
                            for (var k = 0; k < s.length; k++) {
                                m.push(s[k]);
                                e.push(s[k])
                            }
                            for (var k = 0; k < m.length; k++) {
                                $('.bookmark[video-id\x3d"' + m[k] + '"]').addClass("active");
                                $('.bookmark[video-id\x3d"' + m[k] + '"]').parent().parent().parent().parent().parent().addClass("favouirite");
                                $('.bookmark[video-id\x3d"' + m[k] + '"]').css({
                                    background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
                                })
                            }
                        }
                };
                var renderVideoCards = function(filterId) {
                    tempArray$33 = [];
                    if (filterId == "all") sortCards$30(videoData["videoDetails"]);
                    else if (filterId == "like_by_you") {
                        var o = localStorage.getItem("videoIdsFav");
                        var e = [];
                        var m = [];
                        if (typeof o != "undefined")
                            if (o != null && o != "") {
                                var s = o.split(",");
                                for (var k = 0; k < s.length; k++) {
                                    m.push(s[k]);
                                    e.push(s[k])
                                }
                                for (var k =
                                        0; k < m.length; k++)
                                    for (var index$31 = 0; index$31 < videoData["videoDetails"].length; index$31++) {
                                        var element = videoData["videoDetails"][index$31];
                                        var categoryValue = element["category"];
                                        var subcategoryValue = element["subcategory"];
                                        if (typeof categoryValue != "undefined" && typeof subcategoryValue != "undefined")
                                            if (categoryValue != null && categoryValue != "" && subcategoryValue != null && subcategoryValue != "")
                                                if (element["videoid"] == m[k]) tempArray$33.push(element)
                                    }
                            }
                        sortCards$30(tempArray$33)
                    } else {
                        for (var index$32 = 0; index$32 < videoData["videoDetails"].length; index$32++) {
                            var element =
                                videoData["videoDetails"][index$32];
                            if (element["category"].replace(/ /g, "_").toLowerCase() == filterId.toLowerCase() || element["subcategory"].replace(/ /g, "_").toLowerCase() == filterId.toLowerCase()) tempArray$33.push(element)
                        }
                        sortCards$30(tempArray$33)
                    }
                    generateFilterTags("#filterTags", filterId)
                };
                var subCatArray = [];
                videoData["videoDetails"] = resultJSON.Videodata;
                var tempArray$33 = [];
                var subCatArray = [];
                var catCount = 0,
                    Investments = 0;
                var subCatData = "",
                    CatData = "";
                $(".filter-video-section .sidebar-content li").each(function(i) {
                    subCatArray.push($(this).attr("id").replace(/_/g,
                        " ").toLowerCase())
                });
                for (var j = 0; j < subCatArray.length; j++) {
                    for (var k = 0; k < resultJSON.Videodata.length; k++) {
                        var subcategoryData = resultJSON.Videodata[k]["subcategory"];
                        var categoryData = resultJSON.Videodata[k]["category"];
                        if (subcategoryData != null && subcategoryData != "" && categoryData != null && categoryData != "") {
                            if (subCatArray[j] == subcategoryData.toLowerCase()) {
                                Investments++;
                                var dispData = subCatArray[j].replace(/ /g, "_");
                                subCatData = "#" + dispData
                            } else if (subCatArray[j] == categoryData.toLowerCase()) {
                                catCount++;
                                CatData = "#" + subCatArray[j] + " " + ".menu-item"
                            }
                            getRelatedVideosData(resultJSON.Videodata[k])
                        }
                    }
                    var notFound = 0;
                    if (Investments > 0) $(subCatData).append(" (" + Investments + ")");
                    if (catCount > 0) $(CatData).append(" (" + catCount + ")");
                    Investments = 0;
                    catCount = 0
                }
                sortCards$30(videoData["videoDetails"]);
                $(".filter-video-section .sidebar-content li div").click(function(event) {
                    if (event.target !== this) return;
                    if ($(event.target).closest(".mCSB_draggerContainer").length > 0) return;
                    if ($(this).parent().hasClass("dropdown")) renderVideoCards($(this).siblings(".dropdown-list").find("li:first").attr("id"));
                    else renderVideoCards($(this).parent().attr("id"))
                });
                $(".filter-video-section .sidebar-content .dropdown-list li").click(function(event) {
                    renderVideoCards($(this).attr("id"))
                });
                $(document).on("click", ".filter-video-section .filter-cat img", function() {
                    $(this).parent().remove();
                    $(".filter-cat .filter-clear").click();
                    sortCards$30(videoData["videoDetails"])
                });
                $(document).on("click", ".filter-video-section .filter-cat .filter-clear", function() {
                    sortCards$30(videoData["videoDetails"])
                });
                $(".filter-video-section .sort-dropdown .dropdown-inner li").click(function() {
                    if (tempArray$33.length >
                        0) sortCards$30(tempArray$33);
                    else sortCards$30(videoData["videoDetails"])
                });
                var popularVideo1 = $(".feature-video-section .right-content").attr("data-relatedvideoid1");
                var popularVideo2 = $(".feature-video-section .right-content").attr("data-relatedvideoid2");
                if (!(popularVideo1 || popularVideo2)) {
                    videoData["videoDetails"].sort(function(a, b) {
                        return a.views - b.views
                    });
                    for (var index$34 = 0; index$34 < 2; index$34++) {
                        finalDetailPageLink = videoData["videoDetails"][index$34]["detailpagelink"];
                        var encTitle = encodeURI(videoData["videoDetails"][index$34]["videotitle"]);
                        var x = "\x3cdiv class\x3d'video-card h-view'\x3e\x3cdiv class\x3d'card-inner'\x3e\x3cdiv class\x3d'media'\x3e\x3cimg src\x3d'" + videoData["videoDetails"][index$34]["thumbnailimage"] + "' alt\x3d'video'\x3e\x3ca target\x3d'_blank' href \x3d '" + finalDetailPageLink + "?rel\x3d0' class \x3d 'play-btn'\x3e\x3c/a\x3e\t\x3c/div\x3e\x3cdiv class\x3d'content'\x3e\x3ca target\x3d'_blank' href\x3d'" + finalDetailPageLink + "?rel\x3d0' class\x3d'card-title'\x3e" + videoData["videoDetails"][index$34]["videotitle"] + "\x3c/a\x3e\x3cdiv class \x3d 'card-bottom'\x3e\x3cdiv  class\x3d'date-readtime'\x3e\x3cspan class \x3d 'date'\x3e" +
                            getTimePassed$23(videoData["videoDetails"][index$34]["publishdate"]) + "\x3c/span\x3e\x3cspan class \x3d 'num-viewer'\x3e" + intToString$24(videoData["videoDetails"][index$34]["views"]) + " \x3c/span\x3e\x3c/div\x3e\t\x3cdiv class\x3d'bookmark-share'\x3e\x3cdiv class\x3d'bookmark' video-id\x3d'" + videoData["videoDetails"][index$34]["videoid"] + "'\x3e\x3c/div\x3e\x3cdiv class\x3d'share'\x3e\x3c/div\x3e\x3cdiv class\x3d'share-content'\x3e\x3cdiv class\x3d'inner-content'\x3e\x3cdiv class\x3d'share-header'\x3e\x3cp\x3e" +
                            shareText + "\x3c/p\x3e\x3cspan class\x3d'close-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg' alt\x3d'fb' /\x3e\x3c/a\x3e\x3c/span\x3e\x3c/div\x3e\x3cul class\x3d'share-link'\x3e\x3cli\x3e\x3ca href\x3d'https://api.whatsapp.com/send?url\x3d" + window.location.host + finalDetailPageLink + "\x26text\x3d" + videoData["videoDetails"][index$34]["videotitle"] + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp.svg' alt\x3d'whatsapp'\x3e\x3c/span\x3e \x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg' alt\x3d'whatsapp'\x3e \x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://www.facebook.com/sharer/sharer.php?u\x3d" +
                            window.location.host + finalDetailPageLink + "\x26text\x3d" + videoData["videoDetails"][index$34]["videotitle"] + "' target\x3d'_blank' tabindex\x3d'0'\x3e \x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg' alt\x3d'fb'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg'alt\x3d'fb'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://twitter.com/intent/tweet?url\x3d" +
                            window.location.host + finalDetailPageLink + "\x26text\x3d" + encTitle + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg' alt\x3d'tw'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg' alt\x3d'tw'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://www.linkedin.com/shareArticle?mini\x3dtrue?url\x3d" +
                            window.location.host + finalDetailPageLink + "\x26text\x3d" + videoData["videoDetails"][index$34]["videotitle"] + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg' alt\x3d'ln'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg' alt\x3d'ln'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'youtube-text'\x3e\x3cinput type\x3d'text' name\x3d'link' value\x3d'https://www.youtube.com/watch?v\x3d" +
                            videoData["videoDetails"][index$34]["videoid"] + "\x26rel\x3d0' id\x3d'popular-video" + index$34 + "'/\x3e\x3cspan id\x3d'btn-popular-video" + index$34 + "' onclick\x3d\"copyCode('popular-video" + index$34 + "','btn-popular-video" + index$34 + "','input')\"\x3e" + copyText + "\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
                        $("#popular-videos").append(x);
                        initVideoSlick()
                    }
                }
                var xslvideoid = $(".feature-video-section .left-content").attr("data-videoid");
                if (popularVideo1 ||
                    popularVideo2) videoData["videoDetails"] = resultJSON.Videodata.sort(custom_sort_date$27).reverse();
                for (var index$35 = 0; index$35 < videoData["videoDetails"].length; index$35++) {
                    if (xslvideoid == videoData["videoDetails"][index$35]["videoid"]) {
                        var finalDetailPageLink = videoData["videoDetails"][index$35]["detailpagelink"];
                        var encryptData = encodeURI(videoData["videoDetails"][index$35]["videotitle"]);
                        var v = "\x3cdiv class\x3d'card-inner'\x3e\x3cdiv class\x3d'media'\x3e\x3cimg src\x3d'" + videoData["videoDetails"][index$35]["thumbnailimage"] +
                            "'alt\x3d'video'\x3e\x3ca target\x3d'_blank' href \x3d '" + finalDetailPageLink + "?rel\x3d0' class\x3d'play-btn'\x3e\x3c/a\x3e\x3c/div\x3e \x3cdiv class\x3d'content'\x3e\x3ca target\x3d'_blank' href\x3d'" + finalDetailPageLink + "?rel\x3d0' class\x3d'card-title'\x3e" + videoData["videoDetails"][index$35]["videotitle"] + "\x3c/a\x3e \x3cdiv class\x3d'card-bottom'\x3e\x3cdiv class\x3d'date-readtime'\x3e\x3cspan class\x3d'date'\x3e" + getTimePassed$23(videoData["videoDetails"][index$35]["publishdate"]) + "\x3c/span\x3e\x3cspan class\x3d'num-viewer'\x3e" +
                            intToString$24(videoData["videoDetails"][index$35]["views"]) + "\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d'bookmark-share'\x3e\x3cdiv class\x3d'bookmark' video-id\x3d'" + xslvideoid + "'\x3e\x3c/div\x3e\x3cdiv class\x3d'share'\x3e\x3c/div\x3e\x3cdiv class\x3d'share-content'\x3e\x3cdiv class\x3d'inner-content'\x3e\x3cdiv class\x3d'share-header'\x3e\x3cp\x3e" + shareText + "\x3c/p\x3e \x3cspan class\x3d'close-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg' alt\x3d'fb'/\x3e\x3c/span\x3e \x3c/div\x3e\x3cul class\x3d'share-link'\x3e\x3cli\x3e\x3ca href\x3d'https://api.whatsapp.com/send?url\x3d" +
                            window.location.host + finalDetailPageLink + "\x26text\x3d" + videoData["videoDetails"][index$35]["videotitle"] + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp.svg' alt\x3d'whatsapp'\x3e\x3c/span\x3e \x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg' alt\x3d'whatsapp'\x3e \x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://www.facebook.com/sharer/sharer.php?u\x3d" +
                            window.location.host + finalDetailPageLink + "\x26text\x3d" + videoData["videoDetails"][index$35]["videotitle"] + "' target\x3d'_blank' tabindex\x3d'0'\x3e \x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg' alt\x3d'fb'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg'alt\x3d'fb'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://twitter.com/intent/tweet?url\x3d" +
                            window.location.host + finalDetailPageLink + "\x26text\x3d" + encryptData + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg' alt\x3d'tw'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg' alt\x3d'tw'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://www.linkedin.com/shareArticle?mini\x3dtrue?url\x3d" +
                            window.location.host + finalDetailPageLink + "\x26text\x3d" + videoData["videoDetails"][index$35]["videotitle"] + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg' alt\x3d'ln'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg' alt\x3d'ln'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'youtube-text'\x3e\x3cinput type\x3d'text' name\x3d'link' id\x3d'feature-video' value\x3d'https://www.youtube.com/watch?v\x3d" +
                            xslvideoid + "'\x26rel\x3d0\x3e \x3cspan id\x3d'btn-feature-video'  onclick\x3d\"copyCode('feature-video','btn-feature-video','input')\"\x3e" + copyText + "\x3c/span\x3e\x3c/div\x3e \x3c/div\x3e \x3c/div\x3e \x3c/div\x3e \x3c/div\x3e \x3c/div\x3e \x3c/div\x3e \x3cdiv class\x3d'iframe-video hide'\x3e\x3ciframe width\x3d'100%' height\x3d'282' src\x3d'https://www.youtube.com/embed/" + xslvideoid + "' frameborder\x3d'0' allow\x3d'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen\x3d''\x3e\x3c/iframe\x3e\x3c/div\x3e";
                        $("#featured-video").append(v)
                    }
                    if (popularVideo1 == videoData["videoDetails"][index$35]["videoid"] || popularVideo2 == videoData["videoDetails"][index$35]["videoid"]) {
                        finalDetailPageLink = videoData["videoDetails"][index$35]["detailpagelink"];
                        var encTitle = encodeURI(videoData["videoDetails"][index$35]["videotitle"]);
                        var x = "\x3cdiv class\x3d'video-card h-view'\x3e\x3cdiv class\x3d'card-inner'\x3e\x3cdiv class\x3d'media'\x3e\x3cimg src\x3d'" + videoData["videoDetails"][index$35]["thumbnailimage"] + "' alt\x3d'video'\x3e\x3ca target\x3d'_blank' href \x3d '" +
                            finalDetailPageLink + "?rel\x3d0' class \x3d 'play-btn'\x3e\x3c/a\x3e\t\x3c/div\x3e\x3cdiv class\x3d'content'\x3e\x3ca target\x3d'_blank' href\x3d'" + finalDetailPageLink + "?rel\x3d0' class\x3d'card-title'\x3e" + videoData["videoDetails"][index$35]["videotitle"] + "\x3c/a\x3e\x3cdiv class \x3d 'card-bottom'\x3e\x3cdiv  class\x3d'date-readtime'\x3e\x3cspan class \x3d 'date'\x3e" + getTimePassed$23(videoData["videoDetails"][index$35]["publishdate"]) + "\x3c/span\x3e\x3cspan class \x3d 'num-viewer'\x3e" + intToString$24(videoData["videoDetails"][index$35]["views"]) +
                            " \x3c/span\x3e\x3c/div\x3e\t\x3cdiv class\x3d'bookmark-share'\x3e\x3cdiv class\x3d'bookmark' video-id\x3d'" + videoData["videoDetails"][index$35]["videoid"] + "'\x3e\x3c/div\x3e\x3cdiv class\x3d'share'\x3e\x3c/div\x3e\x3cdiv class\x3d'share-content'\x3e\x3cdiv class\x3d'inner-content'\x3e\x3cdiv class\x3d'share-header'\x3e\x3cp\x3e" + shareText + "\x3c/p\x3e\x3cspan class\x3d'close-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg' alt\x3d'fb' /\x3e\x3c/a\x3e\x3c/span\x3e\x3c/div\x3e\x3cul class\x3d'share-link'\x3e\x3cli\x3e\x3ca href\x3d'https://api.whatsapp.com/send?url\x3d" +
                            window.location.host + finalDetailPageLink + "\x26text\x3d" + videoData["videoDetails"][index$35]["videotitle"] + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp.svg' alt\x3d'whatsapp'\x3e\x3c/span\x3e \x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg' alt\x3d'whatsapp'\x3e \x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://www.facebook.com/sharer/sharer.php?u\x3d" +
                            window.location.host + finalDetailPageLink + "\x26text\x3d" + videoData["videoDetails"][index$35]["videotitle"] + "' target\x3d'_blank' tabindex\x3d'0'\x3e \x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg' alt\x3d'fb'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg'alt\x3d'fb'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://twitter.com/intent/tweet?url\x3d" +
                            window.location.host + finalDetailPageLink + "\x26text\x3d" + encTitle + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg' alt\x3d'tw'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg' alt\x3d'tw'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d'https://www.linkedin.com/shareArticle?mini\x3dtrue?url\x3d" +
                            window.location.host + finalDetailPageLink + "\x26text\x3d" + videoData["videoDetails"][index$35]["videotitle"] + "' target\x3d'_blank' tabindex\x3d'0'\x3e\x3cspan class\x3d'n-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg' alt\x3d'ln'\x3e\x3c/span\x3e\x3cspan class\x3d'h-icon'\x3e\x3cimg src\x3d'/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg' alt\x3d'ln'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'youtube-text'\x3e\x3cinput type\x3d'text' name\x3d'link' value\x3d'https://www.youtube.com/watch?v\x3d" +
                            videoData["videoDetails"][index$35]["videoid"] + "\x26rel\x3d0' id\x3d'popular-video" + index$35 + "'/\x3e\x3cspan id\x3d'btn-popular-video" + index$35 + "' onclick\x3d\"copyCode('popular-video" + index$35 + "','btn-popular-video" + index$35 + "','input')\"\x3e" + copyText + "\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
                        $("#popular-videos").append(x);
                        initVideoSlick()
                    }
                }
                var likedVideos = [];
                $(document).on("click", ".bookmark", function(f) {
                    var c = $(this).attr("video-id");
                    if (!$(this).hasClass("active")) {
                        $(this).addClass("active");
                        $(this).css({
                            background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg) no-repeat 0 0%"
                        });
                        likedVideos.push(c);
                        likedVideos = g(likedVideos);
                        b()
                    } else {
                        var a = localStorage.getItem("videoIdsFav") ? localStorage.getItem("videoIdsFav").split(",") : [];
                        a = g(a);
                        $(this).removeClass("active");
                        $(this).css({
                            background: "url(/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/bookmark-orange.png) no-repeat 0 0%"
                        });
                        a.splice($.inArray(c, a), 1);
                        likedVideos = g(a);
                        b()
                    }
                })
            }
        })
    }

    function getRelatedVideosData(videoData) {
        $(".relatedvideofull .related-video-slider .card-inner").each(function() {
            if ($(this).attr("id") == videoData.videoid) {
                $("#" + $(this).attr("id") + " .image img").attr("src", videoData.thumbnailimage);
                if ($("#" + $(this).attr("id") + " .image a").attr("data-content")) $("#" + $(this).attr("id") + " .image a").attr("data-content", videoData.descriptionone);
                if ($("#" + $(this).attr("id") + " .content h3 a").attr("data-content")) $("#" +
                    $(this).attr("id") + " .content h3 a").attr("data-content", videoData.descriptionone);
                $("#" + $(this).attr("id") + " .content h3 a").text(videoData.videotitle);
                $("#" + $(this).attr("id") + " .card-bottom .date-readtime .date").text(getTimePassed(videoData.publishdate))
            }
        })
    }(function addRootclass() {
        if ($(".iplaysearch ").length > 0) {
            var rootEl = $(".container.page-content");
            rootEl.addClass("videolisting-page")
        }
    })()
});
(function() {
    $(".did-you-know-slider").slick({
        dots: !0,
        arrows: !0,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        }, {
            breakpoint: 640,
            settings: {
                arrows: false,
                slidesToShow: 1,
                dots: true,
                centerMode: true,
                centerPadding: "20px",
                infinite: true
            }
        }]
    })
})();
$(".special-discounts .trending-deals-slider").not(".slick-initialized").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1025,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true
        }
    }, {
        breakpoint: 640,
        settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
            centerMode: true,
            centerPadding: "15px",
            infinite: true
        }
    }]
});
$(".slick-track").each(function() {
    var highestBox = 0;
    $(".deal-card", this).each(function() {
        if ($(this).height() > highestBox) highestBox = $(this).height()
    });
    $(".deal-card", this).height(highestBox)
});
var rangedefaultColor = "#4B4B4B";

function numWithCommas(num) {
    return num.toLocaleString("en-IN")
}

function removeComma(number) {
    return number.replace(/,/g, "")
}

function populateSelectBox(selectBox, from, to, suffix, defaultValue) {
    for (var i = from; i <= to; i++) $("#" + selectBox).append($("\x3coption\x3e", {
        value: i,
        text: i + " " + suffix
    }));
    $("#" + selectBox).val(defaultValue);
    $("#" + selectBox).selectmenu("refresh")
}

function setOnRangeChange(input, range, callback, data, rangeColor) {
    var range = document.getElementById(range);
    var input = document.getElementById(input);
    rangedefaultColor = rangeColor ? rangeColor : rangedefaultColor;
    if (isOlderEdgeOrIE()) {
        range.style.height = "20px";
        setRangeEvent(range, input, "input", data, callback);
        setRangeInputEvent(range, input, "input", data, callback);
        setRangeEvent(range, input, "change", data, callback);
        setRangeInputEvent(range, input, "change", data, callback)
    } else {
        updateRangeEl(range);
        setRangeEvent(range,
            input, "input", data, callback, updateRangeEl);
        setRangeInputEvent(range, input, "input", data, callback, updateRangeEl)
    }
}

function setRangeEvent(range, input, type, data, callback, updateCallback) {
    if (range) range.addEventListener(type, function(e) {
        if (!data)
            if (input.value) input.value = removeComma(e.target.value);
            else input.innerHTML = removeComma(e.target.value);
        else {
            var val = removeComma(e.target.value);
            val = data[val] ? val : data.indexOf(val);
            if (input.value) input.value = data.length > 0 ? data[val] : val;
            else input.innerHTML = data.length > 0 ? data[val] : val
        }
        if (callback) callback();
        if (updateCallback) updateCallback(range)
    })
}

function setRangeInputEvent(range, input, type, data, callback, updateCallback) {
    if (input) input.addEventListener(type, function(e) {
        if (!data) range.value = removeComma(e.target.value);
        else {
            var val = removeComma(e.target.value);
            if (isFloatNumber(val)) val = val.toString();
            else val = parseFloat(val).toString();
            range.value = data.indexOf(val)
        }
        if (callback) callback();
        if (updateCallback) updateCallback(range)
    })
}

function updateRangeEl(rangeEl) {
    if (rangeEl) {
        var ratio = valueTotalRatio(rangeEl.value, rangeEl.min, rangeEl.max);
        rangeEl.style.backgroundImage = getLinearGradientCSS(ratio, "#F37E20", rangedefaultColor)
    }
}

function isOlderEdgeOrIE() {
    return window.navigator.userAgent.indexOf("MSIE ") > -1 || !!navigator.userAgent.match(/Trident.*rv:11\./) || window.navigator.userAgent.indexOf("Edge") > -1
}

function isFloatNumber(val) {
    return Number(val).toString() == val && val % 1 !== 0
}

function valueTotalRatio(value, min, max) {
    var diff = max / 2 < value ? 0 : .01;
    return (value - min) / (max - min) + diff
}

function getLinearGradientCSS(ratio, leftColor, rightColor) {
    return ["-webkit-gradient(", "linear, ", "left top, ", "right top, ", "color-stop(" + ratio + ", " + leftColor + "), ", "color-stop(" + ratio + ", " + rightColor + ")", ")"].join("")
}

function validateNumberOnly(val, element) {
    var validated = true;
    if (val == "") {
        validated = false;
        document.querySelector("." + element).innerHTML = "Please enter Amount"
    } else if (isNaN(Number(val))) document.querySelector("." + element).innerHTML = "Amount must be in numbers only.";
    else document.querySelector("." + element).innerHTML = "";
    return validated
}

function validateNumberAndDecimals(evt) {
    var theEvent = evt || window.event;
    if (theEvent.type === "paste") key = event.clipboardData.getData("text/plain");
    else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key)
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault()
    }
}

function validateRangeInput(value, max, min, error_element) {
    value = parseFloat(value);
    max = parseFloat(max);
    min = parseFloat(min);
    var validated = true;
    var err_element = document.querySelector("." + error_element);
    if (value > max || isNaN(value)) {
        validated = false;
        err_element.innerHTML = "Please enter correct amount."
    } else if (value < min || isNaN(value)) {
        validated = false;
        err_element.innerHTML = "Please enter correct amount."
    } else err_element.innerHTML = "";
    return validated
}

function toggleView(element1, element2, show) {
    var container1 = document.getElementsByClassName(element1);
    var container2 = element2 ? document.getElementsByClassName(element2) : null;
    if (show) {
        container1[0].style.display = "flex";
        if (container2 != null) container2[0].style.display = "none"
    } else {
        container1[0].style.display = "none";
        if (container2 != null) container2[0].style.display = "flex"
    }
}

function presentValue(rate, period, future_value) {
    var pv = future_value / Math.pow(1 + rate, period);
    return pv
}

function futureValue(rate, period, presentValue) {
    var fv = presentValue * Math.pow(1 + rate, period);
    return fv
}

function FV(rate, nper, pmt, pv, type) {
    var pow = Math.pow(1 + rate, nper),
        fv;
    if (rate) fv = pmt * (1 + rate * type) * (1 - pow) / rate - pv * pow;
    else fv = -1 * (pv + pmt * nper);
    return fv.toFixed(2)
}

function paymentAmount(rate, period, fv, type) {
    var b = 0;
    if (type == 1) b = rate;
    var pmt = -(fv / (Math.pow(1 + rate, period) - 1)) * (-rate / (1 + b));
    return pmt
}

function PMT(ir, np, pv, fv, type) {
    var pmt, pvif;
    fv || (fv = 0);
    type || (type = 0);
    if (ir === 0) return -(pv + fv) / np;
    pvif = Math.pow(1 + ir, np);
    pmt = -ir * pv * (pvif + fv) / (pvif - 1);
    if (type === 1) pmt /= 1 + ir;
    return pmt
}

function IRRCalc(CArray) {
    min = 0;
    max = 1;
    do {
        guest = (min + max) / 2;
        NPV = 0;
        for (var j = 0; j < CArray.length; j++) NPV += CArray[j] / Math.pow(1 + guest, j);
        if (NPV > 0) min = guest;
        else max = guest
    } while (Math.abs(NPV) > 1E-6);
    return guest * 100
}

function addCommas(element) {
    if (document.getElementById(element)) {
        var loanAmount = document.getElementById(element).value;
        loanAmount = removeComma(loanAmount);
        document.getElementById(element).value = numWithCommas(Number(loanAmount))
    }
}

function YEARFRAC(start_date, end_date, basis) {
    var basis = typeof basis === "undefined" ? 0 : basis;
    var sdate = moment(new Date(start_date));
    var edate = moment(new Date(end_date));
    if (!sdate.isValid() || !edate.isValid()) return "#VALUE!";
    if ([0, 1, 2, 3, 4].indexOf(basis) === -1) return "#NUM!";
    if (sdate === edate) return 0;
    if (sdate.diff(edate) > 0) {
        var edate = moment(new Date(start_date));
        var sdate = moment(new Date(end_date))
    }
    var syear = sdate.year();
    var smonth = sdate.month();
    var sday = sdate.date();
    var eyear = edate.year();
    var emonth = edate.month();
    var eday = edate.date();
    switch (basis) {
        case 0:
            if (sday === 31 && eday === 31) {
                sday = 30;
                eday = 30
            } else if (sday === 31) sday = 30;
            else if (sday === 30 && eday === 31) eday = 30;
            else if (smonth === 1 && emonth === 1 && sdate.daysInMonth() === sday && edate.daysInMonth() === eday) {
                sday = 30;
                eday = 30
            } else if (smonth === 1 && sdate.daysInMonth() === sday) sday = 30;
            return (eday + emonth * 30 + eyear * 360 - (sday + smonth * 30 + syear * 360)) / 360;
            break;
        case 1:
            var feb29Between = function(date1, date2) {
                var mar1year1 = moment(new Date(date1.year(), 2, 1));
                if (moment([date1.year()]).isLeapYear() &&
                    date1.diff(mar1year1) < 0 && date2.diff(mar1year1) >= 0) return true;
                var mar1year2 = moment(new Date(date2.year(), 2, 1));
                if (moment([date2.year()]).isLeapYear() && date2.diff(mar1year2) >= 0 && date1.diff(mar1year2) < 0) return true;
                return false
            };
            var ylength = 365;
            if (syear === eyear || syear + 1 === eyear && (smonth > emonth || smonth === emonth && sday >= eday)) {
                if (syear === eyear && moment([syear]).isLeapYear()) ylength = 366;
                else if (feb29Between(sdate, edate) || emonth === 1 && eday === 29) ylength = 366;
                return edate.diff(sdate, "days") / ylength
            } else {
                var years =
                    eyear - syear + 1;
                var days = moment(new Date(eyear + 1, 0, 1)).diff(moment(new Date(syear, 0, 1)), "days");
                var average = days / years;
                return edate.diff(sdate, "days") / average
            }
            break;
        case 2:
            return edate.diff(sdate, "days") / 360;
            break;
        case 3:
            return edate.diff(sdate, "days") / 365;
            break;
        case 4:
            if (sday === 31) sday = 30;
            if (eday === 31) eday = 30;
            return (eday + emonth * 30 + eyear * 360 - (sday + smonth * 30 + syear * 360)) / 360;
            break
    }
}
var rangePersonal = [];
var rangeTenurePersonal = [];

function validateFormAndCalculatePersonal() {
    addCommas("loan-amt-personal-input");
    var loan_amt_input = removeComma(document.getElementById("loan-amt-personal-input").value);
    var loan_amt = document.getElementById("loan-amt-personal");
    var tenure_months_input = document.getElementById("tenure-months-personal-input").value;
    var tenure_months = rangeTenurePersonal[document.getElementById("tenure-months-personal").value];
    var interest_rate_input = document.getElementById("interest-rate-personal-input").value;
    var interest_rate =
        rangePersonal[document.getElementById("interest-rate-personal").value];
    var err_loan_amt = validateRangeInput(loan_amt_input, loan_amt.max, loan_amt.min, "error-loan-amt-personal");
    var err_tenure_months = validateRangeInput(tenure_months_input, rangeTenurePersonal[rangeTenurePersonal.length - 1], rangeTenurePersonal[0], "error-tenure-months-personal");
    var err_interest_rate = validateRangeInput(interest_rate_input, rangePersonal[rangePersonal.length - 1], rangePersonal[0], "error-interest-rate-personal");
    if (err_tenure_months)
        if (parseFloat(tenure_months_input) %
            6 != 0) {
            err_tenure_months = false;
            document.querySelector(".error-tenure-months-personal").innerHTML = "Please enter number multiple of 6."
        } else document.querySelector(".error-tenure-months-personal").innerHTML = "";
    if (err_loan_amt, err_tenure_months, err_interest_rate) {
        var roi_per_month = interest_rate / (12 * 100);
        var roi_1 = 1 + roi_per_month;
        var emi_amt = loan_amt.value * roi_per_month * (Math.pow(roi_1, tenure_months) / (Math.pow(roi_1, tenure_months) - 1));
        var interest_payable = emi_amt * tenure_months - loan_amt.value;
        document.getElementById("emi_amt_personal").innerHTML =
            "\x26#8377; " + numWithCommas(Math.round(emi_amt));
        document.getElementById("interest_payable_personal").innerHTML = "\x26#8377; " + numWithCommas(Math.round(interest_payable))
    }
}
$(document).ready(function() {
    for (i = 0; i < 20.01; i = i + .01) {
        var val = parseFloat(i.toFixed(2)).toString();
        rangePersonal.push(val)
    }
    if (document.getElementById("interest-rate-personal")) {
        document.getElementById("interest-rate-personal").max = rangePersonal.length - 1;
        document.getElementById("interest-rate-personal").value = rangePersonal.indexOf("5");
        for (j = 12; j < 73; j = j + 6) {
            var val$36 = parseFloat(j.toFixed(2)).toString();
            rangeTenurePersonal.push(val$36)
        }
        document.getElementById("tenure-months-personal").max = rangeTenurePersonal.length -
            1;
        document.getElementById("tenure-months-personal").value = rangeTenurePersonal.indexOf("72");
        setOnRangeChange("loan-amt-personal-input", "loan-amt-personal", validateFormAndCalculatePersonal);
        setOnRangeChange("tenure-months-personal-input", "tenure-months-personal", validateFormAndCalculatePersonal, rangeTenurePersonal);
        setOnRangeChange("interest-rate-personal-input", "interest-rate-personal", validateFormAndCalculatePersonal, rangePersonal);
        validateFormAndCalculatePersonal()
    }
});
$(".product-slider").slick({
    dots: !0,
    arrows: !0,
    infinite: !1,
    autoplay: !1,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            dots: !1
        }
    }, {
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            dots: !0,
            arrows: !1
        }
    }, {
        breakpoint: 560,
        settings: {
            slidesToShow: 1,
            dots: !0,
            arrows: !1
        }
    }]
});
$(window).on("load resize orientationchange", function() {
    setTimeout(function() {
        $(".product-slider .deal-card").equalHeights()
    }, 500)
});
$(".horizontalTab li").on("click", function() {
    setTimeout(function() {
        $(".product-slider .deal-card").equalHeights()
    }, 500)
});
(function() {
    var relatedOneColBlogContainer = $("#related-blogs-onecol");
    if (!relatedOneColBlogContainer.length) return;
    var domainUrl = location.origin;
    var searchPath = $("#searchPath-onecol").attr("data-searchPath");
    var start = 0;
    var blimit = 2;

    function fetchOneColBlogsData() {
        return fetch(domainUrl + "/content/icicibank.blogsearch.json?searchPath\x3d" + searchPath + "\x26start\x3d" + start + "\x26blimit\x3d" + blimit + "\x26orderby\x3dpublishdate").then(function(response) {
            return response.json()
        }).then(function(data) {
            if (data &&
                data["cards"]) generateOneColHTML(data["cards"])
        }).catch(function() {
            console.log("error in related blogs")
        })
    }
    fetchOneColBlogsData();

    function generateOneColHTML(cards) {
        for (var i$37 = 0, l = cards.length; i$37 < l; i$37++) {
            var html = "\x3cdiv class\x3d'card-item'\x3e" + "\x3cdiv class\x3d'content'\x3e" + "\x3ch5\x3e\x3ca href\x3d'" + cards[i$37].link + "'\x3e" + cards[i$37].title + "\x3c/a\x3e\x3c/h5\x3e" + "\x3cdiv class\x3d'content-bottom'\x3e" + "\x3cp\x3e" + moment(cards[i$37].publishdate).format("D MMM, YYYY") + "\x3c/p\x3e " +
                "\x3c/div\x3e" + "\x3c/div\x3e" + "\x3c/div\x3e";
            relatedOneColBlogContainer.append(html)
        }
    }
})();
(function() {
    var relatedTwoColBlogContainer = $("#related-blogs-twocol");
    if (!relatedTwoColBlogContainer.length) return;
    var domainUrl = location.origin;
    var searchPath = $("#searchPath-twocol").attr("data-searchPath");
    var start = 0;
    var limits = 2;

    function fetchTwoColBlogsData() {
        return fetch(domainUrl + "/content/icicibank.blogsearch.json?searchPath\x3d" + searchPath + "\x26start\x3d" + start + "\x26limits\x3d" + limits + "\x26orderby\x3dpublishdate").then(function(response) {
            return response.json()
        }).then(function(data) {
            if (data && data["cards"]) generateTwoColHTML(data["cards"])
        }).catch(function() {
            console.log("error in related blogs")
        })
    }
    fetchTwoColBlogsData();

    function generateTwoColHTML(cards) {
        for (var i$38 = 0, l = cards.length; i$38 < l; i$38++) {
            var html = "\x3cdiv class\x3d'card-item'\x3e" + "\x3ca href\x3d'" + cards[i$38].link + "'\x3e" + "\x3cdiv class\x3d'media'\x3e" + "\x3cimg src\x3d'" + cards[i$38].image + "' /\x3e" + "\x3c/div\x3e" + "\x3cdiv class\x3d'content'\x3e" + "\x3ch5\x3e" + cards[i$38].title + "\x3c/h5\x3e" + "\x3cdiv class\x3d'content-bottom'\x3e" + "\x3cp\x3e" + moment(cards[i$38].publishdate).format("D MMM, YYYY") + "\x3c/p\x3e" + "\x3c/div\x3e" + "\x3c/div\x3e" +
                "\x3c/a\x3e" + "\x3c/div\x3e";
            relatedTwoColBlogContainer.append(html)
        }
    }
})();
(function() {
    var relatedThreeColBlogContainer = $("#related-blogs-threecol");
    if (!relatedThreeColBlogContainer.length) return;
    var domainUrl = location.origin;
    var searchPath = $("#searchPath-threecol").attr("data-searchPath");
    var start = 0;
    var limit = 3;

    function fetchThreeColBlogsData() {
        return fetch(domainUrl + "/content/icicibank.blogsearch.json?searchPath\x3d" + searchPath + "\x26start\x3d" + start + "\x26limit\x3d" + limit + "\x26orderby\x3dpublishdate").then(function(response) {
            return response.json()
        }).then(function(data) {
            if (data && data["cards"]) generateThreeColHTML(data["cards"])
        }).catch(function() {
            console.log("error in related blogs")
        })
    }
    fetchThreeColBlogsData();

    function generateThreeColHTML(cards) {
        for (var i$39 = 0, l = cards.length; i$39 < l; i$39++) {
            var html = "\x3cdiv class\x3d'card-item'\x3e" + "\x3ca target\x3d'blank' href\x3d'" + cards[i$39].link + "'\x3e" + "\x3cdiv class\x3d'media'\x3e" + "\x3cimg src\x3d'" + cards[i$39].image + "' /\x3e" + "\x3c/div\x3e" + "\x3cdiv class\x3d'content'\x3e" + "\x3ch5\x3e" + cards[i$39].title + "\x3c/h5\x3e" + "\x3cdiv class\x3d'content-bottom'\x3e" + "\x3cp\x3e" + moment(cards[i$39].publishdate).format("D MMM, YYYY") + "\x3c/p\x3e" +
                "\x3c/div\x3e" + "\x3c/div\x3e" + "\x3c/a\x3e" + "\x3c/div\x3e";
            relatedThreeColBlogContainer.append(html)
        }
    }
    $(window).on("load resize orientationchange", function() {
        if ($(window).width() > 991) $(".related-products .row, .how-it-works-slider").each(function() {})
    })
})();
(function() {
    var relatedFourColBlogContainer = $("#related-blogs-fourcol");
    if (!relatedFourColBlogContainer.length) return;
    var domainUrl = location.origin;
    var searchPath = $("#searchPath-fourcol").attr("data-searchPath");
    var start = 0;
    var limit = 4;

    function fetchFourColBlogsData() {
        return fetch(domainUrl + "/content/icicibank.blogsearch.json?searchPath\x3d" + searchPath + "\x26start\x3d" + start + "\x26limit\x3d" + limit + "\x26orderby\x3dpublishdate").then(function(response) {
            return response.json()
        }).then(function(data) {
            if (data &&
                data["cards"]) generateFourColHTML(data["cards"])
        }).catch(function() {
            console.log("error in related blogs")
        })
    }
    fetchFourColBlogsData();

    function generateFourColHTML(cards) {
        for (var i$40 = 0, l = cards.length; i$40 < l; i$40++) {
            var html = "\x3cdiv class\x3d'card-item'\x3e" + "\x3ca target\x3d'blank' href\x3d'" + cards[i$40].link + "'\x3e" + "\x3cdiv class\x3d'media'\x3e" + "\x3cimg src\x3d'" + cards[i$40].image + "' /\x3e" + "\x3c/div\x3e" + "\x3cdiv class\x3d'content'\x3e" + "\x3ch5\x3e" + cards[i$40].title + "\x3c/h5\x3e" + "\x3cdiv class\x3d'content-bottom'\x3e" +
                "\x3cp\x3e" + moment(cards[i$40].publishdate).format("D MMM, YYYY") + "\x3c/p\x3e" + "\x3c/div\x3e" + "\x3c/div\x3e" + "\x3c/a\x3e" + "\x3c/div\x3e";
            relatedFourColBlogContainer.append(html)
        }
    }
})();
$(document).ready(function() {
    $(".related-video-slider").slick({
        dots: !0,
        arrows: !0,
        infinite: !1,
        autoplay: !0,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        }, {
            breakpoint: 640,
            settings: {
                arrows: false,
                slidesToShow: 1,
                dots: true,
                centerMode: true,
                centerPadding: "20px",
                infinite: true
            }
        }]
    })
});

function loadCallback() {
    if ($(".lt-cards").hasClass("slick-initialized")) $(".lt-cards").slick("unslick");
    if ($(".loan-forms .form-slider").hasClass("slick-initialized")) $(".loan-forms .form-slider").slick("unslick");
    $(".loan-forms .form-slider").slick({
        dots: true,
        infinite: false,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                dots: true,
                infinite: false,
                autoplay: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true
            }
        }],
        onInit: function() {
            $(".slick-next .slick-arraow").css("pointer-events", "none")
        }
    })
}
loadCallback();

function deactiveArrow() {
    $(".form-slider .slick-arrow").addClass("arrow-disable")
}

function activateArrow() {
    $(".form-slider .slick-arrow").removeClass("arrow-disable")
}

function showFormError() {
    $(".form-slider .slick-active").find(".form-group-inner").addClass("error")
}
var disableEventsClass = "disable-el";

function disableSlickDots(index) {
    $("#offer-form .slick-dots li").eq(index).addClass(disableEventsClass);
    $("#offer-form-mob .slick-dots li").eq(index).addClass(disableEventsClass)
}

function enableSlickDot(index) {
    $("#offer-form .slick-dots li").eq(index).removeClass(disableEventsClass);
    $("#offer-form-mob .slick-dots li").eq(index).removeClass(disableEventsClass)
}

function validateMobile($this) {
    flag = false;
    msg = "";
    mobile = $($this).val();
    if ($.trim(mobile) == "") disableSlickDots(2);
    else if (!$.isNumeric(mobile)) {
        showFormError();
        msg = "Please enter valid Mobile number";
        $($this).addClass("error");
        disableSlickDots(2)
    } else if (mobile.length < 10) {
        showFormError();
        msg = "Please enter valid Mobile number";
        $($this).addClass("error");
        disableSlickDots(2)
    } else {
        $($this).removeClass("error");
        $(".form-slider .slick-active").find(".form-group-inner").removeClass("error");
        activateArrow();
        enableSlickDot(2);
        flag = true
    }
    $(".error-msg").html(msg);
    return flag
}

function validateName($this) {
    flag = false;
    msg = "";
    var regName = /^[a-zA-Z ]+$/;
    name = $($this).val();
    if ($.trim(name) == "") {
        disableSlickDots(1);
        disableSlickDots(2)
    } else if (!regName.test(name)) {
        showFormError();
        msg = "Please enter valid Name";
        $($this).addClass("error");
        disableSlickDots(1);
        disableSlickDots(2)
    } else {
        $($this).removeClass("error");
        $(".form-slider .slick-active").find(".form-group-inner").removeClass("error");
        activateArrow();
        enableSlickDot(1);
        $(".slick-dots").show();
        flag = true
    }
    $(".error-msg").html(msg);
    return flag
}

function validateEmail($this) {
    flag = false;
    msg = "";
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    email = $($this).val();
    $(".slick-arrow").removeClass("active-btn-submit");
    $(".cust-btn-submit").removeClass("active-btn-submit");
    if ($.trim(email) == "");
    else if (!regEmail.test(email)) {
        showFormError();
        msg = "Please enter valid Email ID";
        $($this).addClass("error")
    } else {
        $($this).removeClass("error");
        $(".form-slider .slick-active").find(".form-group-inner").removeClass("error");
        activateArrow();
        $(".slick-dots").show();
        flag = true;
        $(".slick-arrow").addClass("active-btn-submit");
        $(".cust-btn-submit").addClass("active-btn-submit")
    }
    $(".error-msg").html(msg);
    return flag
}
var timeout = 0;
$(window).on("load resize orientationchange", function() {
    windowLoadCallback()
});

function windowLoadCallback() {
    clearInterval(timeout);
    $(".form-slider").on("afterChange", function(event, slick, currentSlide) {
        if (currentSlide == 3)
            if (!validateMobile($(".input-mobile"))) $(".form-slider").slick("slickGoTo", parseInt(0));
            else if (!validateName($(".input-name"))) $(".form-slider").slick("slickGoTo", parseInt(1));
        else if (!validateEmail($(".input-email"))) $(".form-slider").slick("slickGoTo", parseInt(2));
        else {
            makeCRMcall();
            $("#offer-form-mob").trigger("reset");
            $("#offer-form").trigger("reset")
        }
        if (currentSlide ==
            0) {
            if (!validateName($(".input-name"))) deactiveArrow();
            else activateArrow();
            $(".slick-arrow").removeClass("btn-submit active-btn-submit");
            $(".cust-btn-submit").removeClass("active-btn-submit")
        } else if (currentSlide == 1) {
            if (!validateMobile($(".input-mobile"))) deactiveArrow();
            else activateArrow();
            $(".cust-btn-submit").removeClass("active-btn-submit");
            $(".slick-arrow").removeClass("btn-submit active-btn-submit")
        } else if (currentSlide == 2) {
            $(".slick-arrow").val("Submit");
            $(".slick-arrow").text("Submit");
            $(".slick-arrow").addClass("btn-submit");
            if (!validateEmail($(".input-email"))) deactiveArrow();
            else activateArrow();
            if ($(".cust-btn-submit").length <= 0) $('\x3cbutton class\x3d"cust-btn-submit" type\x3d"button" aria-disabled\x3d"true" value\x3d"Submit"\x3eSubmit\x3c/button\x3e').insertAfter(".form-slider .slick-next");
            else $(".cust-btn-submit").show();
            $(".slick-arrow").hide()
        } else {
            $("#offer-form").trigger("reset");
            $("#offer-form-mob").trigger("reset")
        }
    });
    $("form input").on("keyup", function() {
        deactiveArrow();
        if ($(this).hasClass("input-mobile")) validateMobile($(this));
        else if ($(this).hasClass("input-name")) validateName($(this));
        else if ($(this).hasClass("input-email")) validateEmail($(this))
    });
    deactiveArrow();
    disableSlickDots(1);
    disableSlickDots(2);
    $(".slick-arrow").on("click", function(e) {
        if ($(this).hasClass("arrow-disable")) e.preventDefault()
    });
    if ($(".lead-form-callback").length > 0) $(document).on("click", "button.cust-btn-submit", function() {
        $(this).addClass("activeCall");
        makeCRMcall()
    });

    function makeCRMcall() {
        var formajax = $(".content").find("form").attr("ajax-page");
        if ($(".callback-loan-form").length > 0) {
            var callbackIdName = "#" + $("#callBackId").text();
            var productId = $(callbackIdName).text()
        } else productId = $("#product-key").text();
        var customerName = name;
        var words = customerName.split(" ");
        if (words.length == 1) {
            var customerFirstName = customerName;
            var customerLastName = customerName
        } else {
            var customerFirstName = customerName.substr(0, customerName.indexOf(" "));
            var k = customerName.substr(customerName.indexOf(" "));
            var customerLastName = k.replace(/ /g, "")
        }
        var customerContactNo = mobile;
        var customerEmailId = email;
        var callbackRequest;
        if (typeof formajax != "undefined" && typeof productId != "undefined" && typeof customerFirstName != "undefined" && typeof customerLastName != "undefined" && typeof customerContactNo != "undefined" || typeof customerEmailId != "undefined")
            if (formajax != null && formajax != "" && productId != null && productId != "" && customerFirstName != null && customerFirstName != "" && customerLastName != null && customerLastName != "" && customerContactNo != null && customerContactNo != "" || customerEmailId != null || customerEmailId !=
                "") callbackRequest = formajax + "apiname\x3dsave\x26productCode\x3d" + productId + "\x26custName\x3d" + customerFirstName + "\x26lastName\x3d" + customerLastName + "\x26custMobNo\x3d" + customerContactNo + "\x26custEmail\x3d" + customerEmailId;
        if (typeof callbackRequest != "undefined")
            if (callbackRequest != null && callbackRequest != "") $.ajax({
                dataType: "json",
                url: callbackRequest,
                type: "GET",
                success: function(response) {
                    getCallbackResults = response.getCallbackResults;
                    var successFlag = 0;
                    if (getCallbackResults)
                        for (var i = 0; i < getCallbackResults.length; i++) {
                            var crmServiceResponce =
                                getCallbackResults[i].IsSuccess;
                            var message = getCallbackResults[i].Message;
                            var crmItemKey = getCallbackResults[i].ItemKey;
                            if (typeof message != "undefined" && typeof crmItemKey != "undefined" && typeof crmServiceResponce != "undefined")
                                if (message != null && message != "" && crmItemKey != null && crmItemKey != "" && crmServiceResponce != null && crmServiceResponce != "")
                                    if (message == "Success") {
                                        successFlag++;
                                        $(".offer-form").css("display", "none");
                                        $(".loan-forms .content .success-msg").css("display", "inline-block");
                                        $(".loan-forms .content .success-msg p").css("display",
                                            "inline-block")
                                    }
                        }
                    if (successFlag != 0 && productId.length >= successFlag);
                    else {
                        $(".success-message").addClass("hide");
                        $(".form-slider").slickGoTo(parseInt(0))
                    }
                },
                error: function() {
                    $(".success-message").addClass("hide");
                    $(".form-slider").slick("slickGoTo", parseInt(0));
                    executed = false
                }
            })
    }
}
$(".iMobile-slider").slick({
    dots: !0,
    arrows: !1,
    infinite: !0,
    autoplay: !0,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
});
(function() {
    $(".benefit-card-section .benefit-itsa-carousel").slick({
        dots: !1,
        arrows: !0,
        infinite: !0,
        autoplay: !1,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                dots: !1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                dots: !0,
                arrows: !1
            }
        }, {
            breakpoint: 560,
            settings: {
                slidesToShow: 1,
                dots: !0,
                arrows: !1
            }
        }]
    })
})();
$(".merchants-slider").slick({
    dots: !0,
    arrows: !0,
    infinite: !1,
    autoplay: !1,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 1025,
        settings: {
            arrows: false,
            slidesToShow: 3
        }
    }, {
        breakpoint: 767,
        settings: {
            arrows: false,
            slidesToShow: 2
        }
    }, {
        breakpoint: 640,
        settings: {
            arrows: false,
            slidesToShow: 1
        }
    }]
});
$(".infographics-slider").slick({
    dots: !0,
    arrows: !0,
    infinite: !1,
    autoplay: !1,
    slidesToShow: 1,
    slidesToScroll: 1
});
(function() {
    $(".to-apply-slider").slick({
        dots: !0,
        arrows: !0,
        infinite: !0,
        autoplay: !0,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })
})();
$(".short-card-slider").not(".slick-initialized").slick({
    dots: !0,
    arrows: !0,
    infinite: !1,
    autoplay: !1,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 991,
        settings: {
            arrows: !1,
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 640,
        settings: {
            arrows: !1,
            centerMode: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "45px"
        }
    }]
});
var micrositeDataPromise, micrositeData, finalMicrositeATMResult, finalMicrositeBranchResult, totalResultLength, obj, atmServicesStr = "",
    branchServicesStr = "",
    mapRadius = "",
    selectedCategoryStr = "",
    isBranchSelected = false,
    isATMSelected = false,
    isBothSelected = true;
$(document).ready(function() {
    $(".map-filter-section .sidebar-content .listing-filter .sb-box .content.service-content").mCustomScrollbar();
    if ($(window).width() < 991) {
        $(".atm-landing-section .map-section .filter-icon").click(function() {
            $(this).toggleClass("active");
            $(this).next(".sidebar-body").toggleClass("active")
        });
        $(document).on("click", function(e) {
            var filterIconObj = $(".atm-landing-section .map-section .filter-icon");
            if ($(e.target).closest(".sidebar-body").length === 0 && !($(e.target)[0] == filterIconObj[0] ||
                    $(e.target).closest(".filter-icon")[0] == filterIconObj[0])) {
                $(".sidebar-body").removeClass("active");
                filterIconObj.removeClass("active")
            }
        })
    }
    var selectedCategoryStr = "";
    $(".category-section .checkbox-list input:checked").each(function(i) {
        selectedCategoryStr = selectedCategoryStr + $(this).val() + ","
    });
    callSelectedCategoryMethod(getSelectedCategory(selectedCategoryStr));
    $(".category-section .checkbox-list input").click(function() {
        selectedCategoryStr = "";
        $(".category-section .checkbox-list input:checked").each(function(i) {
            selectedCategoryStr =
                selectedCategoryStr + $(this).val() + ","
        });
        callSelectedCategoryMethod(getSelectedCategory(selectedCategoryStr))
    })
});

function getSelectedCategory(selectedvalue) {
    if (!selectedvalue) return null;
    else if (selectedvalue.toLowerCase() == "branch,") {
        isBranchSelected = true;
        isATMSelected = false;
        isBothSelected = false;
        selectedCategoryStr = "branch";
        return "branch"
    } else if (selectedvalue.toLowerCase() == "atm,") {
        isBranchSelected = false;
        isATMSelected = true;
        isBothSelected = false;
        selectedCategoryStr = "atm";
        return "atm"
    } else {
        isBranchSelected = false;
        isATMSelected = false;
        isBothSelected = true;
        selectedCategoryStr = "";
        return "both"
    }
}

function fetchMicrositeData() {
    if (!micrositeData) $(document).ready(function() {
        $.getJSON("/content/icicibank/in/en.microsite.json", function(result) {
            micrositeData = result;
            finalMicrositeATMResult = result.atm;
            finalMicrositeBranchResult = result.branch;
            micrositeDataPromise = micrositeData && fetchMapData(micrositeData);
            reloadMap()
        }).fail(function() {})
    })
}

function callSelectedCategoryMethod(selectedCategory) {
    selectedCategory && createServicesHtml(selectedCategory);
    switch (selectedCategory) {
        case "branch":
            micrositeDataPromise = fetchMapData(finalMicrositeBranchResult);
            reloadMap();
            break;
        case "atm":
            micrositeDataPromise = fetchMapData(finalMicrositeATMResult);
            reloadMap();
            break;
        case "both":
            micrositeDataPromise = micrositeData && fetchMapData(micrositeData);
            micrositeData && reloadMap();
            fetchMicrositeData();
            break;
        default:
            clearResult();
            obj.testVar = 0;
            mapRadius && $(".nearby-atm-branch").hide()
    }
}
obj = {
    value: "",
    totalValue: function letMeKnow() {
        $("#total-result").text("Showing " + this.testVar + " results")
    },
    get testVar() {
        return this.value
    },
    set testVar(value) {
        this.value = value;
        this.totalValue()
    }
};
atmServicesStr = document.getElementById("serviceMapAtm") && document.getElementById("serviceMapAtm").innerHTML;
branchServicesStr = document.getElementById("serviceMapBranch") && document.getElementById("serviceMapBranch").innerHTML;
mapRadius = document.getElementById("mapRadius") && document.getElementById("mapRadius").innerHTML;
if (mapRadius) $(window).on("scroll", function() {
    $(".new-header.desktop").removeClass("sticky");
    $(".new-header.desktop").removeClass("sticky-enable")
});
var servicesJSON = atmServicesStr && branchServicesStr && transformServices(convertJSON(atmServicesStr), convertJSON(branchServicesStr));

function convertJSON(str) {
    return str && str.length > 0 ? JSON.parse(str) : null
}

function createServicesHtml(categoryType) {
    var finalServiceJson = [];
    if (categoryType && categoryType != "both") finalServiceJson = servicesJSON.filter(function(e) {
        return e.type == categoryType
    });
    else finalServiceJson = servicesJSON;
    var serviceDiv = "";
    $("#service-list").html("");
    for (var i = 0; i < finalServiceJson.length; i++) serviceDiv = serviceDiv + '\x3clabel class\x3d"checkbox-list"\x3e\x3cspan class\x3d"icon"\x3e\x3cimg src\x3d"/content/dam/icicibank/atmbranches/images/microsite/' + finalServiceJson[i].type + '.svg"alt\x3d"" /\x3e\x3c/span\x3e' +
        finalServiceJson[i].name + '\x3cinput checked type\x3d"checkbox" checkboxType\x3d"' + finalServiceJson[i].type + '" name\x3d"map" value\x3d"' + finalServiceJson[i].id + '"\x3e\x3cspan class\x3d"checkmark"\x3e\x3c/span\x3e\x3c/label\x3e';
    $("#service-list").html(serviceDiv);
    bindClickToServices()
}

function bindClickToServices() {
    var checkedServicesArr = [];
    $("#service-list .checkbox-list input").click(function() {
        checkedServicesArr = [];
        $("#service-list .checkbox-list input:checkbox[name\x3dmap]:checked").each(function() {
            checkedServicesArr.push($(this).val())
        });
        getFilteredService(checkedServicesArr)
    })
}

function getFilteredService(uniqueServicesIds) {
    if (isBranchSelected && !isATMSelected) {
        var found = finalMicrositeBranchResult.filter(function(e) {
            return uniqueServicesIds.some(function(r) {
                return e.services.split(",").includes(r)
            })
        });
        micrositeDataPromise = fetchMapData(found);
        reloadMap()
    } else if (!isBranchSelected && isATMSelected) {
        var found$41 = finalMicrositeATMResult.filter(function(e) {
            return uniqueServicesIds.some(function(r) {
                return e.services.split(",").includes(r)
            })
        });
        micrositeDataPromise = fetchMapData(found$41);
        reloadMap()
    }
    if (isBothSelected) {
        var atmServices = [];
        var branchServices = [];
        $("#service-list .checkbox-list input:checkbox[name\x3dmap]:checked").each(function() {
            $(this).attr("checkboxType") == "atm" ? atmServices.push($(this).val()) : branchServices.push($(this).val())
        });
        var foundAtm = finalMicrositeATMResult.filter(function(e) {
            return atmServices.some(function(r) {
                return e.services.split(",").includes(r)
            })
        });
        var foundBranch = finalMicrositeBranchResult.filter(function(e) {
            return branchServices.some(function(r) {
                return e.services.split(",").includes(r)
            })
        });
        micrositeDataPromise = fetchMapData({
            branch: foundBranch,
            atm: foundAtm
        });
        reloadMap()
    }
}

function fetchMapData(finalArray) {
    return new Promise(function(resolve, reject) {
        resolve(finalArray)
    })
}

function transformServices(serviceATMObj, serviceBranchObj) {
    var serviceArray = [];
    for (var key in serviceATMObj)
        if (serviceATMObj.hasOwnProperty(key)) serviceArray.push({
            name: key.replace(/_/g, " "),
            id: serviceATMObj[key],
            type: "atm"
        });
    for (var key in serviceBranchObj)
        if (serviceBranchObj.hasOwnProperty(key)) serviceArray.push({
            name: key.replace(/_/g, " "),
            id: serviceBranchObj[key],
            type: "branch"
        });
    return serviceArray
}
$(window).on("scroll", function() {
    if ($(this).scrollTop() > 150 && $(this).scrollTop() < 300 || $(this).scrollTop() > 800) $(".qrcode-notification-alert").show();
    else $(".qrcode-notification-alert").hide()
});
$(".map-popup-content .service-list").mCustomScrollbar();
var infowindow;
var directionA = [],
    directionB = [];
var dirBankCopy = [];
var searchPlace, placeA, currentBranchMarker = [],
    currentATMMarker = [];
var currentMarkers = [];
var bPickPlace = false;
var directionsDisplay;
var India = {
    lat: 24.1244487,
    lng: 80.9679848
};
var map, distanceWidget, currentLocationCords;
var isMapLoadedFirstTime = true;
var isPageLoad = true;
var _markers = [];

function topRightControls(controlDiv, map, btnTxtArr, mapTypeArr) {
    var controlUI = document.createElement("div");
    controlUI.style.display = "flex";
    controlUI.style.cursor = "pointer";
    controlUI.style.margin = "20px 20px 0 0";
    controlUI.style.textAlign = "center";
    $(controlUI).addClass("map-type-btns");
    controlDiv.appendChild(controlUI);
    mapTypeArr.forEach(function(itm, i) {
        addMapTypeBtn(map, btnTxtArr[i], mapTypeArr[i], controlUI)
    })
}

function addMapTypeBtn(map, btnText, mapType, controlUI) {
    var controlText = document.createElement("div");
    controlText.style.fontFamily = "Muli, sans-serif";
    controlText.style.fontSize = "11.285px";
    controlText.style.fontWeight = "700";
    controlText.style.lineHeight = "30px";
    controlText.style.paddingLeft = "10px";
    controlText.style.paddingRight = "10px";
    controlText.innerHTML = btnText;
    controlUI.appendChild(controlText);
    if (mapType === "ROADMAP") {
        $(controlText).addClass("active-map");
        controlText.style.paddingLeft = "15px";
        controlText.style.borderRadius =
            "50px 0 0 50px"
    }
    if (mapType === "HOME") {
        controlText.style.paddingRight = "15px";
        controlText.style.borderRadius = "0 50px 50px 0"
    }
    controlText.addEventListener("click", function() {
        $(controlUI).find(".active-map").removeClass("active-map");
        $(controlText).addClass("active-map");
        if (mapType === "HOME") {
            $(controlText).removeClass("active-map");
            $(controlUI).find("div").eq(0).addClass("active-map");
            ResetMap();
            loadNavigator();
            map.setMapTypeId(google.maps.MapTypeId["ROADMAP"]);
            toHomePanel();
            return
        }
        map.setMapTypeId(google.maps.MapTypeId[mapType])
    })
}

function initMap() {
    var CustomOp = {
        center: India,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        fullscreenControl: false,
        streetViewControl: true,
        mapTypeControl: false,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        }
    };
    map = new google.maps.Map(document.getElementById("map-content"), CustomOp);
    var topRightControlDiv = document.createElement("div");
    topRightControls(topRightControlDiv, map, ["MAP VIEW", "SATELLITE VIEW", "HYBRID", "HOME"], ["ROADMAP", "SATELLITE", "HYBRID", "HOME"]);
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(topRightControlDiv);
    google.maps.event.addListener(map, "tilesloaded", function(e) {
        afterTilesLoaded()
    });
    google.maps.event.addListener(map, "drag", function(e) {
        distanceWidget && distanceWidget.set("position", map.getCenter())
    });
    google.maps.event.addListener(map, "dragend", function(e) {
        distanceWidget && fetchData()
    });
    initialize();
    var directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(map);
    google.maps.event.addDomListener(document.getElementById("get-dir-submit"),
        "click", calcRoute);

    function calcRoute() {
        if (directionA && directionA.length) {
            var start = new google.maps.LatLng(directionA[0], directionA[1]);
            var end = new google.maps.LatLng(directionB[0], directionB[1]);
            var request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING
            };
            directionsService.route(request, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                    directionsDisplay.setMap(map);
                    var routeNode = directionsDisplay.directions.routes[0].legs[0];
                    var routeStatHtml = routeNode.distance.text + "," + routeNode.duration.text;
                    $(".df-search-instruction .total-distance").html(routeStatHtml);
                    var routeDetailsHtml = "\x3cul\x3e";
                    routeNode.steps && routeNode.steps.length && routeNode.steps.forEach(function(item, index) {
                        routeDetailsHtml += '\x3cli\x3e\x3cp class\x3d"number"\x3e' + index + 1 + '. \x3c/p\x3e\x3cdiv class\x3d"direction-block"\x3e\x3cp class\x3d"directions"\x3e' + item.instructions + '\x3c/p\x3e\x3cp class\x3d"distance"\x3e' + item.distance.text + "," + item.duration.text +
                            "\x3c/p\x3e\x3c/div\x3e\x3c/li\x3e"
                    });
                    routeDetailsHtml += "\x3c/ul\x3e";
                    $(".df-search-instruction .instruction-box").html(routeDetailsHtml)
                } else console.error("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status)
            })
        } else resetDirectionPanel()
    }

    function initialize() {
        var searchDirection = [];
        var autoCompleteService = new google.maps.places.AutocompleteService;
        var placesService = new google.maps.places.PlacesService(map);
        $("#searchPlaces").autocomplete({
            source: function(inputTerm,
                i) {
                autoCompleteService.getPlacePredictions({
                    input: inputTerm.term,
                    types: ["geocode"],
                    componentRestrictions: {
                        country: "in"
                    }
                }, function(predictions, status) {
                    var searchResult = [];
                    status == google.maps.places.PlacesServiceStatus.OK ? 0 == predictions.length ? searchResult.push({
                            label: "No match Found"
                        }) : predictions.forEach(function(e) {
                            searchResult.push({
                                label: truncateText(e.description),
                                value: e.description,
                                placeId: e.place_id
                            })
                        }) : (status = "ZERO_RESULTS") ? searchResult.push({
                            label: "No match Found"
                        }) : searchResult.push({
                            label: status
                        }),
                        i(searchResult)
                })
            },
            minLength: 3,
            delay: 1E3,
            select: function(e, t) {
                placesService.getDetails({
                    placeId: t.item.placeId
                }, function(place, serviceStatus) {
                    if (serviceStatus === google.maps.places.PlacesServiceStatus.OK) {
                        searchDirection = [place.geometry.location.lat(), place.geometry.location.lng(), place.formatted_address];
                        map.setCenter(new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()));
                        !distanceWidget && initWidget();
                        distanceWidget && distanceWidget.set("position", map.getCenter());
                        map.setZoom(13);
                        fetchData()
                    } else searchDirection = []
                })
            }
        });
        $("#searchDirectionA").autocomplete({
            source: function(inputTerm, i) {
                autoCompleteService.getPlacePredictions({
                    input: inputTerm.term,
                    types: ["geocode"],
                    componentRestrictions: {
                        country: "in"
                    }
                }, function(predictions, status) {
                    var searchResult = [];
                    status == google.maps.places.PlacesServiceStatus.OK ? 0 == predictions.length ? searchResult.push({
                            label: "No match Found"
                        }) : predictions.forEach(function(e) {
                            searchResult.push({
                                label: truncateText(e.description),
                                value: e.description,
                                placeId: e.place_id
                            })
                        }) :
                        (status = "ZERO_RESULTS") ? searchResult.push({
                            label: "No match Found"
                        }) : searchResult.push({
                            label: status
                        }), i(searchResult)
                })
            },
            minLength: 3,
            delay: 1E3,
            select: function(e, t) {
                placesService.getDetails({
                    placeId: t.item.placeId
                }, function(place, serviceStatus) {
                    if (serviceStatus === google.maps.places.PlacesServiceStatus.OK) directionA = [place.geometry.location.lat(), place.geometry.location.lng(), place.formatted_address];
                    else directionA = []
                })
            }
        })
    }

    function truncateText(e, t, i) {
        return null == t && (t = 50), null == i && (i = "..."), e.length >
            t ? e.substring(0, t - i.length) + i : e
    }

    function geolocate() {
        if (navigator.geolocation) navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            infoByGeocode(lat, lng)
        }, function() {});
        else document.getElementById("searchDirectionA").value = "Geolocation is not supported by this browser."
    }

    function infoByGeocode(lat, lng) {
        var google_map_pos = new google.maps.LatLng(lat, lng);
        var google_maps_geocoder = new google.maps.Geocoder;
        google_maps_geocoder.geocode({
                latLng: google_map_pos
            },
            function(results, status) {
                if (status == google.maps.GeocoderStatus.OK && results[0]) {
                    var address = results[0].formatted_address;
                    document.getElementById("searchDirectionA").value = address;
                    directionA = [lat, lng, address]
                }
            })
    }
    document.getElementById("get-geo-loc").addEventListener("click", geolocate);

    function pickPlace() {
        bPickPlace = !bPickPlace;
        if (bPickPlace) {
            map.setOptions({
                draggableCursor: "crosshair"
            });
            document.getElementById("pick-point-a").style.filter = "grayscale(1)";
            map.addListener("click", function(mapsMouseEvent) {
                infoByGeocode(mapsMouseEvent.latLng.lat(),
                    mapsMouseEvent.latLng.lng());
                setTimeout(calcRoute, 1E3);
                (bPickPlace = true) && pickPlace()
            })
        } else {
            document.getElementById("pick-point-a").style.filter = "grayscale(0)";
            map.setOptions({
                draggableCursor: "grab"
            });
            google.maps.event.clearListeners(map, "click")
        }
    }
    document.getElementById("pick-point-a").addEventListener("click", pickPlace)
}

function gm_authFailure() {
    $("#map-error").removeClass("hide");
    $("#map-content").addClass("hide");
    $(".result-num").addClass("hide")
}

function toHomePanel() {
    $(".direction-filter").addClass("hide");
    $(".listing-filter").removeClass("hide")
}

function resetDirectionPanel() {
    $("#get-dir-form").get(0).reset();
    directionA = [];
    directionB = dirBankCopy;
    $("#directionB").html(directionB[2]);
    $(".df-search-instruction .total-distance, .df-search-instruction .instruction-box").html("");
    directionsDisplay.setMap(null);
    (bPickPlace = true) && document.getElementById("pick-point-a").click()
}

function openGetDirSidebar(e, markerIndex) {
    var markerObj = currentMarkers[markerIndex];
    e.preventDefault();
    $(".direction-filter").removeClass("hide");
    $(".listing-filter").addClass("hide");
    infowindow && infowindow.close();
    var isBranch = !markerObj.hasOwnProperty("atmId");
    var dirBhtml = isBranch ? markerObj["branchName"] + ":" + markerObj["address"] + "-" + markerObj["pincode"] : markerObj["landmark"] + ":ATM ID- " + markerObj["poiId"] + markerObj["address"] + "-" + markerObj["pinCode"];
    $("#directionB").html(dirBhtml);
    dirBankCopy =
        directionB = [markerObj["latitude"], markerObj["longitude"], dirBhtml];
    resetDirectionPanel();
    $("html, body").animate({
        scrollTop: $(".map-section").offset().top
    }, 1E3);
    if ($(window).width() < 480) $("#map-content").height("1000")
}! function() {
    $("#get-dir-form").on("submit", function(e) {
        e.preventDefault()
    });
    $("#get-dir-reset").on("click", function(e) {
        resetDirectionPanel()
    });
    $(".df-toggle #swap-dir").on("click", function(e) {
        if (directionA && directionA.length) {
            $("#directionB").html(directionA[2]);
            $("#searchDirectionA").val(directionB[2]);
            var temp = directionA;
            directionA = directionB;
            directionB = temp
        }
    });
    $(".direction-filter .close").click(function() {
        toHomePanel();
        resetDirectionPanel();
        reloadMap();
        if ($(window).width() < 480) $("#map-content").height("550")
    })
}();
$(document).ready(function() {
    if ($(".microsite-comp").length > 0)
        if (typeof google === "object" && typeof google.maps === "object") google.maps && google.maps.event.addDomListener(window, "load", initMap)
});

function afterTilesLoaded() {
    if (isMapLoadedFirstTime) loadNavigator()
}
var navigatorLatLng;

function loadNavigator() {
    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        navigatorLatLng = new google.maps.LatLng(pos.lat, pos.lng);
        currentLocationCords = navigatorLatLng;
        map.setCenter(navigatorLatLng);
        map.setZoom(13);
        initWidget()
    }, function() {
        map.getCenter();
        map.setZoom(5);
        $(".section.location-section").hide()
    });
    else {
        map.getCenter();
        map.setZoom(5);
        $(".section.location-section").hide()
    }
    isMapLoadedFirstTime =
        false
}

function initWidget() {
    distanceWidget = new DistanceWidget;
    clearResult();
    distanceWidget && fetchData()
}

function DistanceWidget() {
    this.set("map", map);
    this.set("position", map.getCenter());
    var centerCustomIcon = {
        url: "/content/dam/icicibank/atmbranches/images/microsite/Center.png",
        size: new google.maps.Size(24, 24),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(12, 12)
    };
    var centerMarker = new google.maps.Marker({
        draggable: true,
        raiseOnDrag: false,
        icon: centerCustomIcon,
        title: "Drag to move new location!"
    });
    centerMarker.bindTo("map", this);
    centerMarker.bindTo("position", this);
    var that = this;
    google.maps.event.addListener(centerMarker,
        "dragend",
        function() {
            fetchData();
            that.fitCenter()
        });
    var createRadiusObj = new RadiusWidget;
    createRadiusObj.bindTo("map", this);
    createRadiusObj.bindTo("center", this, "position");
    this.bindTo("distance", createRadiusObj);
    this.bindTo("bounds", createRadiusObj)
}

function RadiusWidget() {
    var circle = new google.maps.Circle({
            fillOpacity: .2,
            fillColor: "#A7A7A7",
            strokeColor: "#000000",
            strokeWeight: 1,
            strokeOpacity: .8,
            zIndex: -1
        }),
        t = mapRadius;
    $(document).ready(function() {
        $(window).width() <= 980 && (t = 5, map.setZoom(12))
    });
    this.set("distance", t);
    this.bindTo("bounds", circle);
    circle.bindTo("center", this);
    circle.bindTo("map", this);
    circle.bindTo("radius", this);
    this.addSizer_()
}
if (typeof google === "object" && typeof google.maps === "object") {
    DistanceWidget.prototype = new google.maps.MVCObject;
    RadiusWidget.prototype = new google.maps.MVCObject
}
DistanceWidget.prototype.fitCenter = function() {
    map.setCenter(this.get("position"))
};
RadiusWidget.prototype.distance_changed = function() {
    this.set("radius", 1E3 * this.get("distance"))
};
RadiusWidget.prototype.setDistance = function() {
    var distanceBetweenPoints = this.distanceBetweenPoints_(this.get("center"), this.get("sizer_position"));
    this.set("distance", distanceBetweenPoints);
    if (this.get("bounds")) {
        var changed_latLong = new google.maps.LatLng(this.get("center").lat(), this.get("bounds").getNorthEast().lng());
        this.set("sizer_position", changed_latLong)
    }
};
RadiusWidget.prototype.distanceBetweenPoints_ = function(sizerPos, centerPos) {
    if (!sizerPos || !centerPos) return 0;
    var i = (centerPos.lat() - sizerPos.lat()) * Math.PI / 180,
        r = (centerPos.lng() - sizerPos.lng()) * Math.PI / 180,
        n = Math.sin(i / 2) * Math.sin(i / 2) + Math.cos(sizerPos.lat() * Math.PI / 180) * Math.cos(centerPos.lat() * Math.PI / 180) * Math.sin(r / 2) * Math.sin(r / 2),
        s = 6371 * (2 * Math.atan2(Math.sqrt(n), Math.sqrt(1 - n)));
    return s > 10 && (s = 10), s < .5 && (s = .5), s
};
RadiusWidget.prototype.center_changed = function() {
    if (this.get("bounds")) {
        var center_lng = this.get("bounds").getNorthEast().lng(),
            sizerPos = new google.maps.LatLng(this.get("center").lat(), center_lng);
        this.set("sizer_position", sizerPos)
    }
};
RadiusWidget.prototype.fitCircle = function() {
    if (this.get("bounds")) {
        map.fitBounds(this.get("bounds"));
        var fitCircleLng = this.get("bounds").getNorthEast().lng(),
            fitCirclePos = new google.maps.LatLng(this.get("center").lat(), fitCircleLng);
        this.set("sizer_position", fitCirclePos)
    }
};
RadiusWidget.prototype.addSizer_ = function() {
    var resizableIcon = {
            url: "/content/dam/icicibank/atmbranches/images/microsite/Resize.png",
            size: new google.maps.Size(24, 24),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(12, 12)
        },
        resizableMarker = new google.maps.Marker({
            draggable: true,
            icon: resizableIcon,
            cursor: "ew-resize",
            title: "Drag to resize the cicle!",
            raiseOnDrag: false
        });
    resizableMarker.bindTo("map", this);
    resizableMarker.bindTo("position", this, "sizer_position");
    var that = this;
    google.maps.event.addListener(resizableMarker,
        "drag",
        function() {
            that.setDistance()
        }), google.maps.event.addListener(resizableMarker, "dragend", function() {
        that.fitCircle();
        fetchData()
    })
};

function getdistantTooltipContent(distance) {
    var tooltipHtml = "";
    return distance && (tooltipHtml = "\x3cdiv\x3e" + roundNumber(distance, 2) + " \x3c/div\x3e"), tooltipHtml
}

function CreateMarker(totalMarkers) {
    clearResult();
    totalMarkers.forEach(function(i, index) {
        var isBranch = !i.hasOwnProperty("atmId");
        infowindow = new google.maps.InfoWindow({
            pixelOffset: new google.maps.Size(180, 150)
        });
        var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(i.latitude, i.longitude),
            icon: isBranch ? "/content/dam/icicibank/atmbranches/images/microsite/branch_marker.png" : "/content/dam/icicibank/atmbranches/images/microsite/atm_marker.png",
            title: (isBranch ? "" : i["landmark"] + " : ") +
                i["address"] + " " + i["city"] + " " + i["state"] + " - " + (isBranch ? i["pincode"] : i["pinCode"])
        });
        _markers.push(marker);
        google.maps.event.addListener(marker, "click", openMarkerInfo);

        function openMarkerInfo() {
            infowindow.setContent(' \x3cdiv class\x3d"map-popup-content"\x3e \x3ch5\x3e' + (isBranch ? i["branchName"] : i["title"]) + '\x3c/h5\x3e \x3cdiv class\x3d"address"\x3e \x3cspan class\x3d"map-icon"\x3e \x3cimg src\x3d"/content/dam/icicibank/atmbranches/images/microsite/map.svg" alt\x3d"" /\x3e \x3c/span\x3e \x3cp\x3e ' +
                i["address"] + (!isBranch ? ", " + i["city"] + ", " + i["state"] + ", " + i["pinCode"] : ", " + i["pincode"]) + " \x3c/p\x3e \x3c/div\x3e" + (isBranch ? '\x3cdiv class\x3d"address"\x3e \x3cspan class\x3d"map-icon"\x3e \x3cimg src\x3d"/content/dam/icicibank/atmbranches/images/microsite/time.svg" alt\x3d"" /\x3e \x3c/span\x3e \x3cp\x3e' + "IFSC CODE: " + i["ifsc"] + "\x3c/p\x3e \x3c/div\x3e" : "") + (isBranch ? '\x3cdiv class\x3d"address"\x3e \x3cspan class\x3d"map-icon"\x3e \x3cimg src\x3d"/content/dam/icicibank/atmbranches/images/microsite/time.svg" alt\x3d"" /\x3e \x3c/span\x3e \x3cp\x3e' +
                    "Monday-Saturday Branch Working Hrs: " + i["mondayToSaturdayBranchWorking"] + "\x3cbr/\x3e Monday-Saturday Cash Working Hrs: " + i["mondayToSaturdayCashBranchWorking"] + "\x3cbr/\x3e (Closed on 2nd and 4th Saturday)" + "\x3c/p\x3e \x3c/div\x3e" : "") + "\x3ch5\x3eServices\x3c/h5\x3e" + (isBranch ? serviceContainerPopup(i["servicesNames"]) : serviceContainerPopup(i["micrositeServiceNames"])) + '\x3cdiv class\x3d"button-group"\x3e \x3ca class\x3d"ic-btn ' + (isBranch ? "get-dir-branch" : "get-dir-atm") + '" href\x3d"#" onclick\x3d"openGetDirSidebar(event, ' +
                index + ')"\x3eGet Directions\x3c/a\x3e \x3c/div\x3e \x3c/div\x3e');
            infowindow.open(map, marker);
            setTimeout(function() {
                $(".map-popup-content .service-list").mCustomScrollbar()
            }, 100)
        }
    })
}

function serviceContainerPopup(sevNameArr) {
    var sevDiv = "";
    sevNameArr && sevNameArr.split(",").forEach(function(i, index) {
        if (i) sevDiv = sevDiv + '\x3cli\x3e \x3cdiv class\x3d"ser-icon"\x3e \x3cimg src\x3d"/content/dam/icicibank/atmbranches/images/microsite/' + modifyImageName(i) + '.svg" alt\x3d"" /\x3e \x3c/div\x3e' + modifyServiceName(i) + "\x3c/li\x3e"
    });
    return '\x3cul class\x3d"service-list"\x3e' + sevDiv + "\x3c/ul\x3e"
}

function modifyImageName(imgName) {
    return imgName.replace(/[^A-Z0-9]/ig, "-").toLowerCase()
}

function modifyServiceName(servName) {
    return servName.replace(/-/g, " ")
}

function fetchData() {
    var d;
    currentMarkers = [];
    currentBranchMarker = [];
    currentATMMarker = [];
    micrositeDataPromise && micrositeDataPromise.then(function(result) {
        result && result.branch && getBranchMarkersArray(result.branch);
        result && result.atm && getATMMarkersArray(result.atm);
        result && !result.branch && !result.atm && iterateForMarkers(result, selectedCategoryStr);
        obj.testVar = currentMarkers.length;
        callNearbyFunction(currentBranchMarker, currentATMMarker, distanceWidget.get("position").lat(), distanceWidget.get("position").lng());
        CreateMarker(currentMarkers)
    }).catch(console.error)
}

function iterateForMarkers(finalResponse, type) {
    for (var i = 0; i < finalResponse.length; i++) {
        d = distanceWidget && distance(distanceWidget.get("position").lat(), distanceWidget.get("position").lng(), finalResponse[i].latitude, finalResponse[i].longitude, "K");
        if ((distanceWidget && distanceWidget.get("distance") || mapRadius) > d) currentMarkers.push(finalResponse[i]);
        if (6 > d)
            if (type !== "") type == "branch" ? currentBranchMarker.push(finalResponse[i]) : currentATMMarker.push(finalResponse[i]);
            else {
                currentBranchMarker = [];
                currentATMMarker = []
            }
    }
}

function getBranchMarkersArray(branchArray) {
    iterateForMarkers(branchArray, type = "branch")
}

function getATMMarkersArray(atmArray) {
    iterateForMarkers(atmArray, type = "atm")
}

function distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var radlon1 = Math.PI * lon1 / 180;
    var radlon2 = Math.PI * lon2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") dist = dist * 1.609344;
    if (unit == "N") dist = dist * .8684;
    return dist
}

function roundNumber(e, t) {
    var i = Math.round(e * Math.pow(10, t)) / Math.pow(10, t) + "";
    i.indexOf(".");
    return i
}

function clearResult() {
    if (_markers)
        for (i = 0; i < _markers.length; i++) _markers[i].setVisible(false);
    _markers = new Array
}

function reloadMap() {
    map && map.setZoom(13);
    distanceWidget && fetchData()
}

function ResetMap() {
    map.setCenter(currentLocationCords);
    map.setZoom(13);
    clearResult();
    distanceWidget && (distanceWidget.set("map", null), distanceWidget = null)
}
window.callNearbyFunction = function(micrositeBranchData, micrositeATMData, nearLat, nearLong) {
    $(".nearby-atm-branch").hide();
    var showKnowMoreBtn = $(".microsite-comp").attr("showKnowMoreBtn");
    var totalNearbyATM, totalNearbyBranch;
    if (!isPageLoad) {
        $(".trending-deals-slider.atm-nearby").slick("unslick");
        $(".trending-deals-slider.branch-nearby").slick("unslick")
    }
    $(".trending-deals-slider.branch-nearby").html("");
    $(".trending-deals-slider.atm-nearby").html("");

    function getDistanceFromLatLonInKm(lat1, lon1, lat2,
        lon2) {
        var R = 6371;
        var dLat = deg2rad(lat2 - lat1);
        var dLon = deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180)
    }
    var nearbyEl = $(".location-section");
    var localLat = parseFloat(nearLat);
    var localLong = parseFloat(nearLong);
    var localDistance = nearbyEl.attr("data-branchdistance") ? nearbyEl.attr("data-branchdistance") :
        "5";
    var phoneNum = nearbyEl.attr("data-phonenum");
    var knowmoreText = nearbyEl.attr("data-knowmore") ? nearbyEl.attr("data-knowmore") : "KNOW MORE";
    var getDirText = nearbyEl.attr("data-knowgetdirectionmore") ? nearbyEl.attr("data-knowgetdirectionmore") : "GET DIRECTIONS";
    var openText = nearbyEl.attr("data-branchopentext") ? nearbyEl.attr("data-branchopentext") : "Open";
    var closesText = nearbyEl.attr("data-branchclosestext") ? nearbyEl.attr("data-branchclosestext") : "Closes";
    var closedText = nearbyEl.attr("data-branchclosedtext") ?
        nearbyEl.attr("data-branchclosedtext") : "Closed";
    var branchtiming = nearbyEl.attr("data-branchtiming") ? nearbyEl.attr("data-branchtiming") : "24*7 , 365 days open";
    createBranchNearby();
    createATMNearby();
    isPageLoad = false;
    if (!isPageLoad && totalNearbyATM > 0 && totalNearbyBranch > 0) {
        $(".nearby-branch-tab").addClass("active");
        $(".nearby-atm-tab").removeClass("active");
        $(".nearby-branch-tab").show();
        $("#branch").addClass("active").show();
        $("#atm").removeClass("active")
    }

    function createBranchNearby() {
        var result = [];
        for (var i = 0; i < micrositeBranchData.length; i++) {
            var blat = micrositeBranchData[i].latitude;
            var blog = micrositeBranchData[i].longitude;
            var address = "";
            address += micrositeBranchData[i].address ? micrositeBranchData[i].address + ", " : "";
            address += micrositeBranchData[i].city ? micrositeBranchData[i].city + ", " : "";
            address += micrositeBranchData[i].state ? micrositeBranchData[i].state + ", " : "";
            address += micrositeBranchData[i].pincode ? micrositeBranchData[i].pincode + ". " : "";
            var btimings_weekday = micrositeBranchData[i].mondayToFridayWorkingHrs ?
                micrositeBranchData[i].mondayToFridayWorkingHrs : "09:30AM-05:00PM";
            var btimings_saturday = micrositeBranchData[i].saturdayWorkingHrs ? micrositeBranchData[i].saturdayWorkingHrs : "09:30AM-05:00PM";
            var url = micrositeBranchData[i].knowMoreUrl ? micrositeBranchData[i].knowMoreUrl : "";
            var bdistance = getDistanceFromLatLonInKm(localLat, localLong, blat, blog);
            if (bdistance < localDistance)
                if (bdistance > .5) result.push({
                    bdistance: bdistance,
                    address: address,
                    burl: url || "https://maps.google.com",
                    branchName: micrositeBranchData[i].branchName ||
                        "ICICI Bank Patto Plaza, Panaji",
                    bdirurl: micrositeBranchData[i].directionUrl || "https://maps.google.com",
                    btimings_weekday: btimings_weekday,
                    btimings_saturday: btimings_saturday
                })
        }
        var sorted = result.sort(function(a, b) {
            return a.bdistance - b.bdistance
        });
        var branchCount = sorted.length;
        totalNearbyBranch = sorted.length;
        if (branchCount > 0) {
            var initNearbyBranchSlider = function() {
                $(".trending-deals-slider.branch-nearby").not(".slick-initialized").slick({
                    dots: true,
                    infinite: true,
                    autoplay: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 2
                        }
                    }, {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                            dots: true
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                            dots: true,
                            centerMode: true,
                            centerPadding: "15px",
                            infinite: true
                        }
                    }]
                });
                $(".nearby-atm-branch").show()
            };
            var appendBranch = function(bstr) {
                branchSliderContainer.append(bstr)
            };
            var getTimeInMins = function(str) {
                var hour, min;
                hour = str.split(":")[0];
                min = str.split(":")[1].substring(0, 2);
                if (str.toUpperCase().indexOf("PM") >= 0) return (12 +
                    parseInt(hour)) * 60 + parseInt(min);
                else return parseInt(hour) * 60 + parseInt(min)
            };
            var compareTime = function(openTime, closeTime) {
                var d = new Date;
                var hour, min, curTime;
                hour = d.getHours();
                min = d.getMinutes();
                curTime = hour * 60 + min;
                if (curTime >= openTime && curTime < closeTime) return openText;
                else return closedText
            };
            var getOpenCloseStatus = function(weekdayTime, saturdayTime) {
                var closeTime, openTime, timing;
                if (weekdayTime && saturdayTime) {
                    var d = new Date;
                    var day = d.getDay();
                    if (day == 0) return closedText;
                    else if (day == 6) {
                        timing = saturdayTime.split("-");
                        openTime = getTimeInMins(timing[0].toUpperCase());
                        closeTime = getTimeInMins(timing[1].toUpperCase());
                        return compareTime(openTime, closeTime)
                    } else {
                        timing = weekdayTime.split("-");
                        openTime = getTimeInMins(timing[0].toUpperCase());
                        closeTime = getTimeInMins(timing[1].toUpperCase());
                        return compareTime(openTime, closeTime)
                    }
                } else return ""
            };
            var getCloseTiming = function(weekdayTime, saturdayTime) {
                if (weekdayTime && saturdayTime) {
                    var d = new Date;
                    var day = d.getDay();
                    if (day == 0) return "";
                    else if (day == 6) return saturdayTime.split("-")[1];
                    else return weekdayTime.split("-")[1]
                } else return ""
            };
            var keys = [];
            var branchSliderContainer = $("#branch .trending-deals-slider");
            var len = sorted.length > 5 ? 6 : sorted.length;
            for (var i = 0; i < len; ++i) {
                sorted[i].bphone = phoneNum ? phoneNum + " " : "1860 120 7777 ";
                sorted[i].bstatus = getOpenCloseStatus(sorted[i].btimings_weekday, sorted[i].btimings_saturday);
                sorted[i].bstatusText = getCloseTiming(sorted[i].btimings_weekday, sorted[i].btimings_saturday);
                var opencloseStatus = sorted[i].bstatus == "Open" ? '\x3cdiv class\x3d"time"\x3e' +
                    closesText + "\x3cspan\x3e" + " " + sorted[i].bstatusText + "\x3c/span\x3e\x3c/div\x3e" : "";
                var bhtml = '\x3cdiv class\x3d"deal-card location-card"\x3e\x3cdiv class\x3d"card-heading"\x3e\x3ch5\x3e' + sorted[i].branchName + '\x3c/h5\x3e\x3cdiv class\x3d"open-status"\x3e\x3cdiv class\x3d"status"\x3e' + sorted[i].bstatus + " " + "\x3c/div\x3e" + opencloseStatus + '\x3c/div\x3e\x3cdiv class\x3d"phone"\x3e' + sorted[i].bphone + '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"card-body"\x3e\x3cdiv class\x3d"address"\x3e' + sorted[i].address +
                    '\x3c/div\x3e\x3cdiv class\x3d"button-group"\x3e\x3ca href\x3d"' + sorted[i].bdirurl + '" class\x3d"ic-btn" target\x3d"_blank"\x3e' + getDirText + "\x3c/a\x3e " + (showKnowMoreBtn == "true" ? '\x3ca href\x3d"' + sorted[i].burl + '" class\x3d"ic-more" target\x3d"_blank"\x3e' + knowmoreText + "\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e" : "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e");
                appendBranch(bhtml)
            }
            initNearbyBranchSlider();
            setTimeout(function() {
                $(".trending-deals-slider.branch-nearby .deal-card").equalHeights()
            }, 500)
        } else {
            $(".nearby-branch-tab").hide();
            $(".nearby-atm-tab").addClass("active");
            $("#branch").removeClass("active");
            $("#atm").addClass("active").show()
        }
    }

    function createATMNearby() {
        var result = [];
        for (var i = 0; i < micrositeATMData.length; i++) {
            var lat = micrositeATMData[i].latitude;
            var log = micrositeATMData[i].longitude;
            var address = "";
            address += micrositeATMData[i].address ? micrositeATMData[i].address + ", " : "";
            address += micrositeATMData[i].city ? micrositeATMData[i].city + ", " : "";
            address += micrositeATMData[i].state ? micrositeATMData[i].state + ", " : "";
            address +=
                micrositeATMData[i].pincode ? micrositeATMData[i].pincode + ". " : "";
            var distance = getDistanceFromLatLonInKm(localLat, localLong, lat, log);
            var url = micrositeATMData[i].knowMoreUrl ? micrositeATMData[i].knowMoreUrl : "";
            if (distance <= localDistance)
                if (distance > .5) result.push({
                    distance: distance,
                    address: address,
                    url: url || "https://maps.google.com",
                    dirurl: micrositeATMData[i].directionUrl || "https://maps.google.com",
                    branchName: micrositeATMData[i].landmark || "ICICI BANK ATM"
                })
        }
        var sorted = result.sort(function(a, b) {
            return a.distance -
                b.distance
        });
        var atmCount = sorted.length;
        totalNearbyATM = sorted.length;
        if (atmCount > 0) {
            var initNearbyAtmSlider = function() {
                $(".trending-deals-slider.atm-nearby").not(".slick-initialized").slick({
                    dots: true,
                    infinite: true,
                    autoplay: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 2
                        }
                    }, {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                            dots: true
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                            dots: true,
                            centerMode: true,
                            centerPadding: "15px",
                            infinite: true
                        }
                    }]
                });
                $(".nearby-atm-branch").show()
            };
            var appendAtm = function(str) {
                atmSliderContainer.append(str)
            };
            var keys = [];
            $(".nearby-atm-tab").show();
            var atmSliderContainer = $("#atm .trending-deals-slider");
            var len = sorted.length > 5 ? 6 : sorted.length;
            for (var i = 0; i < len; ++i) {
                sorted[i].status = openText;
                sorted[i].statusText = branchtiming;
                var html = '\x3cdiv class\x3d"deal-card location-card"\x3e\x3cdiv class\x3d"card-heading"\x3e\x3ch5\x3e' + sorted[i].branchName + '\x3c/h5\x3e\x3cdiv class\x3d"open-status"\x3e\x3cdiv class\x3d"status"\x3e' +
                    sorted[i].status + " " + '\x3c/div\x3e\x3cdiv class\x3d"time"\x3e' + sorted[i].statusText + '\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"card-body"\x3e\x3cdiv class\x3d"address"\x3e' + sorted[i].address + '\x3c/div\x3e\x3cdiv class\x3d"button-group"\x3e\x3ca href\x3d"' + sorted[i].dirurl + '" class\x3d"ic-btn" target\x3d"_blank" \x3e' + getDirText + "\x3c/a\x3e " + (showKnowMoreBtn == "true" ? '\x3ca href\x3d"' + sorted[i].url + '" class\x3d"ic-more" target\x3d"_blank"\x3e' + knowmoreText + "\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e" :
                        "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e");
                appendAtm(html)
            }
            initNearbyAtmSlider();
            setTimeout(function() {
                $(".trending-deals-slider.atm-nearby .deal-card").equalHeights()
            }, 500)
        } else $(".nearby-atm-tab").hide()
    }
    $(".deals-section.atm-and-branch-section .nav-tabs li a").on("click", function() {
        $(".trending-deals-slider.atm-nearby").slick("refresh");
        $(".trending-deals-slider.branch-nearby").slick("refresh");
        setTimeout(function() {
                $(".trending-deals-slider.atm-nearby .deal-card").equalHeights();
                $(".trending-deals-slider.atm-nearby .deal-card .card-body .address").equalHeights()
            },
            500);
        setTimeout(function() {
            $(".trending-deals-slider.branch-nearby .deal-card").equalHeights();
            $(".trending-deals-slider.branch-nearby .deal-card .card-body .address").equalHeights()
        }, 500)
    });
    setTimeout(function() {
        $(".trending-deals-slider.branch-nearby .deal-card").equalHeights();
        $(".trending-deals-slider.branch-nearby .deal-card .card-body .address").equalHeights();
        $(".trending-deals-slider.branch-nearby .deal-card .card-heading").equalHeights()
    }, 500)
};
$(".debit-card-categories-tab .trending-deals-slider").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1025,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true
        }
    }, {
        breakpoint: 640,
        settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
            centerMode: true,
            centerPadding: "15px",
            infinite: true
        }
    }]
});
$(".debit-card-categories-tab .nav-tabs li a").on("click", function() {
    $(".debit-card-categories-tab .trending-deals-slider").slick("refresh")
});
var loadCompareCard = [],
    totalCheckedBox = 0;
var cardUlEl = $("#cc-selected-card").length > 0 && document.getElementById("cc-selected-card");
var cardsDetailEl = $("#compareCardJson").length > 0 && document.getElementById("compareCardJson");
$(document).ready(function() {
    $(".account-variants-card-with-img .checkbox-list input").click(function() {
        var id = $(this).parent().attr("id");
        totalCheckedBox = $(".account-variants-card-with-img .checkbox-list input:checkbox:checked").length;
        if (totalCheckedBox > 3) {
            $("#" + id + " input:checkbox:checked").prop("checked", false);
            alert("You have already selected 3 items");
            return
        }
        if ($(this).is(":checked")) {
            loadCompareCard.push(id);
            if (loadCompareCard.length > 0) $(".compare-toast.creditcard-toast").show();
            addToCompareCard(loadCompareCard,
                cardUlEl)
        } else {
            var index$42 = loadCompareCard.indexOf(id);
            if (index$42 > -1) {
                loadCompareCard.splice(index$42, 1);
                addToCompareCard(loadCompareCard, cardUlEl)
            }
            if (loadCompareCard.length == 0) $(".compare-toast.creditcard-toast").hide()
        }
    });
    $(".compare-toast.creditcard-toast .removecard").click(function() {
        $(".compare-toast.creditcard-toast").hide();
        $(".account-variants-card-with-img .checkbox-list").find('[type\x3d"checkbox"]').prop("checked", false);
        cardUlEl ? cardUlEl.innerHTML = "" : undefined;
        loadCompareCard = []
    });
    $(".comparebtn.comparecard").click(function() {
        compareAllCards();
        $(".compare-toast.creditcard-toast").hide()
    });
    loadMore()
});

function addToCompareCard(loadedCard, ccUlElement) {
    ccUlElement ? ccUlElement.innerHTML = "" : undefined;
    for (var i$43 = 0; i$43 < loadedCard.length; i$43++) {
        var cardLiEl = document.createElement("li");
        cardLiEl.setAttribute("data-id", "cc-" + loadedCard[i$43]);
        cardLiEl.innerHTML = '\x3cspan class\x3d"title"\x3e' + loadedCard[i$43] + '\x3c/span\x3e \x3cspan class\x3d"cc close"\x3e\x3c/span\x3e';
        ccUlElement && ccUlElement.appendChild(cardLiEl)
    }
    removeCardClick(loadedCard, ccUlElement)
}

function removeCardClick(loadedCard, el) {
    var liCCId;
    $(".cc.close").off();
    $(".cc.close").click(function() {
        liCCId = $(this).parent().attr("data-id").replace(/^cc-+/i, "");
        $("#" + liCCId + " input:checkbox:checked").prop("checked", false);
        var index = loadedCard.indexOf(liCCId);
        if (index > -1) {
            loadedCard.splice(index, 1);
            addToCompareCard(loadedCard, el)
        }
        if (loadedCard.length == 0) $(".compare-toast.creditcard-toast").hide()
    })
}

function compareAllCards() {
    var ccObj = JSON.parse(cardsDetailEl.innerHTML);
    if (loadCompareCard.length >= 2 && loadCompareCard.length <= 3) {
        var result = ccObj.filter(function(o1) {
            return loadCompareCard.some(function(o2) {
                return o1.id === o2
            })
        });
        var storingFinalValue = result.length >= 2 && result.length <= 3 && convertToString(result);
        setLocalStorage("compareCards", storingFinalValue)
    }
}

function convertToString(str) {
    return JSON.stringify(str)
}

function setLocalStorage(keyName, value) {
    localStorage.setItem(keyName, value)
}

function loadMore() {
    $(".cc-card:lt(6)").show();
    var items = $("div.cc-card").length;
    var shown = 6;
    if (items <= 6) {
        $("#load-more-cc-cards").hide();
        return
    }
    $("#load-more-cc-cards").click(function() {
        shown = $("div.cc-card:visible").length + 6;
        if (shown < items) $("div.cc-card:lt(" + shown + ")").show();
        else {
            $("div.cc-card:lt(" + items + ")").show();
            $("#load-more-cc-cards").hide()
        }
    })
}
var loadedCards = [];
var cardDetails = [];
var ccPageLoadedCards = [],
    selectedFilters = [];
var isCardAlreadyPresent = false;
var ccPageToastEl = $("#ccpage-selected-card").length > 0 && document.getElementById("ccpage-selected-card");
$.fn.equalMaxHeights = function() {
    var max_height = 0;
    $(this).height("auto");
    $(this).each(function() {
        max_height = Math.max($(this).outerHeight(), max_height)
    }), $(this).each(function() {
        $(this).height(max_height)
    })
};
$(window).on("resize orientationchange", function() {
    setCompareHeight()
});

function setCompareHeight() {
    $(".comparing-cards-section .comparing-cards").each(function() {
        $(this).find(".comparing-column .cards").equalMaxHeights();
        $(this).find(".comparing-column .cards .card-title").equalMaxHeights();
        $(this).find(".comparing-column .content").equalMaxHeights()
    });
    for (var i = 0; i < $(".comparing-cards-section .compare-left-heading").find(".comparing-block.content").length - 1; i++) $(".comparing-column").find(".comparing-block.content:eq(" + i + ")").equalMaxHeights()
}
$(document).ready(function() {
    selectedFilters = [];
    loadCardData();
    $(document).on("click", ".empty-card-content", function() {
        $(".comparing-card-popup").show();
        $("body").addClass("no-scroll");
        $(".comparing-card-popup .popup-body").mCustomScrollbar()
    });
    $(".comparing-card-popup .close").click(function() {
        $(".comparing-card-popup .search-box-area input").val("");
        $(".popup-card-slider .card-slider .card").css("display", "block");
        $(".comparing-card-popup").hide();
        $(".ccpage-toast.creditcard-toast").hide();
        $("body").removeClass("no-scroll")
    });
    $(".popup-body .checkbox-list.cc-page-addcompare").click(function() {
        $(".ccpage-toast.creditcard-toast").show()
    });
    $(".checkbox-list.cc-page-addcompare input").click(function() {
        var id = $(this).parent().attr("id");
        totalCheckedBox = $(".popup-body .checkbox-list.cc-page-addcompare input:checkbox:checked").length;
        if (totalCheckedBox > 3) {
            $("#" + id + " input:checkbox:checked").prop("checked", false);
            alert("You have already selected 3 items");
            return
        }
        if ($(this).is(":checked")) {
            ccPageLoadedCards.push(id);
            if (ccPageLoadedCards.length >
                0) $(".ccpage-toast.creditcard-toast").show();
            addToCompareCard(ccPageLoadedCards, ccPageToastEl)
        } else {
            var index$44 = ccPageLoadedCards.indexOf(id);
            if (index$44 > -1) {
                ccPageLoadedCards.splice(index$44, 1);
                addToCompareCard(ccPageLoadedCards, ccPageToastEl)
            }
            if (ccPageLoadedCards.length == 0) $(".ccpage-toast.creditcard-toast").hide()
        }
    });
    $('.filter-dropdown-content .checkbox-list input[type\x3d"checkbox"]').click(function() {
        selectedFilters = [];
        $(".filter-dropdown-content .checkbox-list input:checkbox[name\x3dcc-page]:checked").each(function() {
            selectedFilters.push({
                type: $(this).parent().parent().parent().attr("class"),
                value: $(this).val()
            })
        });
        applyFiltersToCards(selectedFilters)
    });
    $(".ccpage-toast.creditcard-toast .removecard").click(function() {
        $(".ccpage-toast.creditcard-toast").hide();
        removeCardFromCompare("all");
        setCompareHeight()
    });
    $(".filter-dropdown").click(function() {
        $(this).toggleClass("active");
        $(".filter-dropdown-content").toggleClass("hide")
    });
    $(".cc-page.reset-button").click(function() {
        $(".filter-dropdown-content .checkbox-list input:checkbox").prop("checked", false);
        $(".popup-card-slider .card-slider .card h6").each(function() {
            $(".popup-card-slider .card-slider .card").css("display",
                "block")
        })
    });
    $(".comparing-card-popup .search-box-area input").focus(function() {
        $(".comparing-card-popup .search-box-area input").val("");
        $(".search-listing").removeClass("active");
        $(".popup-card-slider .card-slider .card").css("display", "block")
    });
    $(".comparing-card-popup .search-box-area input").keyup(function() {
        $(".search-container").addClass("active");
        var inputText = $(this)[0].value.toLowerCase();
        if (inputText.length > 0) $(".popup-card-slider .card-slider .card h6").each(function() {
            var title = $(this).text();
            if (title.toLowerCase().indexOf(inputText) > -1) $(".popup-card-slider .card-slider .card." + title.replace(/ /g, "-").toLowerCase()).css("display", "block");
            else $(".popup-card-slider .card-slider .card." + title.replace(/ /g, "-").toLowerCase()).css("display", "none")
        })
    });
    $(".selected-card li .close").click(function() {
        removeCardFromCompare($(this).parent().attr("data-id"))
    });
    $(".cc-page-comparebtn.comparecard").click(function(e) {
        e.preventDefault();
        populateCompare();
        $(".comparing-card-popup, .ccpage-toast.creditcard-toast").hide();
        $("body").removeClass("no-scroll")
    });
    $(".removeFromCompare").click(function() {
        removeCardFromCompare($(this).closest(".comparing-column.compare-content").attr("data-id"));
        $(this).closest(".comparing-column.compare-content").find(".comparing-block").addClass("hide");
        $(this).closest(".comparing-column.compare-content").addClass("empty-card-content").find(".empty-cards").removeClass("hide");
        return false
    });
    $(".replaceCompare").click(function() {
        removeCardFromCompare($(this).closest(".comparing-column.compare-content").attr("data-id"));
        $(".comparing-card-popup").show();
        $("body").addClass("no-scroll");
        $(".comparing-card-popup .popup-body").mCustomScrollbar()
    });
    $(".redirectToCompareCard").click(function(e) {
        var redirectData = "";
        $.each(loadedCards, function(index, id) {
            redirectData += "#" + id
        });
        $(this).attr("href", $(this).attr("href") + "?" + redirectData)
    })
});

function removeCardFromCompare(id) {
    if (id == "all") {
        loadedCards = [];
        populateCompare()
    } else if ($.inArray(id, loadedCards) !== -1) loadedCards[$.inArray(id, loadedCards)] = ""
}

function populateCompare() {
    var cardData = isCardAlreadyPresent && cardDetails.length > 0 ? cardDetails : getCardDetail();
    $(".comparing-column.compare-content").each(function(index) {
        if (cardData[index]) {
            $(this).removeClass("empty-card-content").find(".comparing-block.empty-cards").addClass("hide");
            $(this).find(".comparing-block").not(".empty-cards").removeClass("hide");
            populateCompareData($(this), cardData[index]);
            deepLinking()
        } else {
            $(this).addClass("empty-card-content").find(".comparing-block.empty-cards").removeClass("hide");
            $(this).find(".comparing-block").not(".empty-cards").addClass("hide")
        }
    });
    setTimeout(function() {
        setCompareHeight()
    }, 250)
}

function populateCompareData(ele, data) {
    var imageBlock = $(ele).find(".comparing-block.cards").not(".empty-cards");
    jQuery.each(data, function(i, val) {
        if (i == "ApplyNow") return;
        if (i == "id") $(ele).attr("data-id", val);
        if (i == "title") {
            imageBlock.find(".card-title").text(data.title);
            return
        }
        if (i == "imageRef") {
            imageBlock.find(".card-image").attr("src", data.imageRef);
            return
        }
        if (i == "ctas") {
            if (val.length > 0) {
                $(ele).find(".apply-btn" + " a").attr("data-app", val[0]["defaultLinkUrl"]);
                $(ele).find(".apply-btn" + " a").attr("data-app-android",
                    val[0]["androidLinkUrl"]);
                $(ele).find(".apply-btn" + " a").attr("data-app-ios", val[0]["iosLinkUrl"])
            }
            return
        }
        $(ele).find("." + i).text(val)
    })
}

function getCardDetail() {
    var tempArray = [];
    for (var index$45 = 0; index$45 < cardDetails.length; index$45++) {
        var element = cardDetails[index$45];
        var element_index = $.inArray(element["id"], ccPageLoadedCards);
        if (element_index > -1) tempArray[element_index] = element
    }
    return tempArray
}

function applyFiltersToCards(selectedFil) {
    if (selectedFil.length > 0) $(".popup-card-slider .card-slider .card h6").each(function() {
        $(".popup-card-slider .card-slider .card").css("display", "none")
    });
    else $(".popup-card-slider .card-slider .card h6").each(function() {
        $(".popup-card-slider .card-slider .card").css("display", "block")
    });
    var ar;
    for (var index$46 = 0; index$46 < selectedFil.length; index$46++) {
        var element = selectedFil[index$46];
        if (element["type"] == "Income") {
            ar = cardDetails.filter(function(el) {
                return el.income ==
                    element.value.split(" ")[0]
            });
            showCardsByFilters(ar)
        }
        if (element["type"] == "User Type") {
            ar = cardDetails.filter(function(el) {
                return el.userType == element.value
            });
            showCardsByFilters(ar)
        }
        if (element["type"] == "Benefits") {
            ar = cardDetails.filter(function(el) {
                return el.benefits == element.value
            });
            showCardsByFilters(ar)
        }
    }
}

function showCardsByFilters(cardsArr) {
    for (var index$47 = 0; index$47 < cardsArr.length; index$47++) {
        var id = cardsArr[index$47].id;
        $(".popup-card-slider .card-slider .card." + id).css("display", "block")
    }
}

function loadCardData() {
    var localStorageData = localStorage.getItem("compareCards");
    if (localStorageData) {
        cardDetails = convertJSON(localStorageData);
        isCardAlreadyPresent = true;
        populateCompare()
    } else {
        cardDetails = convertJSON(document.getElementById("cc-component") && document.getElementById("cc-component").innerHTML);
        isCardAlreadyPresent = false
    }
}

function bankingCardSlider() {
    $(".banking-card-section .card-lists").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        fade: true
    })
}
var timeoutCounterforMap;
$(window).on("load orientationchange", function() {
    clearTimeout(timeoutCounterforMap);
    timeoutCounterforMap = setTimeout(function() {
        $(".accordion--scroll").mCustomScrollbar();
        if ($(window).width() < 991) bankingCardSlider();
        else $(".banking-card-section .card-lists").hasClass("slick-initialized") && $(".banking-card-section .card-lists").slick("unslick")
    }, 250)
});
var filterPageCardData = [];
$(document).ready(function() {
    getLoadedFilterData();
    $('.filter-sidebar-page.sidebar-content .checkbox-list input[type\x3d"checkbox"]').click(function() {
        $("div.filterCardPage").hide();
        if ($(this).parent().hasClass("active")) $(this).parent().removeClass("active");
        else $(this).parent().addClass("active");
        var userTypeData = $(".filter-sidebar-page.sidebar-content .user-type-filter.active");
        var accountTypeData = $(".filter-sidebar-page.sidebar-content .loan-bracket.active");
        var userTypeDataArray = $.map(userTypeData,
            function(val, i) {
                return $(val).data("filter")
            });
        var accountTypeDataArray = $.map(accountTypeData, function(val, i) {
            return $(val).data("filter")
        });
        var combinations = [];
        if (userTypeDataArray.length > 0) {
            var userTypeTexts = $.map(userTypeData, function(val, i) {
                return $(val).text()
            });
            combinations = userTypeDataArray
        } else;
        if (accountTypeDataArray.length > 0) {
            var accountTypeTexts = $.map(accountTypeData, function(val, i) {
                return $(val).text()
            });
            if (combinations.length > 0) {
                var tempCombinations = combinations;
                combinations = [];
                $.each($(tempCombinations),
                    function(i, c) {
                        $.each($(accountTypeDataArray), function(ii, sz) {
                            var combination = [c, sz];
                            combinations.push(combination)
                        })
                    })
            } else combinations = accountTypeDataArray
        } else;
        if (combinations.length > 0) $.each($(combinations), function(i, val) {
            if ($.isArray(val)) {
                var classes = val.join(".");
                $("div.filterCardPage.account-variants-card" + "." + classes).show()
            } else $("div.filterCardPage.account-variants-card" + "." + val).show()
        });
        else $("div.filterCardPage").show();
        var showDataLength = $("div.myList:visible").length;
        if (showDataLength ===
            0) {
            $(".compare-account").append("\x3cdiv class\x3d'no-result'\x3e\x3cbr/\x3e\x3cbr/\x3e\x3c/div\x3e");
            $(".filter-content #loadMore").css("display", "none")
        }
        var cardDataLength = $("div.card:visible").length;
        if (cardDataLength == 0) $(".cardClick").hide()
    })
});

function getLoadedFilterData() {
    filterPageCardData = convertJSON(document.getElementById("cardsAsJson") && document.getElementById("cardsAsJson").innerHTML)
}
if ($(".filtercard .sidebar-body .account-variants-card").text().trim() == "" && $(".filtercard .sidebar-body .account-variants-card .button-group").text().trim() == "") $(".filtercard .sidebar-body .account-variants-card").css("display", "none");
$(document).ready(function() {
    var getOTP = $("#getOTP").val();
    var validateOtp = $("#validateOtp").val();
    var getFedid = $("#getFedid").val();
    var getProductOffers = $("#getProductOffers").val();
    var FEDID;
    var failurecounter = 0;
    $("#mccmProductOffers").css("display", "none");
    $("#defaultProductOffers").css("display", "none");
    $(document).on("click", "#sendOTPBtnId", function() {
        var mobileNo = $("#mobileId").val();
        var $regexmobileno = /[7-9]{1}[0-9]{9}/;
        if (typeof mobileNo != "undefined")
            if (mobileNo != null && mobileNo != "")
                if (mobileNo.match($regexmobileno)) $.ajax({
                    dataType: "json",
                    url: getFedid + "prodCustMobNo\x3d" + mobileNo,
                    type: "POST",
                    success: function(carResponse) {
                        var FedidResponse = carResponse["fedID"];
                        if (typeof FedidResponse != "undefined")
                            if (FedidResponse != "" && FedidResponse != null) {
                                FEDID = FedidResponse;
                                GenerateOtp = FedidResponse;
                                if (typeof FEDID != "undefined" && typeof GenerateOtp != "undefined")
                                    if (FEDID != "" && FEDID != null && GenerateOtp != "" && GenerateOtp != null) {
                                        $("#errorMsg").empty();
                                        $("#errorMsg").css("display", "none");
                                        $(".verbtn").css("display", "none");
                                        $(".orderotp").css("display", "none");
                                        $("#otpDiv").css("display", "block")
                                    } else {
                                        $("#errorMsg").empty();
                                        $("#errorMsg").append("\x3cdiv\x3eThis is not a ICICI Bank registered mobile number. To open an account, Please \x3ca href\x3d'/Personal-Banking/account-deposit/savings-account/index.page?ITM\x3dnli_cms_SA_saving_account_product_offer_clickhere_textlink'\x3eclick here\x3c/a\x3e\x3c/div\x3e");
                                        $("#errorMsg").css("display", "block");
                                        $("#mccmProductOffers").empty();
                                        $("#mccmProductOffers").css("display", "none");
                                        var elmnt = document.getElementById("websiteproductoffers");
                                        elmnt.scrollIntoView();
                                        $("#defaultProductOffers").css("display", "block")
                                    }
                                else {
                                    $("#errorMsg").empty();
                                    $("#errorMsg").append("\x3cdiv\x3eOtp max limit reached, kindly check your personalized offers after some time \x3c/div\x3e");
                                    $("#errorMsg").css("display", "block");
                                    $("#mccmProductOffers").empty();
                                    $("#mccmProductOffers").css("display", "none");
                                    var elmnt = document.getElementById("websiteproductoffers");
                                    elmnt.scrollIntoView();
                                    $("#defaultProductOffers").css("display", "block")
                                }
                            } else {
                                $("#errorMsg").empty();
                                $("#errorMsg").append("\x3cdiv\x3eThis is not a ICICI Bank registered mobile number. To open an account, Please \x3ca href\x3d'/Personal-Banking/account-deposit/savings-account/index.page?ITM\x3dnli_cms_SA_saving_account_product_offer_clickhere_textlink'\x3eclick here\x3c/a\x3e\x3c/div\x3e");
                                $("#errorMsg").css("display", "block");
                                $("#mccmProductOffers").empty();
                                $("#mccmProductOffers").css("display", "none");
                                var elmnt = document.getElementById("websiteproductoffers");
                                elmnt.scrollIntoView();
                                $("#defaultProductOffers").css("display",
                                    "block")
                            }
                        else {
                            $("#errorMsg").empty();
                            $("#errorMsg").append("\x3cdiv\x3eThis is not a ICICI Bank registered mobile number. To open an account, Please \x3ca href\x3d'/Personal-Banking/account-deposit/savings-account/index.page?ITM\x3dnli_cms_SA_saving_account_product_offer_clickhere_textlink'\x3eclick here\x3c/a\x3e\x3c/div\x3e");
                            $("#errorMsg").css("display", "block");
                            $("#mccmProductOffers").empty();
                            $("#mccmProductOffers").css("display", "none");
                            var elmnt = document.getElementById("websiteproductoffers");
                            elmnt.scrollIntoView();
                            $("#defaultProductOffers").css("display", "block")
                        }
                    },
                    error: function() {
                        $("#errorMsg").empty();
                        $("#errorMsg").append("\x3cdiv\x3eThis is not a ICICI Bank registered mobile number. To open an account, Please \x3ca href\x3d'/Personal-Banking/account-deposit/savings-account/index.page?ITM\x3dnli_cms_SA_saving_account_product_offer_clickhere_textlink'\x3eclick here\x3c/a\x3e\x3c/div\x3e");
                        $("#errorMsg").css("display", "block");
                        $("#mccmProductOffers").empty();
                        $("#mccmProductOffers").css("display",
                            "none");
                        var elmnt = document.getElementById("websiteproductoffers");
                        elmnt.scrollIntoView();
                        $("#defaultProductOffers").css("display", "block")
                    }
                });
                else {
                    $("#errorMsg").empty();
                    $("#errorMsg").append("\x3cdiv\x3eThis is not a ICICI Bank registered mobile number. To open an account, Please \x3ca href\x3d'/Personal-Banking/account-deposit/savings-account/index.page?ITM\x3dnli_cms_SA_saving_account_product_offer_clickhere_textlink'\x3eclick here\x3c/a\x3e\x3c/div\x3e");
                    $("#errorMsg").css("display", "block")
                }
    });
    $(document).on("click", "#goBtnId", function() {
        var mobileNo = $("#mobileId").val();
        var validateotp = $("#otpField").val();
        if (typeof mobileNo != "undefined" && typeof validateotp != "undefined")
            if (mobileNo != null && mobileNo != "" && validateotp != null && validateotp != "") $.ajax({
                dataType: "json",
                url: validateOtp + "prodCustMobNo\x3d" + mobileNo + "\x26providedOtp\x3d" + validateotp + "\x26fedID\x3d" + FEDID,
                type: "POST",
                success: function(response) {
                    var validateOtpResponse = response;
                    if (response != null && typeof response != undefined) {
                        $("#errorMsg").empty();
                        $("#errorMsg").css("display", "none");
                        $("#defaultProductOffers").css("display", "none");
                        $("#mccmProductOffers").empty();
                        $("#mccmProductOffers").append("\x3cdiV\x3e" + validateOtpResponse.Offer_Msg1 + "\x3c/diV\x3e");
                        $("#otpField").val("");
                        var elmnt = document.getElementById("websiteproductoffers");
                        elmnt.scrollIntoView();
                        $("#mccmProductOffers").css("display", "block")
                    } else {
                        failurecounter = failurecounter + 1;
                        if (failurecounter > 3) {
                            $("#goBtnId").css("display", "none");
                            $("#errorMsg").empty();
                            $("#errorMsg").append("\x3cp\x3eInvalid OTP entered max limit reached, click on resend button\x3c/p\x3e");
                            $("#errorMsg").css("display", "block");
                            $("#mccmProductOffers").empty();
                            $("#mccmProductOffers").css("display", "none");
                            var elmnt = document.getElementById("websiteproductoffers");
                            elmnt.scrollIntoView();
                            $("#defaultProductOffers").css("display", "block")
                        } else {
                            $("#errorMsg").empty();
                            $("#errorMsg").append("\x3cp\x3eInvalid OTP entered\x3c/p\x3e");
                            $("#errorMsg").css("display", "block");
                            $("#mccmProductOffers").empty();
                            $("#mccmProductOffers").css("display", "none");
                            var elmnt = document.getElementById("websiteproductoffers");
                            elmnt.scrollIntoView();
                            $("#defaultProductOffers").css("display", "block")
                        }
                    }
                },
                error: function() {
                    $("#errorMsg").empty();
                    $("#errorMsg").append("\x3cp\x3eInvalid OTP entered, click on resend button\x3c/p\x3e");
                    $("#errorMsg").css("display", "block")
                }
            })
    });
    $(document).on("click", "#resendBtnId", function() {
        $("#mccmProductOffers").empty();
        $("#mccmProductOffers").css("display", "none");
        $("#defaultProductOffers").css("display", "none");
        var mobileNo = $("#mobileId").val();
        var $regexmobileno = /[7-9]{1}[0-9]{9}/;
        if (typeof mobileNo !=
            "undefined")
            if (mobileNo != null && mobileNo != "")
                if (mobileNo.match($regexmobileno)) $.ajax({
                    dataType: "json",
                    url: getFedid + "prodCustMobNo\x3d" + mobileNo,
                    type: "POST",
                    success: function(carResponse) {
                        var FedidResponse = carResponse["fedID"];
                        if (typeof FedidResponse != "undefined")
                            if (FedidResponse != "" && FedidResponse != null) {
                                FEDID = FedidResponse;
                                GenerateOtp = FedidResponse;
                                if (typeof FEDID != "undefined" && typeof GenerateOtp != "undefined")
                                    if (FEDID != "" && FEDID != null && GenerateOtp != "" && GenerateOtp != null) {
                                        $("#resendBtnId").css("display",
                                            "none");
                                        setTimeout(function() {
                                            $("#resendBtnId").css("margin-top", "10px");
                                            $("#resendBtnId").css("display", "block")
                                        }, 12E4);
                                        $("#goBtnId").css("display", "block");
                                        $("#errorMsg").empty();
                                        $("#errorMsg").append("\x3cdiv\x3eOtp resent successfully\x3c/div\x3e");
                                        $("#errorMsg").css("display", "block");
                                        $("#otpField").val("");
                                        $(".verbtn").css("display", "none");
                                        $(".orderotp").css("display", "none");
                                        $("#otpDiv").css("display", "block")
                                    } else {
                                        $("#errorMsg").empty();
                                        $("#errorMsg").append("\x3cdiv\x3eThis is not a ICICI Bank registered mobile number. To open an account, Please \x3ca href\x3d'/Personal-Banking/account-deposit/savings-account/index.page?ITM\x3dnli_cms_SA_saving_account_product_offer_clickhere_textlink'\x3eclick here\x3c/a\x3e\x3c/div\x3e");
                                        $("#errorMsg").css("display", "block");
                                        $("#mccmProductOffers").empty();
                                        $("#mccmProductOffers").css("display", "none");
                                        var elmnt = document.getElementById("websiteproductoffers");
                                        elmnt.scrollIntoView();
                                        $("#defaultProductOffers").css("display", "block")
                                    }
                                else {
                                    $("#errorMsg").empty();
                                    $("#errorMsg").append("\x3cdiv\x3eThis is not a ICICI Bank registered mobile number. To open an account, Please \x3ca href\x3d'/Personal-Banking/account-deposit/savings-account/index.page?ITM\x3dnli_cms_SA_saving_account_product_offer_clickhere_textlink'\x3eclick here\x3c/a\x3e\x3c/div\x3e");
                                    $("#errorMsg").css("display", "block");
                                    $("#mccmProductOffers").empty();
                                    $("#mccmProductOffers").css("display", "none");
                                    var elmnt = document.getElementById("websiteproductoffers");
                                    elmnt.scrollIntoView();
                                    $("#defaultProductOffers").css("display", "block")
                                }
                            } else {
                                $("#errorMsg").empty();
                                $("#errorMsg").append("\x3cdiv\x3eThis is not a ICICI Bank registered mobile number. To open an account, Please \x3ca href\x3d'/Personal-Banking/account-deposit/savings-account/index.page?ITM\x3dnli_cms_SA_saving_account_product_offer_clickhere_textlink'\x3eclick here\x3c/a\x3e\x3c/div\x3e");
                                $("#errorMsg").css("display", "block");
                                $("#mccmProductOffers").empty();
                                $("#mccmProductOffers").css("display", "none");
                                var elmnt = document.getElementById("websiteproductoffers");
                                elmnt.scrollIntoView();
                                $("#defaultProductOffers").css("display", "block")
                            }
                        else {
                            $("#errorMsg").empty();
                            $("#errorMsg").append("\x3cdiv\x3eThis is not a ICICI Bank registered mobile number. To open an account, Please \x3ca href\x3d'/Personal-Banking/account-deposit/savings-account/index.page?ITM\x3dnli_cms_SA_saving_account_product_offer_clickhere_textlink'\x3eclick here\x3c/a\x3e\x3c/div\x3e");
                            $("#errorMsg").css("display", "block");
                            $("#mccmProductOffers").empty();
                            $("#mccmProductOffers").css("display", "none");
                            var elmnt = document.getElementById("websiteproductoffers");
                            elmnt.scrollIntoView();
                            $("#defaultProductOffers").css("display", "block")
                        }
                    },
                    error: function() {
                        $("#errorMsg").empty();
                        $("#errorMsg").append("\x3cdiv\x3eThis is not a ICICI Bank registered mobile number. To open an account, Please \x3ca href\x3d'/Personal-Banking/account-deposit/savings-account/index.page?ITM\x3dnli_cms_SA_saving_account_product_offer_clickhere_textlink'\x3eclick here\x3c/a\x3e\x3c/div\x3e");
                        $("#errorMsg").css("display", "block");
                        $("#mccmProductOffers").empty();
                        $("#mccmProductOffers").css("display", "none");
                        var elmnt = document.getElementById("websiteproductoffers");
                        elmnt.scrollIntoView();
                        $("#defaultProductOffers").css("display", "block")
                    }
                });
                else {
                    $("#errorMsg").empty();
                    $("#errorMsg").append("\x3cdiv\x3eThis is not a ICICI Bank registered mobile number. To open an account, Please \x3ca href\x3d'/Personal-Banking/account-deposit/savings-account/index.page?ITM\x3dnli_cms_SA_saving_account_product_offer_clickhere_textlink'\x3eclick here\x3c/a\x3e\x3c/div\x3e");
                    $("#errorMsg").css("display", "block")
                }
    })
});

function postEvent() {
    if ($(".presentation-post-event").length > 0) $(".presentation-post-event").each(function(i) {
        var link = $(this).attr("data-presentation");
        $.ajax({
            url: link,
            success: function(data) {},
            error: function(jqXHR, statusText, errorThrown) {
                consoleLog(errorThrown)
            }
        })
    });
    if ($(".postEvent").length > 0) $(document).on("click", "a.postEvent", function() {
        var link = $(this).prop("rel");
        var href = $(this).attr("href");
        window.parent.location.href = href;
        $.ajax({
            url: link,
            success: function(data) {},
            error: function(jqXHR, statusText,
                errorThrown) {
                consoleLog(errorThrown)
            }
        });
        return false
    })
}
var tempArray = [];
var filters = [];
var offerData = "/content/icicibank.nearbyoffers.json";
var sessionCookie;
var isLocationOn = true;
var detectLocationClicked = false;
var offersChunks = [];
var isLoadingCards = false;
var currentSortId = "latest";
var searchInput = "";
var checkBoxFilters = [];
var radioButtonFilter = "all";
var nearbyFilter_limit = 6;
var offset = 6;
var isAllCardsRendered = false;
var userSelectedCity = "";
var userLatitude = null;
var userLongitude = null;
var isUserSelectedCheckoutNearByCity = false;
var baseAPIUrl = "/content/icicibank.nearbyoffers.0." + nearbyFilter_limit + ".city.lat.lng.store.sort.searchTerm.filters.json";
$(window).on("load", function() {
    sessionStorage.setItem("topCitySelected", "")
});
sessionStorage.setItem("sessionCookie", "defaultOffers");
var date = new Date;
var currentDate = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + date.getDate();

function process(date) {
    var parts = date.split("-");
    return new Date(parts[0], parts[1] - 1, parts[2])
}
var offerData;
var searchPlace;

function initCheckoutNearbyMap() {
    getNearbyLocation();
    initializeCheckoutNearbyAutoComplete();

    function initializeCheckoutNearbyAutoComplete() {
        searchPlace = new google.maps.places.Autocomplete(document.getElementById("searchPlaces"), {
            types: ["geocode"],
            componentRestrictions: {
                country: "in"
            }
        });
        google.maps.event.addListener(searchPlace, "place_changed", function() {
            var selectedLocation = searchPlace.getPlace();
            var finalLocation = selectedLocation.address_components[0].long_name.toLowerCase();
            sessionStorage.setItem("topCitySelected",
                finalLocation);
            userSelectedCity = finalLocation;
            isUserSelectedCheckoutNearByCity = true;
            console.log("User google maps searched final location");
            console.log(finalLocation);
            loadCards(false)
        })
    }
}
$(document).ready(function() {
    var OffersfedId = getCookie("PER_COOKIE");
    if (OffersfedId) $(".checkoutnearby .nearbylocation-card").addClass("sameOfferCard");
    else $(".checkoutnearby .nearbylocation-card").removeClass("sameOfferCard");
    if ($(".checkoutnearby").length > 0)
        if (typeof google === "object" && typeof google.maps === "object") initCheckoutNearbyMap()
});
$(".location-pick").click(function() {
    getNearbyLocation()
});

function getNearbyLocation() {
    var geocoder = new google.maps.Geocoder;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
        $(".close_btn").click(function() {
            $(".loc-map-popup-wrap").hide();
            return false
        });
        if (localStorage.getItem("location-access") === "false" || !localStorage.getItem("location-access")) $(".loc-map-popup-wrap").show();
        else $(".loc-map-popup-wrap").hide()
    } else;
}

function showPosition(position) {
    isLocationOn = true;
    if (localStorage) localStorage.setItem("location-access", "true");
    $.cookie("location", "on");
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    userLatitude = lat;
    userLongitude = lng;
    $.cookie("NearByOffersLatitude", lat, {
        expires: 90
    });
    $.cookie("NearByOffersLongitude", lng, {
        expires: 90
    });
    cityLatLng(lat, lng);
    sessionStorage.setItem("sessionCookie", "LocationOffers");
    $(".loc-map-popup-wrap").hide()
}

function cityLatLng(lat, lng) {
    var geocoder = new google.maps.Geocoder;
    var sublocalityData = [];
    var pincode;
    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({
        "latLng": latlng
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK)
            if (results[1]) {
                for (var i = 0; i < results[0].address_components.length; i++)
                    for (var b = 0; b < results[0].address_components[i].types.length; b++) {
                        if (results[0].address_components[i].types[b] == "locality") {
                            city = results[0].address_components[i];
                            break
                        }
                        if (results[0].address_components[i].types[b] ==
                            "sublocality") {
                            sublocality = results[0].address_components[i];
                            sublocality = sublocality.short_name.replace(/\s+/g, "-").toLowerCase();
                            sublocalityData.push({
                                sublocality: sublocality
                            });
                            $.cookie("NearByOffersSubLocality", sublocality, {
                                expires: 90
                            });
                            break
                        }
                        if (results[0].address_components[i].types[b] == "postal_code") {
                            pincode = results[0].address_components[i];
                            pincode = pincode.short_name;
                            break
                        }
                    }
                cityname = city.short_name.replace(/\s+/g, "-").toLowerCase();
                console.log("line 676 cityName we got-- current auto detected cityname");
                console.log(cityname);
                userSelectedCity = cityname;
                $.cookie("NearByOffersCity", cityname, {
                    expires: 90
                });
                if (pincode != null && pincode != "") $.cookie("NearByOffersPincode", pincode, {
                    expires: 90
                });
                if ($.cookie("location") === "on") {
                    isLoadingCards = true;
                    var locationBaseUrlArray = baseAPIUrl.split(".");
                    locationBaseUrlArray[4] = userSelectedCity;
                    locationBaseUrlArray[5] = lat.toString().replace(".", "_");
                    locationBaseUrlArray[6] = lng.toString().replace(".", "_");
                    console.log("location api calling ...");
                    console.log(locationBaseUrlArray.join("."));
                    $.getJSON(locationBaseUrlArray.join("."), function(resultJSON) {
                        $.ajaxSetup({
                            cache: true
                        });
                        generateOfferListItems(resultJSON, false);
                        sessionStorage.setItem("sessionCookie", "LocationOffers");
                        $(".filter-nearby-section .filter-content .search-box-area input").focus(function() {
                            $(".filter-content .search-box-area input").val("")
                        });
                        $(".filter-nearby-section .filter-content .search-box-area input").keyup(debounce(function() {
                            $(".sidebar-content .checkbox-list input").prop("checked", false);
                            $(".sidebar-content .checkbox-list input").closest("li").removeClass("active");
                            $("#nearbyOfferFilterTags").css("display", "none");
                            $("#nearbyOfferFilterTags span").remove();
                            searchInput = $(this)[0].value;
                            loadCards(false)
                        }, 500));
                        $("#searchPlaces").focus(function() {
                            $("#searchPlaces").val("")
                        });
                        $(".location-tags a").click(function() {
                            var topCityName = $(this).attr("data-value");
                            sessionStorage.setItem("topCitySelected", topCityName);
                            sessionStorage.setItem("sessionCookie", "defaultOffers");
                            userSelectedCity = topCityName;
                            isUserSelectedCheckoutNearByCity = true;
                            $(".sidebar-content .checkbox-list input").prop("checked",
                                false);
                            $(".sidebar-content .checkbox-list input").closest("li").removeClass("active");
                            $("#nearbyOfferFilterTags").css("display", "none");
                            $("#nearbyOfferFilterTags span").remove();
                            if (sessionCookie != "defaultOffers") loadCards(false)
                        });
                        $(document).on("click", ".sb-box.sb-categories .dropdown-list input", function() {
                            sessionCookie = sessionStorage.getItem("sessionCookie");
                            if (sessionCookie != "defaultOffers") {
                                $(".filter-content .filter-cat").show();
                                $(".filter-content .filter-cat").addClass("active");
                                if ($(window).width() >
                                    991) createFilterArrayLoc()
                            } else;
                        });
                        $(".sort-dropdown .dropdown-inner li").click(function() {
                            var newSortId = getSortId();
                            if (currentSortId !== newSortId) {
                                currentSortId = newSortId;
                                loadCards(false)
                            }
                            $(".filter-top .sort-tools").removeClass("disable-sorting")
                        });

                        function createFilterArrayLoc() {
                            filters = [];
                            var defaultTagStr = "";
                            $.each($(".sidebar-content .checkbox-list input:checked"), function() {
                                if (filters.indexOf($(this).val()) == -1) {
                                    var tag = $(this).val().split("/")[1];
                                    defaultTagStr = $(this).val().split("/")[0];
                                    filters.push(tag)
                                }
                            });
                            $.each($(".sidebar-content .checkbox-popup-list input:checked"), function() {
                                if (filters.indexOf($(this).val()) == -1) filters.push($(this).val())
                            });
                            console.log("Non location filters selected");
                            console.log(filters);
                            checkBoxFilters = filters;
                            if (filters.length == 0) {
                                if ($(window).width() <= 991) {
                                    $(".feature-offer-section").show();
                                    $(".announcement-section").show();
                                    $(".filter-inner-container").removeClass("active");
                                    $(".filter-top").removeClass("filter-selected");
                                    $(".filter-top").removeClass("filter-sticky")
                                }
                                $(".filter-content .filter-cat").hide();
                                $(".filter-content .filter-cat").removeClass("active");
                                loadCards(false);
                                generateFilterTagsLoc("#nearbyOfferFilterTags", "")
                            } else {
                                generateFilterTagsLoc("#nearbyOfferFilterTags", filters, defaultTagStr);
                                loadCards(false)
                            }
                        }

                        function generateFilterTagsLoc(filterDiv, filterId, str) {
                            $(filterDiv).html("");
                            var filterHtml = '\x3cspan class\x3d"filter-clear"\x3eCLEAR ALL\x3c/span\x3e',
                                filterText = "";
                            if (filterId.length > 0)
                                if (Array.isArray(filterId))
                                    for (var index$48 = 0; index$48 < filterId.length; index$48++) {
                                        var element = filterId[index$48];
                                        filterText = $('[value\x3d"' + str + "/" + element + '"]').first().closest(".checkbox-list").text().trim();
                                        if (filterText == "") filterText = $('[value\x3d"' + element + '"]').first().closest(".checkbox-popup-list").text().trim();
                                        filterHtml += '\x3cspan data-filter\x3d"' + element + '"\x3e' + filterText + ' \x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-black.svg" alt\x3d"" loading\x3d"lazy" /\x3e\x3c/span\x3e'
                                    } else {
                                        filterText = $("#" + filterId).text().trim();
                                        filterHtml += '\x3cspan data-filter\x3d"' +
                                            filterId + '"\x3e' + filterText + ' \x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-black.svg" alt\x3d"" /\x3e\x3c/span\x3e'
                                    }
                            $(filterDiv).html(filterHtml)
                        }
                        $(document).on("click", ".filter-cat img", function() {
                            var removefilterId = "icicibank:nearbyoffers/" + $(this).closest("span").attr("data-filter");
                            $('[value\x3d"' + removefilterId + '"]').prop("checked", false);
                            $('[value\x3d"' + removefilterId + '"]').closest("li").removeClass("active");
                            createFilterArrayLoc()
                        });
                        $(document).on("click",
                            ".filter-cat .filter-clear",
                            function() {
                                $(".sidebar-content .checkbox-list input").prop("checked", false);
                                $(".sidebar-content .checkbox-list input").closest("li").removeClass("active");
                                createFilterArrayLoc()
                            });
                        $(".sidebar-header .close").click(function() {
                            $(".filter-content .filter-cat").hide();
                            $(".filter-content .filter-cat").removeClass("active");
                            $(".sidebar-content .checkbox-list input").prop("checked", false);
                            $(".sidebar-content .checkbox-list input").closest("li").removeClass("active");
                            $(this).parent().removeClass("active")
                        });
                        $(".sidebar-footer .apply").click(function() {
                            setTimeout(function() {
                                createFilterArrayLoc()
                            }, 500)
                        });
                        $(".filter-offer-section .sidebar-footer .clear-all").click(function() {
                            $(".sidebar-content .checkbox-list input").prop("checked", false);
                            $(".sidebar-content .checkbox-list input").closest("li").removeClass("active");
                            createFilterArrayLoc()
                        });

                        function createFilterArray() {
                            filters = [];
                            $.each($(".sidebar-content .checkbox-list input:checked"), function() {
                                if (filters.indexOf($(this).val()) == -1) filters.push($(this).val())
                            });
                            $.each($(".sidebar-content .checkbox-popup-list input:checked"), function() {
                                if (filters.indexOf($(this).val()) == -1) filters.push($(this).val())
                            });
                            console.log("Non location filters selected");
                            console.log(filters);
                            checkBoxFilters = filters;
                            if (filters.length == 0) {
                                if ($(window).width() <= 991) {
                                    $(".feature-offer-section").show();
                                    $(".announcement-section").show();
                                    $(".filter-inner-container").removeClass("active");
                                    $(".filter-top").removeClass("filter-selected");
                                    $(".filter-top").removeClass("filter-sticky")
                                }
                                $(".filter-content .filter-cat").hide();
                                $(".filter-content .filter-cat").removeClass("active");
                                loadCards(false);
                                generateFilterTagsLoc("#nearbyOfferFilterTags", "")
                            } else {
                                generateFilterTagsLoc("#nearbyOfferFilterTags", filters);
                                loadCards(false)
                            }
                        }
                        $("input[name\x3d'nearby-offer-type']").click(function() {
                            if ($(this).hasClass("current-active")) return false;
                            $("input[name\x3d'nearby-offer-type']").removeClass("current-active");
                            $(this).addClass("current-active");
                            if (this.value == "all") {
                                radioButtonFilter = this.value;
                                loadCards(false)
                            } else if (this.value ==
                                "likedOffers") {
                                favouriteOffers();
                                $(".filter-offer-section .offer-card").not(".favOffer").hide()
                            } else if (this.value == "offline") {
                                radioButtonFilter = this.value;
                                $(".button-group .ic-btn").remove();
                                loadCards(false)
                            } else {
                                radioButtonFilter = this.value;
                                loadCards(false)
                            }
                        })
                    }).fail(function() {
                        $("#loading-offers").hide()
                    }).always(function() {
                        console.log("completed loading location offers");
                        isLoadingCards = false;
                        $("#loading-offers").hide();
                        $(".filter-top .sort-tools").removeClass("disable-sorting");
                        addScrollerForOffers()
                    })
                }
            } else;
        else;
    })
}

function locationOffGetJson() {
    if ($("#nearbyFilterSection").length > 0 && ($.cookie("location") === "off" || !$.cookie("location"))) {
        isLoadingCards = true;
        $.getJSON(baseAPIUrl, function(resultJSON) {
            $.ajaxSetup({
                cache: true
            });
            offerData = resultJSON;
            generateOfferListItems(offerData, false);
            $(".filter-nearby-section .filter-content .search-box-area input").focus(function() {
                $(".filter-content .search-box-area input").val("")
            });
            $(".filter-nearby-section .filter-content .search-box-area input").keyup(debounce(function() {
                $(".sidebar-content .checkbox-list input").prop("checked", false);
                $(".sidebar-content .checkbox-list input").closest("li").removeClass("active");
                $("#nearbyOfferFilterTags").css("display", "none");
                $("#nearbyOfferFilterTags span").remove();
                searchInput = $(this)[0].value;
                loadCards(false)
            }, 500));
            $("#searchPlaces").focus(function() {
                $("#searchPlaces").val("")
            });
            $("input[name\x3d'nearby-offer-type']").click(function() {
                if ($(this).hasClass("current-active")) return false;
                $("input[name\x3d'nearby-offer-type']").removeClass("current-active");
                $(this).addClass("current-active");
                if (this.value == "all") {
                    radioButtonFilter = this.value;
                    loadCards(false)
                } else if (this.value == "likedOffers") {
                    favouriteOffers();
                    $(".filter-offer-section .offer-card").not(".favOffer").hide()
                } else if (this.value == "offline") {
                    radioButtonFilter = this.value;
                    loadCards(false)
                } else {
                    radioButtonFilter = this.value;
                    loadCards(false)
                }
            });
            $(document).on("click", ".filter-nearby-section .sidebar-content .checkbox-list input", function() {
                console.log("ckkk");
                sessionCookie = sessionStorage.getItem("sessionCookie");
                if (sessionCookie !=
                    "LocationOffers") {
                    $(".filter-content .filter-cat").show();
                    $(".filter-content .filter-cat").addClass("active");
                    if ($(window).width() > 991) createFilterArray()
                } else;
            });
            $(document).on("click", ".call", function() {
                $(".call-content, .call").removeClass("active");
                $(this).addClass("active");
                $(this).next().addClass("active")
            });
            $(document).on("click", ".filter-nearby-section .bookmark-share .call-header .close-icon", function(event) {
                $(".call-content, .call").removeClass("active")
            });
            $(document).on("click", ".filter-nearby-section .sidebar-content .checkbox-popup-list input",
                function() {
                    $(".filter-content .filter-cat").show();
                    $(".filter-content .filter-cat").addClass("active")
                });
            $(".brand-poupup-bottom .apply").click(function() {
                createFilterArray();
                $("html, body").animate({
                    scrollTop: $("#nearbyFilterSection").offset().top - $("header").height()
                })
            });

            function createFilterArray() {
                filters = [];
                var defaultTagStr = "";
                $.each($(".sidebar-content .checkbox-list input:checked"), function() {
                    var tag = $(this).val().split("/")[1];
                    defaultTagStr = $(this).val().split("/")[0];
                    if (filters.indexOf(tag) ==
                        -1) filters.push(tag)
                });
                $.each($(".sidebar-content .checkbox-popup-list input:checked"), function() {
                    var tag = $(this).val().split("/")[1];
                    if (filters.indexOf(tag) == -1) filters.push(tag)
                });
                console.log("Non location filters selected");
                console.log(filters);
                checkBoxFilters = filters;
                if (filters.length == 0) {
                    if ($(window).width() <= 991) {
                        $(".feature-offer-section").show();
                        $(".announcement-section").show();
                        $(".filter-inner-container").removeClass("active");
                        $(".filter-top").removeClass("filter-selected");
                        $(".filter-top").removeClass("filter-sticky")
                    }
                    $(".filter-content .filter-cat").hide();
                    $(".filter-content .filter-cat").removeClass("active");
                    loadCards(false);
                    generateFilterTagsDefault("#nearbyOfferFilterTags", "")
                } else {
                    generateFilterTagsDefault("#nearbyOfferFilterTags", filters, defaultTagStr);
                    loadCards(false)
                }
            }
            $(document).on("click", ".filter-cat img", function() {
                var removefilterId = "icicibank:nearbyoffers/" + $(this).closest("span").attr("data-filter");
                $('[value\x3d"' + removefilterId + '"]').prop("checked", false);
                $('[value\x3d"' + removefilterId + '"]').closest("li").removeClass("active");
                createFilterArray()
            });
            $(document).on("click", ".filter-cat .filter-clear", function() {
                $(".sidebar-content .checkbox-list input").prop("checked", false);
                $(".sidebar-content .checkbox-list input").closest("li").removeClass("active");
                createFilterArray()
            });
            $(".sidebar-header .close").click(function() {
                $(".filter-content .filter-cat").hide();
                $(".filter-content .filter-cat").removeClass("active");
                $(".sidebar-content .checkbox-list input").prop("checked", false);
                $(".sidebar-content .checkbox-list input").closest("li").removeClass("active");
                $(this).parent().removeClass("active")
            });
            $(".sidebar-footer .apply").click(function() {
                setTimeout(function() {
                    createFilterArray()
                }, 500)
            });
            $(".sort-dropdown .dropdown-inner li").click(function() {
                var newSortId = getSortId();
                if (currentSortId !== newSortId) {
                    currentSortId = newSortId;
                    loadCards(false)
                }
                $(".filter-top .sort-tools").removeClass("disable-sorting")
            });

            function generateFilterTagsDefault(filterDiv, filterId, str) {
                $(filterDiv).html("");
                var filterHtml = '\x3cspan class\x3d"filter-clear"\x3eCLEAR ALL\x3c/span\x3e',
                    filterText = "";
                if (filterId.length > 0)
                    if (Array.isArray(filterId))
                        for (var index$49 = 0; index$49 < filterId.length; index$49++) {
                            var element = filterId[index$49];
                            filterText = $('[value\x3d"' + str + "/" + element + '"]').first().closest(".checkbox-list").text().trim();
                            if (filterText == "") filterText = $('[value\x3d"' + element + '"]').first().closest(".checkbox-popup-list").text().trim();
                            filterHtml += '\x3cspan data-filter\x3d"' + element + '"\x3e' + filterText + ' \x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-black.svg" alt\x3d"" loading\x3d"lazy" /\x3e\x3c/span\x3e'
                        } else {
                            filterText =
                                $("#" + filterId).text().trim();
                            filterHtml += '\x3cspan data-filter\x3d"' + filterId + '"\x3e' + filterText + ' \x3cimg \x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-black.svg" alt\x3d"" /\x3e\x3c/span\x3e'
                        }
                $(filterDiv).html(filterHtml)
            }
            $(".location-tags a").click(function() {
                var topCityName = $(this).attr("data-value");
                sessionStorage.setItem("topCitySelected", topCityName);
                userSelectedCity = topCityName;
                isUserSelectedCheckoutNearByCity = true;
                $(".sidebar-content .checkbox-list input").prop("checked",
                    false);
                $(".sidebar-content .checkbox-list input").closest("li").removeClass("active");
                $("#nearbyOfferFilterTags").css("display", "none");
                $("#nearbyOfferFilterTags span").remove();
                sessionCookie = sessionStorage.getItem("sessionCookie");
                if (sessionCookie != "LocationOffers") {
                    $(".dropdown-list .checkbox-list input").prop("checked", false);
                    sessionStorage.setItem("sessionCookie", "defaultOffer");
                    loadCards(false)
                }
            })
        }).fail(function() {
            $("#loading-offers").hide()
        }).always(function() {
            console.log("complete");
            isLoadingCards =
                false;
            $("#loading-offers").hide();
            $(".filter-top .sort-tools").removeClass("disable-sorting");
            addScrollerForOffers();
            $(".offer-getDirection").click(function() {
                var filterOfferIndex = +$(this).attr("index") + 1;
                dataLayer.push({
                    "event": "custom_event",
                    "eventCategory": "CB_nearby_offers",
                    "eventAction": "get_direction_banner_click",
                    "eventLabel": filterOfferIndex + "_" + $(this).attr("name")
                })
            })
        })
    }
}

function showError(error) {
    if (localStorage) localStorage.setItem("location-access", "false");
    $.cookie("location", "off");
    locationOffGetJson();
    switch (error.code) {
        case error.PERMISSION_DENIED:
            isLocationOn = false;
            $(".loc-map-popup-wrap").show();
            break;
        case error.POSITION_UNAVAILABLE:
            isLocationOn = false;
            break;
        case error.TIMEOUT:
            isLocationOn = false;
            break;
        case error.UNKNOWN_ERROR:
            isLocationOn = false;
            break
    }
}

function sortCards(dataArray, isAppend) {
    isAppend = isAppend === undefined ? false : isAppend;
    var sortId = $(".sort-dropdown .dropdown-inner li.active").attr("id");
    if (sortId == "latest") {
        dataArray.sort(custom_sort_date);
        dataArray.reverse()
    } else if (sortId == "oldest") dataArray.sort(custom_sort_date);
    generateOfferListItems(dataArray, isAppend);
    favouriteOffers()
}
var debounce = function(func, delay) {
    var debounceTimer;
    return function() {
        var context = this;
        var args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function() {
            return func.apply(context, args)
        }, delay)
    }
};

function getSortId() {
    var sortId = $(".sort-dropdown .dropdown-inner li.active").attr("id");
    return sortId
}

function loadCards(isAppend) {
    isAppend = isAppend === undefined ? true : isAppend;
    if (isAppend === false) {
        isAllCardsRendered = false;
        $("#all-offer-cards").html("");
        offset = 0
    }
    if (isAppend === true && isAllCardsRendered === true) return;
    var urlArray = baseAPIUrl.split(".");
    urlArray[2] = offset;
    urlArray[3] = nearbyFilter_limit;
    if (userSelectedCity.length > 0) urlArray[4] = userSelectedCity.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase()
    });
    if (isUserSelectedCheckoutNearByCity === false) {
        if (userLatitude) urlArray[5] =
            userLatitude.toString().replace(".", "_");
        if (userLongitude) urlArray[6] = userLongitude.toString().replace(".", "_")
    }
    urlArray[7] = radioButtonFilter === "all" ? "store" : radioButtonFilter;
    urlArray[8] = getSortId();
    if (searchInput) urlArray[9] = searchInput.replaceAll(".", "dotKey").replaceAll("?", "quesKey");
    urlArray[10] = checkBoxFilters.length === 0 ? "filters" : checkBoxFilters.join(".").replace(/-/g, "_");
    console.log(urlArray.join("."));
    if (isLoadingCards === true && isAppend === true) return;
    isLoadingCards = true;
    $("#loading-offers").show();
    $.getJSON(urlArray.join("."), function(resultJSON) {
        $.ajaxSetup({
            cache: true
        });
        console.log("result JSON");
        console.log(resultJSON);
        if (!resultJSON) {
            console.log("we got empty json !!");
            isAllCardsRendered = true
        } else {
            console.log("--- non-null value !!");
            isAllCardsRendered = false
        }
        var offerData = resultJSON;
        console.log(offerData);
        generateOfferListItems(offerData, true);
        $("#loading-offers").hide();
        offset = offset + nearbyFilter_limit;
        if (!isAppend && resultJSON.length === 0) noResultOfferHtml()
    }).fail(function() {
        $("#loading-offers").hide()
    }).always(function() {
        console.log("complete");
        isLoadingCards = false;
        $(".filter-top .sort-tools").removeClass("disable-sorting")
    })
}

function addScrollerForOffers() {
    $(window).on("scroll", debounce(function() {
        if ($(window).scrollTop() >= $("#nearbyOfferListWrapper").offset().top + $("#nearbyOfferListWrapper").outerHeight() - window.innerHeight) loadCards(true)
    }, 100))
}

function createAndAppendCards(offerData) {
    var selectedCardsHTML = [];
    for (var index$50 = 0; index$50 < offerData.length; index$50++) {
        var elem = offerData[index$50];
        var cardHtmlData = generateHTML(elem["ThumbnaiUrl"], elem["SubCategory"], elem["ShopName"], elem["OfferDescription1"] + " " + elem["OfferDescription2"], elem["distance"], elem["Latitude"], elem["Longitude"], elem["contact"], elem["TandCLink"], elem["GetDirectionUrl"], elem["Tags"], elem["OfferIndex"], elem["StartDate"], elem["EndDate"], elem["Store"], elem["Address"],
            index$50);
        selectedCardsHTML.push(cardHtmlData)
    }
    $("#all-offer-cards").append(selectedCardsHTML.join(""));
    return selectedCardsHTML.length
}

function generateOfferListItems(offerData, isAppend) {
    if (isAppend === false) $("#all-offer-cards").html("");
    var selectedCardsLength = createAndAppendCards(offerData);
    if (selectedCardsLength > 0) {
        var cityCookie = $.cookie("NearByOffersCity");
        var localityCookie = $.cookie("NearByOffersSubLocality");
        $(".filter-top .sort-tools").removeClass("disable-sorting")
    } else {
        isAllCardsRendered = true;
        if (isAppend === false) noResultOfferHtml();
        $(".filter-top .sort-tools").addClass("disable-sorting")
    }
    $("#loading-offers").hide();
    $(".offer-getDirection.direction-class").click(function() {
        var filterIndex = +$(this).attr("index") + 1;
        dataLayer.push({
            "event": "custom_event",
            "eventCategory": "CB_nearby_offers",
            "eventAction": "get_direction_banner_click",
            "eventLabel": filterIndex + "_" + $(this).attr("name")
        })
    });
    $(".offer-getDirection.direction-class").removeClass("direction-class")
}

function noResultOfferHtml() {
    $("#all-offer-cards").append('\x3cdiv class\x3d"no-result" style\x3d"margin-left: auto;margin-right: auto;"\x3e ' + '\x3cdiv class\x3d"no-result-content"\x3e ' + '\x3cp class\x3d"text-large"\x3eNo offers found at this time. Please check back later\x3c/p\x3e' + '\x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/no-result-icon.svg" alt\x3d"No result icon" loading\x3d"lazy" /\x3e' + "\x3c/div\x3e" + '\x3c!--\x3cdiv class\x3d"location-tags"\x3e' +
        '\x3cdiv\x3e\x3ca href\x3d"javascript:void(0);" data-value\x3d"mumbai"\x3eMumbai\x3c/a\x3e\x3c/div\x3e' + '\x3cdiv\x3e\x3ca href\x3d"javascript:void(0);" data-value\x3d"delhi"\x3eDelhi\x3c/a\x3e\x3c/div\x3e' + '\x3cdiv\x3e\x3ca href\x3d"javascript:void(0);" data-value\x3d"pune"\x3ePune\x3c/a\x3e\x3c/div\x3e' + '\x3cdiv\x3e\x3ca href\x3d"javascript:void(0);" data-value\x3d"bangalore"\x3eBangalore\x3c/a\x3e\x3c/div\x3e' + '\x3cdiv\x3e\x3ca href\x3d"javascript:void(0);" data-value\x3d"hyderabad"\x3eHyderabad\x3c/a\x3e\x3c/div\x3e' +
        '\x3cdiv\x3e\x3ca href\x3d"javascript:void(0);" data-value\x3d"kolkata"\x3eKolkata\x3c/a\x3e\x3c/div\x3e' + " \x3c/div\x3e  --\x3e" + "\x3c/div\x3e")
}

function generateHTML(smallOfferImage, SubCategory, cardTitle, cardDescription, distance, lat, long, contact, TandCLink, GetDirectionUrl, Tags, OfferIndex, StartDate, EndDate, Store, Address, index) {
    var a = Tags || "";
    var splittedTag = [];
    splittedTag = a.split(",");
    for (a in splittedTag) a = splittedTag[a];
    var tagsHtml = '\x3cdiv class\x3d"offercat-tags"\x3e' + splittedTag.map(function(tag) {
        return '\x3cdiv class\x3d"offercat-tag"\x3e' + tag + "\x3c/div\x3e"
    }).join("") + "\x3c/div\x3e";
    var addCheck, removeShopNowBtn;
    if (Store == "offline") {
        removeShopNowBtn =
            GetDirectionUrl;
        removeShopNowBtn = "";
        addCheck = Address;
        addCheck = '\x3cdiv class\x3d"address"\x3e \x3ch6\x3eAddress\x3c/h6\x3e \x3cp\x3e' + addCheck + "\x3c/p\x3e\x3c/div\x3e"
    } else if (Store == "online") {
        removeShopNowBtn = GetDirectionUrl;
        removeShopNowBtn = '\x3ca href\x3d"' + GetDirectionUrl + '" target\x3d"_blank" class\x3d"ic-btn"\x3eShop now\x3c/a\x3e';
        addCheck = ""
    }
    var addressHtml = addCheck || "";
    var shopNowHtml = removeShopNowBtn || "";
    var html = '\x3cdiv class\x3d"offer-card  ' + SubCategory + '"\x3e' + '\x3cdiv class\x3d"card-inner"\x3e' +
        '\x3cdiv class\x3d"content"\x3e' + '\x3cdiv class\x3d"media"\x3e\x3cimg src\x3d"' + smallOfferImage + '" loading\x3d"lazy" \x3e' + "\x3c/div\x3e" + '\x3cdiv class\x3d"content"\x3e' + "\x3c!--" + StartDate + " " + " " + EndDate + " " + " " + Store + " " + " " + SubCategory + " --\x3e" + " " + tagsHtml + " " + '\x3cdiv class\x3d"offercat-tags"\x3e \x3c/div\x3e' + '\x3cdiv class\x3d"title"\x3e \x3ca href\x3d"#"\x3e' + cardTitle + "\x3c/a\x3e" + "\x3c/div\x3e" + '\x3cdiv class\x3d"description"\x3e \x3ca href\x3d"#"\x3e' + cardDescription + "\x3c/a\x3e\x3c/div\x3e" +
        " " + addressHtml + '\x3cdiv class\x3d"button-group"\x3e' + " " + shopNowHtml + '\x3c!-- \x3ca href\x3d"' + GetDirectionUrl + '" target\x3d"_blank" class\x3d"ic-btn"\x3eShop now\x3c/a\x3e --\x3e' + '\x3ca href\x3d"' + TandCLink + '" target\x3d"_blank" class\x3d"ic-link"\x3eT\x26C APPLY\x3c/a\x3e' + " \x3c/div\x3e" + '\x3cdiv class\x3d"card-bottom"\x3e' + '\x3cdiv class\x3d"loction"\x3e' + '\x3cspan class\x3d"map-icon"\x3e\x3c/span\x3e' + "\x3ca index\x3d" + index + " name\x3d" + cardTitle.toLowerCase().replace(/ /g, "_") + ' class\x3d"offer-getDirection direction-class" target\x3d"_blank" href\x3d"' +
        GetDirectionUrl + '"\x3eGet Direction\x3c/a\x3e' + "\x3c/div\x3e" + '\x3cdiv class\x3d"bookmark-share"\x3e' + '\x3c!-- \x3cdiv class\x3d"call"\x3e\x3c/div\x3e' + '\x3cdiv class\x3d"call-content"\x3e' + '\x3cdiv class\x3d"inner-content"\x3e' + '\x3cdiv class\x3d"call-header"\x3e' + ' \x3cspan class\x3d"call-icon"\x3e\x3c/span\x3e' + '\x3cspan class\x3d"titile"\x3eContact\x3c/span\x3e' + '\x3cspan class\x3d"close-icon"\x3e\x3c/span\x3e' + "\x3c/div\x3e" + '\x3cdiv class\x3d"call-text"\x3e\x3cinput type\x3d"text" name\x3d"number"' +
        ' value\x3d"' + contact + '" disabled\x3e ' + (isMobile.any() ? '\x3cspan class\x3d"call-num" onclick\x3d"javascript:window.location \x3d tel:' + contact + ';"\x3eCall\x3c/span\x3e' : '\x3cspan class\x3d"copy-num" onclick\x3d"copyNumber(this)"\x3eCopy\x3c/span\x3e') + "\x3c/div\x3e" + "\x3c/div\x3e" + "\x3c/div\x3e --\x3e" + '\x3cdiv class\x3d"bookmark" offer-index\x3d"' + OfferIndex + '"\x3e\x3c/div\x3e' + '\x3cdiv class\x3d"share"\x3e\x3c/div\x3e' + '\x3cdiv class\x3d"share-content"\x3e' + '\x3cdiv class\x3d"inner-content"\x3e' +
        '\x3cdiv class\x3d"share-header"\x3e' + ' \x3cp\x3eShare\x3c/p\x3e \x3cspan class\x3d"close-icon"\x3e\x3cimg' + ' src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg"' + 'alt\x3d"fb" loading\x3d"lazy"\x3e\x3c/span\x3e' + " \x3c/div\x3e" + ' \x3cul class\x3d"share-link"\x3e' + '\x3cli\x3e\x3ca href\x3d"https://api.whatsapp.com/send?url\x3d' + GetDirectionUrl + "\x26text\x3d" + cardTitle + '" target\x3d"_blank" tabindex\x3d"0"\x3e \x3cspan ' + 'class\x3d"n-icon"\x3e\x3cimg' +
        ' src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp.svg"' + 'alt\x3d"whatsapp" loading\x3d"lazy"\x3e\x3c/span\x3e\x3cspan ' + 'class\x3d"h-icon"\x3e\x3cimg' + ' src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/video/whatsapp-o.svg"' + 'alt\x3d"whatsapp" loading\x3d"lazy"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e' + '\x3cli\x3e\x3ca href\x3d"https://www.facebook.com/sharer/sharer.php?u\x3d' + GetDirectionUrl + "\x26text\x3d" + cardTitle +
        '" target\x3d"_blank" tabindex\x3d"0"\x3e \x3cspan ' + 'class\x3d"n-icon"\x3e\x3cimg' + ' src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg"' + 'alt\x3d"fb" loading\x3d"lazy"\x3e\x3c/span\x3e\x3cspan ' + 'class\x3d"h-icon"\x3e\x3cimg' + ' src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg"' + 'alt\x3d"fb" loading\x3d"lazy"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e' + '\x3cli\x3e\x3ca href\x3d"https://twitter.com/intent/tweet?url\x3d' +
        GetDirectionUrl + "\x26text\x3d" + cardTitle + '" target\x3d"_blank" tabindex\x3d"0"\x3e \x3cspan ' + 'class\x3d"n-icon"\x3e\x3cimg' + ' src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg"' + 'alt\x3d"tw" loading\x3d"lazy"\x3e\x3c/span\x3e\x3cspan ' + 'class\x3d"h-icon"\x3e\x3cimg' + ' src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg"' + 'alt\x3d"tw" loading\x3d"lazy"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e' + '\x3cli\x3e\x3ca href\x3d"https://www.linkedin.com/shareArticle?mini\x3dtrue?url\x3d' +
        GetDirectionUrl + "\x26text\x3d" + cardTitle + '" target\x3d"_blank" tabindex\x3d"0"\x3e \x3cspan ' + 'class\x3d"n-icon"\x3e\x3cimg' + ' src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg"' + 'alt\x3d"ln" loading\x3d"lazy"\x3e\x3c/span\x3e\x3cspan ' + 'class\x3d"h-icon"\x3e\x3cimg' + ' src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg"' + ' alt\x3d"ln" loading\x3d"lazy"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e' + "\x3c/ul\x3e" + "\x3c/div\x3e" +
        "\x3c/div\x3e" + "\x3c/div\x3e" + "\x3c/div\x3e" + "\x3c/div\x3e" + "\x3c/div\x3e" + "\x3c/div\x3e" + "\x3c/div\x3e";
    return html
}

function custom_sort_date(a, b) {
    return (new Date(a.StartDate)).getTime() - (new Date(b.StartDate)).getTime()
}

function custom_sort_view(a, b) {
    var viewsOne = a.viewers,
        viewsTwo = b.viewers;
    if (viewsOne == undefined) viewsOne = 0;
    if (viewsTwo == undefined) viewsTwo = 0;
    return parseInt(viewsOne) - parseInt(viewsTwo)
}

function custom_sort_like(a, b) {
    var likeOne = a.likes,
        likeTwo = b.likes;
    if (likeOne == undefined) likeOne = 0;
    if (likeTwo == undefined) likeTwo = 0;
    return parseInt(likeOne) - parseInt(likeTwo)
}

function intToString(value) {
    if (value == undefined) return 0;
    if (value && value.length <= 3) return value;
    var suffixes = ["", "K", "M", "B", "T"];
    var suffixNum = Math.floor(("" + value).length / 3);
    var shortValue = parseFloat((suffixNum != 0 ? value / Math.pow(1E3, suffixNum) : value).toPrecision(2));
    if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
    return shortValue + suffixes[suffixNum]
}

function getTimePassed(EndDate) {
    var countDownDate = (new Date(EndDate)).getTime();
    var now = (new Date).getTime();
    var distance = now - countDownDate;
    var hours = Math.floor(distance % (1E3 * 60 * 60 * 24) / (1E3 * 60 * 60));
    var minutes = Math.floor(distance % (1E3 * 60 * 60) / (1E3 * 60));
    var days = Math.floor(distance / (1E3 * 60 * 60 * 24));
    var months = Math.floor(days / 31);
    var years = Math.floor(months / 12);
    var message = "";
    if (years == 1) message = years + " Year Ago";
    else if (years > 0) message = years + " Years Ago";
    else if (months == 1) message = months + " Month Ago";
    else if (months > 0) message = months + " Months Ago";
    else if (days == 1) message = days + " Day Ago";
    else if (days > 1 && days < 7) message = days + " Days Ago";
    else if (days >= 7) {
        var weeks = Math.round(days / 7);
        if (weeks == 1) message = weeks + " Week Ago";
        else message = weeks + " Weeks Ago"
    } else if (hours == 1) message = hours + " Hour Ago";
    else if (hours > 0) message = hours + " Hours Ago";
    else message = minutes + " Minutes Ago";
    return message
}

function uniqueData(array, property) {
    var unique = {};
    var distinct = [];
    for (var i in array) {
        if (typeof unique[array[i][property]] == "undefined") distinct.push(array[i]);
        unique[array[i][property]] = 0
    }
    return distinct
}

function copyNumber(copyBtn) {
    var copyText = copyBtn.previousElementSibling;
    copyText.disabled = false;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    copyText.disabled = true;
    document.execCommand("Copy");
    var selection = window.getSelection ? window.getSelection() : document.selection ? document.selection : null;
    if (!!selection) selection.empty ? selection.empty() : selection.removeAllRanges();
    copyBtn.innerHTML = "Copied"
}

function favouriteOffers() {
    $(".bookmark").each(function() {
        var favs = $(this).attr("offer-index");
        if (localStorage.getItem(favs) === "saved") {
            $(this).attr("style", "background:url('/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg') 0px 0% no-repeat");
            $(this).parents(".offer-card").addClass("favOffer")
        } else $(this).removeAttr("style")
    })
}
$(document).on("click", ".bookmark", function() {
    var favs = $(this).attr("offer-index");
    if (localStorage && localStorage.getItem(favs) === null) {
        localStorage.setItem(favs, "saved");
        $(this).attr("style", "background:url('/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/like-icon.svg') 0px 0% no-repeat");
        $(this).parents(".offer-card").addClass("favOffer")
    } else {
        if (localStorage) localStorage.removeItem(favs);
        $(this).removeAttr("style")
    }
});
if ($("#get-geo-loc-nearby").length > 0) $("#get-geo-loc-nearby").click(function(e) {
    e.preventDefault();
    detectLocationClicked = true;
    isUserSelectedCheckoutNearByCity = false;
    getNearbyLocation();
    return false
});

function sliceIntoChunks(arr, chunkSize) {
    var res = [];
    for (var i$51 = 0; i$51 < arr.length; i$51 += chunkSize) {
        var chunk = arr.slice(i$51, i$51 + chunkSize);
        res.push(chunk)
    }
    return res
}

function merge(first) {
    var newArr = [];
    for (var i$52 = 0; i$52 < first.length - 1; i$52++) newArr.push(first[i$52].concat(first[i$52 + 1]));
    return newArr
}

function getCookie(cname) {
    var name = cname + "\x3d";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i$53 = 0; i$53 < ca.length; i$53++) {
        var c = ca[i$53];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length)
    }
    return ""
}

function handleOfferTabClick(tabId) {
    if ($(window).width() < 767) {
        var tabType = tabId;
        if (tabId.includes("Nearby Offers")) tabType = "Nearby";
        if (tabId.includes("Handpicked Offers")) tabType = "Handpicked";
        if (tabId.includes("Shop")) tabType = "Shop";
        window.parent.postMessage({
            ev: tabType
        }, "*")
    }
}
setTimeout(function() {
    $(window).width() > 768 && $(".offer-card.h-view .card-inner .content .card-title").equalHeights()
}, 500);
var $bundleHeading = $("#financial-solutions_solbundle #bundleHeading");
var financialSol = [];
var valueAddedServices = [];
var solutionBundleJson = {};
var bundleTitleHtml = "";
var filteredSolutionArr = [];
var urlParamObj = {};
var $solutionCountryInp = $("#countryInput");
var pageHasDropdownValue = "";
var $smallCards = $(".ese-solution-card.width-25");
if ($(window).width() < 1200) $(".ese-solution-cards").slick({
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 2.2,
            slidesToScroll: 1,
            arrows: false
        }
    }, {
        breakpoint: 560,
        settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
            arrows: false
        }
    }]
});
$("#countryInput").selectmenu();
var solutionBundleDropdownData = [];
var $solBundleHorizontalTabEl = $(".solutionbundle.horizontal-tab a");
var isSolutionBundleFinancialTab = true;
$(document).ready(function() {
    if (window.location.pathname.indexOf("campus-power") > -1) setActiveTabAccordingURL();
    smallCardClickBind();
    pageHasDropdownValue = $("#dropdownRequired").text();
    solutionBundleJson = $("#fragmentAsJson").length && convertJSON($("#fragmentAsJson").text());
    solutionBundleDropdownData = $("#countryMap").length && convertJSON($("#countryMap").text());
    getHorizontalTabChange($solBundleHorizontalTabEl);
    $solBundleHorizontalTabEl.click(function() {
        $(this).parents(".solutionbundle.horizontal-tab").find("li").removeClass("active");
        $(this).parent().addClass("active");
        var currentTab = $(this).attr("href");
        currentOpenTabTag = $(this).attr("tag");
        isSolutionBundleFinancialTab = currentTab === "#financial-solutions";
        getHorizontalTabChange($(this));
        $(this).parents(".solutionBundleHorizontal.horizontal-link-tab").find(".bundlepanel.tab-panel").removeClass("active");
        $(currentTab).addClass("active");
        return false
    });
    if (pageHasDropdownValue === "ddRequired") defaultSelectedFunctionalities();
    setTimeout(function() {
        if (isSolutionBundleFinancialTab && pageHasDropdownValue ===
            "ddRequired") $solutionCountryInp.on("selectmenuchange", function(event, country) {
            generateSelectedCountryHtml(country)
        });
        $("#value-added-services_solbundle .solutions-tab-content .ese-solution-card").removeClass("width-50");
        $("#value-added-services_solbundle .solutions-tab-content .ese-solution-card").addClass("width-25")
    })
});

function generateSelectedCountryHtml(selectedCntry) {
    bundleTitleHtml = "";
    $("#financial-solutions_solbundle .ese-solution-card.width-50 #bundlesTitle").empty();
    var selectedCountry = selectedCntry.item;
    $("#value-added-services_solbundle .ese-solution-card.width-25").removeClass("hide");
    if (selectedCountry.label === "Other" && selectedCountry.label !== "India") {
        $smallCards.eq(1).removeClass("hide");
        urlParamObj["location-input"] = "not-sure";
        delete urlParamObj["countryType"]
    }
    if (selectedCountry.label === "India") {
        $smallCards.eq(1).addClass("hide");
        urlParamObj["location-input"] = selectedCountry.label;
        delete urlParamObj["countryType"];
        hideVASCard()
    }
    if (selectedCountry.label !== "India" && selectedCountry.label !== "Other") {
        urlParamObj["countryType"] = getNameFromTagId(selectedCountry.value);
        urlParamObj["location-input"] = "abroad";
        $smallCards.eq(1).removeClass("hide")
    }
    appendBundleSolutionHtml(solutionBundleDropdownData[selectedCountry.label]);
    appendSmallCardUrl(getNameFromTagId(selectedCountry.value));
    bindViawAllSolution(getNameFromTagId(selectedCountry.value));
    $(".ese-solutions-filter").length === 0 && bindUrlWithSelectedParam()
}

function getFilteredSolutionArray(solutionArray, key, tagId) {
    if (!!key && !!tagId && !!solutionArray && solutionArray.length > 0) return solutionArray.filter(function(el) {
        if (el[key].length > 0) return el[key].includes(tagId) && el
    })
}

function defaultSelectedFunctionalities() {
    financialSol = getFilteredSolutionArray(solutionBundleJson, "typetag", "icicibank:student-ecosystem/type/financial-solutions");
    valueAddedServices = getFilteredSolutionArray(solutionBundleJson, "typetag", "icicibank:student-ecosystem/type/value-added-services");
    $("#financial-solutions_solbundle .ese-solution-card.width-50 #bundlesTitle").empty();
    var defaultSelectedCountry = $solutionCountryInp.length > 0 && $solutionCountryInp.find("option:first-child").text();
    if (defaultSelectedCountry ===
        "Other" && defaultSelectedCountry !== "India") {
        urlParamObj["location-input"] = "not-sure";
        delete urlParamObj["countryType"]
    }
    if (defaultSelectedCountry === "India") {
        urlParamObj["location-input"] = defaultSelectedCountry;
        delete urlParamObj["countryType"]
    }
    if (defaultSelectedCountry !== "India" && defaultSelectedCountry !== "Other") {
        urlParamObj["countryType"] = getNameFromTagId($solutionCountryInp.find("option:first-child").val());
        urlParamObj["location-input"] = "abroad"
    }
    appendBundleSolutionHtml(solutionBundleDropdownData[defaultSelectedCountry]);
    appendSmallCardUrl(defaultSelectedCountry);
    bindViawAllSolution(defaultSelectedCountry);
    $(".ese-solutions-filter").length === 0 && bindUrlWithSelectedParam()
}

function getHorizontalTabChange($tabEl) {
    filteredSolutionArr = getFilteredSolutionArray(solutionBundleJson, "typetag", $tabEl.attr("tag"));
    urlParamObj["pageType"] = $tabEl.attr("href") && $tabEl.attr("href").split("_")[0].substring(1);
    $(".ese-solutions-filter").length === 0 && bindUrlWithSelectedParam();
    bindViawAllSolution(urlParamObj["location-input"]);
    appendSmallCardUrl(urlParamObj["countryType"])
}

function bindUrlWithSelectedParam() {
    var params = "",
        $currentActiveLink = "",
        currentActiveTab = "";
    currentActiveTab = $(".solutionbundle.horizontal-tab li.active a").attr("href");
    urlParamObj["pageType"] = currentActiveTab && currentActiveTab.split("_")[0].substring(1);
    $currentActiveLink = currentActiveTab && $(".ese-solutions #" + currentActiveTab.substring(1) + " .solutions-tab-content .ese-solution-card.width-50 a");
    $($currentActiveLink).attr("href", $("#know-more-bundle").text());
    if (urlParamObj["countryType"] || urlParamObj["location-input"])
        if (urlParamObj["countryType"] !==
            "india" && urlParamObj["countryType"] !== "others") $($currentActiveLink).attr("id", urlParamObj["countryType"] ? urlParamObj["countryType"].toLowerCase() + "-essential-bundle" : urlParamObj["location-input"].toLowerCase() + "-essential-bundle");
        else $($currentActiveLink).attr("id", urlParamObj["location-input"].toLowerCase() + "-essential-bundle");
    for (var key in urlParamObj)
        if (urlParamObj.hasOwnProperty(key)) params = params + key + "\x3d" + urlParamObj[key] + "\x26";
    if (urlParamObj["pageType"] === "value-added-services") params =
        params + "stageType\x3d" + getNameFromTagId($currentActiveLink.parent().parent().attr("tag")) + "\x26";
    $currentActiveLink && $($currentActiveLink).attr("href", $currentActiveLink.attr("href") + "?" + params.replace(/ /g, "_").slice(0, -1))
}

function appendSmallCardUrl(selectedCountry) {
    var eachHorizontalTabID = "",
        eachCardTagId = "",
        hrefLink = "",
        countryType = selectedCountry !== "india" ? "location-input\x3dabroad\x26countryType\x3d" + selectedCountry : "location-input\x3d" + selectedCountry;
    if (selectedCountry === "India") countryType = "location-input\x3d" + selectedCountry;
    if (selectedCountry === "Other") countryType = "location-input\x3dnot-sure";
    var solutionBundleType = getNameFromTagId($(".solutionbundle.horizontal-tab li.active a").attr("tag"));
    var bundleType =
        solutionBundleType === "financial-solutions" ? "solutionBundle\x3dsmallCards" : "";
    var cardTitle;
    var smallCardLink;
    $(".ese-solution-cards .ese-solution-card.width-25").each(function(index, element) {
        smallCardLink = "";
        $(this).find(".content ul li").length === 1 && $(this).find(".content ul li").addClass("single-title");
        eachHorizontalTabID = $(this).parent().parent().parent().attr("id") ? $(this).parent().parent().parent().attr("id") : $(this).parent().parent().parent().parent().parent().attr("id");
        eachCardTagId = $(this).attr("tag");
        cardTitle = solutionBundleType === "financial-solutions" ? "cardTitle\x3d" + getNameFromTagId(eachCardTagId) : "";
        hrefLink = $(this).find("a");
        smallCardLink = $(this).find("a").attr("href").split("?").length > 0 && $(this).find("a").attr("href").split("?")[1];
        hrefLink.attr("href", $("#viewAll-bundle").text() + "?" + (smallCardLink ? smallCardLink + "\x26" : "") + cardTitle + "\x26" + bundleType + "\x26pageType\x3d" + (eachHorizontalTabID && eachHorizontalTabID.split("_")[0]) + "\x26stageType\x3d" + getNameFromTagId(eachCardTagId) + "\x26" + countryType)
    })
}

function smallCardClickBind() {
    $(".ese-solution-cards .ese-solution-card.width-25").each(function(index, element) {
        $("#financial-solutions_solbundle .ese-solution-card.width-25 .content.text-center a").click(function() {
            localStorage.setItem("solution_bundle", $("#solutionMap").text())
        })
    })
}

function appendBundleSolutionHtml(selectedCountry) {
    $bundleHeading.empty();
    $("#financial-solutions_solbundle #bundle-media").empty();
    $("#financial-solutions_solbundle #bundle-icon").empty();
    $("#financial-solutions_solbundle #bundle-media").append("\x3cimg src\x3d'" + selectedCountry["bgImageRef"] + "' alt\x3d'" + selectedCountry["bgAltText"] + "' /\x3e");
    $("#financial-solutions_solbundle #bundle-icon").append("\x3cimg src\x3d'" + selectedCountry["iconRef"] + "' alt\x3d'" + selectedCountry["altText"] + "' /\x3e");
    $bundleHeading.append(selectedCountry["cardTitle"]);
    if (selectedCountry)
        for (var i$54 = 0; selectedCountry["solutionTitle"].length > 6 ? i$54 < 6 : i$54 < selectedCountry["solutionTitle"].length; i$54++) {
            if ($(window).width() < 991 && i$54 == 5) break;
            bundleTitleHtml += "\x3cli\x3e" + selectedCountry["solutionTitle"][i$54]["label"] + "\x3c/li\x3e"
        }
    $("#financial-solutions_solbundle .ese-solution-card.width-50 #bundlesTitle").append(bundleTitleHtml)
}

function bindViawAllSolution(selectedCountry) {
    var url = "",
        countryType = selectedCountry !== "india" ? "location-input\x3dabroad\x26countryType\x3d" + urlParamObj["countryType"] : "location-input\x3d" + selectedCountry;
    urlParamObj["pageType"] = $(".solutionbundle.horizontal-tab li.active a").length > 0 && $(".solutionbundle.horizontal-tab li.active a").attr("href").split("_")[0].substring(1);
    if (selectedCountry === "India") countryType = "location-input\x3d" + selectedCountry;
    url = pageHasDropdownValue === "ddRequired" ? $("#viewAll-bundle").text() +
        "?pageType\x3d" + urlParamObj["pageType"] + "\x26" + countryType : $("#viewAll-bundle").text() + "?pageType\x3d" + urlParamObj["pageType"];
    $("#" + urlParamObj["pageType"] + "_solbundle #bundle-viewAll-" + urlParamObj["pageType"]).attr("href", url)
}

function hideVASCard() {
    $("#value-added-services_solbundle .ese-solution-card.width-25").each(function(index, element) {
        if ($(this).attr("tag") !== "icicibank:student-ecosystem/intent/online-learning") $(this).addClass("hide")
    })
}
var href = "";
var fId = "";
var currStuStep = 0,
    currParStep = 0,
    currInsStep = 0;
var studentObj = {};
var parentObj = {};
var instituteObj = {};
var iFinnShow = false,
    bachelorsShow = true,
    isk12Selected = false;
var childClicked = false;
var onCampusPowerFirstTime = true;
$('input[type\x3d"radio"]').click(function() {
    var nameofinput = $(this).attr("name");
    if ($(this).attr("name") == "lookingFor_level") {
        parentObj["lookingFor_level"] = getNameFromTagId($(this).attr("tag"));
        parentObj["personParentType"] = getNameFromTagId($(this).attr("tag"));
        if (getNameFromTagId($("input:radio[name\x3dlookingFor_level]:checked").attr("tag")) === "child") childClicked = true;
        else if (getNameFromTagId($("input:radio[name\x3dlookingFor_level]:checked").attr("tag")) === "self") childClicked = false;
        $("button.lookingFor_level").trigger("click")
    } else if ($(this).attr("name") ==
        "professional_edu_level") {
        parentObj["professional_edu_level"] = getNameFromTagId($(this).attr("tag"));
        if (parentObj.lookingFor_level === "self") {
            parentObj["personType"] = "parent";
            parentObj["personParentType"] = "self";
            parentObj["personParentTypeSelf"] = getNameFromTagId($(this).attr("tag"))
        }
        if (parentObj.lookingFor_level !== "self") $("button.lookingFor_level").trigger("click")
    } else if ($(this).attr("name") == "seduType") {
        studentObj["eduType"] = getNameFromTagId($(this).attr("tag"));
        $(this).val() === "kg-12" && getEduVal($(this).val());
        isk12Selected = $(this).val() === "kg-12";
        $("button.sedu-level").trigger("click")
    } else if ($(this).attr("name") == "sfurure_edu_level") {
        studentObj["furure_edu_level"] = getNameFromTagId($(this).attr("tag"));
        if (getNameFromTagId($(this).attr("tag")) !== "online-learning" && getNameFromTagId($(this).attr("tag")) !== "i-finn") $("button.sedu-level").trigger("click");
        if (getNameFromTagId($(this).attr("tag")) === "online-learning") {
            studentObj["stageType"] = getNameFromTagId($(this).attr("tag"));
            studentObj["pageType"] = "value-added-services";
            studentObj["personType"] = "student";
            $("[type\x3dradio]").prop("checked", false);
            redirectPage(studentObj)
        }
        if (getNameFromTagId($(this).attr("tag")) === "i-finn") window.location.href = document.location.origin + $("#ifinnHref").text()
    } else if ($(this).attr("name") == "slocation-input") {
        studentObj["location-input"] = getNameFromTagId($(this).attr("tag"));
        if (getNameFromTagId($(this).attr("tag")) === "india") {
            studentObj["location-input"] = getNameFromTagId($(this).attr("tag"));
            studentObj["pageType"] = "financial-solutions";
            studentObj["personType"] = "student";
            $("[type\x3dradio]").prop("checked", false);
            redirectPage(studentObj)
        }
        if (getNameFromTagId($(this).attr("tag")) !== "india") $("button.slocation_btn").trigger("click")
    } else if ($(this).attr("name") == "scountryType") {
        studentObj["countryType"] = getNameFromTagId($(this).attr("tag"));
        $("button.sedu_country_btn").trigger("click")
    } else if ($(this).attr("name") == "sstageType") studentObj["stageType"] = getNameFromTagId($(this).attr("tag"));
    else if ($(this).attr("name") == "eduType") {
        parentObj["eduType"] =
            getNameFromTagId($(this).attr("tag"));
        $(this).val() === "kg-12" && getEduVal($(this).val());
        isk12Selected = $(this).val() === "kg-12";
        $("button.edu-level").trigger("click")
    } else if ($(this).attr("name") == "furure_edu_level") {
        parentObj["furure_edu_level"] = getNameFromTagId($(this).attr("tag"));
        if (getNameFromTagId($(this).attr("tag")) !== "online-learning" && getNameFromTagId($(this).attr("tag")) !== "i-finn") $("button.edu-level").trigger("click");
        if (getNameFromTagId($(this).attr("tag")) === "i-finn") window.location.href =
            document.location.origin + $("#ifinnHref").text();
        if (getNameFromTagId($(this).attr("tag")) === "online-learning") {
            parentObj["stageType"] = getNameFromTagId($(this).attr("tag"));
            parentObj["pageType"] = "value-added-services";
            parentObj["personType"] = "parent";
            $("[type\x3dradio]").prop("checked", false);
            redirectPage(parentObj)
        }
    } else if ($(this).attr("name") == "location-input") {
        if (getNameFromTagId($(this).attr("tag")) === "india") {
            parentObj["location-input"] = getNameFromTagId($(this).attr("tag"));
            parentObj["pageType"] =
                "financial-solutions";
            parentObj["personType"] = "parent";
            $("[type\x3dradio]").prop("checked", false);
            redirectPage(parentObj)
        }
        parentObj["location-input"] = getNameFromTagId($(this).attr("tag"));
        if (getNameFromTagId($(this).attr("tag")) !== "india") $("button.location_btn").trigger("click")
    } else if ($(this).attr("name") == "countryType") {
        parentObj["countryType"] = getNameFromTagId($(this).attr("tag"));
        $("button.edu_country_btn").trigger("click")
    } else if ($(this).attr("name") == "stageType") parentObj["stageType"] = getNameFromTagId($(this).attr("tag"));
    else if ($(this).attr("name") == "instituteType") {
        instituteObj["pageType"] = "financial-solutions";
        instituteObj["personType"] = "institute";
        instituteObj["personParentType"] = "management";
        instituteObj["instituteType"] = getNameFromTagId($(this).attr("tag"));
        if (getNameFromTagId($(this).attr("tag")) === "management") {
            $("[type\x3dradio]").prop("checked", false);
            redirectPage(instituteObj)
        }
        if (getNameFromTagId($(this).attr("tag")) !== "management") $("button.instituteType").trigger("click")
    } else if ($(this).attr("name") ===
        "ifurure_edu_level") {
        instituteObj["personParentType"] = "employee";
        instituteObj["furure_edu_level"] = $(this).val();
        if (instituteObj.furure_edu_level === "self") {
            instituteObj["personType"] = "institute";
            instituteObj["personParentType"] = "employee";
            instituteObj["personParentTypeSelf"] = $(this).val()
        }
    } else $("#" + nameofinput).find("button.to-next-step").trigger("click")
});

function getEduVal(selectedVal) {
    if (selectedVal === "kg-12") iFinnShow = true;
    else iFinnShow = false
}

function getBachlorsVal(selectedVal) {
    if (selectedVal === "bachelors") bachelorsShow = false;
    else bachelorsShow = true;
    iFinnShow = false
}

function redirectPage(paramObj) {
    var params = "";
    for (var key in paramObj)
        if (paramObj.hasOwnProperty(key)) params = params + key + "\x3d" + paramObj[key] + "\x26";
    var redirectionUrl = $("#solutionHref").text() + "?" + params.replace(/ /g, "_").slice(0, -1);
    window.location.href = document.location.origin + redirectionUrl
}
$("#country_dropdown").selectmenu();
$("#stage_dropdown").selectmenu();
var studentNudgeJson = [];
var nudgeTimeout;
$(document).ready(function() {
    studentNudgeJson = $("#nudgesJson").length && convertJSON($("#nudgesJson").text());
    if ($("#landingPageType").text() === "student") {
        showNudgeDescription("icicibank:student-ecosystem/user/student", ".student");
        handleCurrentQuestion("#education-flow-calc")
    } else if ($("#landingPageType").text() === "parent") {
        showNudgeDescription("icicibank:student-ecosystem/user/parent", ".parent");
        handleCurrentQuestion("#parent-flow-calc")
    } else if ($("#landingPageType").text() === "institute") {
        showNudgeDescription("icicibank:student-ecosystem/user/institute",
            ".institute");
        handleCurrentQuestion("#institute-flow-calc")
    }
    var startingDiv = $(".horizontal-tab .active").find("a").attr("href");
    if (startingDiv === "#studentTab") {
        showNudgeDescription("icicibank:student-ecosystem/user/student", ".student");
        handleCurrentQuestion("#education-flow-calc")
    } else if (startingDiv === "#parentTab") {
        $(".notification-box").addClass("hide");
        handleCurrentQuestion("#parent-flow-calc")
    } else if (startingDiv === "#instituteTab") {
        $(".notification-box").addClass("hide");
        handleCurrentQuestion("#institute-flow-calc")
    }
    $(".horizontal-tab li").click(function(event) {
        event.preventDefault();
        $(".horizontal-tab li").removeClass("active");
        $(this).addClass("active");
        href = $(this).find("a").attr("href");
        $(".ese-started-section .horizontal-tab-content .tab-panel").removeClass("active");
        $(".ese-started-section .horizontal-tab-content " + href).addClass("active");
        if (href === "#studentTab") {
            showNudgeDescription("icicibank:student-ecosystem/user/student", ".student");
            fId = "#education-flow-calc"
        } else if (href === "#parentTab") {
            fId = "#parent-flow-calc";
            showNudgeDescription("icicibank:student-ecosystem/user/parent",
                ".parent")
        } else if (href === "#instituteTab") {
            fId = "#institute-flow-calc";
            showNudgeDescription("icicibank:student-ecosystem/user/institute", ".institute")
        }
        startingDiv = href;
        handleCurrentQuestion(fId)
    });
    $(".explore").click(function() {
        if (href === "#studentTab" || startingDiv === "#studentTab" || $("#landingPageType").text() === "student") {
            studentObj["pageType"] = "financial-solutions";
            studentObj["personType"] = "student";
            redirectPage(studentObj)
        } else if (href === "#parentTab" || startingDiv === "#parentTab" || $("#landingPageType").text() ===
            "parent") {
            parentObj["pageType"] = "financial-solutions";
            parentObj["personType"] = "parent";
            redirectPage(parentObj)
        } else if (href === "#instituteTab" || startingDiv === "#instituteTab" || $("#landingPageType").text() === "institute") {
            instituteObj["pageType"] = "financial-solutions";
            instituteObj["personType"] = "institute";
            if (instituteObj.furure_edu_level === "child") window.location.href = document.location.origin + $("#parentHref").text() + "?" + "pageType\x3dinstituteChild";
            if (instituteObj.furure_edu_level !== "child") redirectPage(instituteObj)
        }
        $("[type\x3dradio]").prop("checked",
            false)
    })
});

function handleCurrentQuestion(formId) {
    var currStep = 0;
    if (formId === "#institute-flow-calc") currStep = currInsStep;
    else if (formId === "#education-flow-calc") currStep = currStuStep;
    else if (formId === "#parent-flow-calc") {
        var isInstituteChild = queryParameters()["pageType"];
        if (isInstituteChild === "instituteChild") {
            $("#parent-flow-calc .education-flow").addClass("hide");
            $("#parent-flow-calc .education-flow").eq(2).removeClass("hide");
            for (var i = 0; i < 2; i++) {
                $(formId + " .dotted-progress li").eq(i).addClass("current");
                $(formId +
                    " .dotted-progress li").eq(i).addClass("active")
            }
            $(formId + " .dotted-progress li").eq(2).addClass("current");
            currParStep = 2
        }
        currStep = currParStep
    }
    var $sliderItem = $(formId + " .education-flow");
    var $progressItem = $(formId + " .dotted-progress li");
    $(formId + " .to-next-step").click(function() {
        if (formId === "#institute-flow-calc") {
            currStep = currStep < 2 ? currStep + 1 : currStep;
            currInsStep = currStep
        } else if (formId === "#parent-flow-calc") {
            if (formId === "#parent-flow-calc" && getNameFromTagId($("input:radio[name\x3dlocation-input]:checked").attr("tag")) ===
                "not-sure" || formId === "#parent-flow-calc" && getNameFromTagId($("input:radio[name\x3dlookingFor_level]:checked").attr("tag")) === "child") {
                delete parentObj.countryType;
                currStep = currStep < 7 ? currStep + 2 : currStep
            } else currStep = currStep < 7 ? currStep + 1 : currStep;
            currParStep = currStep
        } else if (formId === "#education-flow-calc") {
            if (formId === "#education-flow-calc" && getNameFromTagId($("input:radio[name\x3dslocation-input]:checked").attr("tag")) === "not-sure") {
                delete studentObj.countryType;
                currStep = currStep < 5 ? currStep + 2 :
                    currStep
            } else currStep = currStep < 5 ? currStep + 1 : currStep;
            currStuStep = currStep
        }
        $sliderItem.addClass("hide");
        $sliderItem.eq(currStep).removeClass("hide");
        if (iFinnShow) {
            $(formId + " input[tag\x3d'icicibank:student-ecosystem/looking-to-pursue/i-finn']").parent().removeClass("hide");
            $(formId + " input[tag\x3d'icicibank:student-ecosystem/looking-to-pursue/bachelors']").parent().removeClass("hide")
        } else $(formId + " input[tag\x3d'icicibank:student-ecosystem/looking-to-pursue/i-finn']").parent().addClass("hide");
        if (!isk12Selected)
            if (bachelorsShow) $(formId + " input[tag\x3d'icicibank:student-ecosystem/looking-to-pursue/bachelors']").parent().removeClass("hide");
            else $(formId + " input[tag\x3d'icicibank:student-ecosystem/looking-to-pursue/bachelors']").parent().addClass("hide");
        if (formId === "#education-flow-calc" && getNameFromTagId($("input:radio[name\x3dslocation-input]:checked").attr("tag")) === "not-sure" || formId === "#parent-flow-calc" && getNameFromTagId($("input:radio[name\x3dlocation-input]:checked").attr("tag")) ===
            "not-sure") {
            $progressItem.eq(currStep - 2).addClass("active");
            $progressItem.eq(currStep - 1).addClass("active")
        } else $progressItem.eq(currStep - 1).addClass("active");
        $progressItem.eq(currStep).addClass("current");
        if (formId === "#education-flow-calc") showNudgeDescription("icicibank:student-ecosystem/user/student", ".student");
        else if (formId === "#institute-flow-calc") showNudgeDescription("icicibank:student-ecosystem/user/institute", ".institute");
        else if (formId === "#parent-flow-calc") showNudgeDescription("icicibank:student-ecosystem/user/parent",
            ".parent");
        if (formId === "#education-flow-calc" && currStep === 5) $(formId + " .dotted-progress").addClass("hide");
        else if (formId === "#parent-flow-calc" && currStep === 7) $(formId + " .dotted-progress").addClass("hide");
        else $(formId + " .dotted-progress").removeClass("hide");
        if (formId === "#parent-flow-calc" && getNameFromTagId($("input:radio[name\x3dlookingFor_level]:checked").attr("tag")) === "self") {
            $(formId + " .dotted-progress li").not(".current").addClass("active");
            $(".self").removeClass("hide")
        }
        if (getNameFromTagId($("input:radio[name\x3dlookingFor_level]:checked").attr("tag")) ===
            "child") $("input:radio[name\x3dlookingFor_level]:checked").prop("checked", false)
    });
    $(".redirect-btn").click(function() {
        window.location.replace("solution-filter.html")
    });
    $(formId + " .to-back-step").click(function() {
        if (formId === "#institute-flow-calc") {
            currStep = currStep > 0 ? currStep - 1 : currStep;
            currInsStep = currStep
        } else if (formId === "#parent-flow-calc") {
            if (formId === "#parent-flow-calc" && getNameFromTagId($("input:radio[name\x3dlocation-input]:checked").attr("tag")) === "not-sure" || childClicked == true && !$("#pedu_level").hasClass("hide")) currStep =
                currStep > 0 ? currStep - 2 : currStep;
            else if (onCampusPowerFirstTime && queryParameters()["pageType"] === "instituteChild" && !$("#pedu_level").hasClass("hide")) {
                onCampusPowerFirstTime = false;
                currStep = currStep > 0 ? currStep - 2 : currStep;
                $(formId + " .dotted-progress li").eq(2).removeClass("current");
                $(formId + " .dotted-progress li").eq(2).removeClass("active")
            } else currStep = currStep > 0 ? currStep - 1 : currStep;
            currParStep = currStep
        } else if (formId === "#education-flow-calc") {
            if (formId === "#education-flow-calc" && getNameFromTagId($("input:radio[name\x3dslocation-input]:checked").attr("tag")) ===
                "not-sure") currStep = currStep > 0 ? currStep - 2 : currStep;
            else currStep = currStep > 0 ? currStep - 1 : currStep;
            currStuStep = currStep
        }
        $sliderItem.addClass("hide");
        $sliderItem.eq(currStep).removeClass("hide");
        if (formId === "#education-flow-calc" && getNameFromTagId($("input:radio[name\x3dslocation-input]:checked").attr("tag")) === "not-sure" && !$("#edu_level").hasClass("hide")) {
            $("input:radio[name\x3dslocation-input]:checked").prop("checked", false);
            $sliderItem.eq(currStep).addClass("hide");
            $sliderItem.eq(currStep + 1).removeClass("hide");
            currStep++;
            currStuStep = currStep
        } else if (formId === "#parent-flow-calc" && getNameFromTagId($("input:radio[name\x3dlocation-input]:checked").attr("tag")) === "not-sure" && !$("#pedu_level").hasClass("hide")) {
            $("input:radio[name\x3dlocation-input]:checked").prop("checked", false);
            $sliderItem.eq(currStep).addClass("hide");
            $sliderItem.eq(currStep + 1).removeClass("hide");
            currStep++;
            currParStep = currStep
        }
        if (formId === "#education-flow-calc" && getNameFromTagId($("input:radio[name\x3dslocation-input]:checked").attr("tag")) ===
            "not-sure" || formId === "#parent-flow-calc" && getNameFromTagId($("input:radio[name\x3dlocation-input]:checked").attr("tag")) === "not-sure" || childClicked == true && !$("#looking-for").hasClass("hide")) {
            $progressItem.eq(currStep + 2).removeClass("active");
            $progressItem.eq(currStep + 2).removeClass("current");
            $progressItem.eq(currStep + 1).removeClass("active")
        } else {
            $progressItem.eq(currStep + 1).removeClass("active");
            $progressItem.eq(currStep + 1).removeClass("current")
        }
        if (formId === "#education-flow-calc" && currStep ===
            5) $(formId + " .dotted-progress").addClass("hide");
        else if (formId === "#parent-flow-calc" && currStep === 7) $(formId + " .dotted-progress").addClass("hide");
        else $(formId + " .dotted-progress").removeClass("hide");
        if (isk12Selected) $(formId + " input[tag\x3d'icicibank:student-ecosystem/looking-to-pursue/i-finn']").parent().removeClass("hide");
        if (formId === "#parent-flow-calc" && getNameFromTagId($("input:radio[name\x3dlookingFor_level]:checked").attr("tag")) === "self") {
            $(".self").addClass("hide");
            $(formId + " .dotted-progress li").removeClass("active");
            $("input:radio[name\x3dlookingFor_level]:checked").prop("checked", false)
        }
    })
}

function showNudgeDescription(tab, description) {
    clearTimeout(nudgeTimeout);
    $(".notification-box").removeClass("hide");
    $(".ese-started-section .section-inner").removeClass("hide-nudge");
    var filteredStudentArr = getFilteredSolutionArray(studentNudgeJson, "usertypetags", tab);
    var text;
    var descArray = filteredStudentArr.filter(function(nudge) {
        $(".horizontal-tab-content .active .education-flow").each(function() {
            if (!$(this).hasClass("hide") && nudge.nudgetags.length > 0) {
                if ($(this).attr("tag") === nudge.nudgetags[0]) {
                    text =
                        createNudgeHtml(nudge);
                    return text
                }
            } else if (!$(this).hasClass("hide") && nudge.nudgetags.length == 0 && nudge.nudgedesc !== "") text = createNudgeHtml(nudge)
        })
    });
    $(description + "desc").empty();
    $(description + "desc").append(text);
    nudgeTimeout = setTimeout(function() {
        $(".notification-box").addClass("hide");
        $(".ese-started-section .section-inner").addClass("hide-nudge")
    }, 1E4)
}

function createNudgeHtml(selectedObj) {
    var studentNudgeHtml = "";
    studentNudgeHtml = "\x3cstrong class\x3d'block'\x3e" + selectedObj["nudgetitle"] + "?\x3c/strong\x3e" + selectedObj["nudgedesc"] + (selectedObj["nudgelink"] !== "" ? "\x3ca id\x3d'" + selectedObj["nudgeId"] + "' target\x3d'_blank' href\x3d'" + selectedObj["nudgelink"] + "'\x3eClick here\x3c/a\x3e to know more" : "");
    return studentNudgeHtml
}
var studentNudgeJson = [];
var filteredNudgeArr = [];
var shownFirstTime = true;
var divTimeout = null;
$(document).ready(function() {
    var currentTypeTag = getCurrentTag();
    studentNudgeJson = $("#nudgesJson").length && convertJSON($("#nudgesJson").text());
    handleStudentNudges(currentTypeTag)
});

function getCurrentTag() {
    var tagValue = "";
    if ($("#landingPageType").text() === "institute") tagValue = "icicibank:student-ecosystem/user/institute";
    else if ($("#landingPageType").text() === "student") tagValue = "icicibank:student-ecosystem/user/student";
    else if ($("#landingPageType").text() === "parent") tagValue = "icicibank:student-ecosystem/user/parent";
    else if ($("#landingPageType").text() === "overall" && $(".ese-started-section .horizontal-tab li.active").length > 0) tagValue = $(".ese-started-section .horizontal-tab li.active").attr("tag");
    return tagValue
}

function handleStudentNudges(selectedgetStartedTab) {
    filteredNudgeArr = [];
    if (studentNudgeJson) filteredNudgeArr = getFilteredSolutionArray(studentNudgeJson, "usertypetags", selectedgetStartedTab)
}

function getCurrentQuestion(currentFormId) {
    var currentActiveTag = "",
        currentChildActiveTag = "";
    var foundNudge = {};
    divTimeout = setTimeout(function() {
        $(currentFormId + " .education-flow").each(function() {
            if (!$(this).hasClass("hide")) {
                currentActiveTag = $(this).attr("tag");
                foundNudge = filteredNudgeArr.find(function(el) {
                    return el["nudgetags"].length > 0 && el["nudgetags"].indexOf(currentActiveTag) > -1 && el
                });
                if (!foundNudge && $(currentFormId + " [tag\x3d'" + currentActiveTag + "'] input[type\x3d'radio']:checked")) {
                    currentChildActiveTag =
                        $(currentFormId + " [tag\x3d'" + currentActiveTag + "'] input[type\x3d'radio']:checked").attr("tag");
                    foundNudge = filteredNudgeArr.find(function(el) {
                        return el["nudgetags"].length > 0 && el["nudgetags"].indexOf(currentChildActiveTag) > -1 && el
                    })
                }
                if (!foundNudge && shownFirstTime) {
                    foundNudge = filteredNudgeArr.find(function(el) {
                        return el["nudgetags"].length === 0 && el["usertypetags"].length > 0 && el["usertypetags"].indexOf(getCurrentTag()) > -1 && el
                    });
                    shownFirstTime = false
                }
                return
            }
        });
        if (!foundNudge) {
            $(currentFormId + " #student-nudge").parent().addClass("hide");
            foundNudge = getInputCheckedTagValue(currentFormId, currentActiveTag)
        }
        if (foundNudge) {
            createStuNudge(currentFormId, foundNudge);
            $(currentFormId + " #student-nudge").parent().removeClass("hide");
            clearNudge(currentFormId)
        }
    }, 10)
}

function createStuNudge(currentFormId, selectedObj) {
    $(currentFormId + " #student-nudge").empty();
    if (!selectedObj["nudgetitle"] || selectedObj["nudgetitle"] === "") {
        $(".notification-box").addClass("hide");
        $(currentFormId + " #student-nudge").empty()
    } else {
        var studentNudgeHtml = "";
        studentNudgeHtml = "\x3cstrong class\x3d'block'\x3e" + selectedObj["nudgetitle"] + "?\x3c/strong\x3e" + selectedObj["nudgedesc"] + (selectedObj["nudgelink"] !== "" ? "\x3ca target\x3d'_blank' href\x3d'" + selectedObj["nudgelink"] + "'\x3eClick here\x3c/a\x3e to know more" :
            "");
        studentNudgeHtml.length > 0 && $(currentFormId + " #student-nudge").html(studentNudgeHtml)
    }
}

function clearNudge(currentFormId) {
    nudgeTimeout = setTimeout(function() {
        $(currentFormId + " #student-nudge").parent().addClass("hide")
    }, 1E4)
}

function removeNudge(currentFormId) {
    clearTimeout(nudgeTimeout);
    clearTimeout(divTimeout);
    $(currentFormId + " #student-nudge").parent().addClass("hide")
}

function getInputCheckedTagValue(currentFormId, currentActiveTag) {
    var currentCheckedTag = "";
    var foundNudge = undefined;
    $(currentFormId + " [tag\x3d'" + currentActiveTag + "'] input[type\x3d'radio']").on("change", function() {
        currentCheckedTag = $(this).attr("tag");
        foundNudge = filteredNudgeArr.find(function(el) {
            return el["nudgetags"].length > 0 && el["nudgetags"].indexOf(currentCheckedTag) > -1 && el
        });
        if (foundNudge) {
            createStuNudge(currentFormId, foundNudge);
            $(currentFormId + " #student-nudge").parent().removeClass("hide")
        }
    })
}

function onStudentChangeValue() {
    $("#student-flow-calc input[name\x3deduType]").on("change", function() {
        studentSelectedVal["eduType"] = getNameFromTagId($(this).attr("tag"));
        return false
    });
    $("#student-flow-calc input[name\x3dfurure_edu_level]").on("change", function() {
        if (getNameFromTagId($(this).attr("tag")) !== "online-learning") {
            studentSelectedVal["furure_edu_level"] = getNameFromTagId($(this).attr("tag"));
            studentSelectedVal["stageType"] = getNameFromTagId($("#student-flow-calc input[name\x3dstageType]:checked").attr("tag"))
        } else studentSelectedVal["stageType"] =
            getNameFromTagId($(this).attr("tag"));
        $("#student-flow-calc [tag\x3d'icicibank:student-ecosystem/looking-to-pursue'] #student-href").remove();
        changeHrefStudentParent("#student-flow-calc", $(this).val(), studentSelectedVal, "#student-href", "icicibank:student-ecosystem/looking-to-pursue");
        return false
    });
    $("#student-flow-calc input[name\x3dlocation-input]").on("change", function() {
        studentSelectedVal["location-input"] = getNameFromTagId($(this).attr("tag"));
        redirectAfterIndia("#student-flow-calc", $(this).val(),
            studentSelectedVal, "#student-href", "icicibank:student-ecosystem/location");
        return false
    });
    $("#student-flow-calc input[name\x3dcountryType]").on("change", function() {
        studentSelectedVal["countryType"] = getNameFromTagId($(this).attr("tag"));
        return false
    });
    $("#student-flow-calc input[name\x3dstageType]").on("change", function() {
        studentSelectedVal["stageType"] = getNameFromTagId($(this).attr("tag"));
        return false
    });
    $("#student-flow-calc .education-flow .radio-style-box input[type\x3d'radio']:checked").each(function() {
        studentSelectedVal[$(this).attr("name")] =
            getNameFromTagId($(this).attr("tag"))
    })
}

function onParentChangeValue() {
    $("#parent-flow-calc input[name\x3dlookingFor_level]").on("change", function() {
        parentSelectedVal["lookingFor_level"] = getNameFromTagId($(this).attr("tag"));
        return false
    });
    $("#parent-flow-calc input[name\x3dprofessional_edu_level]").on("change", function() {
        parentSelectedVal["professional_edu_level"] = getNameFromTagId($(this).attr("tag"));
        return false
    });
    $("#parent-flow-calc input[name\x3deduType]").on("change", function() {
        parentSelectedVal["eduType"] = getNameFromTagId($(this).attr("tag"));
        return false
    });
    $("#parent-flow-calc input[name\x3dfurure_edu_level]").on("change", function() {
        if (getNameFromTagId($(this).attr("tag")) !== "online-learning") {
            parentSelectedVal["furure_edu_level"] = getNameFromTagId($(this).attr("tag"));
            parentSelectedVal["stageType"] = getNameFromTagId($("#parent-flow-calc input[name\x3dstageType]:checked").attr("tag"))
        } else parentSelectedVal["stageType"] = getNameFromTagId($(this).attr("tag"));
        $("#parent-href").remove();
        changeHrefStudentParent("#parent-flow-calc", $(this).val(),
            parentSelectedVal, "#parent-href", "icicibank:student-ecosystem/looking-to-pursue");
        return false
    });
    $("#parent-flow-calc input[name\x3dlocation-input]").on("change", function() {
        parentSelectedVal["location-input"] = getNameFromTagId($(this).attr("tag"));
        redirectAfterIndia("#parent-flow-calc", $(this).val(), parentSelectedVal, "#parent-href", "icicibank:student-ecosystem/location");
        return false
    });
    $("#parent-flow-calc input[name\x3dcountryType]").on("change", function() {
        parentSelectedVal["countryType"] = getNameFromTagId($(this).attr("tag"));
        return false
    });
    $("#parent-flow-calc input[name\x3dstageType]").on("change", function() {
        parentSelectedVal["stageType"] = getNameFromTagId($(this).attr("tag"));
        return false
    });
    $("#parent-flow-calc input[name\x3dpageType]").on("change", function() {
        parentSelectedVal["pageType"] = getNameFromTagId($(this).attr("tag"));
        return false
    });
    $("#parent-flow-calc .education-flow .radio-style-box input[type\x3d'radio']:checked").each(function() {
        parentSelectedVal[$(this).attr("name")] = getNameFromTagId($(this).attr("tag"))
    })
}

function onInstituteChangeValue() {
    $("#institute-flow-calc input[name\x3dinstituteType]").on("change", function() {
        instituteSelectedVal["instituteType"] = $(this).val();
        changeHrefInstitutueBtn($(this).val());
        return false
    });
    $("#institute-flow-calc input[name\x3dfurure_edu_level]").on("change", function() {
        instituteSelectedVal["furure_edu_level"] = $(this).val();
        return false
    });
    $("#institute-flow-calc .education-flow .radio-style-box input[type\x3d'radio']:checked").each(function() {
        instituteSelectedVal[$(this).attr("name")] =
            getNameFromTagId($(this).attr("tag"))
    });
    changeHrefInstitutueBtn($("#institute-flow-calc input[name\x3dinstituteType]:checked").val())
}

function changeHrefInstitutueBtn($currentValue) {
    if ($currentValue === "management") {
        $('#institute-flow-calc [tag\x3d"icicibank:student-ecosystem/institute-user-type"] .button-group').append("\x3ca href\x3d'" + $("#solutionHref").text() + "' class\x3d'ic-btn to-next-step' id\x3d'institute-href'\x3eNext\x3c/a\x3e");
        $('#institute-flow-calc [tag\x3d"icicibank:student-ecosystem/institute-user-type"] .button-group button').addClass("hide");
        $('#institute-flow-calc [tag\x3d"icicibank:student-ecosystem/institute-user-type"] .button-group').on("click",
            function(event) {
                event.preventDefault();
                setGetParameter($("#institute-href"), instituteSelectedVal);
                return false
            })
    } else {
        $('#institute-flow-calc [tag\x3d"icicibank:student-ecosystem/institute-user-type"] .button-group #institute-href').remove();
        $('#institute-flow-calc [tag\x3d"icicibank:student-ecosystem/institute-user-type"] .button-group button').removeClass("hide");
        $('#institute-flow-calc [tag\x3d"icicibank:student-ecosystem/institute-user-type"] .button-group').off("click")
    }
}

function changeHrefParent($currentDiv) {
    if (!$currentDiv.hasClass("hide"))
        if ($('#parent-flow-calc [tag\x3d"' + $currentDiv.attr("tag") + '"] .button-group a').length > 0) {
            $('#parent-flow-calc [tag\x3d"' + $currentDiv.attr("tag") + '"] .button-group #parent-href').remove();
            $('#parent-flow-calc [tag\x3d"' + $currentDiv.attr("tag") + '"] .button-group button').removeClass("hide");
            $('#parent-flow-calc [tag\x3d"' + $currentDiv.attr("tag") + '"] .button-group a').off("click")
        } else {
            $('#parent-flow-calc [tag\x3d"' + $currentDiv.attr("tag") +
                '"] .button-group').append("\x3ca href\x3d'" + $("#solutionHref").text() + "' class\x3d'ic-btn to-next-step' id\x3d'parent-href'\x3eNext\x3c/a\x3e");
            $('#parent-flow-calc [tag\x3d"' + $currentDiv.attr("tag") + '"] .button-group button.ic-btn.to-next-step').addClass("hide");
            $('#parent-flow-calc [tag\x3d"' + $currentDiv.attr("tag") + '"] .button-group a').on("click", function(event) {
                event.preventDefault();
                setGetParameter($("#parent-href"), parentSelectedVal);
                return false
            })
        }
}

function changeHrefStudentParent(formId, currentValue, objType, anchorId, tagId) {
    var $hrefTag = currentValue === "online learning" ? $("#solutionHref").text() : $("#ifinnHref").text();
    if (currentValue === "online learning" || currentValue === "i-finn") {
        $(formId + ' [tag\x3d"' + tagId + '"] .button-group').append("\x3ca href\x3d'" + $hrefTag + "' class\x3d'ic-btn to-next-step' id\x3d'" + anchorId.substring(1) + "'\x3eNext\x3c/a\x3e");
        $(formId + ' [tag\x3d"' + tagId + '"] .button-group .to-next-step').addClass("hide");
        $(formId + ' [tag\x3d"' +
            tagId + '"] .button-group a').removeClass("hide");
        $(formId + ' [tag\x3d"' + tagId + '"] .button-group a').on("click", function(event) {
            event.preventDefault();
            currentValue === "online learning" ? setGetParameter($(anchorId), objType) : window.open($("#ifinnHref").text(), "_blank");
            return false
        });
        return
    } else {
        $(formId + ' [tag\x3d"' + tagId + '"] .button-group ' + anchorId).remove();
        $(formId + ' [tag\x3d"' + tagId + '"] .button-group button').removeClass("hide");
        $(formId + ' [tag\x3d"' + tagId + '"] .button-group a').off("click")
    }
}

function redirectAfterIndia(formId, currentValue, objType, anchorId, tagId) {
    if (currentValue === "india") {
        $(formId + ' [tag\x3d"' + tagId + '"] .button-group').append("\x3ca href\x3d'" + $("#solutionHref").text() + "' class\x3d'ic-btn to-next-step' id\x3d'" + anchorId.substring(1) + "'\x3eNext\x3c/a\x3e");
        $(formId + ' [tag\x3d"' + tagId + '"] .button-group .to-next-step').addClass("hide");
        $(formId + ' [tag\x3d"' + tagId + '"] .button-group a').removeClass("hide");
        $(formId + ' [tag\x3d"' + tagId + '"] .button-group a').on("click", function(event) {
            event.preventDefault();
            setGetParameter($(anchorId), objType);
            return false
        });
        return
    } else {
        $(formId + ' [tag\x3d"' + tagId + '"] .button-group ' + anchorId).remove();
        $(formId + ' [tag\x3d"' + tagId + '"] .button-group button').removeClass("hide");
        $(formId + ' [tag\x3d"' + tagId + '"] .button-group a').off("click")
    }
}
$(".verticaltab-image a").click(function() {
    $(this).parents(".verticaltab-image").find("li").removeClass("active");
    $(this).parent().addClass("active");
    var currentTab = $(this).attr("href");
    currentVerticalRecSolTab = $(this).attr("tag");
    $(currentTab).addClass("active");
    bindViewAllCta();
    return false
});
(function() {
    var $availingDropdown = $(".m-dropdown-button");
    var $tabItem = $(".verticaltab-image li a");
    $availingDropdown.on("click", function() {
        $(this).next().toggleClass("show")
    });
    $tabItem.on("click", function() {
        var displayParent = $(this).closest(".verticaltab-image");
        displayParent.prev().html($(this).find("h4").html());
        displayParent.removeClass("show")
    });
    $(document).click(function(event) {
        var target = event.target;
        var select = $availingDropdown;
        if (!select.is(target) && select.has(target).length === 0) $availingDropdown.next().removeClass("show")
    })
})();
var orignalRecmdedSolArray = [];
var selectedRecomArr = [];
var currentRecomSolTab = "";
var currentVerticalRecSolTab = "";
var $currentPageHorizontalTabEl = $(".recomendedSolution.horizontal-tab a");
var isSolutionRecmdedFinancialTab = true;
$(document).ready(function() {
    orignalRecmdedSolArray = $("#recommendedUserTypeAsJson").length > 0 && convertJSON($("#recommendedUserTypeAsJson").text());
    $currentPageHorizontalTabEl.click(function() {
        $(this).parents(".recomendedSolution.horizontal-tab").find("li").removeClass("active");
        $(this).parent().addClass("active");
        var currentTab = $(this).attr("href");
        currentOpenTabTag = $(this).attr("tag");
        isSolutionRecmdedFinancialTab = currentTab === "#financial-solutions";
        recomndSolutionTabChange($(this));
        $(this).parents(".recomendedSolutionhorizontal.horizontal-link-tab").find(".recomndpanel.tab-panel").removeClass("active");
        $(currentTab).addClass("active");
        return false
    });
    currentRecomSolTab = $currentPageHorizontalTabEl.length > 0 && $currentPageHorizontalTabEl.attr("href");
    currentVerticalRecSolTab = $(".verticaltab-image a").length > 0 && $(".verticaltab-image a").attr("tag");
    $(".ese-solutions-sidebartab .horizontal-tab-content .tab-panel").length > 0 && $(".ese-solutions-sidebartab .horizontal-tab-content .tab-panel").each(function() {
        $("#" + $(this).attr("id") + " .verticalImagetab-section .sidebar-tab .verticaltab-image li a").click(function() {
            filterRecomndArr($(this).attr("tag"));
            generateRecomndCardsHTML(selectedRecomArr, currentRecomSolTab)
        })
    });
    financialSol = getFilteredSolutionArray(orignalRecmdedSolArray, "typetag", "icicibank:student-ecosystem/type/financial-solutions");
    valueAddedServices = getFilteredSolutionArray(orignalRecmdedSolArray, "typetag", "icicibank:student-ecosystem/type/value-added-services");
    filterRecomndArr(currentVerticalRecSolTab);
    generateRecomndCardsHTML(selectedRecomArr, currentRecomSolTab);
    bindViewAllCta()
});

function filterRecomndArr(tagId) {
    selectedRecomArr = getFilteredSolutionArray(isSolutionRecmdedFinancialTab ? financialSol : valueAddedServices, isSolutionRecmdedFinancialTab ? "categorytag" : "intenttag", tagId)
}

function generateRecomndCardsHTML(selectedRecomArr, currentTabId) {
    if (selectedRecomArr) {
        $(currentTabId + "-Cards .ese-solutions-slider").hasClass("slick-initialized") && $(currentTabId + "-Cards .ese-solutions-slider").slick("unslick");
        $(currentTabId + "-Cards .ese-solutions-slider").empty();
        var solutionCardsHtml = "";
        for (var i$55 = 0; i$55 < selectedRecomArr.length; i$55++) solutionCardsHtml += '\x3cdiv class\x3d"solutions-card"\x3e \x3cdiv class\x3d"media"\x3e\x3cimg src\x3d"' + selectedRecomArr[i$55]["imagepath"] + '" alt\x3d""\x3e\x3c/div\x3e\x3cdiv class\x3d"content"\x3e\x3cdiv class\x3d"top-content"\x3e\x3ch3\x3e' +
            selectedRecomArr[i$55]["title"] + "\x3c/h3\x3e" + selectedRecomArr[i$55]["description"] + '\x3c/div\x3e\x3cdiv class\x3d"buttons"\x3e\x3ca target\x3d"_blank" id\x3d"' + (selectedRecomArr && selectedRecomArr.length > 0 && selectedRecomArr[i$55]["title"].split(" ")[0]).replace(/[^a-zA-Z0-9]/g, "") + "-" + i$55 + '" href\x3d"' + selectedRecomArr[i$55]["ctapath"] + '" class\x3d"ic-btn ic-btn-gradient"\x3e' + selectedRecomArr[i$55]["ctalabel"] + "\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
        if (solutionCardsHtml.length > 0) $(currentTabId +
            "-Cards .ese-solutions-slider").html(solutionCardsHtml);
        $(currentTabId + "-Cards .ese-solutions-slider").slick({
            dots: false,
            arrows: true,
            infinite: false,
            autoplay: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }, {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }]
        })
    }
    selectedRecomArr && selectedRecomArr.length > 0 && bindDisclaimerPopupSolutionPage(selectedRecomArr, currentTabId === "#financial-solutions",
        "_recommended_solutions_click")
}

function recomndSolutionTabChange($tabEl) {
    if ($tabEl.length > 0) {
        currentRecomSolTab = $tabEl.attr("href");
        selectedRecomArr = isSolutionRecmdedFinancialTab ? financialSol : valueAddedServices;
        filterRecomndArr($(currentRecomSolTab + " .verticaltab-image a").attr("tag"));
        generateRecomndCardsHTML(selectedRecomArr, currentRecomSolTab);
        bindViewAllCta()
    }
}

function bindViewAllCta() {
    var $recomndViewAllEl = $("#recomended-viewAll");
    var params = "",
        currentActiveTab = "";
    $recomndViewAllEl.attr("href", "");
    currentActiveTab = $(".recomendedSolution.horizontal-tab li.active a").attr("href");
    urlParamObj["personType"] = getNameFromTagId($("#userTag").text());
    if (urlParamObj["personType"] === "parent") urlParamObj["personParentType"] = "child";
    if (urlParamObj["personType"] === "institute") urlParamObj["personParentType"] = "management";
    if (urlParamObj["personType"] === "student") delete urlParamObj["personParentType"];
    urlParamObj["pageType"] = currentActiveTab && currentActiveTab.substring(1);
    for (var key in urlParamObj)
        if (urlParamObj.hasOwnProperty(key)) params = params + key + "\x3d" + urlParamObj[key] + "\x26";
    if (urlParamObj["pageType"] === "value-added-services") params = params + "stageType\x3d" + getNameFromTagId($("#value-added-services .verticaltab-image li.active a").attr("tag")) + "\x26";
    $recomndViewAllEl.length > 0 && $($recomndViewAllEl).attr("href", $("#viewAll-recomended").text() + "?" + params.replace(/ /g, "_").slice(0, -1))
}
var landingPageCategory = "";
var isQueryParameterFlow = false;
var solutionFilterArr = [];
var solutionFlowUser = "";
var backClickPopupJson = [];
var firstTimeQueryParamFlow = true;
var selectedSolutionCard;
var isFilterClick = false;
$(".ese-solutions-filter #financial_solutions .filter-content .filter-icon").click(function() {
    $(this).addClass("hide");
    $(".ese-solutions-filter #financial_solutions .sidebar-content").addClass("active");
    $("body").addClass("no-scroll")
});
$(".ese-solutions-filter #value_services .filter-content .filter-icon").click(function() {
    $(this).addClass("hide");
    $(".ese-solutions-filter #value_services .sidebar-content").addClass("active");
    $("body").addClass("no-scroll")
});
$(".ese-solutions-filter #financial_solutions .sidebar-header .close").click(function() {
    $(this).parents("#financial_solutions .sidebar-content").removeClass("active");
    $(".ese-solutions-filter #financial_solutions .filter-content .filter-icon").removeClass("hide");
    $("body").removeClass("no-scroll")
});
$(".ese-solutions-filter #value_services .sidebar-header .close").click(function() {
    $(this).parents("#value_services .sidebar-content").removeClass("active");
    $(".ese-solutions-filter #value_services .filter-content .filter-icon").removeClass("hide");
    $("body").removeClass("no-scroll")
});
$(".ese-solutions-filter .radio-list").click(function() {
    $(this).next(".radio-lists").addClass("show")
});
if ($(window).width() < 991) $(".ese-solutions-filter .sidebar-content .sb-box .heading").on("click", function() {
    $(".ese-solutions-filter .sidebar-content .sb-box").removeClass("active");
    $(this).parents(".sb-box").addClass("active")
});
$(document).ready(function() {
    var filters = [];
    var isKg12Card = $("input[name\x3d'eduType']:checked").val() === "icicibank:student-ecosystem/current-education/kg-12";
    gaUTMImplementation();
    addClickEventToheader();
    if (window.location.pathname.indexOf("campus-power/solutions") > -1) {
        $(".new-header.desktop").removeClass("sticky");
        $(".new-header.desktop").removeClass("sticky-enable")
    }
    var filterType = "";
    backClickPopupJson = $("#backPopupJson").length && convertJSON($("#backPopupJson").text());
    if (Object.keys(queryParameters()).length !=
        0 && queryParameters()["pageType"]) {
        solutionFlowUser = queryParameters()["personType"] ? queryParameters()["personType"] : getNameFromTagId($("input[name\x3d'personType']:checked").val());
        handleQueryparamsFlow();
        isQueryParameterFlow = true;
        firstTimeQueryParamFlow = true;
        addSelctedValuesToFilter(getSubcategoryFilters())
    }
    if (!isQueryParameterFlow) {
        $(".ese-solutions-filter input[name\x3d'location-input']").eq(1).prop("checked", true);
        $(".ese-solutions-filter input[name\x3d'countryType']:first").prop("checked", true);
        solutionFlowUser = getNameFromTagId($("input[name\x3d'personType']:checked").val())
    }
    studentParentChildIndiaFlow();
    instituteFilterFlow();
    parentSelfCombination();
    loadSolutionFilterCards($(".ese-solutions-filter .horizontal-link-tab ul li.active button").attr("tag"));
    filterType = isQueryParameterFlow ? queryParameters()["pageType"] : "financial-solutions";
    if (filterType === "financial-solutions") generateSolutionsCardItems();
    else generateServiceCardItems();

    function generateSolutionsCardItems() {
        var showSolutionCardsArr =
            filterSolutionCards();
        var solutionCardsData = showSolutionCardsArr.length > 0 && showSolutionCardsArr.filter(function(item, index) {
            return item && item["hideSolution"] === "false"
        });
        if (solutionCardsData[0] === "") solutionCardsData.length = 0;
        if (queryParameters()["solutionBundle"] === "smallCards" && queryParameters()["cardTitle"] && !isFilterClick) {
            selectedSolutionCard = queryParameters()["cardTitle"];
            if (solutionBundleJson) {
                var found = solutionFilterArr.filter(function(item, index) {
                    return item["categorytag"].includes("icicibank:student-ecosystem/category/" +
                        selectedSolutionCard)
                });
                found.sort(function(a, b) {
                    return parseFloat(a.priority) - parseFloat(b.priority)
                });
                solutionCardsData = found
            }
        }
        var html = "";
        solutionCardGroupCount = 6;
        for (var index$56 = 0; index$56 < solutionCardsData.length; index$56++) {
            if (index$56 % solutionCardGroupCount == 0)
                if (index$56 >= solutionCardGroupCount) html += '\x3cdiv class\x3d"solutions-cards hidden-card"\x3e';
                else html += '\x3cdiv class\x3d"solutions-cards"\x3e';
            var item = solutionCardsData[index$56];
            html += generateSolutionsHTML(item, index$56);
            if (index$56 %
                solutionCardGroupCount == solutionCardGroupCount - 1) html += "\x3c/div\x3e"
        }
        if (html.length > 0) {
            $(".financial-solutions-cards").html(html);
            solutionCardsData.length > 0 && bindDisclaimerPopupSolutionPage(solutionCardsData, true, "_know_more_click");
            bindClickKnowMoreCampus("FS")
        } else $(".financial-solutions-cards").html('\x3cdiv class\x3d"no-result"\x3e\x3c/div\x3e')
    }

    function bindClickKnowMoreCampus(tabType) {
        $(".solutions-cards .top-content p a").click(function() {
            dataLayer.push({
                "event": "custom_event",
                "eventCategory": "campus_power",
                "eventAction": tabType + "_know_more_click",
                "eventLabel": $(this).parent().parent().find("h3").text()
            })
        })
    }

    function generateSolutionsHTML(card, i) {
        var html = '\x3cdiv class\x3d"solutions-card"\x3e\x3cdiv class\x3d"media"\x3e\x3cimg src\x3d"' + card.imagepath + '" alt\x3d""\x3e\x3c/div\x3e\x3cdiv class\x3d"content"\x3e\x3cdiv class\x3d"top-content"\x3e\x3ch3\x3e' + card.title + "\x3c/h3\x3e" + card.description + '\x3c/div\x3e\x3cdiv class\x3d"buttons"\x3e\x3ca target\x3d"_blank" id\x3d"' + (card && card["title"].split(" ")[0]).replace(/[^a-zA-Z0-9]/g,
            "") + "-" + i + '" href\x3d"' + card.ctapath + "?" + gaUTMImplementation() + '" class\x3d"ic-btn ic-btn-gradient"\x3e' + card.ctalabel + "\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
        return html
    }

    function generateServiceCardItems() {
        var servicesCardsData = filterServicesCards();
        if (servicesCardsData[0] === "") servicesCardsData.length = 0;
        var html = "";
        servicesCardsData = parentSelfIntentCombinationVas(servicesCardsData);
        serviceCardGroupCount = 6;
        for (var index$57 = 0; index$57 < servicesCardsData.length; index$57++) {
            if (index$57 % serviceCardGroupCount ==
                0)
                if (index$57 >= serviceCardGroupCount) html += '\x3cdiv class\x3d"solutions-cards hidden-card"\x3e';
                else html += '\x3cdiv class\x3d"solutions-cards"\x3e';
            var item = servicesCardsData[index$57];
            html += generateServiceHTML(item, index$57);
            if (index$57 % serviceCardGroupCount == serviceCardGroupCount - 1) html += "\x3c/div\x3e"
        }
        if (html.length > 0) {
            $(".service-solutions-cards").html(html);
            servicesCardsData.length > 0 && bindDisclaimerPopupSolutionPage(servicesCardsData, false, "_know_more_click");
            bindClickKnowMoreCampus("VAS")
        } else $(".service-solutions-cards").html('\x3cdiv class\x3d"no-result"\x3e\x3c/div\x3e')
    }

    function generateServiceHTML(card, i) {
        var html = '\x3cdiv class\x3d"solutions-card ' + (card.title === "i-Finn" && !isKg12Card ? "hide" : "") + '"\x3e\x3cdiv class\x3d"media"\x3e\x3cimg src\x3d"' + card.imagepath + '" alt\x3d""\x3e\x3c/div\x3e\x3cdiv class\x3d"content"\x3e\x3cdiv class\x3d"top-content"\x3e \x3ch3\x3e' + card.title + "\x3c/h3\x3e" + card.description + '\x3c/div\x3e\x3cdiv class\x3d"buttons"\x3e\x3ca target\x3d"_blank" id\x3d"' + (card && card["title"].split(" ")[0]).replace(/[^a-zA-Z0-9]/g, "") + "-" + i + '" href\x3d"' +
            card.ctapath + '" class\x3d"ic-btn ic-btn-gradient"\x3e' + card.ctalabel + "\x3c/a\x3e \x3c/div\x3e\x3c/div\x3e \x3c/div\x3e";
        return html
    }

    function parentSelfIntentCombinationVas(servicesCardsData) {
        var selectedIamValue = getNameFromTagId($("input[name\x3d'personType']:checked").val());
        var subcategoryParent = selectedIamValue === "institute" ? getNameFromTagId($(".institute_checkboxes .self_checkboxes input[name\x3d'personParentTypeSelf']:checked").val()) : getNameFromTagId($(".parent_checkboxes input[name\x3d'personParentType']:checked").val());
        var _filteredVASItems = [];
        if (filterType === "value-added-services" && (selectedIamValue === "parent" || selectedIamValue === "institute") && (subcategoryParent === "self" || subcategoryParent === "financial-assistance-for-self")) _filteredVASItems = servicesCardsData.length > 0 && servicesCardsData.filter(function(item, index) {
            return item && item["title"] !== "" && item["title"] === "Upskilling"
        });
        return _filteredVASItems.length > 0 ? _filteredVASItems : servicesCardsData
    }

    function filterSolutionCards() {
        var filteredCards = [];
        for (var i$58 =
                0; i$58 < filters.length; i$58++) {
            var _filterItem = filters[i$58];
            if (filteredCards.length == 0) filteredCards = getFilteredCards(solutionFilterArr, _filterItem);
            else filteredCards = getFilteredCards(filteredCards, _filterItem)
        }
        return filteredCards
    }

    function filterServicesCards() {
        var filteredCards = [];
        for (var i$59 = 0; i$59 < filters.length; i$59++) {
            var _filterItem = filters[i$59];
            if (filteredCards.length == 0 && _filterItem.category === "intenttag") filteredCards = getFilteredCards(solutionFilterArr, _filterItem)
        }
        return filteredCards
    }

    function getFilteredCards(cards, _filter) {
        if (!_filter.value) return cards;
        if (filterType === "financial-solutions" && _filter.category === "intenttag") return cards;
        if (filterType === "financial-solutions" && _filter.category === "locationtag" && getNameFromTagId(_filter.value) === "not-sure") return cards;
        if (filterType === "value-added-services" && _filter.category === "intenttag") {
            var _filteredVASItems = cards.length > 0 && cards.filter(function(item, index) {
                return item && item[_filter.category].length > 0 && item[_filter.category].includes(_filter.value)
            });
            return _filteredVASItems
        }
        var _filteredItems = cards.length > 0 && cards.filter(function(item, index) {
            return item && item[_filter.category].length > 0 && item[_filter.category].includes(_filter.value)
        });
        switch (_filter.category) {
            case "usertag":
                if (getNameFromTagId(_filter.value) == "institute")
                    if (_filter.subcategory) _filteredItems = _filteredItems.filter(function(item) {
                        var intersection = getNameFromTagId(_filter.subcategory[0]) === "management" ? item.instituteusertag.filter(function(element) {
                                return _filter.subcategory.includes(element.toLowerCase())
                            }) :
                            item.instituteLookingFor.filter(function(element) {
                                return _filter.subcategory.includes(element.toLowerCase())
                            });
                        if (intersection.length > 0) return item
                    });
                if (getNameFromTagId(_filter.value) == "parent")
                    if (_filter.subcategory) _filteredItems = _filteredItems.filter(function(item) {
                        var intersection = getNameFromTagId(_filter.subcategory[0]) === "child" ? item.parentLookingFor.filter(function(element) {
                            return _filter.subcategory.includes(element.toLowerCase())
                        }) : item.parentProfessionalStatus.filter(function(element) {
                            return _filter.subcategory.includes(element.toLowerCase())
                        });
                        if (intersection.length > 0) return item
                    });
                break;
            case "currentedutag":
                _filteredItems = _filteredItems;
                break;
            case "locationtag":
                if (getNameFromTagId(_filter.value) == "abroad") _filteredItems = _filteredItems.filter(function(item) {
                    var count = 0;
                    item.countrytag.map(function(val) {
                        return _filter.subcategory.map(function(value) {
                            if (value.toLowerCase() === val.toLowerCase()) return count += 1
                        })
                    });
                    if (count > 0) return item
                });
                break
        }
        if (_filteredItems.length === 0) {
            _filteredItems = [""];
            return _filteredItems
        }
        return _filteredItems
    }

    function changeFilter(category,
        value, subcategory) {
        var filter = filters.find(function(item) {
            return item.category === category
        });
        if (filter) {
            filter.value = value;
            if (filter.category == "usertag" && getNameFromTagId(filter.value) == "institute") filter.subcategory = [subcategory];
            else if (filter.category == "locationtag" && getNameFromTagId(filter.value) == "abroad") filter.subcategory = [subcategory];
            else if (filter.category == "usertag" && getNameFromTagId(filter.value) == "parent") filter.subcategory = [subcategory];
            else if (filter.category == "usertag" && getNameFromTagId(filter.value) !=
                "institute" && getNameFromTagId(filter.value) != "parent") filter.subcategory = null;
            else if (filter.category == "locationtag" && getNameFromTagId(filter.value) == "India") filter.subcategory = [""];
            else if (filter.category == "usertag" && getNameFromTagId(filter.value) != "employee") filter.subcategory = [subcategory]
        }
    }

    function modifyFiltersBasedOnConditions(filterCategory) {
        filters.forEach(function(element) {
            if (element.category !== filterCategory) return element.value = null
        })
    }

    function addSelctedValuesToFilter(subcategory) {
        filters = [{
            category: "usertag",
            value: $("input[name\x3d'personType']:checked").val(),
            subcategory: subcategory ? [subcategory] : null
        }, {
            category: "locationtag",
            value: $("input[name\x3d'location-input']:checked").val(),
            subcategory: [$("input[name\x3d'countryType']:checked").val()]
        }, {
            category: "intenttag",
            value: $("input[name\x3d'stageType']:checked").val()
        }]
    }

    function cardLazyLoad(cardLazyName) {
        $(window).bind("scroll", function() {
            $(cardLazyName).each(function(index) {
                if ($(".card-loading").length > 0) return;
                if ($(this).isOnScreen() &&
                    $(this).hasClass("hidden-card")) {
                    var thisElement = $(this);
                    thisElement.removeClass("hidden-card");
                    thisElement.addClass("card-loading");
                    setTimeout(function() {
                        thisElement.removeClass("card-loading");
                        thisElement.addClass("auto-height")
                    }, 2E3)
                }
            })
        })
    }
    cardLazyLoad(".service-solutions-cards .solutions-cards");
    cardLazyLoad(".financial-solutions-cards .solutions-cards");
    $("input[name\x3d'personType']").click(function() {
        isFilterClick = true;
        if ($(this).hasClass("current-active")) return false;
        var userCheckedval = "";
        if (getNameFromTagId(this.defaultValue) === "institute") {
            $(".institute_checkboxes  input[type\x3d'radio']").attr("disabled", false);
            $(".institute_checkboxes input[type\x3d'radio']:first").prop("checked", true);
            $(".parent_checkboxes").addClass("hide");
            $(".institute_checkboxes").removeClass("hide");
            $(".institute_checkboxes").addClass("show");
            $(".institute_checkboxes .self_checkboxes").removeClass("show");
            userCheckedval = $(".institute_checkboxes input[name\x3d'personParentType']:checked").val();
            instituteFilterFlow()
        } else {
            $(".institute_checkboxes  input[type\x3d'radio']").attr("disabled",
                true);
            $(".institute_checkboxes  input[type\x3d'radio']").prop("checked", false)
        }
        if (getNameFromTagId(this.defaultValue) === "parent") {
            $(".parent_checkboxes  input[type\x3d'radio']").attr("disabled", false);
            $(".parent_checkboxes input[type\x3d'radio']:first").prop("checked", true);
            $(".institute_checkboxes").addClass("hide");
            $(".parent_checkboxes").removeClass("hide");
            $(".parent_checkboxes").addClass("show");
            $(".parent_checkboxes .self_checkboxes").removeClass("show");
            userCheckedval = $(".parent_checkboxes input[name\x3d'personParentType']:checked").val();
            studentParentChildIndiaFlow()
        } else {
            $(".parent_checkboxes  input[type\x3d'radio']").attr("disabled", true);
            $(".parent_checkboxes  input[type\x3d'radio']").prop("checked", false)
        }
        if (getNameFromTagId(this.defaultValue) === "student") {
            $(".institute_checkboxes").addClass("hide");
            $(".parent_checkboxes").addClass("hide");
            userCheckedval = null;
            studentParentChildIndiaFlow()
        }
        $("input[name\x3d'personType']").removeClass("current-active");
        $(this).addClass("current-active");
        changeFilter("usertag", this.value, userCheckedval);
        filterType = $(".ese-solutions-filter .horizontal-link-tab ul li.active button").attr("id");
        if (filterType === "financial-solutions") generateSolutionsCardItems();
        else generateServiceCardItems();
        solutionFlowUser = getNameFromTagId($("input:radio[name\x3dpersonType]:checked").val())
    });
    $(".parent_checkboxes input[name\x3d'personParentType']").click(function() {
        isFilterClick = true;
        var personParentTypeVal = "";
        $(".parent_checkboxes input[name\x3d'personParentType']").removeClass("current-active");
        $(this).addClass("current-active");
        if (getNameFromTagId(this.defaultValue) == "self") {
            $(".parent_checkboxes .self_checkboxes  input[type\x3d'radio']").attr("disabled", false);
            $(".parent_checkboxes .self_checkboxes input[type\x3d'radio']:first").prop("checked", true);
            personParentTypeVal = $(".parent_checkboxes .self_checkboxes input[name\x3d'personParentTypeSelf']:checked").val();
            parentSelfCombination()
        } else {
            $(".parent_checkboxes .self_checkboxes  input[type\x3d'radio']").prop("checked", false);
            $(".parent_checkboxes .self_checkboxes  input[type\x3d'radio']").attr("disabled",
                true);
            $(".parent_checkboxes .self_checkboxes  input[type\x3d'radio']").removeClass("checked");
            $(".parent_checkboxes .self_checkboxes").removeClass("show");
            personParentTypeVal = $(".parent_checkboxes input[name\x3d'personParentType']:checked").val();
            studentParentChildIndiaFlow()
        }
        changeFilter("usertag", "icicibank:student-ecosystem/user/parent", personParentTypeVal);
        if (filterType === "financial-solutions") generateSolutionsCardItems();
        else generateServiceCardItems()
    });
    $(".parent_checkboxes input[name\x3d'personParentTypeSelf']").click(function() {
        isFilterClick =
            true;
        $(".parent_checkboxes input[name\x3d'personParentTypeSelf']").removeClass("current-active");
        $(this).addClass("current-active");
        changeFilter("usertag", "icicibank:student-ecosystem/user/parent", $(".parent_checkboxes .self_checkboxes input[name\x3d'personParentTypeSelf']:checked").val());
        if (filterType === "financial-solutions") generateSolutionsCardItems();
        else generateServiceCardItems()
    });
    $(".institute_checkboxes input[name\x3d'personParentType']").click(function() {
        var insSubCheckedVal = "";
        isFilterClick =
            true;
        if (getNameFromTagId(this.defaultValue) === "employee") {
            $(".institute_checkboxes .self_checkboxes  input[type\x3d'radio']").attr("disabled", false);
            $(".institute_checkboxes .self_checkboxes input[type\x3d'radio']:first").prop("checked", true);
            insSubCheckedVal = $(".institute_checkboxes .self_checkboxes input[name\x3d'personParentTypeSelf']:checked").val()
        } else {
            $(".institute_checkboxes  input[type\x3d'radio']").attr("disabled", false);
            $(".institute_checkboxes .self_checkboxes  input[type\x3d'radio']").prop("checked",
                false);
            $(".institute_checkboxes .self_checkboxes  input[type\x3d'radio']").attr("disabled", true);
            $(".institute_checkboxes .self_checkboxes").removeClass("show");
            insSubCheckedVal = $(".institute_checkboxes input[name\x3d'personParentType']:checked").val()
        }
        changeFilter("usertag", "icicibank:student-ecosystem/user/institute", insSubCheckedVal);
        instituteFilterFlow();
        filterType = $(".ese-solutions-filter  .horizontal-tab li.active button").attr("id");
        if (filterType === "financial-solutions") generateSolutionsCardItems();
        else generateServiceCardItems()
    });
    $(".institute_checkboxes input[name\x3d'personParentTypeSelf']").click(function() {
        isFilterClick = true;
        $(".institute_checkboxes input[name\x3d'personParentTypeSelf']").removeClass("current-active");
        $(this).addClass("current-active");
        changeFilter("usertag", "icicibank:student-ecosystem/user/institute", $(".institute_checkboxes .self_checkboxes input[name\x3d'personParentTypeSelf']:checked").val());
        instituteFilterFlow();
        if (filterType === "financial-solutions") generateSolutionsCardItems();
        else generateServiceCardItems()
    });
    $("input[name\x3d'eduType']").click(function() {
        isFilterClick = true;
        if ($(this).hasClass("current-active")) return false;
        $("input[name\x3d'eduType']").removeClass("current-active");
        $(this).addClass("current-active");
        changeFilter("educationalLevel", this.value, null);
        isKg12Card = $("input[name\x3d'eduType']:checked").val() === "icicibank:student-ecosystem/current-education/kg-12";
        if (filterType === "financial-solutions") generateSolutionsCardItems();
        else generateServiceCardItems()
    });
    if (!isQueryParameterFlow) {
        $(".ese-solutions-filter input:radio[name\x3dlocation-input]:nth(1)").prop("checked", true);
        $(".ese-solutions-filter input:radio[name\x3dlocation-input]:checked").addClass("current-active")
    }
    if (getNameFromTagId($("input:radio[name\x3dlocation-input]:checked").val()) === "abroad") {
        !firstTimeQueryParamFlow && $("input:radio[name\x3dabroad]:first").prop("checked", true);
        $(".location_con  input[type\x3d'radio']").attr("disabled", false)
    }
    $("input[name\x3d'location-input']").click(function() {
        isFilterClick =
            true;
        if ($(this).hasClass("current-active")) return false;
        if (getNameFromTagId(this.defaultValue) === "abroad") {
            !firstTimeQueryParamFlow && $("input:radio[name\x3d'countryType']:first").prop("checked", true);
            $(".location_con  input[type\x3d'radio']").attr("disabled", false)
        } else {
            firstTimeQueryParamFlow = false;
            $(".location_con  input[type\x3d'radio']").attr("disabled", true);
            $(".location_con  input[type\x3d'radio']").prop("checked", false)
        }
        $("input[name\x3d'location-input']").removeClass("current-active");
        $(this).addClass("current-active");
        changeFilter("locationtag", this.value.toLowerCase(), $(".location_con input[name\x3d'countryType']:checked").val());
        studentParentChildIndiaFlow();
        instituteFilterFlow();
        if (filterType === "financial-solutions") generateSolutionsCardItems();
        else generateServiceCardItems()
    });
    $(".location_con  input[type\x3d'radio']").click(function() {
        isFilterClick = true;
        var checked = $(".location_con input[name\x3d'countryType']:checked").val();
        changeFilter("locationtag", "icicibank:student-ecosystem/location/abroad", checked);
        if (filterType === "financial-solutions") generateSolutionsCardItems();
        else generateServiceCardItems()
    });
    $("input[name\x3d'stageType']").click(function() {
        isFilterClick = true;
        if ($(this).hasClass("current-active")) return false;
        $("input[name\x3d'stageType']").removeClass("current-active");
        $(this).addClass("current-active");
        changeFilter("intenttag", this.value);
        if (filterType === "financial-solutions") generateSolutionsCardItems();
        else generateServiceCardItems()
    });
    $(".solutions-clear-btn").click(function() {
        isFilterClick =
            true;
        $("input[name\x3d'personType']:first").prop("checked", true);
        $("input[name\x3d'personType']").removeClass("current-active");
        $("input[name\x3d'eduType']:first").prop("checked", true);
        $("input[name\x3d'location-input']:eq(1)").prop("checked", true);
        $(".location_con  input[type\x3d'radio']").prop("checked", false);
        $(".location_con  input[type\x3d'radio']:first").prop("checked", true);
        $(".institute_checkboxes input[type\x3d'radio']").prop("checked", false);
        $(".institute_checkboxes input[type\x3d'radio']").attr("disabled",
            true);
        $("input[name\x3d'stageType']:first").prop("checked", true);
        $(".ml-25.radio-lists.institute_checkboxes").removeClass("show");
        $(".ml-25.radio-lists.parent_checkboxes").addClass("hide");
        $(".ml-25.radio-lists.parent_checkboxes").removeClass("show");
        $(".ml-25 .self_checkboxes").addClass("hide");
        $(".sb-box").removeClass("hide");
        $("#value-added-services").removeClass("hide");
        solutionFlowUser = getNameFromTagId($("input:radio[name\x3dpersonType]:checked").val())
    });
    $(".ese-solutions-filter .sidebar-footer .m-apply").click(function() {
        isFilterClick =
            true;
        $(this).parents(" .sidebar-content").removeClass("active");
        $(".ese-solutions-filter  .filter-content .filter-icon").removeClass("hide");
        $("body").removeClass("no-scroll")
    });
    $(".horizontal-tab li button").click(function() {
        isFilterClick = true;
        $(".horizontal-tab li").removeClass("active");
        $(this).parents("li").addClass("active");
        loadSolutionFilterCards($(".ese-solutions-filter .horizontal-link-tab ul li.active button").attr("tag"));
        parentSelfCombination();
        instituteFilterFlow();
        studentParentChildIndiaFlow();
        if ($(this).attr("id") === "financial-solutions") {
            filterType = "financial-solutions";
            $(".service-solutions-cards").html("");
            generateSolutionsCardItems()
        } else {
            filterType = "value-added-services";
            $(".financial-solutions-cards").html("");
            generateServiceCardItems()
        }
    });

    function studentParentChildIndiaFlow() {
        var selectedIamValue = getNameFromTagId($("input[name\x3d'personType']:checked").val());
        var subcategoryParent = selectedIamValue === "student" ? "child" : getNameFromTagId($(".parent_checkboxes input[name\x3d'personParentType']:checked").val());
        var selectedLocationValue = getNameFromTagId($("input[name\x3d'location-input']:checked").val());
        var pageFilterType = $(".ese-solutions-filter .horizontal-link-tab ul li.active button").attr("id");
        if (selectedIamValue !== "institute" && subcategoryParent === "child") {
            $("#value-added-services").removeClass("hide");
            if ((selectedIamValue === "parent" || selectedIamValue === "student") && selectedLocationValue === "india") {
                $(".sb-box").each(function() {
                    $(this).removeClass("hide")
                });
                if (pageFilterType === "value-added-services") $("input:radio[name\x3dstageType]").each(function() {
                    if ($(this).val() !==
                        "icicibank:student-ecosystem/intent/online-learning") $(this).parent().addClass("hide");
                    else $(this).prop("checked", true)
                });
                else $("input:radio[name\x3dstageType]").each(function() {
                    $(this).parent().removeClass("hide");
                    $(this).removeClass("current-active");
                    $("input:radio[name\x3dstageType]:first").prop("checked", "true");
                    $("input:radio[name\x3dstageType]:first").addClass("current-active")
                });
                addSelctedValuesToFilter(getSubcategoryFilters());
                return
            } else {
                $("input:radio[name\x3dstageType]").each(function() {
                    $(this).parent().removeClass("hide");
                    $(this).removeClass("current-active")
                });
                $(".sb-box").each(function() {
                    $(this).removeClass("hide")
                });
                $("#value-added-services").removeClass("hide");
                !firstTimeQueryParamFlow && $("input:radio[name\x3dstageType]").eq(0).prop("checked", true);
                !firstTimeQueryParamFlow && $("input:radio[name\x3dstageType]:first").addClass("current-active");
                addSelctedValuesToFilter(getSubcategoryFilters())
            }
        }
    }

    function instituteFilterFlow() {
        var selectedIamValue = getNameFromTagId($("input[name\x3d'personType']:checked").val());
        var subcategoryInstitute =
            getNameFromTagId($(".institute_checkboxes input[name\x3d'personParentType']:checked").val());
        var insEmpSubCategory = getNameFromTagId($(".institute_checkboxes input[name\x3d'personParentTypeSelf']:checked").val());
        var selectedLocation = getNameFromTagId($("input[name\x3d'location-input']:checked").val());
        var iFilterType = $(".ese-solutions-filter .horizontal-link-tab ul li.active button").attr("id");
        if (selectedIamValue === "institute") {
            if (subcategoryInstitute === "management") {
                $("#value-added-services").addClass("hide");
                onHideVasTabReset();
                $(".sb-box").each(function(index) {
                    if (index !== 0) $(this).addClass("hide")
                });
                modifyFiltersBasedOnConditions("usertag");
                return
            }
            if (subcategoryInstitute === "employee" && insEmpSubCategory === "financial-assistance-for-self") {
                $("#value-added-services").removeClass("hide");
                iFilterType = $(".ese-solutions-filter  .horizontal-tab li.active button").attr("id");
                $(".sb-box").each(function(index) {
                    if (index !== 0) $(this).addClass("hide");
                    if (iFilterType === "value-added-services" && index === 3) {
                        $(this).removeClass("hide");
                        $("input:radio[name\x3dstageType]").each(function() {
                            if ($(this).val() !== "icicibank:student-ecosystem/intent/online-learning") {
                                $(this).removeClass("current-active");
                                $(this).parent().addClass("hide")
                            } else {
                                $(this).prop("checked", true);
                                $(this).addClass("current-active")
                            }
                        })
                    }
                });
                if (iFilterType === "value-added-services") addSelctedValuesToFilter($(".institute_checkboxes .self_checkboxes input:radio[name\x3dpersonParentTypeSelf]:checked").val());
                else modifyFiltersBasedOnConditions("usertag");
                return
            }
            if (subcategoryInstitute ===
                "employee" && insEmpSubCategory === "child's-education") {
                if (iFilterType === "value-added-services" && selectedLocation === "india") {
                    $("input:radio[name\x3dstageType]").each(function() {
                        if ($(this).val() !== "icicibank:student-ecosystem/intent/online-learning") {
                            $(this).removeClass("current-active");
                            $(this).parent().addClass("hide")
                        } else {
                            $(this).addClass("current-active");
                            $(this).prop("checked", true)
                        }
                    });
                    $(".sb-box").each(function(index) {
                        $(this).removeClass("hide")
                    })
                } else {
                    $(".sb-box").each(function() {
                        $(this).removeClass("hide")
                    });
                    $("input:radio[name\x3dstageType]").each(function(index) {
                        $(this).parent().removeClass("hide");
                        $(this).removeClass("current-active");
                        if (index === 0) {
                            $(this).addClass("current-active");
                            $(this).prop("checked", true)
                        }
                    })
                }
                addSelctedValuesToFilter($("input:radio[name\x3dpersonParentTypeSelf]:checked").val());
                return
            } else {
                $("#value-added-services").removeClass("hide");
                $(".sb-box").each(function() {
                    $(this).removeClass("hide")
                });
                return
            }
        }
    }

    function parentSelfCombination() {
        var selectedIamValue = getNameFromTagId($("input[name\x3d'personType']:checked").val());
        var subcategoryParent = getNameFromTagId($(".parent_checkboxes input[name\x3d'personParentType']:checked").val());
        var filterType = $(".ese-solutions-filter .horizontal-link-tab ul li.active button").attr("id");
        if (selectedIamValue === "parent") {
            if (subcategoryParent === "self" && filterType === "financial-solutions") {
                $(".sb-box").each(function(index) {
                    if (index !== 0) $(this).addClass("hide")
                });
                modifyFiltersBasedOnConditions("usertag");
                return
            }
            if (subcategoryParent === "self" && filterType === "value-added-services") {
                $(".sb-box").each(function(index) {
                    if (index !==
                        0 && index !== 3) $(this).addClass("hide");
                    else $(this).removeClass("hide");
                    if (index === 3) $("input:radio[name\x3dstageType]").each(function() {
                        if ($(this).val() !== "icicibank:student-ecosystem/intent/online-learning") {
                            $(this).parent().addClass("hide");
                            $(this).prop("checked", false);
                            $(this).removeClass("current-active")
                        } else {
                            $(this).addClass("current-active");
                            $(this).prop("checked", true)
                        }
                    })
                });
                addSelctedValuesToFilter($("input:radio[name\x3dpersonParentTypeSelf]:checked").val());
                return
            } else {
                $(".sb-box").each(function() {
                    $(this).removeClass("hide")
                });
                $("input:radio[name\x3dstageType]").each(function() {
                    $(this).parent().removeClass("hide");
                    $(this).removeClass("current-active")
                })
            }
        }
    }

    function onHideVasTabReset() {
        $("#value-added-services").parent().removeClass("active");
        $("#financial-solutions").parent().addClass("active");
        var VasFilterType = $(".ese-solutions-filter  .horizontal-tab li.active button").attr("id");
        loadSolutionFilterCards($(".ese-solutions-filter .horizontal-link-tab ul li.active button").attr("tag"));
        if (VasFilterType === "financial-solutions") {
            VasFilterType =
                "financial-solutions";
            $(".service-solutions-cards").html("");
            generateSolutionsCardItems()
        } else {
            VasFilterType = "value-added-services";
            $(".financial-solutions-cards").html("");
            generateServiceCardItems()
        }
    }
});

function getNameFromTagId(value) {
    if (value && value !== "") return value.split("/")[2]
}

function handleQueryparamsFlow() {
    landingPageCategory = queryParameters()["pageType"];
    if (landingPageCategory && landingPageCategory !== "") {
        toggleCurrentHorizontalTab($(".ese-solutions-filter .horizontal-link-tab ul li"), landingPageCategory);
        checkFilterByUrl();
        if (queryParameters()["location-input"] === undefined) {
            $("input[name\x3d'location-input']").eq(1).prop("checked", true);
            $("input[name\x3d'countryType']:first").prop("checked", true)
        }
    }
}

function toggleCurrentHorizontalTab($tabEl, landingPageType) {
    $tabEl.removeClass("active");
    $tabEl.each(function() {
        if ($(this).find("button").text().toLowerCase().replace(/ /g, "-") === landingPageType) $(this).addClass("active")
    })
}

function checkFilterByUrl() {
    for (var key in queryParameters())
        if (key !== "pageType") $(".ese-solutions-filter input:radio[name\x3d" + key + "]").length > 0 && $(".ese-solutions-filter input:radio[name\x3d" + key + "]").each(function() {
            if (getNameFromTagId($(this).val()).toLowerCase().indexOf(queryParameters()[key].toLowerCase()) >= 0) {
                $(this).attr("disabled", false);
                $(this).prop("checked", true);
                $(this).parent().next().addClass("show");
                if ($(this).parent().next().hasClass("show")) {
                    $(".ml-25.radio-lists." + queryParameters()["personType"] +
                        "_checkboxes.show input[type\x3dradio]").attr("disabled", false);
                    $(".ml-25.radio-lists." + queryParameters()["personType"] + "_checkboxes.show input[value\x3d'" + $(this).val() + "']").prop("checked", true)
                }
            }
        })
}

function loadSolutionFilterCards(tagId) {
    solutionFilterArr = getFilteredSolutionArray(solutionBundleJson, "typetag", tagId)
}

function getSubcategoryFilters() {
    if (getNameFromTagId($(" input[name\x3d'personType']:checked").val()) === "institute") {
        if (getNameFromTagId($(".institute_checkboxes  input[type\x3d'radio']:checked").val()) === "management") return $(".institute_checkboxes  input[type\x3d'radio']:checked").val();
        if (getNameFromTagId($(".institute_checkboxes  input[type\x3d'radio']:checked").val()) === "employee") return $(".institute_checkboxes .self_checkboxes input[type\x3d'radio']:checked").val()
    }
    if (getNameFromTagId($(" input[name\x3d'personType']:checked").val()) ===
        "parent") {
        if (getNameFromTagId($(".parent_checkboxes input[type\x3d'radio']:checked").val()) === "child") return $(".parent_checkboxes input[type\x3d'radio']:checked").val();
        if (getNameFromTagId($(".parent_checkboxes input[type\x3d'radio']:checked").val()) === "self") return $(".parent_checkboxes .self_checkboxes input[name\x3d'personParentTypeSelf']:checked").val()
    }
}
$(".solutionpopup.disclaimer-popup .close").on("click", function() {
    $(".solutionpopup.disclaimer-popup").hide();
    return false
});
var isBackpopupOpen = false;
var $disclaimerHrefEl = $(".popup-section.solutionpopup.disclaimer-popup .disclaimer-modal-content #disclamerLink");

function bindDisclaimerPopupSolutionPage(incomingSolFilterArr, isFScards, componentType) {
    if (!!incomingSolFilterArr) {
        var $jscomp$loop$70 = {};
        $jscomp$loop$70.$jscomp$loop$prop$i$60$74 = 0;
        for (; $jscomp$loop$70.$jscomp$loop$prop$i$60$74 < incomingSolFilterArr.length; $jscomp$loop$70 = {
                $jscomp$loop$prop$i$60$74: $jscomp$loop$70.$jscomp$loop$prop$i$60$74
            }, $jscomp$loop$70.$jscomp$loop$prop$i$60$74++)
            if (incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74]["showPopup"] === "true" && incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74]["ctapath"] ===
                "") $("#" + incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74]["title"].split(" ")[0].replace(/[^a-zA-Z0-9]/g, "") + "-" + $jscomp$loop$70.$jscomp$loop$prop$i$60$74).on("click", function($jscomp$loop$70) {
                return function(e) {
                    gaImplementaionForFs(incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74], isFScards, renameCtaBtn(incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74]["ctalabel"]));
                    $disclaimerHrefEl.empty();
                    e.preventDefault();
                    generateDisclaimerHtml(incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74],
                        type = "popup", isFScards);
                    $(".solutionpopup.disclaimer-popup").show();
                    $disclaimerHrefEl.on("click", function() {
                        $(".solutionpopup.disclaimer-popup").hide();
                        return false
                    });
                    return false
                }
            }($jscomp$loop$70));
            else if (incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74]["showDisclaimer"] === "true" && incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74]["ctapath"] !== "") $("#" + incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74]["title"].split(" ")[0].replace(/[^a-zA-Z0-9]/g, "") +
            "-" + $jscomp$loop$70.$jscomp$loop$prop$i$60$74).on("click", function($jscomp$loop$70) {
            return function(e) {
                gaImplementaionForFs(incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74], isFScards, renameCtaBtn(incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74]["ctalabel"]));
                $disclaimerHrefEl.empty();
                e.preventDefault();
                generateDisclaimerHtml(incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74], type = "disclaimer", isFScards);
                $(".solutionpopup.disclaimer-popup").show();
                return false
            }
        }($jscomp$loop$70));
        else if (incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74]["showRedirectPopup"] === "true" && incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74]["ctapath"] !== "") $("#" + incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74]["title"].split(" ")[0].replace(/[^a-zA-Z0-9]/g, "") + "-" + $jscomp$loop$70.$jscomp$loop$prop$i$60$74).on("click", function($jscomp$loop$70) {
            return function(e) {
                gaImplementaionForFs(incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74], isFScards,
                    renameCtaBtn(incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74]["ctalabel"]));
                window.open(incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74]["ctapath"] + "?" + gaUTMImplementation(), "_blank");
                $disclaimerHrefEl.empty();
                generateDisclaimerHtml(incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74], type = "redirectPopup", isFScards);
                $(".solutionpopup.disclaimer-popup").show();
                return false
            }
        }($jscomp$loop$70));
        else if (incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74]["ctapath"] !==
            "") $("#" + incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74]["title"].split(" ")[0].replace(/[^a-zA-Z0-9]/g, "") + "-" + $jscomp$loop$70.$jscomp$loop$prop$i$60$74).on("click", function($jscomp$loop$70) {
            return function(e) {
                gaImplementaionForFs(incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74], isFScards, renameCtaBtn(incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74]["ctalabel"]));
                window.open(incomingSolFilterArr[$jscomp$loop$70.$jscomp$loop$prop$i$60$74]["ctapath"] + "?" +
                    gaUTMImplementation(), "_blank");
                return false
            }
        }($jscomp$loop$70))
    }
}

function generateDisclaimerHtml(disclaimerData, type, isFScards) {
    $(".solutionpopup.disclaimer-popup .close").removeClass("redirect");
    if (type === "popup") {
        $(".popup-section.solutionpopup.disclaimer-popup .disclaimer-modal-content h3").html(disclaimerData["popupTitle"]);
        $(".popup-section.solutionpopup.disclaimer-popup .disclaimer-modal-content p").html(disclaimerData["popupDescription"]);
        $disclaimerHrefEl.append("\x3ca id\x3d'" + disclaimerData["title"].replace(/ /g, "_") + "' class\x3d'ic-btn inline-btn deeplinking'\x3e" +
            disclaimerData["popupCtaLabel"] + "\x3c/a\x3e")
    }
    if (type === "disclaimer") {
        $(".popup-section.solutionpopup.disclaimer-popup .disclaimer-modal-content h3").html(disclaimerData["disclaimerTitle"]);
        $(".popup-section.solutionpopup.disclaimer-popup .disclaimer-modal-content p").html(disclaimerData["disclaimerDesc"]);
        $disclaimerHrefEl.append("\x3ca id\x3d'" + disclaimerData["title"].replace(/ /g, "_") + "' target\x3d'_blank' class\x3d'ic-btn inline-btn deeplinking' data-app\x3d'" + disclaimerData["ctapath"] + "' data-app-android\x3d'" +
            (disclaimerData["mobilectapath"] !== "" ? disclaimerData["mobilectapath"] : disclaimerData["ctapath"]) + "' data-app-ios\x3d'" + (disclaimerData["mobilectapath"] !== "" ? disclaimerData["mobilectapath"] : disclaimerData["ctapath"]) + "'\x3e" + disclaimerData["disclaimerCtaLabel"] + "\x3c/a\x3e");
        $("#disclamerLink a").click(function() {
            gaImplementaionForFs(disclaimerData, isFScards, "_disclaimer_proceed_click");
            $(".disclaimer-popup").hide();
            window.open(disclaimerData["ctapath"], "_blank");
            return false
        })
    }
    if (type === "redirectPopup") {
        $(".popup-section.solutionpopup.disclaimer-popup .disclaimer-modal-content h3").empty();
        $(".popup-section.solutionpopup.disclaimer-popup .disclaimer-modal-content p").html(disclaimerData["redirectPopupDesc"]);
        $disclaimerHrefEl.append("\x3ca id\x3d'" + disclaimerData["title"].replace(/ /g, "_") + "' target\x3d'_blank' class\x3d'ic-btn inline-btn deeplinking' href\x3d'" + disclaimerData["redirectPopupCtaPath"] + "?" + gaUTMImplementation() + "'\x3e" + disclaimerData["redirectPopupCtaLabel"] + "\x3c/a\x3e");
        $("#disclamerLink a").click(function() {
            gaImplementaionForFs(disclaimerData, isFScards, "_disclaimer_proceed_click");
            $(".disclaimer-popup").hide()
        })
    }
    if (type === "backPopup") {
        $(".solutionpopup.disclaimer-popup .close").addClass("redirect");
        $(".popup-section.solutionpopup.disclaimer-popup .disclaimer-modal-content h3").empty();
        $(".popup-section.solutionpopup.disclaimer-popup .disclaimer-modal-content p").html(disclaimerData["backPopupDesc"]);
        $disclaimerHrefEl.append("\x3ca id\x3d'" + disclaimerData["backPopupCtaLabel"].replace(/ /g, "_") + "_" + solutionFlowUser + "_backpopup' target\x3d'_blank' class\x3d'ic-btn inline-btn deeplinking' href\x3d'" +
            disclaimerData["backPopupCtaPath"] + gaUTMImplementation() + "'\x3e" + disclaimerData["backPopupCtaLabel"] + "\x3c/a\x3e");
        $("#disclamerLink a").click(function() {
            isBackpopupOpen = false;
            $(".disclaimer-popup").hide()
        })
    }
    deepLinking()
}

function addClickEventToheader() {
    if ($(".ese-solutions-filter").length > 0) $(".left-side-menu.menu-level-1-child ul li.other-menu a:first").on("click", function(e) {
        $disclaimerHrefEl.empty();
        e.preventDefault();
        generateDisclaimerHtml(backClickPopupFilter()[0], "backPopup");
        $(".solutionpopup.disclaimer-popup").show();
        isBackpopupOpen = true;
        $(".solutionpopup.disclaimer-popup .close.redirect").on("click", function() {
            var url = $(".left-side-menu.menu-level-1-child ul li.other-menu a:first").attr("href");
            $(".solutionpopup.disclaimer-popup").hide();
            isBackpopupOpen && (window.location.href = url);
            return false
        });
        return false
    })
}

function backClickPopupFilter() {
    var userTagforBackPopup = "icicibank:student-ecosystem/user/" + solutionFlowUser;
    return getFilteredSolutionArray(backClickPopupJson, "backPopupUsers", userTagforBackPopup)
}

function closePopupAfterTime() {
    setTimeout(function() {
        $(".solutionpopup.disclaimer-popup").hide()
    }, 1E4)
}

function gaImplementaionForFs(fsCard, isFsCard, componentType) {
    var prefix = isFsCard ? "FS" : "VAS";
    dataLayer.push({
        "event": "custom_event",
        "eventCategory": "campus_power",
        "eventAction": prefix + componentType,
        "eventLabel": fsCard["title"].toLowerCase().replace(/ /g, "_")
    })
}

function gaUTMImplementation() {
    if (queryParameters()["utm_source"]) return "utm_source\x3d" + queryParameters()["utm_source"] + "\x26utm_medium\x3d" + queryParameters()["utm_medium"] + "\x26utm_campaign\x3d" + queryParameters()["utm_campaign"];
    else return ""
}
var isrecomendedSolutionComp = $(".ese-solutions-sidebartab").length > 0;

function renameCtaBtn(card) {
    if (isrecomendedSolutionComp) return "_recommended_solutions_click";
    else return "_" + card.toLowerCase().replace(/ /g, "_") + "_click"
}
var aboutUsDropdownVal = "";
$(document).ready(function() {
    $(".review-dropdown \x3e a").on("click", function(e) {
        e.preventDefault()
    });
    aboutUsDropdownVal = $(".review-dropdown div ul li:nth-child(1)").text().trim();
    var defultAboutusUrl = $("#pagePath").val() + ".dropdown.json?key\x3d" + aboutUsDropdownVal;
    if ($("#pagePath").val() && aboutUsDropdownVal) $.ajax({
        dataType: "html",
        url: defultAboutusUrl,
        type: "GET",
        success: function(response) {
            $("#about-us-desc").html(response);
            $("#annual").html(aboutUsDropdownVal)
        },
        error: function() {}
    });
    $(".review-dropdown div ul li a").click(function(event) {
        $("#about-us-desc").empty();
        $("#annual").empty();
        var preventMultipleCall = $(this);
        event.preventDefault();
        if (preventMultipleCall.data("requestRunning")) return;
        preventMultipleCall.data("requestRunning", false);
        aboutUsDropdownVal = $(this).text();
        var onChangeValueUrl = $("#pagePath").val() + ".dropdown.json?key\x3d" + aboutUsDropdownVal;
        if ($("#pagePath").val() && aboutUsDropdownVal) $.ajax({
            dataType: "html",
            url: onChangeValueUrl,
            type: "GET",
            success: function(response) {
                $("#about-us-desc").html(response);
                $("#annual").html(aboutUsDropdownVal)
            },
            error: function() {}
        })
    })
});
var $dropdown = $("#dropDownTable");
$(document).ready(function() {
    var nriAboutUsUrl = $("#pagePath").val() + ".dropdown.json?key\x3d";
    $dropdown.on("selectmenuchange", function() {
        var dropdownData = $(this).val();
        $.ajax({
            dataType: "html",
            url: nriAboutUsUrl + dropdownData,
            type: "GET",
            success: function(response) {
                console.log("here", $("#dropdownPopup").val());
                document.getElementById("modal-content").style.display = "block";
                document.getElementById("modal-background").style.display = "block";
                $("#dropdownPopup").val() === "true" ? $("#modal-content").html(response) :
                    $("#holiday").html(response);
                modalClose();
                var hideData = $("#dropDownTable option:selected").val();
                if (hideData == "0") $("#holiday").empty()
            },
            error: function() {}
        })
    })
});
$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        document.getElementById("modal-content").style.display = "none";
        document.getElementById("modal-background").style.display = "none"
    }
});

function modalClose() {
    $("#modal-close").click(function() {
        document.getElementById("modal-content").style.display = "none";
        document.getElementById("modal-background").style.display = "none"
    })
}
var timeoutCounter;
$(window).on("load orientationchange", function() {
    clearTimeout(timeoutCounter);
    timeoutCounter = setTimeout(function() {
        if ($(window).width() < 991) {
            $(".nf-lists").mCustomScrollbar("destroy");
            $(".fc-lists").mCustomScrollbar("destroy");
            $(".cbz-card .tab-pane").mCustomScrollbar("destroy");
            nfSlider();
            indicesSlider();
            fcSlider()
        } else {
            $(".nf-lists").hasClass("slick-initialized") && $(".nf-lists").slick("unslick");
            $(".indices-lists").hasClass("slick-initialized") && $(".indices-lists").slick("unslick");
            $(".fc-lists").hasClass("slick-initialized") &&
                $(".fc-lists").slick("unslick");
            setTimeout(function() {
                $(".nf-lists").mCustomScrollbar();
                $(".fc-lists").mCustomScrollbar();
                $(".cbz-card .tab-pane").mCustomScrollbar()
            }, 500)
        }
    }, 250)
});
$(document).ready(function() {
    RenovationSlider()
});

function nfSlider() {
    !$(".nf-lists").hasClass("slick-initialized") && $(".nf-lists").slick({
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3E3,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                dots: false
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                dots: false
            }
        }]
    })
}

function RenovationSlider() {
    !$(".renovation-slider").hasClass("slick-initialized") && $(".renovation-slider").slick({
        dots: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2E3,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    })
}

function Irslider() {
    !$(".lr-slider").hasClass("slick-initialized") && $(".lr-slider").slick({
        dots: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2E3,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })
}
$(document).ready(function() {
    Irslider()
});
$(".openchart").click(function(e) {
    e.preventDefault();
    var indicesArray = JSON.parse($("#indicesJson").text());
    sortIndices(indicesArray);
    var name = e.target.id;
    var id = indicesArray.findIndex(function(item) {
        return item.title === name
    });
    $(".chart-popup .chart-popup-inner .media img").attr("src", indicesArray[id].durl);
    $(".chart-popup .chart-popup-inner .content a").attr("href", indicesArray[id].pdfLink);
    if (window.matchMedia("(max-width: 580px)").matches) {
        $(".chart-popup .chart-popup-inner .media img").attr("src",
            indicesArray[id].murl);
        $(".chart-popup .chart-popup-inner .content a").attr("href", indicesArray[id].pdfLink)
    }
    $(".chart-popup").show(), $("body").addClass("no-scroll"), $(".mob-announcement-section:visible").length > 0 ? scrolltoHt = $(".mob-announcement-section:visible").height() + $(".header.mobile").height() - 100 : scrolltoHt = $(".header.mobile").height() - 100, $(window).width() > 991 && !isNaN(scrolltoHt) && $("html, body").animate({
        scrollTop: scrolltoHt
    }, 1E3)
}), $(".popup-close").click(function() {
    $(".video-popup").hide(),
        $("body").removeClass("no-scroll");
    if ($(".chart-popup").length) $(".chart-popup").hide(), $("body").removeClass("no-scroll")
});

function sortIndices(indicesArray) {
    indicesArray.sort(function(a, b) {
        return new Date(b.datetime) - new Date(a.datetime)
    })
}
$(document).ready(function() {
    indicesSlider()
});

function indicesSlider() {
    !$(".indices-lists").hasClass("slick-initialized") && $(".indices-lists").slick({
        dots: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3E3,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                dots: false
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                dots: false
            }
        }]
    })
}

function PodcastsSlider() {
    !$(".podcasts-lists .card-lists").hasClass("slick-initialized") && $(".podcasts-lists .card-lists").slick({
        dots: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2E3,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        margin: 20,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })
}
var eleArrayLength = {
    image: 0,
    video: 0
};
var SLICEVALUE = 4;

function articleList(data, imagePosition, resize) {
    var date = new Date;
    var currentDate = date.getDate() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear();

    function process(date) {
        var parts = date && date.split("-");
        return parts ? new Date(parts[2], parts[1] - 1, parts[0]) : parts
    }
    imagePosition = imagePosition ? imagePosition : "left";
    var mediaKey = data[0] && data[0].type === "article" ? "image" : data && data[0].type;
    var parentDivSelector = mediaKey == "image" ? ".al-lists-image" : ".al-lists-video";
    var parentDiv = document.querySelectorAll(parentDivSelector);
    var eleArray = [];
    var imgClass = imagePosition == "right" ? "rightclass" : "leftclass";
    data.forEach(function(element, index) {
        var jsonElementDate = element.date;
        if (mediaKey == "image") {
            var listItem = "\x3cdiv class\x3d'card-list'\x3e" + "\x3cdiv class\x3d'card-img d-view'\x3e" + "\x3ca target\x3d'_blank' href\x3d'" + element.pdfLink + "'\x3e\x3cimg src\x3d'" + element.dImageRef + "' alt\x3d'' width\x3d'' height\x3d'' /\x3e\x3c/a\x3e\x3c/div\x3e" + "\x3cdiv class\x3d'card-img m-view'\x3e" + "\x3ca target\x3d'_blank' href\x3d'" + element.pdfLink +
                "'\x3e\x3cimg src\x3d'" + element.mImageRef + "' alt\x3d'' width\x3d'' height\x3d'' /\x3e\x3c/a\x3e\x3c/div\x3e" + "\x3cdiv class\x3d'content'\x3e" + "\x3ch3 class\x3d'line-clamp line-clamp-2'\x3e\x3ca target\x3d'_blank' title\x3d'" + element.title + "' href\x3d'" + element.pdfLink + "'\x3e" + element.title + "\x3c/a\x3e\x3c/h3\x3e" + "\x3cp class\x3d'm-view'\x3e" + element.description + "\x3c/p\x3e" + "\x3cdiv class\x3d'card-bottom-text'\x3e" + "\x3cdiv class\x3d'card-date'\x3e" + element.date + "\x3c/div\x3e" + "\x3cdiv class\x3d'bookmark-share'\x3e\x3cdiv class\x3d'download'\x3e \x3ca title\x3d'Download' onclick\x3d\"downloadFile('" +
                element.pdfLink + "' )\" \x3e\x3c/a\x3e\x3c/div\x3e" + "\x3cdiv class\x3d'share' title\x3d'Share'\x3e\x3c/div\x3e\x3cdiv class\x3d'share-content'\x3e" + "\x3cdiv class\x3d'inner-content'\x3e" + "\x3c/div\x3e" + "\x3cul class\x3d'share-link'\x3e\x3cli\x3e\x3ca class\x3d'link wa' href\x3d'" + element.sharewa + "' target\x3d'_blank' title\x3d'Whatsapp'\x3e\x3c/a\x3e\x3c/li\x3e" + "\x3cli\x3e\x3ca class\x3d'link fb' href\x3d'" + element.sharefb + "' target\x3d'_blank' title\x3d'Facebook'\x3e\x3c/a\x3e\x3c/li\x3e" + "\x3cli\x3e\x3ca class\x3d'link tw' href\x3d'" +
                element.sharetw + "' target\x3d'_blank' title\x3d'Twitter'\x3e\x3c/a\x3e\x3c/li\x3e" + "\x3cli\x3e\x3ca class\x3d'link ln' href\x3d'" + element.shareli + "' target\x3d'_blank' title\x3d'LinkedIn'\x3e\x3c/a\x3e\x3c/li\x3e" + "\x3cli\x3e\x3ca class\x3d'link eml' data-sharer\x3d'email' data-title\x3d'" + element.title + "'data-subject\x3d'" + element.title + "'data-url\x3d'" + element.pdfLink + "' title\x3d'Email'\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e" + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
            eleArray.push(listItem)
        } else {
            var listItem = "\x3cdiv class\x3d'card-list'\x3e" + "\x3cdiv class\x3d'card-img d-view'\x3e" + "\x3ca class\x3d'open-video-modal' data-iframe-src\x3d'" + element.youtubeEmbedUrl + element.youtubeVideoID + "' data-content\x3d'" + element.title + "'\x3e \x3cimg src\x3d'" + element.dImageRef + "' alt\x3d''\x3e\x3c/a\x3e" + "\x3c/div\x3e" + "\x3cdiv class\x3d'card-img m-view'\x3e" + "\x3ca class\x3d'open-video-modal' data-iframe-src\x3d'" + element.youtubeEmbedUrl + element.youtubeVideoID + "' data-content\x3d'" +
                element.title + "'\x3e \x3cimg src\x3d'" + element.dImageRef + "' alt\x3d''\x3e\x3c/a\x3e" + "\x3c/div\x3e" + "\x3cdiv class\x3d'content'\x3e" + "\x3ch3" + ' class\x3d"line-clamp line-clamp-2 openvideo open-video-modal" data-iframe-src\x3d"' + element.youtubeEmbedUrl + element.youtubeVideoID + '" data-content\x3d"' + element.title + '" title\x3d"' + element.title + '"\x3e' + element.title + "\x3c/h3\x3e" + "\x3cp class\x3d'm-view'\x3e" + element.description + "\x3c/p\x3e" + "\x3cdiv class\x3d'card-bottom-text'\x3e" + "\x3cdiv class\x3d'card-date'\x3e" +
                element.date + "\x3c/div\x3e" + "\x3cdiv class\x3d'bookmark-share'\x3e" + "\x3cdiv class\x3d'download'\x3e \x3ca title\x3d'Download' onclick\x3d\"downloadFile('" + element.pdfLink + "' )\" \x3e\x3c/a\x3e\x3c/div\x3e" + "\x3cdiv class\x3d'share' title\x3d'Share'\x3e\x3c/div\x3e\x3cdiv class\x3d'share-content'\x3e" + "\x3cdiv class\x3d'inner-content'\x3e" + "\x3c/div\x3e" + "\x3cul class\x3d'share-link'\x3e\x3cli\x3e\x3ca class\x3d'link wa' href\x3d'" + element.sharewa + "' target\x3d'_blank' title\x3d'Whatsapp'\x3e\x3c/a\x3e\x3c/li\x3e" +
                "\x3cli\x3e\x3ca class\x3d'link fb' href\x3d'" + element.sharefb + "' target\x3d'_blank' title\x3d'Facebook'\x3e\x3c/a\x3e\x3c/li\x3e" + "\x3cli\x3e\x3ca class\x3d'link tw' href\x3d'" + element.sharetw + "' target\x3d'_blank' title\x3d'Twitter'\x3e\x3c/a\x3e\x3c/li\x3e" + "\x3cli\x3e\x3ca class\x3d'link ln' href\x3d'" + element.shareli + "' target\x3d'_blank' title\x3d'LinkedIn'\x3e\x3c/a\x3e\x3c/li\x3e" + "\x3cli\x3e\x3ca class\x3d'link eml' data-sharer\x3d'email' data-title\x3d'" + element.title + "'data-subject\x3d'" +
                element.title + "'data-url\x3d'" + element.pdfLink + "' title\x3d'Email'\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e" + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
            eleArray.push(listItem)
        }
    });
    if (!resize)
        if (eleArrayLength.image === 0) eleArrayLength[mediaKey] = eleArrayLength[mediaKey] + eleArray.length + 1;
        else eleArrayLength[mediaKey] = eleArrayLength[mediaKey] + eleArray.length;
    parentDiv[0].insertAdjacentHTML("beforeend", eleArray.join(" "));
    openVideoModal();
    window.Sharer.init();
    var dataLength =
        mediaKey == "image" ? articleListData.length : articleListDataVideo.length;
    if (dataLength === eleArrayLength[mediaKey]) {
        var viewMoreEl = mediaKey == "image" ? "#al_viewmore_image" : "#al_viewmore_video";
        $(viewMoreEl).addClass("hide")
    }
    window.Sharer.init()
}

function showVideoPopup(element, type, title) {
    if ($(".knowledge-video").is(":visible")) {
        $(".knowledge-video").hide();
        $("body").removeClass("no-scroll");
        if (element != "null") element.parent().find("iframe").attr("src", element.parent().find("iframe").attr("src"));
        return
    }
    if (type == "video") {
        $("#knowledgeVideoIframe").attr("src", "");
        $("#knowledgeVideoIframe").attr("src", element);
        $("#knowledgeVideoIframeContent").text(title);
        $(".knowledge-video").show();
        $("body").addClass("no-scroll")
    }
}

function viewMoreClick(type) {
    var loderEl = type == "image" ? "#al_loading_image" : "#al_loading_video";
    $(loderEl).removeClass("hide");
    setTimeout(function() {
        $(loderEl).addClass("hide");
        var listData = type == "image" ? articleListData : articleListDataVideo;
        articleList(listData.slice(eleArrayLength[type], eleArrayLength[type] + SLICEVALUE));
        setTimeout(function() {
            $(loderEl).siblings(".mCustomScrollbar").mCustomScrollbar("scrollTo", "bottom")
        }, 300)
    }, 1E3)
}

function sectionChange() {
    var option = $("#section-type").val();
    if (option == "articles") {
        $(".article-content").show();
        $(".video-content").hide();
        $(".podcasts-content").hide()
    } else if (option == "videos") {
        $(".article-content").hide();
        $(".video-content").show();
        $(".podcasts-content").hide()
    } else if (option == "podcasts") {
        $(".article-content").hide();
        $(".video-content").hide();
        $(".podcasts-content").show()
    } else if (option == "all") {
        $(".article-content").show();
        $(".video-content").show();
        $(".podcasts-content").show()
    }
}
var articleListDataVideo = [];
var articleListData = [];
$(document).ready(function() {
    articleListData = $("#articlesAsJson").length > 0 && JSON.parse($("#articlesAsJson").text());
    handleSingleArticleRender();
    articleListDataVideo = $("#videosAsJson").length > 0 && JSON.parse($("#videosAsJson").text());
    articleListDataVideo && articleList(articleListDataVideo.slice(0, SLICEVALUE));
    articleListData.length > 0 && renderSingleArticle(articleListData[0]);
    $("#section-type").selectmenu({
        change: sectionChange
    });
    if ($(window).width() > 991) {
        PodcastsSlider();
        $(".article-lists .card-lists").mCustomScrollbar();
        $(".video-content .video-lists").mCustomScrollbar()
    }
    $(window).resize(function() {
        handleSingleArticleRender(true);
        if ($(window).width() > 991) {
            $(".article-lists .card-lists").mCustomScrollbar();
            $(".video-content .video-lists").mCustomScrollbar()
        } else {
            $(".article-lists .card-lists").mCustomScrollbar("destroy");
            $(".video-content .video-lists").mCustomScrollbar("destroy")
        }
    })
});

function renderSingleArticle(article) {
    $(".single-artical-desktop img").attr("src", article.dImageRef);
    $(".single-artical-desktop .content \x3e h3").html(article.title);
    $(".single-artical-desktop .content \x3e p").html(article.description);
    $(".single-artical-desktop div.card-date").text(article.date);
    $("#shareContentId").html("\x3cul class\x3d'share-link'\x3e\x3cli\x3e\x3ca class\x3d'link wa' href\x3d'" + article.sharewa + "' target\x3d'_blank' title\x3d'Whatsapp'\x3e\x3c/a\x3e\x3c/li\x3e" + "\x3cli\x3e\x3ca class\x3d'link fb' href\x3d'" +
        article.sharefb + "' target\x3d'_blank' title\x3d'Facebook'\x3e\x3c/a\x3e\x3c/li\x3e" + "\x3cli\x3e\x3ca class\x3d'link tw' href\x3d'" + article.sharetw + "' target\x3d'_blank' title\x3d'Twitter'\x3e\x3c/a\x3e\x3c/li\x3e" + "\x3cli\x3e\x3ca class\x3d'link ln' href\x3d'" + article.shareli + "' target\x3d'_blank' title\x3d'LinkedIn'\x3e\x3c/a\x3e\x3c/li\x3e" + "\x3cli\x3e\x3ca class\x3d'link eml' data-sharer\x3d'email' data-title\x3d'" + article.title + "'data-subject\x3d'" + article.title + "'data-url\x3d'" + article.pdfLink +
        "' title\x3d'Email'\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e")
}

function handleSingleArticleRender(resize) {
    var tempArticleData = articleListData && articleListData.slice();
    var articleLoaded = eleArrayLength.image + 1;
    if ($(window).width() > 991) {
        tempArticleData && tempArticleData.splice(0, 1);
        articleLoaded = articleLoaded - 1
    }
    $(".al-lists-image").empty();
    tempArticleData && articleList(tempArticleData.slice(0, eleArrayLength.image != 0 ? articleLoaded : SLICEVALUE), "left", resize)
}

function podcastPlayPause(element) {
    var audioPlayer = element.querySelector(".audio-player");
    var playerIcon = element.querySelector(".control");
    if (audioPlayer.paused) {
        playerIcon.className = "control icon-pause";
        audioPlayer.play()
    } else {
        playerIcon.className = "control icon-play";
        audioPlayer.pause()
    }
}

function getAudioMetadata(element) {
    var minutes = parseInt(element.duration / 60, 10);
    var seconds = parseInt(element.duration % 60);
    $($(element).parents()[3]).find(".audio-duration").text(String("0" + minutes).slice(-2) + ":" + String("0" + seconds).slice(-2));
    $(element).data("time", element.duration)
}

function audioPlaying(element) {
    var minutes = parseInt(element.currentTime / 60, 10);
    var seconds = parseInt(element.currentTime % 60);
    var progress = Math.floor(element.currentTime * 100 / element.duration);
    $($(element).parents()[3]).find(".audio-duration").text(String("0" + minutes).slice(-2) + ":" + String("0" + seconds).slice(-2));
    $($(element).closest(".radial-progress")).attr("data-progress", progress == 0 ? 1 : progress)
}
var ergActualData = [];
var ergfiltersArr = [];
var ergInitialArr = [];
var ergPageType = $("#erg-PageType").length > 0 && $("#erg-PageType").text();
$(document).ready(function() {
    ergActualData = $("#ergFilter").length && convertJSON($("#ergFilter").text());
    handleFilterClick();
    ergFilters();
    generateErgCardItems(ergActualData);
    openVideoModal();
    window.Sharer.init();
    var fromDate = $("#fromDate").flatpickr({
        dateFormat: "d/m/Y",
        defaultDate: moment().format("DD/MM/YYYY"),
        startDate: moment().format("DD/MM/YYYY"),
        maxDate: "today",
        disableMobile: true,
        onChange: function(selectedDates, dateStr, instance) {
            toDate.set("minDate", dateStr)
        }
    });
    var toDate = $("#toDate").flatpickr({
        dateFormat: "d/m/Y",
        defaultDate: moment().format("DD/MM/YYYY"),
        startDate: moment().format("DD/MM/YYYY"),
        maxDate: "today",
        disableMobile: true,
        onChange: function(selectedDates, dateStr, instance) {
            fromDate.set("maxDate", dateStr)
        }
    })
});

function generateErgCardItems(ergCardsData) {
    var ergCardsDatas = [];
    changeTitle();
    ergCardsDatas = getErgFilteredCards(ergActualData, ergfiltersArr.length > 0 ? ergfiltersArr[0] : undefined);
    ergCardsData = ergCardsDatas && ergCardsDatas.length > 0 && ergCardsDatas || ergCardsData;
    if (ergCardsData[0] === "") ergCardsData.length = 0;
    var html = "";
    for (var index$61 = 0; index$61 < ergCardsData.length; index$61++)
        if (ergPageType === "v1") html += generateErgTCFilterHTML(ergCardsData[index$61], index$61);
        else html += generateErgReportFilterHTML(ergCardsData[index$61],
            index$61);
    if (html.length > 0) {
        $("#erg-tc-container").html(html);
        bindClickToVideo()
    } else $("#erg-tc-container").html('\x3cdiv class\x3d"no-result"\x3e\x3c/div\x3e')
}

function changeTitle() {
    if (ergfiltersArr.length > 0) $(".report-title").html($("input[name\x3dcategory-type]:checked").parent().attr("labelValue"))
}

function generateErgTCFilterHTML(card, i) {
    var typeOfArticle = card.youtubeUrl !== "" ? '\x3ca class\x3d"open-video-modal" data-iframe-src\x3d ' + card.youtubeUrl + " \x3e" : '\x3ca target\x3d"_blank" href\x3d' + card.pdfLink + "\x3e";
    var typeOfArticleContent = card.youtubeUrl !== "" ? card.youtubeUrl : card.pdfLink;
    var html = '\x3cdiv class\x3d"card-list"\x3e' + (card.youtubeUrl !== "" ? "\x3ca class\x3d'open-video-modal' data-iframe-src\x3d'" + card.youtubeUrl + "' \x3e \x3cdiv class\x3d'card-img'\x3e\x3cimg src\x3d'" + card.durl + "' alt\x3d'' width\x3d'' height\x3d''/\x3e\x3c/div\x3e\x3c/a\x3e" :
            '\x3cdiv class\x3d"card-img"\x3e\x3cimg src\x3d"' + card.durl + '" alt\x3d"" width\x3d"" height\x3d"" /\x3e\x3c/div\x3e') + '\x3cdiv class\x3d"content"\x3e\x3ch3 class\x3d"line-clamp line-clamp-2"\x3e' + typeOfArticle + "" + card.title + '\x3c/a\x3e\x3c/h3\x3e\x3cp class\x3d"line-clamp line-clamp-4"\x3e\x3ca href\x3d"#"\x3e' + card.description + '\x3c/a\x3e \x3c/p\x3e \x3cdiv class\x3d"card-bottom-text"\x3e\x3cdiv class\x3d"card-date"\x3e' + card.datetime + '\x3c/div\x3e \x3cdiv class\x3d"bookmark-share"\x3e' + (card.youtubeUrl ===
            "" ? ' \x3cdiv class\x3d"download"\x3e \x3ca onclick\x3d"downloadFile(\'' + card.pdfLink + "' )\"\x3e\x3c/a\x3e \x3c/div\x3e" : "\x3cdiv/\x3e") + '\x3cdiv title\x3d"Share" class\x3d"share"\x3e\x3c/div\x3e \x3cdiv class\x3d"share-content"\x3e \x3cdiv class\x3d"inner-content"\x3e\x3cul class\x3d"share-link"\x3e\x3cli\x3e\x3ca class\x3d"link wa" href\x3d"#" title\x3d"Whatsapp" data-url\x3d' + typeOfArticleContent + ' data-sharer\x3d"whatsapp" data-url\x3d' + card.pdfLink + ' data-title\x3d"' + card.title + '" \x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca class\x3d"link fb" title\x3d"Facebook" href\x3d"#" data-sharer\x3d"facebook" data-url\x3d' +
        typeOfArticleContent + ' data-title\x3d"' + card.title + '" \x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca class\x3d"link tw" title\x3d"Twitter" href\x3d"#" data-sharer\x3d"twitter" data-url\x3d' + typeOfArticleContent + ' data-title\x3d"' + card.title + '"\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca class\x3d"link ln" title\x3d"LinkedIn" data-sharer\x3d"linkedin" href\x3d"#" data-url\x3d' + typeOfArticleContent + ' data-title\x3d"' + card.title + '"\x3e\x3c/a\x3e\x3c/li\x3e \x3cli\x3e\x3ca title\x3d"Email" data-domain data-url\x3d' +
        typeOfArticleContent + ' class\x3d"link eml" data-sharer\x3d"email" data-title\x3d"' + card.title + '" data-subject\x3d"' + card.title + '" \x3e\x3c/a\x3e \x3c/li\x3e \x3c/ul\x3e \x3c/div\x3e \x3c/div\x3e \x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e';
    return html
}

function generateErgReportFilterHTML(card, i) {
    var html = '\x3cdiv class\x3d"card-list"\x3e \x3cdiv class\x3d"card-icon"\x3e\x3c/div\x3e\x3cdiv class\x3d"content"\x3e \x3ch3\x3e\x3ca href\x3d"' + card.pdfLink + '" target\x3d"_blank"\x3e' + card.title + '\x3c/a\x3e\x3c/h3\x3e\x3cp\x3e\x3ca href\x3d"#"\x3e ' + card.description + '\x3c/a\x3e \x3c/p\x3e \x3cdiv class\x3d"card-bottom-text"\x3e\x3cdiv class\x3d"card-date"\x3e' + card.datetime + '\x3c/div\x3e\x3cdiv class\x3d"bookmark-share"\x3e\x3cdiv class\x3d"download"\x3e\x3ca onclick\x3d"downloadFile(\'' +
        card.pdfLink + '\' )"\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv title\x3d"Share" class\x3d"share"\x3e\x3c/div\x3e\x3cdiv class\x3d"share-content"\x3e\x3cdiv class\x3d"inner-content"\x3e \x3cul class\x3d"share-link"\x3e \x3cli\x3e\x3ca class\x3d"link wa" title\x3d"Whatsapp" data-sharer\x3d"whatsapp" data-title\x3d"' + card.title + '" href\x3d"#" data-url\x3d' + card.pdfLink + '\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca class\x3d"link fb" title\x3d"Facebook" data-sharer\x3d"facebook" data-title\x3d"' + card.title + '" href\x3d"#" data-url\x3d' +
        card.pdfLink + ' \x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca class\x3d"link tw" title\x3d"Twitter" data-sharer\x3d"twitter" href\x3d"#" data-url\x3d' + card.pdfLink + ' data-title\x3d"' + card.title + '"\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca class\x3d"link ln" title\x3d"LinkedIn" data-sharer\x3d"linkedin" href\x3d"#" data-url\x3d' + card.pdfLink + ' data-title\x3d"' + card.title + '"\x3e\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca title\x3d"Email" class\x3d"link eml" data-sharer\x3d"email" title\x3d"Email" data-title\x3d"' +
        card.title + '" data-subject\x3d"' + card.title + '" data-url\x3d' + card.pdfLink + "\x3e\x3c/a\x3e\x3c/li\x3e \x3c/ul\x3e\x3c/div\x3e \x3c/div\x3e \x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
    return html
}

function handleFilterClick() {
    if ($(window).width() < 991) {
        $(".filter-section .sidebar-content .reports-radio .radio-list").click(function() {
            $(".filter-section .radio-list").removeClass("active");
            $(this).addClass("active")
        });
        $(".filter-section .sidebar-header .f-icon").click(function() {
            $(".filter-section .sidebar-header").addClass("active");
            $(".filter-section .sidebar-content").addClass("active");
            $("body").addClass("no-scroll")
        });
        $(".filter-section .sidebar-header .f-close").click(function() {
            $(".filter-section .sidebar-header").removeClass("active");
            $(".filter-section .sidebar-content").removeClass("active");
            $("body").removeClass("no-scroll")
        });
        $(".filter-section .sidebar-footer .apply").click(function() {
            var selectedCat = $("input[name\x3dcategory-type]:checked").val();
            var selectedPubType = $("input[name\x3dpublishing-type]:checked").val();
            var fromDate = $("#fromDate").val();
            var toDate = $("#toDate").val();
            $(".filter-section .sidebar-header").removeClass("active");
            $(".filter-section .sidebar-content").removeClass("active");
            $("body").removeClass("no-scroll")
        })
    } else {
        $(".filter-section .sidebar-header .f-icon").unbind().click(function(event) {
            event.preventDefault()
        });
        $('.ergtreasure-section .reports-radio .radio-list input[name\x3d"category-type"]').click(function() {
            var selctedArr = [];
            ergFilters();
            if ($('.ergtreasure-section .reports-radio .radio-list input[value\x3d"customrange"]').is(":checked")) {
                var fromDate = $("#fromDate").val();
                var customstartdate = new Date(fromDate.split("/").reverse().join("-"));
                startdate = moment(customstartdate).format("MM/DD/YYYY");
                var toDate = $("#toDate").val();
                var customenddate = new Date(toDate.split("/").reverse().join("-"));
                enddate = moment(customenddate.setDate(customenddate.getDate() +
                    1)).format("MM/DD/YYYY");
                selctedArr = sortByCustomDate(handleFilterArrErg(), startdate, enddate)
            } else selctedArr = handleFilterArrErg();
            generateErgCardItems(selctedArr);
            openVideoModal();
            window.Sharer.init()
        })
    }
    var customRangeArr = [];
    $(".filter-section .sidebar-content .publishing-radio input[name\x3d'publishing-type']").click(function() {
        $(".filter-section .publishing-radio .radio-list").removeClass("active");
        $(this).addClass("active");
        ergFilters();
        generateErgCardItems(handleFilterArrErg());
        openVideoModal();
        window.Sharer.init()
    });
    $(".filter-section .sidebar-content .publishing-radio .custom-date-range a.ic-btn").click(function(e) {
        e.preventDefault();
        var fromDate = $("#fromDate").val();
        var customstartdate = new Date(fromDate.split("/").reverse().join("-"));
        startdate = moment(customstartdate).format("MM/DD/YYYY");
        var toDate = $("#toDate").val();
        var customenddate = new Date(toDate.split("/").reverse().join("-"));
        enddate = moment(customenddate.setDate(customenddate.getDate() + 1)).format("MM/DD/YYYY");
        customRangeArr = sortByCustomDate(handleFilterArrErg(),
            startdate, enddate);
        generateErgCardItems(customRangeArr);
        openVideoModal();
        window.Sharer.init()
    })
}

function sortByCustomDate(filteredArr, startDate, endDate) {
    return filteredArr.filter(function(element) {
        var elDate = element.datetime;
        return moment(elDate).isBetween(startDate, endDate)
    })
}

function handlePublishingOnchange() {
    var selectedValue = $("input[name\x3dpublishing-type]:checked", "#research-filter").val();
    if (selectedValue == "customrange") $(".custom-date-range").show();
    else $(".custom-date-range").hide()
}

function ergFilters() {
    ergfiltersArr = [{
        category: "main-category",
        value: $(".ergtreasure-section .reports-radio .radio-list input[name\x3d'category-type']:checked").val()
    }, {
        category: "publish",
        value: $(".ergtreasure-section .reports-radio .radio-list input[name\x3d'publishing-type']:checked").val()
    }]
}

function handleFilterArrErg() {
    var filteredCards = [];
    for (var i$62 = 0; i$62 < ergfiltersArr.length; i$62++) {
        var _filterItem = ergfiltersArr[i$62];
        if (_filterItem.value === "icicibank:erg/treasurer-s-corner/all") filteredCards = ergActualData;
        else if (filteredCards.length == 0 && _filterItem.category !== "publish") filteredCards = getErgFilteredCards(ergActualData, _filterItem);
        else filteredCards = getErgFilteredCards(filteredCards, _filterItem)
    }
    return filteredCards
}

function getErgFilteredCards(cards, _filter) {
    var _filteredErgItems;
    if (_filter.category === "main-category")
        if (getNameFromTagId(_filter.value) !== "all") _filteredErgItems = getFilteredSolutionArray(cards, "categoryTag", _filter.value);
        else _filteredErgItems = cards;
    if (_filter.category === "publish")
        if (_filter.value == "all") {
            enddate = moment(new Date(Date.now() + 24 * 60 * 60 * 1E3)).format("MM/DD/YYYY");
            _filteredErgItems = cards
        } else if (_filter.value == "7days") {
        startdate = moment(new Date(Date.now() - 7 * 24 * 60 * 60 * 1E3)).format("MM/DD/YYYY");
        enddate = moment(new Date(Date.now() + 24 * 60 * 60 * 1E3)).format("MM/DD/YYYY");
        _filteredErgItems = sortByCustomDate(cards, startdate, enddate)
    } else if (_filter.value == "30days") {
        startdate = moment(new Date(Date.now() - 30 * 24 * 60 * 60 * 1E3)).format("MM/DD/YYYY");
        enddate = moment(new Date(Date.now() + 24 * 60 * 60 * 1E3)).format("MM/DD/YYYY");
        _filteredErgItems = sortByCustomDate(cards, startdate, enddate)
    } else if (_filter.value == "60days") {
        startdate = moment(new Date(Date.now() - 60 * 24 * 60 * 60 * 1E3)).format("MM/DD/YYYY");
        enddate = moment(new Date(Date.now() +
            24 * 60 * 60 * 1E3)).format("MM/DD/YYYY");
        _filteredErgItems = sortByCustomDate(cards, startdate, enddate)
    } else if (_filter.value == "6months") {
        startdate = moment(new Date(Date.now() - 150 * 24 * 60 * 60 * 1E3)).format("MM/DD/YYYY");
        enddate = moment(new Date(Date.now() + 24 * 60 * 60 * 1E3)).format("MM/DD/YYYY");
        _filteredErgItems = sortByCustomDate(cards, startdate, enddate)
    } else if (_filter.value == "customrange") _filteredErgItems = cards;
    else enddate = moment(new Date(Date.now() + 24 * 60 * 60 * 1E3)).format("MM/DD/YYYY");
    return _filteredErgItems
}

function bindClickToVideo() {
    $(".openvideo").click(function() {
        var iframe = $("#videoiFrame");
        iframe.attr("src", iframe.data("iframe-src")), $(".video-popup").show(), $("body").addClass("no-scroll"), $(".mob-announcement-section:visible").length > 0 ? scrolltoHt = $(".mob-announcement-section:visible").height() + $(".header.mobile").height() - 100 : scrolltoHt = $(".header.mobile").height() - 100, $(window).width() > 991 && !isNaN(scrolltoHt) && $("html, body").animate({
            scrollTop: scrolltoHt
        }, 1E3)
    })
}

function downloadFile(file_path) {
    var filename = file_path.replace(/^.*[\\\/]/, "");
    var req = new XMLHttpRequest;
    req.open("GET", file_path, true);
    req.responseType = "blob";
    req.onload = function(event) {
        var blob = req.response;
        var newBlob = new Blob([blob], {
            type: "application/pdf"
        });
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(newBlob, filename);
            return
        }
        var link = document.createElement("a");
        var data = window.URL.createObjectURL(blob);
        link.href = data;
        link.download = filename;
        link.click();
        setTimeout(function() {
            window.URL.revokeObjectURL(data)
        }, 100)
    };
    req.send()
}

function Ierslider() {
    !$(".ier-slider").hasClass("slick-initialized") && $(".ier-slider").slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2E3,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                arrows: false
            }
        }]
    })
}

function RenovationSlider() {
    !$(".renovation-slider").hasClass("slick-initialized") && $(".renovation-slider").slick({
        dots: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2E3,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    })
}

function Irslider() {
    !$(".lr-slider").hasClass("slick-initialized") && $(".lr-slider").slick({
        dots: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2E3,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    window.Sharer.init()
}
$("#calendarBtn").click(function() {
    $("#calendar").addClass("show-calendar")
});

function getInhouseData(data, parentClass) {
    var eleArrayInhouse = [];
    data.forEach(function(element) {
        var listItem = "\x3cdiv class\x3d'title'\x3e\x26nbsp;\x3c/div\x3e" + "\x3cdiv class\x3d'value'\x3e" + element.monthrangeone + "\x3c/div\x3e" + "\x3cdiv class\x3d'value'\x3e" + element.monthrangetwo + "\x3c/div\x3e" + "\x3cdiv class\x3d'value'\x3e" + element.monthrangethree + "\x3c/div\x3e";
        eleArrayInhouse.push(listItem)
    });
    $(".hv-heading-bottom").empty();
    $(".hv-heading-bottom").append(eleArrayInhouse);
    var myNode = document.querySelectorAll(parentClass);
    var hvListsDiv = document.createElement("div");
    data.forEach(function(element) {
        var hvList = document.createElement("div");
        hvList.className = "hv-list";
        var title = document.createElement("div");
        title.className = "title";
        title.innerText = element.title;
        var first = document.createElement("div");
        first.className = "value";
        first.innerText = element.first;
        var second = document.createElement("div");
        second.className = "value";
        second.innerText = element.second;
        var third = document.createElement("div");
        third.className = "value";
        third.innerText =
            element.third;
        hvList.appendChild(title);
        hvList.appendChild(first);
        hvList.appendChild(second);
        hvList.appendChild(third);
        hvListsDiv.appendChild(hvList)
    });
    myNode[0].innerHTML = "";
    myNode[0].appendChild(hvListsDiv)
}

function getUrlParameter(param) {
    var query = window.location.search.substring(1);
    var queryArr = query.split("\x26");
    for (var i = 0; i < queryArr.length; i++) {
        var queryParam = queryArr[i].split("\x3d");
        if (queryParam[0] == param) return queryParam[1]
    }
}
$(document).ready(function() {
    var chkParam = getUrlParameter("source");
    if (chkParam != "" && chkParam == "iTreasury") {
        var liparam = "source\x3diTreasury";
        var lrViewMoreLink = $("#lrViewMoreLink").attr("href");
        lrViewMoreLink = lrViewMoreLink + liparam;
        var tcViewMoreLink = $("#tcViewMoreLink").attr("href");
        tcViewMoreLink = tcViewMoreLink + liparam;
        $("#lrViewMoreLink").attr("href", "");
        $("#tcViewMoreLink").attr("href", "");
        $("#lrViewMoreLink").attr("href", lrViewMoreLink);
        $("#tcViewMoreLink").attr("href", tcViewMoreLink)
    }
    Ierslider();
    Irslider();
    RenovationSlider();
    window.Sharer.init()
});
var $inhouseselectInp = $("#inhouseselect");
var inhousedata;
var InhouseJsonLink = $("#InhouseJsonLink").length && convertJSON($("#InhouseJsonLink").text());
if (InhouseJsonLink) {
    inhousedata = InhouseJsonLink;
    var firstValue = $(".inhouseselect").find("option:first-child").val();
    var inHouseFirstValue = inhousedata[firstValue];
    getInhouseData(inHouseFirstValue, ".hv-lists")
}
$inhouseselectInp.on("selectmenuchange", function(event, country) {
    inhousechange(".inhouseselect", ".hv-lists")
});
$(".inhouseselectmobile").selectmenu({
    change: function() {
        inhousechange(".inhouseselectmobile", ".hv-lists-mobile")
    }
});

function inhousechange(eleId, parentClass) {
    var value = $(eleId).val();
    var inHouseValue = inhousedata[value];
    getInhouseData(inHouseValue, parentClass)
}

function nfSlider() {
    !$(".nf-lists").hasClass("slick-initialized") && $(".nf-lists").slick({
        dots: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3E3,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                dots: false
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                dots: false
            }
        }]
    })
}

function indicesSlider() {
    !$(".indices-lists").hasClass("slick-initialized") && $(".indices-lists").slick({
        dots: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3E3,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                dots: false
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                dots: false
            }
        }]
    });
    window.Sharer.init()
}

function fcSlider() {
    !$(".fc-lists").hasClass("slick-initialized") && $(".fc-lists").slick({
        dots: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3E3,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                dots: false
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                dots: false
            }
        }]
    })
}
$("#calendarBtn").click(function() {
    $(".calendar-container").addClass("show-calendar")
});
$(document).ready(function() {
    if ($(document).width() > 991 && $(".offer-ul-card.unica-offer").length > 0) $(".offer-ul-slider .slick-next").on("click", function(e, slick) {
        console.log("next click");
        $(".offer-ul-card.unica-offer a.postEvent span.presentation-post-event").remove();
        $(".offer-ul-list.slick-active .offer-ul-card.unica-offer a.postEvent span.presentation-post-event-mccm").attr("class", "presentation-post-event");
        BannerPostEvent()
    });
    else if ($(document).width() < 991 && $(".offer-ul-card.unica-offer").length >
        0) $(".offer-ul-slider .slick-next").on("click", function(e, slick) {
        console.log("next click");
        $(".offer-ul-card.unica-offer a.postEvent span.presentation-post-event").remove();
        $(".offer-ul-list.slick-active .offer-ul-card.unica-offer a.postEvent span.presentation-post-event-mccm").attr("class", "presentation-post-event");
        BannerPostEvent()
    });
    $(".offer-ul-list.slick-active .offer-ul-card.unica-offer a.postEvent span.presentation-post-event-mccm").attr("class", "presentation-post-event");
    BannerPostEvent();

    function BannerPostEvent() {
        if ($(".offer-ul-card.unica-offer a.postEvent span.presentation-post-event").length > 0) $(".offer-ul-card.unica-offer a.postEvent span.presentation-post-event").each(function(i) {
            var link = $(this).attr("data-presentation");
            $.ajax({
                url: link,
                success: function(data) {},
                error: function(jqXHR, statusText, errorThrown) {
                    consoleLog(errorThrown)
                }
            })
        })
    }
});
! function() {
    var today = moment();
    var eveDate = today;
    var clickDayEl;

    function Calendar(selector, eventSelector, events, type) {
        this.el = document.querySelector(selector);
        this.events = events;
        this.current = moment().date(1);
        eveDate = today;
        $("#calendar-date").text(moment(today).format("Do MMM"));
        this.draw(type)
    }
    Calendar.prototype.draw = function(type) {
        this.drawHeader(type);
        this.drawWeek();
        this.drawMonth(type);
        this.drawLegend();
        var cDate = moment(eveDate).format("DD-MM-YYYY");
        var todaysEvents = this.events.reduce(function(memo,
            ev) {
            if (moment(ev.date, "DD-MM-YYYY").format("DD-MM-YYYY") == cDate && !!ev.calendar) memo.push(ev);
            return memo
        }, []);
        this.renderEvents(todaysEvents, type);
        $(".calender-close").on("click", function() {
            $(".calendar-container").removeClass("show-calendar")
        })
    };
    Calendar.prototype.drawWeek = function() {
        if (!this.weekDiv) {
            this.weekDiv = createElement("div", "weekContainer");
            this.weekDiv.id = "weekDiv";
            var weekName = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
            for (i = 0; i < weekName.length; i++) {
                var outer = createElement("div", "day");
                var name =
                    createElement("div", "day-name", weekName[i]);
                outer.appendChild(name);
                this.weekDiv.appendChild(outer)
            }
            this.el.appendChild(this.weekDiv)
        }
    };
    Calendar.prototype.drawHeader = function(type) {
        var self = this;
        if (!this.header) {
            this.header = createElement("div", "header");
            this.header.className = "header";
            this.headerMob = createElement("div");
            this.headerMob.className = "header-" + type;
            this.title = createElement("h4");
            this.title.textContent = "Calendar";
            this.closeSpan = createElement("span");
            this.closeSpan.className = "calender-close m-view";
            this.closeSpan.textContent = "\u00d7";
            this.headerMob.appendChild(this.title);
            this.headerMob.appendChild(this.closeSpan);
            this.header.appendChild(this.headerMob);
            this.header.appendChild(this.getMonthList(type));
            this.header.appendChild(this.getYearList(type));
            this.el.appendChild(this.header)
        }
        $("#monthSelect-" + type)[0].selectedIndex = self.current.month();
        $("#yearSelect-" + type).val(self.current.year());
        $("#yearSelect-" + type).selectmenu({
            change: function() {
                self.current = moment(self.current.month() + 1 + "/" + self.current.date() +
                    "/" + $(".yearList-" + type).val());
                eveDate = self.current;
                self.draw(type)
            }
        });
        $("#monthSelect-" + type).selectmenu({
            change: function() {
                self.current = moment($(".monthlist-" + type).val() + "/" + self.current.date() + "/" + self.current.year());
                eveDate = self.current;
                self.draw(type)
            }
        })
    };
    Calendar.prototype.getMonthList = function(type) {
        var self = this;
        var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var monthSelectList = createElement("select", "monthlist-" +
            type);
        monthSelectList.id = "monthSelect-" + type;
        for (var i = 0; i < monthArray.length; i++) {
            this.option = document.createElement("option");
            this.option.value = i + 1;
            this.option.text = monthArray[i];
            monthSelectList.appendChild(this.option)
        }
        return monthSelectList
    };
    Calendar.prototype.getYearList = function(type) {
        var self = this;
        var yearSelectList = createElement("select", "yearList-" + type);
        yearSelectList.id = "yearSelect-" + type;
        for (var i = 2015; i <= self.current.year() + 2; i++) {
            this.option = document.createElement("option");
            this.option.value =
                i;
            this.option.text = i;
            yearSelectList.appendChild(this.option)
        }
        return yearSelectList
    };
    Calendar.prototype.drawMonth = function(type) {
        var self = this;
        if (this.month) {
            this.oldMonth = this.month;
            this.oldMonth.className = "month out " + (self.next ? "next" : "prev");
            this.oldMonth.addEventListener("webkitAnimationEnd", function() {
                self.oldMonth.parentNode.removeChild(self.oldMonth);
                self.month = createElement("div", "month");
                self.backFill(type);
                self.currentMonth(type);
                self.fowardFill(type);
                self.el.appendChild(self.month);
                window.setTimeout(function() {
                    self.month.className =
                        "month in " + (self.next ? "next" : "prev")
                }, 16)
            })
        } else {
            this.month = createElement("div", "month");
            this.el.appendChild(this.month);
            this.backFill(type);
            this.currentMonth(type);
            this.fowardFill(type);
            this.month.className = "month new"
        }
    };
    Calendar.prototype.backFill = function(type) {
        var clone = this.current.clone();
        var dayOfWeek = clone.day();
        if (!dayOfWeek) return;
        clone.subtract("days", dayOfWeek + 1);
        for (var i = dayOfWeek; i > 0; i--) this.drawDay(clone.add("days", 1), type)
    };
    Calendar.prototype.fowardFill = function(type) {
        var clone =
            this.current.clone().add("months", 1).subtract("days", 1);
        var dayOfWeek = clone.day();
        if (dayOfWeek === 6) return;
        for (var i = dayOfWeek; i < 6; i++) this.drawDay(clone.add("days", 1), type)
    };
    Calendar.prototype.currentMonth = function(type) {
        var clone = this.current.clone();
        while (clone.month() === this.current.month()) {
            this.drawDay(clone, type);
            clone.add("days", 1)
        }
    };
    Calendar.prototype.getWeek = function(day) {
        if (!this.week || day.day() === 0) {
            this.week = createElement("div", "week");
            this.month.appendChild(this.week)
        }
    };
    Calendar.prototype.drawDay =
        function(day, type) {
            var self = this;
            this.getWeek(day);
            var isCurrentMonth = day.month() === this.current.month();
            var outer = createElement("div", isCurrentMonth ? this.getDayClass(day) : "empty-day");
            var todaysEvents;
            if (day.month() === this.current.month()) {
                todaysEvents = this.events.reduce(function(memo, ev) {
                    var cDate = moment(day).format("DD-MM-YYYY");
                    if (moment(ev.date, "DD-MM-YYYY").format("DD-MM-YYYY") == cDate) memo.push(ev);
                    return memo
                }, []);
                todaysEvents.forEach(function(ev) {
                    outer.classList.add(ev.color)
                })
            }
            var isEvent =
                todaysEvents && todaysEvents.find(function(item) {
                    return !!item.calendar
                });
            if (isCurrentMonth) outer.addEventListener("click", function() {
                self.openDay(this, type)
            });
            var number = createElement("div", "day-number", isCurrentMonth ? day.format("DD") : "");
            var events = createElement("div", "day-events");
            outer.appendChild(number);
            outer.appendChild(events);
            this.week.appendChild(outer)
        };
    Calendar.prototype.getDayClass = function(day) {
        classes = ["day"];
        if (day.month() !== this.current.month()) classes.push("other");
        else if (today.isSame(day,
                "day")) classes.push("today");
        return classes.join(" ")
    };
    Calendar.prototype.openDay = function(el, type) {
        var ele = document.getElementById("calendar-" + type);
        if (ele && ele.parentElement.classList.contains("show-calendar")) ele.parentElement.classList.remove("show-calendar");
        if (clickDayEl) clickDayEl.classList.remove("selectedDay");
        clickDayEl = el.querySelectorAll(".day-number")[0];
        clickDayEl.classList.add("selectedDay");
        var dayNumber = +el.querySelectorAll(".day-number")[0].innerText || +el.querySelectorAll(".day-number")[0].textContent;
        var day = this.current.clone().date(dayNumber);
        $("#calendar-date").text(moment(day).format("Do MMM"));
        var todaysEvents = this.events.reduce(function(memo, ev) {
            var cDate = moment(day).format("DD-MM-YYYY");
            if (moment(ev.date, "DD-MM-YYYY").format("DD-MM-YYYY") == cDate && !!ev.calendar) memo.push(ev);
            return memo
        }, []);
        this.renderEvents(todaysEvents, type)
    };
    Calendar.prototype.renderEvents = function(events, type) {
        var wrapper = createElement("div", "events in");
        var elements = document.getElementById("eventDiv-" + type).getElementsByClassName("events");
        while (elements.length > 0) elements[0].parentNode.removeChild(elements[0]);
        ! function() {
            var usaHolidayDiv = createElement("div", "event");
            var indHolidayDiv = createElement("div", "event");
            var usaEventInner = createElement("div", "event-inner american-event");
            var indEventInner = createElement("div", "event-inner indian-event");
            var usaHolidayCount = 0;
            var indHolidayCount = 0;
            usaHolidayDiv.appendChild(usaEventInner);
            indHolidayDiv.appendChild(indEventInner);
            events.forEach(function(ev) {
                if (ev.calendar == "American Holiday") {
                    usaHolidayCount++;
                    var nameSpan = createElement("span", "event-title", usaHolidayCount + ". " + ev.eventName);
                    usaEventInner.appendChild(nameSpan)
                } else if (ev.calendar == "Indian Holiday") {
                    indHolidayCount++;
                    var nameSpan = createElement("span", "event-title", indHolidayCount + ". " + ev.eventName);
                    indEventInner.appendChild(nameSpan)
                }
            });
            if (indHolidayCount) wrapper.prepend(indHolidayDiv);
            if (usaHolidayCount) wrapper.prepend(usaHolidayDiv)
        }();
        events.forEach(function(ev) {
            if (!(ev.calendar == "American Holiday" || ev.calendar == "Indian Holiday")) {
                var div =
                    createElement("div", "event");
                var eventTime = moment(ev.date, "DD-MM-YYYY hh:mm").format("hh:mm a");
                var timeSpan = createElement("span", "event-time", eventTime);
                var eventInner = createElement("div", "event-inner");
                var nameSpan = createElement("span", "event-title", ev.eventName);
                var locationSpan = createElement("span", "location", ev.location);
                var horizontalDiv = createElement("div", "horizontalDiv");
                var actualValue = createElement("span", "", ev.actual);
                var actualText = createElement("span", "", "Actual");
                var actualDiv = createElement("div",
                    "");
                actualDiv.appendChild(actualValue);
                actualDiv.appendChild(actualText);
                var forecastValue = createElement("span", "", ev.forecast);
                var forecastText = createElement("span", "", "Forecast");
                var forecastDiv = createElement("div", "");
                forecastDiv.appendChild(forecastValue);
                forecastDiv.appendChild(forecastText);
                var priorValue = createElement("span", "", ev.prior);
                var priorText = createElement("span", "", "Prior");
                var priorDiv = createElement("div", "");
                priorDiv.appendChild(priorValue);
                priorDiv.appendChild(priorText);
                horizontalDiv.appendChild(actualDiv);
                horizontalDiv.appendChild(forecastDiv);
                horizontalDiv.appendChild(priorDiv);
                div.appendChild(timeSpan);
                div.appendChild(eventInner);
                eventInner.appendChild(nameSpan);
                eventInner.appendChild(locationSpan);
                eventInner.appendChild(horizontalDiv);
                wrapper.appendChild(div)
            }
        });
        if (!events.length) {
            var div = createElement("div", "event empty");
            var span = createElement("span", "", "No Events");
            div.appendChild(span);
            wrapper.appendChild(div)
        }
        document.getElementById("eventDiv-" + type).appendChild(wrapper);
        $("#eventDiv-desk .events").mCustomScrollbar()
    };
    Calendar.prototype.drawLegend = function() {
        var legend = createElement("div", "legend");
        var calendars = this.events.map(function(e) {
            return e.calendar + "|" + e.color
        }).reduce(function(memo, e) {
            if (memo.indexOf(e) === -1) memo.push(e);
            return memo
        }, []).forEach(function(e) {
            var parts = e.split("|");
            var entry = createElement("div", "entry " + parts[1], parts[0]);
            parts[0] !== "Normal Event" && legend.appendChild(entry)
        });
        var legendNode = this.el.getElementsByClassName("legend");
        legendNode.length && this.el.removeChild(legendNode[0]);
        this.el.appendChild(legend)
    };
    window.Calendar = Calendar;

    function createElement(tagName, className, innerText) {
        var ele = document.createElement(tagName);
        if (className) ele.className = className;
        if (innerText) ele.innderText = ele.textContent = innerText;
        return ele
    }
}();
! function() {
    var filepath = $("#csvFilePath")[0] && $("#csvFilePath")[0].innerText;
    if (!filepath) return;
    var data = [];
    var colorOnCalendar = {
        "Important Data Release": "orange",
        "American Holiday": "blue",
        "Normal Event": "underline-only",
        "Indian Holiday": "maroon"
    };
    var req = new XMLHttpRequest;
    req.open("GET", filepath, true);
    req.responseType = "text";
    req.onload = csvJSON.bind(req);
    req.send();

    function csvJSON() {
        var lines = this.response.split("\n");
        lines.pop();
        var result = [];
        var headers = lines[0].split("\r")[0].split(",");
        for (var i =
                1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split("\r")[0].split(",");
            for (var j = 0; j < headers.length; j++) obj[headers[j]] = currentline[j];
            result.push(obj)
        }
        result.map(function(item) {
            var color = item.calendar ? colorOnCalendar[item.calendar] : "";
            return Object.assign(item, {
                color: color
            })
        });
        data = result;
        var calendar = new Calendar("#calendar", "#eventDiv-desk", data, "desk");
        var calendar = new Calendar("#calendar-mob", "#eventDiv-mob", data, "mob")
    }
}();
$(document).ready(function() {
    var ukExchRate = $("#ukExchRate");
    if (ukExchRate.length > 0) {
        var keyVal = document.getElementById("keyVal");
        var currentTime = (new Date).toGMTString();
        var UKStaticRate = $("#UKStaticRate").val();
        $.ajax({
            type: "GET",
            url: "/content/icicibank.exchangerate.json",
            contentType: "application/json;charset\x3dutf-8",
            data: {
                CountryCode: "UK"
            },
            success: function(response, textStatus, xhr) {
                if (typeof response === "string") response = JSON.parse(response);
                if (xhr.status === 200 && xhr.readyState === 4) {
                    var result = [];
                    var data = response;
                    for (var i = 0; i < data.Rates.length; i++) {
                        var slab = data.Rates[i].Slab;
                        var rate = data.Rates[i].Rate;
                        result.push({
                            slab: slab,
                            rate: rate
                        })
                    }
                    var timeDetails = data.TimeDetails;
                    $("#keyVal").empty();
                    keyVal.innerHTML = keyVal.innerHTML + "\x3cdiv class\x3d'table-container'\x3e\x3ctable border\x3d'0'\x3e\x3ctbody\x3e\x3ctr\x3e\x3ctd colspan\x3d'4'\x3e\x3cp\x3eICICI Bank UK PLC confirmed Exchange Rates for\x26nbsp;" + timeDetails + "(Rates applicable for ICICI Bank UK HomeVantage Current Account Customers only)\x3c/p\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd style\x3d'width:50%;'\x3e\x3cb\x3eMoney Transfer Rates from GBP to INR\x3c/b\x3e\x3c/td\x3e\x3ctd style\x3d'width:50%;'\x3e\x3cb\x3eStandard Exchange Rate \x3c/b\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e";
                    for (var k = 0; k < result.length; k++) keyVal.innerHTML = keyVal.innerHTML + "\x3cdiv class\x3d'table-container'\x3e\x3ctable border\x3d'0'\x3e\x3ctbody\x3e\x3ctr\x3e\x3ctd style\x3d'width:50%;border-top:1px solid #fff;'\x3e" + result[k].slab + "\x3c/td\x3e\x3ctd style\x3d'width:50%;border-top:1px solid #fff;'\x3e" + result[k].rate + "\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e";
                    keyVal.innerHTML = keyVal.innerHTML + "\x3cp style\x3d'border: 1px solid #d9d9d9;padding: 10px 0px 10px 20px;width:100%;border-top:1px solid #fff;'\x3e\x3cb\x3eImportant Information :\x3c/b\x3e\x3c/br\x3e\x3cb\x3e1) For money transfers above \x26pound;25,000 from the branch, please speak to a branch representative.\x3c/b\x3e\x3c/br\x3e\x3cb\x3e2) Exchange rates for non-account holders of the Bank would receive 10 paise less than quoted above.\x3c/b\x3e\x3c/p\x3e"
                } else if (UKStaticRate &&
                    UKStaticRate != "") {
                    $("#keyVal").empty();
                    keyVal.innerHTML = keyVal.innerHTML + "\x3cdiv class\x3d'table-container'\x3e\x3ctable border\x3d'0'\x3e\x3ctbody\x3e\x3ctr\x3e\x3ctd colspan\x3d'4'\x3e\x3cp\x3eICICI Bank UK PLC confirmed Exchange Rates for\x26nbsp;" + currentTime + "(Rates applicable for ICICI Bank UK HomeVantage Current Account Customers only)\x3c/p\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd style\x3d'width:50%;'\x3e\x3cb\x3eMoney Transfer Rates from GBP to INR\x3c/b\x3e\x3c/td\x3e\x3ctd style\x3d'width:50%;'\x3e\x3cb\x3eStandard Exchange Rate \x3c/b\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e";
                    keyVal.innerHTML = keyVal.innerHTML + "\x3cdiv class\x3d'table-container'\x3e\x3ctable border\x3d'0'\x3e\x3ctbody\x3e\x3ctr\x3e\x3ctd style\x3d'width:50%;border-top:1px solid #fff;'\x3e0-10000\x3c/td\x3e\x3ctd style\x3d'width:50%;border-top:1px solid #fff;'\x3e" + UKStaticRate + "\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e";
                    keyVal.innerHTML = keyVal.innerHTML + "\x3cp style\x3d'border: 1px solid #d9d9d9;padding: 10px 0px 10px 20px;width:97.1%;border-top:1px solid #fff;'\x3e\x3cb\x3eImportant Information :\x3c/b\x3e\x3c/br\x3e\x3cb\x3e1) For money transfers above \x26pound;25,000 from the branch, please speak to a branch representative.\x3c/b\x3e\x3c/br\x3e\x3cb\x3e2) Exchange rates for non-account holders of the Bank would receive 10 paise less than quoted above. \x3c/b\x3e\x3c/p\x3e"
                } else {
                    $("#keyVal").empty();
                    keyVal.innerHTML = keyVal.innerHTML + "\x3cdiv class\x3d'table-container'\x3e\x3ctable border\x3d'0'\x3e\x3ctbody\x3e\x3ctr\x3e\x3ctd colspan\x3d'4'\x3e\x3cp\x3eICICI Bank UK PLC confirmed Exchange Rates for\x26nbsp;" + currentTime + "(Rates applicable for ICICI Bank UK HomeVantage Current Account Customers only)\x3c/p\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd style\x3d'width:50%;'\x3e\x3cb\x3eMoney Transfer Rates from GBP to INR\x3c/b\x3e\x3c/td\x3e\x3ctd style\x3d'width:50%;'\x3e\x3cb\x3eStandard Exchange Rate \x3c/b\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e";
                    keyVal.innerHTML = keyVal.innerHTML + "\x3cdiv class\x3d'table-container'\x3e\x3ctable border\x3d'0'\x3e\x3ctbody\x3e\x3ctr\x3e\x3ctd style\x3d'width:50%;border-top:1px solid #fff;'\x3eContact Customer Care\x3c/td\x3e\x3ctd style\x3d'width:50%;border-top:1px solid #fff;'\x3eContact Customer Care\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e";
                    keyVal.innerHTML = keyVal.innerHTML + "\x3cp style\x3d'border: 1px solid #d9d9d9;padding: 10px 0px 10px 20px;width:97.1%;border-top:1px solid #fff;'\x3e\x3cb\x3eImportant Information :\x3c/b\x3e\x3c/br\x3e\x3cb\x3e1) For money transfers above \x26pound;25,000 from the branch, please speak to a branch representative.\x3c/b\x3e\x3c/br\x3e\x3cb\x3e2) Exchange rates for non-account holders of the Bank would receive 10 paise less than quoted above. \x3c/b\x3e\x3c/p\x3e"
                }
            },
            error: function(xhr) {}
        })
    }
});
$(document).ready(function() {
    var poundConverter = $("#pound-converter");
    if (poundConverter.length > 0) $.ajax({
        url: "/content/icicibank.exchangerate.json",
        type: "get",
        contentType: "application/json;charset\x3dutf-8",
        data: {
            CountryCode: "UK"
        },
        success: function(response, textStatus, xhr) {
            if (typeof response === "string") response = JSON.parse(response);
            if (xhr.status === 200 && xhr.readyState === 4) {
                var ukcalc = function() {
                    for (var i = 0; i < rateValue.length; i++) {
                        var NetRate = parseFloat(rateValue[i].rate);
                        amt = $("#youSend").val();
                        Net_Rcpt =
                            NetRate * amt;
                        Net_Rcpt = Net_Rcpt.toFixed(2);
                        $("#stdRcpt").text(Net_Rcpt);
                        var mobappCommission = $("#UKCommissionMobileApp").val();
                        mobCommission = parseFloat(mobappCommission) + parseFloat(NetRate);
                        mobCommission = mobCommission.toFixed(2);
                        $("#mobRate").text(mobCommission);
                        Mob_Rcpt = mobCommission * amt;
                        Mob_Rcpt = Mob_Rcpt.toFixed(2);
                        $("#mobRcpt").text(Mob_Rcpt);
                        var mobappCommission = $("#UKCommissionStandingOrders").val();
                        stndordCommission = parseFloat(mobappCommission) + parseFloat(NetRate);
                        stndordCommission = stndordCommission.toFixed(2);
                        $("#stndOrdRate").text(stndordCommission);
                        StndOrd_Rcpt = stndordCommission * amt;
                        StndOrd_Rcpt = StndOrd_Rcpt.toFixed(2);
                        $("#stndOrdRcpt").text(StndOrd_Rcpt);
                        var newcustCommission = $("#UKCommissionNewCustomer").val();
                        nwCustCommission = parseFloat(newcustCommission) + parseFloat(NetRate);
                        nwCustCommission = nwCustCommission.toFixed(2);
                        $("#nwCustRate").text(nwCustCommission);
                        NwCust_Rcpt = nwCustCommission * amt;
                        NwCust_Rcpt = NwCust_Rcpt.toFixed(2);
                        $("#nwCustRcpt").text(NwCust_Rcpt)
                    }
                };
                var rateValue = [];
                var rate, amt, recipient_total;
                var data = response;
                $("#keyVal").css("display", "block");
                $("#keyVal1").empty();
                for (var i = 0; i < data.Rates.length; i++) rateValue.push({
                    rate: data.Rates[i].Rate
                });
                var sendAmt = $("#youSend").val();
                if (sendAmt != "") {
                    var StdRate = parseFloat(rateValue[0].rate);
                    StdRate = StdRate.toFixed(2);
                    $("#stdRate").text(StdRate);
                    ukcalc()
                }
                $("#youSend").keyup(function(event) {
                    if (event.which >= 37 && event.which <= 40) return;
                    sendAmt = $("#youSend").val();
                    ukcalc()
                })
            } else {
                $("#keyVal").css("display", "none");
                $("#keyVal1").css("display", "block")
            }
        },
        error: function(xhr) {
            $("#keyVal").css("display", "none");
            $("#keyVal1").css("display", "block")
        }
    })
});
$(document).ready(function() {
    var hkdExchRate = $("#hkdExchRate");
    if (hkdExchRate.length > 0) {
        $.ajax({
            url: "/content/icicibank.exchangerate.json",
            type: "get",
            contentType: "application/json;charset\x3dutf-8",
            data: {
                CountryCode: "HKD"
            },
            success: function(response) {
                if (typeof response === "string") response = JSON.parse(response);
                var data = response;
                var timeDetails = data.TimeDetails;
                $("#RatesTimestamp").text(timeDetails);
                var CountryName = data.CountryName;
                var htmlId = document.getElementById(CountryName + "Rates");
                for (var i = 0; i <
                    data.Rates.length; i++) {
                    var rate = data.Rates[i].Rate;
                    var slab = data.Rates[i].Slab;
                    var html = "\x3ctr\x3e\x3ctd\x3e" + slab + "\x3c/td\x3e\x3ctd\x3e" + rate + "\x3c/td\x3e\x3c/tr\x3e";
                    appendHtml(htmlId, html)
                }

                function appendHtml(htmlId, html) {
                    htmlId.innerHTML += html
                }
            },
            error: function(xhr) {}
        });
        $.ajax({
            url: "/content/icicibank.exchangerate.json",
            type: "get",
            contentType: "application/json;charset\x3dutf-8",
            data: {
                CountryCode: "USD"
            },
            success: function(response) {
                if (typeof response === "string") response = JSON.parse(response);
                var data =
                    response;
                var timeDetails = data.TimeDetails;
                $("#RatesTimestamp").text(timeDetails);
                var CountryName = data.CountryName;
                var htmlId = document.getElementById(CountryName + "Rates");
                for (var i = 0; i < data.Rates.length; i++) {
                    var rate = data.Rates[i].Rate;
                    var slab = data.Rates[i].Slab;
                    var html = "\x3ctr\x3e\x3ctd\x3e" + slab + "\x3c/td\x3e\x3ctd\x3e" + rate + "\x3c/td\x3e\x3c/tr\x3e";
                    appendHtml(htmlId, html)
                }

                function appendHtml(htmlId, html) {
                    htmlId.innerHTML += html
                }
            },
            error: function(xhr) {}
        })
    }
});
var popupStorageKey = "exitPopupShownStatus";
$(document).ready(function() {
    $(".exit-popup .left-content-video .play-icon").click(function() {
        $(this).parents(".video-thumb").addClass("hide");
        $(".exit-popup .left-content-video .iframe-video").removeClass("hide")
    });
    $(".exit-popup .popup-close").click(function() {
        document.querySelector(".exit-popup").style.display = "none";
        var youtubeIframeElem = document.getElementById("exit-popup-iframe-video");
        if (youtubeIframeElem) {
            var srcUrl = youtubeIframeElem.getAttribute("src", "");
            youtubeIframeElem.setAttribute("src",
                "");
            youtubeIframeElem.setAttribute("src", srcUrl)
        }
    });

    function showPopup() {
        sessionStorage.setItem(popupStorageKey, true);
        $("#imodal-callback-popup").hide();
        $(".solutionpopup.disclaimer-popup").hide();
        $(".exit-popup").css("display", "block")
    }

    function idleShowPopup() {
        var timer;
        window.addEventListener("load", resetTimer);
        window.addEventListener("mousemove", resetTimer);
        window.addEventListener("mousedown", resetTimer);
        window.addEventListener("touchstart", resetTimer);
        window.addEventListener("touchmove", resetTimer);
        window.addEventListener("click", resetTimer);
        window.addEventListener("keydown", resetTimer);
        window.addEventListener("scroll", resetTimer);

        function clearListenersAndShowPopup() {
            window.removeEventListener("load", resetTimer);
            window.removeEventListener("mousemove", resetTimer);
            window.removeEventListener("mousedown", resetTimer);
            window.removeEventListener("touchstart", resetTimer);
            window.removeEventListener("touchmove", resetTimer);
            window.removeEventListener("click", resetTimer);
            window.removeEventListener("keydown",
                resetTimer);
            window.removeEventListener("scroll", resetTimer);
            var popupShownStatus = sessionStorage.getItem(popupStorageKey);
            if (!popupShownStatus) showPopup()
        }

        function resetTimer() {
            console.log();
            clearTimeout(timer);
            timer = setTimeout(clearListenersAndShowPopup, 2E4)
        }
    }
    idleShowPopup();

    function mouseLeavePageHandler(event) {
        if (event.clientY <= 0 || event.clientX <= 0 || event.clientX >= window.innerWidth || event.clientY >= window.innerHeight) {
            var popupShownStatus = sessionStorage.getItem(popupStorageKey);
            if (!popupShownStatus) {
                showPopup();
                document.removeEventListener("mouseleave", mouseLeavePageHandler)
            }
        }
    }
    document.addEventListener("mouseleave", mouseLeavePageHandler)
});
$(document).ready(function() {
    $("#lead-form-popup-1").on("submit", function(e) {
        e.preventDefault();
        var formajax = $("#lead-form-popup-1").attr("ajax-page");
        var fname = document.forms["lead-form-popup-1"]["fname"].value;
        var lname = document.forms["lead-form-popup-1"]["lname"].value;
        var mobNum = document.forms["lead-form-popup-1"]["mob-num"].value;
        var email = document.forms["lead-form-popup-1"]["email"].value;
        var productType = document.forms["lead-form-popup-1"]["product-type"].value;
        console.log(productType);
        var pincode =
            document.forms["lead-form-popup-1"]["pincode"].value;
        var isValid = true;
        $("#lead-form-popup-1 .error").removeClass("error");
        $("#lead-form-popup-1 .error-txt").hide();
        var fnameInvalid = !/^[a-zA-Z ]*$/g.test(fname);
        var lnameInvalid = !/^[a-zA-Z ]*$/g.test(lname);
        if (fname == null || fname == "") {
            var $fnameEl = $("#lead-form-popup-1 #fname");
            $fnameEl.addClass("error");
            $fnameEl.closest(".input-group").addClass("error");
            $("#lead-form-popup-1 #fname-err").show();
            isValid = false
        }
        if (fnameInvalid) {
            var $fnameEl = $("#lead-form-popup-1 #fname");
            $fnameEl.addClass("error");
            $fnameEl.closest(".input-group").addClass("error");
            $("#lead-form-popup-1 #fname-num-err").show();
            isValid = false
        }
        if (lname == null || lname == "") {
            var $lnameEl = $("#lead-form-popup-1 #lname");
            $lnameEl.addClass("error");
            $lnameEl.closest(".input-group").addClass("error");
            $("#lead-form-popup-1 #lname-err").show();
            isValid = false
        }
        if (lnameInvalid) {
            var $lnameEl = $("#lead-form-popup-1 #lname");
            $lnameEl.addClass("error");
            $lnameEl.closest(".input-group").addClass("error");
            $("#lead-form-popup-1 #lname-num-err").show();
            isValid = false
        }
        if (mobNum == null || mobNum == "" || mobNum.length < 10 || !/^[0-9]*$/.test(mobNum)) {
            var $mobNumEl = $("#lead-form-popup-1 #mob-num");
            $mobNumEl.addClass("error");
            $mobNumEl.closest(".input-group").addClass("error");
            $("#lead-form-popup-1 #mob-err").show();
            isValid = false
        }
        if (email == null || email == "" || !/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
            var $emailEl = $("#lead-form-popup-1 #email");
            $emailEl.addClass("error");
            $emailEl.closest(".input-group").addClass("error");
            $("#lead-form-popup-1 #email-err").show();
            isValid =
                false
        }
        if (productType == null || productType == "") {
            var $prodTypeEl = $("#lead-form-popup-1 #product-type");
            $prodTypeEl.addClass("error");
            $prodTypeEl.closest(".input-group").addClass("error");
            $("#lead-form-popup-1 #product-type-err").show();
            isValid = false
        }
        if (pincode == null || pincode == "" || pincode.length < 6 || !/^[0-9]*$/.test(pincode)) {
            var $pincodeEl = $("#lead-form-popup-1 #pincode");
            $pincodeEl.addClass("error");
            $pincodeEl.closest(".input-group").addClass("error");
            $("#lead-form-popup-1 #pincode-err").show();
            isValid =
                false
        }
        if (isValid) {
            var callbackRequest = formajax + "apiname\x3dsave\x26productCode\x3d" + productType + "\x26custName\x3d" + fname + "\x26lastName\x3d" + lname + "\x26custMobNo\x3d" + mobNum + "\x26custEmail\x3d" + email + "\x26pinCode\x3d" + pincode;
            $.ajax({
                url: callbackRequest,
                type: "GET",
                dataType: "json",
                data: $("#lead-form-popup-1").serializeArray(),
                success: function(data) {
                    $("#crm-refId").html("CRM " + (data.getCallbackResults.length > 0 && data.getCallbackResults[0].ItemKey));
                    console.log("form submitted", data, $("#lead-form-popup-1").serializeArray());
                    $(".exit-popup #success-txt").addClass("show");
                    $("#lead-form-popup-1")[0].reset();
                    $("#lead-form-popup-1 #product-type").multiselect("reload");
                    setTimeout(function() {
                        $(".exit-popup #success-txt").removeClass("show")
                    }, 1E4)
                },
                error: function(data) {
                    console.log("form not submitted", data, $("#lead-form-popup-1").serializeArray());
                    $(".exit-popup #error-popup").addClass("show");
                    setTimeout(function() {
                        $(".exit-popup #error-popup").removeClass("show")
                    }, 5E3)
                }
            })
        }
    })
});
$(document).ready(function() {
    function getCookie(cname) {
        var name = cname + "\x3d";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i$63 = 0; i$63 < ca.length; i$63++) {
            var c = ca[i$63];
            while (c.charAt(0) == " ") c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length)
        }
        return ""
    }
    var apiBaseUrl = "/content/icicibank.postbit.json?";
    var bannerOfferName = $("#BannerOfferName").attr("value") ? $("#BannerOfferName").attr("value") : "";
    var discountOffer = $("#DiscountOffer").attr("value") ?
        $("#DiscountOffer").attr("value") : "";
    var fedId = getCookie("PER_COOKIE");
    $(".feature-offer-card.offer-card .slide.slick-slide").each(function(i) {
        try {
            var bannerId = this.getAttribute("data-slick-index");
            var link = apiBaseUrl + "bannerid\x3d" + (parseInt(bannerId) + 1) + "\x26type\x3dNLI_OFFER_VIEW" + "\x26bannerOfferName\x3d" + bannerOfferName + "\x26discountOfferId\x3d" + discountOffer;
            if (fedId) $.ajax({
                url: link,
                async: false,
                success: function(data) {},
                error: function(jqXHR, statusText, errorThrown) {
                    console.log(errorThrown)
                }
            })
        } catch (e) {}
    });
    $(".feature-offer-card.offer-card .slide.slick-slide").click(function(e) {
        e.preventDefault();
        var redirectUrl = this.children[0].getAttribute("href");
        var bannerId = this.getAttribute("data-slick-index");
        var link = apiBaseUrl + "bannerid\x3d" + (parseInt(bannerId) + 1) + "\x26type\x3dNLI_OFFER_CLICK" + "\x26bannerOfferName\x3d" + bannerOfferName + "\x26discountOfferId\x3d" + discountOffer;
        if (fedId) $.ajax({
            url: link,
            success: function(data) {},
            error: function(jqXHR, statusText, errorThrown) {
                console.log(errorThrown)
            },
            complete: function() {
                window.open(redirectUrl,
                    "_self")
            }
        });
        else window.open(redirectUrl, "_self")
    });
    $(".feature-offer-inner .offercarousel a .offer-page img").click(function(e) {
        dataLayer.push({
            event: "custom_event",
            eventCategory: "offer_zone",
            eventAction: "banner_click",
            eventLabel: $(this).attr("name").toLowerCase().replace(/[,.\- ]/g, "_")
        })
    })
});
$(document).ready(function() {
    var choices = ["redirectForeign", "redirectNRI", "redirectIndia"];
    var nriChoiseCookieName = "nriPopupRedirectionPreference";
    var countryDetails = $("#countryMap").length && convertJSON($("#countryMap").text());

    function getCookie(cname) {
        var name = cname + "\x3d";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i$64 = 0; i$64 < ca.length; i$64++) {
            var c = ca[i$64];
            while (c.charAt(0) == " ") c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,
                c.length)
        }
        return ""
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date;
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1E3);
        var expires = "expires\x3d" + d.toUTCString();
        document.cookie = cname + "\x3d" + cvalue + ";" + expires + ";path\x3d/"
    }
    $("#nripopup-card .close-btn").click(function() {
        $("#nripopup-card").hide()
    });
    $("#nripopup-foreign-card a").click(function() {
        console.log("foreign card clicked");
        setCookie(nriChoiseCookieName, choices[0], 3.5)
    });
    $("#nripopup-nri-card a").click(function() {
        console.log("nri card clicked");
        setCookie(nriChoiseCookieName, choices[1], 3.5)
    });
    $("#nripopup-india-site-card a").click(function(e) {
        setCookie(nriChoiseCookieName, choices[2], 3.5);
        $("#nripopup-card").hide()
    });
    if (!$.isEmptyObject(countryDetails)) {
        $("#nripopup-foreign-card").show();
        $("#nripopup-foreign-card .country-flag img").attr("src", countryDetails.flagIconPath);
        $("#nripopup-foreign-card .country-flag img").attr("alt", countryDetails.flagAltText);
        $("#nripopup-foreign-card .icici-logo-right img").attr("src", countryDetails.logoIconPath);
        $("#nripopup-foreign-card .icici-logo-right img").attr("alt", countryDetails.logoAltText);
        $("#nripopup-foreign-card .icici-logo-right img").attr("alt", countryDetails.logoAltText);
        $("#nripopup-foreign-card .nri-popup-link p").text(countryDetails.goLabel);
        $("#nripopup-foreign-card .nri-popup-link a").text(countryDetails.countryLabel);
        $("#nripopup-foreign-card .nri-popup-link a").attr("href", countryDetails.countryLink)
    }
    var userChoice = getCookie(nriChoiseCookieName);
    if (userChoice === choices[0]) location.assign(countryDetails.countryLink);
    else if (userChoice === choices[1]) {
        var link = $("#nripopup-nri-card a").attr("href");
        location.assign(link)
    } else if (userChoice === choices[2]);
    else $("#nripopup-card").show()
});
! function() {
    if ($("#netBanking-category-details").length > 0) {
        var bindpopupNetbanking = function() {
            $(".netbanking-popup").each(function(index) {
                $(this).on("click", function(e) {
                    e.preventDefault();
                    $(".popup-section.disclaimer-popup").show();
                    $(".popup-section.disclaimer-popup .disclaimer-modal-content a").attr("href", $(this).attr("href"))
                })
            })
        };
        var getRemainingTime = function() {
            $("span.remaining-time").each(function(element) {
                var thisItem = $(this);
                var countDownDate = moment($(this).attr("data-time")).valueOf();
                var x =
                    setInterval(function() {
                        var now = (new Date).getTime();
                        var distance = countDownDate - now;
                        var days = Math.floor(distance / (1E3 * 60 * 60 * 24));
                        var hours = Math.floor(distance % (1E3 * 60 * 60 * 24) / (1E3 * 60 * 60));
                        var minutes = Math.floor(distance % (1E3 * 60 * 60) / (1E3 * 60));
                        var seconds = Math.floor(distance % (1E3 * 60) / 1E3);
                        var timeRemains = "";
                        if (days > 0) timeRemains += days + "d ";
                        if (hours.toString().length == 1) hours = 0 + hours.toString();
                        if (minutes.toString().length == 1) minutes = 0 + minutes.toString();
                        if (seconds.toString().length == 1) seconds = 0 + seconds.toString();
                        timeRemains += hours + "." + minutes + "." + seconds;
                        thisItem.text(timeRemains);
                        if (distance < 0) {
                            clearInterval(x);
                            thisItem.text("EXPIRED")
                        }
                    }, 1E3)
            })
        };
        var generateHTML$65 = function(index, cardImage, cardTitle, offerPromoCode, timeRemaining, offerViews, knowMoreLink, knowMoreTitle, pagePath, brandLink) {
            var html = '\x3cdiv class\x3d"net-offer-card offer-card"\x3e\n                        \x3cdiv class\x3d"media"\x3e\n                            \x3cimg src\x3d"' + cardImage + '" alt\x3d"offers" loading\x3d"lazy"\x3e\n                        \x3c/div\x3e\n                        \x3cdiv class\x3d"content"\x3e\n                            \x3cdiv class\x3d"top-content"\x3e\n                                \x3cdiv class\x3d"title fw-400 f-18"\x3e' +
                cardTitle + '\x3c/div\x3e\n                            \x3c/div\x3e\n                            \x3cdiv class\x3d"offer-coupon-content"\x3e\n                              \x3cdiv class\x3d"offer-Coupon d-flex mt-20"\x3e\n                                  \x3cspan id\x3d"referal-coupon' + index + '" class\x3d"coupon fw-700"\x3e' + offerPromoCode + '\x3c/span\x3e\n                                  \x3cspan id\x3d"btn-referal-coupon' + index + '" class\x3d"copy fw-700"\n                                      onclick\x3d"copyCode(\'referal-coupon' +
                index + "', 'btn-referal-coupon" + index + '\')"\x3e\n                                      Copy Code\n                                  \x3c/span\x3e\n                              \x3c/div\x3e\n                            \x3c/div\x3e\n                            \x3cdiv class\x3d"bottom-content mt-25"\x3e\n                            \x3cdiv class\x3d"button-group"\x3e\n                                \x3ca href\x3d' + pagePath + ' class\x3d"ic-btn netbanking-popup" target\x3d"_blank" tabindex\x3d"0"\x3eActivate now\x3c/a\x3e\n                                \x3ca href\x3d' +
                knowMoreLink + ' class\x3d"ic-more" tabindex\x3d"0"\x3e' + knowMoreTitle + '\x3c/a\x3e\n                            \x3c/div\x3e\n                            \x3cdiv class\x3d"card-bottom d-flex mt-25"\x3e\n                                \x3cdiv class\x3d"date-timer"\x3e\n                                    \x3cspan class\x3d"num-timer maroon-text remaining-time" data-time\x3d' + timeRemaining + '\x3e\x3c/span\x3e\n                                \x3c/div\x3e\n                                \x3cdiv class\x3d"bookmark-share d-flex"\x3e\n                                    \x3cdiv class\x3d"date-readtime"\x3e\n                                        \x3cspan class\x3d"num-viewer"\x3e' +
                offerViews + ' \x3c/span\x3e\n                                    \x3c/div\x3e\n                                    \x3cdiv class\x3d"bookmark"\x3e\x3c/div\x3e\n                                    \x3cdiv class\x3d"share"\x3e\x3c/div\x3e\n                                    \x3cdiv class\x3d"share-content"\x3e\n                                        \x3cdiv class\x3d"inner-content"\x3e\n                                            \x3cdiv class\x3d"share-header"\x3e\n                                                \x3cp\x3eShare\x3c/p\x3e\n                                                \x3cspan class\x3d"close-icon"\x3e\n                                                    \x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/close-orange.svg" alt\x3d"fb"\x3e\x3c/span\x3e\n                                            \x3c/div\x3e\n                                            \x3cul class\x3d"share-link"\x3e\n                                                \x3cli\x3e\n                                                    \x3ca href\x3d"https://api.whatsapp.com/send?url\x3d' +
                (window.location.host + brandLink) + "\x26text\x3d" + cardTitle + '" target\x3d"_blank" tabindex\x3d"0"\x3e\n                                                        \x3cspan class\x3d"n-icon"\x3e\n                                                            \x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp.svg"\n                                                                alt\x3d"whatsapp"\x3e\n                                                        \x3c/span\x3e\n                                                        \x3cspan class\x3d"h-icon"\x3e\n                                                            \x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/whatsapp-o.svg"\n                                                                alt\x3d"whatsapp"\x3e\n                                                        \x3c/span\x3e\n                                                    \x3c/a\x3e\n                                                \x3c/li\x3e\n                                                \x3cli\x3e\n                                                    \x3ca href\x3d"https://www.facebook.com/sharer/sharer.php?u\x3d' +
                (window.location.host + brandLink) + "\x26text\x3d" + cardTitle + '" target\x3d"_blank" tabindex\x3d"0"\x3e\n                                                        \x3cspan class\x3d"n-icon"\x3e\n                                                            \x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-black.svg" alt\x3d"fb"\x3e\n                                                        \x3c/span\x3e\n                                                        \x3cspan class\x3d"h-icon"\x3e\n                                                            \x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/fb-orange.svg" alt\x3d"fb"\x3e\n                                                        \x3c/span\x3e\n                                                    \x3c/a\x3e\n                                                \x3c/li\x3e\n                                                \x3cli\x3e\n                                                    \x3ca href\x3d"https://twitter.com/intent/tweet?url\x3d' +
                (window.location.host + brandLink) + "\x26text\x3d" + encodeURI(cardTitle) + '" target\x3d"_blank" tabindex\x3d"0"\x3e\n                                                        \x3cspan class\x3d"n-icon"\x3e\n                                                            \x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-black.svg" alt\x3d"tw"\x3e\n                                                        \x3c/span\x3e\n                                                        \x3cspan class\x3d"h-icon"\x3e\n                                                            \x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/tw-orange.svg" alt\x3d"tw"\x3e\n                                                        \x3c/span\x3e\n                                                    \x3c/a\x3e\n                                                \x3c/li\x3e\n                                                \x3cli\x3e\n                                                    \x3ca href\x3d"https://www.linkedin.com/shareArticle?mini\x3dtrue?url\x3d' +
                (window.location.host + brandLink) + "\x26text\x3d" + cardTitle + '" target\x3d"_blank" tabindex\x3d"0"\x3e\n                                                        \x3cspan class\x3d"n-icon"\x3e\n                                                            \x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-black.svg" alt\x3d"ln"\x3e\n                                                        \x3c/span\x3e\n                                                        \x3cspan class\x3d"h-icon"\x3e\n                                                            \x3cimg src\x3d"/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/ln-orange.svg" alt\x3d"ln"\x3e\n                                                        \x3c/span\x3e\n                                                    \x3c/a\x3e\n                                                \x3c/li\x3e\n                                            \x3c/ul\x3e\n                                        \x3c/div\x3e\n                                    \x3c/div\x3e\n                                \x3c/div\x3e\n                            \x3c/div\x3e\n                        \x3c/div\x3e\n                      \x3c/div\x3e\n                    \x3c/div\x3e';
            return html
        };
        var generateOfferListItems$67 = function(offerData) {
            var html = "",
                offerCardGroupCount = 6;
            for (var index$66 = 0; index$66 < offerData.length; index$66++) {
                if (index$66 % offerCardGroupCount == 0)
                    if (index$66 >= offerCardGroupCount) html += '\x3cdiv class\x3d"offer-list hidden-card" \x3e';
                    else html += '\x3cdiv class\x3d"offer-list"\x3e';
                html += generateHTML$65(index$66, offerData[index$66]["Image"], offerData[index$66]["offerTitle"], offerData[index$66]["offerPromoCode"], offerData[index$66]["endDate"], offerData[index$66]["offerViews"],
                    offerData[index$66]["ctalink"], offerData[index$66]["ctatitle"], offerData[index$66]["disclaimerLink"] !== "" || offerData[index$66]["disclaimerLink"] ? offerData[index$66]["disclaimerLink"] : "#", offerData[index$66]["pagePath"]);
                if (index$66 % offerCardGroupCount == offerCardGroupCount - 1) html += "\x3c/div\x3e"
            }
            if (html.length > 0) {
                $("#netBankingOfferListWrapper").html(html);
                getRemainingTime();
                bindpopupNetbanking()
            } else $("#netBankingOfferListWrapper").html('\x3cdiv class\x3d"no-result"\x3e\x3c/div\x3e')
        };
        var searchPath =
            $("#netBanking-category-details").attr("data-searchpath");
        var catId = $("#netBanking-category-details").attr("data-propval");
        var catIdProp = $("#netBanking-category-details").attr("data-prop");
        var jsonData = "/content/icicibank.offersearch.json?searchPath\x3d" + searchPath + "\x26start\x3d0\x26prop\x3d" + catIdProp + "\x26value\x3d" + catId + "";
        if (searchPath && catIdProp && catId) $.getJSON(jsonData, function(responseJson) {
            var resultJSON = responseJson;
            resultJSON.cards.sort(function(x, y) {
                if (x === "" && y === "") return 0;
                var xVal =
                    parseInt(x.offerPriority);
                var yVal = parseInt(y.offerPriority);
                if (xVal !== 0 && !xVal) xVal = Number.MAX_VALUE;
                if (yVal !== 0 && !yVal) yVal = Number.MAX_VALUE;
                if (xVal === yVal) return new Date(x.startDate) - new Date(y.startDate);
                return xVal - yVal
            });
            if (resultJSON && resultJSON["cards"]) requestsData = resultJSON["cards"];
            if (typeof requestsData == "undefined") $("#netBankingOfferListWrapper").append("\x3ch5\x3eNo Offer Found\x3c/h5\x3e");
            generateOfferListItems$67(requestsData)
        })
    }
}();
$(".top-banner-slider-cont").not(".slick-initialized").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2E3,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 557,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }]
});
$(window).on("load resize orientationchange", function() {
    if ($(window).width() < 991) $("body").toggleClass("notification-enabled", $(".download-notification").length && $(".download-notification").is(":visible") ? true : false)
});
$(".download-notification .close").click(function() {
    $("body").removeClass("notification-enabled");
    $(".download-notification").hide()
});
$(document).ready(function() {
    $("#nextpage").click(function() {
        window.location.href = "/content/icicibank/in/en/ismart-solution/thankyou.html"
    })
});
$(function() {
    $("#datepicker").datepicker({
        dateFormat: "dd-mm-yy",
        duration: "fast"
    })
});
$(document).ready(function() {
    $("#lead-form-new").on("submit", function(e) {
        e.preventDefault();
        var fname = document.forms["lead-form-new"]["fname"].value;
        console.log("fname" + fname);
        var lname = document.forms["lead-form-new"]["lname"].value;
        var mobNum = document.forms["lead-form-new"]["mob"].value;
        var email = document.forms["lead-form-new"]["email"].value;
        var productId = "RP";
        var pincode = document.forms["lead-form-new"]["pincode"].value;
        console.log("lname" + lname);
        console.log("mobNum" + mobNum);
        console.log("email" +
            email);
        console.log("productId" + productId);
        console.log("pincode" + pincode);
        var isValid = true;
        $("#lead-form-new .error").removeClass("error");
        $("#lead-form-new .error-txt").hide();
        var fnameInvalid = !/^[a-zA-Z ]*$/g.test(fname);
        var lnameInvalid = !/^[a-zA-Z ]*$/g.test(lname);
        if (fname == null || fname == "") {
            var $fnameEl = $("#lead-form-new #fname");
            $fnameEl.addClass("error");
            $fnameEl.closest(".input-group").addClass("error");
            $("#lead-form-new #fname-err").show();
            isValid = false
        }
        if (fnameInvalid) {
            var $fnameEl = $("#lead-form-new #fname");
            $fnameEl.addClass("error");
            $fnameEl.closest(".input-group").addClass("error");
            $("#lead-form-new #fname-num-err").show();
            isValid = false
        }
        if (lname == null || lname == "") {
            var $lnameEl = $("#lead-form-new #lname");
            $lnameEl.addClass("error");
            $lnameEl.closest(".input-group").addClass("error");
            $("#lead-form-new #lname-err").show();
            isValid = false
        }
        if (lnameInvalid) {
            var $lnameEl = $("#lead-form-new #lname");
            $lnameEl.addClass("error");
            $lnameEl.closest(".input-group").addClass("error");
            $("#lead-form-new #lname-num-err").show();
            isValid = false
        }
        if (mobNum == null || mobNum == "" || mobNum.length < 10 || !/^[0-9]*$/.test(mobNum)) {
            var $mobNumEl = $("#lead-form-new #mob");
            $mobNumEl.addClass("error");
            $mobNumEl.closest(".input-group").addClass("error");
            $("#lead-form-new #mob-err").show();
            isValid = false
        }
        if (email == null || email == "" || !/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
            var $emailEl = $("#lead-form-new #email");
            $emailEl.addClass("error");
            $emailEl.closest(".input-group").addClass("error");
            $("#lead-form-new #email-err").show();
            isValid = false
        }
        if (pincode ==
            null || pincode == "" || pincode.length < 6 || !/^[0-9]*$/.test(pincode)) {
            var $pincodeEl = $("#lead-form-new #pincode");
            $pincodeEl.addClass("error");
            $pincodeEl.closest(".input-group").addClass("error");
            $("#lead-form-new #pincode-err").show();
            isValid = false
        }
        if (isValid) {
            var formajax = $("#lead-form-new").attr("ajax-page");
            console.log("formajax::-" + formajax);
            var callbackRequest;
            if (typeof formajax != "undefined" && typeof productId != "undefined" && typeof fname != "undefined" && typeof lname != "undefined" && typeof mobNum != "undefined" &&
                typeof email != "undefined" && typeof pincode != "undefined")
                if (formajax != null && formajax != "" && productId != null && productId != "" && fname != null && fname != "" && lname != null && lname != "" && mobNum != null && mobNum != "" && email != null && email != "" && pincode != null && pincode != "") callbackRequest = formajax + "productCode\x3d" + productId + "\x26custName\x3d" + fname + "\x26lastName\x3d" + lname + "\x26custMobNo\x3d" + mobNum + "\x26custEmail\x3d" + email + "\x26custPincode\x3d" + pincode;
            if (typeof callbackRequest != "undefined")
                if (callbackRequest != null && callbackRequest !=
                    "") {
                    console.log("Get callback response :" + callbackRequest);
                    $.ajax({
                        dataType: "json",
                        url: callbackRequest,
                        type: "POST",
                        success: function(response) {
                            getCallbackResults = response.getCallbackResults;
                            console.log("Get callback response json :" + response.getCallbackResults.length);
                            var successFlag = 0;
                            var succMsg = "CRM ";
                            for (var i = 0; i < getCallbackResults.length; i++) {
                                var crmServiceResponce = getCallbackResults[i].crmServiceResponce;
                                var message = getCallbackResults[i].message;
                                var crmItemKey = getCallbackResults[i].crmItemKey;
                                console.log("Get callback message :" + message);
                                console.log("Get callback CRM ID :" + crmItemKey);
                                if (typeof message != "undefined" && typeof crmItemKey != "undefined" && typeof crmServiceResponce != "undefined")
                                    if (message != null && message != "" && crmItemKey != null && crmItemKey != "" && crmServiceResponce != null && crmServiceResponce != "")
                                        if (message == "Success") {
                                            console.log("You have successfully registered to get a callback from out expert.");
                                            succMsg = succMsg + crmItemKey;
                                            succMsg = succMsg + " ";
                                            successFlag++
                                        }
                            }
                            if (successFlag != 0 && productId.length >=
                                successFlag) {
                                var displayMsg = $("#success-txt p#successMsg strong").text();
                                console.log(displayMsg);
                                $("#success-txt p#successMsg strong").text(succMsg);
                                $("#error-popup").addClass("hide");
                                $("#success-txt").addClass("show")
                            }
                        },
                        error: function() {
                            $("#success-txt").addClass("hide");
                            $("#error-popup").addClass("show");
                            console.log("Get callback response calling unsuccessful")
                        }
                    })
                }
        }
    })
});
$(document).ready(function() {
    $("#dropDown").selectmenu({
        change: function() {
            if ($(this).val() != "") window.location = $(this).val()
        }
    });
    if ($(".scrollContainerWrapper").length > 0)
        if (document.readyState === "interactive")
            if (location.hash !== "") scrollToElement(location.hash);
            else window.scrollTo(0, 0)
});
$('.scrollContainerWrapper a[href*\x3d"#"]').click(function(event) {
    if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
        event.preventDefault();
        scrollToElement(this.hash)
    }
});

function scrollToElement(hash) {
    var target = $(hash);
    if (target.length) {
        var offSetPadding = 0;
        var desktopHeader = $(".new-header.desktop")[0];
        if (desktopHeader) {
            var desktopHeaderHeight = desktopHeader.offsetHeight;
            var extraDesktopHeight = $(".new-header.desktop.sticky-enable.sticky").length !== 0 ? 0 : desktopHeaderHeight;
            desktopHeaderHeight = desktopHeaderHeight + extraDesktopHeight;
            var mobileHeaderHeight = ($(".new-header.mobile")[0] ? desktopHeader.offsetHeight : 0) + ($(".new-header.mobile \x3e .search")[0] ? desktopHeader.offsetHeight :
                0);
            offSetPadding = desktopHeaderHeight === 0 ? mobileHeaderHeight : desktopHeaderHeight
        }
        var extraPadding = 8;
        $("html, body").animate({
            scrollTop: target.offset().top - offSetPadding - extraPadding
        }, 500)
    }
}! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e,
        t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 0)
}([function(e, t, r) {
    r.r(t);
    r(1),
        r(0)
}, function(e, t, r) {}]);