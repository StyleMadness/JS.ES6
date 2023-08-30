const validator = {
  get(target, prop) {
    return prop in target ? target[prop] : `Цели ${prop} нет`;
  },

  set(target, prop, value) {
    if (value.length > 2) {
      Reflect.set(target, prop, value);
    } else {
      console.log(
        "Длина должна быть больше 2х символов. Сейчас" + value.length
      );
    }
  },
};

const form = {
  login: "tester",
  password: "12345",
};

const formProxy = new Proxy(form, validator);
// console.log(formProxy.login);
// console.log(formProxy.password);
// console.log(formProxy["username"]);

// formProxy.password = "12";
// console.log(formProxy.password);

function log(message) {
  console.log("[log]:", message);
}

const proxy = new Proxy(log, {
  apply(target, thisArg, argArray) {
    if (argArray.length === 1) {
      Reflect.apply(target, thisArg, argArray);
    } else {
      console.log("Кол-во Аргументво не совпадает");
    }
  },
});

proxy("Custom massage");
proxy("Message", 2);
