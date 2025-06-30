// test/test.js
const {
  getRegion,
  getProvinsi,
  getKota,
  getKecamatan,
  getDesa,
  listProvinsi,
  listKota,
  listKecamatan,
  listDesa,
} = require('../index');

console.log('--- Testing getRegion ---');
console.log('getRegion("3574000000"):', getRegion('3574000000'));

console.log('\n--- Testing getProvinsi ---');
console.log('getProvinsi("11"):', getProvinsi('11'));

console.log('\n--- Testing getKota ---');
console.log('getKota("01"):', getKota('01'));

console.log('\n--- Testing getKecamatan ---');
console.log('getKecamatan("01"):', getKecamatan('01'));

console.log('\n--- Testing getDesa ---');
console.log('getDesa("2001"):', getDesa('2001'));

console.log('\n--- Testing Dropdown Helpers ---');
console.log('listProvinsi():', listProvinsi());
console.log('listKota("11"):', listKota('11'));
console.log('listKecamatan("01"):', listKecamatan('01'));
console.log('listDesa("01"):', listDesa('01'));
