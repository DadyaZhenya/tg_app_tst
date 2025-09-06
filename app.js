// Инициализация WebApp
let tg = window.Telegram.WebApp;

// Основная функция инициализации
function init() {
    // Разворачиваем приложение на весь экран
    tg.expand();

    // Получаем данные пользователя из Telegram
    let user = tg.initDataUnsafe.user;
    if (user) {
        document.getElementById('user-name').textContent = user.first_name;
    }
}

// Функция для показа всплывающего окна
function showAlert() {
    tg.showPopup({
        title: "Ура!",
        message: "Вы нажали на кнопку!",
        buttons: [{ type: 'ok' }]
    });
}

// Функция для закрытия приложения
function closeApp() {
    tg.close();
}

// Запускаем инициализацию при полной загрузке DOM
document.addEventListener('DOMContentLoaded', init);