function calculateOrder() {
    var name = document.getElementById('name');
    var number = document.getElementById('number');
    var email = document.getElementById('email');
    var output = document.getElementById('order');

    var dishes = document.getElementsByClassName('dish');

    var total = 0;

    output.innerHTML = '';

    if (verifyQuantity && verifyDataEntry(name, number, email))
    {
        output.innerHTML = `<p>Caro <strong>${name.value}</strong></p> <br> Seguem os dados do seu pedido. <br><br> O seu pedido é: <br> <ul>`;

        for (var i = 0; i < dishes.length; i++)
        {
            var dish_name = dishes[i].querySelector('.dish-name').innerText.trim();
            var price = parseFloat(dishes[i].querySelector('.dish-price > input[name="price"]').value);
            var quantity = parseFloat(dishes[i].querySelector(`input[id="${i + 1}"]`).value);

            if (quantity > 0)
            {
                output.innerHTML += `<li>Prato: ${dish_name} - Preço unitário: R$ ${price} - Quantidade: ${quantity} - Total: R$ ${price * quantity}</li>`;

                total += price * quantity;
            }
        }

        output.innerHTML += `</ul> <p class="final-price"><strong>Preço final R$ ${total}</strong></p>`;
    }
}

function verifyQuantity()
{
    var dishes = document.getElementsByClassName('dish');
    var quantity = 0;

    for (var i = 0; i < dishes.length; i++)
    {
        quantity += parseFloat(dishes[i].querySelector(`input[id="${i + 1}"]`).value);
    }

    if (quantity > 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function verifyDataEntry(name, number, email) {
    var allowed = true;

    if (!name.value)
    {
        document.querySelector('label[for="name"]').innerHTML = "Insira seu nome";
        allowed = false;
    }
    else
    {
        document.querySelector('label[for="name"]').innerHTML = "";
    }

    if (!number.value)
    {
        document.querySelector('label[for="number"]').innerHTML = "Insira seu número";
        allowed = false;
    }
    else
    {
        document.querySelector('label[for="number"]').innerHTML = "";
    }

    if (!email.value)
    {
        document.querySelector('label[for="email"]').innerHTML = "Insira seu email";
        allowed = false;
    }
    else
    {
        document.querySelector('label[for="email"]').innerHTML = "";
    }

    return allowed;
}