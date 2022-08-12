    // ==UserScript==
    // @name         huyaCleaner 虎牙去广告|简洁模式
    // @namespace    http://tampermonkey.net/
    // @version      0.1
    // @description  try to take over the world!
    // @author       flik
    // @match        https://www.huya.com/*
    // @match        https://zt.huya.com/*/mobile/index.html/*
    // @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
    // @grant        GM_addStyle
    // @grant        GM_setValue
    // @grant        GM_getValue
    // ==/UserScript==


    (function() {
        'use strict';
        // 顶部广告
        let topBannerCss =   `
        .diy-toutu,
        .J_ttVideo,
        .special-bg{
            margin: 0 auto 120px !important;
            background-image:none !important;
            height:20px !important;
        }
        `
        // 组件广告
        let compAdCss =   `
            .diy-comps-wrap,
            .diy-comp{
                display:none !important;
            }
        `
        
        // 底部广告
        let mainAdCss =   `
            .main-room{
                background-image:none !important;
            }
        `
        //视频左下方广告
        let videoBannerAdCss = `
            #huya-ab-fixed,
            #huya-ab{
                display:none;
            }
        `
        // 游戏广告牌
        let businessGameAdCss = `
            .room-business-game ,.room-gg-chat{
                display:none !important;
            }
        `
        // 下载app提示
        let downloadAppAdCss = `
            #player-download-guide-tip{
                display:none;
            }
        `
        let competitionAdCss = `
        .competition_cont_center_wrap{
            display:none;
        }
        `

        function removeAds(){
            GM_addStyle(topBannerCss)
            GM_addStyle(compAdCss)
            GM_addStyle(mainAdCss)
            GM_addStyle(videoBannerAdCss)
            GM_addStyle(businessGameAdCss)
            GM_addStyle(downloadAppAdCss)
            GM_addStyle(competitionAdCss)

            setTimeout(() => {
                // 弹幕区iframe广告
                //https://zt.huya.com/24407/mobile/index.html?isPortrait=1&use304Cache=1&useLoading=0&useCloseHide=1&web=1&scale=1&anchorUid=10748220&channelId=10748220&SubChannelId=10748220&anchorYYId=20540844
                $(".chat-room__bd iframe").get(0).remove()
            }, 3000);

            // 坐骑商店
            $("#diy-pet-icon").get(0).remove()

            // 周星
            $("#week-star-btn").get(0).remove()
        }

        function shieldVideoEffect() {
            setTimeout(function(){
                // 通过模拟鼠标悬浮，加载屏蔽设置dom
                $("#shielding-effect").mouseover()
                $("#shielding-effect").mouseleave()

                $(".shield-set-list li").each(function (index,shieldItem) {
                    // 勾选未选择的视频区特效
                    if(!$(shieldItem).hasClass("shield-cked")){
                        shieldItem.click()

                    }
                })
                
            },3000)
        }

        window.onload = function () {
            removeAds()
            shieldVideoEffect()
        }

    })();