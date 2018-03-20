$(function() {
    var Page = { // 页面移动
        nextPage : function (e) { //下一页
            var t = this;
            var nowPage = $(e.target).parent(); //获取当前页面
            var next = nowPage.prev(); // 下一个页面
            if(next.hasClass('container')){ // 判断是否有下一个页面
                playPageAnimate(e,true);
            };
        },
        prevPage : function (e) { //上一页
            var t = this;
            var nowPage = $(e.target).parent(); //获取当前页面
            var prev = nowPage.next();
            if(prev.hasClass('container')){ // 判断是否有下一个页面
                playPageAnimate(e,false);
            };
        }
    };
    function playPageAnimate(e,bool){ //播放动画 bool = true - next  =false - prev
        var parent = $(e.target).parent();
        var otherPage = bool ? parent.prev() : parent.next();
        var id = parent.attr('data-id');
        var otherId = otherPage.attr('data-id');
        id in animateHide && animateHide[id](parent,bool);
        time([200],[function(){
            otherId in animateShow && animateShow[otherId](otherPage);
        }]);
    };
    function splitToggle(pt,bool){// 分割页面切换特效
        if(bool){
            pt.find('.con-l').addClass('s-down');
            pt.find('.con-r').addClass('s-up');
        }else{
            pt.find('.con-l,.con-r').removeClass('s-up s-down');
        };
    };

    function brandHide(pt,bool){ // 品牌隐藏动效
        if(!bool){
            pt.find('.active').removeClass('active');
        }else{
            time([0,750],[
                function(){
                    splitToggle(pt,true);
                    pt.find('.active').removeClass('active');
                },
                function(){
                    pt.hide();
                }
            ],true);
        };
    };
    function splitAnimateHide(pt,bool){
        if(!bool){
            pt.find('.active').removeClass('active');
        }else{
            time([0,500],[
                function(){
                    splitToggle(pt,true);
                    pt.find('.active').removeClass('active');
                },
                function(){
                    pt.hide();
                }
            ],true);
        };
    };
    function appendTodown(pt){
        if(!pt.find('.todown-icon').length){
            pt.append('<div class="todown-icon"></div>');
            setTimeout(function(){
                pt.find('.todown-icon').addClass('icon-active');
            },500);
        };
    }
    var animateHide = { // 关闭页面的动画
        '1' : function(pt){
            time([0],[
                function(){
                    splitToggle(pt,true);
                    pt.find('.active').removeClass('active');
                    pt.addClass('s-up');
                }
            ],true);
        },
        '2' : function(pt,bool){
            brandHide(pt,bool);
        },
        '3' : function(pt,bool){
            brandHide(pt,bool);
        },
        '4' : function(pt,bool){
            brandHide(pt,bool);
        },
        '5' : function(pt,bool){
            if(bool){
                time([0],[
                    function(){
                        pt.addClass('s-up');
                    }
                ],true);
            };
        },
        '6' : function(pt,bool){
            if(bool){
                time([0],[
                    function(){
                        pt.addClass('s-up');
                    }
                ],true);
            };
        },
        '7' : function(pt,bool){
            brandHide(pt,bool);
        },
        '8' : function(pt,bool){
            brandHide(pt,bool);
        },
        '9' : function(pt,bool){
            brandHide(pt,bool);
        },
        '10' : function(pt,bool){
            brandHide(pt,bool);
        },
        '11' : function(pt,bool){
            brandHide(pt,bool);
        },
        '12' : function(pt,bool){
            brandHide(pt,bool);
        },
        '13' : function(pt,bool){
            brandHide(pt,bool);
        },
        '14' : function(pt,bool){
            brandHide(pt,bool);
        },
        '15' : function(pt,bool){
            brandHide(pt,bool);
        },
        '16' : function(pt,bool){
            brandHide(pt,bool);
        },
        '17' : function(pt,bool){
            brandHide(pt,bool);
        },
        '18' : function(pt,bool){
            brandHide(pt,bool);
        },
        '19' : function(pt,bool){
            brandHide(pt,bool);
        },
        '20' : function(pt, bool){
            brandHide(pt,bool);
        },
        '21' : function(pt,bool){
            brandHide(pt,bool);
        },
        '22' : function(pt,bool){
            if(bool){
                time([0],[
                    function(){
                        pt.addClass('s-up');
                    }
                ],true);
            };
        },
        '23' : function(pt,bool){
            pt.find('.active').removeClass('active');
        }
    };
    var animateShow = { // 显示页面的动画
        '1' : function(pt){
            time([0,750],[
                function(){
                    pt.removeClass('s-up');
                },
                function(){
                    pt.find('.con-scode, .con-page1-logo').addClass('active');
                    appendTodown(pt);
                }
            ],true);
        },
        '2':function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page2-desc,.con-page2-title').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '3' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page3-desc,.con-page3-title').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '4' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page4-desc,.con-page4-title').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '5' : function(pt){
            if(Number(pt.attr('data-on'))){
                pt.removeClass('s-up');
            }else{
                pt.attr('data-on',1)
                time([0,500,500,500,500],[ // 2000 8000
                    function(){
                        pt.removeClass('s-up');
                    },
                    function(){
                        pt.find('.rmb').addClass('active');
                        
                    },
                    function(){
                        pt.find('.con-bar').addClass('active');
                        pt.find('.rocket').addClass('active');
                        pt.find('.tail').addClass('active');
                        
                    },
                    function(){
                        pt.find('.percent').addClass('active');
                        
                    },
                    function(){
                        pt.find('.con-page5-arrow').addClass('active');
                        appendTodown(pt);
                    }
                ],true);
            };
        },
        '6' : function(pt){
            if(Number(pt.attr('data-on'))){
                pt.removeClass('s-up');
            }else{
                pt.attr('data-on',1)
                time([0,500,500,500,500],[ // 2000 8000
                    function(){
                        pt.removeClass('s-up');
                    },
                    function(){
                        pt.find('.rmb').addClass('active');
                        
                    },
                    function(){
                        pt.find('.con-bar').addClass('active');
                        pt.find('.rocket').addClass('active');
                        pt.find('.tail').addClass('active');
                        
                    },
                    function(){
                        pt.find('.percent').addClass('active');
                        
                    },
                    function(){
                        pt.find('.con-page5-arrow').addClass('active');
                        appendTodown(pt);
                    }
                ],true);
            };
        },
        '7' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page7-desc,.con-page7-title').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '8' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page8-desc,.con-page8-title,.con-page8-logo').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '9' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page9-desc,.con-page9-title,.con-page9-logo').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '10' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page10-desc,.con-page10-title,.con-page10-logo').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '11' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page11-desc,.con-page11-title,.con-page11-logo').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '12' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page12-desc,.con-page12-title,.con-page12-logo').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '13' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page13-desc,.con-page13-title').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '14' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page14-desc,.con-page14-title').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '15' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page15-desc,.con-page15-title').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '16' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page16-desc,.con-page16-title,.con-page16-logo').addClass('active');
                    appendTodown(pt);
                }
            ],true) 
        },
        '17' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page17-desc,.con-page17-title').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '18' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page18-desc,.con-page18-title').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '19' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page19-desc,.con-page19-title').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '20' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page20-desc,.con-page20-title').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '21' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page21-desc,.con-page21-title').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '22' : function(pt){
            time([0,500],[
                function(){
                    pt.removeClass("s-up")
                },
                function(){
                    pt.find('.con-diamond,.con-diamond-text').addClass('active');
                    appendTodown(pt);
                }
            ],true);
        },
        '23' : function(pt){
            time([0,500],[
                function(){
                    pt.show();
                },
                function(){
                    pt.find('.page23-title,.page23-name,.page23-web').addClass('active');
                    appendTodown(pt);
                    pt.find('.todown-icon').addClass('repeat');
                }
            ],true);
        }
    };
    function bindDom(){ //绑定dom
        $(document).on('touchmove',function(e){
            e.preventDefault();
        });
        $(document.body).on('swipeUp','.con-mk',function(e) { // 下一页
            Page.nextPage(e);
            $(e.target).parent().find('.todown-icon').removeClass('icon-active');
            if($(e.target).parent().attr('data-id') != 23){
                $(e.target).parent().find('.todown-icon').removeClass('icon-active');
                $(e.target).parent().prev().find('.todown-icon').addClass('icon-active');
            };
        });
        $(document.body).on('swipeDown','.con-mk',function(e) { // 上pt.addClass('s-up')上一页
            Page.prevPage(e);
            if($(e.target).parent().attr('data-id') != 1){
                $(e.target).parent().find('.todown-icon').removeClass('icon-active');
                setTimeout(function(){
                    $(e.target).parent().next().find('.todown-icon').addClass('icon-active');
                },750);
            };
        });
    };
    function init(){ // 页面初始化
        animateShow[$('.container').last().attr('data-id')]( $('.container').last() );
        $('.container').last().append('<div class="con-mk"></div>');
        bindDom();
    };
    time([2000],[function(){
        init();
    }]);
});