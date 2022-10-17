

const  memory = [];

document.getElementById('id').addEventListener('click', event => {
  console.log("tri id")
  sortData((a, b) => b.id - a.id);
});

document.getElementById('name').addEventListener('click', event => {
    console.log("tri name")
  sortData((a, b) => {
    if (b.name > a.name) return -1;
    else return 1;
  });
});

function sortData(compare) {

  for (let item of memory) {
    item.elt.remove();
  }

  memory.sort(compare);

  for (let item of memory) {
     document.body.append(item.elt);
  }
}

const getData= function() {
  //const data = Array.from(["A", "B", "C"], x => x + x)
  //const data = ["AAAA","BBBB","CCCC","DDDD"];
  const data = [...Array(10)].map(() => {
    const randomStr = "ABCDEFGHIJ".split('').sort(() => .5-Math.random()).join('');
    return randomStr.slice(0, Math.random()*10+1)
  })
  data.forEach( (item,i) => {
    const root = document.createElement('div');
    const name = document.createElement('p');
    const id = document.createElement('p');

    name.textContent = item;
    i = Math.floor(Math.random()*new Date().getTime());
    id.textContent = i

    root.append(name, id);

    memory.push({ elt: root, id: i, name: item });
    document.body.append(root);
  }
  )
}

getData();