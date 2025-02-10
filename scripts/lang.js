const translations = {
    en: {
        github: "Github (@sldlelmo)",
        glosbe: "Glosbe (@sldlelmo)",
        roblox: "Roblox (@sldlelmo)",
        steam: "Steam (@sldlelmo)",
        twitch: "Twitch (@sldlelmo)",
        youtube: "Youtube (@sldlelmo)",
        youtube2: "Youtube (@sldlelmo2)",
        spotify: "Spotify",
        discord: "Discord (@sldlelmo)",
        discord2: "Discord (@sldlelmo.me)",
        sldleland: "Discord Server - sldleland",
        'last.fm': "last.fm (@sldlelmo)",
    },
    jp: {
        github: "ギットハブ (@sldlelmo)",
        glosbe: "グローベ (@sldlelmo)",
        roblox: "ロブロックス (@sldlelmo)",
        steam: "スチーム (@sldlelmo)",
        twitch: "トウィッチ (@sldlelmo)",
        youtube: "ようつべ (@sldlelmo)",
        youtube2: "ようつべ (@sldlelmo2)",
        spotify: "スポティファイ",
        discord: "ディスコード (@sldlelmo)",
        discord2: "ディスコード (@sldlelmo.me)",
        sldleland: "ディスコードサーバー (sldleland)",
        'last.fm': "last.fm (@sldlelmo)",
    },
    ru: {
        github: "Гитхаб (@sldlelmo)",
        glosbe: "Глосбе (@sldlelmo)",
        roblox: "Roblox (@sldlelmo)",
        steam: "Steam (@sldlelmo)",
        twitch: "Twitch (@sldlelmo)",
        youtube: "Youtube (@sldlelmo)",
        youtube2: "Youtube (@sldlelmo2)",
        spotify: "Spotify (Недоступно)",
        discord: "разногласие (@sldlelmo)",
        discord2: "разногласие (@sldlelmo.me)",
        sldleland: "Сообщество Пазногласие - sldleland",
        'last.fm': "last.fm (@sldlelmo)",
    },
    tok: {
        github: "ilo Kitu Upu (@sldlelmo)",
        glosbe: "ilo Kapi pi ante toki (@sldlelmo)",
        roblox: "musi Wepuloki (@sldlelmo)",
        steam: "ilo musi Sitemu (@sldlelmo)",
        twitch: "tawa Tuweku (@sldlelmo)",
        youtube: "ilo Jutu (@sldlelmo)",
        youtube2: "ilo Jutu (@sldlelmo2)",
        spotify: "kalama musi Sipotefi",
        discord: "kulupu Diso (@sldlelmo)",
        discord2: "kulupu Diso (@sldlelmo.me)",
        sldleland: "ma kulupu Diso - sldleland",
        'last.fm': "last.fm (@sldlelmo)",
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[id]');
    elements.forEach(element => {
        const key = element.id;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

const langSelect = document.getElementById('language-select');

// Set initial language (optional - you can remove this if you want the default to be the first option in the dropdown)
const userLang = navigator.language.split('-')[0] || 'en';
langSelect.value = userLang; // Set the dropdown to the user's language if available
changeLanguage(userLang);

langSelect.addEventListener('change', function() {
    const selectedLang = this.value;
    changeLanguage(selectedLang);
});