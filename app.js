const lodePhones = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    const data = await res.json()
    displayPhone(data.data)
};
const displayPhone = (phones) => {
    phones.forEach(phone => {
        console.log(phone)
    })
}
lodePhones();