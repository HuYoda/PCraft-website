var intelCPUprice = ['549', '799', '389', '296', '239', '189', '159', '167', '79'];
var amdCPUprice = ['737', '419', '349', '298', '329', '204', '198', '124', '107'];
var nvidiaGRAPHICprice = ['1279', '529', '1079', '539', '749', '469', '329', '219', '534'];
var amdGRAPHICprice = ['419', '332', '439', '599', '139', '129', '379', '189', '429'];
var p600price = ['64', '44', '54', '99', '74', '54', '32', '99', '69'];
var p799price = ['109', '59', '134', '119', '144', '79', '114', '109', '69'];
var p800price = ['149', '189', '149', '109', '149', '199', '154', '129', '148'];
var intelMOTHERprice = ['186', '179', '239', '73', '124', '279', '279', '74', '97'];
var amdMOTHERprice = ['299', '189', '122', '114', '79', '144', '143', '72', '168'];
var HDDprice = ['79', '104', '144', '50', '44', '151', '64', '44', '124'];
var SSDprice = ['72', '149', '119', '119', '64', '122', '129', '259', '65'];
var fullCASEprice = ['168', '299', '169', '241', '199', '193', '98', '149', '249'];
var midCASEprice = ['89', '179', '59', '239', '75', '74', '99', '79', '89'];
var DDR4price = ['489', '602', '652', '574', '1699', '285', '1199', '198', '166'];
var DDR3price = ['31', '63', '192', '34', '69', '161', '27', '83', '42'];
var airCOOLERprice = ['20', '44', '89', '24', '19', '39', '27', '52', '89'];
var liquidCOOLERprice = ['79', '139', '159', '120', '189', '64', '139', '79', '169'];
var caseFANprice = ['11', '29', '14', '10', '8', '14', '16', '9', '6'];
var ledFANprice = ['35', '114', '12', '99', '39', '86', '94', '12', '19'];

function intelCPU(){
    document.getElementById('QBcpu').style.display = 'none';
    document.getElementById('imgCPU').style.display = 'none';
    document.getElementById('intelCPU').style.display = 'flex';
    document.getElementById('intelCPU').style.flexWrap = 'wrap';
    document.getElementById('intelCPU').style.width = '100%';
    document.getElementById('intelCPU').style.height = '100%';  
}
function amdCPU(){
    document.getElementById('QBcpu').style.display = 'none';
    document.getElementById('imgCPU').style.display = 'none';
    document.getElementById('amdCPU').style.display = 'flex';
    document.getElementById('amdCPU').style.flexWrap = 'wrap';
    document.getElementById('amdCPU').style.width = '100%';
    document.getElementById('amdCPU').style.height = '100%';
}
function bestCPU(){
    document.getElementById('QBcpu').style.display = 'none';
    document.getElementById('imgCPU').style.display = 'none';
    document.getElementById('bestCPU').style.display = 'flex';
    document.getElementById('bestCPU').style.flexWrap = 'wrap';
    document.getElementById('bestCPU').style.width = '100%';
    document.getElementById('bestCPU').style.height = '100%';
}
function noneCPU(){
    document.getElementById('QBcpu').style.display = 'none';
    document.getElementById('imgCPU').style.display = 'none';
    document.getElementById('noneCPU').style.display = 'flex';
    document.getElementById('noneCPU').style.justifyContent = 'center';
    document.getElementById('noneCPU').style.alignItems = 'center';
    document.getElementById('noneCPU').style.width = '100%';
    document.getElementById('noneCPU').style.height = '100%';
    document.getElementById('QBcpuPrice').innerHTML = '0';
}
function intelCPUset(index){
    document.getElementById('QBcpuPrice').innerHTML = intelCPUprice[index];
}
function amdCPUset(index){
    document.getElementById('QBcpuPrice').innerHTML = amdCPUprice[index];
}

