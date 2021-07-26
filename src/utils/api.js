import { BASE_URL } from './constant';
import { showToastWithGravityAndOffset } from '../components/_Toasview';

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
export const API_PEMATERI = async () => {
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

const API_kegiatanmesjid = async (res) => {
  var e = res;
  let dataReturn;
  let formdata = new FormData();

  formdata.append("kode_kegiatan", e.kode_kegiatan)
  formdata.append("nama_kegiatan", e.nama_kegiatan)
  formdata.append("hari_kegiatan", e.hari_kegiatan)
  formdata.append("waktu_kegiatan", e.waktu_kegiatan)
  formdata.append("namapem_kegiatan", e.namapem_kegiatan)

  let respond = await fetch(BASE_URL+"backendmujahiddinapp/datakegiatanmesjid/insert.php", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    return responseJson
    console.log(responseJson);
  }).catch(error => {
    console.log(error);
    showToastWithGravityAndOffset(error)
    return error
  });
  
  dataReturn = respond;
  return dataReturn;
}
