/**
 * 链表存储有序的元素集合, 但是不同于数组, 链表中的元素在内存中并不是连续放置的.
 * 每个元素由一个存储元素本身的节点和一个指向下一个元素的引用(也称指针或链接)组成.
 * 相对于传统数组, 链表的好处在于, 添加或移动元素时不需要移动其他元素, 然而, 链表需要使用指针.
 * 数组的另一个细节是可以直接访问任意位置的元素, 而访问链表中的元素, 需要从表头开始一直迭代到目标元素.
 */

export class Node {
	private el:any
	private next:any
	constructor(el:any, next:any = null) {
		this.el = el
		this.next = next
	}
}

export class LinkedList {
	private nodeList:Node[]
	constructor(head:Node = null, nodeList:Node[] = [head]) {
		this.nodeList = nodeList
	}
	append(el:Node):void {
		this.nodeList.push(el)
	}
	print():void {
		console.log(this)
	}
}

let a = new LinkedList()
a.print()