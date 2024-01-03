/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T> {
  key: T;
  value: T;
}

// or
// interface KeyValuePair<T, U > {
//   key: T;
//   value: U;
// }

export {};
