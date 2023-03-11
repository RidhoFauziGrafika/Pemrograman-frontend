// import data users dari file data.mjs
import users from "./data.mjs";

/**
 * membuat user controller
 * terdapat method index dan store
 */

const index = () => {
    console.log("Index - Get All Users");
    users.forEach(function (user) {
        console.log(user);
    });
};

const store = (user) => {
    users.push(user);
};

// export beberapa data 
// data di simpan di dalam object
export {index, store};