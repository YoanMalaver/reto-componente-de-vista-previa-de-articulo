const open = document.getElementById('open');
const close = document.getElementById('close');
const modal_container = document.getElementById('modal_container');

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
  open.classList.remove('black');
  document
    .getElementById('sharebtn')
    .setAttribute('src', '../src/images/icon-share.svg');
});

open.onclick = (e) => {
  if (!modal_container.classList.contains('show')) {
    modal_container.classList.add('show');
    open.classList.add('black');
    document
      .getElementById('sharebtn')
      .setAttribute('src', '../src/images/icon-shareWhite.svg');
  } else {
    modal_container.classList.remove('show');
    open.classList.remove('black');
    document
      .getElementById('sharebtn')
      .setAttribute('src', '../src/images/icon-share.svg');
  }
};
