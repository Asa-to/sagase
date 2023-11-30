const element = document.getElementById("waldo");
const fps = 120;
const startTime = new Date().getTime();
const positionLeft = window.parent.screen.width * Math.random();
const positionTop = window.parent.screen.height * Math.random();

const update = () => {
  // ウィンドウ端からの相対距離をモニタ端からの相対距離に直して、その後配置したい位置に合わせる式
  const left = -window.screenLeft + positionLeft;
  const top = -window.screenTop + positionTop;
  element.style.left = left + "px";
  element.style.top = top + "px";
};

const init = () => {
  update();
  element.onclick = () => {
    const clearTime = (new Date().getTime() - startTime) / 1000;
    alert(`${clearTime}秒で見つけられました！`);
    location.reload();
  };
  element.style.display = "block";
};

init();
setInterval(update, 1000 / fps);
