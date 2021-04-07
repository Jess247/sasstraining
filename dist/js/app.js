const themeBtn = document.querySelector('.btn').addEventListener('click', function() {
   let theme =  document.querySelector('body');

   if(theme.classList.contains('dark')) {
       theme.classList.remove('dark');
       theme.classList.add('light');
   } else {
    theme.classList.remove('light');
    theme.classList.add('dark');
   }
});

const curiousBtn = document.querySelector('.btn-two').addEventListener('click', function() {
    alert("Well there's nothing special here")
});