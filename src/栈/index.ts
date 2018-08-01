/**
 * 栈是一种遵从后进先出 (LIFO) 原则的有序合集. 
 * 新添加的或待删除的元素都保存在栈的同一端, 称作栈顶, 另一端就叫栈底部. 
 * 在栈里, 新元素都靠近栈顶, 旧元素都接近栈底部.
 */
export class Stack {
	private name:string
	private items:any[]
	constructor(name:string = '栈', items:any[] = []) {
		this.name = name
		this.items = items
	}
	push(el:any):void { // 添加一个新的元素到栈顶
		this.items.push(el)
	}
	pop():void { // 删除栈顶元素
		return this.items.pop()
	}
	peek():any { // 返回栈顶元素
		let peek:any = this.items[this.items.length - 1]
		return peek
	}
	isEmpty():boolean { // 判断栈内是否为空
		return this.items.length === 0
	}
	clear():void { // 移除栈里的所有元素
		this.items = []
	}
	size():number {
		let size = this.items.length
		return size
	}
	print():void {
		console.log(`${this.name}:`, this.items)
	}
}

/**
 * 十进制转 二, 八, 十六进制
 * num 传入 十进制的整数
 * base 传入 2, 8, 16
 */
function decimalismToOthers(num: number, base:number):string {
	const digits = '0123456789ABCDEF'
	let n = num
	let S = new Stack('S')
	while(n > 0) {
		let r = Math.floor(n % base)
		
		if (base === 16) {
			S.push(digits[r])
		} else {
			S.push(r)
		}
		n = Math.floor(n / base)
	}
	let len = S.size()
	let result = ''
	for (let i = 0; i < len; i++) {
		result += S.pop()
	}
	if (base === 16) {
		result = '0x' + result
	}
	return result
}

// console.log(decimalismToOthers(10, 16))