function nvidiaGRAPHIC(){
    document.getElementById('QBgraphic').style.display = 'none';
    document.getElementById('imgGRAPHIC').style.display = 'none';
    document.getElementById('nvidiaGRAPHIC').style.display = 'flex';
    document.getElementById('nvidiaGRAPHIC').style.flexWrap = 'wrap';
    document.getElementById('nvidiaGRAPHIC').style.width = '100%';
    document.getElementById('nvidiaGRAPHIC').style.height = '100%';
}
function amdGRAPHIC(){
    document.getElementById('QBgraphic').style.display = 'none';
    document.getElementById('imgGRAPHIC').style.display = 'none';
    document.getElementById('amdGRAPHIC').style.display = 'flex';
    document.getElementById('amdGRAPHIC').style.flexWrap = 'wrap';
    document.getElementById('amdGRAPHIC').style.width = '100%';
    document.getElementById('amdGRAPHIC').style.height = '100%';
}
function bestGRAPHIC(){
    document.getElementById('QBgraphic').style.display = 'none';
    document.getElementById('imgGRAPHIC').style.display = 'none';
    document.getElementById('bestGRAPHIC').style.display = 'flex';
    document.getElementById('bestGRAPHIC').style.flexWrap = 'wrap';
    document.getElementById('bestGRAPHIC').style.width = '100%';
    document.getElementById('bestGRAPHIC').style.height = '100%';
}
function noneGRAPHIC(){
    document.getElementById('QBgraphic').style.display = 'none';
    document.getElementById('imgGRAPHIC').style.display = 'none';
    document.getElementById('noneGRAPHIC').style.display = 'flex';
    document.getElementById('noneGRAPHIC').style.justifyContent = 'center';
    document.getElementById('noneGRAPHIC').style.alignItems = 'center';
    document.getElementById('noneGRAPHIC').style.width = '100%';
    document.getElementById('noneGRAPHIC').style.height = '100%';
    document.getElementById('QBgraphicPrice').innerHTML = '0';
}
function nvidiaGRAPHICset(index){
    document.getElementById('QBgraphicPrice').innerHTML = nvidiaGRAPHICprice[index];
}
function amdGRAPHICset(index){
    document.getElementById('QBgraphicPrice').innerHTML = amdGRAPHICprice[index];
}

function p600(){
    document.getElementById('QBpower').style.display = 'none';
    document.getElementById('imgPOWER').style.display = 'none';
    document.getElementById('p600').style.display = 'flex';
    document.getElementById('p600').style.flexWrap = 'wrap';
    document.getElementById('p600').style.width = '100%';
    document.getElementById('p600').style.height = '100%';
}
function p799(){
    document.getElementById('QBpower').style.display = 'none';
    document.getElementById('imgPOWER').style.display = 'none';
    document.getElementById('p799').style.display = 'flex';
    document.getElementById('p799').style.flexWrap = 'wrap';
    document.getElementById('p799').style.width = '100%';
    document.getElementById('p799').style.height = '100%';
}
function p800(){
    document.getElementById('QBpower').style.display = 'none';
    document.getElementById('imgPOWER').style.display = 'none';
    document.getElementById('p800').style.display = 'flex';
    document.getElementById('p800').style.flexWrap = 'wrap';
    document.getElementById('p800').style.width = '100%';
    document.getElementById('p800').style.height = '100%';
}
function bestPOWER(){
    document.getElementById('QBpower').style.display = 'none';
    document.getElementById('imgPOWER').style.display = 'none';
    document.getElementById('bestPOWER').style.display = 'flex';
    document.getElementById('bestPOWER').style.flexWrap = 'wrap';
    document.getElementById('bestPOWER').style.width = '100%';
    document.getElementById('bestPOWER').style.height = '100%';
}
function nonePOWER(){
    document.getElementById('QBpower').style.display = 'none';
    document.getElementById('imgPOWER').style.display = 'none';
    document.getElementById('nonePOWER').style.display = 'flex';
    document.getElementById('nonePOWER').style.justifyContent = 'center';
    document.getElementById('nonePOWER').style.alignItems = 'center';
    document.getElementById('nonePOWER').style.width = '100%';
    document.getElementById('nonePOWER').style.height = '100%';
    document.getElementById('QBpowerPrice').innerHTML = '0';
}
function p600set(index){
    document.getElementById('QBpowerPrice').innerHTML = p600price[index];
}
function p799set(index){
    document.getElementById('QBpowerPrice').innerHTML = p799price[index];
}
function p800set(index){
    document.getElementById('QBpowerPrice').innerHTML = p800price[index];
}

