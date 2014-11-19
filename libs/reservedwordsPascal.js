function createSymbolTable() {
    this.reservedWords = new HashMap('string', 'string');

    reservedWords.put('absolute', 'Memory Addressing');
    reservedWords.put('and', 'Logical Operator');
    reservedWords.put('array', 'Type Variable');
    reservedWords.put('asm', 'Assembly Directive');
    reservedWords.put('begin', 'Initiator');
    reservedWords.put('case', 'Multiple Decision Statement');
    reservedWords.put('const', 'Constant Variable Declaration');
    reservedWords.put('constructor', 'Class Constructor');
    reservedWords.put('destructor', 'Class Destructor');
    reservedWords.put('div', 'Operator Division');
    reservedWords.put('do', 'Loop initiator');
    reservedWords.put('downto', 'Loop Decremental');
    reservedWords.put('else', 'Conditional Statement');
    reservedWords.put('end', 'Terminator');
    reservedWords.put('file', 'Type Variable');
    reservedWords.put('for', 'Loop Instruction');
    reservedWords.put('function', 'Non Void Function Declaration');
    reservedWords.put('goto', 'Unconditional Jump');
    reservedWords.put('if', 'Conditional Statement');
    reservedWords.put('implementation', 'Implementation Block');
    reservedWords.put('in', 'For-in Loop Statement');
    reservedWords.put('inherited', 'Inheritance Statement');
    reservedWords.put('inline', 'Compiler Directive');
    reservedWords.put('interface', 'Interface Block');
    reservedWords.put('label', 'Program Label (for jumps)');
    reservedWords.put('mod', 'Operator Module');
    reservedWords.put('nil', 'Type Variable : null');
    reservedWords.put('not', 'Logical Operator');
    reservedWords.put('object', 'Type Variable');
    reservedWords.put('of', 'Multiple Decision Statement');
    reservedWords.put('operator', 'Type Variable');
    reservedWords.put('or', 'Logical Operator');
    reservedWords.put('packed', 'Memory Management Statement');
    reservedWords.put('procedure', 'Void Function Declaration');
    reservedWords.put('program', 'Name of the program');
    reservedWords.put('record', 'Type Variable');
    reservedWords.put('reintroduce', 'Compiler Directive');
    reservedWords.put('repeat', 'Loop Instruction');
    reservedWords.put('self', 'Object Self Reference Parameter');
    reservedWords.put('set', 'Type Variable');
    reservedWords.put('shl', 'Operator Left Bit Shift');
    reservedWords.put('shr', 'Operator Right Bit Shift');
    reservedWords.put('string', 'Data Type');
    reservedWords.put('then', 'Conditional Initiator');
    reservedWords.put('to', 'Deliminator');
    reservedWords.put('type', 'Type Declaration');
    reservedWords.put('unit', 'Unit Specification');
    reservedWords.put('uses', 'Used Units');
    reservedWords.put('var', 'Variable Declaration');
    reservedWords.put('while', 'Loop Instruction');
    reservedWords.put('with', 'Element Access');
    reservedWords.put('xor', 'Logical Operator');
}