fetch('_footer.html')
  .then(response => response.text())
  .then(data => {
    const footer = document.querySelector('.footer');
    if (footer) {
      footer.innerHTML = data;
    }
  });