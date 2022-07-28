class Stack {
  constructor (...items) {
    this.items = [...items];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length == '0') {
      return 'Underflow';
    }

    return this.items.pop();
  }

  peek() {
    const lastIndex = this.items.length - 1;
    return this.items[lastIndex];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    let str = ''

    for (let i = 0; i < this.size; i++) {
      str += this.items[i];
    }

    return str;
  }

  // Added by me
  joinBySymbol(symbol) {
    const stackStrArr = [...this.printStack()];
    console.log(stackStrArr);
    return stackStrArr.join(symbol);
  }

  get size() {
    return this.items.length;
  }
}

const stack = new Stack(1, 2);
stack.push('Valodya');
console.log(stack.joinBySymbol(','));
console.log(stack);


class TypedStack extends Stack {
  constructor(Type, ...items) {
    if (Type !== Type?.prototype?.constructor) {
      throw new TypeError('Type of the Stack must be a constructor');
    }

    const isInvalidItem = items.some((item) => item.__proto__ !== Type.prototype);

    if (isInvalidItem) {
      throw new TypeError('All items must match the specified type');
    }

    super(...items);

    TypedStack.Type = Type;
  }

  push(item) {
    if (item.__proto__ !== TypedStack.Type.prototype) {
      throw new TypeError('Inserted item must match specified type');
    }

    super.push(item);
  }
}


const typedStack = new TypedStack(Number, 1, 2);
typedStack.push(8);
typedStack.push('ddd');
console.log(typedStack);