function intelMOTHER(){
    document.getElementById('QBmother').style.display = 'none';
    document.getElementById('imgMOTHER').style.display = 'none';
    document.getElementById('intelMOTHER').style.display = 'flex';
    document.getElementById('intelMOTHER').style.flexWrap = 'wrap';
    document.getElementById('intelMOTHER').style.width = '100%';
    document.getElementById('intelMOTHER').style.height = '100%';
}
function amdMOTHER(){
    document.getElementById('QBmother').style.display = 'none';
    document.getElementById('imgMOTHER').style.display = 'none';
    document.getElementById('amdMOTHER').style.display = 'flex';
    document.getElementById('amdMOTHER').style.flexWrap = 'wrap';
    document.getElementById('amdMOTHER').style.width = '100%';
    document.getElementById('amdMOTHER').style.height = '100%';
}
function bestMOTHER(){
    document.getElementById('QBmother').style.display = 'none';
    document.getElementById('imgMOTHER').style.display = 'none';
    document.getElementById('bestMOTHER').style.display = 'flex';
    document.getElementById('bestMOTHER').style.flexWrap = 'wrap';
    document.getElementById('bestMOTHER').style.width = '100%';
    document.getElementById('bestMOTHER').style.height = '100%';
}
function noneMOTHER(){
    document.getElementById('QBmother').style.display = 'none';
    document.getElementById('imgMOTHER').style.display = 'none';
    document.getElementById('noneMOTHER').style.display = 'flex';
    document.getElementById('noneMOTHER').style.justifyContent = 'center';
    document.getElementById('noneMOTHER').style.alignItems = 'center';
    document.getElementById('noneMOTHER').style.width = '100%';
    document.getElementById('noneMOTHER').style.height = '100%';
    document.getElementById('QBmotherPrice').innerHTML = '0';
}
function intelMOTHERset(index){
    document.getElementById('QBmotherPrice').innerHTML = intelMOTHERprice[index];
}
function amdMOTHERset(index){
    document.getElementById('QBmotherPrice').innerHTML = amdMOTHERprice[index];
}

function hddSTORAGE(){
    document.getElementById('QBstorage').style.display = 'none';
    document.getElementById('imgSTORAGE').style.display = 'none';
    document.getElementById('hddSTORAGE').style.display = 'flex';
    document.getElementById('hddSTORAGE').style.flexWrap = 'wrap';
    document.getElementById('hddSTORAGE').style.width = '100%';
    document.getElementById('hddSTORAGE').style.height = '100%';
}
function ssdSTORAGE(){
    document.getElementById('QBstorage').style.display = 'none';
    document.getElementById('imgSTORAGE').style.display = 'none';
    document.getElementById('ssdSTORAGE').style.display = 'flex';
    document.getElementById('ssdSTORAGE').style.flexWrap = 'wrap';
    document.getElementById('ssdSTORAGE').style.width = '100%';
    document.getElementById('ssdSTORAGE').style.height = '100%';
}
function bestSTORAGE(){
    document.getElementById('QBstorage').style.display = 'none';
    document.getElementById('imgSTORAGE').style.display = 'none';
    document.getElementById('bestSTORAGE').style.display = 'flex';
    document.getElementById('bestSTORAGE').style.flexWrap = 'wrap';
    document.getElementById('bestSTORAGE').style.width = '100%';
    document.getElementById('bestSTORAGE').style.height = '100%';
}
function noneSTORAGE(){
    document.getElementById('QBstorage').style.display = 'none';
    document.getElementById('imgSTORAGE').style.display = 'none';
    document.getElementById('noneSTORAGE').style.display = 'flex';
    document.getElementById('noneSTORAGE').style.justifyContent = 'center';
    document.getElementById('noneSTORAGE').style.alignItems = 'center';
    document.getElementById('noneSTORAGE').style.width = '100%';
    document.getElementById('noneSTORAGE').style.height = '100%';
    document.getElementById('QBstoragePrice').innerHTML = '0';
}
function hddSTORAGEset(index){
    document.getElementById('QBstoragePrice').innerHTML = HDDprice[index];
}
function ssdSTORAGEset(index){
    document.getElementById('QBstoragePrice').innerHTML = SSDprice[index];
}

