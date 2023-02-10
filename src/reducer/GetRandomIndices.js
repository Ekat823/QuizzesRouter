const getRandomIndices = (data) => {

  let dataIndices = Array.from({ length: data.length }, (v, i) => i);
  let indices = [...dataIndices];
  let shuffledIndices = indices.sort(() => 0.5 - Math.random());
  let newIndices = []
  if (shuffledIndices.length % 4 !== 0) {
    if (shuffledIndices.length % 4 === 1) {
      newIndices = [...shuffledIndices, shuffledIndices[0], shuffledIndices[1], shuffledIndices[2]];
    }
    if (shuffledIndices.length % 4 === 2) {
      newIndices = [...shuffledIndices, shuffledIndices[0], shuffledIndices[1]];
    }
    if (shuffledIndices.length % 4 === 3) {
      newIndices = [...shuffledIndices, shuffledIndices[0]];
    }

  } else {
    newIndices = [...shuffledIndices];
  }

  //console.log('newIndices', newIndices)

  let finalIndices = [];
  while (newIndices.length >= 4) {
    finalIndices.push(newIndices.splice(0, 4));
  }

  //console.log('finalIndices', finalIndices);

  return finalIndices;
}

export default getRandomIndices