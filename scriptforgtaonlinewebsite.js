// Функция для добавления анимации при наведении на изображения
function addHoverEffect() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease';
        });

        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });
}

// Функция для изменения цвета фона при клике на кнопку
function changeBackgroundColor() {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#9b59b6', '#f1c40f'];
    let currentIndex = 0;

    // Создаем кнопку для изменения цвета фона
    const changeColorButton = document.createElement('button');
    changeColorButton.textContent = 'Change background color';
    changeColorButton.style.position = 'fixed';
    changeColorButton.style.bottom = '60px'; // Поднимаем выше, чтобы освободить место для кнопки сброса
    changeColorButton.style.right = '20px';
    changeColorButton.style.padding = '10px 20px';
    changeColorButton.style.backgroundColor = '#34495e';
    changeColorButton.style.color = '#fff';
    changeColorButton.style.border = 'none';
    changeColorButton.style.borderRadius = '5px';
    changeColorButton.style.cursor = 'pointer';

    changeColorButton.addEventListener('click', () => {
        document.body.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    });

    // Создаем кнопку для сброса фона
    const resetColorButton = document.createElement('button');
    resetColorButton.textContent = 'Reset background color';
    resetColorButton.style.position = 'fixed';
    resetColorButton.style.bottom = '20px';
    resetColorButton.style.right = '20px';
    resetColorButton.style.padding = '10px 20px';
    resetColorButton.style.backgroundColor = '#34495e';
    resetColorButton.style.color = '#fff';
    resetColorButton.style.border = 'none';
    resetColorButton.style.borderRadius = '5px';
    resetColorButton.style.cursor = 'pointer';

    resetColorButton.addEventListener('click', () => {
        document.body.style.backgroundColor = '#ffffff'; // Возвращаем белый цвет фона
    });

    // Добавляем кнопки на страницу
    document.body.appendChild(changeColorButton);
    document.body.appendChild(resetColorButton);
}

// Вызов функций после загрузки страницы
window.onload = function() {
    addHoverEffect();
    changeBackgroundColor();
};