import { createStore } from 'vuex'
//counter 하위 상태 모듈 가져오기
import counter from './counter';
import axiosConfig from '@/apis/axiosConfig';

//Store 생성 및 내보내기
export default createStore({
  //RootState 정의
  state: {
    user: "",
    accessToken: ""
  },
  //RootState를 읽는 메소드 정의
  getters: {
    getUser(state, getters, rootState, rootGetters) {
      /*
      console.group("RootState Getters/getUser");
      console.log("state:", state);               // root state 객체
      console.log("getters:", getters);           // root getters 객체
      console.log("rootState:", rootState);       // root stat 객체
      console.log("rootGetters:", rootGetters);   // root getters 객체
      console.groupEnd();
      */      
      return state.user;
    },
    getAccessToken(state, getters, rootState, rootGetters) {
      return state.accessToken;
    }
  },
  //RootState를 변경하는 메소드 정의(동기 방식)
  mutations: {
    setUser(state, payload) {
      /*
      console.group("RootState Mutations/setUser");
      console.log("state:", state);     // root state 객체
      console.log("payload:", payload); // 전달된 데이터
      console.groupEnd();
      */
      state.user = payload;
    },
    setAccessToken(state, payload) {
      state.accessToken = payload;
    }    
  },
  //RootState를 변경하는 메소드 정의(비동기 방식)
  actions: {
    //payload: {mid:"xxxxx"}
    loginAction(context, payload) {
      new Promise((resolve, reject) => {
        //서버와 통신 작업(?초 소요)
        //로그인 성공
          resolve({result:"success", mid:payload.mid});
        //로그인 실패
        //reject({result:"fail", reason:"password is wrong"});
      })
      .then((data) => {
        console.log("로그인 성공");
        context.commit("setUser", data.mid);
      })
      .catch((error) => {
        console.log("로그인 실패");
      });
    },

    //브라우저가 재실행될때 인증 정보를 전역상태로 복구
    loadAuth(context, payload) {
      //user 전역 상태 설정
      context.commit("setUser", localStorage.getItem("user") || "");
      //accessToken 전역 상태 설정
      const accessToken = localStorage.getItem("accessToken") || "";
      context.commit("setAccessToken", accessToken);
      //Axios 요청 공통 헤더에 인증 정보 추가
      if(accessToken !== "") {
        axiosConfig.addAuthHeader(accessToken);
      }
    },

    //로그인 성공했을 때 인증 정보를 전역 상태 및 로컬 파일에 저장
    saveAuth(context, payload) {
      /*
      payload = {
        mid: "user",
        accessToken: "xxxxx.yyyyy.zzzzz"
      }
      */
      //전역 상태값 변경
      context.commit("setUser", payload.mid);
      context.commit("setAccessToken", payload.accessToken);
      //로컬 스토리지에 저장
      localStorage.setItem("user", payload.mid);
      localStorage.setItem("accessToken", payload.accessToken);
      //Axios 요청 공통 헤더에 인증 정보 추가
      axiosConfig.addAuthHeader(payload.accessToken);
    },

    //로그아웃 할때 인증 정보를 모두 삭제
    deleteAuth(context, payload) {
      //전역 상태값 변경
      context.commit("setUser", "");
      context.commit("setAccessToken", "");
      //로컬 파일에서 삭제
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      //Axios 요청 공통 헤더에 인증 정보 제거
      axiosConfig.removeAuthHeader();
    }    
  },
  //RootState 하위 상태 모듈 추가
  modules: {
    counter
  }
})
