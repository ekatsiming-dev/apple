// config.js
// 集中管理 API 網址和 App ID

// [!! 修改 !!] 不再使用 export，改為指派給 window 物件
window.myAppConfig = {
    API_URL: 'https://script.google.com/macros/s/AKfycbz6PfmdrVdHEWOyBUskzCIR3ubwJviCd_kvRi2-XbWnzVxcGqYhHSvRb_Z88hI1Sghq/exec',
    appId: 'default-app-id',

    // 集中管理 Tailwind 色票
    tailwindColors: {
        customAppleYellow: {
            50: '#FCFAF5',  // 更淡的奶油黃 (背景)
            500: '#B34B62', // 玫瑰紅 (邊框/焦點)
            600: '#9D324E', // 酒紅色 (主要按鈕/文字)
            700: '#6D2833'  // 深栗色 (按鈕 Hover)
        }
    }
};
