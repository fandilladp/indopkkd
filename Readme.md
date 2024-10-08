
# indopkkd

Get Indonesian region details from a region code.

## Benefits and Ease of Use

The `indopkkd` package simplifies the process of retrieving detailed information about Indonesian regions based on standardized region codes. By using this package, you can quickly access hierarchical region data, including provinces, cities, sub-districts, and villages, without manually parsing and searching through raw data files.

### Key Benefits:
- **Efficiency:** Quickly retrieve detailed information about any region in Indonesia using its unique code.
- **Accuracy:** Ensures accurate mapping of region codes to their respective names.
- **Ease of Use:** Simple API functions to get region details, making integration into your projects seamless.
- **Scalability:** Easily expandable to include more regions or detailed information as needed.

## Installation

You can install this package via npm:

```bash
npm install indopkkd
```

## Usage

Here are some examples of how to use the `indopkkd` package to get details of Indonesian regions based on their codes.

### Import the package

```
const { getRegion, getProvinsi, getKota, getKecamatan, getDesa } = require('indopkkd');
```

### Get Region Details

Get full region details for a specific region code.

```
const regionDetails = getRegion('1101012001');
console.log(regionDetails);
// Output: 
// {
//   provinsi: 'ACEH',
//   kab: 'KAB. ACEH SELATAN',
//   kecamatan: 'Bakongan',
//   desa: 'Keude Bakongan'
// }
```

### Get Province (Provinsi) Names

Get all province names for a specific province code.

```
const provinsi = getProvinsi('11');
console.log(provinsi);
// Output: [ 'ACEH' ]
```

### Get City (Kota) Names

Get all city names for a specific city code.

```
const kota = getKota('01');
console.log(kota);
// Output: [ 'KAB. ACEH SELATAN' ]
```

### Get Sub-district (Kecamatan) Names

Get all sub-district names for a specific sub-district code.

```
const kecamatan = getKecamatan('01');
console.log(kecamatan);
// Output: [ 'Bakongan', 'Kluet Utara' ]
```

### Get Village (Desa) Names

Get all village names for a specific village code.

```
const desa = getDesa('2001');
console.log(desa);
// Output: [ 'Keude Bakongan', 'Fajar Harapan' ]
```

By following these examples, you can efficiently retrieve detailed information about Indonesian regions using the `indopkkd` package.
