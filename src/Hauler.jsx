
const order = 110;

const today =  new Date(2020,8,3);

const staffjob = [
    {name: 'Bùi Trung Quốc',
    job: 'Hàn trống'},
    {name: 'Lý Thị Liên',
    job: 'Sửa cong'},
    {name: 'Lê Thị Tại',
    job: 'Cắt bậc cong'},
    {name: 'Trần Thị Vân',
    job: 'Ráp bon lưới'},
    {name: 'Thị Kim Trường',
    job: 'Hàn lưới'},
    {name: 'Võ Thị Cưng',
    job: 'Mài lưới'}
]

export const fabricationStep =[
    {part: 'DAN CHAN', code: '20005.001', itemQty: 1,
    step: 'Ty bánh đè; Bánh kéo chủ động; Cụm căng xích'},
    {part: 'HOP DIEU KHIEN LAI', code: '20005.005', itemQty: 1,
    step: 'Bắt lên khung; Bắt ke'},
    {part: 'KHUNG CHE ĐỘNG CƠ', code: '20005.007', itemQty: 1,
    step: 'Bắt chân khung; Bắt yên ngồi'},
    {part: 'THÙNG DẦU', code: '20005.012', itemQty: 1,
    step: 'Bắt vào khung'},
    {part: 'TẤM ĐẾ HỘP LÁI', code: '20005.016.01', itemQty: 1,
    step: 'Bắt vào hộp lái'},
    {part: 'BẢNG CÔNG TẮC', code: '20005.019', itemQty: 1,
    step: 'Bắt vào hộp lái'},
    {part: 'HỘP ĐỒ NGHỀ', code: '20005.020', itemQty: 1,
    step: 'Bắt vào khung'},
    {part: 'KHUNG CHE KÉT NƯỚC', code: '20005.023', itemQty: 1,
    step: 'Bắt vào khung; Bắt két nước'},
    {part: 'BỘ THẮNG BỘ GA', code: '20005.098', itemQty: 1,
    step: 'Hàn vào dây; Nối dây; Nối dây; Nối dây'},
    {part: 'HỘP SỐ', code: '20005.099', itemQty: 1,
    step: 'Bắt với gối; Cần tiến lùi; Bắt vào khung; Nối cần chuyển số; Gối đỡ giò đạp thắng; Cần kích thắng; Bàn đạp thắng'},
    {part: 'ĐỘNG CƠ', code: '20005.096', itemQty: 1,
    step: 'Nối co xả; Bánh đà; Bắt lên gối đỡ; Trái lăn'},
    {part: 'BỘ LỌC KHÍ', code: '20005.097', itemQty: 1,
    step: 'Bắt chân'},
    {part: 'DÀN MÁI CHE', code: '20005.095', itemQty: 1,
    step: 'Bắt chân; Bắt chân và khung; Bắt khunh và mui'}
]

const productivity = '\
20070.099.01-1 x0;\
20070.099.01-2 x3;\
20070.099.02-1 x6;\
20070.099.02-2 x5;\
20070.099.03-1 x6;\
20070.099.03-2 x6;\
20070.099.03-3 x4;\
20070.099.04-1 x6;\
20070.099.04-2 x10;\
20070.099.04-3 x5;\
20070.099-1 x6;\
20070.099-2 x1;\
20070.099-3 x8\
';

