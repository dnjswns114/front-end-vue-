export default {
  //모듈의 이름을 접두사로 사용
  namespaced: true,
  //상태 정의
  state: {
    count: 0
  },
  //상태값을 읽는 메소드 정의
  getters: {
    getCount(state, getters, rootState, rootGetters) {
      /*
      console.group("Counter Getters/getCount");
      console.log("state:", state);               // counter state 객체
      console.log("getters:", getters);           // counter getters 객체
      console.log("rootState:", rootState);       // root stat 객체
      console.log("rootGetters:", rootGetters);   // root getters 객체
      console.groupEnd();
      */  
      return state.count;
    }
  },
  //상태값을 변경하는 메소드 정의(동기 방식)
  mutations: {
    setCount(state, payload) {
      /*
      console.group("Counter Mutations/setCount");
      console.log("state:", state);     // counter state 객체
      console.log("payload:", payload); // 전달된 데이터
      console.groupEnd();
      */
      state.count += payload;
    }
  },
  //상태값을 변경하는 메소드 정의(비동기 방식)
  actions: {
    addCount(context, payload) {
      /* 
      console.group("Counter Actions/addCount");
      console.log("context:", context);
      console.log("payload:", payload); //payload: 10
      console.groupEnd();
      */
      
      const work = async () => {
        try {
          const result = await new Promise((resolve, reject) => {
            //?초 소요
            //성공
            resolve({result:"success", amount:payload});
            //실패
            //reject({result:"fail", reason:"password is wrong"});
          });
          context.commit("setCount", result.amount);
        } catch(error) {
          console.log(error.reason);
        }
      };
      work();
    }    
  }
};