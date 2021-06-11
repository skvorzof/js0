import Unsplash from 'unsplash-js';

// Создаем экземпляр объекта для доступа к API
export const unsplash = new Unsplash({
  accessKey: 'socwcsxuM2e_7OIC96V986adk34MK07loPpH1765DX4',
  secret: 'XXQ_2DVoljCFLAxfHzpLBWfPGB-aUGNEeWD_zFYpxaY',
  callbackUrl: 'http://localhost:3000/',
});

// Считываем GET-параметр code из URL
// www.example.com/auth?code=abcdef123456...
const code = location.search.split('code=')[1];

// Если код передан, отправляем запрос на получение токена
if (code) {
  unsplash.auth
    .userAuthentication(code)
    .then((res) => res.json())
    .then((json) => {
      // Сохраняем полученный токен
      unsplash.auth.setBearerToken(json.access_token);

      console.log(json.access_token);

      // Теперь можно сделать что-то от имени пользователя
      // Например, поставить лайк фотографии
      //   unsplash.photos.likePhoto('q6nQNoY9evI');
    });
}
