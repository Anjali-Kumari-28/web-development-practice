window.onload = function () {
    const bgColor = localStorage.getItem("bgcolor");
    const textColor = localStorage.getItem("textcolor");
    const fontSize = localStorage.getItem("fontsize");

    if (bgColor) document.body.style.backgroundColor = bgColor;
    if (textColor) document.body.style.color = textColor;
    if (fontSize) document.body.style.fontSize = fontSize + "px";
};
