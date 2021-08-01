<?php
include '../koneksi.php';
if (isset($_POST['iddon_penerima'])) {
    $iddonpenerima = $_POST['iddon_penerima'];
    $idpenerima = $_POST['id_penerima'];
    $idjenispenerimadon = $_POST['id_jenispenerima_don'];
    $jumlah = $_POST['jumlah'];
   
    $query = mysqli_query($conn, " INSERT INTO `db_mujahiddin`.`tb_datapenerimaan` (`iddon_penerima`, `id_penerima`, `id_jenispenerima_don`, `jumlah`) 
    VALUES (' $iddonpenerima', '$idpenerima', '$idjenispenerimadon', ' $jumlah'); ");


    if ($query) {
        $data['pesan'] = "Data Anda Berhasil";
        $data['status'] = true;
    } else {
        $data['pesan'] = "Data anda tidak valid";
        $data['status'] = false;
    }
} else {
    $data['pesan'] = "Data Tidak Dapat Diakses";
    $data['status'] = false;
}
echo json_encode($data);