function fullCASE(){
    document.getElementById('QBcase').style.display = 'none';
    document.getElementById('imgCASE').style.display = 'none';
    document.getElementById('fullCASE').style.display = 'flex';
    document.getElementById('fullCASE').style.flexWrap = 'wrap';
    document.getElementById('fullCASE').style.width = '100%';
    document.getElementById('fullCASE').style.height = '100%';
}
function midCASE(){
    document.getElementById('QBcase').style.display = 'none';
    document.getElementById('imgCASE').style.display = 'none';
    document.getElementById('midCASE').style.display = 'flex';
    document.getElementById('midCASE').style.flexWrap = 'wrap';
    document.getElementById('midCASE').style.width = '100%';
    document.getElementById('midCASE').style.height = '100%';
}
function bestCASE(){
    document.getElementById('QBcase').style.display = 'none';
    document.getElementById('imgCASE').style.display = 'none';
    document.getElementById('bestCASE').style.display = 'flex';
    document.getElementById('bestCASE').style.flexWrap = 'wrap';
    document.getElementById('bestCASE').style.width = '100%';
    document.getElementById('bestCASE').style.height = '100%';
}
function noneCASE(){
    document.getElementById('QBcase').style.display = 'none';
    document.getElementById('imgCASE').style.display = 'none';
    document.getElementById('noneCASE').style.display = 'flex';
    document.getElementById('noneCASE').style.justifyContent = 'center';
    document.getElementById('noneCASE').style.alignItems = 'center';
    document.getElementById('noneCASE').style.width = '100%';
    document.getElementById('noneCASE').style.height = '100%';
    document.getElementById('QBcasePrice').innerHTML = '0';
}
function fullCASEset(index){
    document.getElementById('QBcasePrice').innerHTML = fullCASEprice[index];
}
function midCASEset(index){
    document.getElementById('QBcasePrice').innerHTML = midCASEprice[index];
}

function DDR4(){
    document.getElementById('QBmemory').style.display = 'none';
    document.getElementById('imgMEMORY').style.display = 'none';
    document.getElementById('DDR4').style.display = 'flex';
    document.getElementById('DDR4').style.flexWrap = 'wrap';
    document.getElementById('DDR4').style.width = '100%';
    document.getElementById('DDR4').style.height = '100%';
}
function DDR3(){
    document.getElementById('QBmemory').style.display = 'none';
    document.getElementById('imgMEMORY').style.display = 'none';
    document.getElementById('DDR3').style.display = 'flex';
    document.getElementById('DDR3').style.flexWrap = 'wrap';
    document.getElementById('DDR3').style.width = '100%';
    document.getElementById('DDR3').style.height = '100%';
}
function bestMEMORY(){
    document.getElementById('QBmemory').style.display = 'none';
    document.getElementById('imgMEMORY').style.display = 'none';
    document.getElementById('bestMEMORY').style.display = 'flex';
    document.getElementById('bestMEMORY').style.flexWrap = 'wrap';
    document.getElementById('bestMEMORY').style.width = '100%';
    document.getElementById('bestMEMORY').style.height = '100%';
}
function noneMEMORY(){
    document.getElementById('QBmemory').style.display = 'none';
    document.getElementById('imgMEMORY').style.display = 'none';
    document.getElementById('noneMEMORY').style.display = 'flex';
    document.getElementById('noneMEMORY').style.justifyContent = 'center';
    document.getElementById('noneMEMORY').style.alignItems = 'center';
    document.getElementById('noneMEMORY').style.width = '100%';
    document.getElementById('noneMEMORY').style.height = '100%';
    document.getElementById('QBmemoryPrice').innerHTML = '0';
}
function DDR4set(index){
    document.getElementById('QBmemoryPrice').innerHTML = DDR4price[index];
}
function DDR3set(index){
    document.getElementById('QBmemoryPrice').innerHTML = DDR3price[index];
}

