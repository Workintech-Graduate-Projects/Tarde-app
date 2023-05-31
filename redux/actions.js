import axios from "axios";


export const SEHIR ="SEHIR";
export const A_PERSONEL_EDİT ="A_PERSONEL_EDİT";
export const A_MERKEZ_GET ="A_MERKEZ_GET";
export const TOGGLE ="TOGGLE";
export const MERKEZ ="MERKEZ";



export const handleSehir=(item)=>({
  
    type: SEHIR, payload:item
})
export const editMerkez=(item)=>({
  
    type: A_MERKEZ_EDİT, payload:item
})
export const toggleHeader=()=>({
  
    type: TOGGLE
})



export const editMerkezAPI = (item) => (dispatch) => {
    axios
      .post("https://tade-be.herokuapp.com/api/table/", item)
      .then((res) => {
        if (res.status === 200) {
          dispatch(editMerkez(res.data.json));
          console.log("Düzeltildi", res.data.json);
        }
      })
      .catch((error) => console.log(error));
  };
export const getMerkezAPI = (id,table) =>  async (dispatch) => {
    await axios
      .get(`http://localhost:9000/api/table/admin/${table}/${id}`)
      .then((res) => {
      return dispatch({type:A_MERKEZ_GET , payload:res.data});
      
        })
        
      .catch((error) => console.log(error));
  };
// export const editPersonelAPI = (id,table,value) =>  async (dispatch) => {
//     await axios
//       .put(`http://localhost:9000/api/table/admin/${table}/${id}`,value)
//       .then((res) => {
//       return dispatch({type:A_PERSONEL_EDİT ,payload:res.data});
      
//         })
        
//       .catch((error) => console.log(error));
//   };
export const getSehirAPI = () =>  async (dispatch) => {
    await axios
      .get(`http://localhost:9000/api/table/admin/sehir`)
      .then((res) => {
      return dispatch({type:SEHIR, payload:res.data});
      
        })
        
      .catch((error) => console.log(error));
    await axios
      .get(`http://localhost:9000/api/table/admin/merkez`)
      .then((res) => {
      return dispatch({type:MERKEZ, payload:res.data});
      
        })
        
      .catch((error) => console.log(error));
  };
  

  