var reservedwords;
function createSymbolTable(){
    reservedwords = new HashMap('string','string');
    reservedwords.put('absolute','Memory Addressing');
    reservedwords.put('and','Logical Operator');
    reservedwords.put('array','Type Variable');
    reservedwords.put('asm','Assemnly Directive');
    reservedwords.put('begin','Initiator');
    reservedwords.put('case','Multiple Decision Statement');
    reservedwords.put('const','Constant Variable Declarator');
    reservedwords.put('constructor','Class Constructor');
    reservedwords.put('destructor','Class Destructor');
    reservedwords.put('div','Operator Division');
    reservedwords.put('do','Loop initiator');
    reservedwords.put('downto','loop decrementor');
    reservedwords.put('else','Conditional Statement');
    reservedwords.put('end','Terminator');
    reservedwords.put('file','Type Variable');
    reservedwords.put('for','Loop Instruction');
    reservedwords.put('function','non void function declarator');
    reservedwords.put('goto','Unconditional Jump');
    reservedwords.put('if','Conditional Statement');
    reservedwords.put('implementation','Implementation Block');
    reservedwords.put('in','for-in loop statement');
    reservedwords.put('inherited','Inheritance Statement');
    reservedwords.put('inline','Compiler Directive');
    reservedwords.put('interface','Interface Block');
    reservedwords.put('label','Program Label (for jumps)');
    reservedwords.put('mod','Operator Module');
    reservedwords.put('nil','type variable : null');
    reservedwords.put('not','Logical Operator');
    reservedwords.put('object','Type Variable');
    reservedwords.put('of','Multiple Decision Statement');
    reservedwords.put('operator','Type Variable');
    reservedwords.put('or','Logical Operator');
    reservedwords.put('packed','Memory Management Statement');
    reservedwords.put('procedure','void function declarator');
    reservedwords.put('program','Name of the program');
    reservedwords.put('record','Type Variable');
    reservedwords.put('reintroduce','Compiler Directive');
    reservedwords.put('repeat','Loop Instruction');
    reservedwords.put('self','Object Self Reference Parameter');
    reservedwords.put('set','Type Variable');
    reservedwords.put('shl','Operator Left Bit Shift');
    reservedwords.put('shr','Operator Right Bit Shift');
    reservedwords.put('string','Variable Type');
    reservedwords.put('then','Conditional Initiator');
    reservedwords.put('to','Delimitator');
    reservedwords.put('type','Type Declaration');
    reservedwords.put('unit','Unit Specification');
    reservedwords.put('uses','Used Units');
    reservedwords.put('var','Variable Declaration');
    reservedwords.put('while','Loop Instruction');
    reservedwords.put('with','Element Accesor');
    reservedwords.put('xor','Logical Operator');
    reservedwords.put('-','Arithmetic Operator');
    reservedwords.put('+','Arithmetic Operator');
    reservedwords.put('*','Arithmetic Operator');
    reservedwords.put('/','Arithmetic Operator');    
    reservedwords.put('<','Relational Operator');
    reservedwords.put('<=','Relational Operator');
    reservedwords.put('>=','Relational Operator');
    reservedwords.put(':=','Relational Operator');
    reservedwords.put('=','Assignment Operator');
    reservedwords.put(':','Type Declaration');
    reservedwords.put('integer','Variable Type');
    reservedwords.put(',','Separator');
    reservedwords.put(';','End');
    reservedwords.put('(','Expression Begin');
    reservedwords.put(')','Expression End');
    reservedwords.put('return','');
    reservedwords.put("'", 'String Delimitator');
}
var a ="k := 510+8-b;";
createSymbolTable();
window.onload = function(){
var ver = document.getElementById('verifica');
if(ver){
  ver.addEventListener('click', verify, false);
}
}

function verify(){
    var data=document.getElementById('pascal').value;
    var reg= reservedwords.getEntries();
    var protoident= {key: null, value: null, position:null};
    var identifier=[];
    var b=data;
    for(var i =0; i< reg.length;i++)
    {
        var index= b.indexOf(reg[i].key);
        if(index != -1)
        {   
            var aux = Object.create(protoident);
            aux.key=reg[i].key;
            aux.value=reg[i].value;
            aux.position=index;
            identifier.push(aux);
            b=b.replace(reg[i].key,spaceSetter(reg[i].key.length));
        }
    }
    var remainder= b.split(" ");
    for(var i = 0; i<remainder.length;i++)
    {
        var condition=isNaN(parseInt(remainder[i]));
        if(remainder[i].length>0 && condition )
        {
            var aux= Object.create(protoident);
            aux.key=remainder[i];
            aux.value='Variable';
            aux.position=data.indexOf(remainder[i]);
            identifier.push(aux);            
        }
        else if(!condition)
        {
            var aux2 = Object.create(protoident);
            aux2.key=remainder[i];
            aux2.value='Number';
            aux2.position=data.indexOf(remainder[i]);
            identifier.push(aux2);
        }
    }
    identifier.sort(function compare(a,b){return a.position-b.position;});
    for(var i = 0; i<identifier.length;i++){
        var result= document.createElement('h3');
        console.log(identifier[i].key + ' ||| '+identifier[i].value+"\n")
        result.innerHTML=identifier[i].key + ' ||| '+identifier[i].value+"<br />";
    }
}
function spaceSetter(len) {
    var returnstr= "";
    for (var i = 0 ; i<len;i++)
    {
        returnstr+= " ";
    }
    return returnstr;
}