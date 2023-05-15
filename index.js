// test 1
const cats = ["Milo", "Otis", "Garfield"];

//test two
function destructivelyAppendCat(name) {
    cats.push(name);
  }

//test three
function destructivelyPrependCat(name) {
    cats.unshift(name);
  }

  //test four
  function destructivelyRemoveLastCat() {
    cats.pop();
  }

  //test five
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }

  //test six
function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  return [...cats, name];
}
//test seven
function prependCat(name) {
  return [name, ...cats];
}
//test eight
function removeLastCat() {
    const newCatsArray = cats.slice(0, -1);
    return newCatsArray;
}
//test nine
function removeFirstCat() {
    return cats.slice(1);
  }