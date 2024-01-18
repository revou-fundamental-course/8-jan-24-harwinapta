// JavaScript untuk menghitung luas persegi
function hitungLuas() {
  // Mendapatkan nilai panjang sisi dari input
  var sideLength1 = document.getElementById("sideLength1").value;

  // Menghitung luas persegi
  var luas = sideLength1 * sideLength1;

  // Menampilkan hasil pada elemen dengan id "result"
  document.getElementById("result1").innerHTML = "Luas Persegi: " + luas;
}

function hitungKeliling() {
  // Mendapatkan nilai panjang sisi dari input
  var sideLength2 = document.getElementById("sideLength2").value;

  // Menghitung luas persegi
  var keliling = 4 * sideLength2;

  // Menampilkan hasil pada elemen dengan id "result"
  document.getElementById("result2").innerHTML = "Keliling Persegi: " + keliling;
}
