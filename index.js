const express = require("express") // impor modul express
const app = express() // inisialisasi express
const port = 3000 // port

// route /
app.get("/", (req, res) => {
    //res.send("Hello");
    res.sendFile(__dirname + "/home.html");
});

// route /about
app.get("/about", (req, res) => {
    // res.send("About Us");
    res.sendFile(__dirname + "/about.html");
});

// route /mahasiswa
app.get("/mahasiswa", (req, res) => {
    res.json({
        "status" : "success",
        "message" : "Data Mahasiswa",
        "data" : [
            {npm: 2226240062, nama: "jaehyun"},
            {npm: 2226240063, nama: "jaehyun 2"},
            {npm: 2226240064, nama: "jaehyun 3"}
        ]
    })
});

// route /dosen
app.get("/dosen", (req, res) => {
    res.json({
    "status" : "Success",
    "message" : "Data Dosen",
    "data" : [
        {
            prodi: "Sistem Informasi", 
            dosen:  ["Iis", "Faris", "Dafid"]
        },
        {
            prodi: "Informatika", 
            dosen: ["Derry", "Siska", "Yohannes"]
        },
    ]
    })
});

// route /contact
app.get("/contact", (req,res) => {
    //res.send("Contact Us");
    res.sendFile(__dirname + "/contact.html");
});

// handle route yang tidak terdaftar
app.use("/", (req, res) => {
    res.send("<h1>404 Not Found</h1>");
});

// jalankan server
app.listen(port, () => {
    console.log(`Server dapat diakses di http://localhost:${port}`);
});