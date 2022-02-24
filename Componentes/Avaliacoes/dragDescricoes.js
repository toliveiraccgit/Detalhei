const sliderDescricao = document.querySelector('#container__carousel-descricao');
isDown = false;
startX;
scrollLeft;

sliderDescricao.addEventListener('mousedown', (e) => {
  isDown = true;
  sliderDescricao.classList.add('active');
  startX = e.pageX - sliderDescricao.offsetLeft;
  scrollLeft = sliderDescricao.scrollLeft;
});
sliderDescricao.addEventListener('mouseleave', () => {
  isDown = false;
});
sliderDescricao.addEventListener('mouseup', () => {
  isDown = false;
  sliderDescricao.classList.remove('active');
});
sliderDescricao.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - sliderDescricao.offsetLeft;
  const walk = (x - startX); //scroll-fast
  sliderDescricao.scrollLeft = scrollLeft - walk;
  console.log(walk);
});