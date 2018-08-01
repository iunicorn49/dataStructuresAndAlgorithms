/**
 * 队列是遵循先进先出 (FIFO) 原则的一组有序的项.
 * FIFO: First In First Out
 * 队列在尾部添加新的元素, 并从顶部移除元素.
 * 最新添加的元素必须排在队列的末尾.
 */
export default class Queue {
	private items:any[]
	constructor(items:any[] = []) {
		this.items = items
	}
	enqueue(el:any):void { // 在队列后面添加一个或多个元素
		if (Array.isArray(el)) {
			this.items.push(...el)
		} else {
			this.items.push(el)
		}
	}
	dequeue():any { // 删除队列第一个元素
		return this.items.shift()
	}
	front():void { // 返回队列第一个元素, 不影响队列
		return this.items[0]
	}
	isEmpty():boolean { // 判断队列是否为空
		return this.items.length === 0
	}
	size():number { // 查看队列大小
		return this.items.length
	}
	print():void {
		console.log(this)
	}
}
