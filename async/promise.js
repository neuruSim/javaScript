//4. Error Heandling

const getHen = () =>
  new Promise((resolve, reject) => { 
    setTimeout(() => resolve('π'), 1000);
  });

const getEgg = hen =>
  new Promise((resolve, reject) => { 
    //setTimeout(() => resolve(`${hen} => π₯`), 1000);
    setTimeout(() => reject(new Error(`${hen} => π₯`)), 1000);  //μλ¬κ° μ€κ°μ λ°μλλ€λ©΄? μ΄μμμ΄λμ¨λ€.

  });

const cook = egg =>
  new Promise((resolve, reject) => { 
    setTimeout(() => resolve(`${egg} => π³`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch(error =>{
      return 'π';        // << μλ‘·κ² μ€κ°μ λ£μ΄μ μΊμΉν  μ μλ€. 
  })                      //.then(hen => getEgg(hen))
  .then(cook)
  .then(console.log)
  .catch(console.log);  // << μκΈ° ν¨λ€λ§νλ©΄ μΊμΉκ° μ‘νμ§
  //.then(egg => cook(egg))
  //.then(meal => console.log(meal));
  //νκ°μ§λ§ μ½λ°±μ λ¬λ λλ μλ΅μ΄ κ°λ₯ ! 