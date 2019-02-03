const App = {};

App.isMobile = function () {
    return window.innerWidth <= 700;
}

App.elemYPos = function (elem) {
    const rect = elem.getBoundingClientRect();
    return rect.top + window.scrollY;
}

App.scrollTo = function (yPos) {
    window.scrollTo({top: yPos, behavior: "smooth"});
}

export default App;