// ==========================================   DARK MODE ============================
let icon = document.getElementById('moon');

icon.onclick = function () {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.src = 'assets/img/sun.png';
  } else {
    icon.src = 'assets/img/moon.png';
  }
};

// ==========================================   DARK MODE ============================
let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "come Back :(";
})
window.addEventListener("focus", () => {
  document.title = docTitle;
})
// ================= nav tooltip location change =================

//Resize window
function resize() {
  if ($(window).width() < 1024) {
    $('.hint').removeClass('tooltip-left').addClass('tooltip-top');
  }
}

//watch window resize
$(window).on('resize', function () {
  resize();
});



let radius = 125; // adjust to move out items in and out
let fields = $('.windmill-item'),
  container = $('#windmill-container'),
  width = container.width(),
  height = container.height();
let angle = 0,
  step = (2 * Math.PI) / fields.length;
fields.each(function () {
  let x = Math.round(
    width / 2 + radius * Math.cos(angle) - $(this).width() / 2
  );
  let y = Math.round(
    height / 2 + radius * Math.sin(angle) - $(this).height() / 2
  );
  if (window.console) {
    console.log($(this).text(), x, y);
  }
  $(this).css({
    left: x + 'px',
    top: y + 'px',
  });
  angle += step;
});

document
  .querySelectorAll('.skills__criclegraph')
  .forEach((criclegraph) => {
    let cricles = criclegraph.querySelectorAll(
      '.skills__criclegraph--cricle'
    );
    let angle = 360 - 90,
      dangle = 360 / cricles.length;
    for (let i = 0; i < cricles.length; ++i) {
      let cricle = cricles[i];
      angle += dangle;
      cricle.style.transform = `rotate(${angle}deg) translate(${
        criclegraph.clientWidth / 2
      }px) rotate(-${angle}deg)`;
    }
  });
