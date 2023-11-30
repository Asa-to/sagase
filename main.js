const element = document.getElementById("waldo");
element.style.display = "block";

const init = () => {
  update();
  element.style.display = "block";
};

const update = () => {
  // ウィンドウ端からの相対距離をモニタ端からの相対距離に直して、その後配置したい位置に合わせる式
  const left = -window.screenLeft + window.parent.screen.width / 2;
  const top = -window.screenTop + window.parent.screen.height / 2;
  console.log(window.screenTop);
  element.style.left = left + "px";
  element.style.top = top + "px";
};

init();
setInterval(update, 1000 / 60);
