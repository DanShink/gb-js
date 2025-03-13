export default function cpu() {
	console.log("I am a cpu");
}

let cpu = {
	_clock: { m: 0, t: 0 },

	_r: {
		// 8 Bit
		a: 0,
		b: 0,
		c: 0,
		d: 0,
		e: 0,
		h: 0,
		l: 0,
		f: 0,
		// 16 Bit
		pc: 0,
		sp: 0,
	},
};
