const input = document.querySelector('input')
const table = document.querySelectorAll('tbody tr')
input.addEventListener('keyup', (e) => {
    const value = e.target.value.toLowerCase()
    for (let i = 0; i < table.length; i++) {
        if (table[i].textContent.toLowerCase().includes(value)) {
            table[i].setAttribute('style', 'display: auto')
        } else {
            table[i].setAttribute('style', 'display: none')
        }
    }
})

// Jquery
// $("#myInput").on("keyup", function() {
//     var value = $(this).val().toLowerCase();
//     $("#myTable tr").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });