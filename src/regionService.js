const parseData = require('./dataParser');

const data = parseData();

function getRegion(regionCode) {
    const region = data.find(item => item.code === regionCode);
    if (!region) {
        return null;
    }

    const provinsi = data.find(item => item.parts.length === 1 && item.parts[0] === region.parts[0]);
    const kabupaten = data.find(item => item.parts.length === 2 && item.parts[0] === region.parts[0] && item.parts[1] === region.parts[1]);
    const kecamatan = data.find(item => item.parts.length === 3 && item.parts[0] === region.parts[0] && item.parts[1] === region.parts[1] && item.parts[2] === region.parts[2]);
    const desa = region.parts.length === 4 ? region : null;

    return {
        provinsi: provinsi ? provinsi.name : null,
        kab: kabupaten ? kabupaten.name : null,
        kecamatan: kecamatan ? kecamatan.name : null,
        desa: desa ? desa.name : null
    };
}

function getProvinsi(provinsiCode) {
    return data.filter(item => item.parts.length === 1 && item.parts[0] === provinsiCode).map(item => item.name);
}

function getKota(kotaCode) {
    return data.filter(item => item.parts.length === 2 && item.parts[1] === kotaCode).map(item => item.name);
}

function getKecamatan(kecamatanCode) {
    return data.filter(item => item.parts.length === 3 && item.parts[2] === kecamatanCode).map(item => item.name);
}

function getDesa(desaCode) {
    return data.filter(item => item.parts.length === 4 && item.parts[3] === desaCode).map(item => item.name);
}

module.exports = {
    getRegion,
    getProvinsi,
    getKota,
    getKecamatan,
    getDesa
};