export  const storage001 = [{"code":"A20005.095-3","part":"Bulong kẽm M6x40","Qty":"8"},{"code":"A20005.095-2","part":"Bulong kẽm M10x20","Qty":"8"},{"code":"A20005.095-1","part":"Bulong kẽm M10x50","Qty":"3"},{"code":"A20005.097-1","part":"Bulong kẽm M8x50","Qty":"4"},{"code":"A20005.096-3","part":"Bulong thép răng nhuyễn M16x40","Qty":"6"},{"code":"A20005.096-2","part":"Bulong thép M12x35","Qty":"6"},{"code":"A20005.096-1","part":"Bulong thép M10x30","Qty":"14"},{"code":"A20005.099-2","part":"Bulong kẽm M6x40","Qty":"2"},{"code":"A20005.099-1","part":"Bulong thép răng nhuyễn M12x30","Qty":"8"},{"code":"A20005.098-3","part":"Bulong kẽm M8x100","Qty":"2"},{"code":"A20005.098-2","part":"Bulong kẽm M6x20","Qty":"1"},{"code":"A20005.098-1","part":"Bulong kẽm M8x30","Qty":"4"},{"code":"A20005.023-2","part":"Bulong kẽm M8x15","Qty":"6"},{"code":"A20005.023-1","part":"Bulong kẽm M10x30","Qty":"6"},{"code":"A20005.020-1","part":"Bulong kẽm M8x50","Qty":"4"},{"code":"A20005.019-1","part":"Bulong kẽm M8x20","Qty":"4"},{"code":"A20005.016.01-1","part":"Bulong kẽm M8x20","Qty":"8"},{"code":"A20005.012-1","part":"Bulong kẽm M8x100","Qty":"2"},{"code":"A20005.007-2","part":"Bulong kẽm M8x50","Qty":"4"},{"code":"A20005.007-1","part":"Bulong kẽm M10x30","Qty":"4"},{"code":"A20005.005-2","part":"Bulong kẽm M8x20","Qty":"24"},{"code":"A20005.005-1","part":"Bulong kẽm M10x20","Qty":"7"},{"code":"A20005.001-3","part":"Bulong thép M10x20","Qty":"1"},{"code":"A20005.001-2","part":"Bulong thép răng nhuyễn M14x40","Qty":"6"},{"code":"A20005.001-1","part":"Bulong thép M10x20 (mũ S14)","Qty":"2"},{"code":"A20005.099-3","part":"Bulong kẽm M12x40","Qty":"3"},{"code":"A20005.099-4","part":"Bulong kẽm M8x40","Qty":"3"},{"code":"A20005.099-5","part":"Bulong thép M12x100","Qty":"1"},{"code":"A20005.099-6","part":"Bulong kẽm M8x40","Qty":"2"},{"code":"A20005.099-7","part":"Bulong kẽm M6x40","Qty":"1"},{"code":"A20005.096-4","part":"Đai ốc thép M20","Qty":"2"},{"code":"A20005.098-4","part":"Bulong kẽm M6x40","Qty":"1"}]
// alert(storage001[0].code)

function JoinTable(Master, Slave) {
Master.forEach((main,i) => {
// console.log(Slave[Slave.findIndex(aux => aux.step === main.step)]);
var k = Slave[Slave.findIndex(aux => aux.step === main.step)];
// console.log( Master.i);
if (!(k === undefined)) {
    // console.log(Master[i]);    
    Master[i].Qty = k.Qty ; 
    // console.log(k.Qty);
} 
})

return Master

}

function CompleteJSON(mixedJSON){
    var b=[]
    mixedJSON.map(group => {
		var a = group.step.split('; ').map((astep,i)=> {
            return{
                'part': group.part,
                'itemQty': group.itemQty,
                'code': (group.code + '-'+(i+1)),
                'step': astep
            }
        })
        b = [...b,...a]
    })
	return b	
}

function TransformJSON(string){
    var a = string.split(';').map(string => {
        return {'step': string.split(' x')[0], 'Qty': Number(string.split(' x')[1])}
    })            
return a
}

function inputtable (table){
    var getJson = [];
    Array.from(table.rows).forEach(row => 
         getJson = [...getJson,...[{name: row.cells[0].innerHTML, job: row.cells[1].innerHTML}]]
    );
    return getJson;
}

function workDate(today){
var workDate = []; const Mon = today.getTime() - today.getDay()*24*3600e3;
var a=[1,2,3,4,5,6,7];
a.map(a =>    workDate=[...workDate,...[new Date(Mon+a*24*3600e3)]]
    )
return workDate
}

