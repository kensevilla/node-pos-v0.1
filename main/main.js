module.exports = function main(inputs) {
    return printInventory(inputs);
};

function printInventory(inputs){
    var receipt;
    var currentList = [];
    for(var x = 0; x < inputs.length; x++){
        if(currentList.length == 0){
            currentList.push({
                Barcode : x.Barcode,
                Name : x.Name,
                Quantity : 1,
                Unit : x.Price,
                Subtotal : x.Price
            });
        }
        else{
            for(var y = 0; y < currentList.length; y++){
                if(inputs[x].Barcode == currentList[y].Barcode){
                    currentList[y].Quantity++;
                    currentList[y].Subtotal += inputs[x].Price;
                }
            }
        }
    }

    return receipt;
}