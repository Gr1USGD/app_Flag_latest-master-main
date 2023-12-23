import firestore from '@react-native-firebase/firestore';
// import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
export const getQuizzes = async () => {
    return await firestore().collection('Quizz').get();
  };
//Get quiz by id
export const getQuizById = async currentQuizId => {
  return await firestore().collection('Quizz').doc(currentQuizId).get();
};
//Get questions by quiz id
export const getQuestionsByQuizId = async currentQuizId => {
  return await firestore().
  collection('Quizz').
  doc(currentQuizId).
  collection('QNA')
  .get();
};
//Find user by id
export const getUserById = async (uid) => {
  return await firestore()
    .collection('users')
    .doc(uid)
    .get();
}
//Create new user
export const createUser = async (uid,data) => {
  return await firestore()
  .collection('users')
  .doc(uid)
  .set(data,{merge:true});
};

//Get all users
export const getAllUsers = async () => {
  return await firestore()
  .collection('users')
  .get();
};
// Create rank
export const createRank = (uid, data) => {
  return firestore()
  .collection('Ranking')
  .doc(uid)
  .set(data, { merge: true });
}
//Get rank
export const getRankById = async (uid) => {
  return await firestore()
  .collection('Ranking')
  .doc(uid)
  .get();
};
//Update Score
export const updateScore = async (uid,data) => {
  return await firestore()
  .collection('users')
  .doc(uid)
  .update(data);
};
export const updateAnswer = async (uid,data) => {
  return await firestore()
  .collection('users')
  .doc(uid)
  .update(data);
};
export const getQuizzes_2 = async () => {
  return await firestore().collection('Quizz_2').get();
};

// Get Quiz Details by id
export const getQuizById_2 = async currentQuizId => {
  return await firestore().collection('Quizz_2').doc(currentQuizId).get();
};



export const getQuestionsByQuizId_2 = async currentQuizId => {
  return await firestore()
    .collection('Quizz_2')
    .doc(currentQuizId)
    .collection('QNA')
    .get();
};
