function showbar(){
    const bar = document.querySelector('.navbar .sidebar');
    bar.style.display = 'flex'
}

function hidebar(){
    const cross = document.querySelector('.navbar .sidebar');
    cross.style.display = 'none'
}

function toggleMore() {
    var moreContent = document.querySelector('.more-content');
    var buttonText = document.querySelector('.more-content-btn');
  
    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
      moreContent.style.display = 'block';
      buttonText.textContent = 'Read Less';
    } else {
      moreContent.style.display = 'none';
      buttonText.textContent = 'Read More';
    }
  }