  describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',() => {
      assert.equal(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    it('deberia retorna "0123456789" para "0123456789" con n numeros',()=>{
      assert.equal(cipher.encode(33,'0123456789'),'0123456789');
    });
    it('deberia retorna vacio para un espacio con n numeros',()=>{
      assert.equal(cipher.encode(33,'A B'),'H I');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33',() => {
      assert.equal(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG'),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
    it('deberia retorna "0123456789" para "0123456789" con n numeros',()=>{
      assert.equal(cipher.decode(33,'0123456789'),'0123456789');
    });
    it('deberia retorna vacio para un espacio con n numeros',()=>{
      assert.equal(cipher.decode(33,'H I'),'A B');
    });
  });

  describe('cipher.createCipherWithOffset', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });
<<<<<<< HEAD
    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado',()=>{
      assert.isObject(cipher.createCipherWithOffset(33),'objeto');
     });
      it('createCipherWithOffset().encode deberia ser una funcion',()=>{
        assert.equal(typeof cipher.createCipherWithOffset(33).encode,'function');
      });
      it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',() => {
        assert.equal(cipher.createCipherWithOffset(33).encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ'),'HIJKLMNOPQRSTUVWXYZABCDEFG');
      });
      it('createCipherWithOffset().decode deberia ser una funcion',()=>{
        assert.equal(typeof cipher.createCipherWithOffset(33).decode,'function');
      });
      it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',() => {
        assert.equal(cipher.createCipherWithOffset(33).decode('HIJKLMNOPQRSTUVWXYZABCDEFG'),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
      });
   
=======

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado',()=>{
      assert.isObject(cipher.createCipherWithOffset(33),'objeto con dos funciones');
    });
    it('createCipherWithOffset encode debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset(33).encode, 'function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',() => {
      assert.equal(cipher.createCipherWithOffset(33).encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ'),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    it('createCipherWithOffset decode debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset(33).decode, 'function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33',() => {
      assert.equal(cipher.createCipherWithOffset(33).decode('HIJKLMNOPQRSTUVWXYZABCDEFG'),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
    
>>>>>>> d7cad1b03676670a00f33184a3e3fc5fb6080a98

  });
});
