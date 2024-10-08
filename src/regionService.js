const parseData = require("./dataParser");

const data = parseData();

function formatRegionCode(regionCode) {
  if (regionCode.length !== 10) {
    throw new Error("Invalid region code length. Expected length is 10.");
  }
  // Membagi kode menjadi segmen 2, 2, 2, dan sisanya, lalu menggabungkan dengan titik
  return `${regionCode.slice(0, 2)}.${regionCode.slice(
    2,
    4
  )}.${regionCode.slice(4, 6)}.${regionCode.slice(6)}`;
}

function getRegion(regionCode) {
  const formattedCode = formatRegionCode(regionCode);
  const region = data.find((item) => item.code === formattedCode);
  if (!region) {
    // Cek apakah bagian setelah 4 digit pertama adalah 000000
    if (regionCode.slice(4) === "000000") {
      const provinsi = data.find(
        (item) =>
          item.parts.length === 1 && item.parts[0] === regionCode.slice(0, 2)
      );
      const kabupaten = data.find(
        (item) =>
          item.parts.length === 2 &&
          item.parts[0] === regionCode.slice(0, 2) &&
          item.parts[1] === regionCode.slice(2, 4)
      );

      return {
        provinsi: provinsi ? provinsi.name : null,
        kab: kabupaten ? kabupaten.name : null,
        lokasi: "di atas 12 mil laut",
      };
    }
  }

  const provinsi = data.find(
    (item) => item.parts.length === 1 && item.parts[0] === region.parts[0]
  );
  const kabupaten = data.find(
    (item) =>
      item.parts.length === 2 &&
      item.parts[0] === region.parts[0] &&
      item.parts[1] === region.parts[1]
  );
  const kecamatan = data.find(
    (item) =>
      item.parts.length === 3 &&
      item.parts[0] === region.parts[0] &&
      item.parts[1] === region.parts[1] &&
      item.parts[2] === region.parts[2]
  );
  const desa = region.parts.length === 4 ? region : null;

  return {
    provinsi: provinsi ? provinsi.name : null,
    kab: kabupaten ? kabupaten.name : null,
    kecamatan: kecamatan ? kecamatan.name : null,
    desa: desa ? desa.name : null,
  };
}

function getProvinsi(provinsiCode) {
  return data
    .filter((item) => item.parts.length === 1 && item.parts[0] === provinsiCode)
    .map((item) => item.name);
}

function getKota(kotaCode) {
  return data
    .filter((item) => item.parts.length === 2 && item.parts[1] === kotaCode)
    .map((item) => item.name);
}

function getKecamatan(kecamatanCode) {
  return data
    .filter(
      (item) => item.parts.length === 3 && item.parts[2] === kecamatanCode
    )
    .map((item) => item.name);
}

function getDesa(desaCode) {
  return data
    .filter((item) => item.parts.length === 4 && item.parts[3] === desaCode)
    .map((item) => item.name);
}

module.exports = {
  getRegion,
  getProvinsi,
  getKota,
  getKecamatan,
  getDesa,
};
