function download(){
    /**
     * promise dibuat menggunakan promise.
     * promise menerima callback/executor.
     * executor menerima dua parameter resolve, reject.
     * resolve untuk mengembalikan promise berhasil
     * reject untuk mengembalikan promise gagal.
     */

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Downloading...");
        }, 3000);
    }); 
}


function verify(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Verify file...");
        },2000);
    });
}

function notify(){
    console.log("Download complete")
}

/**
 * membuat async-await dengan arrow function.
 * async memberitahu ada, proses asynchronous
 * await menunggu proses asynchorounous selesai
 */

const main = async() => {
    console.log(await download());
    console.log(await verify());
    notify();
};

main();