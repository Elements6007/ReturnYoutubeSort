let Astat, Cstat;
var settingsState = false;
var settings = document.getElementById('settings')
settings.addEventListener('click', settingsActivate);
const animationdiv = document.getElementById("animationstat");
const colordiv = document.getElementById("colorstat");

function settingsActivate() {
    if (settingsState == false) {
        document.getElementsByClassName("div-wrapper")[0].style.display = "none";
        document.getElementsByClassName("div-settings")[0].style.display = "";
        settingsState = true;
    } else if (settingsState == true) {
        document.getElementsByClassName("div-wrapper")[0].style.display = "";
        document.getElementsByClassName("div-settings")[0].style.display = "none";
        settingsState = false;
    }
};

chrome.storage.local.get(["Asave", "Csave"], (items) => {
    animationdiv.value = items.Asave;
    colordiv.value = items.Csave;
    getValues();
});


function getValues() {
    const dump = document.getElementById("dump");
    const dump2 = document.getElementById("dump2");
    Astat = animationdiv.value;
    Cstat = colordiv.value;
    chrome.storage.local.set({"Asave": Astat, "Csave": Cstat})
    dump.innerHTML = Astat;
    dump2.innerHTML = Cstat;
};

animationdiv.onchange = getValues;
colordiv.onchange = getValues;

