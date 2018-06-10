'use strict'

$(document).foundation();

// Utils:
const findDirectChildrenByTag = (elem, tag) => {
  if (elem.localName === tag) return elem;

  const that = elem.children;
  let found = false;
  let elems = [];
  for (let i = 0; i < that.length; i++) {
    if (that[i].localName === tag) {
      elems.push(that[i]);
      found = true;
    }
  }
  if (found) {
    if (elems.length <= 1)
      return elems[0];
    else
      return elems;
  }
  return false;
}

// Logic:
document.getElementById('show-hide-password').addEventListener('click', (e) => {
  e.stopPropagation();
  const that = e.target;
  const passwordInput = document.getElementById('login-password');
  const showHideImg = findDirectChildrenByTag(that, 'img');
  if (showHideImg.src.includes('show.svg')) {
    showHideImg.src = 'img/hide.svg';
    passwordInput.type = 'text';
  } else {
    showHideImg.src = 'img/show.svg';
    passwordInput.type = 'password';
  }
});
