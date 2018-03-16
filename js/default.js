$(function() {
    var D = {
        cmk: '.con-mk',
        all: '.con-all',
    };
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
            time([0,750],[
                function(){
                    splitToggle(pt,true);
                    pt.find('.active').removeClass('active');
                },
                function(){
                    pt.hide();
                }
            ],true);
        },
        '2' : function(pt,bool){
            if(!bool){
                pt.find('.active').removeClass('active');
            }else{
                time([0,750],[
                    function(){
                        splitToggle(pt,true);
                        pt.find('.con-bh, .con-bt').removeClass('active');
                    },
                    function(){
                        pt.find('.con-page2-since').removeClass('active');
                        pt.hide();
                    }
                ],true);
            };
        },
        '3' : function(pt,bool){
            brandHide(pt,bool);
        },
        '4' : function(pt,bool){
            brandHide(pt,bool);
        },
        '5' : function(pt,bool){
            brandHide(pt,bool);
        },
        '6' : function(pt,bool){
            brandHide(pt,bool);
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
            if(bool){
                pt.addClass('s-up');
            };
        },
        '11' : function(pt,bool){
            if(bool){
                pt.addClass('s-up');
            };
        },
        '12' : function(pt,bool){
            if(bool){
                pt.addClass('s-up');
            };
        },
        '13' : function(pt,bool){
            splitAnimateHide(pt,bool);
        },
        '14' : function(pt,bool){
            splitAnimateHide(pt,bool);
        },
        '15' : function(pt,bool){
            if(bool){
                time([0,750],[
                    function(){
                        splitToggle(pt,true);
                    },
                    function(){
                        pt.hide();
                    }
                ],true);
            };
        },
        '16' : function(pt,bool){
            if(!bool){
                pt.find('.active').removeClass('active');
            }else{
                time([0],[
                    function(){
                        pt.addClass('s-up');
                        pt.find('.active').removeClass('active');
                    }
                ],true);
            };
        },
        '17' : function(pt,bool){
            splitAnimateHide(pt,bool);
        },
        '18' : function(pt,bool){
            splitAnimateHide(pt,bool);
        },
        '19' : function(pt,bool){
            if(!bool){
                pt.find('.active').removeClass('active');
            }else{
                time([0],[
                    function(){
                        pt.addClass('s-up');
                        pt.find('.active').removeClass('active');
                    }
                ],true);
            };
        },
        '20' : function(pt, bool){
            if(bool){
                time([0],[
                    function(){
                        pt.addClass('s-up');
                    }
                ],true);
            };
        },
        '21' : function(pt,bool){
            if(bool){
                time([0],[
                    function(){
                        pt.addClass('s-up');
                    }
                ],true);
            };
        },
        '22' : function(pt,bool){

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
        },
        '23' : function(pt,bool){
            if(bool){
                time([0,750],[
                    function(){
                        splitToggle(pt,true);
                    },
                    function(){
                        pt.hide();
                    }
                ],true);
            };
        },
        '24' : function(pt,bool){
            if(bool){
                time([0,750],[
                    function(){
                        splitToggle(pt,true);
                    },
                    function(){
                        pt.hide();
                    }
                ],true);
            };
        },
        '25' : function(pt,bool){
            if(bool){
                time([0,750],[
                    function(){
                        splitToggle(pt,true);
                    },
                    function(){
                        pt.hide();
                    }
                ],true);
            };
        },
        '26' : function(pt,bool){
            if(bool){
                time([0],[
                    function(){
                        pt.addClass('s-up');
                    }
                ],true);
            };
        },
        '27':function(pt,bool){
            if(!bool){
                pt.find('.active').removeClass('active');
            }else{
                time([0,750],[
                    function(){
                        splitToggle(pt,true);
                    },
                    function(){
                        pt.hide();
                    }
                ],true);
            }
        },
        '29' : function(pt,bool){
            if(bool){
                pt.addClass('s-up');
            };
        }
    };
    var animateShow = { // 显示页面的动画
        '1' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-scode, .con-subtext').addClass('active');
                    appendTodown(pt);
                }
            ],true);
        },
        '2':function(pt){
            time([0,750,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-bh, .con-bt').addClass('active');
                },
                function(){
                    pt.find('.con-page2-since').addClass('active');
                    appendTodown(pt);
                }
            ],true);
        },
        '3' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page3-desc,.con-page3-jnby').addClass('active');
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
                    pt.find('.con-page4-desc,.con-page4-sx').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '5' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page6-desc,.con-page6-jbj').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '6' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page5-desc,.con-page5-less').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '7' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page7-desc,.con-page7-pomme').addClass('active');
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
                    pt.find('.con-page8-desc,.con-page8-home').addClass('active');
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
                    pt.find('p').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '10' : function(pt){
            if(Number(pt.attr('data-on'))){
                pt.removeClass('s-up');
            }else{
                var all = $('.con-page10-word, .con-page10-country');
                var country =  $('.con-page10-country');
                pt.attr('data-on','1');
                time([0,2000,8000,3000,1000],[ // 2000 8000
                    function(){
                        all.addClass('right');
                    },
                    function(){
                        country.addClass('toright');
                    },
                    function(){
                        all.addClass('center');
                    },
                    function(){
                        $('.con-page10-desc').addClass('active');
                    },
                    function(){
                        pt.append('<div class="con-mk"></div>')
                        appendTodown(pt);
                    }
                ],true)
            };
        },
        '11' : function(pt){
            if(Number(pt.attr('data-on'))){
                pt.removeClass('s-up');
            }else{
                pt.attr('data-on','1');
                time([500,500,1000,750,500],[
                    function(){
                        pt.find('.con-title').addClass('active');
                    },
                    function(){
                        pt.find('.con-page11-word').addClass('active');
                    },
                    function(){
                        pt.find('.con-page11-city, .page11-tip').addClass('active');
                    },
                    function(){
                        pt.find('.con-page11-distbg, .page11-cir').addClass('active');
                    },
                    function(){
                        pt.find('.con-page11-subtext').addClass('active')
                        appendTodown(pt);
                    }
                ],true)
            };
        },
        '12' : function(pt){
            if(Number(pt.attr('data-on'))){
                pt.removeClass('s-up');
            }else{
                pt.attr('data-on','1');
                time([0,500,6000,1000],[ // 2000 8000
                    function(){
                        pt.find('.con-page12-title').addClass('active');
                    },
                    function(){
                        pt.find('.con-page12-fy16,.con-page12-fy17,.con-page12-fy18').find('div , img').addClass('active');
                        pt.find('.con-page12-category').addClass('active');
                    },
                    function(){
                        pt.find('.con-page12-fy17, .con-page12-fy16').remove();
                        pt.find('.con-page12-fy18').addClass('top');
                        pt.find('.con-page12-title').removeClass('active');
                        pt.find('.con-page12-title1').addClass('active');
                    },
                    function(){
                        pt.find('.con-page12-title').remove();
                        pt.append('<div class="con-mk"></div>');
                        appendTodown(pt);
                    }
                ],true)
            };
        },
        '13' : function(pt){
            time([0,750],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('p').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '14' : function(pt){
            time([0,500],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page14-scroll img').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '15' : function(pt){
            if(Number(pt.attr('data-on'))){
                pt.show();
                splitToggle(pt);
            }else{
                pt.attr('data-on','1');
                time([0,500,500,500,1200],[
                    function(){
                        pt.find('.con-l>p , .con-r>p, .page15-tooltip').addClass('active');
                    },
                    function(){
                        pt.find('.con-page15-lchart, .con-page15-rchart').addClass('active');   
                    },
                    function(){
                        pt.find('.page15-lchart-img, .page15-rchart-img').addClass('active');   
                    },
                    function(){
                        pt.find('.top-text15, .r15-tip, .page15-circle, .page15-chart-solid, .page15-box img, .page15-box p').addClass('active');
                        pt.append('<div class="con-mk"></div>');
                    },
                    function(){
                        pt.find('.page15-r-tip-text').addClass('active');
                        appendTodown(pt);
                    }
                ]);
            };
        },
        '16' : function(pt){
            time([0,500],[
                function(){
                    pt.removeClass('s-up');
                },
                function(){
                    pt.find('.page16-ctx img').addClass('active');
                    appendTodown(pt);
                }
            ],true) 
        },
        '17' : function(pt){
            time([0,500,2000,200,200,200],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page17-tmall img, .page17-yshop img').addClass('active');
                },
                function(){
                    pt.find('.page17-mask').addClass('active');
                },
                function(){
                    pt.find('.page17-rtitle').addClass('active');
                },
                function(){
                    pt.find('.con-page17-other img').addClass('active');
                },
                function(){
                    pt.find('.page17-rsubtext').addClass('active');
                    pt.find('.page17-yshop').remove();
                    appendTodown(pt);
                }
            ],true) 
        },
        '18' : function(pt){
            time([0,500,500,200,200],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.con-page18-moblie img').addClass('active');
                    pt.find('.con-page18-other>p, .page18-sina').addClass('active');
                },
                function(){
                    pt.find('.page18-person1').addClass('active');
                },
                function(){
                    pt.find('.page18-person2').addClass('active');
                },
                function(){
                    pt.find('.page18-person3').addClass('active');
                    pt.find('.page18-b-text').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '19' : function(pt){
            time([0,500,500],[ // 2000 8000
                function(){
                    pt.removeClass('s-up');
                },
                function(){
                    pt.find('.page19-desc').addClass('active');
                },
                function(){
                    pt.find('.page19-person1').addClass('active');
                    pt.find('.page19-person2').addClass('active');
                    appendTodown(pt);
                }
            ],true)
        },
        '20' : function(pt){
            if(Number(pt.attr('data-on'))){
                pt.removeClass('s-up');
            }else{
                pt.attr('data-on',1)
                time([0,500,500,500,500],[ // 2000 8000
                    function(){
                        pt.removeClass('s-up');
                    },
                    function(){
                        pt.find('.title').addClass('active');
                        pt.find('.page20-b-text').addClass('active');
                        pt.find('.hr').addClass('active');
                    },
                    function(){
                        pt.find('.page20-squa').addClass('active');
                        pt.find('.page20-solid, .page20-cir').addClass('active');
                    },
                    function(){
                        pt.find('.page20-t-text, .page20-bt-text').addClass('active');
                    },
                    function(){
                        pt.find('.squa-up, .bc-up, .bc-tip').addClass('active');
                        appendTodown(pt);
                    }
                ],true);
            };
        },
        '21' : function(pt){
            if(Number(pt.attr('data-on'))){
                pt.removeClass('s-up');
            }else{
                pt.attr('data-on',1)
                time([0,500,500,500,500],[ // 2000 8000
                    function(){
                        pt.removeClass('s-up');
                    },
                    function(){
                        pt.find('.title').addClass('active');
                    },
                    function(){
                       // 底部横线 和 底部年份
                       pt.find('.solid, .page21-b-text').addClass('active');
                    },
                    function(){
                        // 柱形图动画
                        pt.find('.page21-pill').addClass('active');
                    },
                    function(){
                        //提示
                        pt.find('.page21-t-text, .page21-tip').addClass('active');
                        appendTodown(pt);
                }
                ],true);
            };
        },
        '22' : function(pt){
            time([0,500],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('p').addClass('active');
                    appendTodown(pt);
                }
            ],true);
        },
        '23' : function(pt){
            if(Number(pt.attr('data-on'))){
                pt.show();
                splitToggle(pt);
            }else{
                pt.attr('data-on','1');
                time([0,500,500,500,500,200],[
                    function(){
                        pt.show();
                        splitToggle(pt);
                    },
                    function(){
                        pt.find('p').addClass('active');
                    },
                    function(){
                        pt.find('.b-text').addClass('active');
                    },
                    function(){
                        pt.find('.r-col').addClass('active');
                    },
                    function(){
                        pt.find('.t-text').addClass('active');
                    },
                    function(){
                        pt.find('.tip, .t-up').addClass('active');
                        appendTodown(pt);
                    }
                ],true);
            };
        },
        '24' : function(pt){
            if(Number(pt.attr('data-on'))){
                pt.show();
                splitToggle(pt);
            }else{
                pt.attr('data-on','1');
                time([0,500,200,500,500,200],[
                    function(){
                        pt.show();
                        splitToggle(pt);
                    },
                    function(){
                        pt.find('.title, .page24-r-tip').addClass('active');
                    },
                    function(){
                        pt.find('.com-text').addClass('active');
                        pt.find('.com-text, .unit, .hr').addClass('active');
                    },
                    function(){
                        pt.find('.l-pill, .page24-top').addClass('active');
                    },
                    function(){
                        pt.find('.l-dot-text, .l-doted').addClass('active');
                    },
                    function(){
                        pt.find('.l-tip-text, .l-up, .l-up-text').addClass('active');
                        appendTodown(pt);
                    }
                ],true);
            };
        },
        '25' : function(pt){
            if(Number(pt.attr('data-on'))){
                pt.show();
                splitToggle(pt);
            }else{
                pt.attr('data-on','1');
                time([0,500,200,500,500],[
                    function(){
                        pt.show();
                        splitToggle(pt);
                    },
                    function(){
                        pt.find('.title').addClass('active');
                    },
                    function(){
                        pt.find('.b-text, .unit').addClass('active');
                    },
                    function(){
                        pt.find('.cir').addClass('active');
                    },
                    function(){
                        pt.find('.t-text').addClass('active');
                        appendTodown(pt);
                    }
                ],true);
            };
        },
        '26':function(pt){
            time([0,500,500],[
                function(){
                    pt.removeClass('s-up');
                },
                function(){
                    pt.find('.red-box, .page26-subtext').addClass('active');
                },
                function(){
                    pt.attr('data-on') == '1' && pt.find('.page26-subtext').remove();
                }
            ],true);
        },
        '27':function(pt){
            time([0,500,500],[
                function(){
                    pt.show();
                    splitToggle(pt);
                },
                function(){
                    pt.find('.page27-text, .page27-icon').addClass('active');
                },
                function(){
                    pt.find('.page27-text, .page27-rbg>p').addClass('active');
                    appendTodown(pt);
                }
            ],true);
        },
        '28':function(pt){
            time([500,500],[
                function(){
                    pt.find('.page28>p, .repeat , .repeat-text').addClass('active');
                },
                function(){
                    pt.find('.bbg').addClass('active');
                }
            ],true);
        },
        '29' : function(pt){
            time([0,500,500,1000,1200],[
                function(){
                    pt.removeClass('s-up');
                },
                function(){
                    pt.find('.title').addClass('active');
                },
                function(){
                    pt.find('.cir,.subt').addClass('active');
                },
                function(){
                    pt.find('.pie, .mask-t, .cir-bg').addClass('active');
                },
                function(){
                    pt.find('.pie-sub').addClass('active');
                    appendTodown(pt);
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
            if($(e.target).parent().attr('data-id') != 28){
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
        $(document.body).on('touchend','.red-btn',function(e){
            var parent = $(this).parent();
            parent.find('.red-l').addClass('s-down');
            parent.find('.red-r').addClass('s-up');
            parent.find('.page26-subtext').removeClass('active');
            time([500],[
                function(){
                    parent.find('.page26-subtext').remove();
                    parent.attr('data-on','1');
                    appendTodown(parent);
                }
            ])
            $(this).remove();
        });
        $(document.body).on('touchend','.repeat-text',function(e){
            var last =  $('.page27');
            last.show();
            last.find('.s-up, .s-down').removeClass('s-up s-down');
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