function Formatdate(today){
    var dd = today.getDate(); 
        var mm = today.getMonth() + 1; 
  
        var yyyy = today.getFullYear(); 
        if (dd < 10) { 
            dd = '0' + dd; 
        } 
        if (mm < 10) { 
            mm = '0' + mm; 
        } 
        return dd+'/' + mm + '/' + yyyy
}

export const ParseText ='Cắt bass lưới nhỏ dc60.dc93.dc105.inox vụn 3lyx201.cắt tl hộp khoan bui dc60.(1.2ly x 430).(1.5ly×430) (1.5ly 201) inox vụn.cắt mình nồi bui dc60(1.8lyx201) bìa inox lẻ.cắt u máng dc60.70.105.(1.5lyx201)inox vụn.'
export const item = [{"HHid":74277,"MaUser":"YMKDB","TenHang":"YM Khoan đứng bui","model":"AW70","PL_Ten":"KBD","DrivePath":"","nxgn":"2022.12.22 @ 6 @ 24743"},{"HHid":5726,"MaUser":"YMKDB","TenHang":"YM Khoan đứng bui","model":"AW70","PL_Ten":"KBD","DrivePath":"1pVBvlGwOXaxTmLqTxGG4ZPO91nTdZfSm","nxgn":"2022.09.29 @ 129 @ 97"},{"HHid":6202,"MaUser":"DC105KDB","TenHang":"DC105 Khoan đứng bui","model":"DC105","PL_Ten":"KBD","DrivePath":"1UC7ubZ9fO-mN1QCStFEeZCz5sHqmicOI","nxgn":"2022.11.26 @ 35 @ 22"},{"HHid":4825,"MaUser":"DC105KDB","TenHang":"DC105 Khoan đứng bui","model":"DC105","PL_Ten":"KBD","DrivePath":"","nxgn":"2022.10.24 @ 21 @ 21"},{"HHid":6209,"MaUser":"DC60KDB","TenHang":"DC60\/70 Khoan đứng bui","model":"DC60\/DC70","PL_Ten":"KBD","DrivePath":"1bR_s59mK-KD2xbP3WVfgDHpjcy6fHGlD","nxgn":"2022.12.27 @ 2 @ 24762"},{"HHid":937,"MaUser":"DC60KDB","TenHang":"DC60\/70 Khoan đứng bui","model":"DC60\/DC70","PL_Ten":"KBD","DrivePath":"1lheaLhFHq63HiPzidOv4KewVFsCSSz82","nxgn":"2022.09.15 @ 1 @ 254"},{"HHid":5510,"MaUser":"DC93KDB","TenHang":"DC93 Khoan đứng bui","model":"DC93","PL_Ten":"KBD","DrivePath":"1pLT_-JxFzLCwzG55r0oUvV87jerl8KPm","nxgn":"2022.12.27 @ 3 @ 24767"},{"HHid":6214,"MaUser":"DC93KDB","TenHang":"DC93 Khoan đứng bui","model":"DC93","PL_Ten":"KBD","DrivePath":"","nxgn":"2022.12.27 @ 3 @ 24758"},{"HHid":6210,"MaUser":"DC95KDB","TenHang":"DC95 Khoan đứng bui","model":"DC95","PL_Ten":"KBD","DrivePath":"1bR_s59mK-KD2xbP3WVfgDHpjcy6fHGlD","nxgn":"2022.11.26 @ 34 @ 22"},{"HHid":5008,"MaUser":"DC95KDB","TenHang":"DC95 Khoan đứng bui","model":"DC95","PL_Ten":"KBD","DrivePath":"1lheaLhFHq63HiPzidOv4KewVFsCSSz82","nxgn":"2022.10.24 @ 20 @ 21"},{"HHid":100325,"MaUser":"W102KDB","TenHang":"W102 Khoan đứng bui","model":"W102","PL_Ten":"KBD","nxgn":"2022.11.13 @ 2 @ 344"}]