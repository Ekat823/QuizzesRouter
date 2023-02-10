import getRandomIndices from './GetRandomIndices';

const generateAnswers = (state) => {
	
	const userFile = state.userFile;

  console.log('userFile', userFile);
	
	const quizFile = userFile.map((ee, i) => Object.keys(ee).map(e => ({
		header: e,
		value: userFile[i][e]
	})))

console.log('quizFile', quizFile);

	return getRandomIndices(quizFile).map(el => {
		return el.map((elel) => {
			return [...quizFile[elel]];     
		});   
	});
  
}

export default generateAnswers