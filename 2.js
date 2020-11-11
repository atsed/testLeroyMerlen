// 		stocks - остатки товара в регионе,
// 		34 - номер региона,
// 		2, 3, 4, ... 176 - номера магазинов региона,
// 		"2": "35" означает, что в магазине 2 товар в наличии в количестве 356 штук
// 	Необходимо написать на JavaScript три метода:
// 		1. получить название товара
// 		2. получить массив номеров магазинов, в которых есть товары в наличии
// 		3. найти максимальное количество товара в регионе, вернуть это количество и номер магазина
// 	Операции чтения и записи из файла можно опустить - объект можно сразу положить в переменную.



let data = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
        }
    },
    "stock": {
        "stocks": {
            "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
};

let allStores = Object.keys(data["stock"]["stocks"]["34"]);

function getName(data) {
    console.log('return1:', data["displayedName"]["displayedName"]["value"][0]);
    return data["displayedName"]["displayedName"]["value"][0];

}

function getStores(data) {
    let resultStores = [];

    for (let i = 0; i < allStores.length; i++) {
        if (data["stock"]["stocks"]["34"][allStores[i]] !== "0") {
            resultStores.push(allStores[i]);
        }
    }

    console.log("return2:", resultStores);
    return resultStores;
}

function getMaxStore(data) {
    let maxValue = data["stock"]["stocks"]["34"][allStores[0]];
    let maxStore;

    for (let i = 0; i < allStores.length; i++) {
        if (+data["stock"]["stocks"]["34"][allStores[i]] > +maxValue) {
            maxValue = data["stock"]["stocks"]["34"][allStores[i]];
            maxStore = allStores[i];
        }
    }

    console.log('return3:', `Максимальное количество товара - ${maxValue}, находятся в магазине ${maxStore}`);
    return (`Максимальное количество товара - ${maxValue}, находятся в магазине ${maxStore}`);
}

getName(data);
getStores(data);
getMaxStore(data);