import { BASE_URL } from './constant';
import { showToastWithGravityAndOffset } from '../components/_Toasview';
//GET] 
export const API_DATAJADWALSHOLAT=async()=>{
  let dataReturn;
  // showToastWithGravityAndOffset("GET : " + BASE_URL)
  let respond = await fetch("https://api.pray.zone/v2/times/today.json?city=padang", {
    method: "GET",
  }).then(response => response.json()).then(responseJson => {
    // console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn; 
}
export const API_DATADONASI=async()=>{
  let dataReturn;
  // showToastWithGravityAndOffset("GET : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/datadonasi/", {
    method: "GET",
  }).then(response => response.json()).then(responseJson => {
    // console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn; 
}
export const API_DATAJENISPENERIMA=async()=>{
  let dataReturn;
  // showToastWithGravityAndOffset("GET : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/dataJenisPenerima/", {
    method: "GET",
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn; 
}
export const API_DATALEVEL=async()=>{
  let dataReturn;
  // showToastWithGravityAndOffset("GET : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/datauser/level.php", {
    method: "GET",
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn; 
}
export const API_DATAHARI=async()=>{
  let dataReturn;
  // showToastWithGravityAndOffset("GET : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/dataHari/", {
    method: "GET",
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn; 
}
export const API_DATAPROFIL=async()=>{
  let dataReturn;
  // showToastWithGravityAndOffset("GET : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/dataprofilmesjid/", {
    method: "GET",
  }).then(response => response.json()).then(responseJson => {
    // console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn; 
}
export const API_DATAUSER=async()=>{
  let dataReturn;
  // showToastWithGravityAndOffset("GET : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/datauser/", {
    method: "GET",
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_DATAUANGKELUARLAINNYA=async()=>{
  let dataReturn;
  // showToastWithGravityAndOffset("GET : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/dataUangKeluarLainnya/", {
    method: "GET",
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_DATAPENERIMA=async()=>{
  let dataReturn;
  // showToastWithGravityAndOffset("GET : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/dataPenerima/", {
    method: "GET",
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_DATAUANGMASUKINFAK=async()=>{
  let dataReturn;
  // showToastWithGravityAndOffset("GET : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/dataInfakKotakAmal/", {
    method: "GET",
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_DATAUANGMASUK=async()=>{
  let dataReturn;
  // showToastWithGravityAndOffset("GET : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/dataUangMasukDonasi/", {
    method: "GET",
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_DATAKATEGORIINFAK = async () => {
  let dataReturn;
  // showToastWithGravityAndOffset("GET : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/datakategoriinfak/", {
    method: "GET",
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}

export const API_DATADONATUR = async () => {
  let dataReturn;
  // showToastWithGravityAndOffset("GET : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/datadonatur/", {
    method: "GET",
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_KEGIATANMASJID = async () => {
  let dataReturn;
  // showToastWithGravityAndOffset("GET : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/datakegiatanmesjid/", {
    method: "GET",
  }).then(response => response.json()).then(responseJson => {
    // console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_KEGIATAN = async () => {
  let dataReturn;
  // showToastWithGravityAndOffset("GET : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/dataKegiatan/", {
    method: "GET",
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_PEMATERI = async () => {
  let dataReturn;
  // showToastWithGravityAndOffset("GET : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/dataPemateri/", {
    method: "GET",
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}

export const API_CARIDATADONASI = async (res) => {
  let dataReturn;
  let formdata = new FormData();
  console.log("Data yang akan dikirm ke api");
  console.log(res);
  formdata.append("key", res)
  // showToastWithGravityAndOffset("Search from : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/datadonasi/cari.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_CARIDATAPEMATERI = async (res) => {
  let dataReturn;
  let formdata = new FormData();
  console.log("Data yang akan dikirm ke api");
  console.log(res);
  formdata.append("key", res)
  // showToastWithGravityAndOffset("Search from : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/dataPemateri/cari.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_CARIDONATUR = async (res) => {
  let dataReturn;
  let formdata = new FormData();
  console.log("Data yang akan dikirm ke api");
  console.log(res);
  formdata.append("key", res)
  // showToastWithGravityAndOffset("Search from : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/datadonatur/cari.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}

export const API_DATAUANGKELUARLAINNYADELETE = async (res) => {
  let dataReturn;
  let formdata = new FormData();
  console.log("Data yang akan dikirm ke api");
  console.log(res);
  formdata.append("key", res)
  ////showToastWithGravityAndOffset("DELETE : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/dataUangKeluarLainnya/delete.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_INFAKMASUKDELETE = async (res) => {
  let dataReturn;
  let formdata = new FormData();
  console.log("Data yang akan dikirm ke api");
  console.log(res);
  formdata.append("key", res)
  ////showToastWithGravityAndOffset("DELETE : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/dataInfakKotakAmal/delete.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_DONMASUKDELETE = async (res) => {
  let dataReturn;
  let formdata = new FormData();
  console.log("Data yang akan dikirm ke api");
  console.log(res);
  formdata.append("key", res)
  ////showToastWithGravityAndOffset("DELETE : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/dataUangMasukDonasi/delete.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}

export const API_DATAPENERIMADONASIDELETE = async (res) => {
  let dataReturn;
  let formdata = new FormData();
  console.log("Data yang akan dikirm ke api");
  console.log(res);
  formdata.append("key", res)
  ////showToastWithGravityAndOffset("DELETE : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/dataPenerima/delete.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_KEGIATANDELETE = async (res) => {
  let dataReturn;
  let formdata = new FormData();
  console.log("Data yang akan dikirm ke api");
  console.log(res);
  formdata.append("key", res)
  ////showToastWithGravityAndOffset("DELETE : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/datakegiatanmesjid/delete.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_DONASIDELETE = async (res) => {
  let dataReturn;
  let formdata = new FormData();
  console.log("Data yang akan dikirm ke api");
  console.log(res);
  formdata.append("iddon_penerima", res)
  showToastWithGravityAndOffset("DELETE : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/datadonasi/delete.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_DONATURDELETE = async (res) => {
  let dataReturn;
  let formdata = new FormData();
  console.log("Data yang akan dikirm ke api");
  console.log(res);
  formdata.append("kode_datadonatur", res)
  showToastWithGravityAndOffset("DELETE : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/datadonatur/delete.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_profilmesjidupdate= async(res)=>{
  var e = res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("notelp_informasi", e.notelp_informasi)
  formdata.append("norek_informasi", e.norek_informasi)
  formdata.append("anrek_informasi", e.anrek_informasi)
  formdata.append("bank_rekening", e.bank_rekening)
  formdata.append("id_penanggungjwb", e.id_penanggungjwb)

  let respond = await fetch(BASE_URL + "backendmujahiddinapp/dataprofilmesjid/update.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {

    console.log(responseJson);
    return responseJson;
  }).catch(error => {
    console.log(error);
    return error;
  });
  dataReturn = respond;
  return dataReturn;
}
export const API_profilmesjid = async (res) => {
  var e = res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("notelp_informasi", e.notelp_informasi)
  formdata.append("norek_informasi", e.norek_informasi)
  formdata.append("anrek_informasi", e.anrek_informasi)
  formdata.append("bank_rekening", e.bank_rekening)
  formdata.append("id_penanggungjwb", e.id_penanggungjwb)

  let respond = await fetch(BASE_URL + "backendmujahiddinapp/dataprofilmesjid/insert.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {

    console.log(responseJson);
    return responseJson;
  }).catch(error => {
    console.log(error);
    return error;
  });
  dataReturn = respond;
  return dataReturn;
}

export const API_USERDELETE = async (res) => {
  let dataReturn;
  let formdata = new FormData();
  console.log("Data yang akan dikirm ke api");
  console.log(res);
  formdata.append("kode_user", res)
  showToastWithGravityAndOffset("DELETE : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/datauser/delete.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_PEMATERIDELETE = async (res) => {
  let dataReturn;
  let formdata = new FormData();
  console.log("Data yang akan dikirm ke api");
  console.log(res);
  formdata.append("kode_pemateri", res)
  showToastWithGravityAndOffset("DELETE : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/dataPemateri/delete.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_KATEGORIINFAKDELETE=async(res)=>{
  let dataReturn;
  let formdata = new FormData();
  console.log("Data yang akan dikirm ke api");
  console.log(res);
  formdata.append("kodkatgr_infak", res)
  // showToastWithGravityAndOffset("DELETE : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/datakategoriinfak/delete.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
//POST API_INPUTDATADONASI
export const API_UPDATEDATADONASI =  async(res) => {
  var e=res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("iddon_penerima",e.iddon_penerima )
  formdata.append("tanggal_penerima", e.tanggal_penerima)
  formdata.append("id_penerima", e.id_penerima)
  formdata.append("id_jenispenerima", e.id_jenispenerima)
  formdata.append("jumlah_donasi", e.jumlah_donasi)

  let respond = await fetch(BASE_URL+"backendmujahiddinapp/datadonasi/update.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });
  dataReturn = respond;
  return dataReturn;
}
export const API_INPUTDATADONASI =  async(res) => {
  var e=res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("iddon_penerima",e.iddon_penerima )
  formdata.append("tanggal_penerima", e.tanggal_penerima)
  formdata.append("id_penerima", e.id_penerima)
  formdata.append("id_jenispenerima", e.id_jenispenerima)
  formdata.append("jumlah_donasi", e.jumlah_donasi)

  let respond = await fetch(BASE_URL+"backendmujahiddinapp/datadonasi/insert.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });
  dataReturn = respond;
  return dataReturn;
}

export const API_UPDATEATAUANGKELUARLAINNYA =  async(res) => {
  var e=res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("id_keluar",e.id_keluar )
  formdata.append("tanggal_keluar", e.tanggal_keluar)
  formdata.append("uraian_keluar", e.uraian_keluar)
  formdata.append("jumlah_keluar", e.jumlah_keluar)

  let respond = await fetch(BASE_URL+"backendmujahiddinapp/dataUangKeluarLainnya/update.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });
  dataReturn = respond;
  return dataReturn;
}
export const API_INPDATAUANGKELUARLAINNYA =  async(res) => {
  var e=res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("id_keluar",e.id_keluar )
  formdata.append("tanggal_keluar", e.tanggal_keluar)
  formdata.append("uraian_keluar", e.uraian_keluar)
  formdata.append("jumlah_keluar", e.jumlah_keluar)

  let respond = await fetch(BASE_URL+"backendmujahiddinapp/dataUangKeluarLainnya/insert.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });
  dataReturn = respond;
  return dataReturn;
}

export const API_UPDATEDATADONATUR =  async(res) => {
  var e=res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("kode_datadonatur",e.kode_datadonatur )
  formdata.append("nama_datadonatur", e.nama_datadonatur)
  formdata.append("alamat_donatur", e.alamat_donatur)
  formdata.append("nohp_donatur", e.nohp_donatur)

  let respond = await fetch(BASE_URL+"backendmujahiddinapp/datadonatur/update.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });
  dataReturn = respond;
  return dataReturn;
}
export const API_INPUTDONATUR =  async(res) => {
  var e=res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("kode_datadonatur",e.kode_datadonatur )
  formdata.append("nama_datadonatur", e.nama_datadonatur)
  formdata.append("alamat_donatur", e.alamat_donatur)
  formdata.append("nohp_donatur", e.nohp_donatur)

  let respond = await fetch(BASE_URL+"backendmujahiddinapp/datadonatur/insert.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });
  dataReturn = respond;
  return dataReturn;
}

export const API_UPDATEINFAKKOTAKAMAL = async (res)=>{
  var e=res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("id_datainfak",e.id_datainfak )
  formdata.append("tanggal_datainfak", e.tanggal_datainfak)
  formdata.append("idkatgr_datainfak", e.idkatgr_datainfak)
  formdata.append("jumlah_datainfak", e.jumlah_datainfak)

  let respond = await fetch(BASE_URL+"backendmujahiddinapp/dataInfakKotakAmal/update.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });
  dataReturn = respond;
  return dataReturn;
}
export const API_INPUTDATAUANGMASUKINFAK = async (res)=>{
  var e=res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("id_datainfak",e.id_datainfak )
  formdata.append("tanggal_datainfak", e.tanggal_datainfak)
  formdata.append("idkatgr_datainfak", e.idkatgr_datainfak)
  formdata.append("jumlah_datainfak", e.jumlah_datainfak)

  let respond = await fetch(BASE_URL+"backendmujahiddinapp/dataInfakKotakAmal/insert.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });
  dataReturn = respond;
  return dataReturn;
}

export const API_UPDATEDATAUANGMASUKDONASI =  async(res) => {
  var e=res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("id_uangmasuk",e.id_uangmasuk )
  formdata.append("tanggal_donmasuk", e.tanggal_donmasuk)
  formdata.append("jumlah_donmasuk", e.jumlah)
  formdata.append("iddon_donmasuk", e.iddon_donmasuk)
  formdata.append("ket_donmasuk", e.ket_donmasuk)

  let respond = await fetch(BASE_URL+"backendmujahiddinapp/dataUangMasukDonasi/update.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });
  dataReturn = respond;
  return dataReturn;
}
export const API_INPUTDATAUANGMASUKDONASI =  async(res) => {
  var e=res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("id_uangmasuk",e.id_uangmasuk )
  formdata.append("tanggal_donmasuk", e.tanggal_donmasuk)
  formdata.append("jumlah_donmasuk", e.jumlah)
  formdata.append("iddon_donmasuk", e.iddon_donmasuk)
  formdata.append("ket_donmasuk", e.ket_donmasuk)

  let respond = await fetch(BASE_URL+"backendmujahiddinapp/dataUangMasukDonasi/insert.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });
  dataReturn = respond;
  return dataReturn;
}

export const API_UPDATEDATAKATEGORI =  async(res) => {
  var e=res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("kodkatgr_infak",e.kodkatgr_infak )
  formdata.append("namakatgr_infak", e.namakatgr_infak)

  let respond = await fetch(BASE_URL+"backendmujahiddinapp/datakategoriinfak/update.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });
  dataReturn = respond;
  return dataReturn;
}
export const API_kategori_infak =  async(res) => {
  var e=res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("kodkatgr_infak",e.kodkatgr_infak )
  formdata.append("namakatgr_infak", e.namakatgr_infak)

  let respond = await fetch(BASE_URL+"backendmujahiddinapp/datakategoriinfak/insert.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });
  dataReturn = respond;
  return dataReturn;
}
// export const API_donatur =  async(res) => {
//   var e=res;
//   let dataReturn;
//   let formdata = new FormData();

//   formdata.append("kode_datadonatur",e.kode_datadonatur )
//   formdata.append("nama_datadonatur", e.nama_datadonatur)
//   formdata.append("alamat_donatur", e.alamat_donatur)
//   formdata.append("nohp_donatur", e.nohp_donatur)

//   let respond = await fetch(BASE_URL+"backendmujahiddinapp/datadonatur/insert.php", {
//     method: "POST",
//     headers: { 'Content-Type': "multipart/form-data" },
//     body: formdata,
//   }).then(response => response.json()).then(responseJson => {
    
//     console.log(responseJson);
//     return responseJson
//   }).catch(error => {
//     console.log(error);
//     return error
//   });
//   dataReturn = respond;
//   return dataReturn;
// }
 
export const API_UPDATEDATAPEMATERI = async (res) => {
  var e = res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("kode_pemateri", e.kode_pemateri)
  formdata.append("nama_pemateri", e.nama_pemateri)
  // showToastWithGravityAndOffset("POST : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/dataPemateri/update.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_PEMATERIINSERT = async (res) => {
  var e = res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("kode_pemateri", e.kode_pemateri)
  formdata.append("nama_pemateri", e.nama_pemateri)
  showToastWithGravityAndOffset("POST : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/dataPemateri/insert.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}

export const API_UPDATEDATAUSER = async (res) => {
  var e = res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("kode_user", e.kode_user)
  formdata.append("nama_user", e.nama_user)
  formdata.append("username_user", e.username_user)
  formdata.append("password_user", e.password_user)
  formdata.append("level_user", e.level_user)
  // showToastWithGravityAndOffset("POST : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/datauser/update.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}
export const API_user = async (res) => {
  var e = res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("kode_user", e.kode_user)
  formdata.append("nama_user", e.nama_user)
  formdata.append("username_user", e.username_user)
  formdata.append("password_user", e.password_user)
  formdata.append("level_user", e.level_user)
  // showToastWithGravityAndOffset("POST : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/datauser/insert.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    return error
  });

  dataReturn = respond;
  return dataReturn;
}

export const API_UPDATEDATAPENERIMA =async(res)=>{
  var e = res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("id_dataspenerima", e.id_dataspenerima)
  formdata.append("nama_penerima", e.nama_penerima)
  formdata.append("alamat_penerima", e.alamat_penerima)
  formdata.append("nohp_penerima", e.nohp_penerima)

  let respond = await fetch(BASE_URL+"backendmujahiddinapp/dataPenerima/update.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    showToastWithGravityAndOffset(error)
    return error
  });
  
  dataReturn = respond;
  return dataReturn;
}
export const API_INPUTDATAPENERIMA =async(res)=>{
  var e = res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("id_dataspenerima", e.id_dataspenerima)
  formdata.append("nama_penerima", e.nama_penerima)
  formdata.append("alamat_penerima", e.alamat_penerima)
  formdata.append("nohp_penerima", e.nohp_penerima)

  let respond = await fetch(BASE_URL+"backendmujahiddinapp/dataPenerima/insert.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    showToastWithGravityAndOffset(error)
    return error
  });
  
  dataReturn = respond;
  return dataReturn;
}

export const API_UPDATEDATAKEGIATANMASJID = async (res) => {
  var e = res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("no_datakegtn", e.no_datakegtn)
  formdata.append("kode_datakegiatan", e.kode_datakegiatan)
  formdata.append("hari_kegiatan", e.hari_kegiatan)
  formdata.append("waktu_kegiatan", e.waktu_kegiatan)
  formdata.append("idpematerikegiatan", e.idpematerikegiatan)

  let respond = await fetch(BASE_URL+"backendmujahiddinapp/datakegiatanmesjid/update.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    showToastWithGravityAndOffset(error)
    return error
  });
  
  dataReturn = respond;
  return dataReturn;
}
export const API_KEGIATANMASJIDINSERT = async (res) => {
  var e = res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("kode_datakegiatan", e.kode_datakegiatan)
  formdata.append("hari_kegiatan", e.hari_kegiatan)
  formdata.append("waktu_kegiatan", e.waktu_kegiatan)
  formdata.append("idpematerikegiatan", e.idpematerikegiatan)

  let respond = await fetch(BASE_URL+"backendmujahiddinapp/datakegiatanmesjid/insert.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    // console.log(responseJson);
    return responseJson
  }).catch(error => {
    console.log(error);
    showToastWithGravityAndOffset(error)
    return error
  });
  
  dataReturn = respond;
  return dataReturn;
}
