const spinner2 = document.getElementById('spinner2');
const showAllPhones = document.getElementById('showAllPhones');
const lodePhones = async (phoneName) => {
    spinner(true);
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneName}`)
    const data = await res.json();
    displayPhone(data.data)
    console.log(data.data)
};

const displayPhone = (phones) => {
    if (phones.length === 0) {
        const noPhone = document.getElementById('noPhone');
        noPhone.classList.remove('d-none');
        showAllPhones.classList.add('d-none');
        spinner(false);

    }
    if (phones.length > 5) {
        showAllPhones.classList.remove('d-none')
        phones = phones.slice(0, 10);

    }
    else {

    }
    lodePhone(phones);
    spinner(false);
    const noPhone = document.getElementById('noPhone');
    noPhone.classList.add('d-none');
};

const searchBtn = () => {
    const searchFiled = document.getElementById('searchFiled');
    const searchFiledValue = searchFiled.value;
    lodePhones(searchFiledValue);
    searchFiled.value = "";
};

const phoneDetailByIb = async (phoneId) => {
    spinner2.classList.remove('d-none')
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)
    const data = await res.json()
    const { brand, image, mainFeatures, name } = data.data;
    const { sensors, chipSet, displaySize, memory } = mainFeatures;
    const modalTitle = document.getElementById('staticBackdropLabel').innerText = name;
    console.log(data.data)
    const phoneDetailsModal = document.getElementById('phoneDetailsModal');
    phoneDetailsModal.innerHTML = `
        <div>
            <div class='row row-cols-1 row-cols-md-2 row-cols-lg-2 mb-3'>
            <img src="${image}" style="height: 250px; class="card-img-top col" alt="...">
                <div class='col'>
                    <h3>Brand: ${brand}</h3>
                    <h4>Sensors: </h4>
                    <ul>
                        <li>${sensors[0]}</li>
                        <li>${sensors[1]}</li>
                        <li>${sensors[2]}</li>
                        <li>${sensors[3]}</li>
                        <li>${sensors[4]}</li>
                        <li>${sensors[5]}</li>
                    </ul>
                </div>
            </div>
            <div>
                <h6><b>ChipSet:</b> ${chipSet}</h4>
                <h6><b>DisplaySize:</b> ${displaySize}</h6>
                <h6><b>Memory:</b> ${memory}</h6>
            </div>
        </div>
    `;
    spinner2.classList.add('d-none')
};
document.getElementById('spinnerBtn').addEventListener('click', function () {

});
lodePhones('iphone');