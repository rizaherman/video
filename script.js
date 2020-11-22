function isSelected(){
  //buat ambil id body upload
  const file = document.getElementById("body-upload");
  // buat ambil id tombol
  const tombol = document.getElementById("tombol"); 
  if(file.files.length == 0 ){ 
    tombol.style.display = "none"; 
  } else { 
    tombol.style.display = "inline-block"; 
  } 
} 

function playlocalVID() {
  const player = document.getElementById("videoPlayer");
  const pray = document.querySelector("video");
  const span = document.querySelector("#span");
  const nim = document.querySelector("form").nim.value;
  const hasilNim = document.getElementById("hasilNim");
  const nama = document.querySelector("form").nama.value;;
  const hasilNama = document.getElementById("hasilNama");
  const currentVID = document.getElementById("currentVID");
  const selectedLocalVID = document.getElementById("body-upload").files[0];
  const fileInput = document.getElementById('body-upload'); 
  const table = document.getElementById('dataDiri'); 
  const filename = fileInput.files[0].name;
  pray.style.display = 'flex';
  span.style.display = 'none';
  table.style.display = 'block';
  hasilNim.innerHTML= nim;
  hasilNama.innerHTML= nama;
  judul.innerHTML= filename;
  currentVID.setAttribute("src", URL.createObjectURL(selectedLocalVID));
  player.load();
  player.play();
  player.onplay = setTimeout(function() {
  
  window.scrollTo(0,document.body.scrollHeight);
  },100);
}

function ketikNama(){
  const nim = document.getElementById('nim');
  const nama = document.getElementById('nama');

  if(nim.value == ""){
    nama.setAttribute("disabled", false)
  }else{
    nama.removeAttribute("disabled")
  }

}

function munculUpload(){
  const nama = document.getElementById("nama");
  const upload = document.getElementById("body-upload");

  if(nama.value == ""){
    upload.style.display = "none";
  }else{
    upload.style.display = "block";
    console.log("ada kok");
  }

}