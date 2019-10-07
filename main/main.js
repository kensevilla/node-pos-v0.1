module.exports = function main(inputs) {
    return printInventory(inputs);
};

function printInventory(inputs){
    var receipt;
    var currentList = [];
    var hasList = false;
    var totalCost = 0;
    for(var x = 0; x < inputs.length; x++){
        hasList = false;
        for(var y = 0; y < currentList.length; y++){
            if(inputs[x].Barcode == currentList[y].Barcode){
                currentList[y].Quantity++;
                currentList[y].Subtotal += inputs[x].Price;
                hasList = true;
                break;
            }
        }
        if(!hasList){
                currentList.push({
                    Barcode : inputs[x].Barcode,
                    Name : inputs[x].Name,
                    Quantity : 1,
                    Price : inputs[x].Price,
                    Unit : inputs[x].Unit,
                    Subtotal : inputs[x].Price
                });
        }
    }
    receipt = '***<store earning no money>Receipt ***\n';
    currentList.forEach(item => {
        if(item.Unit!=='bottle') receipt += 'Name: '+ item.Name + ', Quantity: '+ item.Quantity +', Unit price: '+ item.Price.toFixed(2) +' (yuan), Subtotal: '+ item.Subtotal.toFixed(2) +' (yuan)\n';
        else receipt += 'Name: '+ item.Name + ', Quantity: '+ item.Quantity +' bottles, Unit price: '+ item.Price.toFixed(2) +' (yuan), Subtotal: '+ item.Subtotal.toFixed(2) +' (yuan)\n';
        totalCost+=item.Subtotal;
    });

    receipt += '----------------------\n';
    receipt += 'Total: '+ totalCost.toFixed(2) +' (yuan)\n';
    receipt += '**********************\n';
    return receipt;
}