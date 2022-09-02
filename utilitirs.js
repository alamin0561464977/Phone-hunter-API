function lodePhone(phones) {
    const phonesSection = document.getElementById('phonesSection');
    phonesSection.innerHTML = "";
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col', 'text-center')
        phoneDiv.innerHTML = `
        <div class="card">
            <img src="${phone.image}" style="height: 350px;" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title">${phone.phone_name}</h2>
                    <h3 class="card-title">Brand: ${phone.brand}</h3>
                    <button onclick="phoneDetailByIb('${phone.slug}')" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn detailsBtn">Details</button>
                </div>
        </div>
        `;
        phonesSection.appendChild(phoneDiv);
    })
};
function spinner(on) {
    const spinner = document.getElementById('spinner');
    if (on) {
        spinner.classList.remove('d-none')
    }
    else {
        spinner.classList.add('d-none')
    }
}
// function displayPhoneDetail(data) {
//     const { brand, image, mainFeatures, name } = data.data;
//     const { sensors, chipSet, displaySize, memory } = mainFeatures;
//     const modalTitle = document.getElementById('staticBackdropLabel').innerText = name;
//     console.log(data.data)
//     const phoneDetailsModal = document.getElementById('phoneDetailsModal');
//     phoneDetailsModal.innerHTML = `
//         <div>
//             <div class='row row-cols-1 row-cols-md-2 row-cols-lg-2 mb-3'>
//             <img src="${image}" style="height: 250px; class="card-img-top col" alt="...">
//                 <div class='col'>
//                     <h3>Brand: ${brand}</h3>
//                     <h4>Sensors: </h4>
//                     <ul>
//                         <li>${sensors[0]}</li>
//                         <li>${sensors[1]}</li>
//                         <li>${sensors[2]}</li>
//                         <li>${sensors[3]}</li>
//                         <li>${sensors[4]}</li>
//                         <li>${sensors[5]}</li>
//                     </ul>
//                 </div>
//             </div>
//             <div>
//                 <h6><b>ChipSet:</b> ${chipSet}</h4>
//                 <h6><b>DisplaySize:</b> ${displaySize}</h6>
//                 <h6><b>Memory:</b> ${memory}</h6>
//             </div>
//         </div>
//     `;
// }