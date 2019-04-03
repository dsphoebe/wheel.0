import classes from './classes';

describe('classes', () => {
    it('接受 1 个 className', () => {
        const result = classes('a');
        expect(result).toEqual('a');
    });
    it('接受 2 个 className', () => {
        const result = classes('a', 'b');
        expect(result).toEqual('a b');
    });
    it('接受 1 个 undefined 和 1 个 className', () => {
        const result = classes('undefined', 'a');
        expect(result).toEqual('a');
    });
    it('接受各种奇怪的值', () => {
        const result = classes('undefined', 'a', '是的', false, null);
        expect(result).toEqual('a 是的');
    });
    it('接受各种奇怪的值', () => {
        const result = classes('undefined', 'a', '是的', false, null);
        expect(result).toEqual('a 是的');
    });
    it('接受 0 个值', () => {
        const result = classes();
        expect(result).toEqual('');
    })
});