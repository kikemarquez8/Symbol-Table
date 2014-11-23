var reservedWords;

function createSymbolTable() {
	reservedWords = new HashMap('string', 'string');
	reservedWords.put('absolute', 'Memory Addressing');
	reservedWords.put('and', 'Logical Operator');
	reservedWords.put('array', 'Type Variable');
	reservedWords.put('asm', 'Assemnly Directive');
	reservedWords.put('begin', 'Initiator');
	reservedWords.put('case', 'Multiple Decision Statement');
	reservedWords.put('const', 'Constant Variable Declarator');
	reservedWords.put('constructor', 'Class Constructor');
	reservedWords.put('destructor', 'Class Destructor');
	reservedWords.put('div', 'Operator Division');
	reservedWords.put('do', 'Loop initiator');
	reservedWords.put('downto', 'loop decrementor');
	reservedWords.put('else', 'Conditional Statement');
	reservedWords.put('end', 'Terminator');
	reservedWords.put('file', 'Type Variable');
	reservedWords.put('for', 'Loop Instruction');
	reservedWords.put('function', 'non void function declarator');
	reservedWords.put('goto', 'Unconditional Jump');
	reservedWords.put('if', 'Conditional Statement');
	reservedWords.put('implementation', 'Implementation Block');
	reservedWords.put('in', 'for-in loop statement');
	reservedWords.put('inherited', 'Inheritance Statement');
	reservedWords.put('inline', 'Compiler Directive');
	reservedWords.put('interface', 'Interface Block');
	reservedWords.put('label', 'Program Label (for jumps)');
	reservedWords.put('mod', 'Operator Module');
	reservedWords.put('nil', 'type variable : null');
	reservedWords.put('not', 'Logical Operator');
	reservedWords.put('object', 'Type Variable');
	reservedWords.put('of', 'Multiple Decision Statement');
	reservedWords.put('operator', 'Type Variable');
	reservedWords.put('or', 'Logical Operator');
	reservedWords.put('packed', 'Memory Management Statement');
	reservedWords.put('procedure', 'void function declarator');
	reservedWords.put('program', 'Name of the program');
	reservedWords.put('record', 'Type Variable');
	reservedWords.put('reintroduce', 'Compiler Directive');
	reservedWords.put('repeat', 'Loop Instruction');
	reservedWords.put('self', 'Object Self Reference Parameter');
	reservedWords.put('set', 'Type Variable');
	reservedWords.put('shl', 'Operator Left Bit Shift');
	reservedWords.put('shr', 'Operator Right Bit Shift');
	reservedWords.put('string', 'Variable Type');
	reservedWords.put('then', 'Conditional Initiator');
	reservedWords.put('to', 'Delimitator');
	reservedWords.put('type', 'Type Declaration');
	reservedWords.put('unit', 'Unit Specification');
	reservedWords.put('uses', 'Used Units');
	reservedWords.put('var', 'Variable Declaration');
	reservedWords.put('while', 'Loop Instruction');
	reservedWords.put('with', 'Element Accesor');
	reservedWords.put('xor', 'Logical Operator');
	reservedWords.put('-', 'Arithmetic Operator');
	reservedWords.put('+', 'Arithmetic Operator');
	reservedWords.put('*', 'Arithmetic Operator');
	reservedWords.put('/', 'Arithmetic Operator');
	reservedWords.put('<', 'Relational Operator');
	reservedWords.put('<=', 'Relational Operator');
	reservedWords.put('>=', 'Relational Operator');
	reservedWords.put(':=', 'Relational Operator');
	reservedWords.put('=', 'Assignment Operator');
	reservedWords.put(':', 'Type Declaration');
	reservedWords.put('integer', 'Variable Type');
	reservedWords.put(',', 'Separator');
	reservedWords.put(';', 'End');
	reservedWords.put('(', 'Expression Begin');
	reservedWords.put(')', 'Expression End');
	reservedWords.put('return', '');
	reservedWords.put("'", 'String Delimitator');
}

var a = "k := 510+8-b;";
createSymbolTable();

window.onload = function () {
	var ver = document.getElementById('verifica');
	if (ver) {
		ver.addEventListener('click', verify, false);
	}
};

function verify() {
	var data = document.getElementById('pascal').value;
	var reg = reservedWords.getEntries();
	var protoident = {key: null, value: null, position: null};
	var identifier = [];
	var b = data;

	for (var i = 0; i < reg.length; i++) {
		var index = b.indexOf(reg[i].key);
		if (index != -1) {
			var aux = Object.create(protoident);
			aux.key = reg[i].key;
			aux.value = reg[i].value;
			aux.position = index;
			identifier.push(aux);
			b = b.replace(reg[i].key, spaceSetter(reg[i].key.length));
		}
	}

	var remainder = b.split(" ");

	for (var i = 0; i < remainder.length; i++) {
		var condition = isNaN(parseInt(remainder[i]));
		if (remainder[i].length > 0 && condition) {
			var aux = Object.create(protoident);
			aux.key = remainder[i];
			aux.value = 'Variable';
			aux.position = data.indexOf(remainder[i]);
			identifier.push(aux);
		}
		else if (!condition) {
			var aux2 = Object.create(protoident);
			aux2.key = remainder[i];
			aux2.value = 'Number';
			aux2.position = data.indexOf(remainder[i]);
			identifier.push(aux2);
		}
	}

	identifier.sort(function compare(a, b) {
		return a.position - b.position;
	});

	for (var i = 0; i < identifier.length; i++) {
		var result = document.createElement('h3');
		console.log(identifier[i].key + ' ||| ' + identifier[i].value + "\n")
		result.innerHTML = identifier[i].key + ' ||| ' + identifier[i].value + "<br />";
	}
}
function spaceSetter(len) {
	var str = "";

	for (var i = 0; i < len; i++) str += " ";
	return str;
}