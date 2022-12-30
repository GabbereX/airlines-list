export function generateId(): number {
	return +Math.random().toString().slice(-5)
}