function airCOOLER(){
    document.getElementById('QBcooler').style.display = 'none';
    document.getElementById('imgCOOLER').style.display = 'none';
    document.getElementById('airCOOLER').style.display = 'flex';
    document.getElementById('airCOOLER').style.flexWrap = 'wrap';
    document.getElementById('airCOOLER').style.width = '100%';
    document.getElementById('airCOOLER').style.height = '100%';
}
function liquidCOOLER(){
    document.getElementById('QBcooler').style.display = 'none';
    document.getElementById('imgCOOLER').style.display = 'none';
    document.getElementById('liquidCOOLER').style.display = 'flex';
    document.getElementById('liquidCOOLER').style.flexWrap = 'wrap';
    document.getElementById('liquidCOOLER').style.width = '100%';
    document.getElementById('liquidCOOLER').style.height = '100%';
}
function bestCOOLER(){
    document.getElementById('QBcooler').style.display = 'none';
    document.getElementById('imgCOOLER').style.display = 'none';
    document.getElementById('bestCOOLER').style.display = 'flex';
    document.getElementById('bestCOOLER').style.flexWrap = 'wrap';
    document.getElementById('bestCOOLER').style.width = '100%';
    document.getElementById('bestCOOLER').style.height = '100%';
}
function noneCOOLER(){
    document.getElementById('QBcooler').style.display = 'none';
    document.getElementById('imgCOOLER').style.display = 'none';
    document.getElementById('noneCOOLER').style.display = 'flex';
    document.getElementById('noneCOOLER').style.justifyContent = 'center';
    document.getElementById('noneCOOLER').style.alignItems = 'center';
    document.getElementById('noneCOOLER').style.width = '100%';
    document.getElementById('noneCOOLER').style.height = '100%';
    document.getElementById('QBcoolerPrice').innerHTML = '0';
}
function airCOOLERset(index){
    document.getElementById('QBcoolerPrice').innerHTML = airCOOLERprice[index];
}
function liquidCOOLERset(index){
    document.getElementById('QBcoolerPrice').innerHTML = liquidCOOLERprice[index];
}

function caseFAN(){
    document.getElementById('QBfan').style.display = 'none';
    document.getElementById('imgFAN').style.display = 'none';
    document.getElementById('caseFAN').style.display = 'flex';
    document.getElementById('caseFAN').style.flexWrap = 'wrap';
    document.getElementById('caseFAN').style.width = '100%';
    document.getElementById('caseFAN').style.height = '100%';
}
function ledFAN(){
    document.getElementById('QBfan').style.display = 'none';
    document.getElementById('imgFAN').style.display = 'none';
    document.getElementById('ledFAN').style.display = 'flex';
    document.getElementById('ledFAN').style.flexWrap = 'wrap';
    document.getElementById('ledFAN').style.width = '100%';
    document.getElementById('ledFAN').style.height = '100%';
}
function bestFAN(){
    document.getElementById('QBfan').style.display = 'none';
    document.getElementById('imgFAN').style.display = 'none';
    document.getElementById('bestFAN').style.display = 'flex';
    document.getElementById('bestFAN').style.flexWrap = 'wrap';
    document.getElementById('bestFAN').style.width = '100%';
    document.getElementById('bestFAN').style.height = '100%';
}
function noneFAN(){
    document.getElementById('QBfan').style.display = 'none';
    document.getElementById('imgFAN').style.display = 'none';
    document.getElementById('noneFAN').style.display = 'flex';
    document.getElementById('noneFAN').style.justifyContent = 'center';
    document.getElementById('noneFAN').style.alignItems = 'center';
    document.getElementById('noneFAN').style.width = '100%';
    document.getElementById('noneFAN').style.height = '100%';
    document.getElementById('QBfanPrice').innerHTML = '0';
}
function caseFANset(index){
    document.getElementById('QBfanPrice').innerHTML = caseFANprice[index];
}
function ledFANset(index){
    document.getElementById('QBfanPrice').innerHTML = ledFANprice[index];
}

function showPrice(){
    var p1 = Number(document.getElementById('QBcpuPrice').innerHTML);
    var p2 = Number(document.getElementById('QBmotherPrice').innerHTML);
    var p3 = Number(document.getElementById('QBmemoryPrice').innerHTML);
    var p4 = Number(document.getElementById('QBgraphicPrice').innerHTML);
    var p5 = Number(document.getElementById('QBstoragePrice').innerHTML);
    var p6 = Number(document.getElementById('QBpowerPrice').innerHTML);
    var p7 = Number(document.getElementById('QBcasePrice').innerHTML);
    var p8 = Number(document.getElementById('QBcoolerPrice').innerHTML);
    var p9 = Number(document.getElementById('QBfanPrice').innerHTML);
    var result = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
    document.getElementById('QBprice').innerHTML = String(result);
}
function soon(){
    window.alert('Separate sale of components will be soon');
}