// test/test.js
const { getRegion, getProvinsi, getKota, getKecamatan, getDesa } = require('../index');

// Test getRegion
const regionDetails = getRegion('11.01.01.2001');
console.log('getRegion("11.01.01.2001"):', regionDetails);

// Test getProvinsi
const provinsi = getProvinsi('11');
console.log('getProvinsi("11"):', provinsi);

// Test getKota
const kota = getKota('01');
console.log('getKota("01"):', kota);

// Test getKecamatan
const kecamatan = getKecamatan('01');
console.log('getKecamatan("01"):', kecamatan);

// Test getDesa
const desa = getDesa('2001');
console.log('getDesa("2001"):', desa);
