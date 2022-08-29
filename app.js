const lodePhones = async (phoneName) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneName}`)
    const data = await res.json()
    displayPhone(data.data)
};
const displayPhone = (phones) => {
    if (phones.length === 0) {
        const noPhone = document.getElementById('noPhone');
        noPhone.classList.remove('d-none')
    }
    if (phones.length > 15) {
        console.log('if')

    }
    else {
        phones.slice(0, 15)
    }
    const phonesSection = document.getElementById('phonesSection');
    phonesSection.innerHTML = "";
    phones.forEach(phone => {
        console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col', 'text-center')
        phoneDiv.innerHTML = `
        <div class="card">
            <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title">${phone.phone_name}</h2>
                    <h3 class="card-title">Brand: ${phone.brand}</h3>
                    <button class="detailsBtn">Details</button>
                </div>
        </div>
        `;
        phonesSection.appendChild(phoneDiv);
    })
};
const searchBtn = () => {
    const searchFiled = document.getElementById('searchFiled');
    const searchFiledValue = searchFiled.value;
    lodePhones(searchFiledValue);
    searchFiled.value = "";
}
lodePhones('iphone');