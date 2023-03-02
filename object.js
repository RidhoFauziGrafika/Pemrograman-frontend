const user = {
    nama: "ridho",
    age: 20,
    jenisKelamin: "Laki-Laki",
};

for(const label in user){
    console.log(`${label} : ${user[label]}`);
}