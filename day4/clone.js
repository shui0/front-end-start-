function deepClone(src){
    let type = Object.prototype.toString.call(src).slice(8,-1);
    let dist = null;
    if (['Number','String','Boolean','Null','Undefined'].includes(type)){
        return src;
    }
    else if(type === 'Array') dist = [];
    else if(type === 'Object') dist = {};
    else if(type === 'Date') dist = new Date(src);
    else if(type === 'RegExp') dist = new RegExp(src.sorce,src.flags);
    else if(type === 'Function') dist = src.bind(this);
    for(let key in src){
        // 只克隆自有属性
        // if (src.hasOwnProperty(key)){
        //     dist[key] = deepClone(src[key]);
        // }
        dist[key] = deepClone(src[key]);
    }
    return dist;

}

// 解决循环引用

function deepClone(src,cache = []){
    for (let i =0;i<cache.length;i++){
        if (src === cache[i].src) return cache[i].dist;
    }
    let type = Object.prototype.toString.call(src).slice(8,-1);
    let dist = null;
    if (['Number','String','Boolean','Null','Undefined'].includes(type)){
        return src;
    }
    else if(type === 'Array') dist = [];
    else if(type === 'Object') dist = {};
    else if(type === 'Date') dist = new Date(src);
    else if(type === 'RegExp') dist = new RegExp(src.sorce,src.flags);
    else if(type === 'Function') dist = src.bind(this);
    cache.push({src:src,dist:dist});
    for(let key in src){
        // 只克隆自有属性
        // if (src.hasOwnProperty(key)){
        //     dist[key] = deepClone(src[key]);
        // }
        dist[key] = deepClone(src[key],cache);
    }
    return dist;

}