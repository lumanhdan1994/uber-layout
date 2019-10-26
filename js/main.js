// Mục đích: tính tiền Uber
// Ngày tạo: 27-05-2019

function tinhTien() {
    var _soKm = parseFloat(document.getElementById('soKm').value);
    var _thoiGiancho = parseFloat(document.getElementById('thoiGianCho').value);

    var _loaiXe = KTloaixe();
    if (_loaiXe === '') {
        alert('Vui Lòng Chọn Loại Xe')
        return;
    }
    var _thanhTien;
    switch (_loaiXe) {
        case 'uberX':
            {
                _thanhTien = ThanhTien(_soKm, _thoiGiancho, 8000, 12000, 10000, 2000);
                break;
            }
        case 'uberSUV':
            {
                _thanhTien = ThanhTien(_soKm, _thoiGiancho, 9000, 14000, 12000, 3000);
                break;
            }
        case 'uberBlack':
            {
                _thanhTien = ThanhTien(_soKm, _thoiGiancho, 10000, 16000, 14000, 4000);
                break;
            }
    }


    var _xuatTien = document.getElementById('xuatTien');
    _xuatTien.innerHTML = _thanhTien;

    var _hienthi = document.getElementById('divThanhTien');
    _hienthi.style.display = 'block';
    //document.getElementById('divThanhTien').style.display ='block';
}

// mục đích kiểm tra loại xe để tính đúng giá tiền
function KTloaixe() {
    var _uberX = document.getElementById('uberX').checked;
    var _uberSUV = document.getElementById('uberSUV').checked;
    var _uberBlack = document.getElementById('uberBlack').checked;

    var loaiXe = '';

    if (_uberX === true) {
        loaiXe = 'uberX';
    } else if (_uberSUV === true) {
        loaiXe = 'uberSUV';
    } else if (_uberBlack === true) {
        loaiXe = 'uberBlack';
    }
    return loaiXe;
}

function ThanhTien(_soKm, _thoiGiancho, _gia1km, _gia20km, _giatren20km, _giaCho) {
    var _thanhTien;
    var _tienCho = _thoiGiancho * _giaCho;
    if (_soKm <= 1) {
        _thanhTien = (_soKm * _gia1km) + _tienCho;
    } else if (_soKm <= 20) {
        _thanhTien = (1 * _gia1km + (_soKm - 1) * _gia20km) + _tienCho;
    } else if (_soKm > 20) {
        _thanhTien = (1 * _gia1km + 19 * _gia20km + (_soKm - 20) * _giatren20km) + _tienCho;
    }
    return _thanhTien;
}