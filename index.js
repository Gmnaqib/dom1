const submitAction = document.getElementById('formDataDiri');
 
submitAction.addEventListener('submit', function (event) {
  const inputNama = document.getElementById('inputNama').value;
  const inputDomisili = document.getElementById('inputDomisili').value;
  const hiddenMessage = `Halo, ${inputNama}. Bagaimana cuacanya di ${inputDomisili}?`
 
  document.getElementById('messageAfterSubmit').innerText = hiddenMessage;
  event.preventDefault();
});


const merah = document.querySelector('input[name=merah]');
const hijau = document.querySelector('input[name=hijau]');
const biru = document.querySelector('input[name=biru]');

merah.addEventListener('input', function() {
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

hijau.addEventListener('input', function() {
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'
});

biru.addEventListener('input', function() {
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

const huruf = document.querySelector('input[name=huruf]');
const rubah = document.getElementById('huruf')
const aHuruf = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

huruf.addEventListener('input', function() {
    const h = huruf.value;
    rubah.innerText = aHuruf[h]
})

