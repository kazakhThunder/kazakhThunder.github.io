var doc=document.getElementById('topbar');
var offset=doc.offsetTop;

function fun()
{
  if(scrollY<offset)
  {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
  else{
    document.body.style.paddingTop = doc.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  }
}

window.addEventListener('scroll',fun);