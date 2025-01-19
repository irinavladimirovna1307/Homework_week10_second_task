function calculateTotalPrice(quantity = 2, price = 15000000) {
    const totalPrice = quantity * price;
     // Использования DOM
    const formattedPrice = totalPrice.toLocaleString('ru-RU');
    document.getElementById('totalPriceDisplay').innerText = `Стоимость покупки: ${formattedPrice} рублей`;
    
    // // Вместо использования DOM, мы выводим результат в консоль или через alert
    // alert(`Стоимость покупки: ${totalPrice} рублей`);
    // console.log(`Стоимость покупки: ${totalPrice} рублей`);
}