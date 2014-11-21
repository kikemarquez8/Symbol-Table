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
    reservedwords.put('string','Data Type');
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
}