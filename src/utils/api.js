import { BASE_URL } from './constant';
import { showToastWithGravityAndOffset } from '../components/_Toasview';
//GET
export const API_DATAUANGMASUK=async()=>{
  let dataReturn;
  showToastWithGravityAndOffset("GET : " + BASE_URL)
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
  showToastWithGravityAndOffset("GET : " + BASE_URL)
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
  showToastWithGravityAndOffset("GET : " + BASE_URL)
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
  showToastWithGravityAndOffset("GET : " + BASE_URL)
  let respond = await fetch(BASE_URL + "backendmujahiddinapp/datakegiatanmesjid/", {
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
export const API_KEGIATAN = async () => {
  let dataReturn;
  showToastWithGravityAndOffset("GET : " + BASE_URL)
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
  showToastWithGravityAndOffset("GET : " + BASE_URL)
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
  showToastWithGravityAndOffset("DELETE : " + BASE_URL)
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
//POST
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
export const API_user = async (res) => {
  var e = res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("kode_user", e.kode_user)
  formdata.append("nama_user", e.nama_user)
  formdata.append("username_user", e.username_user)
  formdata.append("password_user", e.password_user)
  formdata.append("level_user", e.level_user)
  showToastWithGravityAndOffset("POST : " + BASE_URL)
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
