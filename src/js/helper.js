function convertToObject(obj, el){

    obj = {};
    for (var i in el){
        obj[i] = el[i];
    }

    return obj;
}

export {convertToObject};